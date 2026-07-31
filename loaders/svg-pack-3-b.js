export const svgPack3LoadersB = [
  {
    id: 'svg-concentric-pulse',
    name: 'SVG Concentric Pulse',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Expanding concentric circles create a calm pulse for discovery, scanning, and waiting states.',
    markup: `<svg class="vl-svg-concentric-pulse" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
  <circle class="pulse p1" cx="32" cy="32" r="8"></circle>
  <circle class="pulse p2" cx="32" cy="32" r="8"></circle>
  <circle class="pulse p3" cx="32" cy="32" r="8"></circle>
  <circle class="core" cx="32" cy="32" r="4"></circle>
</svg>`,
    css: `.vl-svg-concentric-pulse {
  width: 72px;
  height: 72px;
  color: var(--loader-accent);
  overflow: visible;
}
.vl-svg-concentric-pulse .pulse {
  fill: none;
  stroke: currentColor;
  stroke-width: 2.5;
  transform-origin: 32px 32px;
  opacity: 0;
  animation: vl-svg-concentric-expand calc(var(--loader-speed) * 1.9) ease-out infinite;
}
.vl-svg-concentric-pulse .p2 { animation-delay: calc(var(--loader-speed) * .42); }
.vl-svg-concentric-pulse .p3 { animation-delay: calc(var(--loader-speed) * .84); }
.vl-svg-concentric-pulse .core {
  fill: currentColor;
  transform-origin: 32px 32px;
  animation: vl-svg-concentric-core calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
@keyframes vl-svg-concentric-expand {
  0% { transform: scale(.45); opacity: .8; }
  100% { transform: scale(3.2); opacity: 0; }
}
@keyframes vl-svg-concentric-core { 50% { transform: scale(1.55); opacity: .42; } }`
  },
  {
    id: 'svg-segment-ring',
    name: 'SVG Segment Ring',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Independent ring segments rotate with staggered opacity for a crisp technical progress indicator.',
    markup: `<svg class="vl-svg-segment-ring" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
  <g class="segments">
    <path d="M32 8 A24 24 0 0 1 49 15"></path>
    <path d="M54 23 A24 24 0 0 1 54 41"></path>
    <path d="M49 49 A24 24 0 0 1 32 56"></path>
    <path d="M23 54 A24 24 0 0 1 10 41"></path>
    <path d="M10 23 A24 24 0 0 1 23 10"></path>
  </g>
  <circle class="center" cx="32" cy="32" r="5"></circle>
</svg>`,
    css: `.vl-svg-segment-ring {
  width: 70px;
  height: 70px;
  color: var(--loader-accent);
  overflow: visible;
}
.vl-svg-segment-ring .segments {
  transform-origin: 32px 32px;
  animation: vl-svg-segment-spin calc(var(--loader-speed) * 1.65) linear infinite;
}
.vl-svg-segment-ring .segments path {
  fill: none;
  stroke: currentColor;
  stroke-width: 5;
  stroke-linecap: round;
}
.vl-svg-segment-ring .segments path:nth-child(2) { opacity: .78; }
.vl-svg-segment-ring .segments path:nth-child(3) { opacity: .58; }
.vl-svg-segment-ring .segments path:nth-child(4) { opacity: .38; }
.vl-svg-segment-ring .segments path:nth-child(5) { opacity: .2; }
.vl-svg-segment-ring .center {
  fill: currentColor;
  opacity: .22;
  transform-origin: 32px 32px;
  animation: vl-svg-segment-center calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
@keyframes vl-svg-segment-spin { to { transform: rotate(360deg); } }
@keyframes vl-svg-segment-center { 50% { transform: scale(1.65); opacity: .6; } }`
  },
  {
    id: 'svg-bezier-flow',
    name: 'SVG Bezier Flow',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A moving dash follows layered Bezier curves for routing, automation, and pipeline processing states.',
    markup: `<svg class="vl-svg-bezier-flow" viewBox="0 0 88 60" aria-hidden="true" focusable="false">
  <path class="curve back" d="M8 44 C26 4 58 56 80 16"></path>
  <path class="curve front" d="M8 44 C26 4 58 56 80 16"></path>
  <circle class="node n1" cx="8" cy="44" r="3"></circle>
  <circle class="node n2" cx="80" cy="16" r="3"></circle>
</svg>`,
    css: `.vl-svg-bezier-flow {
  width: 92px;
  height: 64px;
  color: var(--loader-accent);
  overflow: visible;
}
.vl-svg-bezier-flow .curve {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
}
.vl-svg-bezier-flow .back { stroke-width: 2; opacity: .18; }
.vl-svg-bezier-flow .front {
  stroke-width: 4;
  stroke-dasharray: 14 58;
  animation: vl-svg-bezier-dash calc(var(--loader-speed) * 1.55) linear infinite;
}
.vl-svg-bezier-flow .node { fill: currentColor; }
.vl-svg-bezier-flow .n1,
.vl-svg-bezier-flow .n2 {
  transform-box: fill-box;
  transform-origin: center;
  animation: vl-svg-bezier-node calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-svg-bezier-flow .n2 { animation-delay: .35s; opacity: .55; }
@keyframes vl-svg-bezier-dash { to { stroke-dashoffset: -72; } }
@keyframes vl-svg-bezier-node { 50% { transform: scale(1.8); opacity: .3; } }`
  },
  {
    id: 'svg-grid-scan',
    name: 'SVG Grid Scan',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A scanning line passes through an SVG data grid while cells pulse in sequence.',
    markup: `<svg class="vl-svg-grid-scan" viewBox="0 0 72 64" aria-hidden="true" focusable="false">
  <g class="cells">
    <rect x="10" y="10" width="12" height="12" rx="2"></rect>
    <rect x="30" y="10" width="12" height="12" rx="2"></rect>
    <rect x="50" y="10" width="12" height="12" rx="2"></rect>
    <rect x="10" y="30" width="12" height="12" rx="2"></rect>
    <rect x="30" y="30" width="12" height="12" rx="2"></rect>
    <rect x="50" y="30" width="12" height="12" rx="2"></rect>
    <rect x="10" y="50" width="12" height="8" rx="2"></rect>
    <rect x="30" y="50" width="12" height="8" rx="2"></rect>
    <rect x="50" y="50" width="12" height="8" rx="2"></rect>
  </g>
  <path class="scan" d="M7 12 H65"></path>
</svg>`,
    css: `.vl-svg-grid-scan {
  width: 78px;
  height: 70px;
  color: var(--loader-accent);
}
.vl-svg-grid-scan .cells rect {
  fill: currentColor;
  opacity: .14;
  animation: vl-svg-grid-cell calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
.vl-svg-grid-scan .cells rect:nth-child(2),
.vl-svg-grid-scan .cells rect:nth-child(5),
.vl-svg-grid-scan .cells rect:nth-child(8) { animation-delay: .16s; }
.vl-svg-grid-scan .cells rect:nth-child(3),
.vl-svg-grid-scan .cells rect:nth-child(6),
.vl-svg-grid-scan .cells rect:nth-child(9) { animation-delay: .32s; }
.vl-svg-grid-scan .scan {
  fill: none;
  stroke: currentColor;
  stroke-width: 3;
  stroke-linecap: round;
  transform-origin: 36px 12px;
  animation: vl-svg-grid-scan-line calc(var(--loader-speed) * 1.7) ease-in-out infinite;
}
@keyframes vl-svg-grid-cell { 45%, 60% { opacity: .72; } }
@keyframes vl-svg-grid-scan-line {
  0%, 100% { transform: translateY(0); opacity: .2; }
  50% { transform: translateY(43px); opacity: 1; }
}`
  },
  {
    id: 'svg-spark-burst',
    name: 'SVG Spark Burst',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Radiating SVG strokes burst from a pulsing center for short initialization and completion transitions.',
    markup: `<svg class="vl-svg-spark-burst" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
  <g class="rays">
    <path d="M32 5 V16"></path>
    <path d="M32 48 V59"></path>
    <path d="M5 32 H16"></path>
    <path d="M48 32 H59"></path>
    <path d="M13 13 L21 21"></path>
    <path d="M43 43 L51 51"></path>
    <path d="M51 13 L43 21"></path>
    <path d="M21 43 L13 51"></path>
  </g>
  <circle class="halo" cx="32" cy="32" r="12"></circle>
  <circle class="core" cx="32" cy="32" r="5"></circle>
</svg>`,
    css: `.vl-svg-spark-burst {
  width: 70px;
  height: 70px;
  color: var(--loader-accent);
  overflow: visible;
}
.vl-svg-spark-burst .rays {
  transform-origin: 32px 32px;
  animation: vl-svg-spark-rotate calc(var(--loader-speed) * 2.2) linear infinite;
}
.vl-svg-spark-burst .rays path {
  fill: none;
  stroke: currentColor;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 5 12;
  animation: vl-svg-spark-ray calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-svg-spark-burst .rays path:nth-child(even) { animation-delay: .18s; opacity: .55; }
.vl-svg-spark-burst .halo {
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  opacity: .2;
  transform-origin: 32px 32px;
  animation: vl-svg-spark-halo calc(var(--loader-speed) * 1.25) ease-out infinite;
}
.vl-svg-spark-burst .core { fill: currentColor; }
@keyframes vl-svg-spark-rotate { to { transform: rotate(360deg); } }
@keyframes vl-svg-spark-ray { 50% { stroke-dashoffset: -12; opacity: .25; } }
@keyframes vl-svg-spark-halo { 70%, 100% { transform: scale(1.75); opacity: 0; } }`
  }
];
