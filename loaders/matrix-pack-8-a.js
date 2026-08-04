export const matrixPack8LoadersA = [
  {
    id: 'matrix-crystal-rhythm-grid',
    name: 'Crystal Rhythm Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Faceted nodes pulse in a resonant rhythm across a crystalline field.',
    markup: `<div class="vl-matrix8-crystal-grid" aria-hidden="true">
      <span class="vl-matrix8-crystal-dot" style="--x:18px;--y:14px;--d:0"></span>
      <span class="vl-matrix8-crystal-dot" style="--x:50px;--y:22px;--d:.12"></span>
      <span class="vl-matrix8-crystal-dot" style="--x:82px;--y:14px;--d:.24"></span>
      <span class="vl-matrix8-crystal-dot" style="--x:114px;--y:22px;--d:.36"></span>
      <span class="vl-matrix8-crystal-dot" style="--x:146px;--y:14px;--d:.48"></span>
      <span class="vl-matrix8-crystal-band" style="--y:50px;--d:0"></span>
      <span class="vl-matrix8-crystal-band" style="--y:64px;--d:.18"></span>
      <span class="vl-matrix8-crystal-core"></span>
    </div>`,
    css: `.vl-matrix8-crystal-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #1a4f7e);
  border-radius: 14px;
  overflow: hidden;
  background: repeating-linear-gradient(135deg, #051323 0 12px, #07203e 12px 24px);
}
.vl-matrix8-crystal-dot {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 80%, #fff);
  transform: rotate(45deg);
  animation: vl-matrix8-crystal-dot calc(var(--loader-speed) * 1.4) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix8-crystal-band {
  position: absolute;
  left: 18px;
  top: var(--y);
  width: 155px;
  height: 3px;
  border-radius: 3px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 84%, #fff), transparent);
  opacity: .35;
  animation: vl-matrix8-crystal-band calc(var(--loader-speed) * 1.6) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix8-crystal-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix8-crystal-core calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
@keyframes vl-matrix8-crystal-dot {
  0%, 100% { transform: rotate(45deg) scale(.45); opacity: .2; }
  50% { transform: rotate(45deg) scale(1.06); opacity: .95; }
}
@keyframes vl-matrix8-crystal-band {
  0%, 100% { opacity: .24; transform: scaleX(.45); }
  50% { opacity: .95; transform: scaleX(1); }
}
@keyframes vl-matrix8-crystal-core {
  0%, 100% { transform: scale(.52); opacity: .22; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-drift-line-lattice',
    name: 'Drift Line Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Line fragments drift diagonally then rebind along a shared processing rhythm.',
    markup: `<div class="vl-matrix8-drift-lattice" aria-hidden="true">
      <span class="vl-matrix8-line" style="--d:0;--p:12"></span>
      <span class="vl-matrix8-line" style="--d:.13;--p:44"></span>
      <span class="vl-matrix8-line" style="--d:.26;--p:76"></span>
      <span class="vl-matrix8-line" style="--d:.39;--p:108"></span>
      <span class="vl-matrix8-line" style="--d:.52;--p:140"></span>
      <span class="vl-matrix8-line-core"></span>
    </div>`,
    css: `.vl-matrix8-drift-lattice {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #18567e);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(165deg, #041625, #072744 60%, #04111b);
}
.vl-matrix8-line {
  position: absolute;
  left: calc(var(--p) * 1px);
  top: -30px;
  width: 1px;
  height: 170px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 10%, transparent), color-mix(in srgb, var(--loader-accent) 84%, #dff2ff), color-mix(in srgb, var(--loader-accent) 10%, transparent));
  opacity: .12;
  transform-origin: center;
  animation: vl-matrix8-drift-line calc(var(--loader-speed) * 1.8) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix8-line-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix8-drift-core calc(var(--loader-speed) * 1.15) cubic-bezier(.25, 1, .5, 1) infinite;
}
@keyframes vl-matrix8-drift-line {
  0% { transform: rotate(-18deg) translateY(0); opacity: .1; }
  52% { opacity: .9; }
  100% { transform: rotate(18deg) translateY(-18px); opacity: .1; }
}
@keyframes vl-matrix8-drift-core {
  0%, 100% { transform: scale(.58); opacity: .24; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-ionic-vector-pulse',
    name: 'Ionic Vector Pulse',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Diagonal vectors arc through a synchronized waveform with a luminous core hold.',
    markup: `<div class="vl-matrix8-ionic-pulse" aria-hidden="true">
      <span class="vl-matrix8-vector" style="--x:18px;--y:74px;--d:.02"></span>
      <span class="vl-matrix8-vector" style="--x:50px;--y:66px;--d:.16"></span>
      <span class="vl-matrix8-vector" style="--x:82px;--y:74px;--d:.3"></span>
      <span class="vl-matrix8-vector" style="--x:114px;--y:66px;--d:.44"></span>
      <span class="vl-matrix8-vector" style="--x:146px;--y:74px;--d:.58"></span>
      <span class="vl-matrix8-vector-core"></span>
    </div>`,
    css: `.vl-matrix8-ionic-pulse {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f5d8e);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(140deg, #05131f, #0a2944 56%, #040f18);
}
.vl-matrix8-vector {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 12px;
  height: 3px;
  border-radius: 99px;
  background: linear-gradient(90deg, color-mix(in srgb, var(--loader-accent) 18%, transparent), color-mix(in srgb, var(--loader-accent) 84%, #d8eaf7));
  animation: vl-matrix8-ionic-vector calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix8-vector-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix8-ionic-core calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-matrix8-ionic-vector {
  0%, 100% { transform: translateY(0) scaleX(.56); opacity: .2; }
  50% { transform: translateY(-56px) scaleX(1); opacity: 1; }
}
@keyframes vl-matrix8-ionic-core {
  0%, 100% { transform: scale(.55); opacity: .28; }
  50% { transform: scale(1.04); opacity: .98; }
}`
  },
  {
    id: 'matrix-scalar-gate-lattice',
    name: 'Scalar Gate Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Nested gates close and reopen while scalar checkpoints cycle across the lattice.',
    markup: `<div class="vl-matrix8-scalar-gate" aria-hidden="true">
      <span class="vl-matrix8-gate" style="--s:30px;--d:0"></span>
      <span class="vl-matrix8-gate" style="--s:42px;--d:.16"></span>
      <span class="vl-matrix8-gate" style="--s:54px;--d:.32"></span>
      <span class="vl-matrix8-gate" style="--s:66px;--d:.48"></span>
      <span class="vl-matrix8-gate-core"></span>
    </div>`,
    css: `.vl-matrix8-scalar-gate {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1b5a81);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 52%, color-mix(in srgb, var(--loader-accent) 20%, transparent), #04111b 52%);
}
.vl-matrix8-gate {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--s);
  height: var(--s);
  margin: calc(var(--s) / -2);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 74%, #ebf5ff);
  border-radius: 50%;
  animation: vl-matrix8-scalar-gate calc(var(--loader-speed) * 1.9) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix8-gate-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix8-scalar-core calc(var(--loader-speed) * 1.2) cubic-bezier(.2, 0, .3, 1) infinite;
}
@keyframes vl-matrix8-scalar-gate {
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(.3); opacity: .2; }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(1); opacity: .94; }
  100% { transform: translate(-50%, -50%) rotate(360deg) scale(.3); opacity: .2; }
}
@keyframes vl-matrix8-scalar-core {
  0%, 100% { transform: scale(.58); opacity: .32; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-spiral-axon-gauge',
    name: 'Spiral Axon Gauge',
    category: 'Matrix',
    tech: 'CSS',
    description: 'An axon coil and gauge line rise in spiral synchronization.',
    markup: `<div class="vl-matrix8-axon-gauge" aria-hidden="true">
      <span class="vl-matrix8-gauge" style="--p:2;--d:0"></span>
      <span class="vl-matrix8-gauge" style="--p:4;--d:.14"></span>
      <span class="vl-matrix8-gauge" style="--p:6;--d:.28"></span>
      <span class="vl-matrix8-gauge" style="--p:8;--d:.42"></span>
      <span class="vl-matrix8-gauge" style="--p:10;--d:.56"></span>
      <span class="vl-matrix8-gauge-core"></span>
    </div>`,
    css: `.vl-matrix8-axon-gauge {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1b5581);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(130deg, #05121f, #07233e 54%, #040b16);
}
.vl-matrix8-gauge {
  position: absolute;
  left: 50%;
  top: 62%;
  width: calc(24px + var(--p) * 1px);
  height: calc(24px + var(--p) * 1px);
  margin: calc(-12px - var(--p) * 0.5px);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 74%, #d8ebfb);
  border-radius: 50%;
  border-left-color: transparent;
  transform: translate(-50%, -50%) rotate(0deg);
  animation: vl-matrix8-axon-gauge calc(var(--loader-speed) * 1.65) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix8-gauge-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix8-axon-core calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-matrix8-axon-gauge {
  0% { transform: translate(-50%, -50%) scale(.62) rotate(0deg); opacity: .24; }
  50% { transform: translate(-50%, -50%) scale(1) rotate(200deg); opacity: .9; }
  100% { transform: translate(-50%, -50%) scale(.62) rotate(360deg); opacity: .24; }
}
@keyframes vl-matrix8-axon-core {
  0%, 100% { transform: scale(.52); opacity: .2; }
  50% { transform: scale(1.05); opacity: 1; }
}`
  }
];
