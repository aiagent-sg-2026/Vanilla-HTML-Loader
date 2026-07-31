export const commonNetworkLoaders = [
  {
    id: 'api-retry-loader',
    name: 'API Retry Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A restrained retry state for failed API calls, remote lookups, integrations, and background requests.',
    markup: `<div class="vl-api-retry" role="status" aria-live="polite">
  <span class="vl-api-retry-ring" aria-hidden="true"></span>
  <span class="vl-api-retry-copy"><strong class="vl-api-retry-title">Retrying API request</strong><small class="vl-api-retry-detail">Attempt 2 of 3</small></span>
</div>`,
    css: `.vl-api-retry {
  width: min(235px, 84vw);
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 12px 13px;
  border: 1px solid #e0e6ef;
  border-radius: 10px;
  background: #fff;
  color: #172033;
  font-family: system-ui, sans-serif;
}
.vl-api-retry-ring {
  width: 26px;
  height: 26px;
  flex: 0 0 26px;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-api-retry-spin calc(var(--loader-speed) * .78) linear infinite;
}
.vl-api-retry-copy { min-width: 0; display: grid; gap: 2px; }
.vl-api-retry-copy strong { font-size: 12px; line-height: 1.3; }
.vl-api-retry-copy small { color: #667085; font-size: 10px; line-height: 1.35; }
@keyframes vl-api-retry-spin { to { transform: rotate(360deg); } }`,
    controls: [{
      type: 'select', key: 'endpoint', label: 'Request type', defaultValue: 'api', full: true,
      options: [
        { value: 'api', label: 'API request' },
        { value: 'customer', label: 'Customer lookup' },
        { value: 'inventory', label: 'Inventory service' },
        { value: 'integration', label: 'External integration' }
      ]
    }],
    applyControls(container, values) {
      const title = container.querySelector('.vl-api-retry-title');
      if (!title) return;
      const labels = {
        api: 'Retrying API request',
        customer: 'Retrying customer lookup',
        inventory: 'Retrying inventory service',
        integration: 'Retrying external integration'
      };
      title.textContent = labels[values.endpoint] || labels.api;
    },
    js: `AppLoader.setMessage = function (title, detail = 'Attempt 2 of 3') {
  const root = loaderElement.querySelector('.vl-api-retry');
  if (!root) return;
  root.querySelector('.vl-api-retry-title').textContent = title || 'Retrying request';
  root.querySelector('.vl-api-retry-detail').textContent = detail;
};`
  },
  {
    id: 'stock-availability-loader',
    name: 'Stock Availability Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A practical stock-checking state for sales orders, quotations, reservations, and warehouse inquiries.',
    markup: `<div class="vl-stock-loader" role="status" aria-live="polite">
  <div class="vl-stock-loader-head"><strong class="vl-stock-loader-title">Checking warehouse stock</strong><span class="vl-stock-loader-ring" aria-hidden="true"></span></div>
  <div class="vl-stock-loader-track"><span></span></div>
  <small>Including reservations and open allocations</small>
</div>`,
    css: `.vl-stock-loader {
  width: min(235px, 84vw);
  display: grid;
  gap: 8px;
  padding: 12px 13px;
  border: 1px solid #e0e6ef;
  border-radius: 10px;
  background: #fff;
  color: #344054;
  font: 700 10px/1.35 system-ui, sans-serif;
}
.vl-stock-loader-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.vl-stock-loader-head strong { font-size: 12px; color: #172033; }
.vl-stock-loader-ring {
  width: 17px;
  height: 17px;
  flex: 0 0 17px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-stock-spin calc(var(--loader-speed) * .72) linear infinite;
}
.vl-stock-loader-track {
  height: 7px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 12%, #e7ecf3);
}
.vl-stock-loader-track span {
  display: block;
  width: 34%;
  height: 100%;
  border-radius: inherit;
  background: var(--loader-accent);
  animation: vl-stock-track calc(var(--loader-speed) * 1.25) ease-in-out infinite alternate;
}
.vl-stock-loader small { color: #667085; }
@keyframes vl-stock-spin { to { transform: rotate(360deg); } }
@keyframes vl-stock-track { to { transform: translateX(194%); } }`,
    controls: [{
      type: 'select', key: 'source', label: 'Stock source', defaultValue: 'warehouse', full: true,
      options: [
        { value: 'warehouse', label: 'Warehouse stock' },
        { value: 'available', label: 'Available quantity' },
        { value: 'reserved', label: 'Reserved quantity' },
        { value: 'incoming', label: 'Incoming stock' }
      ]
    }],
    applyControls(container, values) {
      const title = container.querySelector('.vl-stock-loader-title');
      if (!title) return;
      const labels = {
        warehouse: 'Checking warehouse stock',
        available: 'Calculating available quantity',
        reserved: 'Checking reserved quantity',
        incoming: 'Checking incoming stock'
      };
      title.textContent = labels[values.source] || labels.warehouse;
    },
    js: `AppLoader.setMessage = function (message) {
  const title = loaderElement.querySelector('.vl-stock-loader-title');
  if (title) title.textContent = message || 'Checking stock availability';
};`
  }
];
