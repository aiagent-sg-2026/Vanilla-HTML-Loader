export const matrixPack13LoadersB = [
  {
    id: 'matrix-luminous-radial-fusion',
    name: 'Luminous Radial Fusion',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Concentric ringlets open and close around a core to emulate radial fusion pulses.',
    markup: `<div class="vl-matrix13-radial-fusion" aria-hidden="true">
      <span class="vl-matrix13-radial-ring" style="--s:28px;--d:0"></span>
      <span class="vl-matrix13-radial-ring" style="--s:42px;--d:.14"></span>
      <span class="vl-matrix13-radial-ring" style="--s:56px;--d:.28"></span>
      <span class="vl-matrix13-radial-ring" style="--s:70px;--d:.42"></span>
      <span class="vl-matrix13-radial-core"></span>
    </div>`,
    css: `.vl-matrix13-radial-fusion {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1c6996);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 54%, color-mix(in srgb, var(--loader-accent) 22%, transparent), #04131e 62%);
}
.vl-matrix13-radial-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--s);
  height: var(--s);
  margin: calc(var(--s) / -2);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 82%, #e5f4fb);
  border-radius: 50%;
  animation: vl-matrix13-radial-ring calc(var(--loader-speed) * 1.7) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix13-radial-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix13-radial-core calc(var(--loader-speed) * 1.04) cubic-bezier(.2, 0, .35, 1) infinite;
}
@keyframes vl-matrix13-radial-ring {
  0%, 100% { transform: translate(-50%, -50%) scale(.34); opacity: .18; }
  50% { transform: translate(-50%, -50%) scale(1.03); opacity: .95; }
}
@keyframes vl-matrix13-radial-core {
  0%, 100% { transform: scale(.54); opacity: .24; }
  50% { transform: scale(1.06); opacity: 1; }
}`
  },
  {
    id: 'matrix-echo-cascade-loop',
    name: 'Echo Cascade Loop',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Echo markers sweep in a repeating cascade then recycle from an inner loop.',
    markup: `<div class="vl-matrix13-echo-loop" aria-hidden="true">
      <span class="vl-matrix13-echo" style="--d:0;--y:24px"></span>
      <span class="vl-matrix13-echo" style="--d:.13;--y:42px"></span>
      <span class="vl-matrix13-echo" style="--d:.26;--y:60px"></span>
      <span class="vl-matrix13-echo" style="--d:.39;--y:78px"></span>
      <span class="vl-matrix13-echo-core"></span>
    </div>`,
    css: `.vl-matrix13-echo-loop {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1d6895);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(140deg, #05172a, #0a3552 58%, #04111d);
}
.vl-matrix13-echo {
  position: absolute;
  left: 14px;
  top: var(--y);
  width: 160px;
  height: 6px;
  border-radius: 99px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 84%, #e8f6ff), transparent);
  animation: vl-matrix13-echo-sweep calc(var(--loader-speed) * 1.48) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix13-echo-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix13-echo-core calc(var(--loader-speed) * 1.06) linear infinite;
}
@keyframes vl-matrix13-echo-sweep {
  0%, 100% { transform: scaleX(.28); opacity: .18; }
  50% { transform: scaleX(1); opacity: .94; }
}
@keyframes vl-matrix13-echo-core {
  0%, 100% { transform: scale(.54); opacity: .2; }
  50% { transform: scale(1.06); opacity: 1; }
}`
  },
  {
    id: 'matrix-matrix-lattice-spiral',
    name: 'Matrix Lattice Spiral',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Lattice nodes orbit a spiral field and snap briefly into a grid phase.',
    markup: `<div class="vl-matrix13-lattice-spiral" aria-hidden="true">
      <span class="vl-matrix13-lattice-node" style="--d:0;--a:10deg"></span>
      <span class="vl-matrix13-lattice-node" style="--d:.16;--a:125deg"></span>
      <span class="vl-matrix13-lattice-node" style="--d:.32;--a:240deg"></span>
      <span class="vl-matrix13-lattice-core"></span>
    </div>`,
    css: `.vl-matrix13-lattice-spiral {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6999);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(155deg, #051826, #0a3352 58%, #04111d);
}
.vl-matrix13-lattice-node {
  position: absolute;
  left: calc(50% - 4px);
  top: calc(50% - 4px);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--loader-accent);
  opacity: .8;
  transform: rotate(var(--a)) translate(24px);
  animation: vl-matrix13-lattice-spiral calc(var(--loader-speed) * 1.72) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix13-lattice-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 85%, #eaf4fe);
  animation: vl-matrix13-lattice-core calc(var(--loader-speed) * 1.02) cubic-bezier(.2, 0, .35, 1) infinite;
}
@keyframes vl-matrix13-lattice-spiral {
  0% {
    transform: rotate(var(--a)) scale(.55);
    opacity: .2;
  }
  50% {
    transform: rotate(calc(var(--a) + 180deg)) scale(1.06);
    opacity: .95;
  }
  100% {
    transform: rotate(calc(var(--a) + 360deg)) scale(.55);
    opacity: .2;
  }
}
@keyframes vl-matrix13-lattice-core {
  0%, 100% { transform: scale(.54); opacity: .22; }
  50% { transform: scale(1.06); opacity: 1; }
}`
  },
  {
    id: 'matrix-drift-node-orbit',
    name: 'Drift Node Orbit',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Floating nodes drift through a small orbit and recover in synced bursts.',
    markup: `<div class="vl-matrix13-drift-orbit" aria-hidden="true">
      <span class="vl-matrix13-drift" style="--d:0;--x:24px"></span>
      <span class="vl-matrix13-drift" style="--d:.19;--x:64px"></span>
      <span class="vl-matrix13-drift" style="--d:.38;--x:104px"></span>
      <span class="vl-matrix13-drift" style="--d:.57;--x:144px"></span>
      <span class="vl-matrix13-drift-core"></span>
    </div>`,
    css: `.vl-matrix13-drift-orbit {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1e6797);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 16%, transparent), #051524 60%);
}
.vl-matrix13-drift {
  position: absolute;
  top: 16px;
  left: var(--x);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 86%, #e5f3fd);
  animation: vl-matrix13-drift-node calc(var(--loader-speed) * 1.52) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix13-drift-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix13-drift-core calc(var(--loader-speed) * 1.04) ease-in-out infinite;
}
@keyframes vl-matrix13-drift-node {
  0%, 100% { transform: translateY(0) scale(.58); opacity: .2; }
  50% { transform: translateY(70px) scale(1.05); opacity: .95; }
}
@keyframes vl-matrix13-drift-core {
  0%, 100% { transform: scale(.54); opacity: .22; }
  50% { transform: scale(1.06); opacity: 1; }
}`
  },
  {
    id: 'matrix-cascade-core-lattice',
    name: 'Cascade Core Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Core lattice nodes cascade outward and converge back in a compact loop.',
    markup: `<div class="vl-matrix13-cascade-core" aria-hidden="true">
      <span class="vl-matrix13-cascade-node" style="--d:0;--x:16px"></span>
      <span class="vl-matrix13-cascade-node" style="--d:.15;--x:48px"></span>
      <span class="vl-matrix13-cascade-node" style="--d:.3;--x:80px"></span>
      <span class="vl-matrix13-cascade-node" style="--d:.45;--x:112px"></span>
      <span class="vl-matrix13-cascade-node" style="--d:.6;--x:144px"></span>
      <span class="vl-matrix13-cascade-core"></span>
    </div>`,
    css: `.vl-matrix13-cascade-core {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1d6aa0);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(150deg, #061827, #0a3454 58%, #04111f);
}
.vl-matrix13-cascade-node {
  position: absolute;
  top: 50%;
  left: var(--x);
  width: 10px;
  height: 10px;
  margin-top: -5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 78%, #e7f4ff);
  animation: vl-matrix13-cascade-node calc(var(--loader-speed) * 1.6) cubic-bezier(.2, 0, .35, 1) infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix13-cascade-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix13-cascade-core calc(var(--loader-speed) * 1.02) linear infinite;
}
@keyframes vl-matrix13-cascade-node {
  0%, 100% { transform: translateY(0) scale(.42); opacity: .2; }
  50% { transform: translateY(-24px) scale(1.04); opacity: .96; }
}
@keyframes vl-matrix13-cascade-core {
  0%, 100% { transform: scale(.54); opacity: .22; }
  50% { transform: scale(1.07); opacity: 1; }
}`
  }
];
