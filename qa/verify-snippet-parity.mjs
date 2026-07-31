// Proves the build does not change the deliverable.
//
//   npm run build && node qa/verify-snippet-parity.mjs
//
// Every loader's copy-paste snippet is generated twice — once from the source
// modules in Node, once from the bundled, minified code running in a browser —
// and the two are compared byte for byte. Exit code 1 on any difference.
//
// This exists because the product IS the snippet text. Bundling is allowed to
// rewrite the application around the registry, but a loader's markup and CSS
// are template-literal data that must reach the user's clipboard untouched.

import { loaders } from '../loaders/index.js';
import { getCombinedSnippet } from '../js/snippet-service.js';
import { startStaticServer, launchChrome, connect, openPage } from './headless-chrome.mjs';

const PORT = 8793;
const DEVTOOLS_PORT = 9335;
const ACCENT = '#EA580C';

async function main() {
  const server = await startStaticServer('dist', PORT);
  const chrome = await launchChrome(DEVTOOLS_PORT);
  const client = connect(chrome.wsUrl);

  try {
    await client.ready;
    const page = await openPage(client, `http://127.0.0.1:${PORT}/qa/snippet-paste-smoke.html`);

    const built = await page.evaluate(`new Promise(resolve => {
      const deadline = Date.now() + 30000;
      const tick = () => {
        if (window.__registry) {
          const { loaders, getCombinedSnippet } = window.__registry;
          return resolve(JSON.stringify(
            loaders.map(loader => [loader.id, getCombinedSnippet(loader, ${JSON.stringify(ACCENT)})])
          ));
        }
        if (Date.now() > deadline) return resolve(JSON.stringify({ error: 'built registry never appeared' }));
        setTimeout(tick, 100);
      };
      tick();
    })`);

    const parsed = JSON.parse(built);
    if (parsed.error) throw new Error(parsed.error);

    const builtById = new Map(parsed);
    const differences = [];
    const missing = [];

    for (const loader of loaders) {
      const fromSource = getCombinedSnippet(loader, ACCENT);
      const fromBuild = builtById.get(loader.id);
      if (fromBuild === undefined) {
        missing.push(loader.id);
        continue;
      }
      if (fromBuild !== fromSource) {
        const at = [...fromSource].findIndex((character, index) => character !== fromBuild[index]);
        differences.push({
          id: loader.id,
          at,
          source: fromSource.slice(Math.max(0, at - 40), at + 40),
          build: fromBuild.slice(Math.max(0, at - 40), at + 40)
        });
      }
    }

    const extra = [...builtById.keys()].filter(id => !loaders.some(loader => loader.id === id));

    console.log(`snippet parity: ${loaders.length} loaders compared against the built bundle`);
    console.log(`  identical    ${loaders.length - differences.length - missing.length}`);
    console.log(`  differing    ${differences.length}`);
    console.log(`  missing      ${missing.length}`);
    console.log(`  unexpected   ${extra.length}`);

    for (const difference of differences.slice(0, 5)) {
      console.log(`\n  ${difference.id} diverges at character ${difference.at}`);
      console.log(`    source: ${JSON.stringify(difference.source)}`);
      console.log(`    build:  ${JSON.stringify(difference.build)}`);
    }
    if (missing.length) console.log(`\n  missing from build: ${missing.slice(0, 10).join(', ')}`);
    if (extra.length) console.log(`\n  present only in build: ${extra.slice(0, 10).join(', ')}`);

    return differences.length === 0 && missing.length === 0 && extra.length === 0 ? 0 : 1;
  } finally {
    client.close();
    await chrome.close();
    server.close();
  }
}

main().then(
  code => process.exit(code),
  error => {
    console.error(`snippet parity check failed: ${error.message}`);
    process.exit(1);
  }
);
