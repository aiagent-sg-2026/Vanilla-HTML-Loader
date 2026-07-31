export const shapesPack3LoadersA = [
  {
    id: 'shape-decagon-dial',
    name: 'Decagon Dial',
    category: 'Shapes',
    tech: 'CSS',
    description: 'A ten-sided dial rotates around a breathing center for precise calculation and processing states.',
    markup: `<div class="vl-shape-decagon-dial" aria-hidden="true"></div>`,
    css: `.vl-shape-decagon-dial {
  position: relative;
  width: 72px;
  height: 72px;
}
.vl-shape-decagon-dial::before,
.vl-shape-decagon-dial::after {
  content: '';
  position: absolute;
  clip-path: polygon(50% 0, 79% 10%, 98% 35%, 98% 65%, 79% 90%, 50% 100%, 21% 90%, 2% 65%, 2% 35%, 21% 10%);
}
.vl-shape-decagon-dial::before {
  inset: 3px;
  background: conic-gradient(
    from 18deg,
    var(--loader-accent) 0 12%,
    transparent 12% 20%,
    color-mix(in srgb, var(--loader-accent) 62%, white) 20% 32%,
    transparent 32% 40%,
    var(--loader-accent) 40% 52%,
    transparent 52% 60%,
    color-mix(in srgb, var(--loader-accent) 62%, white) 60% 72%,
    transparent 72% 80%,
    var(--loader-accent) 80% 92%,
    transparent 92% 100%
  );
  animation: vl-shape-decagon-dial-spin calc(var(--loader-speed) * 1.75) linear infinite;
}
.vl-shape-decagon-dial::after {
  inset: 21px;
  background: var(--surface, #fff);
  box-shadow: inset 0 0 0 3px color-mix(in srgb, var(--loader-accent) 40%, transparent);
  animation: vl-shape-decagon-dial-core calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
@keyframes vl-shape-decagon-dial-spin { to { transform: rotate(360deg); } }
@keyframes vl-shape-decagon-dial-core {
  0%, 100% { transform: scale(.68) rotate(0deg); opacity: .48; }
  50% { transform: scale(1.08) rotate(-36deg); opacity: 1; }
}`
  },
  {
    id: 'shape-parallelogram-shuttle',
    name: 'Parallelogram Shuttle',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Four slanted tiles shuttle horizontally in sequence for transfer, routing, and synchronization feedback.',
    markup: `<div class="vl-shape-parallelogram-shuttle" aria-hidden="true"><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-shape-parallelogram-shuttle {
  position: relative;
  width: 98px;
  height: 46px;
}
.vl-shape-parallelogram-shuttle span {
  position: absolute;
  top: 12px;
  width: 18px;
  height: 22px;
  border-radius: 3px;
  background: var(--loader-accent);
  clip-path: polygon(24% 0, 100% 0, 76% 100%, 0 100%);
  animation: vl-shape-parallelogram-shuttle-move calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-shape-parallelogram-shuttle span:nth-child(1) { left: 3px; }
.vl-shape-parallelogram-shuttle span:nth-child(2) { left: 27px; animation-delay: .12s; }
.vl-shape-parallelogram-shuttle span:nth-child(3) { left: 51px; animation-delay: .24s; }
.vl-shape-parallelogram-shuttle span:nth-child(4) { left: 75px; animation-delay: .36s; }
@keyframes vl-shape-parallelogram-shuttle-move {
  0%, 100% { transform: translateX(-3px) scale(.72); opacity: .22; }
  50% { transform: translateX(3px) scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'shape-crescent-orbit',
    name: 'Crescent Orbit',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Three crescent forms orbit a small core to create a soft celestial loading indicator.',
    markup: `<div class="vl-shape-crescent-orbit" aria-hidden="true"><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-shape-crescent-orbit {
  position: relative;
  width: 76px;
  height: 76px;
  animation: vl-shape-crescent-orbit-spin calc(var(--loader-speed) * 2.1) linear infinite;
}
.vl-shape-crescent-orbit span {
  position: absolute;
  left: 29px;
  top: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: inset -6px 0 0 var(--surface, #fff);
  transform-origin: 9px 36px;
  animation: vl-shape-crescent-orbit-pulse calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-shape-crescent-orbit span:nth-child(1) { transform: rotate(0deg); }
.vl-shape-crescent-orbit span:nth-child(2) { transform: rotate(120deg); animation-delay: .18s; }
.vl-shape-crescent-orbit span:nth-child(3) { transform: rotate(240deg); animation-delay: .36s; }
.vl-shape-crescent-orbit i {
  position: absolute;
  left: 31px;
  top: 31px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 70%, white);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--loader-accent) 14%, transparent);
}
@keyframes vl-shape-crescent-orbit-spin { to { transform: rotate(360deg); } }
@keyframes vl-shape-crescent-orbit-pulse {
  0%, 100% { opacity: .35; filter: saturate(.7); }
  50% { opacity: 1; filter: saturate(1.3); }
}`
  },
  {
    id: 'shape-squircle-morph',
    name: 'Squircle Morph',
    category: 'Shapes',
    tech: 'CSS',
    description: 'A layered squircle continuously morphs between rounded and geometric silhouettes.',
    markup: `<div class="vl-shape-squircle-morph" aria-hidden="true"></div>`,
    css: `.vl-shape-squircle-morph {
  position: relative;
  width: 68px;
  height: 68px;
  border-radius: 30%;
  background: var(--loader-accent);
  animation: vl-shape-squircle-morph-main calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
.vl-shape-squircle-morph::before {
  content: '';
  position: absolute;
  inset: 10px;
  border-radius: inherit;
  background: color-mix(in srgb, var(--loader-accent) 58%, white);
  animation: vl-shape-squircle-morph-inner calc(var(--loader-speed) * 1.45) ease-in-out infinite reverse;
}
.vl-shape-squircle-morph::after {
  content: '';
  position: absolute;
  inset: 23px;
  border-radius: inherit;
  background: var(--surface, #fff);
}
@keyframes vl-shape-squircle-morph-main {
  0%, 100% { transform: rotate(0deg) scale(.78); border-radius: 18%; opacity: .55; }
  50% { transform: rotate(45deg) scale(1.02); border-radius: 44%; opacity: 1; }
}
@keyframes vl-shape-squircle-morph-inner {
  0%, 100% { transform: rotate(0deg) scale(.76); border-radius: 44%; }
  50% { transform: rotate(-45deg) scale(1.08); border-radius: 16%; }
}`
  },
  {
    id: 'shape-kite-compass',
    name: 'Kite Compass',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Four kite-shaped pointers expand around a central diamond like a compact compass.',
    markup: `<div class="vl-shape-kite-compass" aria-hidden="true"><span></span><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-shape-kite-compass {
  position: relative;
  width: 72px;
  height: 72px;
  animation: vl-shape-kite-compass-turn calc(var(--loader-speed) * 2.3) linear infinite;
}
.vl-shape-kite-compass span {
  position: absolute;
  left: 27px;
  top: 2px;
  width: 18px;
  height: 28px;
  background: var(--loader-accent);
  clip-path: polygon(50% 0, 100% 66%, 50% 100%, 0 66%);
  transform-origin: 9px 34px;
  animation: vl-shape-kite-compass-pulse calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-shape-kite-compass span:nth-child(1) { --angle: 0deg; transform: rotate(0deg); }
.vl-shape-kite-compass span:nth-child(2) { --angle: 90deg; transform: rotate(90deg); animation-delay: .12s; }
.vl-shape-kite-compass span:nth-child(3) { --angle: 180deg; transform: rotate(180deg); animation-delay: .24s; }
.vl-shape-kite-compass span:nth-child(4) { --angle: 270deg; transform: rotate(270deg); animation-delay: .36s; }
.vl-shape-kite-compass i {
  position: absolute;
  left: 29px;
  top: 29px;
  width: 14px;
  height: 14px;
  border-radius: 3px;
  background: var(--surface, #fff);
  box-shadow: inset 0 0 0 3px color-mix(in srgb, var(--loader-accent) 55%, transparent);
  transform: rotate(45deg);
}
@keyframes vl-shape-kite-compass-turn { to { transform: rotate(360deg); } }
@keyframes vl-shape-kite-compass-pulse {
  0%, 100% { transform: rotate(var(--angle)) scaleY(.58); opacity: .28; }
  50% { transform: rotate(var(--angle)) scaleY(1.05); opacity: 1; }
}`
  }
];
