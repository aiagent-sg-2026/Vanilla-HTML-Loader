export const commonInlineLoaders = [
  {
    id: 'save-button-spinner',
    name: 'Save Button Spinner',
    category: 'Buttons',
    tech: 'CSS + JavaScript',
    description: 'A standard primary-button loading state for save, submit, approve, and post actions.',
    markup: `<button class="vl-save-button" type="button" disabled aria-busy="true">
  <span class="vl-save-button-spinner" aria-hidden="true"></span>
  <span class="vl-save-button-label">Saving…</span>
</button>`,
    css: `.vl-save-button {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 10px 16px;
  border: 0;
  border-radius: 9px;
  background: var(--loader-accent);
  color: #fff;
  font: 800 13px/1.2 system-ui, sans-serif;
  box-shadow: 0 7px 16px color-mix(in srgb, var(--loader-accent) 24%, transparent);
}
.vl-save-button-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255,255,255,.42);
  border-top-color: #fff;
  border-radius: 50%;
  animation: vl-save-button-spin calc(var(--loader-speed) * .72) linear infinite;
}
@keyframes vl-save-button-spin { to { transform: rotate(360deg); } }`,
    controls: [
      {
        type: 'select',
        key: 'action',
        label: 'Button action',
        defaultValue: 'saving',
        full: true,
        options: [
          { value: 'saving', label: 'Saving' },
          { value: 'submitting', label: 'Submitting' },
          { value: 'posting', label: 'Posting' },
          { value: 'approving', label: 'Approving' }
        ]
      }
    ],
    applyControls(container, values) {
      const label = container.querySelector('.vl-save-button-label');
      if (!label) return;
      const labels = {
        saving: 'Saving…',
        submitting: 'Submitting…',
        posting: 'Posting…',
        approving: 'Approving…'
      };
      label.textContent = labels[values.action] || labels.saving;
    },
    js: `AppLoader.setMessage = function (message) {
  const label = loaderElement.querySelector('.vl-save-button-label');
  if (label) label.textContent = message || 'Working…';
};`
  },
  {
    id: 'button-loading-dots',
    name: 'Button Loading Dots',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A compact three-dot button loader for quick actions where a spinner feels too prominent.',
    markup: `<button class="vl-dot-button" type="button" disabled aria-busy="true">
  <span>Processing</span>
  <span class="vl-dot-button-dots" aria-hidden="true"><i></i><i></i><i></i></span>
</button>`,
    css: `.vl-dot-button {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 15px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 42%, transparent);
  border-radius: 9px;
  background: color-mix(in srgb, var(--loader-accent) 8%, #fff);
  color: var(--loader-accent);
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-dot-button-dots { display: inline-flex; align-items: center; gap: 3px; }
.vl-dot-button-dots i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
  animation: vl-dot-button calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-dot-button-dots i:nth-child(2) { animation-delay: .13s; }
.vl-dot-button-dots i:nth-child(3) { animation-delay: .26s; }
@keyframes vl-dot-button {
  0%, 80%, 100% { transform: scale(.65); opacity: .35; }
  40% { transform: scale(1); opacity: 1; }
}`
  },
  {
    id: 'input-field-spinner',
    name: 'Input Field Spinner',
    category: 'Common UI',
    tech: 'CSS',
    description: 'A realistic form-field loading state for remote validation, search suggestions, and code lookup.',
    markup: `<label class="vl-input-loader">
  <span class="vl-input-loader-label">Customer code</span>
  <span class="vl-input-loader-field">
    <span class="vl-input-loader-value">Checking CUST-001</span>
    <span class="vl-input-loader-spinner" role="status" aria-label="Checking value"></span>
  </span>
</label>`,
    css: `.vl-input-loader {
  width: min(220px, 80vw);
  display: grid;
  gap: 6px;
  color: #344054;
  font: 700 12px/1.3 system-ui, sans-serif;
}
.vl-input-loader-label { color: #667085; }
.vl-input-loader-field {
  min-height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 11px;
  border: 1px solid #d8e0eb;
  border-radius: 8px;
  background: #fff;
}
.vl-input-loader-value {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vl-input-loader-spinner {
  width: 17px;
  height: 17px;
  flex: 0 0 17px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 20%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-input-spinner calc(var(--loader-speed) * .7) linear infinite;
}
@keyframes vl-input-spinner { to { transform: rotate(360deg); } }`
  },
  {
    id: 'table-cell-loader',
    name: 'Table Cell Loader',
    category: 'Common UI',
    tech: 'CSS',
    description: 'A compact table-row loading state for ERP inquiries, inline calculations, and lazy-loaded columns.',
    markup: `<div class="vl-table-loader" role="status" aria-label="Loading table row">
  <span class="vl-table-loader-code">SO-10482</span>
  <span class="vl-table-loader-state"><i aria-hidden="true"></i>Calculating</span>
  <span class="vl-table-loader-value">—</span>
</div>`,
    css: `.vl-table-loader {
  width: min(230px, 82vw);
  min-height: 42px;
  display: grid;
  grid-template-columns: 1fr auto 34px;
  align-items: center;
  gap: 10px;
  padding: 0 11px;
  border: 1px solid #e1e7ef;
  border-radius: 7px;
  background: #fff;
  color: #344054;
  font: 700 11px/1.25 system-ui, sans-serif;
}
.vl-table-loader-code { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vl-table-loader-state { display: inline-flex; align-items: center; gap: 6px; color: #667085; }
.vl-table-loader-state i {
  width: 12px;
  height: 12px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-table-cell-spin calc(var(--loader-speed) * .7) linear infinite;
}
.vl-table-loader-value { text-align: right; color: var(--loader-accent); }
@keyframes vl-table-cell-spin { to { transform: rotate(360deg); } }`
  },
  {
    id: 'inline-text-shimmer',
    name: 'Inline Text Shimmer',
    category: 'Text',
    tech: 'CSS',
    description: 'A subtle shimmering status label for report headers, search results, and assistant responses.',
    markup: `<span class="vl-inline-shimmer" role="status">Preparing results…</span>`,
    css: `.vl-inline-shimmer {
  display: inline-block;
  color: transparent;
  background:
    linear-gradient(
      100deg,
      color-mix(in srgb, var(--loader-accent) 45%, #667085) 20%,
      var(--loader-accent) 42%,
      color-mix(in srgb, var(--loader-accent) 45%, #667085) 64%
    );
  background-size: 220% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  font: 800 14px/1.4 system-ui, sans-serif;
  animation: vl-inline-shimmer calc(var(--loader-speed) * 1.55) linear infinite;
}
@keyframes vl-inline-shimmer {
  from { background-position: 100% 0; }
  to { background-position: -120% 0; }
}`
  }
];
