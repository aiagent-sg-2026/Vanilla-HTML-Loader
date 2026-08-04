export const matrixPack17LoadersI = [
  {
    id: 'matrix-skyline-arc-lattice',
    name: 'Skyline Arc Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A skyline of curved arcs drifts through a compact matrix lattice and pulses on offset timing.',
    markup: `<div class="vl-matrix17i-skyline" role="img" aria-label="Skyline arc lattice">
      <span class="vl-matrix17i-arc" style="--d:0;--r:0deg"></span>
      <span class="vl-matrix17i-arc" style="--d:.1;--r:72deg"></span>
      <span class="vl-matrix17i-arc" style="--d:.2;--r:144deg"></span>
      <span class="vl-matrix17i-arc" style="--d:.3;--r:216deg"></span>
      <span class="vl-matrix17i-arc" style="--d:.4;--r:288deg"></span>
    </div>`,
    css: `.vl-matrix17i-skyline {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6d97);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #061928 0 18%, #040913 68%);
}
.vl-matrix17i-arc {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 80px;
  height: 38px;
  margin: -4px -40px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 78%, #e3f5ff);
  border-radius: 50% 50% 8px 8px / 100% 100% 16px 16px;
  transform: rotate(var(--r));
  opacity: .22;
  animation: vl-matrix17i-arc calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17i-arc {
  0%, 100% { transform: rotate(var(--r)) scaleX(.55); opacity: .16; }
  50% { transform: rotate(calc(var(--r) + 180deg)) scaleX(1.05); opacity: .95; }
}`
  },
  {
    id: 'matrix-axon-luminance-cascade',
    name: 'Axon Luminance Cascade',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Axon-like markers cascade downward while a core light modulates their intensity.',
    markup: `<div class="vl-matrix17i-axon-luminance" role="img" aria-label="Axon luminance cascade">
      <span class="vl-matrix17i-axon" style="--x:18px;--y:12px;--d:0"></span>
      <span class="vl-matrix17i-axon" style="--x:50px;--y:38px;--d:.1"></span>
      <span class="vl-matrix17i-axon" style="--x:82px;--y:18px;--d:.2"></span>
      <span class="vl-matrix17i-axon" style="--x:114px;--y:44px;--d:.3"></span>
      <span class="vl-matrix17i-axon" style="--x:146px;--y:24px;--d:.4"></span>
      <span class="vl-matrix17i-core"></span>
    </div>`,
    css: `.vl-matrix17i-axon-luminance {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #236e98);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(145deg, #071725, #0a2f52 62%, #040913);
}
.vl-matrix17i-axon {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 88%, #ebf8ff);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 56%, transparent);
  animation: vl-matrix17i-axon calc(var(--loader-speed) * 1.36) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17i-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17i-core calc(var(--loader-speed) * 1.36) linear infinite;
}
@keyframes vl-matrix17i-axon {
  0%, 100% { transform: scale(.58); opacity: .18; }
  50% { transform: scale(1.08); opacity: .95; }
}
@keyframes vl-matrix17i-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  },
  {
    id: 'matrix-binary-wave-gate',
    name: 'Binary Wave Gate',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A binary-style gate sweeps through a dense waveform and re-emits mirrored pulses.',
    markup: `<div class="vl-matrix17i-binary-gate" role="img" aria-label="Binary wave gate">
      <span class="vl-matrix17i-wave" style="--d:0;--a:0deg"></span>
      <span class="vl-matrix17i-wave" style="--d:.14;--a:60deg"></span>
      <span class="vl-matrix17i-wave" style="--d:.28;--a:120deg"></span>
      <span class="vl-matrix17i-wave" style="--d:.42;--a:180deg"></span>
      <span class="vl-matrix17i-wave" style="--d:.56;--a:240deg"></span>
      <span class="vl-matrix17i-wave-core"></span>
    </div>`,
    css: `.vl-matrix17i-binary-gate {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #216b96);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #061728 0 20%, #040913 68%);
}
.vl-matrix17i-wave {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 72px;
  height: 72px;
  margin: -36px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 82%, #dff3ff);
  border-radius: 50%;
  transform: rotate(var(--a));
  opacity: .2;
  animation: vl-matrix17i-wave calc(var(--loader-speed) * 1.5) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17i-wave-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17i-wave-core calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-matrix17i-wave {
  0%, 100% { transform: rotate(var(--a)) scale(.52); opacity: .16; }
  50% { transform: rotate(calc(var(--a) + 180deg)) scale(1.07); opacity: .95; }
}
@keyframes vl-matrix17i-wave-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  },
  {
    id: 'matrix-spiral-node-lattice',
    name: 'Spiral Node Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Spiral node clusters orbit in and out while the background lattice stays offset.',
    markup: `<div class="vl-matrix17i-spiral-lattice" role="img" aria-label="Spiral node lattice">
      <span class="vl-matrix17i-node" style="--x:16px;--y:16px;--d:0"></span>
      <span class="vl-matrix17i-node" style="--x:85px;--y:34px;--d:.13"></span>
      <span class="vl-matrix17i-node" style="--x:164px;--y:16px;--d:.26"></span>
      <span class="vl-matrix17i-node" style="--x:54px;--y:74px;--d:.39"></span>
      <span class="vl-matrix17i-node" style="--x:136px;--y:82px;--d:.52"></span>
      <span class="vl-matrix17i-node" style="--x:16px;--y:88px;--d:.65"></span>
      <span class="vl-matrix17i-node" style="--x:164px;--y:88px;--d:.78"></span>
      <span class="vl-matrix17i-node-core"></span>
    </div>`,
    css: `.vl-matrix17i-spiral-lattice {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1f6a94);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(150deg, #061724, #0a2f52 62%, #040913);
}
.vl-matrix17i-node {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 90%, #eaf8ff);
  box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 54%, transparent);
  animation: vl-matrix17i-node calc(var(--loader-speed) * 1.28) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17i-node-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17i-node-core calc(var(--loader-speed) * 1.28) linear infinite;
}
@keyframes vl-matrix17i-node {
  0%, 100% { transform: rotate(0deg) scale(.62); opacity: .18; }
  50% { transform: rotate(360deg) scale(1.12); opacity: .96; }
}
@keyframes vl-matrix17i-node-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  },
  {
    id: 'matrix-neural-orbit-veil',
    name: 'Neural Orbit Veil',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A veil-like ring rotates on two paths while neural nodes blink along the perimeter.',
    markup: `<div class="vl-matrix17i-neural-orbit" role="img" aria-label="Neural orbit veil">
      <span class="vl-matrix17i-veil" style="--d:0;--r:0deg"></span>
      <span class="vl-matrix17i-veil" style="--d:.17;--r:180deg"></span>
      <span class="vl-matrix17i-dot" style="--d:0"></span>
      <span class="vl-matrix17i-dot" style="--d:.25"></span>
      <span class="vl-matrix17i-dot" style="--d:.5"></span>
      <span class="vl-matrix17i-dot" style="--d:.75"></span>
    </div>`,
    css: `.vl-matrix17i-neural-orbit {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #21698f);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #061827 0 20%, #040913 68%);
}
.vl-matrix17i-veil {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 84px;
  height: 84px;
  margin: -42px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 76%, #e1f5ff);
  border-radius: 50%;
  transform: rotate(var(--r));
  animation: vl-matrix17i-veil calc(var(--loader-speed) * 1.6) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17i-dot {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6px;
  height: 6px;
  margin: -3px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 94%, #effaff);
  animation: vl-matrix17i-dot calc(var(--loader-speed) * 1.6) ease-in-out infinite;
}
.vl-matrix17i-dot:nth-child(3) { transform: rotate(0deg) translate(34px) scale(1); animation-delay: calc(var(--d) * 1s); }
.vl-matrix17i-dot:nth-child(4) { transform: rotate(90deg) translate(34px) scale(1); animation-delay: calc(calc(var(--d) + .25) * 1s); }
.vl-matrix17i-dot:nth-child(5) { transform: rotate(180deg) translate(34px) scale(1); animation-delay: calc(calc(var(--d) + .5) * 1s); }
.vl-matrix17i-dot:nth-child(6) { transform: rotate(270deg) translate(34px) scale(1); animation-delay: calc(calc(var(--d) + .75) * 1s); }
@keyframes vl-matrix17i-veil {
  0%, 100% { transform: rotate(var(--r)) scale(.62); opacity: .18; }
  50% { transform: rotate(calc(var(--r) + 180deg)) scale(1.06); opacity: .95; }
}
@keyframes vl-matrix17i-dot {
  0%, 100% { opacity: .16; transform: scale(.6); }
  50% { opacity: .95; transform: scale(1.1); }
}`
  },
  {
    id: 'matrix-cascade-ribbon-shift',
    name: 'Cascade Ribbon Shift',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Ribbon slices sweep over the matrix in a repeating cascade with timed opacity shifts.',
    markup: `<div class="vl-matrix17i-ribbon-shift" role="img" aria-label="Cascade ribbon shift">
      <span class="vl-matrix17i-ribbon" style="--y:18px;--d:0"></span>
      <span class="vl-matrix17i-ribbon" style="--y:40px;--d:.12"></span>
      <span class="vl-matrix17i-ribbon" style="--y:62px;--d:.24"></span>
      <span class="vl-matrix17i-ribbon" style="--y:84px;--d:.36"></span>
      <span class="vl-matrix17i-ribbon-core"></span>
    </div>`,
    css: `.vl-matrix17i-ribbon-shift {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6d97);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(148deg, #061a2a, #0a2f54 62%, #040913);
}
.vl-matrix17i-ribbon {
  position: absolute;
  left: 8px;
  top: var(--y);
  width: calc(100% - 16px);
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 84%, #e7f7ff), transparent);
  animation: vl-matrix17i-ribbon calc(var(--loader-speed) * 1.3) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17i-ribbon-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17i-ribbon-core calc(var(--loader-speed) * 1.3) linear infinite;
}
@keyframes vl-matrix17i-ribbon {
  0%, 100% { transform: scaleX(.48); opacity: .16; }
  50% { transform: scaleX(1); opacity: .95; }
}
@keyframes vl-matrix17i-ribbon-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.82); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.18); opacity: .95; }
}`
  },
  {
    id: 'matrix-halo-fracture-grid',
    name: 'Halo Fracture Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Grid fractures open as halos drift outward and collapse into a soft midpoint glow.',
    markup: `<div class="vl-matrix17i-halo-fracture" role="img" aria-label="Halo fracture grid">
      <span class="vl-matrix17i-fracture" style="--d:0;--s:14px"></span>
      <span class="vl-matrix17i-fracture" style="--d:.11;--s:26px"></span>
      <span class="vl-matrix17i-fracture" style="--d:.22;--s:38px"></span>
      <span class="vl-matrix17i-fracture" style="--d:.33;--s:50px"></span>
      <span class="vl-matrix17i-fracture" style="--d:.44;--s:62px"></span>
      <span class="vl-matrix17i-fracture-core"></span>
    </div>`,
    css: `.vl-matrix17i-halo-fracture {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f6a95);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #061929 0 22%, #040913 68%);
}
.vl-matrix17i-fracture {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--s);
  height: var(--s);
  margin: calc(var(--s) / -2);
  border: 1px dashed color-mix(in srgb, var(--loader-accent) 76%, #def2ff);
  border-radius: 2px;
  transform: rotate(45deg);
  animation: vl-matrix17i-fracture calc(var(--loader-speed) * 1.48) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17i-fracture-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17i-fracture-core calc(var(--loader-speed) * 1.48) ease-in-out infinite;
}
@keyframes vl-matrix17i-fracture {
  0%, 100% { transform: rotate(45deg) scale(.52); opacity: .16; }
  50% { transform: rotate(225deg) scale(1.06); opacity: .95; }
}
@keyframes vl-matrix17i-fracture-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.18); opacity: .96; }
}`
  },
  {
    id: 'matrix-scan-vector-pulse',
    name: 'Scan Vector Pulse',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A directional scan line pulses through vector markers on alternating rows.',
    markup: `<div class="vl-matrix17i-scan-pulse" role="img" aria-label="Scan vector pulse">
      <span class="vl-matrix17i-scan-line" style="--y:16px;--d:0"></span>
      <span class="vl-matrix17i-scan-line" style="--y:38px;--d:.15"></span>
      <span class="vl-matrix17i-scan-line" style="--y:60px;--d:.3"></span>
      <span class="vl-matrix17i-scan-line" style="--y:82px;--d:.45"></span>
    </div>`,
    css: `.vl-matrix17i-scan-pulse {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1e6991);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(162deg, #061726, #0a3050 62%, #040913);
}
.vl-matrix17i-scan-line {
  position: absolute;
  left: 0;
  top: var(--y);
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 82%, #e2f4ff), transparent);
  animation: vl-matrix17i-scan-line calc(var(--loader-speed) * 1.44) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17i-scan-line {
  0%, 100% { transform: scaleX(.5); opacity: .16; }
  50% { transform: scaleX(1); opacity: .95; }
}`
  },
  {
    id: 'matrix-radiant-orbit-grid',
    name: 'Radiant Orbit Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A radiant core drives orbiting nodes across the perimeter grid and folds them inward.',
    markup: `<div class="vl-matrix17i-radiant-orbit" role="img" aria-label="Radiant orbit grid">
      <span class="vl-matrix17i-orbit-node" style="--a:0deg;--d:0"></span>
      <span class="vl-matrix17i-orbit-node" style="--a:72deg;--d:.12"></span>
      <span class="vl-matrix17i-orbit-node" style="--a:144deg;--d:.24"></span>
      <span class="vl-matrix17i-orbit-node" style="--a:216deg;--d:.36"></span>
      <span class="vl-matrix17i-orbit-node" style="--a:288deg;--d:.48"></span>
      <span class="vl-matrix17i-radiant-core"></span>
    </div>`,
    css: `.vl-matrix17i-radiant-orbit {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #216c98);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #061927 0 20%, #040913 68%);
}
.vl-matrix17i-orbit-node {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #edf7ff);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 58%, transparent);
  transform: rotate(var(--a));
  animation: vl-matrix17i-orbit calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17i-radiant-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17i-radiant-core calc(var(--loader-speed) * 1.5) linear infinite;
}
@keyframes vl-matrix17i-orbit {
  0%, 100% { transform: rotate(var(--a)) scale(.58); opacity: .18; }
  50% { transform: rotate(calc(var(--a) + 180deg)) scale(1.04); opacity: .95; }
}
@keyframes vl-matrix17i-radiant-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  },
  {
    id: 'matrix-prism-arc-lens',
    name: 'Prism Arc Lens',
    category: 'Matrix',
    tech: 'CSS',
    description: 'An arced lens field refracts synchronized pulses while a central node phases through each sweep.',
    markup: `<div class="vl-matrix17i-prism-lens" role="img" aria-label="Prism arc lens">
      <span class="vl-matrix17i-prism-strand" style="--a:0deg;--d:0;--r:1"></span>
      <span class="vl-matrix17i-prism-strand" style="--a:72deg;--d:.12;--r:.82"></span>
      <span class="vl-matrix17i-prism-strand" style="--a:144deg;--d:.24;--r:.68"></span>
      <span class="vl-matrix17i-prism-strand" style="--a:216deg;--d:.36;--r:.52"></span>
      <span class="vl-matrix17i-prism-strand" style="--a:288deg;--d:.48;--r:.38"></span>
      <span class="vl-matrix17i-prism-core"></span>
    </div>`,
    css: `.vl-matrix17i-prism-lens {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6d97);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(160deg, #041426, #0b3051 58%, #040913);
}
.vl-matrix17i-prism-strand {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 78px;
  height: 78px;
  margin: -39px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 80%, #dff3ff);
  transform: rotate(var(--a));
  transform-origin: 50% 50%;
  animation: vl-matrix17i-prism-strand calc(var(--loader-speed) * 1.6) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17i-prism-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17i-prism-core calc(var(--loader-speed) * 1.6) linear infinite;
}
@keyframes vl-matrix17i-prism-strand {
  0%, 100% {
    transform: rotate(var(--a)) scaleX(.5);
    opacity: .16;
    border-color: color-mix(in srgb, var(--loader-accent) 76%, #dff3ff);
  }
  50% {
    transform: rotate(calc(var(--a) + 180deg)) scaleX(var(--r));
    opacity: .95;
    border-color: color-mix(in srgb, var(--loader-accent) 92%, #e9f8ff);
  }
}
@keyframes vl-matrix17i-prism-core {
  0%, 100% {
    transform: translate(-50%, -50%) scale(.8);
    opacity: .2;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.24);
    opacity: .96;
  }
}`
  }
];
