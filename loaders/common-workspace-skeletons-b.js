export const commonWorkspaceSkeletonLoadersB = [
  {
    id: 'chart-legend-skeleton',
    name: 'Chart Legend Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A chart placeholder with title, plot area, axis labels, and legend items for dashboards and reports.',
    markup: `<div class="vl-chart-legend-skeleton" aria-hidden="true">
  <div class="vl-chart-legend-head"><span></span><i></i></div>
  <div class="vl-chart-legend-plot"><span></span><span></span><span></span><span></span></div>
  <div class="vl-chart-legend-items"><span><i></i><b></b></span><span><i></i><b></b></span><span><i></i><b></b></span></div>
</div>`,
    css: `.vl-chart-legend-skeleton {
  width: min(235px, 84vw);
  display: grid;
  gap: 8px;
}
.vl-chart-legend-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.vl-chart-legend-head span,
.vl-chart-legend-head i,
.vl-chart-legend-plot span,
.vl-chart-legend-items i,
.vl-chart-legend-items b {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 5px;
  background: #e7ecf3;
}
.vl-chart-legend-head span { width: 52%; height: 11px; }
.vl-chart-legend-head i { width: 42px; height: 18px; border-radius: 6px; }
.vl-chart-legend-plot {
  height: 82px;
  display: flex;
  align-items: flex-end;
  gap: 9px;
  padding: 8px 10px;
  border-left: 1px solid #dfe5ed;
  border-bottom: 1px solid #dfe5ed;
}
.vl-chart-legend-plot span { width: 20%; border-radius: 5px 5px 2px 2px; }
.vl-chart-legend-plot span:nth-child(1) { height: 34%; }
.vl-chart-legend-plot span:nth-child(2) { height: 68%; }
.vl-chart-legend-plot span:nth-child(3) { height: 48%; }
.vl-chart-legend-plot span:nth-child(4) { height: 82%; }
.vl-chart-legend-items { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.vl-chart-legend-items > span { display: inline-flex; align-items: center; gap: 5px; }
.vl-chart-legend-items i { width: 8px; height: 8px; border-radius: 2px; }
.vl-chart-legend-items b { width: 34px; height: 7px; border-radius: 4px; }
.vl-chart-legend-skeleton span::after,
.vl-chart-legend-skeleton i::after,
.vl-chart-legend-skeleton b::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-chart-legend-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-chart-legend-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'file-thumbnail-skeleton',
    name: 'File Thumbnail Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A file-browser skeleton with thumbnail, filename, metadata, and action placeholders.',
    markup: `<div class="vl-file-thumbnail-skeleton" aria-hidden="true">
  <div class="vl-file-thumbnail-preview"><span></span><i></i></div>
  <div class="vl-file-thumbnail-copy"><strong></strong><small></small></div>
  <div class="vl-file-thumbnail-actions"><span></span><span></span></div>
</div>`,
    css: `.vl-file-thumbnail-skeleton {
  width: min(190px, 70vw);
  display: grid;
  gap: 8px;
  padding: 9px;
  border: 1px solid #e0e6ee;
  border-radius: 10px;
  background: #fff;
}
.vl-file-thumbnail-preview {
  height: 92px;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: #eef2f7;
}
.vl-file-thumbnail-preview span {
  width: 38px;
  height: 48px;
  border-radius: 6px;
  background: #dce3ed;
}
.vl-file-thumbnail-preview i {
  position: absolute;
  right: 8px;
  top: 8px;
  width: 28px;
  height: 17px;
  border-radius: 5px;
  background: #dfe6ef;
}
.vl-file-thumbnail-copy { display: grid; gap: 6px; }
.vl-file-thumbnail-copy strong,
.vl-file-thumbnail-copy small,
.vl-file-thumbnail-actions span,
.vl-file-thumbnail-preview span,
.vl-file-thumbnail-preview i {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-file-thumbnail-copy strong { width: 76%; height: 9px; border-radius: 4px; }
.vl-file-thumbnail-copy small { width: 42%; height: 7px; border-radius: 4px; }
.vl-file-thumbnail-actions { display: flex; justify-content: flex-end; gap: 6px; }
.vl-file-thumbnail-actions span { width: 32px; height: 24px; border-radius: 6px; }
.vl-file-thumbnail-copy strong::after,
.vl-file-thumbnail-copy small::after,
.vl-file-thumbnail-actions span::after,
.vl-file-thumbnail-preview span::after,
.vl-file-thumbnail-preview i::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-file-thumbnail-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-file-thumbnail-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'kanban-board-skeleton',
    name: 'Kanban Board Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A compact board skeleton for task management, workflow stages, approvals, and project tracking.',
    markup: `<div class="vl-kanban-skeleton" aria-hidden="true">
  <div class="vl-kanban-column"><strong></strong><span></span><span class="short"></span></div>
  <div class="vl-kanban-column"><strong></strong><span class="tall"></span><span></span></div>
  <div class="vl-kanban-column"><strong></strong><span class="short"></span></div>
</div>`,
    css: `.vl-kanban-skeleton {
  width: min(245px, 88vw);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 7px;
}
.vl-kanban-column {
  min-width: 0;
  display: grid;
  align-content: start;
  gap: 6px;
  padding: 7px;
  border: 1px solid #e1e7ef;
  border-radius: 8px;
  background: #f8fafc;
}
.vl-kanban-column strong,
.vl-kanban-column span {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 5px;
  background: #e7ecf3;
}
.vl-kanban-column strong { width: 66%; height: 8px; margin-bottom: 1px; background: #dce3ec; }
.vl-kanban-column span { width: 100%; height: 34px; border-radius: 7px; background: #fff; box-shadow: 0 1px 0 #e5eaf1; }
.vl-kanban-column span.short { height: 24px; }
.vl-kanban-column span.tall { height: 44px; }
.vl-kanban-column strong::after,
.vl-kanban-column span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-kanban-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-kanban-shimmer { to { transform: translateX(110%); } }`
  }
];
