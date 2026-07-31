export const commonShellSkeletonLoaders = [
  {
    id: 'tab-content-skeleton',
    name: 'Tab Content Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A standard tab-panel skeleton with tab labels, heading, and content placeholders.',
    markup: `<div class="vl-tab-skeleton" aria-hidden="true">
  <div class="vl-tab-skeleton-tabs"><span></span><span></span><span></span></div>
  <span class="vl-tab-skeleton-title"></span>
  <span class="vl-tab-skeleton-line"></span>
  <span class="vl-tab-skeleton-line short"></span>
  <span class="vl-tab-skeleton-box"></span>
</div>`,
    css: `.vl-tab-skeleton {
  width: min(235px, 84vw);
  display: grid;
  gap: 8px;
}
.vl-tab-skeleton-tabs {
  display: flex;
  gap: 7px;
  padding-bottom: 7px;
  border-bottom: 1px solid #e1e7ef;
}
.vl-tab-skeleton span {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 5px;
  background: #e7ecf3;
}
.vl-tab-skeleton-tabs span { width: 48px; height: 9px; }
.vl-tab-skeleton-title { width: 58%; height: 13px; margin-top: 3px; }
.vl-tab-skeleton-line { width: 100%; height: 8px; }
.vl-tab-skeleton-line.short { width: 68%; }
.vl-tab-skeleton-box { width: 100%; height: 46px; border-radius: 8px !important; }
.vl-tab-skeleton span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-tab-skeleton calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-tab-skeleton { to { transform: translateX(110%); } }`
  },
  {
    id: 'kpi-card-skeleton',
    name: 'KPI Card Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A compact KPI-card placeholder for dashboards, management reports, and analytics pages.',
    markup: `<div class="vl-kpi-skeleton" aria-hidden="true">
  <span class="vl-kpi-skeleton-label"></span>
  <span class="vl-kpi-skeleton-value"></span>
  <div><span></span><span></span></div>
</div>`,
    css: `.vl-kpi-skeleton {
  width: min(210px, 76vw);
  display: grid;
  gap: 9px;
  padding: 15px;
  border: 1px solid #e1e7ef;
  border-radius: 11px;
  background: #fff;
}
.vl-kpi-skeleton span {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 5px;
  background: #e7ecf3;
}
.vl-kpi-skeleton-label { width: 46%; height: 8px; }
.vl-kpi-skeleton-value { width: 62%; height: 22px; }
.vl-kpi-skeleton > div { display: flex; justify-content: space-between; gap: 12px; }
.vl-kpi-skeleton > div span:first-child { width: 38%; height: 8px; }
.vl-kpi-skeleton > div span:last-child { width: 26%; height: 8px; }
.vl-kpi-skeleton span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-kpi-skeleton calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-kpi-skeleton { to { transform: translateX(110%); } }`
  },
  {
    id: 'notification-list-skeleton',
    name: 'Notification List Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A three-item notification placeholder for activity feeds, alerts, inboxes, and approval queues.',
    markup: `<div class="vl-notification-skeleton" aria-hidden="true">
  <div><span class="dot"></span><span class="copy"><i></i><i></i></span><span class="time"></span></div>
  <div><span class="dot"></span><span class="copy"><i></i><i></i></span><span class="time"></span></div>
  <div><span class="dot"></span><span class="copy"><i></i><i></i></span><span class="time"></span></div>
</div>`,
    css: `.vl-notification-skeleton {
  width: min(235px, 84vw);
  display: grid;
  gap: 11px;
}
.vl-notification-skeleton > div {
  display: grid;
  grid-template-columns: 10px 1fr 34px;
  align-items: start;
  gap: 9px;
}
.vl-notification-skeleton .copy { display: grid; gap: 6px; }
.vl-notification-skeleton .dot,
.vl-notification-skeleton i,
.vl-notification-skeleton .time {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-notification-skeleton .dot { width: 10px; height: 10px; border-radius: 50%; margin-top: 1px; }
.vl-notification-skeleton i { height: 8px; border-radius: 5px; }
.vl-notification-skeleton i:first-child { width: 90%; }
.vl-notification-skeleton i:last-child { width: 62%; }
.vl-notification-skeleton .time { width: 34px; height: 7px; border-radius: 5px; }
.vl-notification-skeleton .dot::after,
.vl-notification-skeleton i::after,
.vl-notification-skeleton .time::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-notification-skeleton calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-notification-skeleton { to { transform: translateX(110%); } }`
  },
  {
    id: 'breadcrumb-skeleton',
    name: 'Breadcrumb Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A small breadcrumb and heading placeholder for application pages and detail screens.',
    markup: `<div class="vl-breadcrumb-skeleton" aria-hidden="true">
  <div><span></span><i></i><span></span><i></i><span></span></div>
  <span class="vl-breadcrumb-title"></span>
</div>`,
    css: `.vl-breadcrumb-skeleton {
  width: min(230px, 82vw);
  display: grid;
  gap: 12px;
}
.vl-breadcrumb-skeleton > div { display: flex; align-items: center; gap: 7px; }
.vl-breadcrumb-skeleton span {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 5px;
  background: #e7ecf3;
}
.vl-breadcrumb-skeleton > div span { width: 42px; height: 7px; }
.vl-breadcrumb-skeleton > div span:nth-of-type(2) { width: 56px; }
.vl-breadcrumb-skeleton > div span:nth-of-type(3) { width: 34px; }
.vl-breadcrumb-skeleton i {
  width: 5px;
  height: 5px;
  border-top: 1px solid #c5ceda;
  border-right: 1px solid #c5ceda;
  transform: rotate(45deg);
}
.vl-breadcrumb-title { width: 64%; height: 18px; }
.vl-breadcrumb-skeleton span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-breadcrumb-skeleton calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-breadcrumb-skeleton { to { transform: translateX(110%); } }`
  },
  {
    id: 'toolbar-skeleton',
    name: 'Toolbar Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A practical search, filter, and action toolbar placeholder for list and report pages.',
    markup: `<div class="vl-toolbar-skeleton" aria-hidden="true">
  <span class="search"></span>
  <span class="filter"></span>
  <span class="button"></span>
</div>`,
    css: `.vl-toolbar-skeleton {
  width: min(240px, 86vw);
  display: grid;
  grid-template-columns: 1fr 54px 58px;
  gap: 8px;
}
.vl-toolbar-skeleton span {
  position: relative;
  overflow: hidden;
  display: block;
  height: 32px;
  border-radius: 8px;
  background: #e7ecf3;
}
.vl-toolbar-skeleton .button { background: color-mix(in srgb, var(--loader-accent) 16%, #e7ecf3); }
.vl-toolbar-skeleton span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-toolbar-skeleton calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
@keyframes vl-toolbar-skeleton { to { transform: translateX(110%); } }`
  }
];
