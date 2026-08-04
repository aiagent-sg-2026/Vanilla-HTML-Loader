export const matrixPack15LoadersB = [
  {
    id: 'matrix-halo-node-wave',
    name: 'Halo Node Wave',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Halo nodes oscillate around a central anchor and emit soft wave pulses.',
    markup: `<div class="vl-matrix15-halo-wave" aria-hidden="true">
      <span class="vl-matrix15-halo" style="--d:0;--a:10deg"></span>
      <span class="vl-matrix15-halo" style="--d:.15;--a:82deg"></span>
      <span class="vl-matrix15-halo" style="--d:.3;--a:154deg"></span>
      <span class="vl-matrix15-halo" style="--d:.45;--a:226deg"></span>
      <span class="vl-matrix15-halo" style="--d:.6;--a:298deg"></span>
      <span class="vl-matrix15-halo-core"></span>
    </div>`,
    css: `.vl-matrix15-halo-wave {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1f5f90);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, color-mix(in srgb, var(--loader-accent) 20%, transparent), #04111f 66%);
}
.vl-matrix15-halo {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 34px;
  height: 34px;
  margin: -17px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 82%, #dcf1fd);
  transform: rotate(var(--a));
  animation: vl-matrix15-halo-ring calc(var(--loader-speed) * 1.62) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix15-halo-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix15-halo-core calc(var(--loader-speed) * 1.03) linear infinite;
}
@keyframes vl-matrix15-halo-ring {
  0%, 100% { transform: rotate(var(--a)) scale(.5); opacity: .2; }
  50% { transform: rotate(calc(var(--a) + 360deg)) scale(.98); opacity: .95; }
}
@keyframes vl-matrix15-halo-core {
  0%, 100% { transform: scale(.54); opacity: .2; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-axon-lattice-wave',
    name: 'Axon Lattice Wave',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Pulses travel through a lattice of axon bars and rebound at the midline.',
    markup: `<div class="vl-matrix15-axon-lattice" aria-hidden="true">
      <span class="vl-matrix15-axon-bar" style="--d:0;--x:16px"></span>
      <span class="vl-matrix15-axon-bar" style="--d:.2;--x:52px"></span>
      <span class="vl-matrix15-axon-bar" style="--d:.4;--x:88px"></span>
      <span class="vl-matrix15-axon-bar" style="--d:.6;--x:124px"></span>
      <span class="vl-matrix15-axon-core"></span>
    </div>`,
    css: `.vl-matrix15-axon-lattice {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1d5f8f);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(160deg, #06152a, #0c3251 58%, #04111d);
}
.vl-matrix15-axon-bar {
  position: absolute;
  left: var(--x);
  top: 12px;
  width: 8px;
  height: 82px;
  border-radius: 4px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 84%, #e8f4fd), transparent);
  animation: vl-matrix15-axon-bar calc(var(--loader-speed) * 1.4) cubic-bezier(.2, .62, .2, 1) infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix15-axon-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix15-axon-core calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
@keyframes vl-matrix15-axon-bar {
  0%, 100% { transform: scaleY(.35); opacity: .22; }
  50% { transform: scaleY(1.06); opacity: .95; }
}
@keyframes vl-matrix15-axon-core {
  0%, 100% { transform: scale(.54); opacity: .18; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-photon-pulse-strand',
    name: 'Photon Pulse Strand',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Thin strands pulse in synchronized bursts, then thread through a stable core.',
    markup: `<div class="vl-matrix15-photon-strand" aria-hidden="true">
      <span class="vl-matrix15-strand" style="--d:0;--x:20px"></span>
      <span class="vl-matrix15-strand" style="--d:.18;--x:52px"></span>
      <span class="vl-matrix15-strand" style="--d:.36;--x:84px"></span>
      <span class="vl-matrix15-strand" style="--d:.54;--x:116px"></span>
      <span class="vl-matrix15-strand" style="--d:.72;--x:148px"></span>
      <span class="vl-matrix15-strand-core"></span>
    </div>`,
    css: `.vl-matrix15-photon-strand {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d608b);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 58%, color-mix(in srgb, var(--loader-accent) 14%, transparent), #051320 66%);
}
.vl-matrix15-strand {
  position: absolute;
  left: var(--x);
  top: 50%;
  width: 7px;
  height: 40px;
  margin-top: -20px;
  border-radius: 99px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 80%, #e6f4fd), transparent);
  transform-origin: center;
  animation: vl-matrix15-strand calc(var(--loader-speed) * 1.52) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix15-strand-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix15-strand-core calc(var(--loader-speed) * 1.08) linear infinite;
}
@keyframes vl-matrix15-strand {
  0%, 100% { transform: scaleY(.28); opacity: .2; }
  50% { transform: scaleY(1.08); opacity: .95; }
}
@keyframes vl-matrix15-strand-core {
  0%, 100% { transform: scale(.53); opacity: .18; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-vault-lumen-fade',
    name: 'Vault Lumen Fade',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Layered vault bands fade in and out, then converge at a glowing latch.',
    markup: `<div class="vl-matrix15-vault-fade" aria-hidden="true">
      <span class="vl-matrix15-vault" style="--d:0;--y:14px;--h:76px"></span>
      <span class="vl-matrix15-vault" style="--d:.17;--y:24px;--h:56px"></span>
      <span class="vl-matrix15-vault" style="--d:.34;--y:34px;--h:44px"></span>
      <span class="vl-matrix15-vault" style="--d:.51;--y:44px;--h:32px"></span>
      <span class="vl-matrix15-vault" style="--d:.68;--y:54px;--h:20px"></span>
      <span class="vl-matrix15-vault-core"></span>
    </div>`,
    css: `.vl-matrix15-vault-fade {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1e5f90);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(150deg, #061724, #0a3352 58%, #04111d);
}
.vl-matrix15-vault {
  position: absolute;
  left: 14px;
  top: var(--y);
  width: 160px;
  height: var(--h);
  border-radius: 99px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 78%, #e1f2ff);
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 72%, #dbf1ff), transparent);
  animation: vl-matrix15-vault calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix15-vault-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix15-vault-core calc(var(--loader-speed) * 1.03) ease-in-out infinite;
}
@keyframes vl-matrix15-vault {
  0%, 100% { transform: scaleX(.36); opacity: .2; }
  50% { transform: scaleX(1); opacity: .94; }
}
@keyframes vl-matrix15-vault-core {
  0%, 100% { transform: scale(.54); opacity: .2; }
  50% { transform: scale(1.09); opacity: 1; }
}`
  },
  {
    id: 'matrix-spectral-core-ripple',
    name: 'Spectral Core Ripple',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A core sends ripple rings through radial channels, then recedes in phase.',
    markup: `<div class="vl-matrix15-spectral-ripple" aria-hidden="true">
      <span class="vl-matrix15-ripple" style="--d:0;--p:12px"></span>
      <span class="vl-matrix15-ripple" style="--d:.16;--p:20px"></span>
      <span class="vl-matrix15-ripple" style="--d:.32;--p:28px"></span>
      <span class="vl-matrix15-ripple" style="--d:.48;--p:36px"></span>
      <span class="vl-matrix15-spectral-core"></span>
    </div>`,
    css: `.vl-matrix15-spectral-ripple {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5f8f);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 18%, transparent), #04111d 64%);
}
.vl-matrix15-ripple {
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(var(--p) * 2);
  height: calc(var(--p) * 2);
  margin: calc(var(--p) * -1);
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 78%, #dff4ff);
  animation: vl-matrix15-ripple calc(var(--loader-speed) * 1.62) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix15-spectral-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix15-spectral-core calc(var(--loader-speed) * 1.07) linear infinite;
}
@keyframes vl-matrix15-ripple {
  0%, 100% { transform: scale(.4); opacity: .22; }
  50% { transform: scale(1.05); opacity: .95; }
}
@keyframes vl-matrix15-spectral-core {
  0%, 100% { transform: scale(.54); opacity: .18; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  }
];
