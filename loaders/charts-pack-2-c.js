export const chartsPack2LoadersC = [
  {
    id: 'chart-wave-grid-rhythm',
    name: 'Wave Grid Chart',
    category: 'Charts',
    tech: 'CSS',
    description: 'A compact wave chart redraws itself with grouped column movement.',
    markup: `<div class="vl-cat-chart-wave-grid-rhythm" role="img" aria-label="Wave grid chart">
  <span class="bar b1"></span>
  <span class="bar b2"></span>
  <span class="bar b3"></span>
  <span class="bar b4"></span>
  <span class="bar b5"></span>
  <span class="line"></span>
</div>`,
    css: `.vl-cat-chart-wave-grid-rhythm {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5786);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
}
.vl-cat-chart-wave-grid-rhythm .bar {
  position: absolute;
  bottom: 14px;
  width: 16px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 80%, #eef6ff);
  animation: vl-cat-chart-wave-grid-rise calc(var(--loader-speed) * 1.16) ease-in-out infinite;
}
.vl-cat-chart-wave-grid-rhythm .b1 { left: 24px; height: 32px; animation-delay: -0.1s; }
.vl-cat-chart-wave-grid-rhythm .b2 { left: 50px; height: 43px; animation-delay: -0.2s; }
.vl-cat-chart-wave-grid-rhythm .b3 { left: 76px; height: 54px; animation-delay: -0.3s; }
.vl-cat-chart-wave-grid-rhythm .b4 { left: 102px; height: 45px; animation-delay: -0.4s; }
.vl-cat-chart-wave-grid-rhythm .b5 { left: 128px; height: 34px; animation-delay: -0.5s; }
.vl-cat-chart-wave-grid-rhythm .line {
  position: absolute;
  left: 24px;
  right: 24px;
  top: 18px;
  height: 2px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 72%, transparent), transparent);
  opacity: .35;
  animation: vl-cat-chart-wave-grid-rhythm-line calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
@keyframes vl-cat-chart-wave-grid-rise {
  0%,100% { transform: scaleY(.5); opacity: .35; }
  50% { transform: scaleY(1); opacity: 1; }
}
@keyframes vl-cat-chart-wave-grid-rhythm-line {
  0%,100% { transform: translateY(0); opacity: .2; }
  50% { transform: translateY(8px); opacity: 1; }
}`
  },
];
