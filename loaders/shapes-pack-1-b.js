export const shapesPack1LoadersB = [
  {
    id: 'shape-pentagon-wave',
    name: 'Pentagon Wave Loader',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Five pentagons rise and rotate in a travelling wave suited to creative and analytical loading states.',
    markup: `<div class="vl-shape-pentagon-wave" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-shape-pentagon-wave {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  width: 112px;
  height: 64px;
}
.vl-shape-pentagon-wave span {
  width: 18px;
  height: 18px;
  background: var(--loader-accent);
  clip-path: polygon(50% 0, 100% 38%, 81% 100%, 19% 100%, 0 38%);
  animation: vl-shape-pentagon-wave-step calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
.vl-shape-pentagon-wave span:nth-child(2) { animation-delay: .1s; }
.vl-shape-pentagon-wave span:nth-child(3) { animation-delay: .2s; }
.vl-shape-pentagon-wave span:nth-child(4) { animation-delay: .3s; }
.vl-shape-pentagon-wave span:nth-child(5) { animation-delay: .4s; }
@keyframes vl-shape-pentagon-wave-step {
  0%, 72%, 100% { transform: translateY(8px) rotate(0deg) scale(.72); opacity: .24; }
  36% { transform: translateY(-9px) rotate(144deg) scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'shape-star-bloom',
    name: 'Star Bloom Loader',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Layered stars expand, rotate, and soften into a blooming geometric loading mark.',
    markup: `<div class="vl-shape-star-bloom" aria-hidden="true"></div>`,
    css: `.vl-shape-star-bloom {
  position: relative;
  width: 72px;
  height: 72px;
  background: var(--loader-accent);
  clip-path: polygon(50% 0, 61% 34%, 98% 35%, 68% 56%, 79% 92%, 50% 70%, 21% 92%, 32% 56%, 2% 35%, 39% 34%);
  animation: vl-shape-star-bloom-main calc(var(--loader-speed) * 1.8) ease-in-out infinite;
}
.vl-shape-star-bloom::before,
.vl-shape-star-bloom::after {
  content: '';
  position: absolute;
  inset: 15px;
  background: var(--surface, #fff);
  clip-path: inherit;
}
.vl-shape-star-bloom::after {
  inset: 25px;
  background: color-mix(in srgb, var(--loader-accent) 72%, white);
  animation: vl-shape-star-bloom-core calc(var(--loader-speed) * 1.1) ease-in-out infinite reverse;
}
@keyframes vl-shape-star-bloom-main {
  0%, 100% { transform: rotate(0deg) scale(.72); opacity: .48; }
  50% { transform: rotate(180deg) scale(1); opacity: 1; }
}
@keyframes vl-shape-star-bloom-core {
  0%, 100% { transform: rotate(0deg) scale(.65); }
  50% { transform: rotate(-180deg) scale(1.28); }
}`
  },
  {
    id: 'shape-capsule-chain',
    name: 'Capsule Chain Loader',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Five rounded capsules tilt and compress in sequence like a flexible mechanical chain.',
    markup: `<div class="vl-shape-capsule-chain" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-shape-capsule-chain {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 108px;
  height: 66px;
}
.vl-shape-capsule-chain span {
  width: 14px;
  height: 42px;
  border-radius: 999px;
  background: linear-gradient(to bottom, color-mix(in srgb, var(--loader-accent) 68%, white), var(--loader-accent));
  transform-origin: 50% 50%;
  animation: vl-shape-capsule-chain-flex calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
.vl-shape-capsule-chain span:nth-child(2) { animation-delay: .1s; }
.vl-shape-capsule-chain span:nth-child(3) { animation-delay: .2s; }
.vl-shape-capsule-chain span:nth-child(4) { animation-delay: .3s; }
.vl-shape-capsule-chain span:nth-child(5) { animation-delay: .4s; }
@keyframes vl-shape-capsule-chain-flex {
  0%, 72%, 100% { transform: rotate(-12deg) scaleY(.58); opacity: .28; }
  36% { transform: rotate(12deg) scaleY(1); opacity: 1; }
}`
  },
  {
    id: 'shape-ring-to-square',
    name: 'Ring to Square Loader',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Two outlined forms continuously morph between circles, rounded squares, and diamonds.',
    markup: `<div class="vl-shape-ring-to-square" aria-hidden="true"><span></span></div>`,
    css: `.vl-shape-ring-to-square {
  position: relative;
  width: 68px;
  height: 68px;
  border: 5px solid var(--loader-accent);
  border-radius: 50%;
  animation: vl-shape-ring-to-square-outer calc(var(--loader-speed) * 2) ease-in-out infinite;
}
.vl-shape-ring-to-square span {
  position: absolute;
  inset: 14px;
  border: 4px solid color-mix(in srgb, var(--loader-accent) 65%, white);
  border-radius: 10px;
  animation: vl-shape-ring-to-square-inner calc(var(--loader-speed) * 1.45) ease-in-out infinite reverse;
}
@keyframes vl-shape-ring-to-square-outer {
  0%, 100% { border-radius: 50%; transform: rotate(0deg) scale(.82); }
  50% { border-radius: 10px; transform: rotate(135deg) scale(1); }
}
@keyframes vl-shape-ring-to-square-inner {
  0%, 100% { border-radius: 8px; transform: rotate(0deg) scale(.72); opacity: .45; }
  50% { border-radius: 50%; transform: rotate(-180deg) scale(1); opacity: 1; }
}`
  },
  {
    id: 'shape-tile-kaleidoscope',
    name: 'Tile Kaleidoscope Loader',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Four clipped tiles rotate around a central gap and repeatedly assemble into a larger diamond.',
    markup: `<div class="vl-shape-tile-kaleidoscope" aria-hidden="true"><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-shape-tile-kaleidoscope {
  position: relative;
  width: 76px;
  height: 76px;
  animation: vl-shape-tile-kaleidoscope-turn calc(var(--loader-speed) * 2.4) linear infinite;
}
.vl-shape-tile-kaleidoscope span {
  --tile-rotate: 0deg;
  position: absolute;
  width: 31px;
  height: 31px;
  background: var(--loader-accent);
  clip-path: polygon(0 0, 100% 0, 0 100%);
  animation: vl-shape-tile-kaleidoscope-fold calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
.vl-shape-tile-kaleidoscope span:nth-child(1) { left: 5px; top: 5px; transform-origin: 100% 100%; animation-delay: 0s; }
.vl-shape-tile-kaleidoscope span:nth-child(2) { --tile-rotate: 90deg; right: 5px; top: 5px; transform-origin: 0 100%; animation-delay: .12s; }
.vl-shape-tile-kaleidoscope span:nth-child(3) { --tile-rotate: 180deg; right: 5px; bottom: 5px; transform-origin: 0 0; animation-delay: .24s; }
.vl-shape-tile-kaleidoscope span:nth-child(4) { --tile-rotate: 270deg; left: 5px; bottom: 5px; transform-origin: 100% 0; animation-delay: .36s; }
@keyframes vl-shape-tile-kaleidoscope-turn { to { transform: rotate(360deg); } }
@keyframes vl-shape-tile-kaleidoscope-fold {
  0%, 100% { opacity: .28; transform: rotate(var(--tile-rotate)) scale(.62); }
  50% { opacity: 1; transform: rotate(var(--tile-rotate)) scale(1); }
}`
  }
];
