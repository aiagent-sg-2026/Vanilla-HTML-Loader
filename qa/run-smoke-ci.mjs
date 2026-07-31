// Runs qa/snippet-paste-smoke.html in headless Chrome and reports the verdict.
//
//   node qa/run-smoke-ci.mjs                      against the source tree
//   node qa/run-smoke-ci.mjs --root dist          against the built artifact
//   node qa/run-smoke-ci.mjs --category SVG --limit 25
//
// Exit code 0 = every loader passed, 1 = failures or a harness problem.

import { startStaticServer, launchChrome, connect, openPage, readArg } from './headless-chrome.mjs';

const PORT = 8791;
const DEVTOOLS_PORT = 9333;
const RUN_TIMEOUT_MS = 180_000;

async function main() {
  const root = readArg('root') ?? '.';
  const category = readArg('category');
  const limit = readArg('limit');

  const query = new URLSearchParams({ autorun: '1' });
  if (category) query.set('category', category);
  if (limit) query.set('limit', limit);
  const pageUrl = `http://127.0.0.1:${PORT}/qa/snippet-paste-smoke.html?${query}`;

  const server = await startStaticServer(root, PORT);
  const chrome = await launchChrome(DEVTOOLS_PORT);
  const client = connect(chrome.wsUrl);

  try {
    await client.ready;
    console.log(`running ${pageUrl}  (serving ${root})`);
    const page = await openPage(client, pageUrl);

    // The harness sets window.__smokeResult when the run finishes; poll for it
    // rather than guessing how long the run takes.
    const raw = await page.evaluate(`new Promise(resolve => {
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
    })`);

    const outcome = JSON.parse(raw);
    if (outcome.error) throw new Error(outcome.error);

    console.log(`\nsnippet smoke: ${outcome.passed}/${outcome.total} passed, ${outcome.failed} failed`);
    if (outcome.failed) {
      console.log('\nfailures:');
      for (const failure of outcome.failures) console.log(`  ${failure}`);
    }
    return outcome.failed === 0 && !outcome.cancelled ? 0 : 1;
  } finally {
    client.close();
    await chrome.close();
    server.close();
  }
}

main().then(
  code => process.exit(code),
  error => {
    console.error(`smoke runner failed: ${error.message}`);
    process.exit(1);
  }
);
