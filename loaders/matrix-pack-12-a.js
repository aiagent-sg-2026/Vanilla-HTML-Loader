export const matrixPack12LoadersA = [
  {
    id: 'matrix-rift-orbit-lattice',
    name: 'Rift Orbit Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A split lattice opens and closes in orbit while a core pulse stabilizes each loop.',
    markup: `<div class="vl-matrix12-rift-orbit" aria-hidden="true">
      <span class="vl-matrix12-rift-node" style="--d:0;--x:24px"></span>
      <span class="vl-matrix12-rift-node" style="--d:.15;--x:64px"></span>
      <span class="vl-matrix12-rift-node" style="--d:.3;--x:104px"></span>
      <span class="vl-matrix12-rift-node" style="--d:.45;--x:144px"></span>
      <span class="vl-matrix12-rift-core"></span>
    </div>`,
    css: `.vl-matrix12-rift-orbit {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1f72a5);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 52%, color-mix(in srgb, var(--loader-accent) 20%, transparent), #041421 58%);
}
.vl-matrix12-rift-node {
  position: absolute;
  top: 42px;
  left: var(--x);
  width: 14px;
  height: 14px;
  margin-left: -7px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 84%, #e3f2fb);
  animation: vl-matrix12-rift-node calc(var(--loader-speed) * 1.56) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix12-rift-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix12-rift-core calc(var(--loader-speed) * 1.05) linear infinite;
}
@keyframes vl-matrix12-rift-node {
  0%, 100% { transform: translateY(-4px) scale(.55); opacity: .2; }
  50% { transform: translateY(14px) scale(1.06); opacity: .95; }
}
@keyframes vl-matrix12-rift-core {
  0%, 100% { transform: scale(.56); opacity: .22; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-void-sine-array',
    name: 'Void Sine Array',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Offset sine bars sweep in a waveband and fold around a central anchor.',
    markup: `<div class="vl-matrix12-void-sine" aria-hidden="true">
      <span class="vl-matrix12-sine" style="--d:0;--x:16px"></span>
      <span class="vl-matrix12-sine" style="--d:.12;--x:46px"></span>
      <span class="vl-matrix12-sine" style="--d:.24;--x:76px"></span>
      <span class="vl-matrix12-sine" style="--d:.36;--x:106px"></span>
      <span class="vl-matrix12-sine" style="--d:.48;--x:136px"></span>
      <span class="vl-matrix12-sine" style="--d:.6;--x:166px"></span>
      <span class="vl-matrix12-void-core"></span>
    </div>`,
    css: `.vl-matrix12-void-sine {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #1d6790);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(150deg, #061826, #093057 58%, #04111e);
}
.vl-matrix12-sine {
  position: absolute;
  left: var(--x);
  top: 14px;
  width: 6px;
  height: 72px;
  border-radius: 999px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 86%, #e8f4fd), transparent);
  animation: vl-matrix12-sine-wave calc(var(--loader-speed) * 1.42) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix12-void-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix12-void-core calc(var(--loader-speed) * 1.04) ease-in-out infinite;
}
@keyframes vl-matrix12-sine-wave {
  0%, 100% { transform: translateY(0) scaleY(.42); opacity: .2; }
  50% { transform: translateY(14px) scaleY(1.05); opacity: .94; }
}
@keyframes vl-matrix12-void-core {
  0%, 100% { transform: scale(.55); opacity: .24; }
  50% { transform: scale(1.06); opacity: 1; }
}`
  },
  {
    id: 'matrix-photon-bridge-wave',
    name: 'Photon Bridge Wave',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Bridge bands rise and cross in timed phases, forming a shifting photon-like bridge.',
    markup: `<div class="vl-matrix12-photon-wave" aria-hidden="true">
      <span class="vl-matrix12-bridge" style="--d:0;--y:24px"></span>
      <span class="vl-matrix12-bridge" style="--d:.14;--y:46px"></span>
      <span class="vl-matrix12-bridge" style="--d:.28;--y:68px"></span>
      <span class="vl-matrix12-photon-core"></span>
    </div>`,
    css: `.vl-matrix12-photon-wave {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1f6ea4);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 52%, color-mix(in srgb, var(--loader-accent) 18%, transparent), #03101b 58%);
}
.vl-matrix12-bridge {
  position: absolute;
  left: 14px;
  top: var(--y);
  width: 160px;
  height: 8px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 90%, #e8f5ff), transparent);
  animation: vl-matrix12-bridge-wave calc(var(--loader-speed) * 1.66) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix12-photon-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix12-photon-core calc(var(--loader-speed) * 1.08) cubic-bezier(.2, 0, .35, 1) infinite;
}
@keyframes vl-matrix12-bridge-wave {
  0%, 100% { transform: scaleY(.34); opacity: .2; }
  50% { transform: scaleY(1); opacity: .94; }
}
@keyframes vl-matrix12-photon-core {
  0%, 100% { transform: scale(.54); opacity: .22; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-gyro-node-ring',
    name: 'Gyro Node Ring',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Small nodes rotate on a gyroscopic ring and flicker at synchronized intervals.',
    markup: `<div class="vl-matrix12-gyro-ring" aria-hidden="true">
      <span class="vl-matrix12-gyro-ring-orbit" style="--d:0"></span>
      <span class="vl-matrix12-gyro-ring-orbit" style="--d:.16"></span>
      <span class="vl-matrix12-gyro-ring-orbit" style="--d:.32"></span>
      <span class="vl-matrix12-gyro-node-core"></span>
    </div>`,
    css: `.vl-matrix12-gyro-ring {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #1e6694);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(140deg, #051522, #0a3351 58%, #04111f);
}
.vl-matrix12-gyro-ring-orbit {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 56px;
  height: 56px;
  margin: -28px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 76%, #dcf1fe);
  border-radius: 50%;
  animation: vl-matrix12-gyro-orbit calc(var(--loader-speed) * 1.82) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix12-gyro-node-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix12-gyro-core calc(var(--loader-speed) * 1.06) ease-in-out infinite;
}
@keyframes vl-matrix12-gyro-orbit {
  0% { transform: rotate(0deg) scale(.58); opacity: .2; }
  50% { transform: rotate(180deg) scale(1); opacity: .95; }
  100% { transform: rotate(360deg) scale(.58); opacity: .2; }
}
@keyframes vl-matrix12-gyro-core {
  0%, 100% { transform: scale(.55); opacity: .24; }
  50% { transform: scale(1.07); opacity: 1; }
}`
  },
  {
    id: 'matrix-crystal-lattice-bridge',
    name: 'Crystal Lattice Bridge',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A lattice of short bridges pulses in a mirrored sequence across the pane.',
    markup: `<div class="vl-matrix12-crystal-bridge" aria-hidden="true">
      <span class="vl-matrix12-crystal" style="--d:0;--x:28px;--y:24px"></span>
      <span class="vl-matrix12-crystal" style="--d:.11;--x:58px;--y:42px"></span>
      <span class="vl-matrix12-crystal" style="--d:.22;--x:88px;--y:24px"></span>
      <span class="vl-matrix12-crystal" style="--d:.33;--x:118px;--y:42px"></span>
      <span class="vl-matrix12-crystal" style="--d:.44;--x:148px;--y:24px"></span>
      <span class="vl-matrix12-crystal-core"></span>
    </div>`,
    css: `.vl-matrix12-crystal-bridge {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6ba2);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(165deg, #061827, #0a3453 56%, #04111f);
}
.vl-matrix12-crystal {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 86%, #e6f4ff);
  animation: vl-matrix12-crystal-bridge calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix12-crystal::before {
  content: '';
  position: absolute;
  left: 40px;
  top: -5px;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 60%, #e5f4ff);
  opacity: .72;
}
.vl-matrix12-crystal-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix12-crystal-core calc(var(--loader-speed) * 1.02) ease-in-out infinite;
}
@keyframes vl-matrix12-crystal-bridge {
  0%, 100% { transform: scale(.45); opacity: .2; }
  50% { transform: scale(1); opacity: .94; }
}
@keyframes vl-matrix12-crystal-core {
  0%, 100% { transform: scale(.55); opacity: .22; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  }
];
