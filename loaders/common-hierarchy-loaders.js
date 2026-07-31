export const commonHierarchyLoaders = [
  {
    id: 'tree-branch-loader',
    name: 'Tree Branch Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A compact loading state for expanding folders, account trees, categories, and hierarchical ERP records.',
    markup: `<div class="vl-tree-loader" role="status" aria-live="polite">
  <div class="vl-tree-loader-row root"><span class="vl-tree-loader-chevron">⌄</span><span class="vl-tree-loader-folder"></span><strong>Customer groups</strong></div>
  <div class="vl-tree-loader-row child"><span class="vl-tree-loader-line"></span><span class="vl-tree-loader-ring" aria-hidden="true"></span><span class="vl-tree-loader-message">Loading branches…</span></div>
  <div class="vl-tree-loader-row ghost"><span></span><span></span></div>
</div>`,
    css: `.vl-tree-loader {
  width: min(235px, 84vw);
  display: grid;
  gap: 7px;
  color: #344054;
  font: 700 11px/1.3 system-ui, sans-serif;
}
.vl-tree-loader-row { display: flex; align-items: center; gap: 7px; min-height: 24px; }
.vl-tree-loader-row.child { padding-left: 23px; color: #667085; }
.vl-tree-loader-row.ghost { padding-left: 47px; opacity: .7; }
.vl-tree-loader-chevron { width: 13px; color: #98a2b3; text-align: center; }
.vl-tree-loader-folder {
  width: 15px;
  height: 12px;
  border-radius: 3px;
  background: color-mix(in srgb, var(--loader-accent) 24%, #dce3ec);
}
.vl-tree-loader-line { width: 12px; height: 1px; background: #d5dde8; }
.vl-tree-loader-ring {
  width: 14px;
  height: 14px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-tree-loader-spin calc(var(--loader-speed) * .72) linear infinite;
}
.vl-tree-loader-row.ghost span {
  position: relative;
  overflow: hidden;
  height: 8px;
  border-radius: 4px;
  background: #e7ecf3;
}
.vl-tree-loader-row.ghost span:first-child { width: 58%; }
.vl-tree-loader-row.ghost span:last-child { width: 20%; }
.vl-tree-loader-row.ghost span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-tree-loader-shimmer calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
@keyframes vl-tree-loader-spin { to { transform: rotate(360deg); } }
@keyframes vl-tree-loader-shimmer { to { transform: translateX(110%); } }`,
    controls: [
      {
        type: 'select',
        key: 'message',
        label: 'Tree operation',
        defaultValue: 'branches',
        full: true,
        options: [
          { value: 'branches', label: 'Loading branches' },
          { value: 'accounts', label: 'Loading accounts' },
          { value: 'categories', label: 'Loading categories' },
          { value: 'locations', label: 'Loading locations' }
        ]
      }
    ],
    applyControls(container, values) {
      const message = container.querySelector('.vl-tree-loader-message');
      if (!message) return;
      const labels = {
        branches: 'Loading branches…',
        accounts: 'Loading accounts…',
        categories: 'Loading categories…',
        locations: 'Loading locations…'
      };
      message.textContent = labels[values.message] || labels.branches;
    },
    js: `AppLoader.setMessage = function (message) {
  const target = loaderElement.querySelector('.vl-tree-loader-message');
  if (target) target.textContent = message || 'Loading branches…';
};`
  },
  {
    id: 'dropdown-option-loader',
    name: 'Dropdown Option Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A realistic dropdown-menu loading state for remote options, customer lookup, stock lookup, and autocomplete.',
    markup: `<div class="vl-dropdown-loader" role="status" aria-live="polite">
  <div class="vl-dropdown-loader-search"><span>Search customers</span><i aria-hidden="true"></i></div>
  <div class="vl-dropdown-loader-option"><span class="vl-dropdown-loader-ring"></span><strong class="vl-dropdown-loader-message">Fetching options…</strong></div>
  <div class="vl-dropdown-loader-ghost"><span></span><span></span></div>
  <div class="vl-dropdown-loader-ghost short"><span></span><span></span></div>
</div>`,
    css: `.vl-dropdown-loader {
  width: min(225px, 82vw);
  display: grid;
  gap: 5px;
  padding: 7px;
  border: 1px solid #dfe5ed;
  border-radius: 9px;
  background: #fff;
  color: #344054;
  box-shadow: 0 10px 24px rgba(15,23,42,.08);
  font: 700 10px/1.3 system-ui, sans-serif;
}
.vl-dropdown-loader-search {
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0 9px;
  border: 1px solid #e2e8f0;
  border-radius: 7px;
  color: #98a2b3;
  background: #f8fafc;
}
.vl-dropdown-loader-search i {
  width: 10px;
  height: 10px;
  border: 2px solid #b8c2cf;
  border-radius: 50%;
  position: relative;
}
.vl-dropdown-loader-search i::after {
  content: '';
  position: absolute;
  width: 5px;
  height: 2px;
  right: -4px;
  bottom: -2px;
  border-radius: 999px;
  background: #b8c2cf;
  transform: rotate(45deg);
}
.vl-dropdown-loader-option {
  min-height: 32px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 9px;
  color: #667085;
}
.vl-dropdown-loader-ring {
  width: 14px;
  height: 14px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-dropdown-loader-spin calc(var(--loader-speed) * .72) linear infinite;
}
.vl-dropdown-loader-ghost {
  min-height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 9px;
}
.vl-dropdown-loader-ghost span {
  position: relative;
  overflow: hidden;
  height: 8px;
  border-radius: 4px;
  background: #e7ecf3;
}
.vl-dropdown-loader-ghost span:first-child { width: 62%; }
.vl-dropdown-loader-ghost span:last-child { width: 18%; }
.vl-dropdown-loader-ghost.short span:first-child { width: 44%; }
.vl-dropdown-loader-ghost span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-dropdown-loader-shimmer calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
@keyframes vl-dropdown-loader-spin { to { transform: rotate(360deg); } }
@keyframes vl-dropdown-loader-shimmer { to { transform: translateX(110%); } }`,
    controls: [
      {
        type: 'select',
        key: 'source',
        label: 'Option source',
        defaultValue: 'options',
        full: true,
        options: [
          { value: 'options', label: 'Fetching options' },
          { value: 'customers', label: 'Searching customers' },
          { value: 'products', label: 'Searching products' },
          { value: 'locations', label: 'Loading locations' }
        ]
      }
    ],
    applyControls(container, values) {
      const message = container.querySelector('.vl-dropdown-loader-message');
      if (!message) return;
      const labels = {
        options: 'Fetching options…',
        customers: 'Searching customers…',
        products: 'Searching products…',
        locations: 'Loading locations…'
      };
      message.textContent = labels[values.source] || labels.options;
    },
    js: `AppLoader.setMessage = function (message) {
  const target = loaderElement.querySelector('.vl-dropdown-loader-message');
  if (target) target.textContent = message || 'Fetching options…';
};`
  }
];
