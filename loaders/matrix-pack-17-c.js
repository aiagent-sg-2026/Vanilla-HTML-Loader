export const matrixPack17LoadersC = [
  {
    id: 'matrix-spectral-refractor-rings',
    name: 'Spectral Refractor Rings',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Overlapping refractor rings rotate through phase-shifted delays, creating layered spectral pulses.',
    markup: `<div class="vl-matrix17c-refractor" role="img" aria-label="Spectral refractor rings">
      <span class="vl-matrix17c-refractor-ring" style="--d:0;--s:30px"></span>
      <span class="vl-matrix17c-refractor-ring" style="--d:.15;--s:40px"></span>
      <span class="vl-matrix17c-refractor-ring" style="--d:.3;--s:50px"></span>
      <span class="vl-matrix17c-refractor-ring" style="--d:.45;--s:60px"></span>
      <span class="vl-matrix17c-refractor-ring" style="--d:.6;--s:70px"></span>
    </div>`,
    css: `.vl-matrix17c-refractor {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1a4d70);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 54%, color-mix(in srgb, var(--loader-accent) 22%, transparent), #040d18 64%),
    radial-gradient(circle at 22% 20%, color-mix(in srgb, var(--loader-accent) 16%, transparent), transparent 48%);
}
.vl-matrix17c-refractor-ring {
  position: absolute;
  left: 50%;
  top: 54px;
  width: var(--s);
  height: var(--s);
  margin-left: calc(var(--s) / -2);
  margin-top: calc(var(--s) / -2);
  border-radius: 50%;
  border: 1px dashed color-mix(in srgb, var(--loader-accent) 78%, #dff4ff);
  transform-origin: center;
  opacity: .22;
  animation: vl-matrix17c-refractor calc(var(--loader-speed) * 1.8) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17c-refractor {
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(.42); opacity: .18; }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.06); opacity: .94; }
  100% { transform: translate(-50%, -50%) rotate(360deg) scale(.42); opacity: .18; }
}`
  },
  {
    id: 'matrix-lens-scan-stack',
    name: 'Lens Scan Stack',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Vertical lens scans shift between compressed and expanded states in a synchronized stack.',
    markup: `<div class="vl-matrix17c-lens-scan" role="img" aria-label="Lens scan stack">
      <span style="--x:10px;--d:0"></span>
      <span style="--x:32px;--d:.08"></span>
      <span style="--x:54px;--d:.16"></span>
      <span style="--x:76px;--d:.24"></span>
      <span style="--x:98px;--d:.32"></span>
      <span style="--x:120px;--d:.4"></span>
      <span style="--x:142px;--d:.48"></span>
      <span style="--x:164px;--d:.56"></span>
    </div>`,
    css: `.vl-matrix17c-lens-scan {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1d547a);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(170deg, #06111f, #0a233e 62%, #030c15);
}
.vl-matrix17c-lens-scan span {
  position: absolute;
  left: var(--x);
  top: 0;
  width: 8px;
  height: 108px;
  border-radius: 4px;
  transform-origin: center;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 84%, #ecf6ff), transparent);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 38%, transparent);
  animation: vl-matrix17c-lens-scan calc(var(--loader-speed) * 1.6) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17c-lens-scan {
  0%, 100% { transform: scaleY(.28); opacity: .22; }
  50% { transform: scaleY(1); opacity: .96; }
}`
  },
  {
    id: 'matrix-photon-gate-ribbon',
    name: 'Photon Gate Ribbon',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Diode-like ribbons sweep across a dark gate and phase in mirror pairs.',
    markup: `<div class="vl-matrix17c-photon-ribbon" role="img" aria-label="Photon gate ribbon">
      <span class="vl-matrix17c-rib-a" style="--a:6deg;--d:0"></span>
      <span class="vl-matrix17c-rib-a" style="--a:42deg;--d:.13"></span>
      <span class="vl-matrix17c-rib-a" style="--a:78deg;--d:.26"></span>
      <span class="vl-matrix17c-rib-b" style="--a:114deg;--d:.39"></span>
      <span class="vl-matrix17c-rib-b" style="--a:150deg;--d:.52"></span>
      <span class="vl-matrix17c-rib-b" style="--a:186deg;--d:.65"></span>
    </div>`,
    css: `.vl-matrix17c-photon-ribbon {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #163f68);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 58%, color-mix(in srgb, var(--loader-accent) 20%, transparent), transparent 48%),
    linear-gradient(145deg, #061625, #0a223c 60%, #040f17);
}
.vl-matrix17c-rib-a,
.vl-matrix17c-rib-b {
  position: absolute;
  left: 50%;
  top: 58px;
  width: 132px;
  height: 6px;
  margin-top: -3px;
  border-radius: 99px;
  transform-origin: center;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 84%, #e8f5ff), transparent);
  animation: vl-matrix17c-photon-ribbon calc(var(--loader-speed) * 1.7) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17c-rib-a {
  transform: translate(-50%, 0) rotate(var(--a));
}
.vl-matrix17c-rib-b {
  transform: translate(-50%, 0) rotate(calc(var(--a) * -1));
  opacity: .46;
}
@keyframes vl-matrix17c-photon-ribbon {
  0% { transform: translate(-50%, 0) rotate(var(--a)) scaleX(.38); opacity: .16; }
  50% { transform: translate(-50%, 0) rotate(calc(var(--a) + 360deg)) scaleX(1.06); opacity: .95; }
  100% { transform: translate(-50%, 0) rotate(calc(var(--a) + 720deg)) scaleX(.38); opacity: .16; }
}`
  },
  {
    id: 'matrix-bit-orbit-loop',
    name: 'Bit Orbit Loop',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Small bit nodes spin on intersecting loops while pulsing at different orbit radii.',
    markup: `<div class="vl-matrix17c-bit-orbit" role="img" aria-label="Bit orbit loop">
      <span style="--r:20px;--d:0"></span>
      <span style="--r:28px;--d:.16"></span>
      <span style="--r:36px;--d:.32"></span>
      <span style="--r:44px;--d:.48"></span>
      <span style="--r:52px;--d:.64"></span>
      <span class="vl-matrix17c-bit-node" style="--r:28px;--d:.72"></span>
    </div>`,
    css: `.vl-matrix17c-bit-orbit {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #18496f);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #071a31 0 24%, #050d16 72%);
}
.vl-matrix17c-bit-orbit span,
.vl-matrix17c-bit-node {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 9px;
  height: 9px;
  margin: -4.5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 88%, #ebf9ff);
  animation: vl-matrix17c-bit-orbit calc(var(--loader-speed) * 1.6) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17c-bit-orbit span {
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 54%, transparent);
  transform: rotate(0deg) translateX(var(--r));
}
.vl-matrix17c-bit-node {
  width: 10px;
  height: 10px;
  margin: -5px;
  background: var(--loader-accent);
  animation-name: vl-matrix17c-bit-core;
  transform: translate(-50%, -50%);
}
@keyframes vl-matrix17c-bit-orbit {
  to { transform: rotate(360deg) translateX(var(--r)); }
}
@keyframes vl-matrix17c-bit-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.78); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  },
  {
    id: 'matrix-halo-thread-chamber',
    name: 'Halo Thread Chamber',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A chamber of thin halo threads braids with phase-shifted pulses and occasional fades.',
    markup: `<div class="vl-matrix17c-halo-thread" role="img" aria-label="Halo thread chamber">
      <span class="vl-matrix17c-thread" style="--x:22px;--d:0"></span>
      <span class="vl-matrix17c-thread" style="--x:52px;--d:.14"></span>
      <span class="vl-matrix17c-thread" style="--x:82px;--d:.28"></span>
      <span class="vl-matrix17c-thread" style="--x:112px;--d:.42"></span>
      <span class="vl-matrix17c-thread" style="--x:142px;--d:.56"></span>
    </div>`,
    css: `.vl-matrix17c-halo-thread {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1b577f);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 14%, transparent), #040d16 66%);
}
.vl-matrix17c-thread {
  position: absolute;
  left: var(--x);
  top: 6px;
  width: 6px;
  height: 96px;
  border-radius: 3px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 84%, #f0f8ff), transparent);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 36%, transparent);
  animation: vl-matrix17c-halo-thread calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17c-halo-thread {
  0%, 100% { transform: scaleY(.36); opacity: .2; }
  50% { transform: scaleY(1); opacity: .92; }
}`
  },
  {
    id: 'matrix-lumen-cascade-grid',
    name: 'Lumen Cascade Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Lumen pulses cascade across a pseudo-grid while maintaining a low-opacity central anchor.',
    markup: `<div class="vl-matrix17c-lumen-grid" role="img" aria-label="Lumen cascade grid">
      <span class="vl-matrix17c-lumen" style="--x:16px;--y:12px;--d:0"></span>
      <span class="vl-matrix17c-lumen" style="--x:52px;--y:12px;--d:.1"></span>
      <span class="vl-matrix17c-lumen" style="--x:88px;--y:12px;--d:.2"></span>
      <span class="vl-matrix17c-lumen" style="--x:124px;--y:12px;--d:.3"></span>
      <span class="vl-matrix17c-lumen" style="--x:160px;--y:12px;--d:.4"></span>
      <span class="vl-matrix17c-lumen" style="--x:16px;--y:48px;--d:.5"></span>
      <span class="vl-matrix17c-lumen" style="--x:52px;--y:48px;--d:.6"></span>
      <span class="vl-matrix17c-lumen" style="--x:88px;--y:48px;--d:.7"></span>
      <span class="vl-matrix17c-lumen" style="--x:124px;--y:48px;--d:.8"></span>
      <span class="vl-matrix17c-lumen" style="--x:160px;--y:48px;--d:.9"></span>
      <span class="vl-matrix17c-anchor"></span>
    </div>`,
    css: `.vl-matrix17c-lumen-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1d5a81);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(156deg, #061320, #0b223c 60%, #040d16);
}
.vl-matrix17c-lumen {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 10px;
  height: 10px;
  margin: -4px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 78%, #eff9ff);
  animation: vl-matrix17c-lumen calc(var(--loader-speed) * 1.4) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17c-anchor {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17c-anchor calc(var(--loader-speed) * 1.4) ease-in-out infinite;
}
@keyframes vl-matrix17c-lumen {
  0%, 100% { transform: scale(.44); opacity: .12; }
  50% { transform: scale(1.35); opacity: .92; }
}
@keyframes vl-matrix17c-anchor {
  0%, 100% { transform: translate(-50%, -50%) scale(.72); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.28); opacity: .95; }
}`
  },
  {
    id: 'matrix-binary-rift-lattice',
    name: 'Binary Rift Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Binary rifts open and close as angled lattices shift between front and back depth.',
    markup: `<div class="vl-matrix17c-rift" role="img" aria-label="Binary rift lattice">
      <span style="--x:14px;--d:0"></span>
      <span style="--x:44px;--d:.1"></span>
      <span style="--x:74px;--d:.2"></span>
      <span style="--x:104px;--d:.3"></span>
      <span style="--x:134px;--d:.4"></span>
      <span style="--x:164px;--d:.5"></span>
    </div>`,
    css: `.vl-matrix17c-rift {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1a5175);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(160deg, #071325 0 34%, #030d14 100%);
}
.vl-matrix17c-rift span {
  position: absolute;
  left: var(--x);
  top: 0;
  width: 10px;
  height: 108px;
  margin-left: -5px;
  border-radius: 2px;
  transform-origin: center;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 86%, #eaf5ff), transparent);
  animation: vl-matrix17c-rift calc(var(--loader-speed) * 1.75) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17c-rift {
  0%, 100% { transform: translateY(0) skewX(0deg) scaleY(.34); opacity: .22; }
  50% { transform: translateY(-4px) skewX(18deg) scaleY(1.02); opacity: .92; }
}`
  },
  {
    id: 'matrix-drift-helix-rings',
    name: 'Drift Helix Rings',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Two drifting helix rings alternate depth and phase, then merge at the orbit midpoint.',
    markup: `<div class="vl-matrix17c-helix" role="img" aria-label="Drift helix rings">
      <span class="vl-matrix17c-helix-ring" style="--d:0;--r:30px;--c:#8a"></span>
      <span class="vl-matrix17c-helix-ring" style="--d:.2;--r:38px;--c:#7b"></span>
      <span class="vl-matrix17c-helix-ring" style="--d:.4;--r:46px;--c:#6c"></span>
      <span class="vl-matrix17c-helix-ring" style="--d:.6;--r:54px;--c:#5d"></span>
    </div>`,
    css: `.vl-matrix17c-helix {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #194f74);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 52%, color-mix(in srgb, var(--loader-accent) 16%, transparent), transparent 56%),
    linear-gradient(145deg, #061423, #0a2440 62%, #040d16);
}
.vl-matrix17c-helix-ring {
  position: absolute;
  left: 50%;
  top: 54px;
  width: var(--r);
  height: var(--r);
  margin-left: calc(var(--r) / -2);
  margin-top: calc(var(--r) / -2);
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 84%, #dff4ff);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 36%, transparent);
  transform-origin: center;
  opacity: .32;
  animation: vl-matrix17c-helix calc(var(--loader-speed) * 1.9) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17c-helix {
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(.58); opacity: .2; }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.07); opacity: .95; }
  100% { transform: translate(-50%, -50%) rotate(360deg) scale(.58); opacity: .2; }
}`
  },
  {
    id: 'matrix-quantum-axon-mesh',
    name: 'Quantum Axon Mesh',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A mesh of quantum axon lines intersects as delayed phase lines then collapses back in loops.',
    markup: `<div class="vl-matrix17c-axon-mesh" role="img" aria-label="Quantum axon mesh">
      <span style="--x:22px;--d:0"></span>
      <span style="--x:48px;--d:.13"></span>
      <span style="--x:74px;--d:.26"></span>
      <span style="--x:100px;--d:.39"></span>
      <span style="--x:126px;--d:.52"></span>
      <span style="--x:152px;--d:.65"></span>
      <span style="--x:178px;--d:.78"></span>
    </div>`,
    css: `.vl-matrix17c-axon-mesh {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 20%, #1d577d);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(140deg, #061224, #08213a 58%, #040c14);
}
.vl-matrix17c-axon-mesh span {
  position: absolute;
  left: var(--x);
  top: -2px;
  width: 6px;
  height: 112px;
  border-radius: 99px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 80%, #ebf7ff), transparent);
  transform-origin: center;
  animation: vl-matrix17c-axon-mesh calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17c-axon-mesh {
  0%, 100% { transform: rotate(0deg) scaleY(.3); opacity: .2; }
  50% { transform: rotate(24deg) scaleY(1); opacity: .9; }
}`
  },
  {
    id: 'matrix-axiometric-scan-knot',
    name: 'Axiometric Scan Knot',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Crossing scan knots stretch and contract, locking momentarily at four axis points.',
    markup: `<div class="vl-matrix17c-scan-knot" role="img" aria-label="Axiometric scan knot">
      <span class="vl-matrix17c-knot" style="--r:0deg;--d:0"></span>
      <span class="vl-matrix17c-knot" style="--r:90deg;--d:.16"></span>
      <span class="vl-matrix17c-knot" style="--r:180deg;--d:.32"></span>
      <span class="vl-matrix17c-knot" style="--r:270deg;--d:.48"></span>
      <span class="vl-matrix17c-knot-core"></span>
    </div>`,
    css: `.vl-matrix17c-scan-knot {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5c84);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 58%, #071827 0 36%, #040b13 100%);
}
.vl-matrix17c-knot {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 72px;
  height: 72px;
  margin: -36px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 82%, #dff4ff);
  border-radius: 12px;
  transform: rotate(var(--r));
  opacity: .26;
  animation: vl-matrix17c-scan-knot calc(var(--loader-speed) * 1.82) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17c-knot-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #f3fbff);
  animation: vl-matrix17c-scan-knot-core calc(var(--loader-speed) * 1.82) ease-in-out infinite;
}
@keyframes vl-matrix17c-scan-knot {
  0%, 100% { transform: rotate(var(--r)) scale(.54); opacity: .2; }
  50% { transform: rotate(calc(var(--r) + 180deg)) scale(1.05); opacity: .95; }
}
@keyframes vl-matrix17c-scan-knot-core {
  0%, 100% { transform: scale(.74); opacity: .24; }
  50% { transform: scale(1.34); opacity: .95; }
}`
  }
];
