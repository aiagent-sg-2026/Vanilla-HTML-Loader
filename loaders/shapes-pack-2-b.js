export const shapesPack2LoadersB = [
  {
    id: 'shape-honeycomb-scan',
    name: 'Honeycomb Scan',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Seven hexagonal cells illuminate in a scanning pattern for structured data and grid-based loading states.',
    markup: `<div class="vl-shape-honeycomb-scan" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-shape-honeycomb-scan {
  position: relative;
  width: 78px;
  height: 66px;
}
.vl-shape-honeycomb-scan span {
  position: absolute;
  width: 20px;
  height: 22px;
  background: var(--loader-accent);
  clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
  animation: vl-shape-honeycomb-scan-cell calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-shape-honeycomb-scan span:nth-child(1) { left: 29px; top: 22px; }
.vl-shape-honeycomb-scan span:nth-child(2) { left: 29px; top: 0; animation-delay: .1s; }
.vl-shape-honeycomb-scan span:nth-child(3) { left: 49px; top: 11px; animation-delay: .2s; }
.vl-shape-honeycomb-scan span:nth-child(4) { left: 49px; top: 33px; animation-delay: .3s; }
.vl-shape-honeycomb-scan span:nth-child(5) { left: 29px; top: 44px; animation-delay: .4s; }
.vl-shape-honeycomb-scan span:nth-child(6) { left: 9px; top: 33px; animation-delay: .5s; }
.vl-shape-honeycomb-scan span:nth-child(7) { left: 9px; top: 11px; animation-delay: .6s; }
@keyframes vl-shape-honeycomb-scan-cell {
  0%, 100% { transform: scale(.68); opacity: .18; }
  45% { transform: scale(1.04); opacity: 1; }
}`
  },
  {
    id: 'shape-trapezoid-shift',
    name: 'Trapezoid Shift',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Four trapezoids alternate height and emphasis to show staged transformation or layout work.',
    markup: `<div class="vl-shape-trapezoid-shift" aria-hidden="true"><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-shape-trapezoid-shift {
  position: relative;
  width: 94px;
  height: 50px;
}
.vl-shape-trapezoid-shift span {
  position: absolute;
  top: 12px;
  width: 22px;
  height: 28px;
  background: var(--loader-accent);
  clip-path: polygon(20% 0, 80% 0, 100% 100%, 0 100%);
  animation: vl-shape-trapezoid-shift-move calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-shape-trapezoid-shift span:nth-child(1) { left: 0; }
.vl-shape-trapezoid-shift span:nth-child(2) { left: 24px; animation-delay: .12s; }
.vl-shape-trapezoid-shift span:nth-child(3) { left: 48px; animation-delay: .24s; }
.vl-shape-trapezoid-shift span:nth-child(4) { left: 72px; animation-delay: .36s; }
@keyframes vl-shape-trapezoid-shift-move {
  0%, 100% { transform: translateY(7px) scaleY(.58); opacity: .25; }
  50% { transform: translateY(-7px) scaleY(1.08); opacity: 1; }
}`
  },
  {
    id: 'shape-polygon-stack',
    name: 'Polygon Stack',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Three nested polygons rotate in alternating directions while expanding through a layered stack.',
    markup: `<div class="vl-shape-polygon-stack" aria-hidden="true"><span></span><span></span><span></span></div>`,
    css: `.vl-shape-polygon-stack {
  position: relative;
  width: 72px;
  height: 72px;
}
.vl-shape-polygon-stack span {
  position: absolute;
  clip-path: polygon(50% 0, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
  background: color-mix(in srgb, var(--loader-accent) 68%, transparent);
  animation: vl-shape-polygon-stack-turn calc(var(--loader-speed) * 1.65) ease-in-out infinite;
}
.vl-shape-polygon-stack span:nth-child(1) { inset: 1px; }
.vl-shape-polygon-stack span:nth-child(2) {
  inset: 11px;
  background: color-mix(in srgb, var(--loader-accent) 48%, white);
  animation-direction: reverse;
  animation-duration: calc(var(--loader-speed) * 1.2);
}
.vl-shape-polygon-stack span:nth-child(3) {
  inset: 23px;
  background: var(--surface, #fff);
  box-shadow: inset 0 0 0 3px var(--loader-accent);
  animation-duration: calc(var(--loader-speed) * .9);
}
@keyframes vl-shape-polygon-stack-turn {
  0%, 100% { transform: rotate(0deg) scale(.72); opacity: .45; }
  50% { transform: rotate(60deg) scale(1.04); opacity: 1; }
}`
  },
  {
    id: 'shape-corner-tiles',
    name: 'Corner Tiles',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Four corner tiles converge toward the center and return, creating a compact assembly animation.',
    markup: `<div class="vl-shape-corner-tiles" aria-hidden="true"><span></span><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-shape-corner-tiles {
  position: relative;
  width: 68px;
  height: 68px;
}
.vl-shape-corner-tiles span {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background: var(--loader-accent);
  animation: vl-shape-corner-tiles-join calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-shape-corner-tiles span:nth-child(1) { left: 2px; top: 2px; --tx: 17px; --ty: 17px; }
.vl-shape-corner-tiles span:nth-child(2) { right: 2px; top: 2px; --tx: -17px; --ty: 17px; animation-delay: .08s; }
.vl-shape-corner-tiles span:nth-child(3) { right: 2px; bottom: 2px; --tx: -17px; --ty: -17px; animation-delay: .16s; }
.vl-shape-corner-tiles span:nth-child(4) { left: 2px; bottom: 2px; --tx: 17px; --ty: -17px; animation-delay: .24s; }
.vl-shape-corner-tiles i {
  position: absolute;
  left: 29px;
  top: 29px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 72%, white);
  animation: vl-shape-corner-tiles-core calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
@keyframes vl-shape-corner-tiles-join {
  0%, 100% { transform: translate(0, 0) rotate(0deg) scale(.72); opacity: .3; }
  50% { transform: translate(var(--tx), var(--ty)) rotate(180deg) scale(1.05); opacity: 1; }
}
@keyframes vl-shape-corner-tiles-core {
  0%, 100% { transform: scale(.55); opacity: .25; }
  50% { transform: scale(1.35); opacity: 1; }
}`
  },
  {
    id: 'shape-tessellation-flip',
    name: 'Tessellation Flip',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Six triangular tiles form a radial tessellation and flip in sequence around the center.',
    markup: `<div class="vl-shape-tessellation-flip" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-shape-tessellation-flip {
  position: relative;
  width: 74px;
  height: 64px;
  animation: vl-shape-tessellation-flip-turn calc(var(--loader-speed) * 2.4) linear infinite;
}
.vl-shape-tessellation-flip span {
  position: absolute;
  left: 27px;
  top: 2px;
  width: 20px;
  height: 24px;
  background: var(--loader-accent);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  transform-origin: 10px 30px;
  animation: vl-shape-tessellation-flip-tile calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-shape-tessellation-flip span:nth-child(1) { --angle: 0deg; }
.vl-shape-tessellation-flip span:nth-child(2) { --angle: 60deg; animation-delay: .1s; }
.vl-shape-tessellation-flip span:nth-child(3) { --angle: 120deg; animation-delay: .2s; }
.vl-shape-tessellation-flip span:nth-child(4) { --angle: 180deg; animation-delay: .3s; }
.vl-shape-tessellation-flip span:nth-child(5) { --angle: 240deg; animation-delay: .4s; }
.vl-shape-tessellation-flip span:nth-child(6) { --angle: 300deg; animation-delay: .5s; }
.vl-shape-tessellation-flip i {
  position: absolute;
  left: 31px;
  top: 27px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--surface, #fff);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--loader-accent) 38%, transparent);
}
@keyframes vl-shape-tessellation-flip-turn { to { transform: rotate(360deg); } }
@keyframes vl-shape-tessellation-flip-tile {
  0%, 100% { transform: rotate(var(--angle)) scaleY(.35); opacity: .25; }
  50% { transform: rotate(var(--angle)) scaleY(1.04); opacity: 1; }
}`
  }
];
