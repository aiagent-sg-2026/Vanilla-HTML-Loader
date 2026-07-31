export const commonControlLoaders = [
  {
    id: 'thin-ring-spinner',
    name: 'Thin Ring Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A lightweight thin-ring spinner for compact page, panel, and inline loading states.',
    markup: `<div class="vl-thin-ring" role="status" aria-label="Loading"></div>`,
    css: `.vl-thin-ring {
  width: 48px;
  height: 48px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-thin-ring calc(var(--loader-speed) * .8) linear infinite;
}
@keyframes vl-thin-ring { to { transform: rotate(360deg); } }`
  },
  {
    id: 'dual-dot-swap',
    name: 'Dual Dot Swap',
    category: 'Dots',
    tech: 'CSS',
    description: 'Two dots exchange positions for a compact and familiar processing indicator.',
    markup: `<div class="vl-dual-dot-swap" role="status" aria-label="Loading"><span></span><span></span></div>`,
    css: `.vl-dual-dot-swap {
  position: relative;
  width: 54px;
  height: 18px;
}
.vl-dual-dot-swap span {
  position: absolute;
  top: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dual-dot-swap calc(var(--loader-speed) * 1.05) ease-in-out infinite alternate;
}
.vl-dual-dot-swap span:first-child { left: 4px; }
.vl-dual-dot-swap span:last-child { right: 4px; animation-direction: alternate-reverse; }
@keyframes vl-dual-dot-swap {
  to { transform: translateX(36px); opacity: .35; }
}`
  },
  {
    id: 'mini-equalizer',
    name: 'Mini Equalizer',
    category: 'Bars',
    tech: 'CSS',
    description: 'Five small bars animate gently for audio, processing, assistant, and background-task states.',
    markup: `<div class="vl-mini-equalizer" role="status" aria-label="Processing"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-mini-equalizer {
  height: 38px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.vl-mini-equalizer span {
  width: 5px;
  height: 14px;
  border-radius: 999px;
  background: var(--loader-accent);
  animation: vl-mini-equalizer calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
.vl-mini-equalizer span:nth-child(2) { animation-delay: .1s; }
.vl-mini-equalizer span:nth-child(3) { animation-delay: .2s; }
.vl-mini-equalizer span:nth-child(4) { animation-delay: .3s; }
.vl-mini-equalizer span:nth-child(5) { animation-delay: .4s; }
@keyframes vl-mini-equalizer {
  0%, 100% { transform: scaleY(.55); opacity: .35; }
  50% { transform: scaleY(1.65); opacity: 1; }
}`
  },
  {
    id: 'search-field-loader',
    name: 'Search Field Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A realistic search-field loading state for remote search, filtering, and suggestion requests.',
    markup: `<div class="vl-search-field" role="status" aria-live="polite">
  <span class="vl-search-field-icon" aria-hidden="true"></span>
  <span class="vl-search-field-text">Searching customers…</span>
  <span class="vl-search-field-spinner" aria-hidden="true"></span>
</div>`,
    css: `.vl-search-field {
  width: min(235px, 84vw);
  min-height: 42px;
  display: grid;
  grid-template-columns: 18px 1fr 18px;
  align-items: center;
  gap: 9px;
  padding: 0 11px;
  border: 1px solid #d8e0ea;
  border-radius: 9px;
  background: #fff;
  color: #344054;
  font: 700 11px/1.3 system-ui, sans-serif;
}
.vl-search-field-icon {
  width: 13px;
  height: 13px;
  border: 2px solid #98a2b3;
  border-radius: 50%;
  position: relative;
}
.vl-search-field-icon::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 2px;
  right: -5px;
  bottom: -2px;
  border-radius: 999px;
  background: #98a2b3;
  transform: rotate(45deg);
}
.vl-search-field-text {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vl-search-field-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 20%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-search-field calc(var(--loader-speed) * .72) linear infinite;
}
@keyframes vl-search-field { to { transform: rotate(360deg); } }`,
    controls: [
      {
        type: 'select',
        key: 'scope',
        label: 'Search target',
        defaultValue: 'customers',
        full: true,
        options: [
          { value: 'customers', label: 'Customers' },
          { value: 'products', label: 'Products' },
          { value: 'transactions', label: 'Transactions' },
          { value: 'records', label: 'Records' }
        ]
      }
    ],
    applyControls(container, values) {
      const text = container.querySelector('.vl-search-field-text');
      if (!text) return;
      const labels = {
        customers: 'Searching customers…',
        products: 'Searching products…',
        transactions: 'Searching transactions…',
        records: 'Searching records…'
      };
      text.textContent = labels[values.scope] || labels.customers;
    },
    js: `AppLoader.setMessage = function (message) {
  const text = loaderElement.querySelector('.vl-search-field-text');
  if (text) text.textContent = message || 'Searching…';
};`
  },
  {
    id: 'select-field-loader',
    name: 'Select Field Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A dropdown-field loading state for dynamically fetched options and dependent selections.',
    markup: `<label class="vl-select-loader">
  <span class="vl-select-loader-label">Delivery location</span>
  <span class="vl-select-loader-field" role="status" aria-live="polite">
    <span class="vl-select-loader-text">Loading options…</span>
    <span class="vl-select-loader-spinner" aria-hidden="true"></span>
  </span>
</label>`,
    css: `.vl-select-loader {
  width: min(230px, 82vw);
  display: grid;
  gap: 6px;
  color: #344054;
  font: 700 11px/1.3 system-ui, sans-serif;
}
.vl-select-loader-label { color: #667085; }
.vl-select-loader-field {
  min-height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 11px;
  border: 1px solid #d8e0ea;
  border-radius: 9px;
  background: #fff;
}
.vl-select-loader-text {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vl-select-loader-spinner {
  width: 16px;
  height: 16px;
  flex: 0 0 16px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 20%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-select-loader calc(var(--loader-speed) * .72) linear infinite;
}
@keyframes vl-select-loader { to { transform: rotate(360deg); } }`,
    controls: [
      {
        type: 'select',
        key: 'field',
        label: 'Field type',
        defaultValue: 'location',
        full: true,
        options: [
          { value: 'location', label: 'Delivery location' },
          { value: 'customer', label: 'Customer' },
          { value: 'warehouse', label: 'Warehouse' },
          { value: 'currency', label: 'Currency' }
        ]
      }
    ],
    applyControls(container, values) {
      const label = container.querySelector('.vl-select-loader-label');
      if (!label) return;
      const labels = {
        location: 'Delivery location',
        customer: 'Customer',
        warehouse: 'Warehouse',
        currency: 'Currency'
      };
      label.textContent = labels[values.field] || labels.location;
    },
    js: `AppLoader.setMessage = function (message) {
  const text = loaderElement.querySelector('.vl-select-loader-text');
  if (text) text.textContent = message || 'Loading options…';
};`
  }
];
