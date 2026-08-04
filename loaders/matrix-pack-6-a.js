export const matrixPack6LoadersA = [
  {
    id: 'matrix-cascade-pulse-lattice',
    name: 'Cascade Pulse Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Nested lattice points light up in wave-front cascades and then collapse into a checksum node.',
    markup: `<div class="vl-matrix-cascade-lattice" aria-hidden="true">
      <span style="--x:16px;--y:14px;--d:0"></span><span style="--x:50px;--y:22px;--d:.08"></span><span style="--x:84px;--y:14px;--d:.16"></span><span style="--x:118px;--y:22px;--d:.24"></span><span style="--x:152px;--y:14px;--d:.32"></span>
      <span style="--x:16px;--y:42px;--d:.18"></span><span style="--x:50px;--y:52px;--d:.26"></span><span style="--x:84px;--y:42px;--d:.34"></span><span style="--x:118px;--y:52px;--d:.42"></span><span style="--x:152px;--y:42px;--d:.50"></span>
      <span style="--x:16px;--y:70px;--d:.36"></span><span style="--x:50px;--y:78px;--d:.44"></span><span style="--x:84px;--y:70px;--d:.52"></span><span style="--x:118px;--y:78px;--d:.6"></span><span style="--x:152px;--y:70px;--d:.68"></span>
      <span class="vl-matrix-cascade-core"></span>
    </div>`,
    css: `.vl-matrix-cascade-lattice {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #18416a);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(180deg, #040d16, #091f39);
}
.vl-matrix-cascade-lattice span:not(.vl-matrix-cascade-core) {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 84%, #fff 16%);
  box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 68%, transparent);
  opacity: .12;
  animation: vl-matrix6-cascade-dot calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-cascade-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  opacity: .66;
  animation: vl-matrix6-cascade-core calc(var(--loader-speed) * 1.1) cubic-bezier(.38, 0, .2, 1) infinite;
}
@keyframes vl-matrix6-cascade-dot {
  0%, 100% { transform: scale(.2); opacity: .12; }
  42% { transform: scale(1.18); opacity: .94; }
}
@keyframes vl-matrix6-cascade-core {
  0%, 100% { transform: scale(.62); opacity: .24; }
  50% { transform: scale(1.06); opacity: 1; }
}`
  },
  {
    id: 'matrix-vectored-bit-grid',
    name: 'Vectored Bit Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Bit cells sweep along vector paths, then settle at orthogonal checkpoints.',
    markup: `<div class="vl-matrix-bit-grid" aria-hidden="true">
      <span class="vl-matrix-bit-cell" style="--x:20px;--y:14px;--d:0;--dx:1.1"></span>
      <span class="vl-matrix-bit-cell" style="--x:56px;--y:24px;--d:.12;--dx:.86"></span>
      <span class="vl-matrix-bit-cell" style="--x:90px;--y:14px;--d:.24;--dx:.66"></span>
      <span class="vl-matrix-bit-cell" style="--x:124px;--y:24px;--d:.36;--dx:.46"></span>
      <span class="vl-matrix-bit-cell" style="--x:158px;--y:14px;--d:.48;--dx:.22"></span>
      <span class="vl-matrix-bit-cell" style="--x:20px;--y:56px;--d:.16;--dx:1.02"></span>
      <span class="vl-matrix-bit-cell" style="--x:90px;--y:56px;--d:.28;--dx:.76"></span>
      <span class="vl-matrix-bit-cell" style="--x:158px;--y:56px;--d:.4;--dx:.42"></span>
      <span class="vl-matrix-bit-cell" style="--x:56px;--y:86px;--d:.22;--dx:.9"></span>
      <span class="vl-matrix-bit-cell" style="--x:124px;--y:86px;--d:.34;--dx:.55"></span>
    </div>`,
    css: `.vl-matrix-bit-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 29%, #184267);
  border-radius: 14px;
  overflow: hidden;
  background: repeating-linear-gradient(90deg, #05101e 0 17px, #071a31 17px 18px, #05101e 18px 35px);
}
.vl-matrix-bit-cell {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform-origin: center;
  background: color-mix(in srgb, var(--loader-accent) 84%, #fff 16%);
  box-shadow: 0 0 7px color-mix(in srgb, var(--loader-accent) 72%, transparent);
  animation: vl-matrix6-bit-cell calc(var(--loader-speed) * 1.8) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix6-bit-cell {
  0%, 100% {
    opacity: .2;
    transform: translateX(0);
  }
  44% {
    opacity: .95;
    transform: translateX(calc(var(--dx) * 12px));
  }
}`
  },
  {
    id: 'matrix-rim-scan-matrix',
    name: 'Rim Scan Matrix',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A perimeter scan traces the matrix rim and pulses inward checkpoints.',
    markup: `<div class="vl-matrix-rim-scan" aria-hidden="true">
      <span class="vl-matrix-rim-border"></span>
      <span class="vl-matrix-rim-segment" style="--d:0"></span><span class="vl-matrix-rim-segment" style="--d:.14"></span><span class="vl-matrix-rim-segment" style="--d:.28"></span><span class="vl-matrix-rim-segment" style="--d:.42"></span><span class="vl-matrix-rim-segment" style="--d:.56"></span>
      <span class="vl-matrix-rim-core"></span>
    </div>`,
    css: `.vl-matrix-rim-scan {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #163f64);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 52%, color-mix(in srgb, var(--loader-accent) 16%, transparent), #050e1a);
}
.vl-matrix-rim-border {
  position: absolute;
  inset: 8px;
  border: 1px dashed color-mix(in srgb, var(--loader-accent) 30%, #cde2f5);
  border-radius: 12px;
  opacity: .22;
}
.vl-matrix-rim-segment {
  position: absolute;
  left: 12px;
  right: 12px;
  top: 12px;
  bottom: 12px;
  border-radius: 10px;
  border-top: 2px solid color-mix(in srgb, var(--loader-accent) 90%, #fff);
  border-right: 2px solid transparent;
  border-bottom: 2px solid color-mix(in srgb, var(--loader-accent) 40%, transparent);
  animation: vl-matrix6-rim-scan calc(var(--loader-speed) * 2) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-rim-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  margin: -6px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix6-rim-core calc(var(--loader-speed) * 1.4) ease-in-out infinite;
}
@keyframes vl-matrix6-rim-scan {
  0% { clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 90%, 90% 90%, 90% 10%, 10% 10%); transform: rotate(0deg); opacity: .24; }
  45% { opacity: .94; clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 70%, 70% 70%, 70% 30%, 30% 30%); transform: rotate(180deg); }
  100% { transform: rotate(360deg); opacity: .24; clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 90%, 90% 90%, 90% 10%, 10% 10%); }
}
@keyframes vl-matrix6-rim-core {
  0%, 100% { transform: scale(.62); opacity: .45; }
  50% { transform: scale(1.1); opacity: 1; }
}`
  },
  {
    id: 'matrix-orbit-chain-trace',
    name: 'Orbit Chain Trace',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Orbiting traces chain through checkpoints and reverse into a synchronized lock state.',
    markup: `<div class="vl-matrix-orbit-chain" aria-hidden="true">
      <span class="vl-matrix-orbit-track"></span>
      <span style="--r:40px;--d:0" class="vl-matrix-orbit-node"></span>
      <span style="--r:46px;--d:.16" class="vl-matrix-orbit-node"></span>
      <span style="--r:52px;--d:.32" class="vl-matrix-orbit-node"></span>
      <span style="--r:58px;--d:.48" class="vl-matrix-orbit-node"></span>
      <span class="vl-matrix-orbit-lock"></span>
    </div>`,
    css: `.vl-matrix-orbit-chain {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 27%, #184a74);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(180deg, #05111e, #0a2540 58%, #050f1f);
}
.vl-matrix-orbit-track {
  position: absolute;
  left: 42px;
  top: 19px;
  width: 104px;
  height: 70px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 34%, #e0f0fb);
  border-radius: 50%;
  opacity: .25;
}
.vl-matrix-orbit-node {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 82%, #fff);
  animation: vl-matrix6-orbit-node calc(var(--loader-speed) * 1.9) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-orbit-lock {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 14px;
  height: 14px;
  margin: -7px;
  border-radius: 3px;
  background: color-mix(in srgb, var(--loader-accent) 70%, #eaf3fc);
  transform: translate(-50%, -50%) rotate(45deg);
  animation: vl-matrix6-orbit-lock calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-matrix6-orbit-node {
  0% { transform: rotate(0deg) translateX(var(--r)) scale(.56); opacity: .24; }
  30% { opacity: 1; }
  100% { transform: rotate(360deg) translateX(var(--r)) scale(1); opacity: .24; }
}
@keyframes vl-matrix6-orbit-lock {
  0%, 100% { transform: translate(-50%, -50%) rotate(45deg) scale(.64); opacity: .34; }
  50% { transform: translate(-50%, -50%) rotate(225deg) scale(1.06); opacity: .96; }
}`
  },
  {
    id: 'matrix-signal-prism-gate',
    name: 'Signal Prism Gate',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Signal prisms open and close through synchronized gates in concentric timing bands.',
    markup: `<div class="vl-matrix-signal-prism" aria-hidden="true">
      <span class="vl-matrix-prism" style="--d:0;--x:38px;--y:16px"></span>
      <span class="vl-matrix-prism" style="--d:.14;--x:76px;--y:22px"></span>
      <span class="vl-matrix-prism" style="--d:.28;--x:114px;--y:16px"></span>
      <span class="vl-matrix-prism" style="--d:.42;--x:152px;--y:22px"></span>
      <span class="vl-matrix-prism" style="--d:.56;--x:38px;--y:64px"></span>
      <span class="vl-matrix-prism" style="--d:.7;--x:76px;--y:70px"></span>
      <span class="vl-matrix-prism" style="--d:.84;--x:114px;--y:64px"></span>
      <span class="vl-matrix-prism" style="--d:.98;--x:152px;--y:70px"></span>
      <span class="vl-matrix-prism-core"></span>
    </div>`,
    css: `.vl-matrix-signal-prism {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 29%, #193f67);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(140deg, #05101e 0 50%, #0a223e 50% 100%);
}
.vl-matrix-prism {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 14px;
  height: 14px;
  background: color-mix(in srgb, var(--loader-accent) 70%, #f0f8ff);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation: vl-matrix6-prism calc(var(--loader-speed) * 1.75) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-prism-core {
  position: absolute;
  left: 90px;
  top: 45px;
  width: 10px;
  height: 16px;
  transform: rotate(45deg);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 76%, #fff);
  background: color-mix(in srgb, var(--loader-accent) 34%, transparent);
  animation: vl-matrix6-prism-core calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-matrix6-prism {
  0%, 100% { transform: scale(.64) rotate(0deg); opacity: .28; }
  50% { transform: scale(1.12) rotate(90deg); opacity: .96; }
}
@keyframes vl-matrix6-prism-core {
  0%, 100% { opacity: .38; }
  50% { opacity: .94; }
}`
  }
];
