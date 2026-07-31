export const commonLayoutLoaders = [
  {
    id: 'secondary-button-loader',
    name: 'Secondary Button Loader',
    category: 'Buttons',
    tech: 'CSS + JavaScript',
    description: 'A neutral secondary-button loading state for cancel-safe actions, exports, and background requests.',
    markup: `<button class="vl-secondary-button" type="button" disabled aria-busy="true">
  <span class="vl-secondary-button-ring" aria-hidden="true"></span>
  <span class="vl-secondary-button-label">Exporting…</span>
</button>`,
    css: `.vl-secondary-button {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 10px 16px;
  border: 1px solid #d4dce7;
  border-radius: 9px;
  background: #fff;
  color: #344054;
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-secondary-button-ring {
  width: 16px;
  height: 16px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 20%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-secondary-button calc(var(--loader-speed) * .72) linear infinite;
}
@keyframes vl-secondary-button { to { transform: rotate(360deg); } }`,
    controls: [
      {
        type: 'select',
        key: 'action',
        label: 'Button action',
        defaultValue: 'exporting',
        full: true,
        options: [
          { value: 'exporting', label: 'Exporting' },
          { value: 'refreshing', label: 'Refreshing' },
          { value: 'checking', label: 'Checking' },
          { value: 'loading', label: 'Loading' }
        ]
      }
    ],
    applyControls(container, values) {
      const label = container.querySelector('.vl-secondary-button-label');
      if (!label) return;
      const labels = {
        exporting: 'Exporting…',
        refreshing: 'Refreshing…',
        checking: 'Checking…',
        loading: 'Loading…'
      };
      label.textContent = labels[values.action] || labels.exporting;
    },
    js: `AppLoader.setMessage = function (message) {
  const label = loaderElement.querySelector('.vl-secondary-button-label');
  if (label) label.textContent = message || 'Working…';
};`
  },
  {
    id: 'labelled-progress-bar',
    name: 'Labelled Progress Bar',
    category: 'Progress',
    tech: 'CSS + JavaScript',
    description: 'A clear determinate progress bar with action text and percentage for imports, reports, and batch jobs.',
    markup: `<div class="vl-labelled-progress" role="progressbar" aria-label="Progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="46">
  <div class="vl-labelled-progress-head"><span>Processing records</span><strong>46%</strong></div>
  <div class="vl-labelled-progress-track"><span class="vl-labelled-progress-fill"></span></div>
</div>`,
    css: `.vl-labelled-progress {
  width: min(230px, 82vw);
  display: grid;
  gap: 8px;
  color: #344054;
  font: 700 11px/1.3 system-ui, sans-serif;
}
.vl-labelled-progress-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.vl-labelled-progress-head strong {
  color: var(--loader-accent);
  font-variant-numeric: tabular-nums;
}
.vl-labelled-progress-track {
  height: 10px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 14%, #e7ecf3);
}
.vl-labelled-progress-fill {
  display: block;
  width: 46%;
  height: 100%;
  border-radius: inherit;
  background: var(--loader-accent);
  transition: width .25s ease;
}`,
    controls: [
      { type: 'range', key: 'progress', label: 'Progress', min: 0, max: 100, step: 1, defaultValue: 46, suffix: '%', full: true },
      {
        type: 'select',
        key: 'message',
        label: 'Progress message',
        defaultValue: 'records',
        full: true,
        options: [
          { value: 'records', label: 'Processing records' },
          { value: 'report', label: 'Generating report' },
          { value: 'import', label: 'Importing data' },
          { value: 'sync', label: 'Synchronising data' }
        ]
      }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-labelled-progress');
      if (!root) return;
      const progress = Math.max(0, Math.min(100, Number(values.progress) || 0));
      const labels = {
        records: 'Processing records',
        report: 'Generating report',
        import: 'Importing data',
        sync: 'Synchronising data'
      };
      root.setAttribute('aria-valuenow', String(progress));
      root.querySelector('.vl-labelled-progress-fill').style.width = `${progress}%`;
      root.querySelector('.vl-labelled-progress-head strong').textContent = `${Math.round(progress)}%`;
      root.querySelector('.vl-labelled-progress-head span').textContent = labels[values.message] || labels.records;
    },
    js: `AppLoader.setProgress = function (value, message = 'Processing records') {
  const root = loaderElement.querySelector('.vl-labelled-progress');
  if (!root) return;
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  root.setAttribute('aria-valuenow', String(progress));
  root.querySelector('.vl-labelled-progress-fill').style.width = progress + '%';
  root.querySelector('.vl-labelled-progress-head strong').textContent = Math.round(progress) + '%';
  root.querySelector('.vl-labelled-progress-head span').textContent = message;
};`
  },
  {
    id: 'table-grid-skeleton',
    name: 'Table Grid Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A compact multi-column table skeleton for ERP inquiry pages, reports, and data grids.',
    markup: `<div class="vl-table-skeleton" aria-hidden="true">
  <div class="vl-table-skeleton-row head"><span></span><span></span><span></span></div>
  <div class="vl-table-skeleton-row"><span></span><span></span><span></span></div>
  <div class="vl-table-skeleton-row"><span></span><span></span><span></span></div>
  <div class="vl-table-skeleton-row"><span></span><span></span><span></span></div>
</div>`,
    css: `.vl-table-skeleton {
  width: min(230px, 82vw);
  display: grid;
  gap: 7px;
}
.vl-table-skeleton-row {
  display: grid;
  grid-template-columns: 1.3fr .8fr .7fr;
  gap: 8px;
}
.vl-table-skeleton-row span {
  position: relative;
  overflow: hidden;
  height: 10px;
  border-radius: 5px;
  background: #e7ecf3;
}
.vl-table-skeleton-row.head span { height: 12px; background: #dce3ed; }
.vl-table-skeleton-row span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-table-skeleton calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-table-skeleton { to { transform: translateX(110%); } }`
  },
  {
    id: 'form-skeleton',
    name: 'Form Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A practical form placeholder with labels, fields, and action areas for slow configuration screens.',
    markup: `<div class="vl-form-skeleton" aria-hidden="true">
  <span class="vl-form-label"></span><span class="vl-form-field"></span>
  <span class="vl-form-label short"></span><span class="vl-form-field"></span>
  <span class="vl-form-label"></span><span class="vl-form-field wide"></span>
  <span class="vl-form-action"></span>
</div>`,
    css: `.vl-form-skeleton {
  width: min(230px, 82vw);
  display: grid;
  gap: 7px;
}
.vl-form-skeleton span {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 6px;
  background: #e7ecf3;
}
.vl-form-label { width: 42%; height: 8px; }
.vl-form-label.short { width: 28%; }
.vl-form-field { width: 100%; height: 28px; border-radius: 8px !important; }
.vl-form-field.wide { height: 42px; }
.vl-form-action { width: 34%; height: 26px; margin-top: 2px; border-radius: 8px !important; }
.vl-form-skeleton span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-form-skeleton calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-form-skeleton { to { transform: translateX(110%); } }`
  },
  {
    id: 'status-line-loader',
    name: 'Status Line Loader',
    category: 'Common UI',
    tech: 'CSS',
    description: 'A subtle status row with spinner, main message, and secondary detail for background operations.',
    markup: `<div class="vl-status-line" role="status" aria-live="polite">
  <span class="vl-status-line-ring" aria-hidden="true"></span>
  <span class="vl-status-line-copy"><strong>Checking availability</strong><small>Reviewing current stock and reservations</small></span>
</div>`,
    css: `.vl-status-line {
  width: min(235px, 84vw);
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 11px 12px;
  border: 1px solid #e1e7ef;
  border-radius: 9px;
  background: #fff;
  color: #172033;
  font-family: system-ui, sans-serif;
}
.vl-status-line-ring {
  width: 23px;
  height: 23px;
  flex: 0 0 23px;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-status-line calc(var(--loader-speed) * .76) linear infinite;
}
.vl-status-line-copy { min-width: 0; display: grid; gap: 2px; }
.vl-status-line-copy strong { font-size: 12px; line-height: 1.3; }
.vl-status-line-copy small { color: #667085; font-size: 10px; line-height: 1.3; }
@keyframes vl-status-line { to { transform: rotate(360deg); } }`
  }
];
