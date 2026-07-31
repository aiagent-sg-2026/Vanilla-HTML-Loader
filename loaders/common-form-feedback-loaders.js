export const commonFormFeedbackLoaders = [
  {
    id: 'inline-validation-loader',
    name: 'Inline Validation Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A compact field-validation state for customer codes, tax numbers, stock codes, and remote uniqueness checks.',
    markup: `<div class="vl-validation-loader" role="status" aria-live="polite">
  <span class="vl-validation-loader-ring" aria-hidden="true"></span>
  <span class="vl-validation-loader-copy"><strong class="vl-validation-loader-title">Validating customer code</strong><small>Checking the latest records…</small></span>
</div>`,
    css: `.vl-validation-loader {
  width: min(235px, 84vw);
  min-height: 48px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 11px;
  border: 1px solid #dfe5ed;
  border-radius: 9px;
  background: #fff;
  color: #344054;
  font-family: system-ui, sans-serif;
}
.vl-validation-loader-ring {
  width: 18px;
  height: 18px;
  flex: 0 0 18px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-validation-spin calc(var(--loader-speed) * .72) linear infinite;
}
.vl-validation-loader-copy { min-width: 0; display: grid; gap: 2px; }
.vl-validation-loader-copy strong { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11px; line-height: 1.3; }
.vl-validation-loader-copy small { color: #667085; font-size: 9px; line-height: 1.3; }
@keyframes vl-validation-spin { to { transform: rotate(360deg); } }`,
    controls: [
      {
        type: 'select',
        key: 'field',
        label: 'Validation field',
        defaultValue: 'customer',
        full: true,
        options: [
          { value: 'customer', label: 'Customer code' },
          { value: 'stock', label: 'Stock code' },
          { value: 'tax', label: 'Tax number' },
          { value: 'email', label: 'Email address' }
        ]
      }
    ],
    applyControls(container, values) {
      const title = container.querySelector('.vl-validation-loader-title');
      if (!title) return;
      const labels = {
        customer: 'Validating customer code',
        stock: 'Validating stock code',
        tax: 'Validating tax number',
        email: 'Validating email address'
      };
      title.textContent = labels[values.field] || labels.customer;
    },
    js: `AppLoader.setMessage = function (message) {
  const title = loaderElement.querySelector('.vl-validation-loader-title');
  if (title) title.textContent = message || 'Validating value';
};`
  },
  {
    id: 'autosave-indicator-loader',
    name: 'Autosave Indicator Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A subtle autosave indicator for forms, notes, transaction drafts, and editable admin pages.',
    markup: `<span class="vl-autosave-loader" role="status" aria-live="polite">
  <i aria-hidden="true"></i><span class="vl-autosave-loader-label">Saving draft…</span>
</span>`,
    css: `.vl-autosave-loader {
  min-height: 32px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 10px;
  border: 1px solid #dfe5ed;
  border-radius: 999px;
  background: #fff;
  color: #667085;
  font: 800 10px/1.2 system-ui, sans-serif;
}
.vl-autosave-loader i {
  width: 12px;
  height: 12px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-autosave-spin calc(var(--loader-speed) * .72) linear infinite;
}
@keyframes vl-autosave-spin { to { transform: rotate(360deg); } }`,
    controls: [
      {
        type: 'select',
        key: 'state',
        label: 'Autosave state',
        defaultValue: 'draft',
        full: true,
        options: [
          { value: 'draft', label: 'Saving draft' },
          { value: 'changes', label: 'Saving changes' },
          { value: 'sync', label: 'Syncing changes' },
          { value: 'note', label: 'Saving note' }
        ]
      }
    ],
    applyControls(container, values) {
      const label = container.querySelector('.vl-autosave-loader-label');
      if (!label) return;
      const labels = {
        draft: 'Saving draft…',
        changes: 'Saving changes…',
        sync: 'Syncing changes…',
        note: 'Saving note…'
      };
      label.textContent = labels[values.state] || labels.draft;
    },
    js: `AppLoader.setMessage = function (message) {
  const label = loaderElement.querySelector('.vl-autosave-loader-label');
  if (label) label.textContent = message || 'Saving…';
};`
  },
  {
    id: 'data-refresh-banner',
    name: 'Data Refresh Banner',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A compact refresh banner for dashboards, inquiries, reports, and live operational summaries.',
    markup: `<div class="vl-refresh-banner" role="status" aria-live="polite">
  <span class="vl-refresh-banner-ring" aria-hidden="true"></span>
  <span class="vl-refresh-banner-copy"><strong class="vl-refresh-banner-title">Refreshing dashboard</strong><small>Latest data is being retrieved.</small></span>
  <span class="vl-refresh-banner-time">Now</span>
</div>`,
    css: `.vl-refresh-banner {
  width: min(245px, 88vw);
  min-height: 54px;
  display: grid;
  grid-template-columns: 22px minmax(0, 1fr) auto;
  align-items: center;
  gap: 9px;
  padding: 9px 11px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #dfe5ed);
  border-radius: 10px;
  background: color-mix(in srgb, var(--loader-accent) 6%, #fff);
  color: #344054;
  font-family: system-ui, sans-serif;
}
.vl-refresh-banner-ring {
  width: 20px;
  height: 20px;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-refresh-banner-spin calc(var(--loader-speed) * .78) linear infinite;
}
.vl-refresh-banner-copy { min-width: 0; display: grid; gap: 2px; }
.vl-refresh-banner-copy strong { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11px; }
.vl-refresh-banner-copy small { color: #667085; font-size: 9px; }
.vl-refresh-banner-time { color: var(--loader-accent); font-size: 9px; font-weight: 900; }
@keyframes vl-refresh-banner-spin { to { transform: rotate(360deg); } }`,
    controls: [
      {
        type: 'select',
        key: 'target',
        label: 'Refresh target',
        defaultValue: 'dashboard',
        full: true,
        options: [
          { value: 'dashboard', label: 'Dashboard' },
          { value: 'report', label: 'Report' },
          { value: 'inventory', label: 'Inventory' },
          { value: 'transactions', label: 'Transactions' }
        ]
      }
    ],
    applyControls(container, values) {
      const title = container.querySelector('.vl-refresh-banner-title');
      if (!title) return;
      const labels = {
        dashboard: 'Refreshing dashboard',
        report: 'Refreshing report',
        inventory: 'Refreshing inventory',
        transactions: 'Refreshing transactions'
      };
      title.textContent = labels[values.target] || labels.dashboard;
    },
    js: `AppLoader.setMessage = function (message) {
  const title = loaderElement.querySelector('.vl-refresh-banner-title');
  if (title) title.textContent = message || 'Refreshing data';
};`
  }
];
