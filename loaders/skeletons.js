export const skeletonLoaders = [
  {
    id: 'data-table-skeleton',
    name: 'Data Table Skeleton',
    category: 'Skeletons',
    tech: 'Vanilla CSS',
    description: 'A structured table placeholder with header, checkbox, text, status, and action columns for admin and data screens.',
    markup: `<div class="vl-table-skeleton" aria-hidden="true">
  <div class="vl-table-head"><span></span><span></span><span></span><span></span></div>
  <div class="vl-table-row"><span class="vl-table-check"></span><span class="vl-table-line long"></span><span class="vl-table-line medium"></span><span class="vl-table-pill"></span></div>
  <div class="vl-table-row"><span class="vl-table-check"></span><span class="vl-table-line medium"></span><span class="vl-table-line short"></span><span class="vl-table-pill"></span></div>
  <div class="vl-table-row"><span class="vl-table-check"></span><span class="vl-table-line long"></span><span class="vl-table-line medium"></span><span class="vl-table-pill"></span></div>
</div>`,
    css: `.vl-table-skeleton {
  width: min(250px, 84vw);
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 12%, #dfe5ee);
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 8px 22px rgba(23, 32, 51, .07);
}
.vl-table-head,
.vl-table-row { display: grid; grid-template-columns: 18px 1.25fr .9fr 46px; align-items: center; gap: 8px; padding: 8px 10px; }
.vl-table-head { min-height: 28px; background: color-mix(in srgb, var(--loader-accent) 7%, #f6f8fb); }
.vl-table-row { min-height: 30px; border-top: 1px solid #edf1f6; }
.vl-table-head span,
.vl-table-check,
.vl-table-line,
.vl-table-pill { position: relative; overflow: hidden; display: block; border-radius: 999px; background: color-mix(in srgb, var(--loader-accent) 10%, #e4e9f1); }
.vl-table-head span { height: 7px; }
.vl-table-check { width: 12px; height: 12px; border-radius: 3px; }
.vl-table-line { height: 8px; }
.vl-table-line.long { width: 92%; }
.vl-table-line.medium { width: 72%; }
.vl-table-line.short { width: 50%; }
.vl-table-pill { width: 42px; height: 14px; }
.vl-table-head span::after,
.vl-table-check::after,
.vl-table-line::after,
.vl-table-pill::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.9), transparent);
  animation: vl-table-shimmer calc(var(--loader-speed) * 1.7) ease-in-out infinite;
}
.vl-table-row:nth-child(3) span::after { animation-delay: .12s; }
.vl-table-row:nth-child(4) span::after { animation-delay: .24s; }
@keyframes vl-table-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'skeleton-rhythm-grid',
    name: 'Rhythm Grid Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'Skeleton blocks pulse in a rhythmic wave across a grid.',
    markup: `<div class="vl-cat-skeleton-rhythm-grid" role="img" aria-label="Rhythm grid skeleton">
  <span class="a"></span><span class="b"></span><span class="c"></span>
  <span class="d"></span><span class="e"></span><span class="f"></span>
</div>`,
    css: `.vl-cat-skeleton-rhythm-grid {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5a89);
  border-radius: 14px;
  position: relative;
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  align-content: center;
  background: linear-gradient(180deg, #f8fbff, #f0f5fa);
}
.vl-cat-skeleton-rhythm-grid span {
  width: 46px;
  height: 18px;
  border-radius: 10px;
  background: color-mix(in srgb, var(--loader-accent) 28%, #d7e2ef);
  animation: vl-cat-skeleton-rhythm-grid-pulse calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
.vl-cat-skeleton-rhythm-grid .a { animation-delay: 0s; }
.vl-cat-skeleton-rhythm-grid .b { animation-delay: -0.14s; }
.vl-cat-skeleton-rhythm-grid .c { animation-delay: -0.28s; }
.vl-cat-skeleton-rhythm-grid .d { animation-delay: -0.42s; }
.vl-cat-skeleton-rhythm-grid .e { animation-delay: -0.56s; }
.vl-cat-skeleton-rhythm-grid .f { animation-delay: -0.7s; }
@keyframes vl-cat-skeleton-rhythm-grid-pulse {
  0%,100% { opacity: .32; }
  50% { opacity: .92; }
}`
  },
  {
    id: 'skeleton-panel-grid',
    name: 'Panel Grid Skeleton',
    category: 'Skeletons',
    tech: 'Vanilla CSS',
    description: 'Skeleton card rows and fields flicker in a compact panel cadence.',
    markup: `<div class="vl-cat-skeleton-panel-grid" role="img" aria-label="Panel grid skeleton">
  <span class="line l1"></span>
  <span class="line l2"></span>
  <span class="line l3"></span>
  <span class="line l4"></span>
</div>`,
    css: `.vl-cat-skeleton-panel-grid {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #dce6ef);
  border-radius: 14px;
  padding: 12px;
  display: grid;
  gap: 8px;
  align-content: center;
  background: #fff;
}
.vl-cat-skeleton-panel-grid .line {
  position: relative;
  border-radius: 999px;
  height: 10px;
  background: #e8edf5;
  overflow: hidden;
}
.vl-cat-skeleton-panel-grid .l1 { width: 86%; }
.vl-cat-skeleton-panel-grid .l2 { width: 100%; }
.vl-cat-skeleton-panel-grid .l3 { width: 74%; }
.vl-cat-skeleton-panel-grid .l4 { width: 100%; }
.vl-cat-skeleton-panel-grid .line::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.9), transparent);
  animation: vl-cat-skeleton-panel-grid-shine calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
@keyframes vl-cat-skeleton-panel-grid-shine {
  0% { transform: translateX(-110%); }
  50%,100% { transform: translateX(110%); }
}`
  },

];
