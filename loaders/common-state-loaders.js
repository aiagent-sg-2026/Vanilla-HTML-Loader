export const commonStateLoaders = [
  {
    id: 'card-refresh-overlay',
    name: 'Card Refresh Overlay',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A light card-level refresh overlay for dashboards, inquiry panels, and KPI widgets.',
    markup: `<div class="vl-card-refresh" role="status" aria-live="polite">
  <div class="vl-card-refresh-content">
    <span class="vl-card-refresh-title"></span>
    <span class="vl-card-refresh-value"></span>
    <span class="vl-card-refresh-line"></span>
  </div>
  <div class="vl-card-refresh-overlay">
    <span class="vl-card-refresh-ring" aria-hidden="true"></span>
    <strong class="vl-card-refresh-message">Refreshing card</strong>
  </div>
</div>`,
    css: `.vl-card-refresh {
  position: relative;
  width: min(230px, 82vw);
  min-height: 118px;
  overflow: hidden;
  border: 1px solid #e1e7ef;
  border-radius: 11px;
  background: #fff;
  font-family: system-ui, sans-serif;
}
.vl-card-refresh-content {
  display: grid;
  gap: 10px;
  padding: 17px;
  opacity: .42;
}
.vl-card-refresh-title,
.vl-card-refresh-value,
.vl-card-refresh-line {
  display: block;
  border-radius: 6px;
  background: #dfe5ed;
}
.vl-card-refresh-title { width: 48%; height: 9px; }
.vl-card-refresh-value { width: 64%; height: 22px; }
.vl-card-refresh-line { width: 100%; height: 8px; }
.vl-card-refresh-overlay {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 8px;
  background: rgba(255,255,255,.82);
  color: #344054;
}
.vl-card-refresh-ring {
  width: 28px;
  height: 28px;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-card-refresh calc(var(--loader-speed) * .76) linear infinite;
}
.vl-card-refresh-message { font-size: 11px; line-height: 1.3; }
@keyframes vl-card-refresh { to { transform: rotate(360deg); } }`,
    controls: [
      {
        type: 'select',
        key: 'message',
        label: 'Refresh message',
        defaultValue: 'refreshing',
        full: true,
        options: [
          { value: 'refreshing', label: 'Refreshing card' },
          { value: 'updating', label: 'Updating values' },
          { value: 'calculating', label: 'Calculating totals' },
          { value: 'loading', label: 'Loading data' }
        ]
      }
    ],
    applyControls(container, values) {
      const message = container.querySelector('.vl-card-refresh-message');
      if (!message) return;
      const labels = {
        refreshing: 'Refreshing card',
        updating: 'Updating values',
        calculating: 'Calculating totals',
        loading: 'Loading data'
      };
      message.textContent = labels[values.message] || labels.refreshing;
    },
    js: `AppLoader.setMessage = function (message) {
  const target = loaderElement.querySelector('.vl-card-refresh-message');
  if (target) target.textContent = message || 'Refreshing card';
};`
  },
  {
    id: 'empty-state-loader',
    name: 'Empty State Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A simple centred loading state for empty panels before content or search results arrive.',
    markup: `<div class="vl-empty-loader" role="status" aria-live="polite">
  <span class="vl-empty-loader-icon" aria-hidden="true"><i></i></span>
  <strong class="vl-empty-loader-title">Loading content</strong>
  <small class="vl-empty-loader-note">Please wait while we prepare this section.</small>
</div>`,
    css: `.vl-empty-loader {
  width: min(230px, 82vw);
  min-height: 132px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 7px;
  padding: 17px;
  border: 1px dashed #d7dee8;
  border-radius: 11px;
  background: color-mix(in srgb, var(--loader-accent) 3%, #fff);
  color: #172033;
  text-align: center;
  font-family: system-ui, sans-serif;
}
.vl-empty-loader-icon {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 10%, #fff);
}
.vl-empty-loader-icon i {
  width: 19px;
  height: 19px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 22%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-empty-loader calc(var(--loader-speed) * .76) linear infinite;
}
.vl-empty-loader-title { font-size: 13px; line-height: 1.25; }
.vl-empty-loader-note { max-width: 190px; color: #667085; font-size: 10px; line-height: 1.4; }
@keyframes vl-empty-loader { to { transform: rotate(360deg); } }`,
    controls: [
      {
        type: 'select',
        key: 'message',
        label: 'Empty-state message',
        defaultValue: 'content',
        full: true,
        options: [
          { value: 'content', label: 'Loading content' },
          { value: 'results', label: 'Finding results' },
          { value: 'records', label: 'Loading records' },
          { value: 'dashboard', label: 'Preparing dashboard' }
        ]
      }
    ],
    applyControls(container, values) {
      const title = container.querySelector('.vl-empty-loader-title');
      const note = container.querySelector('.vl-empty-loader-note');
      if (!title || !note) return;
      const messages = {
        content: ['Loading content', 'Please wait while we prepare this section.'],
        results: ['Finding results', 'Searching for the most relevant records.'],
        records: ['Loading records', 'Retrieving the latest transaction data.'],
        dashboard: ['Preparing dashboard', 'Calculating widgets and summary values.']
      };
      const [heading, detail] = messages[values.message] || messages.content;
      title.textContent = heading;
      note.textContent = detail;
    },
    js: `AppLoader.setMessage = function (title, detail = '') {
  const root = loaderElement.querySelector('.vl-empty-loader');
  if (!root) return;
  root.querySelector('.vl-empty-loader-title').textContent = title || 'Loading content';
  root.querySelector('.vl-empty-loader-note').textContent = detail;
};`
  }
];
