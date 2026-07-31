export const commonLookupLedgerLoaders = [
  {
    id: 'address-lookup-loader',
    name: 'Address Lookup Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'An address lookup state for postal codes, delivery addresses, company records, and geocoding services.',
    markup: `<div class="vl-address-lookup" role="status" aria-live="polite">
  <span class="vl-address-lookup-pin" aria-hidden="true"><i></i></span>
  <div><strong class="vl-address-lookup-title">Looking up address</strong><small>Searching location records…</small></div>
  <span class="vl-address-lookup-wave" aria-hidden="true"><i></i><i></i><i></i></span>
</div>`,
    css: `.vl-address-lookup {
  width: min(240px, 86vw);
  min-height: 48px;
  display: grid;
  grid-template-columns: 30px 1fr auto;
  align-items: center;
  gap: 9px;
  padding: 9px 11px;
  border: 1px solid #e0e6ee;
  border-radius: 10px;
  background: #fff;
  color: #344054;
  font: 750 11px/1.3 system-ui, sans-serif;
}
.vl-address-lookup > div { display: grid; gap: 3px; }
.vl-address-lookup small { color: #98a2b3; font-size: 9px; }
.vl-address-lookup-pin { width: 24px; height: 29px; position: relative; border: 2px solid var(--loader-accent); border-radius: 14px 14px 14px 3px; transform: rotate(-45deg); }
.vl-address-lookup-pin i { position: absolute; width: 7px; height: 7px; left: 6px; top: 6px; border-radius: 50%; background: var(--loader-accent); animation: vl-address-pin calc(var(--loader-speed) * 1.1) ease-in-out infinite; }
.vl-address-lookup-wave { display: flex; align-items: flex-end; gap: 3px; height: 18px; }
.vl-address-lookup-wave i { width: 3px; border-radius: 999px; background: var(--loader-accent); animation: vl-address-wave calc(var(--loader-speed) * 1.05) ease-in-out infinite; }
.vl-address-lookup-wave i:nth-child(1) { height: 7px; }
.vl-address-lookup-wave i:nth-child(2) { height: 13px; animation-delay: .12s; }
.vl-address-lookup-wave i:nth-child(3) { height: 9px; animation-delay: .24s; }
@keyframes vl-address-pin { 50% { transform: scale(.55); opacity: .35; } }
@keyframes vl-address-wave { 50% { transform: scaleY(.45); opacity: .35; } }`,
    controls: [{
      type: 'select', key: 'source', label: 'Address source', defaultValue: 'address', full: true,
      options: [
        { value: 'address', label: 'Looking up address' },
        { value: 'postal', label: 'Looking up postal code' },
        { value: 'delivery', label: 'Resolving delivery address' },
        { value: 'company', label: 'Loading registered address' }
      ]
    }],
    applyControls(container, values) {
      const title = container.querySelector('.vl-address-lookup-title');
      if (!title) return;
      const labels = {
        address: 'Looking up address', postal: 'Looking up postal code',
        delivery: 'Resolving delivery address', company: 'Loading registered address'
      };
      title.textContent = labels[values.source] || labels.address;
    },
    js: `AppLoader.setMessage = function (message) {
  const target = loaderElement.querySelector('.vl-address-lookup-title');
  if (target) target.textContent = message || 'Looking up address';
};`
  },
  {
    id: 'ledger-posting-progress',
    name: 'Ledger Posting Progress',
    category: 'Progress',
    tech: 'CSS + JavaScript',
    description: 'A determinate posting state for journals, invoices, payments, and general-ledger batches.',
    markup: `<div class="vl-ledger-posting" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="64">
  <div class="vl-ledger-posting-head"><strong class="vl-ledger-posting-title">Posting journal entries</strong><span class="vl-ledger-posting-value">64%</span></div>
  <div class="vl-ledger-posting-track"><span class="vl-ledger-posting-fill"></span></div>
  <small>Validating accounts and periods…</small>
</div>`,
    css: `.vl-ledger-posting {
  width: min(245px, 88vw);
  display: grid;
  gap: 7px;
  color: #344054;
  font: 750 10px/1.3 system-ui, sans-serif;
}
.vl-ledger-posting-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.vl-ledger-posting-value { color: var(--loader-accent); font-variant-numeric: tabular-nums; }
.vl-ledger-posting-track { height: 8px; overflow: hidden; border-radius: 999px; background: #e7ecf3; }
.vl-ledger-posting-fill { display: block; width: 64%; height: 100%; border-radius: inherit; background: var(--loader-accent); position: relative; overflow: hidden; transition: width .18s ease; }
.vl-ledger-posting-fill::after { content: ''; position: absolute; inset: 0; transform: translateX(-110%); background: linear-gradient(90deg, transparent, rgba(255,255,255,.65), transparent); animation: vl-ledger-posting-shine calc(var(--loader-speed) * 1.35) ease-in-out infinite; }
.vl-ledger-posting small { color: #98a2b3; font-size: 9px; }
@keyframes vl-ledger-posting-shine { to { transform: translateX(110%); } }`,
    controls: [
      { type: 'range', key: 'progress', label: 'Posting progress', min: 0, max: 100, step: 1, defaultValue: 64 },
      {
        type: 'select', key: 'operation', label: 'Posting operation', defaultValue: 'journal', full: true,
        options: [
          { value: 'journal', label: 'Posting journal entries' },
          { value: 'invoice', label: 'Posting sales invoices' },
          { value: 'payment', label: 'Posting payments' },
          { value: 'batch', label: 'Posting ledger batch' }
        ]
      }
    ],
    applyControls(container, values) {
      const progress = Math.max(0, Math.min(100, Number(values.progress) || 0));
      const title = container.querySelector('.vl-ledger-posting-title');
      const value = container.querySelector('.vl-ledger-posting-value');
      const fill = container.querySelector('.vl-ledger-posting-fill');
      const root = container.querySelector('.vl-ledger-posting');
      const labels = {
        journal: 'Posting journal entries', invoice: 'Posting sales invoices',
        payment: 'Posting payments', batch: 'Posting ledger batch'
      };
      if (title) title.textContent = labels[values.operation] || labels.journal;
      if (value) value.textContent = `${progress}%`;
      if (fill) fill.style.width = `${progress}%`;
      if (root) root.setAttribute('aria-valuenow', String(progress));
    },
    js: `AppLoader.setProgress = function (value, message) {
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  const root = loaderElement.querySelector('.vl-ledger-posting');
  const fill = loaderElement.querySelector('.vl-ledger-posting-fill');
  const label = loaderElement.querySelector('.vl-ledger-posting-value');
  const title = loaderElement.querySelector('.vl-ledger-posting-title');
  if (root) root.setAttribute('aria-valuenow', String(progress));
  if (fill) fill.style.width = progress + '%';
  if (label) label.textContent = progress + '%';
  if (title && message) title.textContent = message;
};`
  }
];
