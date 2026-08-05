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
  {
    id: 'matrix-loop-grid',
    name: 'Loop Grid Matrix',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Grid points and a central node chase one another in a looping matrix.',
    markup: `<div class="vl-cat-matrix-loop-grid" role="img" aria-label="Loop grid matrix">
  <span class="p" style="--i:0; --x:12px; --y:17px;"></span>
  <span class="p" style="--i:1; --x:42px; --y:50px;"></span>
  <span class="p" style="--i:2; --x:72px; --y:22px;"></span>
  <span class="p" style="--i:3; --x:102px; --y:53px;"></span>
  <span class="core"></span>
</div>`,
    css: `.vl-cat-matrix-loop-grid {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5f89);
  border-radius: 14px;
  position: relative;
  background: radial-gradient(circle at 50% 53%, color-mix(in srgb, var(--loader-accent) 15%, transparent), transparent 42%), linear-gradient(178deg, #061b30, #0b2941 63%, #040a14);
}
.vl-cat-matrix-loop-grid .p {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-cat-matrix-loop-grid-point calc(var(--loader-speed) * 1.1) ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.2s);
}
.vl-cat-matrix-loop-grid .core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  margin: -6px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, white 10%);
  animation: vl-cat-matrix-loop-grid-core calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
@keyframes vl-cat-matrix-loop-grid-point {
  0%,100% { opacity: .25; transform: scale(.55); }
  50% { opacity: 1; transform: scale(1.15); }
}
@keyframes vl-cat-matrix-loop-grid-core {
  0%,100% { transform: scale(.65); opacity: .4; }
  50% { transform: scale(1.12); opacity: 1; }
}`
  },
];
