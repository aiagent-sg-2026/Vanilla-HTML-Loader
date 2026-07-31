// Runs qa/snippet-paste-smoke.html in headless Chrome and reports the verdict.
//
//   node qa/run-smoke-ci.mjs [--category SVG] [--limit 25] [--chrome /path/to/chrome]
//
// Exit code 0 = every loader passed, 1 = failures or a harness problem.
//
// No dependencies, so D-01 still holds. It leans on three things Node and CI
// already provide: a static file server built from node:http, the global
// WebSocket that Node has had since 22, and the Chrome that GitHub's runner
// images ship preinstalled. The alternative — Playwright or Puppeteer — would
// have been this repository's first dev dependency and its first node_modules.

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const PORT = 8791;
const NAV_TIMEOUT_MS = 30_000;
const RUN_TIMEOUT_MS = 180_000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml'
};

function readArg(name) {
  const index = process.argv.indexOf(`--${name}`);
  return index === -1 ? undefined : process.argv[index + 1];
}

function chromeCandidates() {
  const explicit = readArg('chrome');
  if (explicit) return [explicit];

  // Honour the variables CI images and local setups commonly export before
  // falling back to well-known names.
  const fromEnv = [process.env.CHROME_PATH, process.env.CHROME_BIN, process.env.PUPPETEER_EXECUTABLE_PATH]
    .filter(Boolean);

  if (process.platform === 'win32') {
    return [
      ...fromEnv,
      'C:/Program Files/Google/Chrome/Application/chrome.exe',
      'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
    ];
  }
  // Names the GitHub-hosted Linux runners provide.
  return [...fromEnv, 'google-chrome', 'google-chrome-stable', 'chromium-browser', 'chromium'];
}

function startStaticServer() {
  const server = createServer(async (request, response) => {
    try {
      const path = decodeURIComponent(new URL(request.url, 'http://x').pathname);
      // normalize collapses ".." before it can escape the repository root.
      const filePath = join(ROOT, normalize(path).replace(/^([/\\])+/, ''));
      if (!filePath.startsWith(ROOT)) {
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
  return new Promise(resolve => server.listen(PORT, () => resolve(server)));
}

async function launchChrome(userDataDir) {
  const args = [
    '--headless=new',
    '--remote-debugging-port=9333',
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
        const version = await fetch('http://127.0.0.1:9333/json/version');
        if (version.ok) return { child, wsUrl: (await version.json()).webSocketDebuggerUrl };
      } catch {
        // devtools endpoint not up yet
      }
    }
    child.kill();
  }
  throw new Error(`no usable Chrome found (tried: ${chromeCandidates().join(', ')})`);
}

/** Minimal CDP client: send a command, await its reply. */
function connect(wsUrl) {
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

async function main() {
  const category = readArg('category');
  const limit = readArg('limit');
  const query = new URLSearchParams({ autorun: '1' });
  if (category) query.set('category', category);
  if (limit) query.set('limit', limit);
  const pageUrl = `http://127.0.0.1:${PORT}/qa/snippet-paste-smoke.html?${query}`;

  const server = await startStaticServer();
  const userDataDir = await mkdtemp(join(tmpdir(), 'loader-smoke-'));
  let chrome;
  let client;

  try {
    chrome = await launchChrome(userDataDir);
    client = connect(chrome.wsUrl);
    await client.ready;

    const { targetId } = await client.send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await client.send('Target.attachToTarget', { targetId, flatten: true });

    await client.send('Page.enable', {}, sessionId);
    await client.send('Runtime.enable', {}, sessionId);
    await client.send('Page.navigate', { url: pageUrl }, sessionId);

    console.log(`running ${pageUrl}`);

    // The harness sets window.__smokeResult when the run finishes; poll for it
    // rather than guessing how long the run takes.
    const expression = `new Promise(resolve => {
      const deadline = Date.now() + ${RUN_TIMEOUT_MS};
      const tick = () => {
        if (window.__smokeResult) return resolve(JSON.stringify({
          ...window.__smokeResult,
          failures: [...document.querySelectorAll('#results tr')]
            .filter(row => row.cells[2].textContent === 'FAIL')
            .map(row => row.cells[0].textContent + ' :: ' + row.cells[3].textContent)
        }));
        if (Date.now() > deadline) return resolve(JSON.stringify({ error: 'timed out waiting for the run' }));
        setTimeout(tick, 250);
      };
      tick();
    })`;

    const evaluation = await client.send('Runtime.evaluate', {
      expression,
      awaitPromise: true,
      returnByValue: true,
      timeout: NAV_TIMEOUT_MS + RUN_TIMEOUT_MS
    }, sessionId);

    if (evaluation.exceptionDetails) {
      throw new Error(evaluation.exceptionDetails.text || 'page threw during evaluation');
    }

    const outcome = JSON.parse(evaluation.result.value);
    if (outcome.error) throw new Error(outcome.error);

    console.log(`\nsnippet smoke: ${outcome.passed}/${outcome.total} passed, ${outcome.failed} failed`);
    if (outcome.failed) {
      console.log('\nfailures:');
      for (const failure of outcome.failures) console.log(`  ${failure}`);
    }
    return outcome.failed === 0 && !outcome.cancelled ? 0 : 1;
  } finally {
    client?.close();
    chrome?.child.kill();
    server.close();
    await rm(userDataDir, { recursive: true, force: true }).catch(() => {});
  }
}

main().then(
  code => process.exit(code),
  error => {
    console.error(`smoke runner failed: ${error.message}`);
    process.exit(1);
  }
);
