export const commonDataSkeletonLoaders = [
  {
    id: 'chart-skeleton',
    name: 'Chart Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A standard chart placeholder with title, legend, axis, and loading bars for analytics dashboards.',
    markup: `<div class="vl-chart-skeleton" aria-hidden="true">
  <div class="vl-chart-head"><span></span><i></i><i></i></div>
  <div class="vl-chart-body"><b></b><b></b><b></b><b></b><b></b></div>
  <div class="vl-chart-axis"></div>
</div>`,
    css: `.vl-chart-skeleton {
  width: min(235px, 84vw);
  display: grid;
  gap: 9px;
}
.vl-chart-head { display: flex; align-items: center; gap: 7px; }
.vl-chart-head span,
.vl-chart-head i,
.vl-chart-body b,
.vl-chart-axis {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-chart-head span { width: 52%; height: 11px; border-radius: 5px; margin-right: auto; }
.vl-chart-head i { width: 24px; height: 7px; border-radius: 999px; }
.vl-chart-body {
  height: 82px;
  display: flex;
  align-items: end;
  gap: 8px;
  padding: 8px 8px 0;
  border-left: 1px solid #dfe5ed;
  border-bottom: 1px solid #dfe5ed;
}
.vl-chart-body b { flex: 1; min-width: 0; border-radius: 5px 5px 0 0; }
.vl-chart-body b:nth-child(1) { height: 34%; }
.vl-chart-body b:nth-child(2) { height: 68%; }
.vl-chart-body b:nth-child(3) { height: 50%; }
.vl-chart-body b:nth-child(4) { height: 82%; }
.vl-chart-body b:nth-child(5) { height: 58%; }
.vl-chart-axis { width: 72%; height: 7px; border-radius: 999px; justify-self: center; }
.vl-chart-skeleton span::after,
.vl-chart-skeleton i::after,
.vl-chart-skeleton b::after,
.vl-chart-axis::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-chart-skeleton calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-chart-skeleton { to { transform: translateX(110%); } }`
  },
  {
    id: 'calendar-skeleton',
    name: 'Calendar Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A compact calendar placeholder for booking, scheduling, date pickers, and monthly activity views.',
    markup: `<div class="vl-calendar-skeleton" aria-hidden="true">
  <div class="vl-calendar-header"><span></span><i></i></div>
  <div class="vl-calendar-grid">
    <b></b><b></b><b></b><b></b><b></b><b></b><b></b>
    <b></b><b></b><b></b><b></b><b></b><b></b><b></b>
    <b></b><b></b><b></b><b></b><b></b><b></b><b></b>
    <b></b><b></b><b></b><b></b><b></b><b></b><b></b>
  </div>
</div>`,
    css: `.vl-calendar-skeleton {
  width: min(225px, 82vw);
  display: grid;
  gap: 10px;
}
.vl-calendar-header { display: flex; align-items: center; justify-content: space-between; }
.vl-calendar-header span,
.vl-calendar-header i,
.vl-calendar-grid b {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-calendar-header span { width: 42%; height: 11px; border-radius: 5px; }
.vl-calendar-header i { width: 26px; height: 11px; border-radius: 5px; }
.vl-calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; }
.vl-calendar-grid b { aspect-ratio: 1; border-radius: 5px; }
.vl-calendar-grid b:nth-child(5n) { background: color-mix(in srgb, var(--loader-accent) 10%, #e7ecf3); }
.vl-calendar-skeleton span::after,
.vl-calendar-skeleton i::after,
.vl-calendar-grid b::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-calendar-skeleton calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-calendar-skeleton { to { transform: translateX(110%); } }`
  },
  {
    id: 'sidebar-skeleton',
    name: 'Sidebar Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A normal navigation-sidebar placeholder with brand, menu rows, and footer account content.',
    markup: `<div class="vl-sidebar-skeleton" aria-hidden="true">
  <div class="brand"><span></span><i></i></div>
  <div class="menu"><span></span><span></span><span></span><span></span><span></span></div>
  <div class="account"><b></b><span></span></div>
</div>`,
    css: `.vl-sidebar-skeleton {
  width: min(210px, 78vw);
  min-height: 145px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 13px;
  padding: 13px;
  border: 1px solid #e1e7ef;
  border-radius: 10px;
  background: #fff;
}
.vl-sidebar-skeleton .brand,
.vl-sidebar-skeleton .account { display: flex; align-items: center; gap: 9px; }
.vl-sidebar-skeleton .menu { display: grid; gap: 8px; }
.vl-sidebar-skeleton span,
.vl-sidebar-skeleton i,
.vl-sidebar-skeleton b {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-sidebar-skeleton .brand span { width: 28px; height: 28px; border-radius: 8px; }
.vl-sidebar-skeleton .brand i { width: 55%; height: 10px; border-radius: 5px; }
.vl-sidebar-skeleton .menu span { width: 88%; height: 10px; border-radius: 5px; }
.vl-sidebar-skeleton .menu span:nth-child(2),
.vl-sidebar-skeleton .menu span:nth-child(4) { width: 72%; }
.vl-sidebar-skeleton .account b { width: 25px; height: 25px; border-radius: 50%; }
.vl-sidebar-skeleton .account span { width: 48%; height: 9px; border-radius: 5px; }
.vl-sidebar-skeleton span::after,
.vl-sidebar-skeleton i::after,
.vl-sidebar-skeleton b::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-sidebar-skeleton calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-sidebar-skeleton { to { transform: translateX(110%); } }`
  },
  {
    id: 'card-grid-skeleton',
    name: 'Card Grid Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A four-card placeholder for product grids, dashboard tiles, modules, and summary collections.',
    markup: `<div class="vl-card-grid-skeleton" aria-hidden="true">
  <div><span></span><i></i><b></b></div><div><span></span><i></i><b></b></div>
  <div><span></span><i></i><b></b></div><div><span></span><i></i><b></b></div>
</div>`,
    css: `.vl-card-grid-skeleton {
  width: min(235px, 84vw);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}
.vl-card-grid-skeleton > div {
  display: grid;
  gap: 7px;
  padding: 9px;
  border: 1px solid #e1e7ef;
  border-radius: 9px;
  background: #fff;
}
.vl-card-grid-skeleton span,
.vl-card-grid-skeleton i,
.vl-card-grid-skeleton b {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-card-grid-skeleton span { height: 38px; border-radius: 7px; }
.vl-card-grid-skeleton i { width: 72%; height: 9px; border-radius: 5px; }
.vl-card-grid-skeleton b { width: 45%; height: 7px; border-radius: 5px; }
.vl-card-grid-skeleton span::after,
.vl-card-grid-skeleton i::after,
.vl-card-grid-skeleton b::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-card-grid-skeleton calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-card-grid-skeleton { to { transform: translateX(110%); } }`
  },
  {
    id: 'summary-panel-skeleton',
    name: 'Summary Panel Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A practical summary-panel placeholder with header, KPI values, detail rows, and action area.',
    markup: `<div class="vl-summary-skeleton" aria-hidden="true">
  <div class="header"><span></span><i></i></div>
  <div class="values"><b></b><b></b><b></b></div>
  <div class="rows"><span></span><span></span><span></span></div>
  <div class="action"></div>
</div>`,
    css: `.vl-summary-skeleton {
  width: min(235px, 84vw);
  display: grid;
  gap: 10px;
  padding: 13px;
  border: 1px solid #e1e7ef;
  border-radius: 10px;
  background: #fff;
}
.vl-summary-skeleton .header { display: flex; align-items: center; justify-content: space-between; }
.vl-summary-skeleton .values { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.vl-summary-skeleton .rows { display: grid; gap: 7px; }
.vl-summary-skeleton span,
.vl-summary-skeleton i,
.vl-summary-skeleton b,
.vl-summary-skeleton .action {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-summary-skeleton .header span { width: 52%; height: 11px; border-radius: 5px; }
.vl-summary-skeleton .header i { width: 34px; height: 11px; border-radius: 5px; }
.vl-summary-skeleton .values b { height: 34px; border-radius: 7px; }
.vl-summary-skeleton .rows span { height: 8px; border-radius: 5px; }
.vl-summary-skeleton .rows span:nth-child(2) { width: 84%; }
.vl-summary-skeleton .rows span:nth-child(3) { width: 67%; }
.vl-summary-skeleton .action { width: 34%; height: 25px; border-radius: 7px; }
.vl-summary-skeleton span::after,
.vl-summary-skeleton i::after,
.vl-summary-skeleton b::after,
.vl-summary-skeleton .action::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-summary-skeleton calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-summary-skeleton { to { transform: translateX(110%); } }`
  }
];
