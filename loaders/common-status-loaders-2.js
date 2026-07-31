export const commonStatusLoaders2 = [
  {
    id: 'status-chip-loader',
    name: 'Status Chip Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A compact status chip for approval checks, posting, synchronisation, and background validation.',
    markup: `<span class="vl-status-chip" role="status" aria-live="polite">
  <i class="vl-status-chip-ring" aria-hidden="true"></i>
  <strong class="vl-status-chip-label">Checking status</strong>
</span>`,
    css: `.vl-status-chip {
  min-height: 32px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 10px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #dfe5ed);
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 7%, #fff);
  color: var(--loader-accent);
  font: 800 11px/1.2 system-ui, sans-serif;
}
.vl-status-chip-ring {
  width: 13px;
  height: 13px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 20%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-status-chip-spin calc(var(--loader-speed) * .72) linear infinite;
}
@keyframes vl-status-chip-spin { to { transform: rotate(360deg); } }`,
    controls: [
      {
        type: 'select',
        key: 'status',
        label: 'Status message',
        defaultValue: 'checking',
        full: true,
        options: [
          { value: 'checking', label: 'Checking status' },
          { value: 'posting', label: 'Posting transaction' },
          { value: 'approving', label: 'Checking approval' },
          { value: 'syncing', label: 'Synchronising' }
        ]
      }
    ],
    applyControls(container, values) {
      const label = container.querySelector('.vl-status-chip-label');
      if (!label) return;
      const labels = {
        checking: 'Checking status',
        posting: 'Posting transaction',
        approving: 'Checking approval',
        syncing: 'Synchronising'
      };
      label.textContent = labels[values.status] || labels.checking;
    },
    js: `AppLoader.setMessage = function (message) {
  const label = loaderElement.querySelector('.vl-status-chip-label');
  if (label) label.textContent = message || 'Checking status';
};`
  },
  {
    id: 'numeric-counter-loader',
    name: 'Numeric Counter Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A small counter loading state for dashboard totals, record counts, balances, and KPI calculations.',
    markup: `<div class="vl-counter-loader" role="status" aria-live="polite">
  <span class="vl-counter-loader-label">Calculating records</span>
  <span class="vl-counter-loader-value"><i></i><i></i><i></i></span>
</div>`,
    css: `.vl-counter-loader {
  width: min(190px, 72vw);
  display: grid;
  gap: 7px;
  padding: 11px 12px;
  border: 1px solid #e0e6ee;
  border-radius: 10px;
  background: #fff;
  color: #667085;
  font: 750 10px/1.3 system-ui, sans-serif;
}
.vl-counter-loader-value {
  display: inline-flex;
  align-items: flex-end;
  gap: 4px;
  min-height: 24px;
}
.vl-counter-loader-value i {
  width: 12px;
  border-radius: 4px;
  background: var(--loader-accent);
  animation: vl-counter-loader calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-counter-loader-value i:nth-child(1) { height: 15px; }
.vl-counter-loader-value i:nth-child(2) { height: 22px; animation-delay: .12s; }
.vl-counter-loader-value i:nth-child(3) { height: 18px; animation-delay: .24s; }
@keyframes vl-counter-loader {
  0%, 100% { transform: scaleY(.58); opacity: .35; }
  50% { transform: scaleY(1); opacity: 1; }
}`,
    controls: [
      {
        type: 'select',
        key: 'metric',
        label: 'Counter metric',
        defaultValue: 'records',
        full: true,
        options: [
          { value: 'records', label: 'Calculating records' },
          { value: 'balance', label: 'Calculating balance' },
          { value: 'sales', label: 'Calculating sales' },
          { value: 'inventory', label: 'Counting inventory' }
        ]
      }
    ],
    applyControls(container, values) {
      const label = container.querySelector('.vl-counter-loader-label');
      if (!label) return;
      const labels = {
        records: 'Calculating records',
        balance: 'Calculating balance',
        sales: 'Calculating sales',
        inventory: 'Counting inventory'
      };
      label.textContent = labels[values.metric] || labels.records;
    },
    js: `AppLoader.setMessage = function (message) {
  const label = loaderElement.querySelector('.vl-counter-loader-label');
  if (label) label.textContent = message || 'Calculating records';
};`
  },
  {
    id: 'segmented-progress-loader',
    name: 'Segmented Progress Loader',
    category: 'Progress',
    tech: 'CSS + JavaScript',
    description: 'A determinate segmented bar for import stages, batch processing, setup flows, and document generation.',
    markup: `<div class="vl-segmented-progress" role="progressbar" aria-label="Progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="60">
  <div class="vl-segmented-progress-head"><span>Processing batch</span><strong>60%</strong></div>
  <div class="vl-segmented-progress-track"><i></i><i></i><i></i><i></i><i></i></div>
</div>`,
    css: `.vl-segmented-progress {
  --vl-segments: 3;
  width: min(230px, 82vw);
  display: grid;
  gap: 8px;
  color: #344054;
  font: 750 10px/1.3 system-ui, sans-serif;
}
.vl-segmented-progress-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.vl-segmented-progress-head strong { color: var(--loader-accent); font-variant-numeric: tabular-nums; }
.vl-segmented-progress-track { display: grid; grid-template-columns: repeat(5, 1fr); gap: 5px; }
.vl-segmented-progress-track i {
  height: 9px;
  border-radius: 999px;
  background: #e3e8ef;
}
.vl-segmented-progress-track i:nth-child(-n + 3) { background: var(--loader-accent); }
.vl-segmented-progress.is-0 i,
.vl-segmented-progress.is-1 i:nth-child(n + 2),
.vl-segmented-progress.is-2 i:nth-child(n + 3),
.vl-segmented-progress.is-3 i:nth-child(n + 4),
.vl-segmented-progress.is-4 i:nth-child(n + 5) { background: #e3e8ef; }
.vl-segmented-progress.is-1 i:first-child,
.vl-segmented-progress.is-2 i:nth-child(-n + 2),
.vl-segmented-progress.is-3 i:nth-child(-n + 3),
.vl-segmented-progress.is-4 i:nth-child(-n + 4),
.vl-segmented-progress.is-5 i { background: var(--loader-accent); }
.vl-segmented-progress-track i:last-child {
  animation: vl-segmented-progress-pulse calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
@keyframes vl-segmented-progress-pulse { 50% { opacity: .45; } }`,
    controls: [
      { type: 'range', key: 'progress', label: 'Progress', min: 0, max: 100, step: 5, defaultValue: 60, suffix: '%', full: true },
      {
        type: 'select',
        key: 'message',
        label: 'Progress message',
        defaultValue: 'batch',
        full: true,
        options: [
          { value: 'batch', label: 'Processing batch' },
          { value: 'import', label: 'Importing records' },
          { value: 'document', label: 'Generating document' },
          { value: 'setup', label: 'Completing setup' }
        ]
      }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-segmented-progress');
      if (!root) return;
      const progress = Math.max(0, Math.min(100, Number(values.progress) || 0));
      const segment = Math.max(0, Math.min(5, Math.ceil(progress / 20)));
      const labels = {
        batch: 'Processing batch',
        import: 'Importing records',
        document: 'Generating document',
        setup: 'Completing setup'
      };
      root.className = `vl-segmented-progress is-${segment}`;
      root.setAttribute('aria-valuenow', String(progress));
      root.querySelector('.vl-segmented-progress-head span').textContent = labels[values.message] || labels.batch;
      root.querySelector('.vl-segmented-progress-head strong').textContent = `${Math.round(progress)}%`;
    },
    js: `AppLoader.setProgress = function (value, message = 'Processing batch') {
  const root = loaderElement.querySelector('.vl-segmented-progress');
  if (!root) return;
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  const segment = Math.max(0, Math.min(5, Math.ceil(progress / 20)));
  root.className = 'vl-segmented-progress is-' + segment;
  root.setAttribute('aria-valuenow', String(progress));
  root.querySelector('.vl-segmented-progress-head span').textContent = message;
  root.querySelector('.vl-segmented-progress-head strong').textContent = Math.round(progress) + '%';
};`
  }
];
