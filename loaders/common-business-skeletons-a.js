export const commonBusinessSkeletonLoadersA = [
  {
    id: 'modal-body-skeleton',
    name: 'Modal Body Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A modal-content skeleton with title, description, form fields, and footer actions.',
    markup: `<div class="vl-modal-body-skeleton" aria-hidden="true">
  <div class="vl-modal-skeleton-title"></div>
  <div class="vl-modal-skeleton-line"></div>
  <div class="vl-modal-skeleton-line short"></div>
  <div class="vl-modal-skeleton-field"></div>
  <div class="vl-modal-skeleton-field"></div>
  <div class="vl-modal-skeleton-actions"><span></span><span></span></div>
</div>`,
    css: `.vl-modal-body-skeleton {
  width: min(235px, 84vw);
  display: grid;
  gap: 8px;
  padding: 13px;
  border: 1px solid #dfe5ed;
  border-radius: 11px;
  background: #fff;
  box-shadow: 0 12px 28px rgba(15,23,42,.08);
}
.vl-modal-body-skeleton > div,
.vl-modal-skeleton-actions span {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-modal-skeleton-title { width: 58%; height: 13px; border-radius: 5px; background: #dce3ec !important; }
.vl-modal-skeleton-line { width: 100%; height: 8px; border-radius: 4px; }
.vl-modal-skeleton-line.short { width: 68%; }
.vl-modal-skeleton-field { width: 100%; height: 30px; border-radius: 8px; }
.vl-modal-skeleton-actions {
  display: flex !important;
  justify-content: flex-end;
  gap: 7px;
  margin-top: 3px;
  background: transparent !important;
  overflow: visible !important;
}
.vl-modal-skeleton-actions span { width: 62px; height: 28px; border-radius: 7px; }
.vl-modal-skeleton-title::after,
.vl-modal-skeleton-line::after,
.vl-modal-skeleton-field::after,
.vl-modal-skeleton-actions span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-modal-body-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-modal-body-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'attachment-list-skeleton',
    name: 'Attachment List Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A file-attachment list placeholder for documents, invoice files, images, and supporting records.',
    markup: `<div class="vl-attachment-list-skeleton" aria-hidden="true">
  <div class="vl-attachment-row"><i></i><span><strong></strong><small></small></span><b></b></div>
  <div class="vl-attachment-row"><i></i><span><strong></strong><small></small></span><b></b></div>
  <div class="vl-attachment-row short"><i></i><span><strong></strong><small></small></span><b></b></div>
</div>`,
    css: `.vl-attachment-list-skeleton {
  width: min(235px, 84vw);
  display: grid;
  gap: 7px;
}
.vl-attachment-row {
  min-height: 46px;
  display: grid;
  grid-template-columns: 30px 1fr 28px;
  align-items: center;
  gap: 9px;
  padding: 7px 9px;
  border: 1px solid #e1e7ef;
  border-radius: 8px;
  background: #fff;
}
.vl-attachment-row > span { display: grid; gap: 5px; }
.vl-attachment-row i,
.vl-attachment-row strong,
.vl-attachment-row small,
.vl-attachment-row b {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-attachment-row i { width: 30px; height: 30px; border-radius: 7px; }
.vl-attachment-row strong { width: 72%; height: 8px; border-radius: 4px; }
.vl-attachment-row small { width: 42%; height: 6px; border-radius: 3px; }
.vl-attachment-row.short strong { width: 50%; }
.vl-attachment-row b { width: 28px; height: 22px; border-radius: 6px; }
.vl-attachment-row i::after,
.vl-attachment-row strong::after,
.vl-attachment-row small::after,
.vl-attachment-row b::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-attachment-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-attachment-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'invoice-summary-skeleton',
    name: 'Invoice Summary Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'An invoice-total placeholder with subtotal, discount, tax, and grand-total rows.',
    markup: `<div class="vl-invoice-summary-skeleton" aria-hidden="true">
  <div><span></span><b></b></div>
  <div><span></span><b></b></div>
  <div><span></span><b></b></div>
  <div class="total"><span></span><b></b></div>
</div>`,
    css: `.vl-invoice-summary-skeleton {
  width: min(220px, 80vw);
  display: grid;
  gap: 8px;
  padding: 11px 12px;
  border: 1px solid #e0e6ee;
  border-radius: 9px;
  background: #fff;
}
.vl-invoice-summary-skeleton > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.vl-invoice-summary-skeleton .total {
  padding-top: 9px;
  border-top: 1px solid #dfe5ed;
}
.vl-invoice-summary-skeleton span,
.vl-invoice-summary-skeleton b {
  position: relative;
  overflow: hidden;
  display: block;
  height: 8px;
  border-radius: 4px;
  background: #e7ecf3;
}
.vl-invoice-summary-skeleton span { width: 42%; }
.vl-invoice-summary-skeleton b { width: 30%; }
.vl-invoice-summary-skeleton .total span,
.vl-invoice-summary-skeleton .total b { height: 11px; background: #dce3ec; }
.vl-invoice-summary-skeleton span::after,
.vl-invoice-summary-skeleton b::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-invoice-summary-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-invoice-summary-shimmer { to { transform: translateX(110%); } }`
  }
];
