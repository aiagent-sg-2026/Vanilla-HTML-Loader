export const commonTableNavigationLoaders = [
  {
    id: 'table-footer-loader',
    name: 'Table Footer Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A table-footer loading state for totals, record counts, grand totals, and server-side pagination summaries.',
    markup: `<div class="vl-table-footer-loader" role="status" aria-live="polite">
  <span class="vl-table-footer-label">Calculating totals</span>
  <span class="vl-table-footer-dots" aria-hidden="true"><i></i><i></i><i></i></span>
  <strong class="vl-table-footer-value">—</strong>
</div>`,
    css: `.vl-table-footer-loader {
  width: min(235px, 84vw);
  min-height: 40px;
  display: grid;
  grid-template-columns: 1fr auto 48px;
  align-items: center;
  gap: 9px;
  padding: 0 11px;
  border-top: 2px solid #dfe5ed;
  border-bottom: 1px solid #e7ecf3;
  background: #f8fafc;
  color: #344054;
  font: 800 10px/1.3 system-ui, sans-serif;
}
.vl-table-footer-dots { display: inline-flex; gap: 3px; }
.vl-table-footer-dots i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-table-footer-dot calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-table-footer-dots i:nth-child(2) { animation-delay: .12s; }
.vl-table-footer-dots i:nth-child(3) { animation-delay: .24s; }
.vl-table-footer-value { text-align: right; color: var(--loader-accent); font-variant-numeric: tabular-nums; }
@keyframes vl-table-footer-dot {
  0%, 80%, 100% { transform: scale(.55); opacity: .3; }
  40% { transform: scale(1); opacity: 1; }
}`,
    controls: [
      {
        type: 'select',
        key: 'summary',
        label: 'Footer calculation',
        defaultValue: 'totals',
        full: true,
        options: [
          { value: 'totals', label: 'Calculating totals' },
          { value: 'count', label: 'Counting records' },
          { value: 'balance', label: 'Calculating balance' },
          { value: 'tax', label: 'Calculating tax' }
        ]
      }
    ],
    applyControls(container, values) {
      const label = container.querySelector('.vl-table-footer-label');
      if (!label) return;
      const labels = {
        totals: 'Calculating totals',
        count: 'Counting records',
        balance: 'Calculating balance',
        tax: 'Calculating tax'
      };
      label.textContent = labels[values.summary] || labels.totals;
    },
    js: `AppLoader.setMessage = function (message) {
  const label = loaderElement.querySelector('.vl-table-footer-label');
  if (label) label.textContent = message || 'Calculating totals';
};`
  },
  {
    id: 'inline-pagination-loader',
    name: 'Inline Pagination Loader',
    category: 'Common UI',
    tech: 'CSS',
    description: 'A compact pagination loading pattern for server-side tables, search results, and record inquiries.',
    markup: `<div class="vl-inline-pagination" role="status" aria-label="Loading next page">
  <span class="vl-inline-pagination-button">‹</span>
  <span class="vl-inline-pagination-page">1</span>
  <span class="vl-inline-pagination-ring" aria-hidden="true"></span>
  <span class="vl-inline-pagination-page muted">3</span>
  <span class="vl-inline-pagination-button">›</span>
</div>`,
    css: `.vl-inline-pagination {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #667085;
  font: 800 11px/1 system-ui, sans-serif;
}
.vl-inline-pagination > span {
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border: 1px solid #dfe5ed;
  border-radius: 7px;
  background: #fff;
}
.vl-inline-pagination .vl-inline-pagination-page { color: var(--loader-accent); border-color: color-mix(in srgb, var(--loader-accent) 35%, #dfe5ed); }
.vl-inline-pagination .vl-inline-pagination-page.muted { color: #98a2b3; border-color: #dfe5ed; }
.vl-inline-pagination-ring {
  box-sizing: border-box;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 18%, transparent) !important;
  border-top-color: var(--loader-accent) !important;
  border-radius: 50% !important;
  background: transparent !important;
  animation: vl-inline-pagination-spin calc(var(--loader-speed) * .72) linear infinite;
}
@keyframes vl-inline-pagination-spin { to { transform: rotate(360deg); } }`
  }
];
