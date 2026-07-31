export const css3dPack4LoadersB = [
  {
    id: 'folding-corridor-3d',
    name: '3D Folding Corridor',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Successive rectangular gates fold and travel through depth like a mechanical corridor.',
    markup: `<div class="vl-folding-corridor-3d" aria-hidden="true">
  <span style="--z:-72px;--a:-14deg;--b:14deg;--d:-.72s"></span>
  <span style="--z:-48px;--a:14deg;--b:-14deg;--d:-.54s"></span>
  <span style="--z:-24px;--a:-14deg;--b:14deg;--d:-.36s"></span>
  <span style="--z:0px;--a:14deg;--b:-14deg;--d:-.18s"></span>
  <span style="--z:24px;--a:-14deg;--b:14deg;--d:0s"></span>
</div>`,
    css: `.vl-folding-corridor-3d {
  position: relative;
  width: 90px;
  height: 72px;
  perspective: 520px;
  transform-style: preserve-3d;
  transform: rotateX(-4deg);
  overflow: hidden;
}
.vl-folding-corridor-3d span {
  position: absolute;
  left: 13px;
  top: 15px;
  width: 60px;
  height: 38px;
  border: 4px solid var(--loader-accent);
  border-left-color: color-mix(in srgb, var(--loader-accent) 40%, transparent);
  border-right-color: color-mix(in srgb, var(--loader-accent) 40%, transparent);
  border-radius: 7px;
  box-shadow: 0 0 12px color-mix(in srgb, var(--loader-accent) 20%, transparent);
  animation: vl-folding-corridor-flow calc(var(--loader-speed) * 1.9) ease-in-out infinite;
  animation-delay: var(--d);
}
@keyframes vl-folding-corridor-flow {
  0% { transform: translateZ(var(--z)) rotateX(var(--a)) scale(.62); opacity: 0; }
  24% { opacity: .9; }
  62% { transform: translateZ(calc(var(--z) + 74px)) rotateX(var(--b)) scale(1); opacity: 1; }
  100% { transform: translateZ(calc(var(--z) + 118px)) rotateX(var(--a)) scale(1.16); opacity: 0; }
}`
  },
  {
    id: 'cross-rotor-3d',
    name: '3D Cross Rotor',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Four deep panels intersect around a glowing hub and rotate across multiple axes.',
    markup: `<div class="vl-cross-rotor-3d" aria-hidden="true">
  <div>
    <span style="--r:0deg"></span><span style="--r:90deg"></span>
    <span style="--r:180deg"></span><span style="--r:270deg"></span>
  </div>
</div>`,
    css: `.vl-cross-rotor-3d {
  width: 78px;
  height: 78px;
  display: grid;
  place-items: center;
  perspective: 620px;
}
.vl-cross-rotor-3d > div {
  position: relative;
  width: 62px;
  height: 62px;
  transform-style: preserve-3d;
  animation: vl-cross-rotor-turn calc(var(--loader-speed) * 2.2) linear infinite;
}
.vl-cross-rotor-3d span {
  position: absolute;
  left: 24px;
  top: 2px;
  width: 14px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 68%, white);
  background: linear-gradient(to bottom, color-mix(in srgb, var(--loader-accent) 82%, white), color-mix(in srgb, var(--loader-accent) 48%, transparent));
  transform-origin: 7px 29px;
  transform: rotateZ(var(--r)) rotateY(68deg) translateZ(9px);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 20%, transparent);
}
.vl-cross-rotor-3d > div::after {
  content: '';
  position: absolute;
  left: 25px;
  top: 25px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 17px var(--loader-accent);
  transform: translateZ(15px);
}
@keyframes vl-cross-rotor-turn {
  from { transform: rotateX(52deg) rotateY(0deg) rotateZ(0deg); }
  to { transform: rotateX(52deg) rotateY(360deg) rotateZ(360deg); }
}`
  },
  {
    id: 'capsule-orbit-3d',
    name: '3D Capsule Orbit',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Eight luminous capsules orbit a tilted ring while pulsing according to their depth.',
    markup: `<div class="vl-capsule-orbit-3d" aria-hidden="true">
  <div>
    <span style="--r:0deg;--d:-.00s"><i></i></span><span style="--r:45deg;--d:-.08s"><i></i></span>
    <span style="--r:90deg;--d:-.16s"><i></i></span><span style="--r:135deg;--d:-.24s"><i></i></span>
    <span style="--r:180deg;--d:-.32s"><i></i></span><span style="--r:225deg;--d:-.40s"><i></i></span>
    <span style="--r:270deg;--d:-.48s"><i></i></span><span style="--r:315deg;--d:-.56s"><i></i></span>
  </div>
</div>`,
    css: `.vl-capsule-orbit-3d {
  width: 84px;
  height: 76px;
  display: grid;
  place-items: center;
  perspective: 640px;
}
.vl-capsule-orbit-3d > div {
  position: relative;
  width: 10px;
  height: 30px;
  transform-style: preserve-3d;
  animation: vl-capsule-orbit-turn calc(var(--loader-speed) * 2.35) linear infinite;
}
.vl-capsule-orbit-3d span {
  position: absolute;
  inset: 0;
  transform: rotateY(var(--r)) translateZ(32px);
  transform-style: preserve-3d;
}
.vl-capsule-orbit-3d i {
  display: block;
  width: 10px;
  height: 30px;
  border-radius: 999px;
  background: linear-gradient(to bottom, color-mix(in srgb, var(--loader-accent) 88%, white), var(--loader-accent));
  border: 1px solid color-mix(in srgb, var(--loader-accent) 64%, white);
  box-shadow: 0 0 12px color-mix(in srgb, var(--loader-accent) 28%, transparent);
  animation: vl-capsule-orbit-pulse calc(var(--loader-speed) * 1.05) ease-in-out infinite;
  animation-delay: var(--d);
}
@keyframes vl-capsule-orbit-turn {
  from { transform: rotateX(-22deg) rotateY(0deg) rotateZ(-8deg); }
  to { transform: rotateX(-22deg) rotateY(360deg) rotateZ(-8deg); }
}
@keyframes vl-capsule-orbit-pulse {
  0%, 100% { transform: scale(.62); opacity: .42; }
  50% { transform: scale(1); opacity: 1; }
}`
  },
  {
    id: 'lattice-pulse-3d',
    name: '3D Lattice Pulse',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'A nine-cell isometric lattice sends a depth pulse diagonally across the grid.',
    markup: `<div class="vl-lattice-pulse-3d" aria-hidden="true">
  <span style="--x:0px;--y:0px;--d:-.00s"></span><span style="--x:22px;--y:0px;--d:-.08s"></span><span style="--x:44px;--y:0px;--d:-.16s"></span>
  <span style="--x:0px;--y:22px;--d:-.08s"></span><span style="--x:22px;--y:22px;--d:-.16s"></span><span style="--x:44px;--y:22px;--d:-.24s"></span>
  <span style="--x:0px;--y:44px;--d:-.16s"></span><span style="--x:22px;--y:44px;--d:-.24s"></span><span style="--x:44px;--y:44px;--d:-.32s"></span>
</div>`,
    css: `.vl-lattice-pulse-3d {
  position: relative;
  width: 86px;
  height: 76px;
  perspective: 620px;
  transform-style: preserve-3d;
  transform: rotateX(58deg) rotateZ(45deg) translate(-2px, 1px);
}
.vl-lattice-pulse-3d span {
  position: absolute;
  left: 7px;
  top: 4px;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--loader-accent) 74%, white);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 70%, white);
  box-shadow: 5px 5px 0 color-mix(in srgb, var(--loader-accent) 45%, black);
  animation: vl-lattice-pulse-rise calc(var(--loader-speed) * 1.25) ease-in-out infinite;
  animation-delay: var(--d);
}
@keyframes vl-lattice-pulse-rise {
  0%, 100% { transform: translate3d(var(--x), var(--y), 0); opacity: .45; }
  50% { transform: translate3d(var(--x), var(--y), 25px); opacity: 1; }
}`
  },
  {
    id: 'arch-carousel-3d',
    name: '3D Arch Carousel',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Six rounded arch frames rotate around a vertical carousel with transparent depth.',
    markup: `<div class="vl-arch-carousel-3d" aria-hidden="true">
  <div>
    <span style="--r:0deg"></span><span style="--r:60deg"></span><span style="--r:120deg"></span>
    <span style="--r:180deg"></span><span style="--r:240deg"></span><span style="--r:300deg"></span>
  </div>
</div>`,
    css: `.vl-arch-carousel-3d {
  width: 86px;
  height: 76px;
  display: grid;
  place-items: center;
  perspective: 650px;
}
.vl-arch-carousel-3d > div {
  position: relative;
  width: 24px;
  height: 44px;
  transform-style: preserve-3d;
  animation: vl-arch-carousel-turn calc(var(--loader-speed) * 2.55) linear infinite;
}
.vl-arch-carousel-3d span {
  position: absolute;
  inset: 0;
  border: 3px solid var(--loader-accent);
  border-bottom-width: 5px;
  border-radius: 14px 14px 5px 5px;
  background: color-mix(in srgb, var(--loader-accent) 12%, transparent);
  box-shadow: inset 0 0 10px color-mix(in srgb, var(--loader-accent) 18%, transparent);
  transform: rotateY(var(--r)) translateZ(34px);
  backface-visibility: visible;
}
@keyframes vl-arch-carousel-turn {
  from { transform: rotateX(-8deg) rotateY(0deg); }
  to { transform: rotateX(-8deg) rotateY(360deg); }
}`
  }
];
