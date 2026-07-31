export const css3dPack3LoadersA = [
  {
    id: 'cuboid-pulse-3d',
    name: '3D Cuboid Pulse',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'A rectangular six-face cuboid rotates while gently expanding through depth.',
    markup: `<div class="vl-cuboid-pulse-3d" aria-hidden="true">
  <div><span class="front"></span><span class="back"></span><span class="right"></span><span class="left"></span><span class="top"></span><span class="bottom"></span></div>
</div>`,
    css: `.vl-cuboid-pulse-3d {
  width: 84px;
  height: 72px;
  display: grid;
  place-items: center;
  perspective: 560px;
}
.vl-cuboid-pulse-3d > div {
  position: relative;
  width: 46px;
  height: 30px;
  transform-style: preserve-3d;
  animation: vl-cuboid-pulse-scene calc(var(--loader-speed) * 2.2) ease-in-out infinite;
}
.vl-cuboid-pulse-3d span {
  position: absolute;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, white);
  background: color-mix(in srgb, var(--loader-accent) 58%, transparent);
  box-shadow: inset 0 0 12px color-mix(in srgb, var(--loader-accent) 24%, transparent);
}
.vl-cuboid-pulse-3d .front,
.vl-cuboid-pulse-3d .back { inset: 0; }
.vl-cuboid-pulse-3d .front { transform: translateZ(17px); }
.vl-cuboid-pulse-3d .back { transform: rotateY(180deg) translateZ(17px); }
.vl-cuboid-pulse-3d .right,
.vl-cuboid-pulse-3d .left { width: 34px; height: 30px; top: 0; left: 6px; }
.vl-cuboid-pulse-3d .right { transform: rotateY(90deg) translateZ(23px); }
.vl-cuboid-pulse-3d .left { transform: rotateY(-90deg) translateZ(23px); }
.vl-cuboid-pulse-3d .top,
.vl-cuboid-pulse-3d .bottom { width: 46px; height: 34px; left: 0; top: -2px; }
.vl-cuboid-pulse-3d .top { transform: rotateX(90deg) translateZ(15px); }
.vl-cuboid-pulse-3d .bottom { transform: rotateX(-90deg) translateZ(15px); }
@keyframes vl-cuboid-pulse-scene {
  0%, 100% { transform: rotateX(-18deg) rotateY(0deg) scale3d(.84, .84, .84); }
  50% { transform: rotateX(198deg) rotateY(180deg) scale3d(1.06, 1.06, 1.06); }
}`
  },
  {
    id: 'panel-orbit-3d',
    name: '3D Panel Orbit',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Five slim panels orbit a vertical axis and reveal their depth in sequence.',
    markup: `<div class="vl-panel-orbit-3d" aria-hidden="true"><div><span style="--i:0"></span><span style="--i:1"></span><span style="--i:2"></span><span style="--i:3"></span><span style="--i:4"></span></div></div>`,
    css: `.vl-panel-orbit-3d {
  width: 86px;
  height: 74px;
  display: grid;
  place-items: center;
  perspective: 620px;
}
.vl-panel-orbit-3d > div {
  position: relative;
  width: 18px;
  height: 48px;
  transform-style: preserve-3d;
  animation: vl-panel-orbit-turn calc(var(--loader-speed) * 2.35) linear infinite;
}
.vl-panel-orbit-3d span {
  position: absolute;
  inset: 0;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 68%, white);
  border-radius: 5px;
  background: linear-gradient(160deg, color-mix(in srgb, var(--loader-accent) 82%, white), color-mix(in srgb, var(--loader-accent) 42%, transparent));
  box-shadow: 0 5px 12px rgba(15, 23, 42, .14);
  transform: rotateY(calc(var(--i) * 72deg)) translateZ(30px);
  backface-visibility: hidden;
  animation: vl-panel-orbit-breathe calc(var(--loader-speed) * 1.25) ease-in-out infinite;
  animation-delay: calc(var(--i) * .08s);
}
@keyframes vl-panel-orbit-turn { to { transform: rotateX(-10deg) rotateY(360deg); } }
@keyframes vl-panel-orbit-breathe {
  50% { height: 56px; margin-top: -4px; opacity: .52; }
}`
  },
  {
    id: 'pyramid-bloom-3d',
    name: '3D Pyramid Bloom',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Four triangular faces open and close around a glowing pyramid core.',
    markup: `<div class="vl-pyramid-bloom-3d" aria-hidden="true"><div><span style="--r:0deg"></span><span style="--r:90deg"></span><span style="--r:180deg"></span><span style="--r:270deg"></span><i></i></div></div>`,
    css: `.vl-pyramid-bloom-3d {
  width: 82px;
  height: 74px;
  display: grid;
  place-items: center;
  perspective: 560px;
}
.vl-pyramid-bloom-3d > div {
  position: relative;
  width: 48px;
  height: 48px;
  transform-style: preserve-3d;
  animation: vl-pyramid-bloom-scene calc(var(--loader-speed) * 2.3) linear infinite;
}
.vl-pyramid-bloom-3d span {
  position: absolute;
  left: 7px;
  top: 3px;
  width: 34px;
  height: 42px;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: color-mix(in srgb, var(--loader-accent) 66%, transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--loader-accent) 78%, white);
  transform-origin: 50% 100%;
  transform: rotateY(var(--r)) rotateX(64deg) translateZ(11px);
  animation: vl-pyramid-face-open calc(var(--loader-speed) * 1.55) ease-in-out infinite;
}
.vl-pyramid-bloom-3d i {
  position: absolute;
  left: 50%; top: 50%;
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: translate(-50%, -50%) translateZ(14px);
  box-shadow: 0 0 18px var(--loader-accent);
}
@keyframes vl-pyramid-bloom-scene { to { transform: rotateY(360deg) rotateX(12deg); } }
@keyframes vl-pyramid-face-open {
  0%, 100% { transform: rotateY(var(--r)) rotateX(64deg) translateZ(11px); opacity: .48; filter: brightness(.82); }
  50% { transform: rotateY(var(--r)) rotateX(82deg) translateZ(15px); opacity: 1; filter: brightness(1.18); }
}`
  },
  {
    id: 'voxel-wave-3d',
    name: '3D Voxel Wave',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Six compact voxels rise along the Z-axis to form a smooth depth wave.',
    markup: `<div class="vl-voxel-wave-3d" aria-hidden="true"><span style="--i:0;--y:0px"></span><span style="--i:1;--y:-6px"></span><span style="--i:2;--y:0px"></span><span style="--i:3;--y:-6px"></span><span style="--i:4;--y:0px"></span><span style="--i:5;--y:-6px"></span></div>`,
    css: `.vl-voxel-wave-3d {
  position: relative;
  width: 92px;
  height: 68px;
  perspective: 560px;
  transform-style: preserve-3d;
  transform: rotateX(58deg) rotateZ(38deg);
}
.vl-voxel-wave-3d span {
  position: absolute;
  left: calc(2px + var(--i) * 15px);
  top: calc(29px + var(--y));
  width: 18px;
  height: 18px;
  border-radius: 3px;
  background: var(--loader-accent);
  box-shadow: 5px 5px 0 color-mix(in srgb, var(--loader-accent) 52%, black);
  transform: translateZ(0);
  animation: vl-voxel-wave-rise calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--i) * .1s);
}
.vl-voxel-wave-3d span::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: color-mix(in srgb, var(--loader-accent) 64%, white);
  transform: translateZ(6px);
}
@keyframes vl-voxel-wave-rise {
  0%, 100% { transform: translateZ(0) scale(.82); opacity: .46; }
  50% { transform: translateZ(22px) scale(1); opacity: 1; }
}`
  },
  {
    id: 'ribbon-twist-3d',
    name: '3D Ribbon Twist',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Six connected ribbon panels twist through depth like a compact Möbius strip.',
    markup: `<div class="vl-ribbon-twist-3d" aria-hidden="true"><span style="--i:0"></span><span style="--i:1"></span><span style="--i:2"></span><span style="--i:3"></span><span style="--i:4"></span><span style="--i:5"></span></div>`,
    css: `.vl-ribbon-twist-3d {
  position: relative;
  width: 88px;
  height: 68px;
  perspective: 620px;
  transform-style: preserve-3d;
  animation: vl-ribbon-twist-scene calc(var(--loader-speed) * 2.45) linear infinite;
}
.vl-ribbon-twist-3d span {
  position: absolute;
  left: calc(7px + var(--i) * 12px);
  top: 24px;
  width: 18px;
  height: 28px;
  border-radius: 4px;
  background: linear-gradient(145deg, color-mix(in srgb, var(--loader-accent) 86%, white), color-mix(in srgb, var(--loader-accent) 48%, transparent));
  border: 1px solid color-mix(in srgb, var(--loader-accent) 68%, white);
  transform: rotateY(calc(var(--i) * 36deg)) rotateX(calc(var(--i) * 18deg)) translateZ(calc((var(--i) - 2.5) * 5px));
  animation: vl-ribbon-panel-flip calc(var(--loader-speed) * 1.35) ease-in-out infinite;
  animation-delay: calc(var(--i) * .08s);
}
@keyframes vl-ribbon-twist-scene { to { transform: rotateY(360deg) rotateX(16deg); } }
@keyframes vl-ribbon-panel-flip {
  50% { transform: rotateY(calc(var(--i) * 36deg + 180deg)) rotateX(calc(var(--i) * 18deg)) translateZ(calc((var(--i) - 2.5) * 5px)); opacity: .55; }
}`
  }
];
