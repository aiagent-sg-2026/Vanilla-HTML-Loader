export const commonRoutingQueueLoaders = [
  {
    id: 'price-recalculation-loader',
    name: 'Price Recalculation Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A pricing refresh state for price lists, customer discounts, currency changes, and document totals.',
    markup: `<div class="vl-price-recalc" role="status" aria-live="polite">
  <div class="vl-price-recalc-head"><span class="vl-price-recalc-icon">$</span><strong class="vl-price-recalc-title">Recalculating document prices…</strong><span class="vl-price-recalc-value">—</span></div>
  <div class="vl-price-recalc-lines"><span></span><span></span><span></span></div>
</div>`,
    css: `.vl-price-recalc {
  width: min(245px, 86vw);
  display: grid;
  gap: 8px;
  padding: 10px 11px;
  border: 1px solid #dfe5ed;
  border-radius: 10px;
  background: #fff;
  color: #344054;
  font: 700 10px/1.35 system-ui, sans-serif;
}
.vl-price-recalc-head { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 8px; }
.vl-price-recalc-icon { width: 25px; height: 25px; display: grid; place-items: center; border-radius: 7px; color: var(--loader-accent); background: color-mix(in srgb, var(--loader-accent) 12%, #f3f6fa); }
.vl-price-recalc-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vl-price-recalc-value { color: #98a2b3; font-variant-numeric: tabular-nums; }
.vl-price-recalc-lines { display: grid; gap: 4px; }
.vl-price-recalc-lines span {
  position: relative;
  overflow: hidden;
  height: 5px;
  border-radius: 999px;
  background: #edf1f6;
}
.vl-price-recalc-lines span:nth-child(2) { width: 84%; }
.vl-price-recalc-lines span:nth-child(3) { width: 64%; }
.vl-price-recalc-lines span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 20%, #fff), transparent);
  animation: vl-price-recalc-shimmer calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
@keyframes vl-price-recalc-shimmer { to { transform: translateX(110%); } }`,
    controls: [
      {
        type: 'select',
        key: 'mode',
        label: 'Price operation',
        defaultValue: 'document',
        full: true,
        options: [
          { value: 'document', label: 'Document prices' },
          { value: 'price-list', label: 'Price list' },
          { value: 'discount', label: 'Customer discount' },
          { value: 'currency', label: 'Currency conversion' }
        ]
      }
    ],
    applyControls(container, values) {
      const title = container.querySelector('.vl-price-recalc-title');
      if (!title) return;
      const labels = {
        document: 'Recalculating document prices…',
        'price-list': 'Applying latest price list…',
        discount: 'Applying customer discounts…',
        currency: 'Recalculating converted prices…'
      };
      title.textContent = labels[values.mode] || labels.document;
    },
    js: `AppLoader.setOperation = function (message) {
  const title = loaderElement.querySelector('.vl-price-recalc-title');
  if (title) title.textContent = message || 'Recalculating document prices…';
};`
  },
  {
    id: 'delivery-route-loader',
    name: 'Delivery Route Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A delivery-planning state for route optimization, carrier selection, ETA calculation, and address checks.',
    markup: `<div class="vl-route-loader" role="status" aria-live="polite">
  <div class="vl-route-loader-map" aria-hidden="true"><i></i><span></span><b></b></div>
  <div class="vl-route-loader-copy"><strong class="vl-route-loader-title">Optimizing delivery route…</strong><span>3 stops · Calculating ETA</span></div>
  <span class="vl-route-loader-ring" aria-hidden="true"></span>
</div>`,
    css: `.vl-route-loader {
  width: min(245px, 86vw);
  min-height: 54px;
  display: grid;
  grid-template-columns: 42px 1fr auto;
  align-items: center;
  gap: 9px;
  padding: 9px 11px;
  border: 1px solid #dfe5ed;
  border-radius: 10px;
  background: #fff;
  color: #344054;
  font: 700 10px/1.35 system-ui, sans-serif;
}
.vl-route-loader-map { width: 40px; height: 34px; position: relative; border-radius: 8px; background: #f0f4f8; }
.vl-route-loader-map i,
.vl-route-loader-map b { position: absolute; width: 8px; height: 8px; border: 2px solid var(--loader-accent); border-radius: 50%; background: #fff; }
.vl-route-loader-map i { left: 6px; bottom: 6px; }
.vl-route-loader-map b { right: 6px; top: 6px; }
.vl-route-loader-map span { position: absolute; left: 12px; top: 15px; width: 18px; height: 2px; border-radius: 999px; background: var(--loader-accent); transform: rotate(-25deg); transform-origin: center; animation: vl-route-pulse calc(var(--loader-speed) * 1.1) ease-in-out infinite; }
.vl-route-loader-copy { min-width: 0; display: grid; gap: 3px; }
.vl-route-loader-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vl-route-loader-copy span { color: #98a2b3; font-weight: 600; }
.vl-route-loader-ring { width: 16px; height: 16px; border: 2px solid color-mix(in srgb, var(--loader-accent) 18%, transparent); border-top-color: var(--loader-accent); border-radius: 50%; animation: vl-route-spin calc(var(--loader-speed) * .75) linear infinite; }
@keyframes vl-route-spin { to { transform: rotate(360deg); } }
@keyframes vl-route-pulse { 50% { opacity: .35; } }`,
    controls: [
      {
        type: 'select',
        key: 'operation',
        label: 'Routing operation',
        defaultValue: 'route',
        full: true,
        options: [
          { value: 'route', label: 'Optimize route' },
          { value: 'carrier', label: 'Select carrier' },
          { value: 'eta', label: 'Calculate ETA' },
          { value: 'address', label: 'Validate address' }
        ]
      }
    ],
    applyControls(container, values) {
      const title = container.querySelector('.vl-route-loader-title');
      if (!title) return;
      const labels = {
        route: 'Optimizing delivery route…',
        carrier: 'Comparing delivery carriers…',
        eta: 'Calculating delivery ETA…',
        address: 'Validating delivery address…'
      };
      title.textContent = labels[values.operation] || labels.route;
    },
    js: `AppLoader.setOperation = function (message) {
  const title = loaderElement.querySelector('.vl-route-loader-title');
  if (title) title.textContent = message || 'Optimizing delivery route…';
};`
  },
  {
    id: 'attachment-upload-queue',
    name: 'Attachment Upload Queue',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A multi-file upload queue for invoices, delivery documents, receipts, product images, and supporting files.',
    markup: `<div class="vl-attachment-queue" role="progressbar" aria-label="Uploading attachments" aria-valuemin="0" aria-valuemax="100" aria-valuenow="42">
  <div class="vl-attachment-queue-head"><strong class="vl-attachment-queue-title">Uploading attachments</strong><span class="vl-attachment-queue-percent">42%</span></div>
  <div class="vl-attachment-queue-file"><span class="vl-attachment-queue-icon">↑</span><span class="vl-attachment-queue-name">invoice-support.pdf</span><span>2 of 5</span></div>
  <div class="vl-attachment-queue-track"><span></span></div>
</div>`,
    css: `.vl-attachment-queue {
  width: min(245px, 86vw);
  display: grid;
  gap: 7px;
  padding: 10px 11px;
  border: 1px solid #dfe5ed;
  border-radius: 10px;
  background: #fff;
  color: #344054;
  font: 700 10px/1.35 system-ui, sans-serif;
}
.vl-attachment-queue-head,
.vl-attachment-queue-file { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.vl-attachment-queue-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vl-attachment-queue-percent { color: var(--loader-accent); font-variant-numeric: tabular-nums; }
.vl-attachment-queue-file { justify-content: flex-start; color: #667085; font-weight: 600; }
.vl-attachment-queue-icon { width: 22px; height: 22px; display: grid; place-items: center; flex: 0 0 auto; border-radius: 6px; background: color-mix(in srgb, var(--loader-accent) 12%, #f3f6fa); color: var(--loader-accent); animation: vl-attachment-bounce calc(var(--loader-speed) * 1.05) ease-in-out infinite; }
.vl-attachment-queue-name { min-width: 0; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vl-attachment-queue-track { height: 6px; overflow: hidden; border-radius: 999px; background: #edf1f6; }
.vl-attachment-queue-track span { display: block; width: 42%; height: 100%; border-radius: inherit; background: var(--loader-accent); transition: width .2s ease; }
@keyframes vl-attachment-bounce { 50% { transform: translateY(-2px); } }`,
    controls: [
      { type: 'range', key: 'progress', label: 'Upload progress', min: 0, max: 100, step: 1, defaultValue: 42 },
      {
        type: 'select',
        key: 'file',
        label: 'Attachment type',
        defaultValue: 'document',
        full: true,
        options: [
          { value: 'document', label: 'Supporting document' },
          { value: 'invoice', label: 'Invoice attachment' },
          { value: 'receipt', label: 'Payment receipt' },
          { value: 'image', label: 'Product image' }
        ]
      }
    ],
    applyControls(container, values) {
      const progress = Math.max(0, Math.min(100, Number(values.progress) || 0));
      const labels = {
        document: 'supporting-document.pdf',
        invoice: 'invoice-attachment.pdf',
        receipt: 'payment-receipt.pdf',
        image: 'product-image.jpg'
      };
      const root = container.querySelector('.vl-attachment-queue') || container;
      root.setAttribute('aria-valuenow', String(progress));
      const percent = root.querySelector('.vl-attachment-queue-percent');
      const fill = root.querySelector('.vl-attachment-queue-track span');
      const name = root.querySelector('.vl-attachment-queue-name');
      if (percent) percent.textContent = `${progress}%`;
      if (fill) fill.style.width = `${progress}%`;
      if (name) name.textContent = labels[values.file] || labels.document;
    },
    js: `AppLoader.setProgress = function (value) {
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  loaderElement.setAttribute('aria-valuenow', String(progress));
  const fill = loaderElement.querySelector('.vl-attachment-queue-track span');
  const label = loaderElement.querySelector('.vl-attachment-queue-percent');
  if (fill) fill.style.width = progress + '%';
  if (label) label.textContent = progress + '%';
};`
  }
];
