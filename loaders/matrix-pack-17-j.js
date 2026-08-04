export const matrixPack17LoadersJ = [
  {
    id: 'matrix-crescent-mirror-grid',
    name: 'Crescent Mirror Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Opposed crescent arcs mirror across a compact matrix grid with phase delay.',
    markup: `<div class="vl-matrix17j-crescent-grid" role="img" aria-label="Crescent mirror grid">
      <span class="vl-matrix17j-crescent" style="--d:0;--l:20px;--t:0px"></span>
      <span class="vl-matrix17j-crescent" style="--d:.12;--l:32px;--t:13px"></span>
      <span class="vl-matrix17j-crescent" style="--d:.24;--l:44px;--t:26px"></span>
      <span class="vl-matrix17j-crescent" style="--d:.36;--l:56px;--t:39px"></span>
      <span class="vl-matrix17j-crescent" style="--d:.48;--l:32px;--t:52px"></span>
      <span class="vl-matrix17j-crescent-center"></span>
    </div>`,
    css: `.vl-matrix17j-crescent-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f6f98);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #051f36 0 18%, #040b14 68%);
}
.vl-matrix17j-crescent {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--l);
  height: 24px;
  margin-top: -12px;
  margin-left: calc(var(--l) / -2);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, #dff4ff);
  border-radius: 50%;
  border-width: 0 0 2px;
  transform: translateY(var(--t));
  opacity: .2;
  animation: vl-matrix17j-crescent calc(var(--loader-speed) * 1.55) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17j-crescent-center {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17j-crescent-core calc(var(--loader-speed) * 1.55) linear infinite;
}
@keyframes vl-matrix17j-crescent {
  0%, 100% { transform: translateY(var(--t)) scaleX(.44); opacity: .15; }
  50% { transform: translateY(calc(var(--t) + 2px)) scaleX(1); opacity: .95; }
}
@keyframes vl-matrix17j-crescent-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.82); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.24); opacity: .95; }
}`
  },
  {
    id: 'matrix-vector-noise-tracer',
    name: 'Vector Noise Tracer',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Vertical trace lines sweep through a noisy vector lattice with synchronized fading.',
    markup: `<div class="vl-matrix17j-noise-tracer" role="img" aria-label="Vector noise tracer">
      <span class="vl-matrix17j-noise" style="--x:10px;--d:0"></span>
      <span class="vl-matrix17j-noise" style="--x:35px;--d:.1"></span>
      <span class="vl-matrix17j-noise" style="--x:60px;--d:.2"></span>
      <span class="vl-matrix17j-noise" style="--x:85px;--d:.3"></span>
      <span class="vl-matrix17j-noise" style="--x:110px;--d:.4"></span>
      <span class="vl-matrix17j-noise" style="--x:135px;--d:.5"></span>
      <span class="vl-matrix17j-noise" style="--x:160px;--d:.6"></span>
      <span class="vl-matrix17j-noise-core"></span>
    </div>`,
    css: `.vl-matrix17j-noise-tracer {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1f6a94);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(155deg, #051724, #0a2f53 62%, #040913);
}
.vl-matrix17j-noise {
  position: absolute;
  left: var(--x);
  top: 0;
  width: 1px;
  height: 108px;
  transform-origin: top;
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 92%, #e2f6ff), transparent);
  opacity: .17;
  animation: vl-matrix17j-noise calc(var(--loader-speed) * 1.45) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17j-noise::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    180deg,
    color-mix(in srgb, var(--loader-accent) 74%, transparent) 0 8px,
    transparent 8px 16px
  );
}
.vl-matrix17j-noise-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17j-noise-core calc(var(--loader-speed) * 1.45) linear infinite;
}
@keyframes vl-matrix17j-noise {
  0%, 100% { opacity: .14; transform: translateY(-8px); }
  50% { opacity: .95; transform: translateY(6px); }
}
@keyframes vl-matrix17j-noise-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.18); opacity: .95; }
}`
  },
  {
    id: 'matrix-helix-node-scan',
    name: 'Helix Node Scan',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A helix chain of nodes scans upward while nodes flicker at each knot.',
    markup: `<div class="vl-matrix17j-helix-scan" role="img" aria-label="Helix node scan">
      <span class="vl-matrix17j-helix-node" style="--x:0px;--d:0"></span>
      <span class="vl-matrix17j-helix-node" style="--x:2px;--d:.12"></span>
      <span class="vl-matrix17j-helix-node" style="--x:4px;--d:.24"></span>
      <span class="vl-matrix17j-helix-node" style="--x:6px;--d:.36"></span>
      <span class="vl-matrix17j-helix-node" style="--x:8px;--d:.48"></span>
      <span class="vl-matrix17j-helix-core"></span>
    </div>`,
    css: `.vl-matrix17j-helix-scan {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6e96);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(165deg, #051925, #0a3150 62%, #040911);
}
.vl-matrix17j-helix-node {
  position: absolute;
  left: 50%;
  top: 100%;
  width: 7px;
  height: 7px;
  margin-left: calc(var(--x) - 3px);
  margin-top: -3px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 92%, #edf8ff);
  box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 56%, transparent);
  animation: vl-matrix17j-helix calc(var(--loader-speed) * 1.5) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17j-helix-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17j-helix-core calc(var(--loader-speed) * 1.5) linear infinite;
}
@keyframes vl-matrix17j-helix {
  0% { transform: translate(-50%, -120px) scale(.55); opacity: .16; }
  50% { transform: translate(-50%, -54px) scale(1); opacity: .95; }
  100% { transform: translate(-50%, 24px) scale(.55); opacity: .16; }
}
@keyframes vl-matrix17j-helix-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.82); opacity: .24; }
  50% { transform: translate(-50%, -50%) scale(1.18); opacity: .95; }
}`
  },
  {
    id: 'matrix-diffraction-rhombus-rings',
    name: 'Diffraction Rhombus Rings',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Rhombus layers rotate with diffraction-like ring expansion across the canvas.',
    markup: `<div class="vl-matrix17j-diffraction-rings" role="img" aria-label="Diffraction rhombus rings">
      <span class="vl-matrix17j-rhombus" style="--d:0;--s:22px;--r:0deg"></span>
      <span class="vl-matrix17j-rhombus" style="--d:.14;--s:34px;--r:18deg"></span>
      <span class="vl-matrix17j-rhombus" style="--d:.28;--s:46px;--r:36deg"></span>
      <span class="vl-matrix17j-rhombus" style="--d:.42;--s:58px;--r:54deg"></span>
      <span class="vl-matrix17j-rhombus" style="--d:.56;--s:70px;--r:72deg"></span>
      <span class="vl-matrix17j-rhombus-core"></span>
    </div>`,
    css: `.vl-matrix17j-diffraction-rings {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f6d95);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #061b31 0 18%, #040a12 68%);
}
.vl-matrix17j-rhombus {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--s);
  height: calc(var(--s) - 10px);
  margin: calc((var(--s) - 10px) / -2 - 5px) 0 0 calc(var(--s) / -2);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 82%, #dcf2ff);
  transform: rotate(var(--r));
  transform-origin: 50% 50%;
  clip-path: polygon(50% 3%, 100% 50%, 50% 97%, 0% 50%);
  animation: vl-matrix17j-rhombus calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17j-rhombus-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17j-rhombus-core calc(var(--loader-speed) * 1.5) linear infinite;
}
@keyframes vl-matrix17j-rhombus {
  0%, 100% { transform: rotate(var(--r)) scale(.5); opacity: .14; }
  50% { transform: rotate(calc(var(--r) + 180deg)) scale(1.04); opacity: .94; }
}
@keyframes vl-matrix17j-rhombus-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .96; }
}`
  },
  {
    id: 'matrix-spectral-arc-pulse',
    name: 'Spectral Arc Pulse',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Arcs pulse from spectral edges and sweep back through the matrix center.',
    markup: `<div class="vl-matrix17j-spectral-arc" role="img" aria-label="Spectral arc pulse">
      <span class="vl-matrix17j-arc" style="--a:0deg;--d:0"></span>
      <span class="vl-matrix17j-arc" style="--a:72deg;--d:.12"></span>
      <span class="vl-matrix17j-arc" style="--a:144deg;--d:.24"></span>
      <span class="vl-matrix17j-arc" style="--a:216deg;--d:.36"></span>
      <span class="vl-matrix17j-arc" style="--a:288deg;--d:.48"></span>
      <span class="vl-matrix17j-arc-core"></span>
    </div>`,
    css: `.vl-matrix17j-spectral-arc {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6f97);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(155deg, #06192d, #0a3251 62%, #040914);
}
.vl-matrix17j-arc {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 94px;
  height: 58px;
  margin-left: -47px;
  margin-top: -29px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 76%, #dff4ff);
  border-radius: 0 0 84px 84px;
  border-top-color: transparent;
  transform: rotate(var(--a));
  animation: vl-matrix17j-arc calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17j-arc-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17j-arc-core calc(var(--loader-speed) * 1.55) linear infinite;
}
@keyframes vl-matrix17j-arc {
  0%, 100% { transform: rotate(var(--a)) scaleX(.55); opacity: .16; }
  50% { transform: rotate(calc(var(--a) + 180deg)) scaleX(1.02); opacity: .95; }
}
@keyframes vl-matrix17j-arc-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .96; }
}`
  },
  {
    id: 'matrix-fractal-axon-rift',
    name: 'Fractal Axon Rift',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Fractal axon traces branch across diagonals and fold into a bright rift center.',
    markup: `<div class="vl-matrix17j-fractal-axon" role="img" aria-label="Fractal axon rift">
      <span class="vl-matrix17j-fractal-branch" style="--x:18px;--y:12px;--d:0"></span>
      <span class="vl-matrix17j-fractal-branch" style="--x:66px;--y:18px;--d:.12"></span>
      <span class="vl-matrix17j-fractal-branch" style="--x:114px;--y:22px;--d:.24"></span>
      <span class="vl-matrix17j-fractal-branch" style="--x:162px;--y:24px;--d:.36"></span>
      <span class="vl-matrix17j-fractal-core"></span>
    </div>`,
    css: `.vl-matrix17j-fractal-axon {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f6c95);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #051d34 0 18%, #040b13 68%);
}
.vl-matrix17j-fractal-branch {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: -4px;
  background: color-mix(in srgb, var(--loader-accent) 90%, #e9f7ff);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 56%, transparent);
  animation: vl-matrix17j-fractal calc(var(--loader-speed) * 1.38) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17j-fractal-branch:nth-child(1) { animation-delay: calc(0s + var(--d)); }
.vl-matrix17j-fractal-branch:nth-child(2) { animation-delay: calc(.15s + var(--d)); }
.vl-matrix17j-fractal-branch:nth-child(3) { animation-delay: calc(.3s + var(--d)); }
.vl-matrix17j-fractal-branch:nth-child(4) { animation-delay: calc(.45s + var(--d)); }
.vl-matrix17j-fractal-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17j-fractal-core calc(var(--loader-speed) * 1.38) linear infinite;
}
@keyframes vl-matrix17j-fractal {
  0%, 100% { transform: scale(.6) translateY(0); opacity: .18; }
  50% { transform: scale(1.13) translateY(-8px); opacity: .94; }
}
@keyframes vl-matrix17j-fractal-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  },
  {
    id: 'matrix-photon-fleck-grid',
    name: 'Photon Fleck Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Sparse photon flecks flicker into and out across a fine matrix lattice.',
    markup: `<div class="vl-matrix17j-photon-fleck" role="img" aria-label="Photon fleck grid">
      <span class="vl-matrix17j-fleck" style="--x:12px;--y:14px;--d:0"></span>
      <span class="vl-matrix17j-fleck" style="--x:46px;--y:36px;--d:.1"></span>
      <span class="vl-matrix17j-fleck" style="--x:80px;--y:18px;--d:.2"></span>
      <span class="vl-matrix17j-fleck" style="--x:114px;--y:56px;--d:.3"></span>
      <span class="vl-matrix17j-fleck" style="--x:148px;--y:14px;--d:.4"></span>
      <span class="vl-matrix17j-fleck" style="--x:182px;--y:36px;--d:.5"></span>
      <span class="vl-matrix17j-fleck-core"></span>
    </div>`,
    css: `.vl-matrix17j-photon-fleck {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f6c96);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(168deg, #051725, #0a2f53 62%, #040a15);
}
.vl-matrix17j-fleck {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 6px;
  height: 6px;
  margin: -3px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 92%, #e7f6ff);
  box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 56%, transparent);
  animation: vl-matrix17j-fleck calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17j-fleck-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17j-fleck-core calc(var(--loader-speed) * 1.5) linear infinite;
}
@keyframes vl-matrix17j-fleck {
  0%, 100% { opacity: .14; transform: scale(.55); }
  50% { opacity: .95; transform: scale(1.5); }
}
@keyframes vl-matrix17j-fleck-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  },
  {
    id: 'matrix-quantum-orbit-thread',
    name: 'Quantum Orbit Thread',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Thread-like pulses orbit a quantum ring and flicker at each docking interval.',
    markup: `<div class="vl-matrix17j-quantum-orbit" role="img" aria-label="Quantum orbit thread">
      <span class="vl-matrix17j-thread" style="--a:0deg;--d:0"></span>
      <span class="vl-matrix17j-thread" style="--a:72deg;--d:.11"></span>
      <span class="vl-matrix17j-thread" style="--a:144deg;--d:.22"></span>
      <span class="vl-matrix17j-thread" style="--a:216deg;--d:.33"></span>
      <span class="vl-matrix17j-thread" style="--a:288deg;--d:.44"></span>
      <span class="vl-matrix17j-orbit-core"></span>
    </div>`,
    css: `.vl-matrix17j-quantum-orbit {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1f6f97);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #051e30 0 20%, #040b12 68%);
}
.vl-matrix17j-thread {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 80px;
  height: 2px;
  transform-origin: 0 50%;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 80%, #dff5ff), transparent);
  opacity: .16;
  transform: rotate(var(--a));
  animation: vl-matrix17j-thread calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17j-orbit-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17j-orbit-core calc(var(--loader-speed) * 1.5) linear infinite;
}
@keyframes vl-matrix17j-thread {
  0%, 100% { transform: rotate(var(--a)) scaleX(.52); opacity: .14; }
  50% { transform: rotate(calc(var(--a) + 180deg)) scaleX(1); opacity: .95; }
}
@keyframes vl-matrix17j-orbit-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.22); opacity: .95; }
}`
  },
  {
    id: 'matrix-lumen-cascade-chain',
    name: 'Lumen Cascade Chain',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A chain of luminous bars cascades down and then folds back to the center.',
    markup: `<div class="vl-matrix17j-lumen-chain" role="img" aria-label="Lumen cascade chain">
      <span class="vl-matrix17j-lumen" style="--d:0;--y:10px"></span>
      <span class="vl-matrix17j-lumen" style="--d:.12;--y:22px"></span>
      <span class="vl-matrix17j-lumen" style="--d:.24;--y:34px"></span>
      <span class="vl-matrix17j-lumen" style="--d:.36;--y:46px"></span>
      <span class="vl-matrix17j-lumen" style="--d:.48;--y:58px"></span>
      <span class="vl-matrix17j-lumen" style="--d:.6;--y:70px"></span>
      <span class="vl-matrix17j-lumen-core"></span>
    </div>`,
    css: `.vl-matrix17j-lumen-chain {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6c94);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(162deg, #061a2f, #0a3153 62%, #040816);
}
.vl-matrix17j-lumen {
  position: absolute;
  left: 8px;
  top: var(--y);
  width: calc(100% - 16px);
  height: 4px;
  border-radius: 99px;
  background: color-mix(in srgb, var(--loader-accent) 84%, #def4ff);
  opacity: .2;
  animation: vl-matrix17j-lumen calc(var(--loader-speed) * 1.45) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17j-lumen-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17j-lumen-core calc(var(--loader-speed) * 1.45) linear infinite;
}
@keyframes vl-matrix17j-lumen {
  0%, 100% { transform: scaleX(.44); opacity: .14; }
  50% { transform: scaleX(1); opacity: .95; }
}
@keyframes vl-matrix17j-lumen-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .96; }
}`
  },
  {
    id: 'matrix-glyph-wave-hall',
    name: 'Glyph Wave Hall',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Glyph-like wave pings move through a hall-like corridor with mirrored phase timing.',
    markup: `<div class="vl-matrix17j-glyph-hall" role="img" aria-label="Glyph wave hall">
      <span class="vl-matrix17j-glyph" style="--x:4px;--d:0"></span>
      <span class="vl-matrix17j-glyph" style="--x:38px;--d:.12"></span>
      <span class="vl-matrix17j-glyph" style="--x:72px;--d:.24"></span>
      <span class="vl-matrix17j-glyph" style="--x:106px;--d:.36"></span>
      <span class="vl-matrix17j-glyph" style="--x:140px;--d:.48"></span>
      <span class="vl-matrix17j-glyph" style="--x:174px;--d:.6"></span>
      <span class="vl-matrix17j-glyph-core"></span>
    </div>`,
    css: `.vl-matrix17j-glyph-hall {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6d97);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #051b33 0 18%, #040811 68%);
}
.vl-matrix17j-glyph {
  position: absolute;
  left: var(--x);
  top: 52%;
  width: 12px;
  height: 12px;
  margin: -6px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 86%, #e4f5ff);
  transform-origin: 50% 0;
  animation: vl-matrix17j-glyph calc(var(--loader-speed) * 1.38) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17j-glyph-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17j-glyph-core calc(var(--loader-speed) * 1.38) linear infinite;
}
@keyframes vl-matrix17j-glyph {
  0%, 100% { transform: translateY(-22px) scale(.5); opacity: .16; }
  50% { transform: translateY(22px) scale(1.06); opacity: .95; }
}
@keyframes vl-matrix17j-glyph-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.18); opacity: .95; }
}`
  }
];
