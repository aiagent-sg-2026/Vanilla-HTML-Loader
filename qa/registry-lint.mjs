// Loader registry invariants. Zero dependencies.
//
//   node qa/registry-lint.mjs           human-readable report
//   node qa/registry-lint.mjs --json    machine-readable result
//
// Exit code 0 = clean, 1 = violations found. Run this after every loader pack;
// the category table it prints is the only sanctioned source for the counts
// quoted in DESIGN.md / SPEC.md / EPIC.md / ROADMAP.md / TASK.md.

import { loaders, categories } from '../loaders/index.js';

const REQUIRED_FIELDS = ['id', 'name', 'category', 'description', 'markup', 'css'];

// Class names too generic to be safe as a top-level selector: every loader's CSS
// is injected into one shared document, so an unscoped `.short { … }` would leak
// into unrelated loaders.
const GENERIC_CLASS_NAMES = [
  'short', 'long', 'active', 'is-active', 'left', 'right', 'top', 'bottom',
  'line', 'lines', 'row', 'col', 'dot', 'dots', 'bar', 'bars', 'avatar',
  'title', 'label', 'text', 'icon', 'box', 'card', 'item', 'wrap', 'inner'
];

const violations = [];

function report(rule, message, detail) {
  violations.push({ rule, message, detail });
}

/** Extract `@keyframes name { … }` blocks with brace matching. */
function extractKeyframes(css) {
  const found = [];
  const pattern = /@keyframes\s+([\w-]+)\s*\{/g;
  let match;

  while ((match = pattern.exec(css))) {
    let index = pattern.lastIndex;
    let depth = 1;
    while (index < css.length && depth > 0) {
      if (css[index] === '{') depth += 1;
      else if (css[index] === '}') depth -= 1;
      index += 1;
    }
    found.push({ name: match[1], body: css.slice(pattern.lastIndex, index - 1).replace(/\s+/g, '') });
  }

  return found;
}

/** Selector lists per rule, ignoring at-rule preludes. */
function extractSelectors(css) {
  return css
    .split('}')
    .map(block => block.split('{')[0].trim())
    .filter(selector => selector && !selector.startsWith('@'))
    .flatMap(selector => selector.split(',').map(part => part.trim()))
    .filter(Boolean);
}

// 1. Required fields
for (const loader of loaders) {
  const missing = REQUIRED_FIELDS.filter(field => !loader[field]);
  if (missing.length) {
    report('required-fields', `Loader "${loader.id || '(no id)'}" is missing: ${missing.join(', ')}`);
  }
}

// 2. Unique ids
const idOwners = new Map();
for (const loader of loaders) {
  if (!idOwners.has(loader.id)) idOwners.set(loader.id, []);
  idOwners.get(loader.id).push(loader.name);
}
for (const [id, names] of idOwners) {
  if (names.length > 1) {
    report('duplicate-id', `Loader id "${id}" is used ${names.length} times`, names.join(' | '));
  }
}

// 3. Same @keyframes name with different bodies — last one injected wins and
//    silently changes the animation of every earlier loader using that name.
const keyframeBodies = new Map();
const keyframeOwners = new Map();
for (const loader of loaders) {
  for (const { name, body } of extractKeyframes(loader.css || '')) {
    if (!keyframeBodies.has(name)) {
      keyframeBodies.set(name, new Set());
      keyframeOwners.set(name, new Set());
    }
    keyframeBodies.get(name).add(body);
    keyframeOwners.get(name).add(loader.id);
  }
}
for (const [name, bodies] of keyframeBodies) {
  if (bodies.size > 1) {
    report(
      'keyframes-conflict',
      `@keyframes "${name}" has ${bodies.size} different definitions`,
      [...keyframeOwners.get(name)].join(', ')
    );
  }
}

// 4. Unscoped generic selectors
for (const loader of loaders) {
  for (const selector of extractSelectors(loader.css || '')) {
    for (const generic of GENERIC_CLASS_NAMES) {
      const isUnscoped = selector === `.${generic}`
        || selector.startsWith(`.${generic}:`)
        || selector.startsWith(`.${generic}.`)
        || selector.startsWith(`.${generic} `);
      if (isUnscoped) {
        report('unscoped-selector', `Loader "${loader.id}" uses generic selector "${selector}" without an ancestor scope`);
      }
    }
  }
}

// Report
const countsByCategory = {};
for (const loader of loaders) {
  countsByCategory[loader.category] = (countsByCategory[loader.category] || 0) + 1;
}
const ranked = Object.entries(countsByCategory).sort((a, b) => b[1] - a[1]);

const summary = {
  total: loaders.length,
  categories: categories.filter(category => category !== 'All').length,
  withControls: loaders.filter(loader => loader.controls?.length).length,
  withJs: loaders.filter(loader => loader.js).length,
  keyframeNames: keyframeBodies.size,
  violations: violations.length,
  countsByCategory: Object.fromEntries(ranked)
};

if (process.argv.includes('--json')) {
  console.log(JSON.stringify({ ...summary, details: violations }, null, 2));
} else {
  console.log('Loader registry lint\n');
  console.log(`  Total loaders     ${summary.total}`);
  console.log(`  Categories        ${summary.categories}`);
  console.log(`  With controls     ${summary.withControls}`);
  console.log(`  With JS API       ${summary.withJs}`);
  console.log(`  @keyframes names  ${summary.keyframeNames}`);
  console.log('\n  Category counts (copy these into the docs)');
  for (const [category, count] of ranked) {
    console.log(`    ${category.padEnd(14)} ${String(count).padStart(4)}`);
  }

  if (violations.length) {
    console.log(`\n  ${violations.length} violation(s):\n`);
    for (const { rule, message, detail } of violations) {
      console.log(`    [${rule}] ${message}`);
      if (detail) console.log(`        ${detail}`);
    }
  } else {
    console.log('\n  No violations.');
  }
}

process.exit(violations.length ? 1 : 0);
