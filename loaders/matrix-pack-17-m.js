export const matrixPack17LoadersM = [
  {
    id: 'matrix-torus-pulse',
    name: 'Torus Pulse Matrix',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Torus traces and a matrix of points pulse against each other in loops.',
    markup: `<div class="vl-cat-matrix-torus-pulse" role="img" aria-label="Torus pulse matrix">
  <span class="loop l1"></span>
  <span class="loop l2"></span>
  <span class="loop l3"></span>
  <span class="dot d1"></span>
  <span class="dot d2"></span>
  <span class="dot d3"></span>
  <span class="dot d4"></span>
</div>`,
    css: `.vl-cat-matrix-torus-pulse {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6189);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
}
.vl-cat-matrix-torus-pulse .loop {
  position: absolute;
  left: 50%;
  top: 50%;
  border: 1.5px solid color-mix(in srgb, var(--loader-accent) 55%, transparent);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: vl-cat-matrix-torus-pulse-rotate calc(var(--loader-speed) * 1.4) linear infinite;
}
.vl-cat-matrix-torus-pulse .l1 { width: 32px; height: 32px; animation-delay: 0s; }
.vl-cat-matrix-torus-pulse .l2 { width: 56px; height: 56px; animation-delay: -.35s; }
.vl-cat-matrix-torus-pulse .l3 { width: 80px; height: 80px; animation-delay: -.7s; border-style: dashed; }
.vl-cat-matrix-torus-pulse .dot {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, white 10%);
  animation: vl-cat-matrix-torus-pulse-dot calc(var(--loader-speed) * 1.12) ease-in-out infinite;
}
.vl-cat-matrix-torus-pulse .d1 { transform: translate(-35px, -35px); animation-delay: 0s; }
.vl-cat-matrix-torus-pulse .d2 { transform: translate(35px, -35px); animation-delay: -.28s; }
.vl-cat-matrix-torus-pulse .d3 { transform: translate(35px, 35px); animation-delay: -.56s; }
.vl-cat-matrix-torus-pulse .d4 { transform: translate(-35px, 35px); animation-delay: -.84s; }
@keyframes vl-cat-matrix-torus-pulse-rotate {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
@keyframes vl-cat-matrix-torus-pulse-dot {
  0%,100% { opacity: .2; transform: scale(.55); }
  50% { opacity: 1; transform: scale(1.2); }
}`
  },
];
