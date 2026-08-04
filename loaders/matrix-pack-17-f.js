export const matrixPack17LoadersF = [
  {
    id: 'matrix-plasma-orbit-rings',
    name: 'Plasma Orbit Rings',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Plasma rings orbit a central core with staggered alpha pulses and dual radial drift.',
    markup: `<div class="vl-matrix17f-orbit-rings" role="img" aria-label="Plasma orbit rings">
      <span class="vl-matrix17f-orbit" style="--i:0;--d:0"></span>
      <span class="vl-matrix17f-orbit" style="--i:72deg;--d:.14"></span>
      <span class="vl-matrix17f-orbit" style="--i:144deg;--d:.28"></span>
      <span class="vl-matrix17f-orbit" style="--i:216deg;--d:.42"></span>
      <span class="vl-matrix17f-orbit" style="--i:288deg;--d:.56"></span>
      <span class="vl-matrix17f-orbit-core" aria-hidden="true"></span>
    </div>`,
    css: `.vl-matrix17f-orbit-rings {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #25638b);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #061a28 0 18%, #040b14 68%);
}
.vl-matrix17f-orbit {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 82px;
  height: 82px;
  margin: -41px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 74%, #e8f5ff);
  border-radius: 50%;
  opacity: .2;
  transform: rotate(var(--i));
  animation: vl-matrix17f-orbit calc(var(--loader-speed) * 1.8) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17f-orbit-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #f5fcff);
  animation: vl-matrix17f-orbit-core calc(var(--loader-speed) * 1.8) linear infinite;
}
@keyframes vl-matrix17f-orbit {
  0% { transform: rotate(var(--i)) scale(.42); opacity: .16; }
  50% { transform: rotate(calc(var(--i) + 180deg)) scale(1.05); opacity: .95; }
  100% { transform: rotate(calc(var(--i) + 360deg)) scale(.42); opacity: .16; }
}
@keyframes vl-matrix17f-orbit-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.84); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .96; }
}`
  },
  {
    id: 'matrix-cryo-grid-lattice',
    name: 'Cryo Grid Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A cold lattice emits rhythmic pulses that alternate node intensity and cross-axis bias.',
    markup: `<div class="vl-matrix17f-cryo-grid" role="img" aria-label="Cryo grid lattice">
      <span style="--x:16px;--y:16px;--d:0"></span>
      <span style="--x:54px;--y:16px;--d:.08"></span>
      <span style="--x:92px;--y:16px;--d:.16"></span>
      <span style="--x:130px;--y:16px;--d:.24"></span>
      <span style="--x:168px;--y:16px;--d:.32"></span>
      <span style="--x:16px;--y:54px;--d:.4"></span>
      <span style="--x:54px;--y:54px;--d:.48"></span>
      <span style="--x:92px;--y:54px;--d:.56"></span>
      <span style="--x:130px;--y:54px;--d:.64"></span>
      <span style="--x:168px;--y:54px;--d:.72"></span>
      <span style="--x:16px;--y:92px;--d:.08"></span>
      <span style="--x:54px;--y:92px;--d:.16"></span>
      <span style="--x:92px;--y:92px;--d:.24"></span>
      <span style="--x:130px;--y:92px;--d:.32"></span>
      <span style="--x:168px;--y:92px;--d:.4"></span>
    </div>`,
    css: `.vl-matrix17f-cryo-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f658e);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(160deg, #051625, #0b3552 60%, #040a13);
}
.vl-matrix17f-cryo-grid span {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 88%, #e8f7ff);
  box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 48%, transparent);
  animation: vl-matrix17f-cryo-cell calc(var(--loader-speed) * 1.3) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17f-cryo-cell {
  0%, 100% { transform: scale(.54); opacity: .18; }
  50% { transform: scale(1.06); opacity: .98; }
}`
  },
  {
    id: 'matrix-flux-thread-orbit',
    name: 'Flux Thread Orbit',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Threads sweep across a narrow loop while phase-shifting to create a scanning braid.',
    markup: `<div class="vl-matrix17f-flux-thread" role="img" aria-label="Flux thread orbit">
      <span class="vl-matrix17f-thread" style="--n:0;--d:0"></span>
      <span class="vl-matrix17f-thread" style="--n:1;--d:.11"></span>
      <span class="vl-matrix17f-thread" style="--n:2;--d:.22"></span>
      <span class="vl-matrix17f-thread" style="--n:3;--d:.33"></span>
      <span class="vl-matrix17f-thread" style="--n:4;--d:.44"></span>
    </div>`,
    css: `.vl-matrix17f-flux-thread {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #216f96);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, #061927 0 20%, #040a13 68%);
}
.vl-matrix17f-thread {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 128px;
  height: 2px;
  margin: -1px -64px;
  transform-origin: 64px 50%;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 86%, #deeff8), transparent);
  animation: vl-matrix17f-thread calc(var(--loader-speed) * 1.35) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17f-thread {
  0% { transform: rotate(calc(var(--n) * 72deg)) translateX(0); opacity: .12; }
  50% { transform: rotate(calc(var(--n) * 72deg + 72deg)) translateX(6px); opacity: .95; }
  100% { transform: rotate(calc(var(--n) * 72deg + 144deg)) translateX(0); opacity: .12; }
}`
  },
  {
    id: 'matrix-lattice-signal-bloom',
    name: 'Lattice Signal Bloom',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Signal pulses bloom through intersecting lattice bars and fade back in synchronized rings.',
    markup: `<div class="vl-matrix17f-signal-bloom" role="img" aria-label="Lattice signal bloom">
      <span class="vl-matrix17f-bloom" style="--x:12px;--y:12px;--d:0"></span>
      <span class="vl-matrix17f-bloom" style="--x:48px;--y:56px;--d:.1"></span>
      <span class="vl-matrix17f-bloom" style="--x:96px;--y:22px;--d:.2"></span>
      <span class="vl-matrix17f-bloom" style="--x:144px;--y:56px;--d:.3"></span>
      <span class="vl-matrix17f-bloom" style="--x:170px;--y:84px;--d:.4"></span>
      <span class="vl-matrix17f-bloom-core"></span>
    </div>`,
    css: `.vl-matrix17f-signal-bloom {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f638b);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(170deg, #071724, #0b3654 60%, #040a14);
}
.vl-matrix17f-bloom {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 6px;
  height: 6px;
  margin: -3px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #ecf8ff);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 64%, transparent);
  animation: vl-matrix17f-bloom calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17f-bloom-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17f-bloom-core calc(var(--loader-speed) * 1.5) linear infinite;
}
@keyframes vl-matrix17f-bloom {
  0%, 100% { transform: scale(.42); opacity: .18; }
  50% { transform: scale(1.2); opacity: .95; }
}
@keyframes vl-matrix17f-bloom-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .96; }
}`
  },
  {
    id: 'matrix-prism-axon-sphere',
    name: 'Prism Axon Sphere',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Axonal markers move around a sphere-like perimeter and bend through prism-like radiance.',
    markup: `<div class="vl-matrix17f-axon-sphere" role="img" aria-label="Prism axon sphere">
      <span class="vl-matrix17f-axon" style="--a:0deg;--d:0"></span>
      <span class="vl-matrix17f-axon" style="--a:72deg;--d:.12"></span>
      <span class="vl-matrix17f-axon" style="--a:144deg;--d:.24"></span>
      <span class="vl-matrix17f-axon" style="--a:216deg;--d:.36"></span>
      <span class="vl-matrix17f-axon" style="--a:288deg;--d:.48"></span>
    </div>`,
    css: `.vl-matrix17f-axon-sphere {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #24739b);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, #071523 0 22%, #040a13 68%);
}
.vl-matrix17f-axon {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 66px;
  height: 66px;
  margin: -33px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 78%, #dff4ff);
  border-radius: 50%;
  opacity: .4;
  transform: rotate(var(--a)) skew(-13deg) translate(10px, 0);
  animation: vl-matrix17f-axon calc(var(--loader-speed) * 1.4) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17f-axon {
  0%, 100% { transform: rotate(var(--a)) skew(-13deg) scale(.7); opacity: .2; }
  50% { transform: rotate(calc(var(--a) + 180deg)) skew(13deg) scale(1.08); opacity: .95; }
}`
  },
  {
    id: 'matrix-glyph-beat-matrix',
    name: 'Glyph Beat Matrix',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Glyph marks pulse in metered beats, expanding and collapsing across diagonal vectors.',
    markup: `<div class="vl-matrix17f-glyph-beat" role="img" aria-label="Glyph beat matrix">
      <span class="vl-matrix17f-glyph" style="--x:24px;--y:20px;--d:0"></span>
      <span class="vl-matrix17f-glyph" style="--x:70px;--y:44px;--d:.1"></span>
      <span class="vl-matrix17f-glyph" style="--x:116px;--y:28px;--d:.2"></span>
      <span class="vl-matrix17f-glyph" style="--x:162px;--y:52px;--d:.3"></span>
      <span class="vl-matrix17f-glyph" style="--x:24px;--y:84px;--d:.4"></span>
      <span class="vl-matrix17f-glyph" style="--x:70px;--y:76px;--d:.5"></span>
      <span class="vl-matrix17f-glyph" style="--x:116px;--y:88px;--d:.6"></span>
    </div>`,
    css: `.vl-matrix17f-glyph-beat {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d6790);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(150deg, #071625, #0a304f 64%, #040a14);
}
.vl-matrix17f-glyph {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 10px;
  height: 10px;
  margin: -5px;
  transform: rotate(45deg);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  background: color-mix(in srgb, var(--loader-accent) 86%, #e6f8ff);
  animation: vl-matrix17f-glyph calc(var(--loader-speed) * 1.25) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17f-glyph {
  0%, 100% { transform: rotate(45deg) scale(.62); opacity: .2; }
  50% { transform: rotate(45deg) scale(1.15); opacity: .95; }
}`
  },
  {
    id: 'matrix-solaris-pulse-wave',
    name: 'Solaris Pulse Wave',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Dual pulse waves push outward from a central flare and fold back into a soft horizon.',
    markup: `<div class="vl-matrix17f-solaris-wave" role="img" aria-label="Solaris pulse wave">
      <span class="vl-matrix17f-solaris-core"></span>
      <span class="vl-matrix17f-solaris-wave" style="--s:22px;--d:0"></span>
      <span class="vl-matrix17f-solaris-wave" style="--s:40px;--d:.18"></span>
      <span class="vl-matrix17f-solaris-wave" style="--s:58px;--d:.36"></span>
      <span class="vl-matrix17f-solaris-wave" style="--s:76px;--d:.54"></span>
    </div>`,
    css: `.vl-matrix17f-solaris-wave {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f73a2);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #071a2c 0 18%, #040912 68%);
}
.vl-matrix17f-solaris-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #f3fbff);
  box-shadow: 0 0 9px color-mix(in srgb, var(--loader-accent) 66%, transparent);
  animation: vl-matrix17f-solaris-core calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
.vl-matrix17f-solaris-wave {
  position: absolute;
  left: 50%;
  top: 54px;
  width: var(--s);
  height: var(--s);
  margin: calc(var(--s) / -2);
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 82%, #dcf1ff);
  opacity: .16;
  animation: vl-matrix17f-solaris-wave calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17f-solaris-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.84); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.25); opacity: .95; }
}
@keyframes vl-matrix17f-solaris-wave {
  0%, 100% { transform: translate(-50%, -50%) scale(.45); opacity: .16; }
  50% { transform: translate(-50%, -50%) scale(1.15); opacity: .96; }
}`
  },
  {
    id: 'matrix-vector-quantum-nodes',
    name: 'Vector Quantum Nodes',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Quantum nodes jump across vector nodes with mirrored delays and soft phase resets.',
    markup: `<div class="vl-matrix17f-quantum-nodes" role="img" aria-label="Vector quantum nodes">
      <span style="--x:18px;--y:16px;--d:0"></span>
      <span style="--x:54px;--y:38px;--d:.09"></span>
      <span style="--x:90px;--y:16px;--d:.18"></span>
      <span style="--x:126px;--y:38px;--d:.27"></span>
      <span style="--x:162px;--y:16px;--d:.36"></span>
      <span style="--x:18px;--y:82px;--d:.45"></span>
      <span style="--x:54px;--y:60px;--d:.54"></span>
      <span style="--x:90px;--y:82px;--d:.63"></span>
      <span style="--x:126px;--y:60px;--d:.72"></span>
      <span style="--x:162px;--y:82px;--d:.81"></span>
    </div>`,
    css: `.vl-matrix17f-quantum-nodes {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1e6d96);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(165deg, #071322, #0a2f4d 62%, #040a13);
}
.vl-matrix17f-quantum-nodes span {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #edf8ff);
  box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 46%, transparent);
  animation: vl-matrix17f-quantum-node calc(var(--loader-speed) * 1.4) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17f-quantum-node {
  0%, 100% { transform: scale(.52); opacity: .18; }
  50% { transform: scale(1.12); opacity: .95; }
}`
  },
  {
    id: 'matrix-spiral-noise-lattice',
    name: 'Spiral Noise Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Noisy spiral bands spiral through a micro-lattice and recede with damped jitter.',
    markup: `<div class="vl-matrix17f-noise-lattice" role="img" aria-label="Spiral noise lattice">
      <span class="vl-matrix17f-noise" style="--c:0;--d:0"></span>
      <span class="vl-matrix17f-noise" style="--c:1;--d:.12"></span>
      <span class="vl-matrix17f-noise" style="--c:2;--d:.24"></span>
      <span class="vl-matrix17f-noise" style="--c:3;--d:.36"></span>
      <span class="vl-matrix17f-noise" style="--c:4;--d:.48"></span>
      <span class="vl-matrix17f-noise" style="--c:5;--d:.6"></span>
    </div>`,
    css: `.vl-matrix17f-noise-lattice {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #28658a);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 58%, #061828 0 21%, #040a13 70%);
}
.vl-matrix17f-noise {
  position: absolute;
  left: 50%;
  top: 54px;
  width: calc(10px + (var(--c) * 3px));
  height: calc(10px + (var(--c) * 3px));
  margin: 0;
  transform: translate(-50%, -50%);
  transform-origin: center;
  border-radius: 2px;
  border: 1px dashed color-mix(in srgb, var(--loader-accent) 72%, #d9eefc);
  animation: vl-matrix17f-noise calc(var(--loader-speed) * 1.4) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17f-noise {
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(.44); opacity: .17; }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.1); opacity: .95; }
  100% { transform: translate(-50%, -50%) rotate(360deg) scale(.44); opacity: .17; }
}`
  },
  {
    id: 'matrix-harmonic-core-spiral',
    name: 'Harmonic Core Spiral',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Core pulses propagate through two harmonic spirals with mirrored rotation and tapering tails.',
    markup: `<div class="vl-matrix17f-harmonic-core" role="img" aria-label="Harmonic core spiral">
      <span class="vl-matrix17f-harmonic" style="--a:0deg;--d:0"></span>
      <span class="vl-matrix17f-harmonic" style="--a:120deg;--d:.14"></span>
      <span class="vl-matrix17f-harmonic" style="--a:240deg;--d:.28"></span>
      <span class="vl-matrix17f-harmonic-core"></span>
    </div>`,
    css: `.vl-matrix17f-harmonic-core {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #236e95);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(145deg, #061a2d, #0a2f4e 62%, #040a14);
}
.vl-matrix17f-harmonic {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 88px;
  height: 2px;
  margin: -1px -44px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 86%, #e6f5ff), transparent);
  transform-origin: 44px 50%;
  transform: rotate(var(--a)) translateX(4px);
  animation: vl-matrix17f-harmonic calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17f-harmonic-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17f-harmonic-core calc(var(--loader-speed) * 1.55) linear infinite;
}
@keyframes vl-matrix17f-harmonic {
  0%, 100% { transform: rotate(var(--a)) translateX(4px) scale(.7); opacity: .16; }
  50% { transform: rotate(calc(var(--a) + 180deg)) translateX(-4px) scale(1.08); opacity: .95; }
}
@keyframes vl-matrix17f-harmonic-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  }
];
