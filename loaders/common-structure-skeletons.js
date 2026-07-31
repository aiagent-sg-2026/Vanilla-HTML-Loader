export const commonStructureLoaders = [
  {
    id: 'table-header-skeleton',
    name: 'Table Header Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A compact table header and first-row placeholder for ERP grids and report inquiries.',
    markup: `<div class="vl-table-head-skeleton" aria-hidden="true">
  <div class="vl-table-head-row head"><span></span><span></span><span></span><span></span></div>
  <div class="vl-table-head-row"><span></span><span></span><span></span><span></span></div>
  <div class="vl-table-head-row"><span></span><span></span><span></span><span></span></div>
</div>`,
    css: `.vl-table-head-skeleton {
  width: min(240px, 86vw);
  display: grid;
  gap: 8px;
}
.vl-table-head-row {
  display: grid;
  grid-template-columns: 1.25fr .8fr .7fr .55fr;
  gap: 7px;
}
.vl-table-head-row span {
  position: relative;
  overflow: hidden;
  height: 9px;
  border-radius: 5px;
  background: #e7ecf3;
}
.vl-table-head-row.head span { height: 13px; background: #d9e1eb; }
.vl-table-head-row span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-table-head-skeleton calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-table-head-skeleton { to { transform: translateX(110%); } }`
  },
  {
    id: 'filter-panel-skeleton',
    name: 'Filter Panel Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A common filter-panel placeholder with labels, inputs, selections, and action buttons.',
    markup: `<div class="vl-filter-skeleton" aria-hidden="true">
  <div class="vl-filter-skeleton-grid">
    <span class="label"></span><span class="label short"></span>
    <span class="field"></span><span class="field"></span>
    <span class="label"></span><span class="label short"></span>
    <span class="field"></span><span class="field"></span>
  </div>
  <div class="vl-filter-skeleton-actions"><span></span><span></span></div>
</div>`,
    css: `.vl-filter-skeleton {
  width: min(240px, 86vw);
  display: grid;
  gap: 11px;
}
.vl-filter-skeleton-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7px 10px;
}
.vl-filter-skeleton span {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 6px;
  background: #e7ecf3;
}
.vl-filter-skeleton .label { width: 68%; height: 8px; }
.vl-filter-skeleton .label.short { width: 44%; }
.vl-filter-skeleton .field { width: 100%; height: 28px; border-radius: 8px; }
.vl-filter-skeleton-actions { display: flex; justify-content: flex-end; gap: 8px; }
.vl-filter-skeleton-actions span { width: 58px; height: 27px; border-radius: 8px; }
.vl-filter-skeleton span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-filter-skeleton calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-filter-skeleton { to { transform: translateX(110%); } }`
  },
  {
    id: 'timeline-skeleton',
    name: 'Timeline Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A vertical activity timeline placeholder for approvals, audit logs, and transaction history.',
    markup: `<div class="vl-timeline-skeleton" aria-hidden="true">
  <div><i></i><span><b></b><small></small></span></div>
  <div><i></i><span><b></b><small></small></span></div>
  <div><i></i><span><b></b><small></small></span></div>
</div>`,
    css: `.vl-timeline-skeleton {
  width: min(230px, 82vw);
  display: grid;
  gap: 12px;
}
.vl-timeline-skeleton > div {
  position: relative;
  display: grid;
  grid-template-columns: 16px 1fr;
  gap: 10px;
}
.vl-timeline-skeleton > div:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 7px;
  top: 15px;
  width: 2px;
  height: 30px;
  background: #e1e7ef;
}
.vl-timeline-skeleton i,
.vl-timeline-skeleton b,
.vl-timeline-skeleton small {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-timeline-skeleton i { width: 16px; height: 16px; border-radius: 50%; }
.vl-timeline-skeleton span { display: grid; gap: 6px; }
.vl-timeline-skeleton b { width: 72%; height: 10px; border-radius: 5px; }
.vl-timeline-skeleton small { width: 48%; height: 7px; border-radius: 5px; }
.vl-timeline-skeleton i::after,
.vl-timeline-skeleton b::after,
.vl-timeline-skeleton small::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-timeline-skeleton calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-timeline-skeleton { to { transform: translateX(110%); } }`
  }
];
