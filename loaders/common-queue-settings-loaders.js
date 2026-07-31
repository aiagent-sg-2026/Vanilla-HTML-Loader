export const commonQueueSettingsLoaders = [
  {
    id: 'report-queue-progress',
    name: 'Report Queue Progress',
    category: 'Progress',
    tech: 'CSS + JavaScript',
    description: 'A determinate queue state for long reports, exports, statements, and scheduled document generation.',
    markup: `<div class="vl-report-queue" role="progressbar" aria-label="Report queue progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="42">
  <div class="vl-report-queue-head"><span><strong class="vl-report-queue-title">Generating sales report</strong><small>Queue position 2 of 4</small></span><b class="vl-report-queue-percent">42%</b></div>
  <div class="vl-report-queue-track"><span class="vl-report-queue-fill"></span></div>
</div>`,
    css: `.vl-report-queue {
  width: min(240px, 86vw);
  display: grid;
  gap: 9px;
  padding: 12px 13px;
  border: 1px solid #e0e6ef;
  border-radius: 10px;
  background: #fff;
  color: #344054;
  font-family: system-ui, sans-serif;
}
.vl-report-queue-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.vl-report-queue-head > span { min-width: 0; display: grid; gap: 2px; }
.vl-report-queue-head strong { font-size: 12px; line-height: 1.3; }
.vl-report-queue-head small { color: #667085; font-size: 10px; line-height: 1.3; }
.vl-report-queue-percent { color: var(--loader-accent); font-size: 12px; font-variant-numeric: tabular-nums; }
.vl-report-queue-track {
  height: 9px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 13%, #e7ecf3);
}
.vl-report-queue-fill {
  display: block;
  width: 42%;
  height: 100%;
  border-radius: inherit;
  background: var(--loader-accent);
  transition: width .25s ease;
}`,
    controls: [
      { type: 'range', key: 'progress', label: 'Queue progress', min: 0, max: 100, step: 1, defaultValue: 42, suffix: '%', full: true },
      {
        type: 'select', key: 'report', label: 'Report type', defaultValue: 'sales', full: true,
        options: [
          { value: 'sales', label: 'Sales report' },
          { value: 'statement', label: 'Customer statement' },
          { value: 'inventory', label: 'Inventory report' },
          { value: 'audit', label: 'Audit report' }
        ]
      }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-report-queue');
      if (!root) return;
      const progress = Math.max(0, Math.min(100, Number(values.progress) || 0));
      const labels = {
        sales: 'Generating sales report',
        statement: 'Generating customer statement',
        inventory: 'Generating inventory report',
        audit: 'Generating audit report'
      };
      root.setAttribute('aria-valuenow', String(progress));
      root.querySelector('.vl-report-queue-title').textContent = labels[values.report] || labels.sales;
      root.querySelector('.vl-report-queue-fill').style.width = `${progress}%`;
      root.querySelector('.vl-report-queue-percent').textContent = `${Math.round(progress)}%`;
    },
    js: `AppLoader.setProgress = function (value, title = 'Generating report') {
  const root = loaderElement.querySelector('.vl-report-queue');
  if (!root) return;
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  root.setAttribute('aria-valuenow', String(progress));
  root.querySelector('.vl-report-queue-title').textContent = title;
  root.querySelector('.vl-report-queue-fill').style.width = progress + '%';
  root.querySelector('.vl-report-queue-percent').textContent = Math.round(progress) + '%';
};`
  },
  {
    id: 'settings-save-loader',
    name: 'Settings Save Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A lightweight settings-saving state for preferences, security rules, workflow options, and system configuration.',
    markup: `<div class="vl-settings-save" role="status" aria-live="polite">
  <span class="vl-settings-save-gear" aria-hidden="true">⚙</span>
  <span class="vl-settings-save-copy"><strong class="vl-settings-save-title">Saving preferences</strong><small>Applying configuration changes…</small></span>
  <span class="vl-settings-save-ring" aria-hidden="true"></span>
</div>`,
    css: `.vl-settings-save {
  width: min(245px, 88vw);
  display: grid;
  grid-template-columns: 32px 1fr 20px;
  align-items: center;
  gap: 10px;
  padding: 11px 12px;
  border: 1px solid #e0e6ef;
  border-radius: 10px;
  background: #fff;
  color: #172033;
  font-family: system-ui, sans-serif;
}
.vl-settings-save-gear {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: color-mix(in srgb, var(--loader-accent) 10%, #f8fafc);
  color: var(--loader-accent);
  font-size: 17px;
  animation: vl-settings-gear calc(var(--loader-speed) * 2.4) linear infinite;
}
.vl-settings-save-copy { min-width: 0; display: grid; gap: 2px; }
.vl-settings-save-copy strong { font-size: 12px; }
.vl-settings-save-copy small { color: #667085; font-size: 10px; }
.vl-settings-save-ring {
  width: 18px;
  height: 18px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-settings-ring calc(var(--loader-speed) * .72) linear infinite;
}
@keyframes vl-settings-gear { to { transform: rotate(360deg); } }
@keyframes vl-settings-ring { to { transform: rotate(360deg); } }`,
    controls: [{
      type: 'select', key: 'section', label: 'Settings section', defaultValue: 'preferences', full: true,
      options: [
        { value: 'preferences', label: 'Preferences' },
        { value: 'security', label: 'Security rules' },
        { value: 'workflow', label: 'Workflow options' },
        { value: 'system', label: 'System settings' }
      ]
    }],
    applyControls(container, values) {
      const title = container.querySelector('.vl-settings-save-title');
      if (!title) return;
      const labels = {
        preferences: 'Saving preferences',
        security: 'Saving security rules',
        workflow: 'Saving workflow options',
        system: 'Saving system settings'
      };
      title.textContent = labels[values.section] || labels.preferences;
    },
    js: `AppLoader.setMessage = function (message) {
  const title = loaderElement.querySelector('.vl-settings-save-title');
  if (title) title.textContent = message || 'Saving settings';
};`
  }
];
