export const researchOverlayLoaders = [
  {
    id: 'content-block-spinner',
    name: 'Content Block Spinner',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A card-level loading overlay that keeps the underlying content structure visible while blocking interaction.',
    markup: `<div class="vl-content-block" aria-busy="true" aria-describedby="vl-content-block-status">
  <div class="vl-content-block-lines" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
  <div class="vl-content-block-overlay" id="vl-content-block-status" role="status">
    <i aria-hidden="true"></i><strong>Loading content</strong>
  </div>
</div>`,
    css: `.vl-content-block {
  position: relative;
  width: min(235px, 84vw);
  min-height: 118px;
  overflow: hidden;
  border: 1px solid #e1e7ef;
  border-radius: 10px;
  background: #fff;
}
.vl-content-block-lines { display: grid; gap: 10px; padding: 18px; opacity: .45; }
.vl-content-block-lines span { height: 10px; border-radius: 5px; background: #dfe5ed; }
.vl-content-block-lines span:nth-child(2) { width: 72%; }
.vl-content-block-lines span:nth-child(3) { width: 88%; }
.vl-content-block-lines span:nth-child(4) { width: 56%; }
.vl-content-block-overlay {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 8px;
  background: rgba(255,255,255,.72);
  color: #344054;
  font: 800 11px/1.3 system-ui, sans-serif;
  backdrop-filter: blur(1px);
}
.vl-content-block-overlay i {
  width: 25px;
  height: 25px;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-content-block-spin calc(var(--loader-speed) * .76) linear infinite;
}
@keyframes vl-content-block-spin { to { transform: rotate(360deg); } }`,
    controls: [
      {
        type: 'select',
        key: 'message',
        label: 'Block message',
        defaultValue: 'content',
        full: true,
        options: [
          { value: 'content', label: 'Loading content' },
          { value: 'refresh', label: 'Refreshing block' },
          { value: 'filter', label: 'Applying filters' },
          { value: 'calculate', label: 'Calculating values' }
        ]
      }
    ],
    applyControls(container, values) {
      const label = container.querySelector('.vl-content-block-overlay strong');
      if (!label) return;
      const messages = {
        content: 'Loading content',
        refresh: 'Refreshing block',
        filter: 'Applying filters',
        calculate: 'Calculating values'
      };
      label.textContent = messages[values.message] || messages.content;
    },
    js: `AppLoader.setMessage = function (message) {
  const label = loaderElement.querySelector('.vl-content-block-overlay strong');
  if (label) label.textContent = message || 'Loading content';
};`
  },
  {
    id: 'data-table-loading-overlay',
    name: 'Data Table Loading Overlay',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A practical table overlay for querying, sorting, recalculating, or refreshing data without removing the table context.',
    markup: `<div class="vl-table-overlay" aria-busy="true" aria-describedby="vl-table-overlay-status">
  <div class="vl-table-overlay-grid" aria-hidden="true">
    <span></span><span></span><span></span>
    <span></span><span></span><span></span>
    <span></span><span></span><span></span>
  </div>
  <div class="vl-table-overlay-status" id="vl-table-overlay-status" role="status"><i aria-hidden="true"></i><strong>Querying records</strong></div>
</div>`,
    css: `.vl-table-overlay {
  position: relative;
  width: min(240px, 86vw);
  min-height: 126px;
  overflow: hidden;
  border: 1px solid #e1e7ef;
  border-radius: 10px;
  background: #fff;
}
.vl-table-overlay-grid {
  display: grid;
  grid-template-columns: 1.2fr .8fr .7fr;
  gap: 8px;
  padding: 16px;
  opacity: .48;
}
.vl-table-overlay-grid span { height: 11px; border-radius: 4px; background: #dfe5ed; }
.vl-table-overlay-status {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  background: rgba(255,255,255,.72);
  color: #344054;
  font: 800 11px/1.3 system-ui, sans-serif;
  backdrop-filter: blur(1px);
}
.vl-table-overlay-status i {
  width: 20px;
  height: 20px;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-table-overlay-spin calc(var(--loader-speed) * .74) linear infinite;
}
@keyframes vl-table-overlay-spin { to { transform: rotate(360deg); } }`,
    controls: [
      {
        type: 'select',
        key: 'message',
        label: 'Table operation',
        defaultValue: 'query',
        full: true,
        options: [
          { value: 'query', label: 'Querying records' },
          { value: 'sort', label: 'Sorting rows' },
          { value: 'refresh', label: 'Refreshing table' },
          { value: 'recalculate', label: 'Recalculating totals' }
        ]
      }
    ],
    applyControls(container, values) {
      const label = container.querySelector('.vl-table-overlay-status strong');
      if (!label) return;
      const messages = {
        query: 'Querying records',
        sort: 'Sorting rows',
        refresh: 'Refreshing table',
        recalculate: 'Recalculating totals'
      };
      label.textContent = messages[values.message] || messages.query;
    },
    js: `AppLoader.setMessage = function (message) {
  const label = loaderElement.querySelector('.vl-table-overlay-status strong');
  if (label) label.textContent = message || 'Querying records';
};`
  }
];
