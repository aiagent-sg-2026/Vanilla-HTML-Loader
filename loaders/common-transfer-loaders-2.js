export const commonTransferLoaders2 = [
  {
    id: 'export-preparation-loader',
    name: 'Export Preparation Loader',
    category: 'Progress',
    tech: 'CSS + JavaScript',
    description: 'A determinate export loader for Excel, CSV, PDF, and report-package generation.',
    markup: `<div class="vl-export-progress" role="progressbar" aria-label="Export preparation" aria-valuemin="0" aria-valuemax="100" aria-valuenow="62">
  <div class="vl-export-progress-head"><span class="vl-export-progress-title">Preparing Excel export</span><strong class="vl-export-progress-value">62%</strong></div>
  <div class="vl-export-progress-track"><span class="vl-export-progress-fill"></span></div>
  <small class="vl-export-progress-note">Formatting columns and rows…</small>
</div>`,
    css: `.vl-export-progress {
  width: min(235px, 84vw);
  display: grid;
  gap: 7px;
  color: #344054;
  font: 700 10px/1.3 system-ui, sans-serif;
}
.vl-export-progress-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.vl-export-progress-title { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vl-export-progress-value { color: var(--loader-accent); font-variant-numeric: tabular-nums; }
.vl-export-progress-track {
  height: 9px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 14%, #e8edf4);
}
.vl-export-progress-fill {
  display: block;
  width: 62%;
  height: 100%;
  border-radius: inherit;
  background: var(--loader-accent);
  transition: width .25s ease;
}
.vl-export-progress-note { color: #667085; font-size: 9px; }`,
    controls: [
      { type: 'range', key: 'progress', label: 'Export progress', min: 0, max: 100, step: 1, defaultValue: 62, suffix: '%', full: true },
      {
        type: 'select',
        key: 'format',
        label: 'Export format',
        defaultValue: 'excel',
        full: true,
        options: [
          { value: 'excel', label: 'Excel export' },
          { value: 'csv', label: 'CSV export' },
          { value: 'pdf', label: 'PDF export' },
          { value: 'package', label: 'Report package' }
        ]
      }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-export-progress');
      if (!root) return;
      const progress = Math.max(0, Math.min(100, Number(values.progress) || 0));
      const labels = {
        excel: ['Preparing Excel export', 'Formatting columns and rows…'],
        csv: ['Preparing CSV export', 'Serialising records…'],
        pdf: ['Preparing PDF export', 'Rendering pages and layout…'],
        package: ['Preparing report package', 'Collecting generated files…']
      };
      const [title, note] = labels[values.format] || labels.excel;
      root.setAttribute('aria-valuenow', String(progress));
      root.querySelector('.vl-export-progress-fill').style.width = `${progress}%`;
      root.querySelector('.vl-export-progress-value').textContent = `${Math.round(progress)}%`;
      root.querySelector('.vl-export-progress-title').textContent = title;
      root.querySelector('.vl-export-progress-note').textContent = note;
    },
    js: `AppLoader.setProgress = function (value, title = 'Preparing export') {
  const root = loaderElement.querySelector('.vl-export-progress');
  if (!root) return;
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  root.setAttribute('aria-valuenow', String(progress));
  root.querySelector('.vl-export-progress-fill').style.width = progress + '%';
  root.querySelector('.vl-export-progress-value').textContent = Math.round(progress) + '%';
  root.querySelector('.vl-export-progress-title').textContent = title;
};`
  },
  {
    id: 'bulk-selection-progress',
    name: 'Bulk Selection Progress',
    category: 'Progress',
    tech: 'CSS + JavaScript',
    description: 'A batch-selection progress state for posting, approving, archiving, exporting, or updating selected records.',
    markup: `<div class="vl-bulk-progress" role="progressbar" aria-label="Bulk operation progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40">
  <div class="vl-bulk-progress-summary"><span class="vl-bulk-progress-ring" aria-hidden="true"></span><span><strong class="vl-bulk-progress-title">Updating selected records</strong><small class="vl-bulk-progress-count">8 of 20 complete</small></span></div>
  <div class="vl-bulk-progress-track"><span class="vl-bulk-progress-fill"></span></div>
</div>`,
    css: `.vl-bulk-progress {
  width: min(235px, 84vw);
  display: grid;
  gap: 9px;
  padding: 11px 12px;
  border: 1px solid #e0e6ee;
  border-radius: 9px;
  background: #fff;
  color: #344054;
  font-family: system-ui, sans-serif;
}
.vl-bulk-progress-summary { display: flex; align-items: center; gap: 9px; }
.vl-bulk-progress-summary > span:last-child { min-width: 0; display: grid; gap: 2px; }
.vl-bulk-progress-title { font-size: 11px; line-height: 1.25; }
.vl-bulk-progress-count { color: #667085; font-size: 9px; line-height: 1.25; }
.vl-bulk-progress-ring {
  width: 22px;
  height: 22px;
  flex: 0 0 22px;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-bulk-progress-spin calc(var(--loader-speed) * .75) linear infinite;
}
.vl-bulk-progress-track {
  height: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 14%, #e8edf4);
}
.vl-bulk-progress-fill {
  display: block;
  width: 40%;
  height: 100%;
  border-radius: inherit;
  background: var(--loader-accent);
  transition: width .25s ease;
}
@keyframes vl-bulk-progress-spin { to { transform: rotate(360deg); } }`,
    controls: [
      { type: 'range', key: 'progress', label: 'Bulk progress', min: 0, max: 100, step: 5, defaultValue: 40, suffix: '%', full: true },
      {
        type: 'select',
        key: 'operation',
        label: 'Bulk operation',
        defaultValue: 'updating',
        full: true,
        options: [
          { value: 'updating', label: 'Updating records' },
          { value: 'approving', label: 'Approving records' },
          { value: 'posting', label: 'Posting records' },
          { value: 'archiving', label: 'Archiving records' }
        ]
      }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-bulk-progress');
      if (!root) return;
      const progress = Math.max(0, Math.min(100, Number(values.progress) || 0));
      const completed = Math.round(progress / 5);
      const labels = {
        updating: 'Updating selected records',
        approving: 'Approving selected records',
        posting: 'Posting selected records',
        archiving: 'Archiving selected records'
      };
      root.setAttribute('aria-valuenow', String(progress));
      root.querySelector('.vl-bulk-progress-fill').style.width = `${progress}%`;
      root.querySelector('.vl-bulk-progress-title').textContent = labels[values.operation] || labels.updating;
      root.querySelector('.vl-bulk-progress-count').textContent = `${completed} of 20 complete`;
    },
    js: `AppLoader.setProgress = function (value, message = 'Updating selected records') {
  const root = loaderElement.querySelector('.vl-bulk-progress');
  if (!root) return;
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  root.setAttribute('aria-valuenow', String(progress));
  root.querySelector('.vl-bulk-progress-fill').style.width = progress + '%';
  root.querySelector('.vl-bulk-progress-title').textContent = message;
  root.querySelector('.vl-bulk-progress-count').textContent = Math.round(progress / 5) + ' of 20 complete';
};`
  }
];
