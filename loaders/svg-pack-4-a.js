export const svgPack4LoadersA = [
  {
    id: 'svg-lissajous-loop',
    name: 'SVG Lissajous Loop',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A smooth mathematical loop traced by layered animated SVG paths.',
    markup: `<svg class="vl-svg-lissajous-loop" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
  <path class="vl-svg-lissajous-ghost" d="M12 36C12 8 84 8 84 36S12 64 12 36 84 8 84 36 12 64 12 36Z" />
  <path class="vl-svg-lissajous-live" d="M12 36C12 8 84 8 84 36S12 64 12 36 84 8 84 36 12 64 12 36Z" />
</svg>`,
    css: `.vl-svg-lissajous-loop {
  width: 84px;
  height: 64px;
  color: var(--loader-accent);
  overflow: visible;
}
.vl-svg-lissajous-loop path {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.vl-svg-lissajous-ghost {
  stroke: currentColor;
  stroke-width: 3;
  opacity: .14;
}
.vl-svg-lissajous-live {
  stroke: currentColor;
  stroke-width: 4;
  stroke-dasharray: 36 214;
  animation: vl-svg-lissajous-trace calc(var(--loader-speed) * 2.1) linear infinite;
}
@keyframes vl-svg-lissajous-trace {
  to { stroke-dashoffset: -250; }
}`
  },
  {
    id: 'svg-ribbon-wave',
    name: 'SVG Ribbon Wave',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Two flowing SVG ribbons travel in opposite directions with a soft layered depth effect.',
    markup: `<svg class="vl-svg-ribbon-wave" viewBox="0 0 104 64" aria-hidden="true" focusable="false">
  <path class="vl-svg-ribbon-wave-back" d="M6 38C22 10 38 58 54 30S86 2 98 30" />
  <path class="vl-svg-ribbon-wave-front" d="M6 30C22 58 38 10 54 38S86 66 98 38" />
</svg>`,
    css: `.vl-svg-ribbon-wave {
  width: 92px;
  height: 58px;
  color: var(--loader-accent);
  overflow: visible;
}
.vl-svg-ribbon-wave path {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
}
.vl-svg-ribbon-wave-back {
  stroke-width: 7;
  opacity: .18;
  stroke-dasharray: 24 14;
  animation: vl-svg-ribbon-back calc(var(--loader-speed) * 1.7) linear infinite;
}
.vl-svg-ribbon-wave-front {
  stroke-width: 4;
  stroke-dasharray: 28 12;
  animation: vl-svg-ribbon-front calc(var(--loader-speed) * 1.35) linear infinite;
}
@keyframes vl-svg-ribbon-back { to { stroke-dashoffset: 76; } }
@keyframes vl-svg-ribbon-front { to { stroke-dashoffset: -80; } }`
  },
  {
    id: 'svg-particle-ring',
    name: 'SVG Particle Ring',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Eight SVG particles orbit visually through staggered scale and opacity pulses.',
    markup: `<svg class="vl-svg-particle-ring" viewBox="0 0 80 80" aria-hidden="true" focusable="false">
  <circle cx="40" cy="9" r="5" />
  <circle cx="62" cy="18" r="5" />
  <circle cx="71" cy="40" r="5" />
  <circle cx="62" cy="62" r="5" />
  <circle cx="40" cy="71" r="5" />
  <circle cx="18" cy="62" r="5" />
  <circle cx="9" cy="40" r="5" />
  <circle cx="18" cy="18" r="5" />
</svg>`,
    css: `.vl-svg-particle-ring {
  width: 68px;
  height: 68px;
  color: var(--loader-accent);
}
.vl-svg-particle-ring circle {
  fill: currentColor;
  transform-box: fill-box;
  transform-origin: center;
  animation: vl-svg-particle-pop calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-svg-particle-ring circle:nth-child(2) { animation-delay: calc(var(--loader-speed) * .15); }
.vl-svg-particle-ring circle:nth-child(3) { animation-delay: calc(var(--loader-speed) * .30); }
.vl-svg-particle-ring circle:nth-child(4) { animation-delay: calc(var(--loader-speed) * .45); }
.vl-svg-particle-ring circle:nth-child(5) { animation-delay: calc(var(--loader-speed) * .60); }
.vl-svg-particle-ring circle:nth-child(6) { animation-delay: calc(var(--loader-speed) * .75); }
.vl-svg-particle-ring circle:nth-child(7) { animation-delay: calc(var(--loader-speed) * .90); }
.vl-svg-particle-ring circle:nth-child(8) { animation-delay: calc(var(--loader-speed) * 1.05); }
@keyframes vl-svg-particle-pop {
  0%, 100% { transform: scale(.45); opacity: .22; }
  45% { transform: scale(1); opacity: 1; }
}`
  },
  {
    id: 'svg-diamond-cascade',
    name: 'SVG Diamond Cascade',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A diagonal chain of SVG diamonds rises and fades in a clean cascading sequence.',
    markup: `<svg class="vl-svg-diamond-cascade" viewBox="0 0 100 72" aria-hidden="true" focusable="false">
  <polygon points="14,36 24,26 34,36 24,46" />
  <polygon points="34,36 44,26 54,36 44,46" />
  <polygon points="54,36 64,26 74,36 64,46" />
  <polygon points="74,36 84,26 94,36 84,46" />
</svg>`,
    css: `.vl-svg-diamond-cascade {
  width: 88px;
  height: 62px;
  color: var(--loader-accent);
  overflow: visible;
}
.vl-svg-diamond-cascade polygon {
  fill: currentColor;
  transform-box: fill-box;
  transform-origin: center;
  animation: vl-svg-diamond-rise calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
.vl-svg-diamond-cascade polygon:nth-child(2) { animation-delay: calc(var(--loader-speed) * .18); }
.vl-svg-diamond-cascade polygon:nth-child(3) { animation-delay: calc(var(--loader-speed) * .36); }
.vl-svg-diamond-cascade polygon:nth-child(4) { animation-delay: calc(var(--loader-speed) * .54); }
@keyframes vl-svg-diamond-rise {
  0%, 100% { transform: translateY(9px) scale(.65) rotate(0); opacity: .22; }
  50% { transform: translateY(-9px) scale(1) rotate(90deg); opacity: 1; }
}`
  },
  {
    id: 'svg-infinity-nodes',
    name: 'SVG Infinity Nodes',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'An infinity path draws continuously while three SVG nodes pulse along the visual flow.',
    markup: `<svg class="vl-svg-infinity-nodes" viewBox="0 0 104 64" aria-hidden="true" focusable="false">
  <path d="M10 32C22 8 42 8 52 32S82 56 94 32 72 8 52 32 22 56 10 32Z" />
  <circle cx="10" cy="32" r="4" />
  <circle cx="52" cy="32" r="4" />
  <circle cx="94" cy="32" r="4" />
</svg>`,
    css: `.vl-svg-infinity-nodes {
  width: 92px;
  height: 58px;
  color: var(--loader-accent);
  overflow: visible;
}
.vl-svg-infinity-nodes path {
  fill: none;
  stroke: currentColor;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 30 150;
  animation: vl-svg-infinity-flow calc(var(--loader-speed) * 1.75) linear infinite;
}
.vl-svg-infinity-nodes circle {
  fill: currentColor;
  transform-box: fill-box;
  transform-origin: center;
  animation: vl-svg-infinity-node calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-svg-infinity-nodes circle:nth-of-type(2) { animation-delay: calc(var(--loader-speed) * .38); }
.vl-svg-infinity-nodes circle:nth-of-type(3) { animation-delay: calc(var(--loader-speed) * .76); }
@keyframes vl-svg-infinity-flow { to { stroke-dashoffset: -180; } }
@keyframes vl-svg-infinity-node {
  0%, 100% { transform: scale(.55); opacity: .3; }
  50% { transform: scale(1.35); opacity: 1; }
}`
  }
];
