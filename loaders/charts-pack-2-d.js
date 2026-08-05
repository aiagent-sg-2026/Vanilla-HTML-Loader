export const chartsPack2LoadersD = [
  {
    id: 'chart-grid-cascade',
    name: 'Grid Cascade Chart',
    category: 'Charts',
    tech: 'CSS',
    description: 'Chart bars cascade across staggered rows while axis guides hold the rhythm.',
    markup: `<div class="vl-cat-chart-grid-cascade" role="img" aria-label="Grid cascade chart">
  <span class="axis"></span>
  <span class="bar a"></span>
  <span class="bar b"></span>
  <span class="bar c"></span>
</div>`,
    css: `.vl-cat-chart-grid-cascade {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #dce8f5);
  border-radius: 14px;
  background: linear-gradient(160deg, #071d35, #0b2c47 66%, #040a13);
  position: relative;
  overflow: hidden;
  padding: 16px;
}
.vl-cat-chart-grid-cascade .axis {
  position: absolute;
  inset: 8px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #d8e5f4);
  border-radius: 8px;
  border-right: none;
  border-top: none;
}
.vl-cat-chart-grid-cascade .bar {
  position: absolute;
  left: 16px;
  height: 8px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 32%, #d8e4f3);
}
.vl-cat-chart-grid-cascade .bar::after {
  content: '';
  position: absolute;
  inset: 0;
  width: 28px;
  border-radius: inherit;
  background: var(--loader-accent);
  animation: vl-cat-chart-grid-cascade-wave calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-cat-chart-grid-cascade .a { top: 16px; width: 140px; }
.vl-cat-chart-grid-cascade .b { top: 36px; width: 152px; }
.vl-cat-chart-grid-cascade .c { top: 56px; width: 124px; }
.vl-cat-chart-grid-cascade .a::after { animation-delay: 0s; }
.vl-cat-chart-grid-cascade .b::after { animation-delay: -.25s; }
.vl-cat-chart-grid-cascade .c::after { animation-delay: -.5s; }
@keyframes vl-cat-chart-grid-cascade-wave {
  0% { transform: translateX(-124px); opacity: .25; }
  50% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(150px); opacity: .24; }
}`
  },
];
