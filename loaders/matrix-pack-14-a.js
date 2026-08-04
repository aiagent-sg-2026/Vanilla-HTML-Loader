export const matrixPack14LoadersA = [
  {
    id: 'matrix-quantum-wave-ribbon',
    name: 'Quantum Wave Ribbon',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A layered ribbon oscillates in phased waves, tightening around a luminous pulse node.',
    markup: `<div class="vl-matrix14-quantum-ribbon" aria-hidden="true">
      <span class="vl-matrix14-ribbon" style="--d:0;--y:20px;--h:44px"></span>
      <span class="vl-matrix14-ribbon" style="--d:.14;--y:38px;--h:38px"></span>
      <span class="vl-matrix14-ribbon" style="--d:.28;--y:56px;--h:32px"></span>
      <span class="vl-matrix14-ribbon" style="--d:.42;--y:24px;--h:40px"></span>
      <span class="vl-matrix14-ribbon-core"></span>
    </div>`,
    css: `.vl-matrix14-quantum-ribbon {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1c5f90);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(150deg, #061523, #0c3555 58%, #04111f);
}
.vl-matrix14-ribbon {
  position: absolute;
  left: 14px;
  top: var(--y);
  width: 160px;
  height: var(--h);
  border-radius: 99px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 82%, #e6f3ff);
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 72%, #dff5ff), transparent);
  opacity: .22;
  animation: vl-matrix14-wave-ribbon calc(var(--loader-speed) * 1.56) cubic-bezier(.2, .62, .2, 1) infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix14-ribbon-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix14-ribbon-core calc(var(--loader-speed) * 1.1) linear infinite;
}
@keyframes vl-matrix14-wave-ribbon {
  0%, 100% { transform: scaleX(.32); opacity: .2; }
  50% { transform: scaleX(1); opacity: .95; }
}
@keyframes vl-matrix14-ribbon-core {
  0%, 100% { transform: scale(.54); opacity: .18; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-axon-flux-membrane',
    name: 'Axon Flux Membrane',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Node pulses travel through a membrane field then rebound in synchronized pulses.',
    markup: `<div class="vl-matrix14-axon-membrane" aria-hidden="true">
      <span class="vl-matrix14-membrane" style="--d:0;--x:24px;--o:.34"></span>
      <span class="vl-matrix14-membrane" style="--d:.16;--x:64px;--o:.56"></span>
      <span class="vl-matrix14-membrane" style="--d:.32;--x:104px;--o:.74"></span>
      <span class="vl-matrix14-membrane" style="--d:.48;--x:144px;--o:.58"></span>
      <span class="vl-matrix14-membrane-core"></span>
    </div>`,
    css: `.vl-matrix14-axon-membrane {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f608f);
  border-radius: 14px;
  overflow: hidden;
  background: repeating-linear-gradient(110deg, #051a2c 0 7px, #0a3450 7px 8px, #051a2c 8px 16px);
}
.vl-matrix14-membrane {
  position: absolute;
  top: 18px;
  left: var(--x);
  width: 10px;
  height: 72px;
  border-radius: 16px;
  opacity: var(--o);
  transform-origin: center;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 80%, #e5f2fd) 52%, transparent);
  animation: vl-matrix14-membrane-pulse calc(var(--loader-speed) * 1.42) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix14-membrane-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix14-membrane-core calc(var(--loader-speed) * 1.12) ease-in-out infinite;
}
@keyframes vl-matrix14-membrane-pulse {
  0%, 100% { transform: scaleY(.48) scaleX(.88); opacity: .22; }
  50% { transform: scaleY(1.08) scaleX(1.05); opacity: .93; }
}
@keyframes vl-matrix14-membrane-core {
  0%, 100% { transform: scale(.54); opacity: .2; }
  50% { transform: scale(1.1); opacity: 1; }
}`
  },
  {
    id: 'matrix-spiral-data-orbit',
    name: 'Spiral Data Orbit',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Three ringlets spiral into each other then release as synchronized bursts.',
    markup: `<div class="vl-matrix14-spiral-orbit" aria-hidden="true">
      <span class="vl-matrix14-orbit-band" style="--d:0;--r:18px"></span>
      <span class="vl-matrix14-orbit-band" style="--d:.18;--r:28px"></span>
      <span class="vl-matrix14-orbit-band" style="--d:.36;--r:38px"></span>
      <span class="vl-matrix14-orbit-core"></span>
    </div>`,
    css: `.vl-matrix14-spiral-orbit {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1d5f8c);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 53%, color-mix(in srgb, var(--loader-accent) 20%, transparent), #04111d 68%);
}
.vl-matrix14-orbit-band {
  position: absolute;
  left: calc(50% - var(--r));
  top: calc(50% - var(--r));
  width: calc(var(--r) * 2);
  height: calc(var(--r) * 2);
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 78%, #dff2fc);
  animation: vl-matrix14-orbit-spiral calc(var(--loader-speed) * 1.7) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix14-orbit-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix14-orbit-core calc(var(--loader-speed) * 1.05) linear infinite;
}
@keyframes vl-matrix14-orbit-spiral {
  from { transform: rotate(0deg); opacity: .2; }
  50% { opacity: .95; }
  to { transform: rotate(360deg); opacity: .2; }
}
@keyframes vl-matrix14-orbit-core {
  0%, 100% { transform: scale(.54); opacity: .18; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-neon-cascade-mesh',
    name: 'Neon Cascade Mesh',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A mesh of neon lines blooms upward then collapses into a stable central lattice.',
    markup: `<div class="vl-matrix14-neon-mesh" aria-hidden="true">
      <span class="vl-matrix14-mesh-line" style="--d:0;--x:20px;--w:32px"></span>
      <span class="vl-matrix14-mesh-line" style="--d:.13;--x:58px;--w:28px"></span>
      <span class="vl-matrix14-mesh-line" style="--d:.26;--x:94px;--w:32px"></span>
      <span class="vl-matrix14-mesh-line" style="--d:.39;--x:132px;--w:28px"></span>
      <span class="vl-matrix14-mesh-core"></span>
    </div>`,
    css: `.vl-matrix14-neon-mesh {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d5f8a);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(135deg, #061523, #0b3352 60%, #04111f);
}
.vl-matrix14-mesh-line {
  position: absolute;
  left: var(--x);
  bottom: 12px;
  width: var(--w);
  height: 68px;
  border-radius: 99px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 82%, #dff3ff);
  background: linear-gradient(180deg, transparent 22%, color-mix(in srgb, var(--loader-accent) 68%, #e5f2fd), transparent 82%);
  animation: vl-matrix14-neon-mesh calc(var(--loader-speed) * 1.54) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix14-mesh-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix14-neon-core calc(var(--loader-speed) * 1.08) ease-in-out infinite;
}
@keyframes vl-matrix14-neon-mesh {
  0%, 100% { transform: scaleY(.35) translateY(10px); opacity: .2; }
  50% { transform: scaleY(1.08) translateY(0); opacity: .92; }
}
@keyframes vl-matrix14-neon-core {
  0%, 100% { transform: scale(.53); opacity: .2; }
  50% { transform: scale(1.07); opacity: 1; }
}`
  },
  {
    id: 'matrix-signal-fold-stack',
    name: 'Signal Fold Stack',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Short signal pulses fold and unfold through a stack then lock into a central beat.',
    markup: `<div class="vl-matrix14-signal-stack" aria-hidden="true">
      <span class="vl-matrix14-fold" style="--d:0;--x:22px"></span>
      <span class="vl-matrix14-fold" style="--d:.15;--x:58px"></span>
      <span class="vl-matrix14-fold" style="--d:.3;--x:94px"></span>
      <span class="vl-matrix14-fold" style="--d:.45;--x:130px"></span>
      <span class="vl-matrix14-fold-core"></span>
    </div>`,
    css: `.vl-matrix14-signal-stack {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1d608c);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 46%, color-mix(in srgb, var(--loader-accent) 15%, transparent), #051524 64%);
}
.vl-matrix14-fold {
  position: absolute;
  top: 12px;
  left: var(--x);
  width: 8px;
  height: 84px;
  border-radius: 4px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 84%, #e8f4fd), transparent);
  transform-origin: center;
  animation: vl-matrix14-fold-stack calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix14-fold-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix14-fold-core calc(var(--loader-speed) * 1.06) ease-in-out infinite;
}
@keyframes vl-matrix14-fold-stack {
  0%, 100% { transform: perspective(120px) rotateX(0deg) scale(.44); opacity: .23; }
  50% { transform: perspective(120px) rotateX(38deg) scale(1.05); opacity: .96; }
}
@keyframes vl-matrix14-fold-core {
  0%, 100% { transform: scale(.54); opacity: .2; }
  50% { transform: scale(1.06); opacity: 1; }
}`
  }
];
