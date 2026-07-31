export const commonSessionRecordLoaders = [
  {
    id: 'session-refresh-loader',
    name: 'Session Refresh Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A compact authentication refresh state for sessions, access tokens, company context, and user permissions.',
    markup: `<div class="vl-session-refresh" role="status" aria-live="polite">
  <span class="vl-session-refresh-ring" aria-hidden="true"></span>
  <div><strong class="vl-session-refresh-title">Refreshing session</strong><small>Keeping your workspace active…</small></div>
</div>`,
    css: `.vl-session-refresh {
  width: min(230px, 84vw);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid #e0e6ee;
  border-radius: 10px;
  background: #fff;
  color: #344054;
  font: 700 11px/1.3 system-ui, sans-serif;
}
.vl-session-refresh div { display: grid; gap: 3px; min-width: 0; }
.vl-session-refresh small { color: #98a2b3; font-size: 9px; font-weight: 600; }
.vl-session-refresh-ring {
  width: 21px;
  height: 21px;
  flex: 0 0 auto;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-session-refresh-spin calc(var(--loader-speed) * .78) linear infinite;
}
@keyframes vl-session-refresh-spin { to { transform: rotate(360deg); } }`,
    controls: [{
      type: 'select', key: 'target', label: 'Refresh target', defaultValue: 'session', full: true,
      options: [
        { value: 'session', label: 'Refreshing session' },
        { value: 'token', label: 'Refreshing access token' },
        { value: 'company', label: 'Switching company context' },
        { value: 'permissions', label: 'Refreshing permissions' }
      ]
    }],
    applyControls(container, values) {
      const title = container.querySelector('.vl-session-refresh-title');
      if (!title) return;
      const labels = {
        session: 'Refreshing session', token: 'Refreshing access token',
        company: 'Switching company context', permissions: 'Refreshing permissions'
      };
      title.textContent = labels[values.target] || labels.session;
    },
    js: `AppLoader.setMessage = function (message) {
  const target = loaderElement.querySelector('.vl-session-refresh-title');
  if (target) target.textContent = message || 'Refreshing session';
};`
  },
  {
    id: 'record-lock-loader',
    name: 'Record Lock Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A record-lock loading state for invoices, orders, customer records, and concurrent-edit checks.',
    markup: `<div class="vl-record-lock" role="status" aria-live="polite">
  <span class="vl-record-lock-icon" aria-hidden="true"><i></i></span>
  <div><strong class="vl-record-lock-title">Checking record lock</strong><small>Confirming edit availability…</small></div>
  <span class="vl-record-lock-dots" aria-hidden="true"><i></i><i></i><i></i></span>
</div>`,
    css: `.vl-record-lock {
  width: min(240px, 86vw);
  min-height: 46px;
  display: grid;
  grid-template-columns: 28px 1fr auto;
  align-items: center;
  gap: 9px;
  padding: 8px 11px;
  border: 1px solid #e0e6ee;
  border-radius: 9px;
  background: #f8fafc;
  color: #344054;
  font: 700 10px/1.3 system-ui, sans-serif;
}
.vl-record-lock > div { display: grid; gap: 3px; }
.vl-record-lock small { color: #98a2b3; font-size: 9px; }
.vl-record-lock-icon { width: 25px; height: 22px; position: relative; border: 2px solid var(--loader-accent); border-radius: 6px; }
.vl-record-lock-icon::before { content: ''; position: absolute; width: 12px; height: 10px; left: 4px; top: -10px; border: 2px solid var(--loader-accent); border-bottom: 0; border-radius: 8px 8px 0 0; }
.vl-record-lock-icon i { position: absolute; width: 4px; height: 7px; left: 8px; top: 7px; border-radius: 3px; background: var(--loader-accent); animation: vl-record-lock-pulse calc(var(--loader-speed) * 1.1) ease-in-out infinite; }
.vl-record-lock-dots { display: flex; gap: 3px; }
.vl-record-lock-dots i { width: 4px; height: 4px; border-radius: 50%; background: var(--loader-accent); animation: vl-record-lock-dot calc(var(--loader-speed) * 1.05) ease-in-out infinite; }
.vl-record-lock-dots i:nth-child(2) { animation-delay: .12s; }
.vl-record-lock-dots i:nth-child(3) { animation-delay: .24s; }
@keyframes vl-record-lock-pulse { 50% { opacity: .35; } }
@keyframes vl-record-lock-dot { 0%,80%,100% { opacity: .25; transform: scale(.6); } 40% { opacity: 1; transform: scale(1); } }`,
    controls: [{
      type: 'select', key: 'record', label: 'Record type', defaultValue: 'record', full: true,
      options: [
        { value: 'record', label: 'Checking record lock' },
        { value: 'invoice', label: 'Checking invoice lock' },
        { value: 'order', label: 'Checking order lock' },
        { value: 'customer', label: 'Checking customer lock' }
      ]
    }],
    applyControls(container, values) {
      const title = container.querySelector('.vl-record-lock-title');
      if (!title) return;
      const labels = {
        record: 'Checking record lock', invoice: 'Checking invoice lock',
        order: 'Checking order lock', customer: 'Checking customer lock'
      };
      title.textContent = labels[values.record] || labels.record;
    },
    js: `AppLoader.setMessage = function (message) {
  const target = loaderElement.querySelector('.vl-record-lock-title');
  if (target) target.textContent = message || 'Checking record lock';
};`
  },
  {
    id: 'duplicate-check-loader',
    name: 'Duplicate Check Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A duplicate-detection state for customers, vendors, invoice references, and stock codes.',
    markup: `<div class="vl-duplicate-check" role="status" aria-live="polite">
  <span class="vl-duplicate-check-cards" aria-hidden="true"><i></i><i></i></span>
  <strong class="vl-duplicate-check-title">Checking duplicates</strong>
  <span class="vl-duplicate-check-line" aria-hidden="true"></span>
</div>`,
    css: `.vl-duplicate-check {
  width: min(225px, 82vw);
  display: grid;
  grid-template-columns: 34px 1fr;
  align-items: center;
  gap: 4px 10px;
  color: #344054;
  font: 750 11px/1.3 system-ui, sans-serif;
}
.vl-duplicate-check-cards { width: 30px; height: 25px; position: relative; grid-row: span 2; }
.vl-duplicate-check-cards i { position: absolute; width: 19px; height: 15px; border: 2px solid var(--loader-accent); border-radius: 5px; background: #fff; }
.vl-duplicate-check-cards i:first-child { left: 1px; top: 1px; opacity: .45; }
.vl-duplicate-check-cards i:last-child { right: 1px; bottom: 1px; animation: vl-duplicate-card calc(var(--loader-speed) * 1.25) ease-in-out infinite; }
.vl-duplicate-check-line { height: 5px; border-radius: 999px; overflow: hidden; background: #e7ecf3; }
.vl-duplicate-check-line::after { content: ''; display: block; width: 38%; height: 100%; border-radius: inherit; background: var(--loader-accent); animation: vl-duplicate-line calc(var(--loader-speed) * 1.3) ease-in-out infinite; }
@keyframes vl-duplicate-card { 50% { transform: translate(-3px,-2px); } }
@keyframes vl-duplicate-line { 0% { transform: translateX(-120%); } 100% { transform: translateX(330%); } }`,
    controls: [{
      type: 'select', key: 'entity', label: 'Duplicate target', defaultValue: 'records', full: true,
      options: [
        { value: 'records', label: 'Checking duplicates' },
        { value: 'customers', label: 'Checking customer duplicates' },
        { value: 'references', label: 'Checking invoice references' },
        { value: 'stocks', label: 'Checking stock codes' }
      ]
    }],
    applyControls(container, values) {
      const title = container.querySelector('.vl-duplicate-check-title');
      if (!title) return;
      const labels = {
        records: 'Checking duplicates', customers: 'Checking customer duplicates',
        references: 'Checking invoice references', stocks: 'Checking stock codes'
      };
      title.textContent = labels[values.entity] || labels.records;
    },
    js: `AppLoader.setMessage = function (message) {
  const target = loaderElement.querySelector('.vl-duplicate-check-title');
  if (target) target.textContent = message || 'Checking duplicates';
};`
  }
];
