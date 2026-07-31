// Shared plumbing for the QA runners: a static file server, a headless Chrome,
// and just enough Chrome DevTools Protocol to navigate and evaluate.
//
// No dependencies. It leans on Node's built-in http server, the global
// WebSocket Node has had since 22, and the Chrome that CI images ship — so the
// only thing in devDependencies stays Vite itself.

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { extname, join, normalize, resolve } from 'node:path';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml'
};

export function readArg(name) {
  const index = process.argv.indexOf(`--${name}`);
  return index === -1 ? undefined : process.argv[index + 1];
}

function chromeCandidates() {
  const explicit = readArg('chrome');
  if (explicit) return [explicit];

  const fromEnv = [process.env.CHROME_PATH, process.env.CHROME_BIN, process.env.PUPPETEER_EXECUTABLE_PATH]
    .filter(Boolean);

  if (process.platform === 'win32') {
    return [
      ...fromEnv,
      'C:/Program Files/Google/Chrome/Application/chrome.exe',
      'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
    ];
  }
  return [...fromEnv, 'google-chrome', 'google-chrome-stable', 'chromium-browser', 'chromium'];
}

/** Serve `root` on `port`, always revalidated so a stale file can never be tested. */
export function startStaticServer(root, port) {
  const base = resolve(root);
  const server = createServer(async (request, response) => {
    try {
      const path = decodeURIComponent(new URL(request.url, 'http://x').pathname);
      const filePath = join(base, normalize(path).replace(/^([/\\])+/, ''));
      if (!filePath.startsWith(base)) {
        response.writeHead(403).end('forbidden');
        return;
      }
      const body = await readFile(filePath);
      response.writeHead(200, {
        'content-type': MIME[extname(filePath)] || 'application/octet-stream',
        'cache-control': 'no-store'
      });
      response.end(body);
    } catch {
      response.writeHead(404).end('not found');
    }
  });
  return new Promise(resolve => server.listen(port, () => resolve(server)));
}

export async function launchChrome(port) {
  const userDataDir = await mkdtemp(join(tmpdir(), 'loader-qa-'));
  const args = [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--no-sandbox',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    `--user-data-dir=${userDataDir}`,
    'about:blank'
  ];

  for (const binary of chromeCandidates()) {
    const child = spawn(binary, args, { stdio: 'ignore' });
    const failed = new Promise(resolve => child.once('error', () => resolve(true)));

    for (let attempt = 0; attempt < 60; attempt += 1) {
      if (await Promise.race([failed, new Promise(r => setTimeout(() => r(false), 250))])) break;
      try {
        const version = await fetch(`http://127.0.0.1:${port}/json/version`);
        if (version.ok) {
          const { webSocketDebuggerUrl } = await version.json();
          return {
            wsUrl: webSocketDebuggerUrl,
            async close() {
              child.kill();
              await rm(userDataDir, { recursive: true, force: true }).catch(() => {});
            }
          };
        }
      } catch {
        // devtools endpoint not up yet
      }
    }
    child.kill();
  }
  await rm(userDataDir, { recursive: true, force: true }).catch(() => {});
  throw new Error(`no usable Chrome found (tried: ${chromeCandidates().join(', ')})`);
}

/** Minimal CDP client: send a command, await its reply. */
export function connect(wsUrl) {
  const socket = new WebSocket(wsUrl);
  const pending = new Map();
  let nextId = 0;

  socket.addEventListener('message', event => {
    const message = JSON.parse(event.data);
    const resolver = pending.get(message.id);
    if (!resolver) return;
    pending.delete(message.id);
    message.error ? resolver.reject(new Error(message.error.message)) : resolver.resolve(message.result);
  });

  const ready = new Promise((resolve, reject) => {
    socket.addEventListener('open', () => resolve(), { once: true });
    socket.addEventListener('error', () => reject(new Error('devtools socket failed')), { once: true });
  });

  const send = (method, params = {}, sessionId) => new Promise((resolve, reject) => {
    const id = ++nextId;
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
  });

  return { ready, send, close: () => socket.close() };
}

/** Open `url` in a fresh tab and return a session handle for evaluating in it. */
export async function openPage(client, url) {
  const { targetId } = await client.send('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await client.send('Target.attachToTarget', { targetId, flatten: true });
  await client.send('Page.enable', {}, sessionId);
  await client.send('Runtime.enable', {}, sessionId);
  await client.send('Page.navigate', { url }, sessionId);

  return {
    sessionId,
    async evaluate(expression, timeout = 180_000) {
      const result = await client.send('Runtime.evaluate', {
        expression,
        awaitPromise: true,
        returnByValue: true,
        timeout
      }, sessionId);
      if (result.exceptionDetails) {
        throw new Error(result.exceptionDetails.text || 'page threw during evaluation');
      }
      return result.result.value;
    }
  };
}
