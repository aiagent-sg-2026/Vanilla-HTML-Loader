export const shapesPack2LoadersA = [
  {
    id: 'shape-octagon-breath',
    name: 'Octagon Breath',
    category: 'Shapes',
    tech: 'CSS',
    description: 'A layered octagon rotates gently while its inner cutout breathes for compact processing states.',
    markup: `<div class="vl-shape-octagon-breath" aria-hidden="true"></div>`,
    css: `.vl-shape-octagon-breath {
  position: relative;
  width: 80px;
  height: 80px;
}
.vl-shape-octagon-breath::before,
.vl-shape-octagon-breath::after {
  content: '';
  position: absolute;
  clip-path: polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%);
}
.vl-shape-octagon-breath::before {
  inset: 12px;
  background: var(--loader-accent);
  animation: vl-shape-octagon-breath-spin calc(var(--loader-speed) * 1.9) linear infinite;
}
.vl-shape-octagon-breath::after {
  inset: 24px;
  background: var(--surface, #fff);
  box-shadow: inset 0 0 0 3px color-mix(in srgb, var(--loader-accent) 28%, transparent);
  animation: vl-shape-octagon-breath-core calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-shape-octagon-breath-spin {
  to { transform: rotate(360deg); }
}
@keyframes vl-shape-octagon-breath-core {
  0%, 100% { transform: scale(.72) rotate(0deg); opacity: .55; }
  50% { transform: scale(1.05) rotate(-22.5deg); opacity: 1; }
}`
  },
  {
    id: 'shape-chevron-cycle',
    name: 'Chevron Cycle',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Four chevrons pass energy from left to right for navigation, routing, and staged loading states.',
    markup: `<div class="vl-shape-chevron-cycle" aria-hidden="true"><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-shape-chevron-cycle {
  position: relative;
  width: 92px;
  height: 44px;
}
.vl-shape-chevron-cycle span {
  position: absolute;
  top: 11px;
  width: 18px;
  height: 18px;
  border-right: 5px solid var(--loader-accent);
  border-bottom: 5px solid var(--loader-accent);
  transform: rotate(-45deg);
  animation: vl-shape-chevron-cycle-move calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-shape-chevron-cycle span:nth-child(1) { left: 0; }
.vl-shape-chevron-cycle span:nth-child(2) { left: 21px; animation-delay: .12s; }
.vl-shape-chevron-cycle span:nth-child(3) { left: 42px; animation-delay: .24s; }
.vl-shape-chevron-cycle span:nth-child(4) { left: 63px; animation-delay: .36s; }
@keyframes vl-shape-chevron-cycle-move {
  0%, 100% { transform: translateX(0) rotate(-45deg) scale(.72); opacity: .2; }
  45% { transform: translateX(6px) rotate(-45deg) scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'shape-cross-fold',
    name: 'Cross Fold',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Four kite-shaped arms fold toward a central point and reopen in a balanced geometric cycle.',
    markup: `<div class="vl-shape-cross-fold" aria-hidden="true"><span></span><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-shape-cross-fold {
  position: relative;
  width: 68px;
  height: 68px;
}
.vl-shape-cross-fold span {
  position: absolute;
  width: 20px;
  height: 20px;
  background: var(--loader-accent);
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  animation: vl-shape-cross-fold-arm calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-shape-cross-fold span:nth-child(1) { left: 24px; top: 1px; --tx: 0px; --ty: 13px; }
.vl-shape-cross-fold span:nth-child(2) { right: 1px; top: 24px; --tx: -13px; --ty: 0px; animation-delay: .12s; }
.vl-shape-cross-fold span:nth-child(3) { left: 24px; bottom: 1px; --tx: 0px; --ty: -13px; animation-delay: .24s; }
.vl-shape-cross-fold span:nth-child(4) { left: 1px; top: 24px; --tx: 13px; --ty: 0px; animation-delay: .36s; }
.vl-shape-cross-fold i {
  position: absolute;
  left: 27px;
  top: 27px;
  width: 14px;
  height: 14px;
  border-radius: 3px;
  background: color-mix(in srgb, var(--loader-accent) 68%, white);
  transform: rotate(45deg);
}
@keyframes vl-shape-cross-fold-arm {
  0%, 100% { transform: translate(0, 0) rotate(0deg) scale(.72); opacity: .32; }
  50% { transform: translate(var(--tx), var(--ty)) rotate(90deg) scale(1.05); opacity: 1; }
}`
  },
  {
    id: 'shape-rhombus-wave',
    name: 'Rhombus Wave',
    category: 'Shapes',
    tech: 'CSS',
    description: 'A row of diamonds rises and falls in sequence with a lightweight equalizer-like rhythm.',
    markup: `<div class="vl-shape-rhombus-wave" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-shape-rhombus-wave {
  position: relative;
  width: 100px;
  height: 52px;
}
.vl-shape-rhombus-wave span {
  position: absolute;
  bottom: 7px;
  width: 15px;
  height: 15px;
  border-radius: 2px;
  background: var(--loader-accent);
  transform: rotate(45deg);
  animation: vl-shape-rhombus-wave-rise calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-shape-rhombus-wave span:nth-child(1) { left: 4px; }
.vl-shape-rhombus-wave span:nth-child(2) { left: 23px; animation-delay: .1s; }
.vl-shape-rhombus-wave span:nth-child(3) { left: 42px; animation-delay: .2s; }
.vl-shape-rhombus-wave span:nth-child(4) { left: 61px; animation-delay: .3s; }
.vl-shape-rhombus-wave span:nth-child(5) { left: 80px; animation-delay: .4s; }
@keyframes vl-shape-rhombus-wave-rise {
  0%, 100% { transform: translateY(0) rotate(45deg) scale(.68); opacity: .25; }
  50% { transform: translateY(-22px) rotate(135deg) scale(1.04); opacity: 1; }
}`
  },
  {
    id: 'shape-circle-slices',
    name: 'Circle Slices',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Alternating circular slices rotate around a quiet center to indicate continuous background work.',
    markup: `<div class="vl-shape-circle-slices" aria-hidden="true"></div>`,
    css: `.vl-shape-circle-slices {
  position: relative;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background: conic-gradient(
    var(--loader-accent) 0 12.5%,
    transparent 12.5% 25%,
    color-mix(in srgb, var(--loader-accent) 68%, white) 25% 37.5%,
    transparent 37.5% 50%,
    var(--loader-accent) 50% 62.5%,
    transparent 62.5% 75%,
    color-mix(in srgb, var(--loader-accent) 68%, white) 75% 87.5%,
    transparent 87.5% 100%
  );
  animation: vl-shape-circle-slices-spin calc(var(--loader-speed) * 1.35) steps(8, end) infinite;
}
.vl-shape-circle-slices::before {
  content: '';
  position: absolute;
  inset: 13px;
  border-radius: 50%;
  background: var(--surface, #fff);
  box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--loader-accent) 25%, transparent);
}
.vl-shape-circle-slices::after {
  content: '';
  position: absolute;
  inset: 25px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-shape-circle-slices-core calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
@keyframes vl-shape-circle-slices-spin { to { transform: rotate(360deg); } }
@keyframes vl-shape-circle-slices-core {
  0%, 100% { transform: scale(.55); opacity: .35; }
  50% { transform: scale(1.12); opacity: 1; }
}`
  }
];
