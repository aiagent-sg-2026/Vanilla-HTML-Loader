export const shapesPack4LoadersB = [
  {
    id: 'shape-prism-split',
    name: 'Prism Split',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Two triangular prism halves separate, rotate, and reconnect around a glowing central seam.',
    markup: `<div class="vl-shape-prism-split" aria-hidden="true"><span></span><span></span><i></i></div>`,
    css: `.vl-shape-prism-split {
  position: relative;
  width: 84px;
  height: 64px;
}
.vl-shape-prism-split span {
  position: absolute;
  top: 10px;
  width: 34px;
  height: 44px;
  background: var(--loader-accent);
  animation: vl-shape-prism-split-move calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
.vl-shape-prism-split span:first-child {
  left: 8px;
  clip-path: polygon(0 50%, 100% 0, 100% 100%);
  transform-origin: right center;
}
.vl-shape-prism-split span:nth-child(2) {
  right: 8px;
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  transform-origin: left center;
  animation-delay: .12s;
}
.vl-shape-prism-split i {
  position: absolute;
  left: 39px;
  top: 13px;
  width: 6px;
  height: 38px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--loader-accent) 72%, white);
  animation: vl-shape-prism-split-seam calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
@keyframes vl-shape-prism-split-move {
  0%, 100% { transform: translateX(0) rotate(0deg) scale(.76); opacity: .45; }
  50% { transform: translateX(var(--shift, 0)) rotate(16deg) scale(1); opacity: 1; }
}
.vl-shape-prism-split span:first-child { --shift: -7px; }
.vl-shape-prism-split span:nth-child(2) { --shift: 7px; }
@keyframes vl-shape-prism-split-seam {
  0%, 100% { transform: scaleY(.45); opacity: .25; }
  50% { transform: scaleY(1.08); opacity: 1; }
}`
  },
  {
    id: 'shape-scallop-wheel',
    name: 'Scallop Wheel',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Eight rounded scallops pulse around a rotating center for a playful but structured waiting state.',
    markup: `<div class="vl-shape-scallop-wheel" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-shape-scallop-wheel {
  position: relative;
  width: 74px;
  height: 74px;
  animation: vl-shape-scallop-wheel-spin calc(var(--loader-speed) * 2.1) linear infinite;
}
.vl-shape-scallop-wheel span {
  position: absolute;
  left: 30px;
  top: 2px;
  width: 14px;
  height: 24px;
  border-radius: 50% 50% 35% 35%;
  background: var(--loader-accent);
  transform-origin: 7px 35px;
  animation: vl-shape-scallop-wheel-pulse calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-shape-scallop-wheel span:nth-child(1) { --angle: 0deg; }
.vl-shape-scallop-wheel span:nth-child(2) { --angle: 45deg; animation-delay: .07s; }
.vl-shape-scallop-wheel span:nth-child(3) { --angle: 90deg; animation-delay: .14s; }
.vl-shape-scallop-wheel span:nth-child(4) { --angle: 135deg; animation-delay: .21s; }
.vl-shape-scallop-wheel span:nth-child(5) { --angle: 180deg; animation-delay: .28s; }
.vl-shape-scallop-wheel span:nth-child(6) { --angle: 225deg; animation-delay: .35s; }
.vl-shape-scallop-wheel span:nth-child(7) { --angle: 270deg; animation-delay: .42s; }
.vl-shape-scallop-wheel span:nth-child(8) { --angle: 315deg; animation-delay: .49s; }
.vl-shape-scallop-wheel i {
  position: absolute;
  inset: 27px;
  border-radius: 50%;
  background: var(--surface, #fff);
  box-shadow: inset 0 0 0 3px color-mix(in srgb, var(--loader-accent) 52%, transparent);
}
@keyframes vl-shape-scallop-wheel-spin { to { transform: rotate(360deg); } }
@keyframes vl-shape-scallop-wheel-pulse {
  0%, 100% { transform: rotate(var(--angle)) scaleY(.55); opacity: .25; }
  50% { transform: rotate(var(--angle)) scaleY(1); opacity: 1; }
}`
  },
  {
    id: 'shape-zigzag-scan',
    name: 'Zigzag Scan',
    category: 'Shapes',
    tech: 'CSS',
    description: 'A chain of angled tiles lights from left to right like a compact signal or route scan.',
    markup: `<div class="vl-shape-zigzag-scan" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-shape-zigzag-scan {
  position: relative;
  width: 100px;
  height: 48px;
}
.vl-shape-zigzag-scan span {
  position: absolute;
  top: 15px;
  width: 18px;
  height: 18px;
  background: var(--loader-accent);
  clip-path: polygon(0 25%, 70% 25%, 100% 50%, 70% 75%, 0 75%, 30% 50%);
  animation: vl-shape-zigzag-scan-flash calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-shape-zigzag-scan span:nth-child(1) { left: 0; }
.vl-shape-zigzag-scan span:nth-child(2) { left: 16px; top: 7px; animation-delay: .09s; }
.vl-shape-zigzag-scan span:nth-child(3) { left: 32px; animation-delay: .18s; }
.vl-shape-zigzag-scan span:nth-child(4) { left: 48px; top: 7px; animation-delay: .27s; }
.vl-shape-zigzag-scan span:nth-child(5) { left: 64px; animation-delay: .36s; }
.vl-shape-zigzag-scan span:nth-child(6) { left: 80px; top: 7px; animation-delay: .45s; }
@keyframes vl-shape-zigzag-scan-flash {
  0%, 100% { transform: scale(.65); opacity: .16; }
  45% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'shape-portal-arches',
    name: 'Portal Arches',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Three nested arches rise and contract in sequence like a gateway opening during navigation.',
    markup: `<div class="vl-shape-portal-arches" aria-hidden="true"><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-shape-portal-arches {
  position: relative;
  width: 82px;
  height: 68px;
}
.vl-shape-portal-arches span {
  position: absolute;
  left: 50%;
  bottom: 6px;
  border: 5px solid var(--loader-accent);
  border-bottom: 0;
  border-radius: 50px 50px 0 0;
  transform: translateX(-50%);
  animation: vl-shape-portal-arches-rise calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
.vl-shape-portal-arches span:nth-child(1) { width: 68px; height: 52px; }
.vl-shape-portal-arches span:nth-child(2) { width: 46px; height: 36px; animation-delay: .15s; }
.vl-shape-portal-arches span:nth-child(3) { width: 24px; height: 20px; animation-delay: .3s; }
.vl-shape-portal-arches i {
  position: absolute;
  left: 37px;
  bottom: 3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--loader-accent);
}
@keyframes vl-shape-portal-arches-rise {
  0%, 100% { transform: translateX(-50%) translateY(8px) scaleY(.58); opacity: .22; }
  50% { transform: translateX(-50%) translateY(0) scaleY(1); opacity: 1; }
}`
  },
  {
    id: 'shape-cube-net-fold',
    name: 'Cube Net Fold',
    category: 'Shapes',
    tech: 'CSS',
    description: 'A six-tile cube net contracts toward its center and unfolds again as a precise assembly loader.',
    markup: `<div class="vl-shape-cube-net-fold" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-shape-cube-net-fold {
  position: relative;
  width: 78px;
  height: 70px;
}
.vl-shape-cube-net-fold span {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background: var(--loader-accent);
  box-shadow: inset 0 0 0 2px color-mix(in srgb, white 35%, transparent);
  animation: vl-shape-cube-net-fold-tile calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
.vl-shape-cube-net-fold span:nth-child(1) { left: 29px; top: 4px; --tx: 0px; --ty: 20px; }
.vl-shape-cube-net-fold span:nth-child(2) { left: 8px; top: 25px; --tx: 21px; --ty: 0px; animation-delay: .08s; }
.vl-shape-cube-net-fold span:nth-child(3) { left: 29px; top: 25px; --tx: 0px; --ty: 0px; animation-delay: .16s; }
.vl-shape-cube-net-fold span:nth-child(4) { left: 50px; top: 25px; --tx: -21px; --ty: 0px; animation-delay: .24s; }
.vl-shape-cube-net-fold span:nth-child(5) { left: 29px; top: 46px; --tx: 0px; --ty: -21px; animation-delay: .32s; }
.vl-shape-cube-net-fold span:nth-child(6) { left: 50px; top: 46px; --tx: -21px; --ty: -21px; animation-delay: .4s; }
@keyframes vl-shape-cube-net-fold-tile {
  0%, 100% { transform: translate(0, 0) rotate(0deg) scale(.72); opacity: .3; }
  50% { transform: translate(var(--tx), var(--ty)) rotate(90deg) scale(1); opacity: 1; }
}`
  }
];
