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

  {
    id: 'matrix-halo-surge',
    name: 'Halo Surge',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Soft halo spikes surge forward and fade in alternating rhythm.',
    markup: `<div class="vl-cat-matrix-halo-surge" role="img" aria-label="Halo surge">
      <span class="p p1"></span>
      <span class="p p2"></span>
      <span class="p p3"></span>
      <span class="p p4"></span>
      <span class="core"></span>
    </div>`,
    css: `.vl-cat-matrix-halo-surge {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5f89);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
}
.vl-cat-matrix-halo-surge .p {
  position: absolute;
  left: 50%;
  bottom: 12px;
  width: 10px;
  height: 12px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 90%, #fff 12%);
  transform-origin: 50% 82%;
}
.vl-cat-matrix-halo-surge .p1 { animation: vl-cat-matrix-halo-surge-dot calc(var(--loader-speed) * 1.4) ease-in-out infinite; }
.vl-cat-matrix-halo-surge .p2 { left: 58px; animation: vl-cat-matrix-halo-surge-dot calc(var(--loader-speed) * 1.4) ease-in-out -0.35s infinite; }
.vl-cat-matrix-halo-surge .p3 { left: 95px; animation: vl-cat-matrix-halo-surge-dot calc(var(--loader-speed) * 1.4) ease-in-out -0.7s infinite; }
.vl-cat-matrix-halo-surge .p4 { left: 132px; animation: vl-cat-matrix-halo-surge-dot calc(var(--loader-speed) * 1.4) ease-in-out -1.05s infinite; }
.vl-cat-matrix-halo-surge .core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 88%, #fff 12%);
  animation: vl-cat-matrix-halo-surge-core calc(var(--loader-speed) * 1.6) ease-in-out infinite;
}
@keyframes vl-cat-matrix-halo-surge-dot {
  0%, 100% { transform: translateX(-50%) scaleY(.25); opacity: .2; }
  50% { transform: translateX(-50%) scaleY(1); opacity: 1; }
}
@keyframes vl-cat-matrix-halo-surge-core {
  0%,100% { transform: translate(-50%, -50%) scale(.7); }
  50% { transform: translate(-50%, -50%) scale(1.15); }
}`
  },

  {
    id: 'matrix-wave-mosaic',
    name: 'Wave Mosaic',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A narrow mosaic of wave bars rises and falls through a fixed frame.',
    markup: `<div class="vl-cat-matrix-wave-mosaic" role="img" aria-label="Wave mosaic">
      <span style="--x:10px; --d:0; --h:34px"></span>
      <span style="--x:30px; --d:.1; --h:46px"></span>
      <span style="--x:50px; --d:.2; --h:54px"></span>
      <span style="--x:70px; --d:.3; --h:40px"></span>
      <span style="--x:90px; --d:.4; --h:48px"></span>
      <span style="--x:110px; --d:.5; --h:36px"></span>
      <span style="--x:130px; --d:.6; --h:52px"></span>
      <span style="--x:150px; --d:.7; --h:44px"></span>
    </div>`,
    css: `.vl-cat-matrix-wave-mosaic {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5f89);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(165deg, #061b33, #041725 62%, #040d14);
}
.vl-cat-matrix-wave-mosaic span {
  position: absolute;
  left: var(--x);
  bottom: 10px;
  width: 8px;
  height: var(--h);
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 85%, #fff 12%);
  transform-origin: bottom;
  animation: vl-cat-matrix-wave-mosaic-wave calc(var(--loader-speed) * 1.2) ease-in-out infinite;
  animation-delay: calc(var(--d) * -1s);
}
@keyframes vl-cat-matrix-wave-mosaic-wave {
  0%,100% { transform: scaleY(.38); opacity: .18; }
  50% { transform: scaleY(1); opacity: .95; }
}`
  },

  {
    id: 'matrix-matrix-rail-splice',
    name: 'Matrix Rail Splice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Pulse rails splice sequentially and bounce to reveal a chain matrix.',
    markup: `<div class="vl-cat-matrix-rail-splice" role="img" aria-label="Matrix rail splice">
      <span class="rail" style="--y:18px; --d:0"></span>
      <span class="rail" style="--y:38px; --d:.14"></span>
      <span class="rail" style="--y:58px; --d:.28"></span>
      <span class="rail" style="--y:78px; --d:.42"></span>
    </div>`,
    css: `.vl-cat-matrix-rail-splice {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5f89);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
}
.vl-cat-matrix-rail-splice .rail {
  position: absolute;
  left: 10px;
  top: var(--y);
  width: 168px;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 82%, #fff 14%), transparent);
  animation: vl-cat-matrix-rail-splice-line calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * -1.2s);
}
@keyframes vl-cat-matrix-rail-splice-line {
  0%,100% { opacity: .2; transform: scaleX(.26); }
  50% { opacity: 1; transform: scaleX(1); }
}`
  },

  {
    id: 'matrix-node-cascade',
    name: 'Node Cascade',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Nodes cascade down the frame and recycle with smooth opacity pulses.',
    markup: `<div class="vl-cat-matrix-node-cascade" role="img" aria-label="Node cascade">
      <span style="--d:0"></span>
      <span style="--d:.1"></span>
      <span style="--d:.2"></span>
      <span style="--d:.3"></span>
      <span style="--d:.4"></span>
      <span style="--d:.5"></span>
      <span style="--d:.6"></span>
      <span style="--d:.7"></span>
    </div>`,
    css: `.vl-cat-matrix-node-cascade {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5f89);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #061a2e, #040d16 70%);
}
.vl-cat-matrix-node-cascade span {
  position: absolute;
  left: 50%;
  width: 9px;
  height: 9px;
  margin-left: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #fff 10%);
  animation: vl-cat-matrix-node-cascade-drop calc(var(--loader-speed) * 1.5) linear infinite;
  animation-delay: calc(var(--d) * -1.2s);
  top: calc(var(--d) * 86px);
}
@keyframes vl-cat-matrix-node-cascade-drop {
  0% { transform: translateY(-110px); opacity: .1; }
  30% { opacity: 1; }
  100% { transform: translateY(110px); opacity: .1; }
}`
  },

  {
    id: 'matrix-pulse-bridge',
    name: 'Pulse Bridge',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Paired pulse bridges expand and fold back at opposite phases.',
    markup: `<div class="vl-cat-matrix-pulse-bridge" role="img" aria-label="Pulse bridge">
      <span class="beam left"></span>
      <span class="beam right"></span>
      <span class="bridge"></span>
    </div>`,
    css: `.vl-cat-matrix-pulse-bridge {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5f89);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
}
.vl-cat-matrix-pulse-bridge .beam {
  position: absolute;
  top: 50%;
  width: 64px;
  height: 6px;
  background: color-mix(in srgb, var(--loader-accent) 82%, #fff 10%);
  animation: vl-cat-matrix-pulse-bridge-beam calc(var(--loader-speed) * 1.4) ease-in-out infinite;
}
.vl-cat-matrix-pulse-bridge .left { left: 16px; transform-origin: 100% 50%; }
.vl-cat-matrix-pulse-bridge .right { right: 16px; transform-origin: 0 50%; }
.vl-cat-matrix-pulse-bridge .bridge {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #fff 10%);
  animation: vl-cat-matrix-pulse-bridge-core calc(var(--loader-speed) * 1.4) ease-in-out infinite;
}
@keyframes vl-cat-matrix-pulse-bridge-beam {
  0%,100% { transform: scaleX(.56); opacity: .16; }
  50% { transform: scaleX(1); opacity: 1; }
}
@keyframes vl-cat-matrix-pulse-bridge-core {
  0%,100% { transform: scale(.7); }
  50% { transform: scale(1.25); }
}`
  },

  {
    id: 'matrix-lensline-drift',
    name: 'Lensline Drift',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Crossing lens lines drift with staggered opacity and gentle compression.',
    markup: `<div class="vl-cat-matrix-lensline-drift" role="img" aria-label="Lensline drift">
      <span style="--d:0"></span>
      <span style="--d:.15"></span>
      <span style="--d:.3"></span>
      <span style="--d:.45"></span>
      <span style="--d:.6"></span>
      <span style="--d:.75"></span>
    </div>`,
    css: `.vl-cat-matrix-lensline-drift {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5f89);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(20deg, #071e34, #091f37 58%, #040d15);
}
.vl-cat-matrix-lensline-drift span {
  position: absolute;
  left: 5px;
  top: 0;
  width: 180px;
  height: 2px;
  background: color-mix(in srgb, var(--loader-accent) 70%, #d8f1ff);
  animation: vl-cat-matrix-lensline-drift-line calc(var(--loader-speed) * 1.2) ease-in-out infinite;
  animation-delay: calc(var(--d) * -1.4s);
}
.vl-cat-matrix-lensline-drift span:nth-child(2) { top: 21px; }
.vl-cat-matrix-lensline-drift span:nth-child(3) { top: 42px; }
.vl-cat-matrix-lensline-drift span:nth-child(4) { top: 63px; }
.vl-cat-matrix-lensline-drift span:nth-child(5) { top: 84px; }
.vl-cat-matrix-lensline-drift span:nth-child(6) { top: 105px; }
@keyframes vl-cat-matrix-lensline-drift-line {
  0%,100% { opacity: .15; transform: scaleX(.6); }
  50% { opacity: .9; transform: scaleX(1.04); }
}`
  },

  {
    id: 'matrix-orbit-stack',
    name: 'Orbit Stack',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Nested orbit stacks alternate glow and radius rhythm.',
    markup: `<div class="vl-cat-matrix-orbit-stack" role="img" aria-label="Orbit stack">
      <span class="orbit o1"></span>
      <span class="orbit o2"></span>
      <span class="orbit o3"></span>
    </div>`,
    css: `.vl-cat-matrix-orbit-stack {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5f89);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
}
.vl-cat-matrix-orbit-stack .orbit {
  position: absolute;
  left: 50%;
  top: 54px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 80%, #ebf9ff);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: vl-cat-matrix-orbit-stack-spin calc(var(--loader-speed) * 1.5) linear infinite;
}
.vl-cat-matrix-orbit-stack .o1 { width: 34px; height: 34px; animation-duration: 1.2s; }
.vl-cat-matrix-orbit-stack .o2 { width: 60px; height: 60px; animation-duration: 1.8s; animation-direction: reverse; }
.vl-cat-matrix-orbit-stack .o3 { width: 86px; height: 86px; animation-duration: 2.5s; border-style: dashed; }
@keyframes vl-cat-matrix-orbit-stack-spin {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}`
  },

  {
    id: 'matrix-halo-cascade',
    name: 'Halo Cascade',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Multiple halos cascade through expanding radii with soft bloom.',
    markup: `<div class="vl-cat-matrix-halo-cascade" role="img" aria-label="Halo cascade">
      <span class="h1"></span>
      <span class="h2"></span>
      <span class="h3"></span>
      <span class="h4"></span>
    </div>`,
    css: `.vl-cat-matrix-halo-cascade {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5f89);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
}
.vl-cat-matrix-halo-cascade .h1,
.vl-cat-matrix-halo-cascade .h2,
.vl-cat-matrix-halo-cascade .h3,
.vl-cat-matrix-halo-cascade .h4 {
  position: absolute;
  left: 50%;
  top: 54px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, #f6fcff);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: vl-cat-matrix-halo-cascade-ring calc(var(--loader-speed) * 1.6) ease-in-out infinite;
}
.vl-cat-matrix-halo-cascade .h1 { width: 26px; height: 26px; animation-delay: 0s; }
.vl-cat-matrix-halo-cascade .h2 { width: 44px; height: 44px; animation-delay: -0.4s; }
.vl-cat-matrix-halo-cascade .h3 { width: 62px; height: 62px; animation-delay: -0.8s; }
.vl-cat-matrix-halo-cascade .h4 { width: 80px; height: 80px; animation-delay: -1.2s; }
@keyframes vl-cat-matrix-halo-cascade-ring {
  0% { opacity: .16; transform: translate(-50%, -50%) scale(.35); }
  50% { opacity: .86; transform: translate(-50%, -50%) scale(1.05); }
  100% { opacity: .16; transform: translate(-50%, -50%) scale(.35); }
}`
  },

  {
    id: 'matrix-fragmented-beat',
    name: 'Fragmented Beat',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Beat fragments rotate around a central node in short synchronized bursts.',
    markup: `<div class="vl-cat-matrix-fragmented-beat" role="img" aria-label="Fragmented beat">
      <span style="--a:0; --d:0"></span>
      <span style="--a:45deg; --d:.12"></span>
      <span style="--a:90deg; --d:.24"></span>
      <span style="--a:135deg; --d:.36"></span>
      <span style="--a:180deg; --d:.48"></span>
      <span style="--a:225deg; --d:.6"></span>
      <span class="core"></span>
    </div>`,
    css: `.vl-cat-matrix-fragmented-beat {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5f89);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(142deg, #06152a, #0b2b49 54%, #040d14);
}
.vl-cat-matrix-fragmented-beat span {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 88%, #fff 10%);
  transform: rotate(var(--a)) translate(42px);
  animation: vl-cat-matrix-fragmented-beat-dot calc(var(--loader-speed) * 1.3) linear infinite;
  animation-delay: calc(var(--d) * -1.1s);
}
.vl-cat-matrix-fragmented-beat .core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #fff 10%);
  animation: vl-cat-matrix-fragmented-beat-core calc(var(--loader-speed) * 1.6) ease-in-out infinite;
}
@keyframes vl-cat-matrix-fragmented-beat-dot {
  0%,100% { opacity: .15; }
  50% { opacity: .96; }
}
@keyframes vl-cat-matrix-fragmented-beat-core {
  0%,100% { transform: scale(.8); }
  50% { transform: scale(1.2); }
}`
  },

  {
    id: 'matrix-lattice-thrum',
    name: 'Lattice Thrum',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A tiny lattice matrix thrum drifts through diagonal offsets.',
    markup: `<div class="vl-cat-matrix-lattice-thrum" role="img" aria-label="Lattice thrum">
      <span class="x" style="--x:12; --y:12; --d:0"></span>
      <span class="x" style="--x:44; --y:12; --d:.12"></span>
      <span class="x" style="--x:76; --y:12; --d:.24"></span>
      <span class="x" style="--x:108; --y:12; --d:.36"></span>
      <span class="x" style="--x:140; --y:12; --d:.48"></span>
      <span class="x" style="--x:172; --y:12; --d:.6"></span>
      <span class="y" style="--x:12; --y:74; --d:.12"></span>
      <span class="y" style="--x:44; --y:74; --d:.24"></span>
      <span class="y" style="--x:76; --y:74; --d:.36"></span>
      <span class="y" style="--x:108; --y:74; --d:.48"></span>
      <span class="y" style="--x:140; --y:74; --d:.6"></span>
      <span class="y" style="--x:172; --y:74; --d:.72"></span>
      <span class="core"></span>
    </div>`,
    css: `.vl-cat-matrix-lattice-thrum {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5f89);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #061b2e, #071f35);
}
.vl-cat-matrix-lattice-thrum .x,
.vl-cat-matrix-lattice-thrum .y {
  position: absolute;
  width: 9px;
  height: 9px;
  left: calc(var(--x) * 1px);
  top: calc(var(--y) * 1px);
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 88%, #f0faff);
  animation: vl-cat-matrix-lattice-thrum-pulse calc(var(--loader-speed) * 1.2) ease-in-out infinite;
  animation-delay: calc(var(--d) * -1.2s);
}
.vl-cat-matrix-lattice-thrum .core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #fff 10%);
  animation: vl-cat-matrix-lattice-thrum-core calc(var(--loader-speed) * 1.4) ease-in-out infinite;
}
@keyframes vl-cat-matrix-lattice-thrum-pulse {
  0%,100% { transform: scale(.68); opacity: .18; }
  50% { transform: scale(1.14); opacity: .95; }
}
@keyframes vl-cat-matrix-lattice-thrum-core {
  0%,100% { transform: scale(.75); }
  50% { transform: scale(1.2); }
}`
  }
];
