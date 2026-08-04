export const matrixPack9LoadersA = [
  {
    id: 'matrix-aurora-grid-surge',
    name: 'Aurora Grid Surge',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A soft aurora sweeps a compressed grid lattice and fades into a synchronized core beat.',
    markup: `<div class="vl-matrix9-aurora-grid" aria-hidden="true">
      <span class="vl-matrix9-aurora-cell" style="--x:14px;--y:16px;--d:0"></span>
      <span class="vl-matrix9-aurora-cell" style="--x:42px;--y:24px;--d:.08"></span>
      <span class="vl-matrix9-aurora-cell" style="--x:72px;--y:16px;--d:.16"></span>
      <span class="vl-matrix9-aurora-cell" style="--x:102px;--y:24px;--d:.24"></span>
      <span class="vl-matrix9-aurora-cell" style="--x:132px;--y:16px;--d:.32"></span>
      <span class="vl-matrix9-aurora-cell" style="--x:160px;--y:24px;--d:.4"></span>
      <span class="vl-matrix9-aurora-core"></span>
    </div>`,
    css: `.vl-matrix9-aurora-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1d5c89);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(140deg, #061524, #073053 56%, #04121a);
}
.vl-matrix9-aurora-cell {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 84%, #eaf4fb);
  animation: vl-matrix9-aurora-cell calc(var(--loader-speed) * 1.35) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix9-aurora-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4.5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix9-aurora-core calc(var(--loader-speed) * 1.1) cubic-bezier(.26, 0, .3, 1) infinite;
}
@keyframes vl-matrix9-aurora-cell {
  0% { opacity: .18; transform: translateY(0) scale(.52); }
  50% { opacity: .96; transform: translateY(18px) scale(1); }
  100% { opacity: .18; transform: translateY(0) scale(.52); }
}
@keyframes vl-matrix9-aurora-core {
  0%, 100% { transform: scale(.52); opacity: .24; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-vector-noise-lattice',
    name: 'Vector Noise Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Micro vector dashes stutter in noise bands, then align on the same phase point.',
    markup: `<div class="vl-matrix9-noise-lattice" aria-hidden="true">
      <span class="vl-matrix9-noise" style="--x:16px;--y:22px;--d:0"></span>
      <span class="vl-matrix9-noise" style="--x:44px;--y:22px;--d:.11"></span>
      <span class="vl-matrix9-noise" style="--x:72px;--y:26px;--d:.22"></span>
      <span class="vl-matrix9-noise" style="--x:100px;--y:30px;--d:.33"></span>
      <span class="vl-matrix9-noise" style="--x:128px;--y:22px;--d:.44"></span>
      <span class="vl-matrix9-noise" style="--x:156px;--y:22px;--d:.55"></span>
      <span class="vl-matrix9-noise-core"></span>
    </div>`,
    css: `.vl-matrix9-noise-lattice {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1c5b88);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 22%, transparent), #04121e 58%);
}
.vl-matrix9-noise {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 13px;
  height: 2px;
  border-radius: 99px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 92%, #f5fbff), transparent);
  opacity: .24;
  animation: vl-matrix9-noise-line calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix9-noise-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix9-noise-core calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
@keyframes vl-matrix9-noise-line {
  0%, 100% { width: 0; opacity: .2; }
  50% { width: 15px; opacity: .94; }
}
@keyframes vl-matrix9-noise-core {
  0%, 100% { transform: scale(.56); opacity: .2; }
  50% { transform: scale(1.06); opacity: 1; }
}`
  },
  {
    id: 'matrix-helix-node-vault',
    name: 'Helix Node Vault',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Two helical node streams spin around each other and reconcile on a pulse lock.',
    markup: `<div class="vl-matrix9-helix-vault" aria-hidden="true">
      <span class="vl-matrix9-helix-thread" style="--r:18px;--d:0"></span>
      <span class="vl-matrix9-helix-thread" style="--r:26px;--d:.14"></span>
      <span class="vl-matrix9-helix-thread" style="--r:34px;--d:.28"></span>
      <span class="vl-matrix9-helix-thread" style="--r:42px;--d:.42"></span>
      <span class="vl-matrix9-helix-core"></span>
    </div>`,
    css: `.vl-matrix9-helix-vault {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5f8d);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(150deg, #071522, #0a3557 52%, #05111f);
}
.vl-matrix9-helix-thread {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 5px;
  height: 2px;
  border-radius: 99px;
  background: color-mix(in srgb, var(--loader-accent) 84%, #e8f3fb);
  transform-origin: center;
  animation: vl-matrix9-helix-rotate calc(var(--loader-speed) * 1.85) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix9-helix-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix9-helix-core calc(var(--loader-speed) * 1.1) cubic-bezier(.2, 0, .3, 1) infinite;
}
.vl-matrix9-helix-thread::before,
.vl-matrix9-helix-thread::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: inherit;
}
.vl-matrix9-helix-thread::before {
  left: -5px;
  top: 0;
}
.vl-matrix9-helix-thread::after {
  right: -5px;
  top: 0;
}
@keyframes vl-matrix9-helix-rotate {
  0% { transform: translate(-50%, -50%) rotate(0deg) translateX(var(--r)); opacity: .3; }
  50% { transform: translate(-50%, -50%) rotate(180deg) translateX(calc(var(--r) + 10px)); opacity: .95; }
  100% { transform: translate(-50%, -50%) rotate(360deg) translateX(var(--r)); opacity: .3; }
}
@keyframes vl-matrix9-helix-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.56); opacity: .24; }
  50% { transform: translate(-50%, -50%) scale(1.07); opacity: 1; }
}`
  },
  {
    id: 'matrix-gatewave-cascade',
    name: 'Gatewave Cascade',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Nested gates emit synchronized wave pulses while inner checkpoints toggle in sequence.',
    markup: `<div class="vl-matrix9-gatewave" aria-hidden="true">
      <span class="vl-matrix9-gatewave-rad" style="--s:40px;--d:0"></span>
      <span class="vl-matrix9-gatewave-rad" style="--s:52px;--d:.13"></span>
      <span class="vl-matrix9-gatewave-rad" style="--s:64px;--d:.26"></span>
      <span class="vl-matrix9-gatewave-rad" style="--s:76px;--d:.39"></span>
      <span class="vl-matrix9-gatewave-core"></span>
    </div>`,
    css: `.vl-matrix9-gatewave {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #1d5b84);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 54%, color-mix(in srgb, var(--loader-accent) 18%, transparent), #04121a 58%);
}
.vl-matrix9-gatewave-rad {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--s);
  height: var(--s);
  margin: calc(var(--s) / -2);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 84%, #f0f7ff);
  border-radius: 50%;
  opacity: .24;
  animation: vl-matrix9-gatewave-rad calc(var(--loader-speed) * 1.8) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix9-gatewave-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix9-gatewave-core calc(var(--loader-speed) * 1.08) linear infinite;
}
@keyframes vl-matrix9-gatewave-rad {
  0%, 100% { transform: translate(-50%, -50%) scale(.2); opacity: .16; }
  55% { transform: translate(-50%, -50%) scale(1.08); opacity: .96; }
}
@keyframes vl-matrix9-gatewave-core {
  0%, 100% { transform: scale(.52); opacity: .24; }
  50% { transform: scale(1.09); opacity: 1; }
}`
  },
  {
    id: 'matrix-axon-vector-orbit',
    name: 'Axon Vector Orbit',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Vector points orbit a central axis and lock into an axon-like wave on alternating beats.',
    markup: `<div class="vl-matrix9-axon-orbit" aria-hidden="true">
      <span class="vl-matrix9-axon-orbit-node" style="--a:0deg;--d:0"></span>
      <span class="vl-matrix9-axon-orbit-node" style="--a:70deg;--d:.12"></span>
      <span class="vl-matrix9-axon-orbit-node" style="--a:140deg;--d:.24"></span>
      <span class="vl-matrix9-axon-orbit-node" style="--a:210deg;--d:.36"></span>
      <span class="vl-matrix9-axon-orbit-node" style="--a:280deg;--d:.48"></span>
      <span class="vl-matrix9-axon-orbit-core"></span>
    </div>`,
    css: `.vl-matrix9-axon-orbit {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d5d8e);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(175deg, #05111f, #09284a 57%, #04111c);
}
.vl-matrix9-axon-orbit-node {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 84%, #eff6fc);
  box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 66%, transparent);
  animation: vl-matrix9-axon-orbit-node calc(var(--loader-speed) * 1.9) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix9-axon-orbit-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix9-axon-orbit-core calc(var(--loader-speed) * 1.12) ease-in-out infinite;
}
@keyframes vl-matrix9-axon-orbit-node {
  0%, 100% { transform: rotate(var(--a)) translateX(26px) scale(.4); opacity: .25; }
  50% { transform: rotate(calc(var(--a) + 190deg)) translateX(26px) scale(1); opacity: .95; }
}
@keyframes vl-matrix9-axon-orbit-core {
  0%, 100% { transform: scale(.56); opacity: .24; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  }
];
