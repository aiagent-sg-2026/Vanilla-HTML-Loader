export const svgPack11LoadersC = [
  {
    id: 'svg-wave-node',
    name: 'Wave Node SVG',
    category: 'SVG',
    tech: 'SVG',
    description: 'A compact inline SVG with concentric arcs and pulsing nodes.',
    markup: `<div class="vl-cat-svg-wave-node" role="img" aria-label="Wave node SVG">
  <svg viewBox="0 0 190 108" width="190" height="108" aria-hidden="true" focusable="false">
    <g fill="none" stroke-linecap="round">
      <circle class="c1" cx="95" cy="54" r="28"></circle>
      <path class="p1" d="M24 54h142"></path>
      <circle class="c2" cx="95" cy="54" r="46"></circle>
      <circle class="dot" cx="95" cy="14"></circle>
      <circle class="dot" cx="95" cy="94"></circle>
    </g>
  </svg>
</div>`,
    css: `.vl-cat-svg-wave-node {
  width: 190px;
  height: 108px;
  margin: 0 auto;
}
.vl-cat-svg-wave-node svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}
.vl-cat-svg-wave-node .c1 {
  stroke: color-mix(in srgb, var(--loader-accent) 72%, transparent);
  stroke-width: 6;
  opacity: .55;
  animation: vl-cat-svg-wave-node-ring calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-cat-svg-wave-node .p1 {
  stroke: color-mix(in srgb, var(--loader-accent) 46%, #bad5ef);
  stroke-width: 7;
  opacity: .33;
  animation: vl-cat-svg-wave-node-line calc(var(--loader-speed) * 1.08) linear infinite;
}
.vl-cat-svg-wave-node .c2 {
  stroke: color-mix(in srgb, var(--loader-accent) 30%, #c1d8e8);
  stroke-width: 1.6;
  stroke-dasharray: 2 8;
  animation: vl-cat-svg-wave-node-ring calc(var(--loader-speed) * 1.45) linear infinite reverse;
}
.vl-cat-svg-wave-node .dot {
  fill: var(--loader-accent);
  animation: vl-cat-svg-wave-node-dot calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
.vl-cat-svg-wave-node .dot:nth-child(5) { animation-delay: -0.45s; }
@keyframes vl-cat-svg-wave-node-ring {
  0% { opacity: .35; transform: scale(.9); }
  50% { opacity: 1; transform: scale(1.04); }
  100% { opacity: .35; transform: scale(.9); }
}
@keyframes vl-cat-svg-wave-node-line {
  0% { stroke-dasharray: 4 24; opacity: .18; }
  50% { stroke-dasharray: 26 4; opacity: .8; }
  100% { stroke-dasharray: 4 24; opacity: .18; }
}
@keyframes vl-cat-svg-wave-node-dot {
  0%,100% { transform: translateY(0); opacity: .3; }
  50% { transform: translateY(15px); opacity: 1; }
}`
  },
];
