export const matrixPack17LoadersG = [
  {
    id: 'matrix-neon-ribbon-matrix',
    name: 'Neon Ribbon Matrix',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Neon ribbons sweep between mirrored anchors while node pulses follow a soft wave train.',
    markup: `<div class="vl-matrix17g-neon-ribbon" role="img" aria-label="Neon ribbon matrix">
      <span class="vl-matrix17g-ribbon" style="--d:0;--i:0deg"></span>
      <span class="vl-matrix17g-ribbon" style="--d:.12;--i:72deg"></span>
      <span class="vl-matrix17g-ribbon" style="--d:.24;--i:144deg"></span>
      <span class="vl-matrix17g-ribbon" style="--d:.36;--i:216deg"></span>
      <span class="vl-matrix17g-ribbon" style="--d:.48;--i:288deg"></span>
    </div>`,
    css: `.vl-matrix17g-neon-ribbon {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6e98);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #061a2d 0 18%, #040a14 68%);
}
.vl-matrix17g-ribbon {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 132px;
  height: 4px;
  margin: -2px -66px;
  transform-origin: 66px 50%;
  transform: rotate(var(--i));
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 86%, #ecf9ff), transparent);
  animation: vl-matrix17g-ribbon calc(var(--loader-speed) * 1.48) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17g-ribbon {
  0%, 100% { transform: rotate(var(--i)) scaleX(.36); opacity: .16; }
  50% { transform: rotate(calc(var(--i) + 8deg)) scaleX(1.02); opacity: .94; }
}`
  },
  {
    id: 'matrix-helix-glyph-rings',
    name: 'Helix Glyph Rings',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Interwoven helix rings rotate in opposite directions, revealing a braided signal trace.',
    markup: `<div class="vl-matrix17g-helix-rings" role="img" aria-label="Helix glyph rings">
      <span class="vl-matrix17g-glyph-ring" style="--r:0deg;--d:0"></span>
      <span class="vl-matrix17g-glyph-ring" style="--r:60deg;--d:.1"></span>
      <span class="vl-matrix17g-glyph-ring" style="--r:120deg;--d:.2"></span>
      <span class="vl-matrix17g-glyph-ring" style="--r:180deg;--d:.3"></span>
      <span class="vl-matrix17g-glyph-ring-core"></span>
    </div>`,
    css: `.vl-matrix17g-helix-rings {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #236a95);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(150deg, #061727, #0a3254 62%, #040a13);
}
.vl-matrix17g-glyph-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 86px;
  height: 86px;
  margin: -43px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 80%, #dff1ff);
  border-radius: 50%;
  transform-origin: 43px 43px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  animation: vl-matrix17g-ring calc(var(--loader-speed) * 1.7) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17g-glyph-ring-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17g-ring-core calc(var(--loader-speed) * 1.7) ease-in-out infinite;
}
@keyframes vl-matrix17g-ring {
  0% { transform: rotate(var(--r)) scale(.56); opacity: .2; }
  50% { transform: rotate(calc(var(--r) + 180deg)) scale(1); opacity: .95; }
  100% { transform: rotate(calc(var(--r) + 360deg)) scale(.56); opacity: .2; }
}
@keyframes vl-matrix17g-ring-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.82); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  },
  {
    id: 'matrix-photon-axis-scan',
    name: 'Photon Axis Scan',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Axis-aligned photon lines scan in crossing bursts across a narrow data axis.',
    markup: `<div class="vl-matrix17g-axis-scan" role="img" aria-label="Photon axis scan">
      <span class="vl-matrix17g-axis" style="--o:1;--d:0"></span>
      <span class="vl-matrix17g-axis" style="--o:2;--d:.14"></span>
      <span class="vl-matrix17g-axis" style="--o:3;--d:.28"></span>
      <span class="vl-matrix17g-axis" style="--o:4;--d:.42"></span>
      <span class="vl-matrix17g-axis" style="--o:5;--d:.56"></span>
      <span class="vl-matrix17g-axis-core"></span>
    </div>`,
    css: `.vl-matrix17g-axis-scan {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d658d);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 55%, #061724 0 19%, #040a13 68%);
}
.vl-matrix17g-axis {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 72px;
  margin: -36px -1px;
  border-radius: 999px;
  transform-origin: 50% 50%;
  transform: rotate(calc((var(--o) - 1) * 30deg));
  background: linear-gradient(180deg, transparent 0, color-mix(in srgb, var(--loader-accent) 80%, #dff4ff) 56%, transparent 100%);
  animation: vl-matrix17g-axis calc(var(--loader-speed) * 1.35) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17g-axis-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 92%, #f1fbff);
  animation: vl-matrix17g-axis-core calc(var(--loader-speed) * 1.35) linear infinite;
}
@keyframes vl-matrix17g-axis {
  0%, 100% { transform: rotate(calc((var(--o) - 1) * 30deg)) scaleY(.52); opacity: .16; }
  50% { transform: rotate(calc((var(--o) - 1) * 30deg + 180deg)) scaleY(1.05); opacity: .95; }
}
@keyframes vl-matrix17g-axis-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.82); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  },
  {
    id: 'matrix-orbit-cascade-lattice',
    name: 'Orbit Cascade Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Three cascade rings orbit through a lattice scaffold and blend with a delayed glow.',
    markup: `<div class="vl-matrix17g-orbit-cascade" role="img" aria-label="Orbit cascade lattice">
      <span class="vl-matrix17g-cascade-ring" style="--s:46px;--r:0deg;--d:0"></span>
      <span class="vl-matrix17g-cascade-ring" style="--s:68px;--r:120deg;--d:.16"></span>
      <span class="vl-matrix17g-cascade-ring" style="--s:90px;--r:240deg;--d:.32"></span>
      <span class="vl-matrix17g-cascade-core"></span>
    </div>`,
    css: `.vl-matrix17g-orbit-cascade {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6d95);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(148deg, #061829, #0b2f52 62%, #040a13);
}
.vl-matrix17g-cascade-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--s);
  height: var(--s);
  margin: calc(var(--s) / -2);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 76%, #e0f3ff);
  border-radius: 50%;
  transform-origin: 50% 50%;
  transform: rotate(var(--r)) scale(.7);
  animation: vl-matrix17g-cascade calc(var(--loader-speed) * 1.5) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17g-cascade-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17g-cascade-core calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-matrix17g-cascade {
  0% { transform: rotate(var(--r)) scale(.64); opacity: .16; }
  50% { transform: rotate(calc(var(--r) + 180deg)) scale(1); opacity: .95; }
  100% { transform: rotate(calc(var(--r) + 360deg)) scale(.64); opacity: .16; }
}
@keyframes vl-matrix17g-cascade-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.78); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.16); opacity: .94; }
}`
  },
  {
    id: 'matrix-vector-tension-field',
    name: 'Vector Tension Field',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A vector tension field stretches and relaxes along alternating diagonals.',
    markup: `<div class="vl-matrix17g-tension-field" role="img" aria-label="Vector tension field">
      <span class="vl-matrix17g-tension" style="--x:16px;--y:16px;--d:0"></span>
      <span class="vl-matrix17g-tension" style="--x:52px;--y:32px;--d:.12"></span>
      <span class="vl-matrix17g-tension" style="--x:90px;--y:18px;--d:.24"></span>
      <span class="vl-matrix17g-tension" style="--x:128px;--y:36px;--d:.36"></span>
      <span class="vl-matrix17g-tension" style="--x:166px;--y:20px;--d:.48"></span>
      <span class="vl-matrix17g-tension" style="--x:16px;--y:90px;--d:.6"></span>
      <span class="vl-matrix17g-tension" style="--x:52px;--y:74px;--d:.72"></span>
      <span class="vl-matrix17g-tension" style="--x:90px;--y:88px;--d:.84"></span>
      <span class="vl-matrix17g-tension" style="--x:128px;--y:70px;--d:.96"></span>
      <span class="vl-matrix17g-tension" style="--x:166px;--y:86px;--d:1.08"></span>
    </div>`,
    css: `.vl-matrix17g-tension-field {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #236b93);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(170deg, #071826, #0a3354 60%, #040a13);
}
.vl-matrix17g-tension {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 88%, #ebf8ff);
  box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 46%, transparent);
  animation: vl-matrix17g-tension calc(var(--loader-speed) * 1.3) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17g-tension {
  0%, 100% { transform: scale(.52); opacity: .2; }
  50% { transform: scale(1.1); opacity: .96; }
}`
  },
  {
    id: 'matrix-chrono-pulse-gate',
    name: 'Chrono Pulse Gate',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Pulses open and close through a chrono gate with timed radial timing marks.',
    markup: `<div class="vl-matrix17g-chrono-gate" role="img" aria-label="Chrono pulse gate">
      <span class="vl-matrix17g-gate-line" style="--d:0;--a:0deg"></span>
      <span class="vl-matrix17g-gate-line" style="--d:.18;--a:90deg"></span>
      <span class="vl-matrix17g-gate-line" style="--d:.36;--a:180deg"></span>
      <span class="vl-matrix17g-gate-line" style="--d:.54;--a:270deg"></span>
      <span class="vl-matrix17g-chrono-core"></span>
    </div>`,
    css: `.vl-matrix17g-chrono-gate {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #226e95);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #061d2e 0 20%, #040a14 68%);
}
.vl-matrix17g-gate-line {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 76px;
  height: 3px;
  margin: -1.5px;
  transform-origin: 0 50%;
  transform: rotate(var(--a));
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 84%, #e6f5ff), transparent);
  animation: vl-matrix17g-gate-line calc(var(--loader-speed) * 1.4) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17g-chrono-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17g-gate-core calc(var(--loader-speed) * 1.4) linear infinite;
}
@keyframes vl-matrix17g-gate-line {
  0%, 100% { transform: rotate(var(--a)) scaleX(.4); opacity: .16; }
  50% { transform: rotate(calc(var(--a) + 180deg)) scaleX(1); opacity: .95; }
}
@keyframes vl-matrix17g-gate-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  },
  {
    id: 'matrix-radiant-node-rail',
    name: 'Radiant Node Rail',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A radiant rail sends node pulses between dual anchors with trailing glow echoes.',
    markup: `<div class="vl-matrix17g-node-rail" role="img" aria-label="Radiant node rail">
      <span class="vl-matrix17g-rail-dot" style="--x:18px;--y:86px;--d:0"></span>
      <span class="vl-matrix17g-rail-dot" style="--x:53px;--y:56px;--d:.11"></span>
      <span class="vl-matrix17g-rail-dot" style="--x:88px;--y:76px;--d:.22"></span>
      <span class="vl-matrix17g-rail-dot" style="--x:123px;--y:46px;--d:.33"></span>
      <span class="vl-matrix17g-rail-dot" style="--x:158px;--y:68px;--d:.44"></span>
      <span class="vl-matrix17g-rail-core"></span>
    </div>`,
    css: `.vl-matrix17g-node-rail {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6d97);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(160deg, #061a29, #0a3152 62%, #040a13);
}
.vl-matrix17g-rail-dot {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #ebf8ff);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 54%, transparent);
  animation: vl-matrix17g-rail-dot calc(var(--loader-speed) * 1.4) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17g-rail-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17g-rail-core calc(var(--loader-speed) * 1.4) linear infinite;
}
@keyframes vl-matrix17g-rail-dot {
  0%, 100% { transform: scale(.54); opacity: .18; }
  50% { transform: scale(1.08); opacity: .95; }
}
@keyframes vl-matrix17g-rail-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .96; }
}`
  },
  {
    id: 'matrix-crystal-orbit-cascade',
    name: 'Crystal Orbit Cascade',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Crystalline orbit markers cascade through layered geometry while alpha pulses fade in and out.',
    markup: `<div class="vl-matrix17g-crystal-orbit" role="img" aria-label="Crystal orbit cascade">
      <span class="vl-matrix17g-crystal" style="--z:16px;--d:0"></span>
      <span class="vl-matrix17g-crystal" style="--z:31px;--d:.13"></span>
      <span class="vl-matrix17g-crystal" style="--z:46px;--d:.26"></span>
      <span class="vl-matrix17g-crystal" style="--z:61px;--d:.39"></span>
      <span class="vl-matrix17g-crystal-core"></span>
    </div>`,
    css: `.vl-matrix17g-crystal-orbit {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1f6f99);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #061826 0 20%, #040a13 68%);
}
.vl-matrix17g-crystal {
  position: absolute;
  left: 50%;
  top: 54px;
  width: var(--z);
  height: var(--z);
  margin: calc(var(--z) / -2);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 82%, #deeffd);
  border-radius: 2px;
  transform-origin: 50% 50%;
  animation: vl-matrix17g-crystal calc(var(--loader-speed) * 1.6) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17g-crystal-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17g-crystal-core calc(var(--loader-speed) * 1.6) ease-in-out infinite;
}
@keyframes vl-matrix17g-crystal {
  0%, 100% { transform: translate(-50%, -50%) rotate(0deg) scale(.46); opacity: .16; }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.06); opacity: .95; }
}
@keyframes vl-matrix17g-crystal-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .96; }
}`
  },
  {
    id: 'matrix-drift-bloom-lattice',
    name: 'Drift Bloom Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Lattice blooms drift outward and pull back, forming a smooth rhythmic motion loop.',
    markup: `<div class="vl-matrix17g-bloom-lattice" role="img" aria-label="Drift bloom lattice">
      <span class="vl-matrix17g-bloom" style="--x:20px;--y:18px;--d:0"></span>
      <span class="vl-matrix17g-bloom" style="--x:51px;--y:52px;--d:.1"></span>
      <span class="vl-matrix17g-bloom" style="--x:82px;--y:24px;--d:.2"></span>
      <span class="vl-matrix17g-bloom" style="--x:113px;--y:58px;--d:.3"></span>
      <span class="vl-matrix17g-bloom" style="--x:144px;--y:30px;--d:.4"></span>
      <span class="vl-matrix17g-bloom" style="--x:175px;--y:70px;--d:.5"></span>
      <span class="vl-matrix17g-bloom-core"></span>
    </div>`,
    css: `.vl-matrix17g-bloom-lattice {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #206c95);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(140deg, #061827, #0a3153 62%, #040a13);
}
.vl-matrix17g-bloom {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #eff9ff);
  box-shadow: 0 0 9px color-mix(in srgb, var(--loader-accent) 54%, transparent);
  animation: vl-matrix17g-bloom calc(var(--loader-speed) * 1.45) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17g-bloom-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17g-bloom-core calc(var(--loader-speed) * 1.45) linear infinite;
}
@keyframes vl-matrix17g-bloom {
  0%, 100% { transform: scale(.62); opacity: .18; }
  50% { transform: scale(1.12); opacity: .96; }
}
@keyframes vl-matrix17g-bloom-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .96; }
}`
  },
  {
    id: 'matrix-axon-spiral-core',
    name: 'Axon Spiral Core',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Axon threads coil into a spiral core and periodically breathe to a stable rhythm.',
    markup: `<div class="vl-matrix17g-axon-spiral" role="img" aria-label="Axon spiral core">
      <span class="vl-matrix17g-axon" style="--d:0;--r:0deg"></span>
      <span class="vl-matrix17g-axon" style="--d:.14;--r:80deg"></span>
      <span class="vl-matrix17g-axon" style="--d:.28;--r:160deg"></span>
      <span class="vl-matrix17g-axon" style="--d:.42;--r:240deg"></span>
      <span class="vl-matrix17g-axon-core"></span>
    </div>`,
    css: `.vl-matrix17g-axon-spiral {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f6c96);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #061829 0 20%, #040a14 68%);
}
.vl-matrix17g-axon {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 78px;
  height: 2px;
  margin: -1px -39px;
  border-radius: 999px;
  transform-origin: 39px 50%;
  transform: rotate(var(--r));
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 84%, #dbf0ff), transparent);
  animation: vl-matrix17g-axon calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17g-axon-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17g-axon-core calc(var(--loader-speed) * 1.5) linear infinite;
}
@keyframes vl-matrix17g-axon {
  0%, 100% { transform: rotate(var(--r)) scaleX(.58); opacity: .16; }
  50% { transform: rotate(calc(var(--r) + 240deg)) scaleX(1.02); opacity: .94; }
}
@keyframes vl-matrix17g-axon-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  }
];
