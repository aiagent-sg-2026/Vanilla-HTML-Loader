export const svgPack4LoadersB = [
  {
    id: 'svg-hourglass-flow',
    name: 'SVG Hourglass Flow',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A compact hourglass loader with SVG particles flowing from the upper chamber to the lower chamber.',
    markup: `<svg class="vl-svg-hourglass-flow" viewBox="0 0 80 88" aria-hidden="true" focusable="false">
  <path class="vl-svg-hourglass-frame" d="M20 10H60M20 78H60M24 12C24 30 34 36 40 44C46 36 56 30 56 12M24 76C24 58 34 52 40 44C46 52 56 58 56 76" />
  <circle cx="40" cy="27" r="4" />
  <circle cx="40" cy="43" r="3" />
  <circle cx="40" cy="61" r="5" />
</svg>`,
    css: `.vl-svg-hourglass-flow {
  width: 58px;
  height: 70px;
  color: var(--loader-accent);
  overflow: visible;
}
.vl-svg-hourglass-frame {
  fill: none;
  stroke: currentColor;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: .75;
}
.vl-svg-hourglass-flow circle {
  fill: currentColor;
  transform-box: fill-box;
  transform-origin: center;
  animation: vl-svg-hourglass-drop calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
.vl-svg-hourglass-flow circle:nth-of-type(2) { animation-delay: calc(var(--loader-speed) * .32); }
.vl-svg-hourglass-flow circle:nth-of-type(3) { animation-delay: calc(var(--loader-speed) * .64); }
@keyframes vl-svg-hourglass-drop {
  0% { transform: translateY(-8px) scale(.55); opacity: 0; }
  35% { opacity: 1; }
  75% { opacity: 1; }
  100% { transform: translateY(18px) scale(1); opacity: 0; }
}`
  },
  {
    id: 'svg-hex-mesh',
    name: 'SVG Hex Mesh',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A technical honeycomb mesh that lights up cell by cell using staggered SVG opacity pulses.',
    markup: `<svg class="vl-svg-hex-mesh" viewBox="0 0 104 76" aria-hidden="true" focusable="false">
  <polygon points="20,8 30,14 30,26 20,32 10,26 10,14" />
  <polygon points="44,8 54,14 54,26 44,32 34,26 34,14" />
  <polygon points="68,8 78,14 78,26 68,32 58,26 58,14" />
  <polygon points="32,30 42,36 42,48 32,54 22,48 22,36" />
  <polygon points="56,30 66,36 66,48 56,54 46,48 46,36" />
  <polygon points="80,30 90,36 90,48 80,54 70,48 70,36" />
  <polygon points="44,52 54,58 54,70 44,76 34,70 34,58" />
  <polygon points="68,52 78,58 78,70 68,76 58,70 58,58" />
</svg>`,
    css: `.vl-svg-hex-mesh {
  width: 92px;
  height: 68px;
  color: var(--loader-accent);
  overflow: visible;
}
.vl-svg-hex-mesh polygon {
  fill: color-mix(in srgb, currentColor 18%, transparent);
  stroke: currentColor;
  stroke-width: 2;
  transform-box: fill-box;
  transform-origin: center;
  animation: vl-svg-hex-light calc(var(--loader-speed) * 1.6) ease-in-out infinite;
}
.vl-svg-hex-mesh polygon:nth-child(2) { animation-delay: calc(var(--loader-speed) * .12); }
.vl-svg-hex-mesh polygon:nth-child(3) { animation-delay: calc(var(--loader-speed) * .24); }
.vl-svg-hex-mesh polygon:nth-child(4) { animation-delay: calc(var(--loader-speed) * .36); }
.vl-svg-hex-mesh polygon:nth-child(5) { animation-delay: calc(var(--loader-speed) * .48); }
.vl-svg-hex-mesh polygon:nth-child(6) { animation-delay: calc(var(--loader-speed) * .60); }
.vl-svg-hex-mesh polygon:nth-child(7) { animation-delay: calc(var(--loader-speed) * .72); }
.vl-svg-hex-mesh polygon:nth-child(8) { animation-delay: calc(var(--loader-speed) * .84); }
@keyframes vl-svg-hex-light {
  0%, 100% { transform: scale(.82); opacity: .22; }
  50% { transform: scale(1); opacity: 1; fill: currentColor; }
}`
  },
  {
    id: 'svg-orbit-trail',
    name: 'SVG Orbit Trail',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A glowing SVG particle circles an elliptical trail while the orbit itself draws forward.',
    markup: `<svg class="vl-svg-orbit-trail" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
  <ellipse class="vl-svg-orbit-trail-ghost" cx="48" cy="36" rx="37" ry="19" />
  <ellipse class="vl-svg-orbit-trail-live" cx="48" cy="36" rx="37" ry="19" />
  <g class="vl-svg-orbit-trail-dot"><circle cx="85" cy="36" r="5" /></g>
</svg>`,
    css: `.vl-svg-orbit-trail {
  width: 86px;
  height: 64px;
  color: var(--loader-accent);
  overflow: visible;
}
.vl-svg-orbit-trail ellipse {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
}
.vl-svg-orbit-trail-ghost { stroke-width: 3; opacity: .13; }
.vl-svg-orbit-trail-live {
  stroke-width: 4;
  stroke-dasharray: 38 140;
  animation: vl-svg-orbit-trail-draw calc(var(--loader-speed) * 1.55) linear infinite;
}
.vl-svg-orbit-trail-dot {
  transform-origin: 48px 36px;
  animation: vl-svg-orbit-trail-spin calc(var(--loader-speed) * 1.55) linear infinite;
}
.vl-svg-orbit-trail-dot circle {
  fill: currentColor;
  filter: drop-shadow(0 0 5px currentColor);
}
@keyframes vl-svg-orbit-trail-draw { to { stroke-dashoffset: -178; } }
@keyframes vl-svg-orbit-trail-spin { to { transform: rotate(360deg); } }`
  },
  {
    id: 'svg-pulse-flower',
    name: 'SVG Pulse Flower',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Six SVG petals breathe around a pulsing center for a soft organic loading state.',
    markup: `<svg class="vl-svg-pulse-flower" viewBox="0 0 80 80" aria-hidden="true" focusable="false">
  <ellipse cx="40" cy="17" rx="8" ry="15" />
  <ellipse cx="60" cy="28" rx="8" ry="15" transform="rotate(60 60 28)" />
  <ellipse cx="60" cy="52" rx="8" ry="15" transform="rotate(120 60 52)" />
  <ellipse cx="40" cy="63" rx="8" ry="15" />
  <ellipse cx="20" cy="52" rx="8" ry="15" transform="rotate(60 20 52)" />
  <ellipse cx="20" cy="28" rx="8" ry="15" transform="rotate(120 20 28)" />
  <circle cx="40" cy="40" r="8" />
</svg>`,
    css: `.vl-svg-pulse-flower {
  width: 68px;
  height: 68px;
  color: var(--loader-accent);
  overflow: visible;
}
.vl-svg-pulse-flower ellipse,
.vl-svg-pulse-flower circle {
  fill: currentColor;
  transform-box: fill-box;
  transform-origin: center;
  animation: vl-svg-flower-pulse calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
.vl-svg-pulse-flower ellipse:nth-child(2) { animation-delay: calc(var(--loader-speed) * .12); }
.vl-svg-pulse-flower ellipse:nth-child(3) { animation-delay: calc(var(--loader-speed) * .24); }
.vl-svg-pulse-flower ellipse:nth-child(4) { animation-delay: calc(var(--loader-speed) * .36); }
.vl-svg-pulse-flower ellipse:nth-child(5) { animation-delay: calc(var(--loader-speed) * .48); }
.vl-svg-pulse-flower ellipse:nth-child(6) { animation-delay: calc(var(--loader-speed) * .60); }
.vl-svg-pulse-flower circle { animation-delay: calc(var(--loader-speed) * .30); }
@keyframes vl-svg-flower-pulse {
  0%, 100% { transform: scale(.65); opacity: .25; }
  50% { transform: scale(1); opacity: 1; }
}`
  },
  {
    id: 'svg-neon-scribble',
    name: 'SVG Neon Scribble',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A loose hand-drawn SVG stroke writes itself repeatedly with a subtle neon glow.',
    markup: `<svg class="vl-svg-neon-scribble" viewBox="0 0 110 68" aria-hidden="true" focusable="false">
  <path class="vl-svg-neon-scribble-glow" d="M8 42C20 8 36 58 49 25S71 64 85 27 98 48 102 19" />
  <path class="vl-svg-neon-scribble-line" d="M8 42C20 8 36 58 49 25S71 64 85 27 98 48 102 19" />
</svg>`,
    css: `.vl-svg-neon-scribble {
  width: 96px;
  height: 60px;
  color: var(--loader-accent);
  overflow: visible;
}
.vl-svg-neon-scribble path {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 190;
  stroke-dashoffset: 190;
  animation: vl-svg-scribble-draw calc(var(--loader-speed) * 1.8) ease-in-out infinite;
}
.vl-svg-neon-scribble-glow {
  stroke-width: 9;
  opacity: .16;
  filter: blur(2px);
}
.vl-svg-neon-scribble-line {
  stroke-width: 4;
}
@keyframes vl-svg-scribble-draw {
  0% { stroke-dashoffset: 190; opacity: .2; }
  48%, 62% { stroke-dashoffset: 0; opacity: 1; }
  100% { stroke-dashoffset: -190; opacity: .15; }
}`
  }
];
