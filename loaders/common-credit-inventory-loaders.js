export const commonCreditInventoryLoaders = [
  {
    id: 'credit-limit-check-loader',
    name: 'Credit Limit Check Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A compact credit-control state for quotations, sales orders, invoices, and customer account checks.',
    markup: `<div class="vl-credit-check" role="status" aria-live="polite">
  <span class="vl-credit-check-ring" aria-hidden="true"></span>
  <div class="vl-credit-check-copy">
    <strong class="vl-credit-check-title">Checking customer credit…</strong>
    <span class="vl-credit-check-meta">Limit · Used · Available</span>
  </div>
  <span class="vl-credit-check-value">—</span>
</div>`,
    css: `.vl-credit-check {
  width: min(245px, 86vw);
  min-height: 48px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 9px 11px;
  border: 1px solid #dfe5ed;
  border-radius: 10px;
  background: #fff;
  color: #344054;
  font: 700 10px/1.35 system-ui, sans-serif;
}
.vl-credit-check-ring {
  width: 18px;
  height: 18px;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-credit-check-spin calc(var(--loader-speed) * .75) linear infinite;
}
.vl-credit-check-copy { min-width: 0; display: grid; gap: 3px; }
.vl-credit-check-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vl-credit-check-meta { color: #98a2b3; font-weight: 600; }
.vl-credit-check-value { min-width: 30px; text-align: right; color: var(--loader-accent); font-variant-numeric: tabular-nums; }
@keyframes vl-credit-check-spin { to { transform: rotate(360deg); } }`,
    controls: [
      {
        type: 'select',
        key: 'document',
        label: 'Credit check target',
        defaultValue: 'customer',
        full: true,
        options: [
          { value: 'customer', label: 'Customer account' },
          { value: 'quotation', label: 'Sales quotation' },
          { value: 'order', label: 'Sales order' },
          { value: 'invoice', label: 'Sales invoice' }
        ]
      }
    ],
    applyControls(container, values) {
      const title = container.querySelector('.vl-credit-check-title');
      if (!title) return;
      const labels = {
        customer: 'Checking customer credit…',
        quotation: 'Checking quotation exposure…',
        order: 'Checking order credit…',
        invoice: 'Checking invoice credit…'
      };
      title.textContent = labels[values.document] || labels.customer;
    },
    js: `AppLoader.setTarget = function (target) {
  const title = loaderElement.querySelector('.vl-credit-check-title');
  if (title) title.textContent = target || 'Checking customer credit…';
};`
  },
  {
    id: 'inventory-reservation-loader',
    name: 'Inventory Reservation Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A stock-reservation state for warehouse allocation, batch selection, serial assignment, and order fulfillment.',
    markup: `<div class="vl-reservation-loader" role="status" aria-live="polite">
  <div class="vl-reservation-loader-head">
    <span class="vl-reservation-loader-box" aria-hidden="true"></span>
    <strong class="vl-reservation-loader-title">Reserving warehouse stock…</strong>
    <span class="vl-reservation-loader-count">0 / 12</span>
  </div>
  <div class="vl-reservation-loader-track"><span></span></div>
</div>`,
    css: `.vl-reservation-loader {
  width: min(245px, 86vw);
  display: grid;
  gap: 8px;
  padding: 10px 11px;
  border: 1px solid #dfe5ed;
  border-radius: 10px;
  background: #fff;
  color: #344054;
  font: 700 10px/1.3 system-ui, sans-serif;
}
.vl-reservation-loader-head { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 8px; }
.vl-reservation-loader-box {
  width: 17px;
  height: 15px;
  border: 2px solid var(--loader-accent);
  border-radius: 4px;
  position: relative;
}
.vl-reservation-loader-box::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  right: -5px;
  top: -5px;
  border: 2px solid #fff;
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-reservation-spin calc(var(--loader-speed) * .75) linear infinite;
}
.vl-reservation-loader-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vl-reservation-loader-count { color: #98a2b3; font-variant-numeric: tabular-nums; }
.vl-reservation-loader-track { height: 5px; overflow: hidden; border-radius: 999px; background: #edf1f6; }
.vl-reservation-loader-track span {
  display: block;
  width: 46%;
  height: 100%;
  border-radius: inherit;
  background: var(--loader-accent);
  animation: vl-reservation-slide calc(var(--loader-speed) * 1.25) ease-in-out infinite alternate;
}
@keyframes vl-reservation-spin { to { transform: rotate(360deg); } }
@keyframes vl-reservation-slide { from { transform: translateX(-65%); } to { transform: translateX(150%); } }`,
    controls: [
      {
        type: 'select',
        key: 'source',
        label: 'Reservation source',
        defaultValue: 'warehouse',
        full: true,
        options: [
          { value: 'warehouse', label: 'Warehouse stock' },
          { value: 'batch', label: 'Batch stock' },
          { value: 'serial', label: 'Serial numbers' },
          { value: 'incoming', label: 'Incoming stock' }
        ]
      }
    ],
    applyControls(container, values) {
      const title = container.querySelector('.vl-reservation-loader-title');
      if (!title) return;
      const labels = {
        warehouse: 'Reserving warehouse stock…',
        batch: 'Selecting available batches…',
        serial: 'Assigning serial numbers…',
        incoming: 'Allocating incoming stock…'
      };
      title.textContent = labels[values.source] || labels.warehouse;
    },
    js: `AppLoader.setSource = function (message) {
  const title = loaderElement.querySelector('.vl-reservation-loader-title');
  if (title) title.textContent = message || 'Reserving warehouse stock…';
};`
  },
  {
    id: 'document-number-generator-loader',
    name: 'Document Number Generator Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A document-sequence loader for quotation, order, invoice, delivery, and purchase numbering workflows.',
    markup: `<div class="vl-doc-number-loader" role="status" aria-live="polite">
  <span class="vl-doc-number-loader-icon">#</span>
  <div><strong class="vl-doc-number-loader-title">Generating document number…</strong><span>Checking sequence and company prefix</span></div>
  <span class="vl-doc-number-loader-dots" aria-hidden="true"><i></i><i></i><i></i></span>
</div>`,
    css: `.vl-doc-number-loader {
  width: min(245px, 86vw);
  min-height: 50px;
  display: grid;
  grid-template-columns: 30px 1fr auto;
  align-items: center;
  gap: 9px;
  padding: 9px 11px;
  border: 1px solid #dfe5ed;
  border-radius: 10px;
  background: #fff;
  color: #344054;
  font: 700 10px/1.35 system-ui, sans-serif;
}
.vl-doc-number-loader-icon { width: 28px; height: 28px; display: grid; place-items: center; border-radius: 8px; background: color-mix(in srgb, var(--loader-accent) 12%, #f3f6fa); color: var(--loader-accent); font-size: 15px; }
.vl-doc-number-loader > div { min-width: 0; display: grid; gap: 3px; }
.vl-doc-number-loader-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vl-doc-number-loader > div span { color: #98a2b3; font-weight: 600; }
.vl-doc-number-loader-dots { display: flex; gap: 3px; }
.vl-doc-number-loader-dots i { width: 5px; height: 5px; border-radius: 50%; background: var(--loader-accent); animation: vl-doc-number-dot calc(var(--loader-speed) * 1.05) ease-in-out infinite; }
.vl-doc-number-loader-dots i:nth-child(2) { animation-delay: .12s; }
.vl-doc-number-loader-dots i:nth-child(3) { animation-delay: .24s; }
@keyframes vl-doc-number-dot { 0%, 80%, 100% { opacity: .25; transform: scale(.6); } 40% { opacity: 1; transform: scale(1); } }`,
    controls: [
      {
        type: 'select',
        key: 'document',
        label: 'Document sequence',
        defaultValue: 'document',
        full: true,
        options: [
          { value: 'document', label: 'Generic document' },
          { value: 'quotation', label: 'Sales quotation' },
          { value: 'invoice', label: 'Sales invoice' },
          { value: 'purchase', label: 'Purchase order' }
        ]
      }
    ],
    applyControls(container, values) {
      const title = container.querySelector('.vl-doc-number-loader-title');
      if (!title) return;
      const labels = {
        document: 'Generating document number…',
        quotation: 'Generating quotation number…',
        invoice: 'Generating invoice number…',
        purchase: 'Generating purchase order number…'
      };
      title.textContent = labels[values.document] || labels.document;
    },
    js: `AppLoader.setDocument = function (message) {
  const title = loaderElement.querySelector('.vl-doc-number-loader-title');
  if (title) title.textContent = message || 'Generating document number…';
};`
  }
];
