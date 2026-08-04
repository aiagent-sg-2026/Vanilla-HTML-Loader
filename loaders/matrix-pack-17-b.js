export const matrixPack17LoadersB = [
  {
    id: 'matrix-quantum-drift-rings',
    name: 'Quantum Drift Rings',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Rings drift in quantum rhythm, colliding into harmonic alignment points.',
    markup: `<div class="vl-matrix17-quantum-rings" role="img" aria-label="Quantum drift rings">
      <span class="vl-matrix17-ring" style="--d:0;--s:34px;--t:40px"></span>
      <span class="vl-matrix17-ring" style="--d:.18;--s:46px;--t:12px"></span>
      <span class="vl-matrix17-ring" style="--d:.36;--s:58px;--t:-16px"></span>
      <span class="vl-matrix17-ring" style="--d:.54;--s:70px;--t:24px"></span>
      <span class="vl-matrix17-ring vl-matrix17-core" style="--d:.72"></span>
    </div>`,
    css: `.vl-matrix17-quantum-rings {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1c5071);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 48%, #0c2943 0 18%, #05131d 64%),
    radial-gradient(circle at 50% 58%, color-mix(in srgb, var(--loader-accent) 10%, transparent), transparent 54%);
}
.vl-matrix17-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--s);
  height: var(--s);
  margin-left: calc(var(--s) / -2);
  margin-top: calc((var(--s) * -1) / 2);
  border: 1px dashed color-mix(in srgb, var(--loader-accent) 84%, #d8f2ff);
  border-radius: 50%;
  transform: translateY(var(--t));
  animation: vl-matrix17-ringspin calc(var(--loader-speed) * 1.6) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17-core {
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  border-style: solid;
  transform: translate(-50%, -50%)
    ;
  left: 50%;
  top: 54px;
  background: var(--loader-accent);
  animation: vl-matrix17-core-pulse calc(var(--loader-speed) * 1.6) ease-in-out infinite;
}
@keyframes vl-matrix17-ringspin {
  0% { transform: translateY(var(--t)) scale(.5) rotate(0deg); opacity: .18; }
  50% { transform: translateY(calc(var(--t) + 4px)) scale(1.05) rotate(180deg); opacity: .95; }
  100% { transform: translateY(var(--t)) scale(.5) rotate(360deg); opacity: .18; }
}
@keyframes vl-matrix17-core-pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(.76); opacity: .18; }
  50% { transform: translate(-50%, -50%) scale(1.24); opacity: .97; }
}`
  },
  {
    id: 'matrix-entropy-lens-array',
    name: 'Entropy Lens Array',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A focused lens array gathers entropy spikes and redistributes them into even cadence.',
    markup: `<div class="vl-matrix17-entropy-array" role="img" aria-label="Entropy lens array">
      <span style="--x:12px;--d:0;--h:34px"></span>
      <span style="--x:44px;--d:.1;--h:48px"></span>
      <span style="--x:76px;--d:.2;--h:30px"></span>
      <span style="--x:108px;--d:.3;--h:46px"></span>
      <span style="--x:140px;--d:.4;--h:52px"></span>
      <span style="--x:172px;--d:.5;--h:38px"></span>
      <span class="vl-matrix17-entropy-core"></span>
    </div>`,
    css: `.vl-matrix17-entropy-array {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #17466d);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(170deg, #06111d, #0b2440 62%, #030c16 100%);
}
.vl-matrix17-entropy-array span {
  position: absolute;
  left: var(--x);
  bottom: 10px;
  width: 8px;
  height: var(--h);
  border-radius: 2px;
  transform-origin: bottom;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 82%, #e7f6ff), transparent);
  animation: vl-matrix17-entropy-bar calc(var(--loader-speed) * 1.4) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17-entropy-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 12px;
  height: 12px;
  margin: -6px;
  border-radius: 50%;
  transform: translateX(-50%);
  background: color-mix(in srgb, var(--loader-accent) 86%, #f4fcff);
  animation: vl-matrix17-entropy-core calc(var(--loader-speed) * 1.8) linear infinite;
}
@keyframes vl-matrix17-entropy-bar {
  0%, 100% { transform: scaleY(.25); opacity: .16; }
  50% { transform: scaleY(1); opacity: .95; }
}
@keyframes vl-matrix17-entropy-core {
  0%, 100% { transform: translateX(-50%) scale(.82); opacity: .2; }
  50% { transform: translateX(-50%) scale(1.24); opacity: .95; }
}`
  },
  {
    id: 'matrix-binary-wave-torsion',
    name: 'Binary Wave Torsion',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Binary blocks rotate around a torsion axis and ripple in a delayed matrix wave.',
    markup: `<div class="vl-matrix17-binary-torsion" role="img" aria-label="Binary wave torsion">
      <span class="vl-matrix17-bit" style="--x:16px;--d:0"></span>
      <span class="vl-matrix17-bit" style="--x:50px;--d:.16"></span>
      <span class="vl-matrix17-bit" style="--x:84px;--d:.32"></span>
      <span class="vl-matrix17-bit" style="--x:118px;--d:.48"></span>
      <span class="vl-matrix17-bit" style="--x:152px;--d:.64"></span>
      <span class="vl-matrix17-bit" style="--x:186px;--d:.8"></span>
    </div>`,
    css: `.vl-matrix17-binary-torsion {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1c587d);
  border-radius: 14px;
  overflow: hidden;
  background:
    repeating-radial-gradient(circle at 50% 50%, #061625 0 18px, #051321 18px 19px),
    linear-gradient(145deg, #06111d, #092741 52%, #040f18);
}
.vl-matrix17-bit {
  position: absolute;
  left: var(--x);
  top: 0;
  width: 8px;
  height: 108px;
  border-radius: 2px;
  transform-origin: center;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 84%, #eaf8ff), transparent);
  animation: vl-matrix17-binary calc(var(--loader-speed) * 1.45) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17-binary {
  0%, 100% { transform: rotateY(4deg) rotateZ(0deg) scaleY(.3); opacity: .17; }
  50% { transform: rotateY(28deg) rotateZ(7deg) scaleY(1.02); opacity: .95; }
}`
  },
  {
    id: 'matrix-matrix-orbital-cradle',
    name: 'Matrix Orbital Cradle',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Three orbital bands cradle around a low-frequency nucleus and swap depth order.',
    markup: `<div class="vl-matrix17-orbital-cradle" role="img" aria-label="Matrix orbital cradle">
      <span class="vl-matrix17-cradle-band" style="--s:42px;--d:0;--z:0px"></span>
      <span class="vl-matrix17-cradle-band" style="--s:52px;--d:.15;--z:-8px"></span>
      <span class="vl-matrix17-cradle-band" style="--s:62px;--d:.3;--z:4px"></span>
      <span class="vl-matrix17-cradle-node"></span>
    </div>`,
    css: `.vl-matrix17-orbital-cradle {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1a5174);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 16%, transparent), #050d18 65%);
}
.vl-matrix17-cradle-band {
  position: absolute;
  left: 50%;
  top: 54px;
  width: var(--s);
  height: var(--s);
  margin-left: calc(var(--s) / -2);
  margin-top: calc(var(--s) / -2);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 70%, #e5f3ff);
  border-radius: 50%;
  transform: rotateX(46deg);
  transform-origin: center;
  animation: vl-matrix17-cradle-band calc(var(--loader-speed) * 1.9) linear infinite;
  animation-delay: calc(var(--d) * 1s);
  opacity: .36;
}
.vl-matrix17-cradle-node {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 9px;
  height: 9px;
  margin: -4.5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #f3faff);
  animation: vl-matrix17-cradle-core calc(var(--loader-speed) * 1.9) ease-in-out infinite;
}
@keyframes vl-matrix17-cradle-band {
  0% { transform: rotateX(46deg) rotateZ(0deg) scale(.72); opacity: .18; }
  50% { transform: rotateX(46deg) rotateZ(180deg) scale(1.03); opacity: .96; }
  100% { transform: rotateX(46deg) rotateZ(360deg) scale(.72); opacity: .18; }
}
@keyframes vl-matrix17-cradle-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .9; }
}`
  },
  {
    id: 'matrix-radiant-hash-lattice',
    name: 'Radiant Hash Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Hash-like pulses ripple across a radiant lattice and phase-lock to a glowing grid.',
    markup: `<div class="vl-matrix17-hash-lattice" role="img" aria-label="Radiant hash lattice">
      <span style="--x:10px;--y:12px;--d:0"></span>
      <span style="--x:46px;--y:12px;--d:.12"></span>
      <span style="--x:82px;--y:12px;--d:.24"></span>
      <span style="--x:118px;--y:12px;--d:.36"></span>
      <span style="--x:154px;--y:12px;--d:.48"></span>
      <span style="--x:10px;--y:52px;--d:.18"></span>
      <span style="--x:46px;--y:52px;--d:.3"></span>
      <span style="--x:82px;--y:52px;--d:.42"></span>
      <span style="--x:118px;--y:52px;--d:.54"></span>
      <span style="--x:154px;--y:52px;--d:.66"></span>
      <span style="--x:10px;--y:92px;--d:.24"></span>
      <span style="--x:46px;--y:92px;--d:.36"></span>
      <span style="--x:82px;--y:92px;--d:.48"></span>
      <span style="--x:118px;--y:92px;--d:.6"></span>
      <span style="--x:154px;--y:92px;--d:.72"></span>
      <span class="vl-matrix17-hash-core"></span>
    </div>`,
    css: `.vl-matrix17-hash-lattice {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #184f74);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(155deg, #061422, #0a2d4d 64%, #040e18);
}
.vl-matrix17-hash-lattice span {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 10px;
  height: 10px;
  margin: -4px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 78%, #f0fbff);
  animation: vl-matrix17-hash-pulse calc(var(--loader-speed) * 1.45) cubic-bezier(.3, .85, .2, 1) infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17-hash-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17-hash-core calc(var(--loader-speed) * 1.2) linear infinite;
}
@keyframes vl-matrix17-hash-pulse {
  0%, 100% { transform: scale(.45); opacity: .1; }
  50% { transform: scale(1.22); opacity: .94; }
}
@keyframes vl-matrix17-hash-core {
  0%, 100% { transform: scale(.75); opacity: .2; }
  50% { transform: scale(1.25); opacity: .85; }
}`
  }
];
