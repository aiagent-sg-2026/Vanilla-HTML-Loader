export const svgPack3LoadersA = [
  {
    id: 'svg-orbit-nodes',
    name: 'SVG Orbit Nodes',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Four nodes orbit a central core on offset SVG paths for network, sync, and data-processing states.',
    markup: `<svg class="vl-svg-orbit-nodes" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
  <circle class="track outer" cx="32" cy="32" r="23"></circle>
  <circle class="track inner" cx="32" cy="32" r="14"></circle>
  <circle class="core" cx="32" cy="32" r="5"></circle>
  <g class="nodes">
    <circle cx="32" cy="9" r="3.5"></circle>
    <circle cx="55" cy="32" r="3.5"></circle>
    <circle cx="32" cy="55" r="3.5"></circle>
    <circle cx="9" cy="32" r="3.5"></circle>
  </g>
</svg>`,
    css: `.vl-svg-orbit-nodes {
  width: 70px;
  height: 70px;
  color: var(--loader-accent);
  overflow: visible;
}
.vl-svg-orbit-nodes .track {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.5;
  opacity: .2;
  stroke-dasharray: 4 5;
}
.vl-svg-orbit-nodes .inner { opacity: .12; }
.vl-svg-orbit-nodes .core {
  fill: currentColor;
  transform-origin: 32px 32px;
  animation: vl-svg-orbit-core calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-svg-orbit-nodes .nodes {
  fill: currentColor;
  transform-origin: 32px 32px;
  animation: vl-svg-orbit-nodes-spin calc(var(--loader-speed) * 2.4) linear infinite;
}
.vl-svg-orbit-nodes .nodes circle:nth-child(2),
.vl-svg-orbit-nodes .nodes circle:nth-child(4) { opacity: .55; }
@keyframes vl-svg-orbit-nodes-spin { to { transform: rotate(360deg); } }
@keyframes vl-svg-orbit-core { 50% { transform: scale(1.45); opacity: .45; } }`
  },
  {
    id: 'svg-dna-path',
    name: 'SVG DNA Path',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Twin animated paths cross like a DNA strand with moving connectors for analysis and matching workflows.',
    markup: `<svg class="vl-svg-dna-path" viewBox="0 0 80 64" aria-hidden="true" focusable="false">
  <path class="strand one" d="M8 12 C30 12 50 52 72 52"></path>
  <path class="strand two" d="M8 52 C30 52 50 12 72 12"></path>
  <g class="bridges">
    <path d="M16 19 L16 45"></path>
    <path d="M29 27 L29 37"></path>
    <path d="M51 27 L51 37"></path>
    <path d="M64 19 L64 45"></path>
  </g>
</svg>`,
    css: `.vl-svg-dna-path {
  width: 84px;
  height: 68px;
  color: var(--loader-accent);
}
.vl-svg-dna-path .strand,
.vl-svg-dna-path .bridges path {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
}
.vl-svg-dna-path .strand {
  stroke-width: 4;
  stroke-dasharray: 18 12;
  animation: vl-svg-dna-flow calc(var(--loader-speed) * 1.6) linear infinite;
}
.vl-svg-dna-path .two { opacity: .48; animation-direction: reverse; }
.vl-svg-dna-path .bridges path {
  stroke-width: 2;
  opacity: .22;
  animation: vl-svg-dna-bridge calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-svg-dna-path .bridges path:nth-child(2) { animation-delay: .13s; }
.vl-svg-dna-path .bridges path:nth-child(3) { animation-delay: .26s; }
.vl-svg-dna-path .bridges path:nth-child(4) { animation-delay: .39s; }
@keyframes vl-svg-dna-flow { to { stroke-dashoffset: -60; } }
@keyframes vl-svg-dna-bridge { 50% { opacity: .85; stroke-width: 3; } }`
  },
  {
    id: 'svg-comet-trail',
    name: 'SVG Comet Trail',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A bright comet travels around an elliptical dashed trail for fast processing and transfer states.',
    markup: `<svg class="vl-svg-comet-trail" viewBox="0 0 72 64" aria-hidden="true" focusable="false">
  <ellipse class="trail" cx="36" cy="32" rx="26" ry="18"></ellipse>
  <path class="arc" d="M10 32 A26 18 0 0 1 62 32"></path>
  <circle class="comet" cx="62" cy="32" r="4"></circle>
  <path class="tail" d="M55 32 C49 25 44 24 37 25"></path>
</svg>`,
    css: `.vl-svg-comet-trail {
  width: 78px;
  height: 70px;
  color: var(--loader-accent);
  overflow: visible;
}
.vl-svg-comet-trail .trail,
.vl-svg-comet-trail .arc,
.vl-svg-comet-trail .tail {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
}
.vl-svg-comet-trail .trail { stroke-width: 1.5; opacity: .16; stroke-dasharray: 3 5; }
.vl-svg-comet-trail .arc { stroke-width: 3; stroke-dasharray: 22 72; animation: vl-svg-comet-arc calc(var(--loader-speed) * 1.7) linear infinite; }
.vl-svg-comet-trail .comet,
.vl-svg-comet-trail .tail {
  transform-origin: 36px 32px;
  animation: vl-svg-comet-orbit calc(var(--loader-speed) * 1.7) linear infinite;
}
.vl-svg-comet-trail .comet { fill: currentColor; }
.vl-svg-comet-trail .tail { stroke-width: 3; opacity: .42; }
@keyframes vl-svg-comet-arc { to { stroke-dashoffset: -94; } }
@keyframes vl-svg-comet-orbit { to { transform: rotate(360deg); } }`
  },
  {
    id: 'svg-polygon-morph',
    name: 'SVG Polygon Morph',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Layered polygon outlines rotate, scale, and pulse to suggest continuous shape transformation.',
    markup: `<svg class="vl-svg-polygon-morph" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
  <polygon class="poly back" points="32,7 54,20 54,44 32,57 10,44 10,20"></polygon>
  <polygon class="poly front" points="32,13 49,22 49,42 32,51 15,42 15,22"></polygon>
  <circle class="dot" cx="32" cy="32" r="4"></circle>
</svg>`,
    css: `.vl-svg-polygon-morph {
  width: 70px;
  height: 70px;
  color: var(--loader-accent);
  overflow: visible;
}
.vl-svg-polygon-morph .poly {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  transform-origin: 32px 32px;
}
.vl-svg-polygon-morph .back {
  stroke-width: 2;
  opacity: .25;
  stroke-dasharray: 7 5;
  animation: vl-svg-poly-back calc(var(--loader-speed) * 2.1) linear infinite;
}
.vl-svg-polygon-morph .front {
  stroke-width: 3;
  animation: vl-svg-poly-front calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
.vl-svg-polygon-morph .dot {
  fill: currentColor;
  transform-origin: 32px 32px;
  animation: vl-svg-poly-dot calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
@keyframes vl-svg-poly-back { to { transform: rotate(360deg); } }
@keyframes vl-svg-poly-front { 50% { transform: rotate(-45deg) scale(.72); opacity: .4; } }
@keyframes vl-svg-poly-dot { 50% { transform: scale(1.8); opacity: .35; } }`
  },
  {
    id: 'svg-waveform-bars',
    name: 'SVG Waveform Bars',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A smooth SVG equalizer with individually timed bars for streaming, voice, and live-data states.',
    markup: `<svg class="vl-svg-waveform-bars" viewBox="0 0 84 56" aria-hidden="true" focusable="false">
  <g class="bars">
    <rect x="8" y="19" width="6" height="18" rx="3"></rect>
    <rect x="20" y="12" width="6" height="32" rx="3"></rect>
    <rect x="32" y="6" width="6" height="44" rx="3"></rect>
    <rect x="44" y="14" width="6" height="28" rx="3"></rect>
    <rect x="56" y="9" width="6" height="38" rx="3"></rect>
    <rect x="68" y="18" width="6" height="20" rx="3"></rect>
  </g>
</svg>`,
    css: `.vl-svg-waveform-bars {
  width: 88px;
  height: 62px;
  color: var(--loader-accent);
}
.vl-svg-waveform-bars .bars rect {
  fill: currentColor;
  transform-box: fill-box;
  transform-origin: center;
  animation: vl-svg-wave-bar calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-svg-waveform-bars .bars rect:nth-child(2) { animation-delay: .09s; opacity: .78; }
.vl-svg-waveform-bars .bars rect:nth-child(3) { animation-delay: .18s; }
.vl-svg-waveform-bars .bars rect:nth-child(4) { animation-delay: .27s; opacity: .66; }
.vl-svg-waveform-bars .bars rect:nth-child(5) { animation-delay: .36s; }
.vl-svg-waveform-bars .bars rect:nth-child(6) { animation-delay: .45s; opacity: .74; }
@keyframes vl-svg-wave-bar {
  0%, 100% { transform: scaleY(.38); }
  50% { transform: scaleY(1); }
}`
  }
];
