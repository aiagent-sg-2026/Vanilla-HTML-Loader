export const shapesPack1LoadersA = [
  {
    id: 'shape-morph-polygon',
    name: 'Morph Polygon Loader',
    category: 'Shapes',
    tech: 'CSS',
    description: 'A rotating geometric tile smoothly changes between triangle, diamond, hexagon, and rounded-square silhouettes.',
    markup: `<div class="vl-shape-morph-polygon" aria-hidden="true"></div>`,
    css: `.vl-shape-morph-polygon {
  width: 66px;
  height: 66px;
  background: linear-gradient(135deg, var(--loader-accent), color-mix(in srgb, var(--loader-accent) 55%, white));
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  animation: vl-shape-morph-polygon-cycle calc(var(--loader-speed) * 2.4) ease-in-out infinite;
}
@keyframes vl-shape-morph-polygon-cycle {
  0%, 100% {
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    border-radius: 4px;
    transform: rotate(0deg) scale(.82);
  }
  25% {
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    border-radius: 10px;
    transform: rotate(90deg) scale(1);
  }
  50% {
    clip-path: polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0 50%);
    border-radius: 4px;
    transform: rotate(180deg) scale(.88);
  }
  75% {
    clip-path: polygon(12% 12%, 88% 12%, 88% 88%, 12% 88%);
    border-radius: 18px;
    transform: rotate(270deg) scale(1);
  }
}`
  },
  {
    id: 'shape-folding-diamond',
    name: 'Folding Diamond Loader',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Four diamond tiles fold toward the centre in sequence, creating a compact paper-folding motion.',
    markup: `<div class="vl-shape-folding-diamond" aria-hidden="true"><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-shape-folding-diamond {
  position: relative;
  width: 70px;
  height: 70px;
  animation: vl-shape-folding-diamond-turn calc(var(--loader-speed) * 2.2) linear infinite;
}
.vl-shape-folding-diamond span {
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 5px;
  background: var(--loader-accent);
  transform: rotate(45deg) scale(.62);
  animation: vl-shape-folding-diamond-fold calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
.vl-shape-folding-diamond span:nth-child(1) { left: 22px; top: 1px; animation-delay: 0s; }
.vl-shape-folding-diamond span:nth-child(2) { right: 1px; top: 22px; animation-delay: .15s; }
.vl-shape-folding-diamond span:nth-child(3) { left: 22px; bottom: 1px; animation-delay: .3s; }
.vl-shape-folding-diamond span:nth-child(4) { left: 1px; top: 22px; animation-delay: .45s; }
@keyframes vl-shape-folding-diamond-turn { to { transform: rotate(360deg); } }
@keyframes vl-shape-folding-diamond-fold {
  0%, 100% { opacity: .25; transform: rotate(45deg) scale(.58); }
  48% { opacity: 1; transform: rotate(135deg) scale(1); }
}`
  },
  {
    id: 'shape-hex-orbit',
    name: 'Hex Orbit Loader',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Six small hexagons orbit a larger centre hexagon while alternating depth and opacity.',
    markup: `<div class="vl-shape-hex-orbit" aria-hidden="true"><i></i><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-shape-hex-orbit {
  position: relative;
  width: 76px;
  height: 76px;
  animation: vl-shape-hex-orbit-spin calc(var(--loader-speed) * 2.6) linear infinite;
}
.vl-shape-hex-orbit i,
.vl-shape-hex-orbit span {
  position: absolute;
  background: var(--loader-accent);
  clip-path: polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0 50%);
}
.vl-shape-hex-orbit i {
  left: 25px;
  top: 25px;
  width: 26px;
  height: 26px;
  background: color-mix(in srgb, var(--loader-accent) 68%, white);
  animation: vl-shape-hex-orbit-core calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
.vl-shape-hex-orbit span {
  width: 14px;
  height: 14px;
  animation: vl-shape-hex-orbit-node calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
.vl-shape-hex-orbit span:nth-of-type(1) { left: 31px; top: 0; animation-delay: 0s; }
.vl-shape-hex-orbit span:nth-of-type(2) { right: 4px; top: 15px; animation-delay: .12s; }
.vl-shape-hex-orbit span:nth-of-type(3) { right: 4px; bottom: 15px; animation-delay: .24s; }
.vl-shape-hex-orbit span:nth-of-type(4) { left: 31px; bottom: 0; animation-delay: .36s; }
.vl-shape-hex-orbit span:nth-of-type(5) { left: 4px; bottom: 15px; animation-delay: .48s; }
.vl-shape-hex-orbit span:nth-of-type(6) { left: 4px; top: 15px; animation-delay: .6s; }
@keyframes vl-shape-hex-orbit-spin { to { transform: rotate(360deg); } }
@keyframes vl-shape-hex-orbit-core {
  0%, 100% { transform: scale(.74) rotate(0deg); opacity: .55; }
  50% { transform: scale(1.08) rotate(60deg); opacity: 1; }
}
@keyframes vl-shape-hex-orbit-node {
  0%, 100% { transform: scale(.55); opacity: .25; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'shape-triangle-relay',
    name: 'Triangle Relay Loader',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Three triangular markers pass energy from left to right with a clear stepped relay rhythm.',
    markup: `<div class="vl-shape-triangle-relay" aria-hidden="true"><span></span><span></span><span></span></div>`,
    css: `.vl-shape-triangle-relay {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  width: 96px;
  height: 58px;
}
.vl-shape-triangle-relay span {
  width: 25px;
  height: 29px;
  background: var(--loader-accent);
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  animation: vl-shape-triangle-relay-step calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-shape-triangle-relay span:nth-child(2) { animation-delay: .16s; }
.vl-shape-triangle-relay span:nth-child(3) { animation-delay: .32s; }
@keyframes vl-shape-triangle-relay-step {
  0%, 70%, 100% { transform: translateY(0) scale(.72); opacity: .25; }
  32% { transform: translateY(-9px) scale(1.06); opacity: 1; }
}`
  },
  {
    id: 'shape-square-pulse-grid',
    name: 'Square Pulse Grid',
    category: 'Shapes',
    tech: 'CSS',
    description: 'A three-by-three square grid pulses diagonally for structured dashboard and data-loading states.',
    markup: `<div class="vl-shape-square-pulse-grid" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-shape-square-pulse-grid {
  display: grid;
  grid-template-columns: repeat(3, 16px);
  gap: 6px;
  width: 60px;
  height: 60px;
}
.vl-shape-square-pulse-grid span {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: var(--loader-accent);
  animation: vl-shape-square-pulse-grid-wave calc(var(--loader-speed) * 1.4) ease-in-out infinite;
}
.vl-shape-square-pulse-grid span:nth-child(1) { animation-delay: 0s; }
.vl-shape-square-pulse-grid span:nth-child(2),
.vl-shape-square-pulse-grid span:nth-child(4) { animation-delay: .1s; }
.vl-shape-square-pulse-grid span:nth-child(3),
.vl-shape-square-pulse-grid span:nth-child(5),
.vl-shape-square-pulse-grid span:nth-child(7) { animation-delay: .2s; }
.vl-shape-square-pulse-grid span:nth-child(6),
.vl-shape-square-pulse-grid span:nth-child(8) { animation-delay: .3s; }
.vl-shape-square-pulse-grid span:nth-child(9) { animation-delay: .4s; }
@keyframes vl-shape-square-pulse-grid-wave {
  0%, 68%, 100% { transform: scale(.52) rotate(0deg); opacity: .22; }
  34% { transform: scale(1) rotate(90deg); opacity: 1; }
}`
  }
];
