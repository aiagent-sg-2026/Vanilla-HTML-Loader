export const commonFinanceCalculationLoaders = [
  {
    id: 'payment-processing-loader',
    name: 'Payment Processing Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A payment-processing state for bank transfers, PayNow, refunds, and customer receipts.',
    markup: `<div class="vl-payment-processing" role="status" aria-live="polite">
  <span class="vl-payment-processing-card" aria-hidden="true"><i></i></span>
  <div><strong class="vl-payment-processing-title">Processing payment</strong><small>Do not close this page…</small></div>
  <span class="vl-payment-processing-dots" aria-hidden="true"><i></i><i></i><i></i></span>
</div>`,
    css: `.vl-payment-processing {
  width: min(245px, 88vw);
  min-height: 48px;
  display: grid;
  grid-template-columns: 36px 1fr auto;
  align-items: center;
  gap: 9px;
  padding: 9px 11px;
  border: 1px solid #e0e6ee;
  border-radius: 10px;
  background: #fff;
  color: #344054;
  font: 750 11px/1.3 system-ui, sans-serif;
}
.vl-payment-processing > div { display: grid; gap: 3px; }
.vl-payment-processing small { color: #98a2b3; font-size: 9px; }
.vl-payment-processing-card { width: 32px; height: 23px; position: relative; overflow: hidden; border-radius: 6px; background: color-mix(in srgb, var(--loader-accent) 14%, #eef2f7); border: 1px solid color-mix(in srgb, var(--loader-accent) 35%, #d8e0ea); }
.vl-payment-processing-card::before { content: ''; position: absolute; inset: 5px 0 auto; height: 4px; background: var(--loader-accent); opacity: .72; }
.vl-payment-processing-card i { position: absolute; width: 8px; height: 4px; right: 4px; bottom: 4px; border-radius: 2px; background: var(--loader-accent); animation: vl-payment-processing-pulse calc(var(--loader-speed) * 1.1) ease-in-out infinite; }
.vl-payment-processing-dots { display: flex; gap: 3px; }
.vl-payment-processing-dots i { width: 5px; height: 5px; border-radius: 50%; background: var(--loader-accent); animation: vl-payment-processing-dot calc(var(--loader-speed) * 1.05) ease-in-out infinite; }
.vl-payment-processing-dots i:nth-child(2) { animation-delay: .12s; }
.vl-payment-processing-dots i:nth-child(3) { animation-delay: .24s; }
@keyframes vl-payment-processing-pulse { 50% { opacity: .28; } }
@keyframes vl-payment-processing-dot { 0%,80%,100% { opacity: .25; transform: scale(.6); } 40% { opacity: 1; transform: scale(1); } }`,
    controls: [{
      type: 'select', key: 'method', label: 'Payment operation', defaultValue: 'payment', full: true,
      options: [
        { value: 'payment', label: 'Processing payment' },
        { value: 'bank', label: 'Processing bank transfer' },
        { value: 'paynow', label: 'Verifying PayNow payment' },
        { value: 'refund', label: 'Processing refund' }
      ]
    }],
    applyControls(container, values) {
      const title = container.querySelector('.vl-payment-processing-title');
      if (!title) return;
      const labels = {
        payment: 'Processing payment', bank: 'Processing bank transfer',
        paynow: 'Verifying PayNow payment', refund: 'Processing refund'
      };
      title.textContent = labels[values.method] || labels.payment;
    },
    js: `AppLoader.setMessage = function (message) {
  const target = loaderElement.querySelector('.vl-payment-processing-title');
  if (target) target.textContent = message || 'Processing payment';
};`
  },
  {
    id: 'currency-conversion-loader',
    name: 'Currency Conversion Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A foreign-exchange conversion state for document totals, price lists, and multicurrency reports.',
    markup: `<div class="vl-currency-conversion" role="status" aria-live="polite">
  <span class="vl-currency-conversion-code">USD</span>
  <span class="vl-currency-conversion-arrow" aria-hidden="true"><i></i><i></i><i></i></span>
  <span class="vl-currency-conversion-code accent">SGD</span>
  <strong class="vl-currency-conversion-title">Converting currency</strong>
</div>`,
    css: `.vl-currency-conversion {
  width: min(225px, 82vw);
  display: grid;
  grid-template-columns: 44px 1fr 44px;
  align-items: center;
  gap: 8px;
  color: #344054;
  font: 800 10px/1 system-ui, sans-serif;
}
.vl-currency-conversion-code { height: 30px; display: grid; place-items: center; border: 1px solid #dfe5ed; border-radius: 7px; background: #fff; }
.vl-currency-conversion-code.accent { color: var(--loader-accent); border-color: color-mix(in srgb, var(--loader-accent) 35%, #dfe5ed); }
.vl-currency-conversion-arrow { display: flex; justify-content: center; gap: 4px; }
.vl-currency-conversion-arrow i { width: 6px; height: 6px; border-top: 2px solid var(--loader-accent); border-right: 2px solid var(--loader-accent); transform: rotate(45deg); animation: vl-currency-arrow calc(var(--loader-speed) * 1.05) ease-in-out infinite; }
.vl-currency-conversion-arrow i:nth-child(2) { animation-delay: .13s; }
.vl-currency-conversion-arrow i:nth-child(3) { animation-delay: .26s; }
.vl-currency-conversion-title { grid-column: 1 / -1; text-align: center; color: #667085; font-size: 9px; }
@keyframes vl-currency-arrow { 0%,100% { opacity: .2; transform: translateX(-2px) rotate(45deg); } 50% { opacity: 1; transform: translateX(2px) rotate(45deg); } }`,
    controls: [{
      type: 'select', key: 'conversion', label: 'Conversion type', defaultValue: 'currency', full: true,
      options: [
        { value: 'currency', label: 'Converting currency' },
        { value: 'rate', label: 'Loading exchange rate' },
        { value: 'prices', label: 'Converting price list' },
        { value: 'totals', label: 'Converting document totals' }
      ]
    }],
    applyControls(container, values) {
      const title = container.querySelector('.vl-currency-conversion-title');
      if (!title) return;
      const labels = {
        currency: 'Converting currency', rate: 'Loading exchange rate',
        prices: 'Converting price list', totals: 'Converting document totals'
      };
      title.textContent = labels[values.conversion] || labels.currency;
    },
    js: `AppLoader.setMessage = function (message) {
  const target = loaderElement.querySelector('.vl-currency-conversion-title');
  if (target) target.textContent = message || 'Converting currency';
};`
  },
  {
    id: 'tax-calculation-loader',
    name: 'Tax Calculation Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A tax calculation state for GST, VAT, withholding tax, and document totals.',
    markup: `<div class="vl-tax-calculation" role="status" aria-live="polite">
  <span class="vl-tax-calculation-symbol" aria-hidden="true">%</span>
  <div><strong class="vl-tax-calculation-title">Calculating tax</strong><small>Applying configured rules…</small></div>
  <span class="vl-tax-calculation-bar" aria-hidden="true"></span>
</div>`,
    css: `.vl-tax-calculation {
  width: min(235px, 84vw);
  display: grid;
  grid-template-columns: 34px 1fr;
  align-items: center;
  gap: 4px 10px;
  color: #344054;
  font: 750 11px/1.3 system-ui, sans-serif;
}
.vl-tax-calculation-symbol { width: 32px; height: 32px; grid-row: span 2; display: grid; place-items: center; border-radius: 9px; background: color-mix(in srgb, var(--loader-accent) 12%, #eef2f7); color: var(--loader-accent); font-size: 15px; }
.vl-tax-calculation div { display: grid; gap: 2px; }
.vl-tax-calculation small { color: #98a2b3; font-size: 9px; }
.vl-tax-calculation-bar { height: 5px; overflow: hidden; border-radius: 999px; background: #e7ecf3; }
.vl-tax-calculation-bar::after { content: ''; display: block; width: 42%; height: 100%; border-radius: inherit; background: var(--loader-accent); animation: vl-tax-calculation-move calc(var(--loader-speed) * 1.3) ease-in-out infinite; }
@keyframes vl-tax-calculation-move { 0% { transform: translateX(-120%); } 100% { transform: translateX(310%); } }`,
    controls: [{
      type: 'select', key: 'tax', label: 'Tax calculation', defaultValue: 'tax', full: true,
      options: [
        { value: 'tax', label: 'Calculating tax' },
        { value: 'gst', label: 'Calculating GST' },
        { value: 'vat', label: 'Calculating VAT' },
        { value: 'withholding', label: 'Calculating withholding tax' }
      ]
    }],
    applyControls(container, values) {
      const title = container.querySelector('.vl-tax-calculation-title');
      if (!title) return;
      const labels = {
        tax: 'Calculating tax', gst: 'Calculating GST',
        vat: 'Calculating VAT', withholding: 'Calculating withholding tax'
      };
      title.textContent = labels[values.tax] || labels.tax;
    },
    js: `AppLoader.setMessage = function (message) {
  const target = loaderElement.querySelector('.vl-tax-calculation-title');
  if (target) target.textContent = message || 'Calculating tax';
};`
  }
];
