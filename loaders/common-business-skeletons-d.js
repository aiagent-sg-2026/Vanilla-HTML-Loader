export const commonBusinessSkeletonLoadersD = [
  {
    id: 'approval-workflow-skeleton',
    name: 'Approval Workflow Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A workflow placeholder for approval stages, approvers, decisions, and pending actions.',
    markup: `<div class="vl-approval-skeleton" aria-hidden="true">
  <div class="vl-approval-step done"><span></span><i></i><b></b></div>
  <div class="vl-approval-step active"><span></span><i></i><b></b></div>
  <div class="vl-approval-step"><span></span><i></i><b></b></div>
  <div class="vl-approval-actions"><span></span><span></span></div>
</div>`,
    css: `.vl-approval-skeleton {
  width: min(235px, 84vw);
  display: grid;
  gap: 8px;
}
.vl-approval-step {
  position: relative;
  display: grid;
  grid-template-columns: 24px 1fr 38px;
  align-items: center;
  gap: 9px;
  min-height: 32px;
}
.vl-approval-step:not(:last-of-type)::after {
  content: '';
  position: absolute;
  left: 11px;
  top: 27px;
  width: 2px;
  height: 21px;
  background: #e0e6ee;
}
.vl-approval-step span,
.vl-approval-step i,
.vl-approval-step b,
.vl-approval-actions span {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-approval-step span { width: 24px; height: 24px; border-radius: 50%; }
.vl-approval-step.done span,
.vl-approval-step.active span { background: color-mix(in srgb, var(--loader-accent) 22%, #e7ecf3); }
.vl-approval-step i { width: 72%; height: 9px; border-radius: 4px; }
.vl-approval-step b { width: 38px; height: 18px; border-radius: 6px; }
.vl-approval-actions { display: flex; justify-content: flex-end; gap: 7px; padding-top: 3px; }
.vl-approval-actions span { width: 58px; height: 25px; border-radius: 7px; }
.vl-approval-step span::after,
.vl-approval-step i::after,
.vl-approval-step b::after,
.vl-approval-actions span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-approval-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-approval-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'import-mapping-skeleton',
    name: 'Import Mapping Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A column-mapping placeholder for CSV imports, data migration, and source-to-target field matching.',
    markup: `<div class="vl-mapping-skeleton" aria-hidden="true">
  <div class="vl-mapping-head"><span></span><i></i><span></span></div>
  <div class="vl-mapping-row"><span></span><i></i><span></span></div>
  <div class="vl-mapping-row"><span></span><i></i><span></span></div>
  <div class="vl-mapping-row short"><span></span><i></i><span></span></div>
  <div class="vl-mapping-footer"><span></span><span></span></div>
</div>`,
    css: `.vl-mapping-skeleton {
  width: min(240px, 86vw);
  display: grid;
  gap: 7px;
}
.vl-mapping-head,
.vl-mapping-row {
  display: grid;
  grid-template-columns: 1fr 24px 1fr;
  align-items: center;
  gap: 8px;
}
.vl-mapping-head { padding-bottom: 4px; border-bottom: 1px solid #e1e7ef; }
.vl-mapping-head span,
.vl-mapping-head i,
.vl-mapping-row span,
.vl-mapping-row i,
.vl-mapping-footer span {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-mapping-head span { width: 72%; height: 8px; border-radius: 4px; background: #dce3ed; }
.vl-mapping-head i { width: 18px; height: 18px; border-radius: 6px; }
.vl-mapping-row { min-height: 30px; }
.vl-mapping-row span { height: 25px; border-radius: 7px; }
.vl-mapping-row.short span:first-child { width: 74%; }
.vl-mapping-row.short span:last-child { width: 82%; }
.vl-mapping-row i { width: 18px; height: 8px; border-radius: 999px; justify-self: center; }
.vl-mapping-footer { display: flex; justify-content: flex-end; gap: 7px; padding-top: 3px; }
.vl-mapping-footer span { width: 62px; height: 25px; border-radius: 7px; }
.vl-mapping-skeleton span::after,
.vl-mapping-skeleton i::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-mapping-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-mapping-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'comparison-table-skeleton',
    name: 'Comparison Table Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A side-by-side comparison skeleton for plans, products, vendors, quotations, and period analysis.',
    markup: `<div class="vl-comparison-skeleton" aria-hidden="true">
  <div class="vl-comparison-row head"><span></span><span></span><span></span></div>
  <div class="vl-comparison-row"><span></span><span></span><span></span></div>
  <div class="vl-comparison-row"><span></span><span></span><span></span></div>
  <div class="vl-comparison-row"><span></span><span></span><span></span></div>
  <div class="vl-comparison-row action"><span></span><span></span><span></span></div>
</div>`,
    css: `.vl-comparison-skeleton {
  width: min(245px, 88vw);
  display: grid;
  gap: 6px;
}
.vl-comparison-row {
  display: grid;
  grid-template-columns: 1.15fr .85fr .85fr;
  gap: 7px;
  align-items: center;
}
.vl-comparison-row span {
  position: relative;
  overflow: hidden;
  display: block;
  height: 9px;
  border-radius: 4px;
  background: #e7ecf3;
}
.vl-comparison-row.head span { height: 12px; background: #dce3ed; }
.vl-comparison-row.action span { height: 25px; border-radius: 7px; }
.vl-comparison-row span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-comparison-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-comparison-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'kpi-trend-skeleton',
    name: 'KPI Trend Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A KPI card placeholder with value, variance, sparkline, and supporting metric blocks.',
    markup: `<div class="vl-kpi-trend-skeleton" aria-hidden="true">
  <div class="vl-kpi-trend-head"><span></span><i></i></div>
  <div class="vl-kpi-trend-value"></div>
  <div class="vl-kpi-trend-chart"><span></span><span></span><span></span><span></span><span></span></div>
  <div class="vl-kpi-trend-foot"><span></span><span></span></div>
</div>`,
    css: `.vl-kpi-trend-skeleton {
  width: min(220px, 80vw);
  display: grid;
  gap: 8px;
  padding: 11px;
  border: 1px solid #e0e6ee;
  border-radius: 10px;
  background: #fff;
}
.vl-kpi-trend-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.vl-kpi-trend-head span,
.vl-kpi-trend-head i,
.vl-kpi-trend-value,
.vl-kpi-trend-chart span,
.vl-kpi-trend-foot span {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-kpi-trend-head span { width: 52%; height: 8px; border-radius: 4px; }
.vl-kpi-trend-head i { width: 38px; height: 17px; border-radius: 6px; }
.vl-kpi-trend-value { width: 42%; height: 22px; border-radius: 6px; background: #dce3ed; }
.vl-kpi-trend-chart { height: 54px; display: flex; align-items: flex-end; gap: 6px; padding-top: 4px; }
.vl-kpi-trend-chart span { width: 16%; border-radius: 4px 4px 2px 2px; }
.vl-kpi-trend-chart span:nth-child(1) { height: 28%; }
.vl-kpi-trend-chart span:nth-child(2) { height: 52%; }
.vl-kpi-trend-chart span:nth-child(3) { height: 42%; }
.vl-kpi-trend-chart span:nth-child(4) { height: 72%; }
.vl-kpi-trend-chart span:nth-child(5) { height: 88%; }
.vl-kpi-trend-foot { display: flex; justify-content: space-between; gap: 10px; }
.vl-kpi-trend-foot span:first-child { width: 42%; height: 7px; border-radius: 4px; }
.vl-kpi-trend-foot span:last-child { width: 26%; height: 7px; border-radius: 4px; }
.vl-kpi-trend-skeleton span::after,
.vl-kpi-trend-skeleton i::after,
.vl-kpi-trend-value::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-kpi-trend-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-kpi-trend-shimmer { to { transform: translateX(110%); } }`
  }
];
