export const matrixPack7LoadersB = [
  {
    id: 'matrix-quantum-ribbon-clock',
    name: 'Quantum Ribbon Clock',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Ribboned checkpoints sweep in phase with a clocked core loop and reset on a synchronized beat.',
    markup: `<div class="vl-matrix7-ribbon-clock" aria-hidden="true">
      <span class="vl-matrix7-ribbon" style="--x:26px;--d:0;--w:56px"></span>
      <span class="vl-matrix7-ribbon" style="--x:82px;--d:.15;--w:52px"></span>
      <span class="vl-matrix7-ribbon" style="--x:136px;--d:.3;--w:48px"></span>
      <span class="vl-matrix7-ribbon" style="--x:46px;--d:.08;--w:46px"></span>
      <span class="vl-matrix7-ribbon" style="--x:102px;--d:.22;--w:44px"></span>
      <span class="vl-matrix7-ribbon-core"></span>
    </div>`,
    css: `.vl-matrix7-ribbon-clock {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #165c8d);
  border-radius: 14px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 56%, color-mix(in srgb, var(--loader-accent) 12%, transparent), transparent 48%),
    linear-gradient(165deg, #041324, #091f39 58%, #040b14);
}
.vl-matrix7-ribbon {
  position: absolute;
  left: var(--x);
  top: 14px;
  height: 76px;
  width: var(--w);
  border-radius: 18px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 78%, #fff);
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 26%, transparent), transparent);
  opacity: .24;
  animation: vl-matrix7-ribbon-clock-ribbon calc(var(--loader-speed) * 1.85) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix7-ribbon-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix7-ribbon-clock-core calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-matrix7-ribbon:nth-child(3) { top: 18px; }
.vl-matrix7-ribbon:nth-child(4) { top: 22px; height: 68px; }
.vl-matrix7-ribbon:nth-child(5) { top: 26px; height: 62px; }
.vl-matrix7-ribbon:nth-child(6) { top: 30px; height: 58px; }
@keyframes vl-matrix7-ribbon-clock-ribbon {
  0%, 100% { transform: scaleX(.42); opacity: .2; }
  55% { transform: scaleX(1); opacity: .92; }
}
@keyframes vl-matrix7-ribbon-clock-core {
  0%, 100% { transform: scale(.52) rotate(0deg); opacity: .3; }
  50% { transform: scale(1.06) rotate(180deg); opacity: 1; }
}`
  },
  {
    id: 'matrix-float-logic-orbit',
    name: 'Float Logic Orbit',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Offset float nodes orbit a central gate in phase-shifted passes and settle to lock points.',
    markup: `<div class="vl-matrix7-float-orbit" aria-hidden="true">
      <span class="vl-matrix7-orbit-node" style="--r:24px;--d:0"></span>
      <span class="vl-matrix7-orbit-node" style="--r:32px;--d:.14"></span>
      <span class="vl-matrix7-orbit-node" style="--r:40px;--d:.28"></span>
      <span class="vl-matrix7-orbit-node" style="--r:48px;--d:.42"></span>
      <span class="vl-matrix7-orbit-node" style="--r:56px;--d:.56"></span>
      <span class="vl-matrix7-orbit-core"></span>
    </div>`,
    css: `.vl-matrix7-float-orbit {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #174f7e);
  border-radius: 14px;
  overflow: hidden;
  background: repeating-linear-gradient(120deg, #05111f 0 13px, #081f38 13px 14px, #05111f 14px 28px);
}
.vl-matrix7-orbit-node {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 11px;
  height: 11px;
  margin: -5.5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 84%, #fff);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 64%, transparent);
  animation: vl-matrix7-float-node calc(var(--loader-speed) * 1.9) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix7-orbit-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix7-float-core calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
@keyframes vl-matrix7-float-node {
  0% { transform: rotate(0deg) translateX(var(--r)) scale(.44); opacity: .2; }
  45% { transform: rotate(164deg) translateX(var(--r)) scale(.96); opacity: .92; }
  100% { transform: rotate(360deg) translateX(var(--r)) scale(.44); opacity: .2; }
}
@keyframes vl-matrix7-float-core {
  0%, 100% { transform: scale(.6); opacity: .25; }
  50% { transform: scale(1.08); opacity: .98; }
}`
  },
  {
    id: 'matrix-neon-vector-cascade',
    name: 'Neon Vector Cascade',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Neon vectors traverse alternating lanes and pulse a shared checkpoint at each phase.',
    markup: `<div class="vl-matrix7-neon-cascade" aria-hidden="true">
      <span style="--x:14px;--d:0" class="vl-matrix7-cascade-rail"></span>
      <span style="--x:58px;--d:.11" class="vl-matrix7-cascade-rail"></span>
      <span style="--x:102px;--d:.22" class="vl-matrix7-cascade-rail"></span>
      <span style="--x:146px;--d:.33" class="vl-matrix7-cascade-rail"></span>
      <span style="--x:14px;--d:.44" class="vl-matrix7-cascade-wave"></span>
      <span style="--x:58px;--d:.55" class="vl-matrix7-cascade-wave"></span>
      <span style="--x:102px;--d:.66" class="vl-matrix7-cascade-wave"></span>
      <span style="--x:146px;--d:.77" class="vl-matrix7-cascade-wave"></span>
      <span class="vl-matrix7-neon-core"></span>
    </div>`,
    css: `.vl-matrix7-neon-cascade {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1e4d73);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(170deg, #051322, #071f37 62%, #040e18);
}
.vl-matrix7-cascade-rail,
.vl-matrix7-cascade-wave {
  position: absolute;
  left: var(--x);
  top: 50%;
  width: 18px;
  height: 4px;
  margin-top: -2px;
  border-radius: 99px;
  transform-origin: center;
  animation: vl-matrix7-cascade-band calc(var(--loader-speed) * 1.65) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix7-cascade-rail {
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 90%, #fff), transparent);
}
.vl-matrix7-cascade-wave {
  width: 26px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 96%, #e4f4ff), transparent);
}
.vl-matrix7-neon-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix7-cascade-core calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
@keyframes vl-matrix7-cascade-band {
  0%, 100% { transform: scaleX(.45); opacity: .2; }
  44% { transform: scaleX(1); opacity: .94; }
}
@keyframes vl-matrix7-cascade-core {
  0%, 100% { transform: scale(.6); opacity: .3; }
  50% { transform: scale(1.1); opacity: 1; }
}`
  },
  {
    id: 'matrix-pulse-gate-fresnel',
    name: 'Pulse Gate Fresnel',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Concentric Fresnel gates pulse toward the center while data pulses pass each segment.',
    markup: `<div class="vl-matrix7-pulse-fresnel" aria-hidden="true">
      <span style="--s:42px;--d:0"></span>
      <span style="--s:54px;--d:.13"></span>
      <span style="--s:66px;--d:.26"></span>
      <span style="--s:78px;--d:.39"></span>
      <span class="vl-matrix7-fresnel-core"></span>
    </div>`,
    css: `.vl-matrix7-pulse-fresnel {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #14527f);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 55%, color-mix(in srgb, var(--loader-accent) 20%, transparent), #040d19 52%);
}
.vl-matrix7-pulse-fresnel span:not(.vl-matrix7-fresnel-core) {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--s);
  height: var(--s);
  margin: calc(var(--s) / -2);
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 68%, #e8f4ff);
  animation: vl-matrix7-fresnel-ring calc(var(--loader-speed) * 2) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix7-fresnel-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 82%, #fff);
  animation: vl-matrix7-fresnel-core calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
@keyframes vl-matrix7-fresnel-ring {
  0% { transform: translate(-50%, -50%) scale(.28); opacity: .2; }
  52% { transform: translate(-50%, -50%) scale(1.02); opacity: .92; }
  100% { transform: translate(-50%, -50%) scale(.28); opacity: .2; }
}
@keyframes vl-matrix7-fresnel-core {
  0%, 100% { transform: scale(.48); opacity: .2; }
  50% { transform: scale(1.04); opacity: .95; }
}`
  },
  {
    id: 'matrix-inked-axon-gate',
    name: 'Inked Axon Gate',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Ink-like axon pulses traverse three gates and converge into a final checkpoint mark.',
    markup: `<div class="vl-matrix7-axon-gate" aria-hidden="true">
      <span class="vl-matrix7-axon-segment" style="--x:20px;--y:18px;--d:0"></span>
      <span class="vl-matrix7-axon-segment" style="--x:76px;--y:34px;--d:.14"></span>
      <span class="vl-matrix7-axon-segment" style="--x:132px;--y:18px;--d:.28"></span>
      <span class="vl-matrix7-axon-segment" style="--x:20px;--y:74px;--d:.42"></span>
      <span class="vl-matrix7-axon-segment" style="--x:76px;--y:58px;--d:.56"></span>
      <span class="vl-matrix7-axon-segment" style="--x:132px;--y:74px;--d:.7"></span>
      <span class="vl-matrix7-axon-core"></span>
    </div>`,
    css: `.vl-matrix7-axon-gate {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #164f7a);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(140deg, #050f1f 0 48%, #0a233e 48% 100%);
}
.vl-matrix7-axon-segment {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 34px;
  height: 6px;
  border-radius: 99px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 78%, #dce9f8), transparent);
  animation: vl-matrix7-axon-line calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix7-axon-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4.5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix7-axon-core calc(var(--loader-speed) * 1.1) linear infinite;
}
@keyframes vl-matrix7-axon-line {
  0%, 100% { width: 6px; opacity: .2; }
  46% { width: 34px; opacity: .96; }
}
@keyframes vl-matrix7-axon-core {
  0%, 100% { transform: scale(.58); opacity: .3; }
  50% { transform: scale(1.16); opacity: 1; }
}`
  }
];
