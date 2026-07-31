export const svgPack2LoadersA = [
  {
    id: 'svg-morph-orbit',
    name: 'SVG Morph Orbit',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A rotating morph-like core with three orbiting nodes for AI, sync, and processing states.',
    markup: `<svg class="vl-svg-morph-orbit" viewBox="0 0 72 72" aria-hidden="true" focusable="false">
  <path class="vl-svg-morph-core" d="M36 14 54 25 50 48 27 56 16 37 24 18Z"></path>
  <circle class="vl-svg-morph-ring" cx="36" cy="36" r="25"></circle>
  <g class="vl-svg-morph-nodes">
    <circle cx="36" cy="9" r="3.5"></circle>
    <circle cx="59.5" cy="49.5" r="3.5"></circle>
    <circle cx="12.5" cy="49.5" r="3.5"></circle>
  </g>
</svg>`,
    css: `.vl-svg-morph-orbit {
  width: 72px;
  height: 72px;
  overflow: visible;
  color: var(--loader-accent);
}
.vl-svg-morph-core {
  fill: color-mix(in srgb, var(--loader-accent) 16%, transparent);
  stroke: currentColor;
  stroke-width: 2.4;
  stroke-linejoin: round;
  transform-box: fill-box;
  transform-origin: center;
  animation: vl-svg-morph-core calc(var(--loader-speed) * 1.8) ease-in-out infinite;
}
.vl-svg-morph-ring {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.5;
  stroke-dasharray: 8 8;
  opacity: .35;
  transform-origin: 36px 36px;
  animation: vl-svg-morph-ring calc(var(--loader-speed) * 2.2) linear infinite;
}
.vl-svg-morph-nodes {
  fill: currentColor;
  transform-origin: 36px 36px;
  animation: vl-svg-morph-nodes calc(var(--loader-speed) * 2.2) linear infinite reverse;
}
@keyframes vl-svg-morph-core {
  0%, 100% { transform: rotate(0deg) scale(.82); }
  45% { transform: rotate(95deg) scale(1); }
  70% { transform: rotate(180deg) scale(.9); }
}
@keyframes vl-svg-morph-ring { to { transform: rotate(360deg); } }
@keyframes vl-svg-morph-nodes { to { transform: rotate(360deg); } }`
  },
  {
    id: 'svg-polygon-pulse',
    name: 'SVG Polygon Pulse',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Layered hexagons pulse and draw in sequence for verification, calculation, and secure-processing states.',
    markup: `<svg class="vl-svg-polygon-pulse" viewBox="0 0 72 72" aria-hidden="true" focusable="false">
  <polygon class="vl-svg-polygon-outer" points="36,7 61,21 61,51 36,65 11,51 11,21"></polygon>
  <polygon class="vl-svg-polygon-middle" points="36,16 53,26 53,46 36,56 19,46 19,26"></polygon>
  <polygon class="vl-svg-polygon-inner" points="36,26 45,31 45,41 36,46 27,41 27,31"></polygon>
</svg>`,
    css: `.vl-svg-polygon-pulse {
  width: 72px;
  height: 72px;
  color: var(--loader-accent);
}
.vl-svg-polygon-pulse polygon {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  transform-box: fill-box;
  transform-origin: center;
}
.vl-svg-polygon-outer {
  stroke-width: 2;
  stroke-dasharray: 18 8;
  animation: vl-svg-polygon-draw calc(var(--loader-speed) * 1.9) linear infinite;
}
.vl-svg-polygon-middle {
  stroke-width: 2.4;
  opacity: .65;
  animation: vl-svg-polygon-pulse calc(var(--loader-speed) * 1.35) ease-in-out infinite .12s;
}
.vl-svg-polygon-inner {
  stroke-width: 3;
  fill: color-mix(in srgb, var(--loader-accent) 18%, transparent);
  animation: vl-svg-polygon-pulse calc(var(--loader-speed) * 1.35) ease-in-out infinite .28s;
}
@keyframes vl-svg-polygon-draw { to { stroke-dashoffset: -52; transform: rotate(120deg); } }
@keyframes vl-svg-polygon-pulse {
  0%, 100% { transform: scale(.72); opacity: .3; }
  50% { transform: scale(1); opacity: 1; }
}`
  },
  {
    id: 'svg-path-racer',
    name: 'SVG Path Racer',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A highlighted dash races continuously around a smooth closed path for routing and transfer feedback.',
    markup: `<svg class="vl-svg-path-racer" viewBox="0 0 72 72" aria-hidden="true" focusable="false">
  <path class="vl-svg-racer-base" d="M14 36C14 19 24 11 36 11s22 8 22 25S48 61 36 61 14 53 14 36Z"></path>
  <path class="vl-svg-racer-runner" d="M14 36C14 19 24 11 36 11s22 8 22 25S48 61 36 61 14 53 14 36Z"></path>
  <circle class="vl-svg-racer-core" cx="36" cy="36" r="5"></circle>
</svg>`,
    css: `.vl-svg-path-racer {
  width: 72px;
  height: 72px;
  color: var(--loader-accent);
}
.vl-svg-racer-base,
.vl-svg-racer-runner {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
}
.vl-svg-racer-base { stroke-width: 3; opacity: .16; }
.vl-svg-racer-runner {
  stroke-width: 4;
  stroke-dasharray: 18 126;
  animation: vl-svg-path-racer calc(var(--loader-speed) * 1.45) linear infinite;
}
.vl-svg-racer-core {
  fill: currentColor;
  transform-box: fill-box;
  transform-origin: center;
  animation: vl-svg-racer-core calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
@keyframes vl-svg-path-racer { to { stroke-dashoffset: -144; } }
@keyframes vl-svg-racer-core { 50% { transform: scale(1.65); opacity: .35; } }`
  },
  {
    id: 'svg-liquid-wave',
    name: 'SVG Liquid Wave',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Layered SVG wave paths flow horizontally for streaming, upload, and background-processing states.',
    markup: `<svg class="vl-svg-liquid-wave" viewBox="0 0 72 72" aria-hidden="true" focusable="false">
  <circle class="vl-svg-wave-shell" cx="36" cy="36" r="27"></circle>
  <g class="vl-svg-wave-flow">
    <path class="vl-svg-wave-back" d="M-72 37C-60 28-48 46-36 37S-12 28 0 37s24 9 36 0 24-9 36 0 24 9 36 0 24-9 36 0"></path>
    <path class="vl-svg-wave-front" d="M-72 43C-60 34-48 52-36 43S-12 34 0 43s24 9 36 0 24-9 36 0 24 9 36 0 24-9 36 0"></path>
  </g>
</svg>`,
    css: `.vl-svg-liquid-wave {
  width: 72px;
  height: 72px;
  overflow: hidden;
  color: var(--loader-accent);
}
.vl-svg-wave-shell {
  fill: color-mix(in srgb, var(--loader-accent) 7%, transparent);
  stroke: currentColor;
  stroke-width: 2;
  opacity: .45;
}
.vl-svg-wave-flow {
  animation: vl-svg-wave-flow calc(var(--loader-speed) * 1.65) linear infinite;
}
.vl-svg-wave-flow path {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
}
.vl-svg-wave-back { stroke-width: 3; opacity: .35; }
.vl-svg-wave-front { stroke-width: 4; opacity: .95; }
@keyframes vl-svg-wave-flow { to { transform: translateX(-72px); } }`
  },
  {
    id: 'svg-circuit-flow',
    name: 'SVG Circuit Flow',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Animated circuit traces and pulsing nodes for API, database, AI, and synchronization feedback.',
    markup: `<svg class="vl-svg-circuit-flow" viewBox="0 0 72 72" aria-hidden="true" focusable="false">
  <path class="vl-svg-circuit-line line-a" d="M8 20h17l7 7h16l7-7h9"></path>
  <path class="vl-svg-circuit-line line-b" d="M8 52h14l9-9h18l8 9h7"></path>
  <path class="vl-svg-circuit-line line-c" d="M36 7v14m0 30v14"></path>
  <circle cx="8" cy="20" r="3"></circle><circle cx="64" cy="20" r="3"></circle>
  <circle cx="8" cy="52" r="3"></circle><circle cx="64" cy="52" r="3"></circle>
  <circle class="vl-svg-circuit-core" cx="36" cy="36" r="7"></circle>
</svg>`,
    css: `.vl-svg-circuit-flow {
  width: 72px;
  height: 72px;
  color: var(--loader-accent);
}
.vl-svg-circuit-line {
  fill: none;
  stroke: currentColor;
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 8 7;
  animation: vl-svg-circuit-flow calc(var(--loader-speed) * 1.2) linear infinite;
}
.vl-svg-circuit-flow > circle:not(.vl-svg-circuit-core) {
  fill: currentColor;
  transform-box: fill-box;
  transform-origin: center;
  animation: vl-svg-circuit-node calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-svg-circuit-flow > circle:nth-of-type(2),
.vl-svg-circuit-flow > circle:nth-of-type(4) { animation-delay: .28s; }
.vl-svg-circuit-core {
  fill: color-mix(in srgb, var(--loader-accent) 18%, transparent);
  stroke: currentColor;
  stroke-width: 3;
  transform-box: fill-box;
  transform-origin: center;
  animation: vl-svg-circuit-core calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
@keyframes vl-svg-circuit-flow { to { stroke-dashoffset: -30; } }
@keyframes vl-svg-circuit-node { 50% { transform: scale(1.65); opacity: .35; } }
@keyframes vl-svg-circuit-core { 50% { transform: rotate(90deg) scale(.76); } }`
  }
];
