export const commonPanelLoaders = [
  {
    id: 'page-overlay-loader',
    name: 'Page Overlay Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A restrained overlay-style loading state for page transitions and protected transaction processing.',
    markup: `<div class="vl-page-overlay" role="status" aria-live="polite">
  <div class="vl-page-overlay-panel">
    <span class="vl-page-overlay-spinner" aria-hidden="true"></span>
    <strong class="vl-page-overlay-title">Loading page</strong>
    <span class="vl-page-overlay-note">Please wait…</span>
  </div>
</div>`,
    css: `.vl-page-overlay {
  width: min(230px, 82vw);
  min-height: 132px;
  display: grid;
  place-items: center;
  padding: 14px;
  border-radius: 12px;
  background: rgba(15, 23, 42, .08);
  font-family: system-ui, sans-serif;
}
.vl-page-overlay-panel {
  width: 100%;
  display: grid;
  place-items: center;
  gap: 7px;
  padding: 18px;
  border: 1px solid #e0e7ef;
  border-radius: 10px;
  background: #fff;
  color: #172033;
  box-shadow: 0 12px 28px rgba(15, 23, 42, .12);
  text-align: center;
}
.vl-page-overlay-spinner {
  width: 32px;
  height: 32px;
  border: 4px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-page-overlay-spin calc(var(--loader-speed) * .78) linear infinite;
}
.vl-page-overlay-title { font-size: 14px; line-height: 1.2; }
.vl-page-overlay-note { color: #667085; font-size: 11px; line-height: 1.3; }
@keyframes vl-page-overlay-spin { to { transform: rotate(360deg); } }`,
    controls: [
      {
        type: 'select',
        key: 'message',
        label: 'Overlay message',
        defaultValue: 'page',
        full: true,
        options: [
          { value: 'page', label: 'Loading page' },
          { value: 'transaction', label: 'Processing transaction' },
          { value: 'sync', label: 'Synchronising data' }
        ]
      }
    ],
    applyControls(container, values) {
      const title = container.querySelector('.vl-page-overlay-title');
      const note = container.querySelector('.vl-page-overlay-note');
      if (!title || !note) return;
      const messages = {
        page: ['Loading page', 'Please wait…'],
        transaction: ['Processing transaction', 'Do not close this window…'],
        sync: ['Synchronising data', 'Checking the latest records…']
      };
      const [heading, detail] = messages[values.message] || messages.page;
      title.textContent = heading;
      note.textContent = detail;
    },
    js: `AppLoader.setMessage = function (title, detail = '') {
  const root = loaderElement.querySelector('.vl-page-overlay');
  if (!root) return;
  root.querySelector('.vl-page-overlay-title').textContent = title || 'Loading…';
  root.querySelector('.vl-page-overlay-note').textContent = detail;
};`
  },
  {
    id: 'modal-processing-state',
    name: 'Modal Processing State',
    category: 'Common UI',
    tech: 'CSS',
    description: 'A conventional modal-body loading layout with a title, explanation, and activity indicator.',
    markup: `<div class="vl-modal-processing" role="status" aria-live="polite">
  <span class="vl-modal-processing-ring" aria-hidden="true"></span>
  <span class="vl-modal-processing-copy">
    <strong>Processing request</strong>
    <small>This may take a few seconds.</small>
  </span>
</div>`,
    css: `.vl-modal-processing {
  width: min(230px, 82vw);
  min-height: 88px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  border: 1px solid #e1e7ef;
  border-radius: 11px;
  background: #fff;
  color: #172033;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .08);
  font-family: system-ui, sans-serif;
}
.vl-modal-processing-ring {
  width: 34px;
  height: 34px;
  flex: 0 0 34px;
  border: 4px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-modal-processing calc(var(--loader-speed) * .8) linear infinite;
}
.vl-modal-processing-copy { min-width: 0; display: grid; gap: 4px; }
.vl-modal-processing-copy strong { font-size: 13px; line-height: 1.25; }
.vl-modal-processing-copy small { color: #667085; font-size: 11px; line-height: 1.35; }
@keyframes vl-modal-processing { to { transform: rotate(360deg); } }`
  }
];
