export const commonFinanceSkeletonLoadersF = [
  {
    id: 'bank-reconciliation-skeleton',
    name: 'Bank Reconciliation Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A bank-reconciliation placeholder with statement rows, matching status, and balance summary areas.',
    markup: `<div class="vl-bank-recon-skeleton" aria-hidden="true">
  <div class="vl-bank-recon-head"><span></span><i></i></div>
  <div class="vl-bank-recon-row"><i></i><span></span><b></b><em></em></div>
  <div class="vl-bank-recon-row"><i></i><span class="short"></span><b></b><em></em></div>
  <div class="vl-bank-recon-row"><i></i><span></span><b></b><em></em></div>
  <div class="vl-bank-recon-total"><span></span><b></b></div>
</div>`,
    css: `.vl-bank-recon-skeleton {
  width: min(250px, 90vw);
  display: grid;
  gap: 7px;
}
.vl-bank-recon-head,
.vl-bank-recon-row,
.vl-bank-recon-total { display: grid; align-items: center; gap: 8px; }
.vl-bank-recon-head { grid-template-columns: 1fr 56px; }
.vl-bank-recon-row { grid-template-columns: 13px 1fr 46px 24px; min-height: 28px; padding: 0 7px; border: 1px solid #e3e8ef; border-radius: 7px; background: #fff; }
.vl-bank-recon-total { grid-template-columns: 1fr 62px; padding-top: 3px; border-top: 1px solid #dfe5ed; }
.vl-bank-recon-skeleton span,
.vl-bank-recon-skeleton i,
.vl-bank-recon-skeleton b,
.vl-bank-recon-skeleton em {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 4px;
  background: #e7ecf3;
}
.vl-bank-recon-head span { width: 58%; height: 11px; }
.vl-bank-recon-head i { width: 56px; height: 22px; border-radius: 6px; }
.vl-bank-recon-row > i { width: 13px; height: 13px; border-radius: 4px; }
.vl-bank-recon-row > span { width: 72%; height: 8px; }
.vl-bank-recon-row > span.short { width: 48%; }
.vl-bank-recon-row > b { width: 46px; height: 8px; }
.vl-bank-recon-row > em { width: 24px; height: 15px; border-radius: 5px; }
.vl-bank-recon-total span { width: 42%; height: 8px; }
.vl-bank-recon-total b { width: 62px; height: 10px; }
.vl-bank-recon-skeleton span::after,
.vl-bank-recon-skeleton i::after,
.vl-bank-recon-skeleton b::after,
.vl-bank-recon-skeleton em::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-bank-recon-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-bank-recon-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'payment-allocation-skeleton',
    name: 'Payment Allocation Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A payment-allocation placeholder for applying receipts against invoices and outstanding balances.',
    markup: `<div class="vl-payment-allocation-skeleton" aria-hidden="true">
  <div class="vl-payment-allocation-summary"><span></span><b></b></div>
  <div class="vl-payment-allocation-row"><i></i><span></span><b></b></div>
  <div class="vl-payment-allocation-row"><i></i><span class="short"></span><b></b></div>
  <div class="vl-payment-allocation-row"><i></i><span></span><b></b></div>
  <div class="vl-payment-allocation-footer"><span></span><span></span></div>
</div>`,
    css: `.vl-payment-allocation-skeleton {
  width: min(245px, 88vw);
  display: grid;
  gap: 7px;
  padding: 9px;
  border: 1px solid #e0e6ee;
  border-radius: 10px;
  background: #fff;
}
.vl-payment-allocation-summary,
.vl-payment-allocation-row,
.vl-payment-allocation-footer { display: grid; align-items: center; gap: 8px; }
.vl-payment-allocation-summary { grid-template-columns: 1fr 64px; padding-bottom: 4px; border-bottom: 1px solid #edf1f5; }
.vl-payment-allocation-row { grid-template-columns: 15px 1fr 52px; min-height: 27px; }
.vl-payment-allocation-footer { grid-template-columns: 1fr 64px; padding-top: 4px; border-top: 1px solid #edf1f5; }
.vl-payment-allocation-skeleton span,
.vl-payment-allocation-skeleton i,
.vl-payment-allocation-skeleton b {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 4px;
  background: #e7ecf3;
}
.vl-payment-allocation-summary span { width: 52%; height: 9px; }
.vl-payment-allocation-summary b { width: 64px; height: 20px; border-radius: 6px; }
.vl-payment-allocation-row i { width: 15px; height: 15px; border-radius: 4px; }
.vl-payment-allocation-row span { width: 70%; height: 8px; }
.vl-payment-allocation-row span.short { width: 46%; }
.vl-payment-allocation-row b { width: 52px; height: 8px; }
.vl-payment-allocation-footer span:first-child { width: 46%; height: 8px; }
.vl-payment-allocation-footer span:last-child { width: 64px; height: 24px; justify-self: end; border-radius: 7px; }
.vl-payment-allocation-skeleton span::after,
.vl-payment-allocation-skeleton i::after,
.vl-payment-allocation-skeleton b::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-payment-allocation-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-payment-allocation-shimmer { to { transform: translateX(110%); } }`
  }
];
