export const commonBusinessSkeletonLoadersB = [
  {
    id: 'calendar-agenda-skeleton',
    name: 'Calendar Agenda Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'An agenda-view placeholder with date groups, times, and scheduled activity blocks.',
    markup: `<div class="vl-agenda-skeleton" aria-hidden="true">
  <div class="vl-agenda-day"><strong></strong><span></span></div>
  <div class="vl-agenda-item"><small></small><i></i><span><b></b><em></em></span></div>
  <div class="vl-agenda-item"><small></small><i></i><span><b></b><em></em></span></div>
  <div class="vl-agenda-day second"><strong></strong><span></span></div>
  <div class="vl-agenda-item short"><small></small><i></i><span><b></b><em></em></span></div>
</div>`,
    css: `.vl-agenda-skeleton {
  width: min(235px, 84vw);
  display: grid;
  gap: 7px;
}
.vl-agenda-day {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 3px;
}
.vl-agenda-day.second { margin-top: 4px; }
.vl-agenda-item {
  min-height: 42px;
  display: grid;
  grid-template-columns: 34px 5px 1fr;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border: 1px solid #e1e7ef;
  border-radius: 8px;
  background: #fff;
}
.vl-agenda-item > span { display: grid; gap: 5px; }
.vl-agenda-day strong,
.vl-agenda-day span,
.vl-agenda-item small,
.vl-agenda-item i,
.vl-agenda-item b,
.vl-agenda-item em {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-agenda-day strong { width: 42%; height: 10px; border-radius: 4px; background: #dce3ec; }
.vl-agenda-day span { width: 24%; height: 7px; border-radius: 4px; }
.vl-agenda-item small { width: 34px; height: 8px; border-radius: 4px; }
.vl-agenda-item i { width: 5px; height: 28px; border-radius: 999px; background: color-mix(in srgb, var(--loader-accent) 32%, #e7ecf3); }
.vl-agenda-item b { width: 68%; height: 8px; border-radius: 4px; }
.vl-agenda-item em { width: 42%; height: 6px; border-radius: 3px; }
.vl-agenda-item.short b { width: 48%; }
.vl-agenda-skeleton strong::after,
.vl-agenda-skeleton span::after,
.vl-agenda-skeleton small::after,
.vl-agenda-skeleton i::after,
.vl-agenda-skeleton b::after,
.vl-agenda-skeleton em::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-agenda-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-agenda-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'split-pane-skeleton',
    name: 'Split Pane Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A two-panel workspace placeholder for master-detail, party summary, transaction detail, and comparison screens.',
    markup: `<div class="vl-split-pane-skeleton" aria-hidden="true">
  <div class="vl-split-pane-left">
    <strong></strong><span></span><span class="short"></span><span></span>
  </div>
  <div class="vl-split-pane-divider"></div>
  <div class="vl-split-pane-right">
    <strong></strong><div></div><span></span><span class="short"></span>
  </div>
</div>`,
    css: `.vl-split-pane-skeleton {
  width: min(245px, 88vw);
  min-height: 116px;
  display: grid;
  grid-template-columns: .8fr 1px 1.2fr;
  gap: 10px;
  padding: 10px;
  border: 1px solid #e0e6ee;
  border-radius: 10px;
  background: #fff;
}
.vl-split-pane-left,
.vl-split-pane-right { display: grid; align-content: start; gap: 7px; }
.vl-split-pane-divider { background: #e2e8f0; }
.vl-split-pane-skeleton strong,
.vl-split-pane-skeleton span,
.vl-split-pane-right div {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 5px;
  background: #e7ecf3;
}
.vl-split-pane-skeleton strong { width: 70%; height: 10px; background: #dce3ec; }
.vl-split-pane-skeleton span { width: 100%; height: 8px; }
.vl-split-pane-skeleton span.short { width: 62%; }
.vl-split-pane-right div { width: 100%; height: 48px; border-radius: 8px; }
.vl-split-pane-skeleton strong::after,
.vl-split-pane-skeleton span::after,
.vl-split-pane-right div::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-split-pane-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-split-pane-shimmer { to { transform: translateX(110%); } }`
  }
];
