export const commonHistoryInventorySkeletons = [
  {
    id: 'document-history-skeleton',
    name: 'Document History Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A version and activity-history placeholder for edited documents, status changes, approvals, and audit records.',
    markup: `<div class="vl-document-history-skeleton" aria-hidden="true">
  <div class="vl-document-history-item"><i></i><div><strong></strong><span></span></div><small></small></div>
  <div class="vl-document-history-item"><i></i><div><strong></strong><span></span></div><small></small></div>
  <div class="vl-document-history-item last"><i></i><div><strong></strong><span></span></div><small></small></div>
</div>`,
    css: `.vl-document-history-skeleton {
  width: min(245px, 86vw);
  display: grid;
  gap: 2px;
}
.vl-document-history-item {
  display: grid;
  grid-template-columns: 20px 1fr auto;
  align-items: start;
  gap: 9px;
  min-height: 42px;
  position: relative;
}
.vl-document-history-item:not(.last)::after {
  content: '';
  position: absolute;
  left: 9px;
  top: 18px;
  bottom: -3px;
  width: 2px;
  background: #e3e8ef;
}
.vl-document-history-item i,
.vl-document-history-item strong,
.vl-document-history-item span,
.vl-document-history-item small {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-document-history-item i { width: 20px; height: 20px; border-radius: 50%; z-index: 1; }
.vl-document-history-item div { display: grid; gap: 6px; padding-top: 2px; }
.vl-document-history-item strong { width: 66%; height: 9px; border-radius: 4px; }
.vl-document-history-item span { width: 82%; height: 7px; border-radius: 4px; }
.vl-document-history-item small { width: 38px; height: 7px; border-radius: 4px; margin-top: 3px; }
.vl-document-history-item i::after,
.vl-document-history-item strong::after,
.vl-document-history-item span::after,
.vl-document-history-item small::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-document-history-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-document-history-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'inventory-movement-skeleton',
    name: 'Inventory Movement Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A stock-movement placeholder for warehouse transfers, receipts, issues, adjustments, and movement inquiries.',
    markup: `<div class="vl-inventory-movement-skeleton" aria-hidden="true">
  <div class="vl-inventory-movement-head"><span></span><strong></strong><i></i></div>
  <div class="vl-inventory-movement-row"><span></span><i></i><span></span><b></b></div>
  <div class="vl-inventory-movement-row"><span></span><i></i><span></span><b></b></div>
  <div class="vl-inventory-movement-row short"><span></span><i></i><span></span><b></b></div>
</div>`,
    css: `.vl-inventory-movement-skeleton {
  width: min(245px, 86vw);
  display: grid;
  gap: 7px;
}
.vl-inventory-movement-head,
.vl-inventory-movement-row { display: grid; align-items: center; gap: 7px; }
.vl-inventory-movement-head { grid-template-columns: 28px 1fr 38px; padding-bottom: 3px; border-bottom: 1px solid #e8edf3; }
.vl-inventory-movement-row { grid-template-columns: 42px 16px 1fr 34px; min-height: 26px; }
.vl-inventory-movement-head span,
.vl-inventory-movement-head strong,
.vl-inventory-movement-head i,
.vl-inventory-movement-row span,
.vl-inventory-movement-row i,
.vl-inventory-movement-row b {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-inventory-movement-head span { width: 28px; height: 28px; border-radius: 8px; }
.vl-inventory-movement-head strong { width: 62%; height: 10px; border-radius: 5px; }
.vl-inventory-movement-head i { width: 38px; height: 18px; border-radius: 6px; }
.vl-inventory-movement-row span { height: 7px; border-radius: 4px; }
.vl-inventory-movement-row span:first-child { width: 42px; }
.vl-inventory-movement-row span:nth-child(3) { width: 72%; }
.vl-inventory-movement-row.short span:nth-child(3) { width: 48%; }
.vl-inventory-movement-row i { width: 16px; height: 16px; border-radius: 50%; }
.vl-inventory-movement-row b { width: 34px; height: 8px; border-radius: 4px; }
.vl-inventory-movement-head span::after,
.vl-inventory-movement-head strong::after,
.vl-inventory-movement-head i::after,
.vl-inventory-movement-row span::after,
.vl-inventory-movement-row i::after,
.vl-inventory-movement-row b::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-inventory-movement-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-inventory-movement-shimmer { to { transform: translateX(110%); } }`
  }
];
