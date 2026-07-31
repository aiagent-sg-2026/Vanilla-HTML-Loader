export const commonRowDocumentLoaders = [
  {
    id: 'row-update-loader',
    name: 'Row Update Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A focused table-row status for inline edits, recalculation, approval, and server-side row updates.',
    markup: `<div class="vl-row-update" role="status" aria-live="polite">
  <span class="vl-row-update-code">ITEM-0008</span>
  <span class="vl-row-update-message"><i aria-hidden="true"></i>Updating row</span>
  <span class="vl-row-update-value">—</span>
</div>`,
    css: `.vl-row-update {
  width: min(235px, 84vw);
  min-height: 40px;
  display: grid;
  grid-template-columns: 1fr auto 34px;
  align-items: center;
  gap: 8px;
  padding: 0 10px;
  border: 1px solid #e0e6ee;
  border-radius: 7px;
  background: #fff;
  color: #344054;
  font: 700 10px/1.25 system-ui, sans-serif;
}
.vl-row-update-code { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vl-row-update-message { display: inline-flex; align-items: center; gap: 6px; color: #667085; white-space: nowrap; }
.vl-row-update-message i {
  width: 12px;
  height: 12px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-row-update-spin calc(var(--loader-speed) * .7) linear infinite;
}
.vl-row-update-value { text-align: right; color: var(--loader-accent); }
@keyframes vl-row-update-spin { to { transform: rotate(360deg); } }`,
    controls: [
      {
        type: 'select',
        key: 'operation',
        label: 'Row operation',
        defaultValue: 'updating',
        full: true,
        options: [
          { value: 'updating', label: 'Updating row' },
          { value: 'calculating', label: 'Calculating value' },
          { value: 'approving', label: 'Approving row' },
          { value: 'validating', label: 'Validating row' }
        ]
      }
    ],
    applyControls(container, values) {
      const message = container.querySelector('.vl-row-update-message');
      if (!message) return;
      const labels = {
        updating: 'Updating row',
        calculating: 'Calculating value',
        approving: 'Approving row',
        validating: 'Validating row'
      };
      const icon = message.querySelector('i');
      message.replaceChildren(icon, document.createTextNode(labels[values.operation] || labels.updating));
    },
    js: `AppLoader.setMessage = function (message) {
  const target = loaderElement.querySelector('.vl-row-update-message');
  if (!target) return;
  const icon = target.querySelector('i');
  target.replaceChildren(icon, document.createTextNode(message || 'Updating row'));
};`
  },
  {
    id: 'document-generation-loader',
    name: 'Document Generation Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A document-building loader for PDF, print forms, statements, quotations, and generated reports.',
    markup: `<div class="vl-document-loader" role="status" aria-live="polite">
  <span class="vl-document-loader-sheet" aria-hidden="true"><i></i><i></i><i></i></span>
  <span class="vl-document-loader-copy"><strong class="vl-document-loader-title">Generating document</strong><small>Preparing content and layout…</small></span>
</div>`,
    css: `.vl-document-loader {
  width: min(230px, 82vw);
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 12px;
  border: 1px solid #e0e6ee;
  border-radius: 9px;
  background: #fff;
  color: #172033;
  font-family: system-ui, sans-serif;
}
.vl-document-loader-sheet {
  width: 34px;
  height: 42px;
  flex: 0 0 34px;
  display: grid;
  align-content: center;
  gap: 4px;
  padding: 7px 6px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 45%, #d4dce7);
  border-radius: 6px;
  background: #fff;
  animation: vl-document-loader-pulse calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-document-loader-sheet i {
  display: block;
  height: 3px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 35%, #dfe5ed);
}
.vl-document-loader-sheet i:nth-child(2) { width: 78%; }
.vl-document-loader-sheet i:nth-child(3) { width: 56%; }
.vl-document-loader-copy { min-width: 0; display: grid; gap: 3px; }
.vl-document-loader-copy strong { font-size: 12px; line-height: 1.25; }
.vl-document-loader-copy small { color: #667085; font-size: 10px; line-height: 1.3; }
@keyframes vl-document-loader-pulse {
  0%, 100% { transform: translateY(0); box-shadow: 0 0 0 0 transparent; }
  50% { transform: translateY(-3px); box-shadow: 0 8px 16px color-mix(in srgb, var(--loader-accent) 16%, transparent); }
}`,
    controls: [
      {
        type: 'select',
        key: 'document',
        label: 'Document type',
        defaultValue: 'document',
        full: true,
        options: [
          { value: 'document', label: 'Generating document' },
          { value: 'pdf', label: 'Generating PDF' },
          { value: 'statement', label: 'Generating statement' },
          { value: 'printform', label: 'Preparing print form' }
        ]
      }
    ],
    applyControls(container, values) {
      const title = container.querySelector('.vl-document-loader-title');
      if (!title) return;
      const labels = {
        document: 'Generating document',
        pdf: 'Generating PDF',
        statement: 'Generating statement',
        printform: 'Preparing print form'
      };
      title.textContent = labels[values.document] || labels.document;
    },
    js: `AppLoader.setMessage = function (message) {
  const target = loaderElement.querySelector('.vl-document-loader-title');
  if (target) target.textContent = message || 'Generating document';
};`
  }
];
