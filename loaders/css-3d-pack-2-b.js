export const css3dPack2LoadersB = [
  {
    id: 'conveyor-cubes-3d',
    name: '3D Conveyor Cubes',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Small isometric cubes move along a perspective conveyor line with staggered timing.',
    markup: `<div class="vl-conveyor-cubes-3d" aria-hidden="true">
  <div><span style="--i:0"></span><span style="--i:1"></span><span style="--i:2"></span><span style="--i:3"></span></div>
</div>`,
    css: `.vl-conveyor-cubes-3d {
  width: 90px;
  height: 68px;
  display: grid;
  place-items: center;
  perspective: 560px;
}
.vl-conveyor-cubes-3d > div {
  position: relative;
  width: 82px;
  height: 40px;
  transform: rotateX(62deg) rotateZ(-12deg);
  transform-style: preserve-3d;
}
.vl-conveyor-cubes-3d > div::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 20px;
  height: 4px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 24%, #dce3ec);
}
.vl-conveyor-cubes-3d span {
  position: absolute;
  left: 0;
  top: 10px;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  background: var(--loader-accent);
  box-shadow: 5px 5px 0 color-mix(in srgb, var(--loader-accent) 55%, black);
  transform: translateX(-16px) translateZ(0);
  animation: vl-conveyor-cube-move calc(var(--loader-speed) * 2.1) linear infinite;
  animation-delay: calc(var(--i) * -.46s);
}
.vl-conveyor-cubes-3d span::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: color-mix(in srgb, var(--loader-accent) 62%, white);
  transform: translateZ(8px);
}
@keyframes vl-conveyor-cube-move {
  0% { transform: translateX(-16px) translateZ(0) scale(.7); opacity: 0; }
  18% { opacity: 1; }
  50% { transform: translateX(38px) translateZ(13px) scale(1); }
  100% { transform: translateX(86px) translateZ(0) scale(.7); opacity: 0; }
}`
  },
  {
    id: 'radar-disc-3d',
    name: '3D Radar Disc',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'A tilted radar plane scans across concentric rings with a glowing sweep.',
    markup: `<div class="vl-radar-disc-3d" aria-hidden="true"><span></span><i></i><b></b></div>`,
    css: `.vl-radar-disc-3d {
  position: relative;
  width: 74px;
  height: 74px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 58%, transparent);
  border-radius: 50%;
  background: radial-gradient(circle, color-mix(in srgb, var(--loader-accent) 16%, transparent) 0 2px, transparent 3px),
    repeating-radial-gradient(circle, transparent 0 10px, color-mix(in srgb, var(--loader-accent) 26%, transparent) 11px 12px);
  transform: rotateX(63deg) rotateZ(-8deg);
  transform-style: preserve-3d;
  box-shadow: 0 18px 22px rgba(15, 23, 42, .12);
}
.vl-radar-disc-3d span {
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, color-mix(in srgb, var(--loader-accent) 72%, transparent), transparent 23%, transparent 100%);
  animation: vl-radar-disc-sweep calc(var(--loader-speed) * 1.8) linear infinite;
}
.vl-radar-disc-3d i,
.vl-radar-disc-3d b {
  position: absolute;
  background: color-mix(in srgb, var(--loader-accent) 38%, transparent);
}
.vl-radar-disc-3d i { left: 50%; top: 6px; bottom: 6px; width: 1px; }
.vl-radar-disc-3d b { top: 50%; left: 6px; right: 6px; height: 1px; }
@keyframes vl-radar-disc-sweep { to { transform: rotate(360deg); } }`
  },
  {
    id: 'gear-pair-3d',
    name: '3D Gear Pair',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Two tilted cog discs rotate in opposite directions with layered depth and shadows.',
    markup: `<div class="vl-gear-pair-3d" aria-hidden="true"><span></span><span></span></div>`,
    css: `.vl-gear-pair-3d {
  position: relative;
  width: 86px;
  height: 68px;
  perspective: 560px;
  transform-style: preserve-3d;
}
.vl-gear-pair-3d span {
  position: absolute;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: repeating-conic-gradient(from 0deg, var(--loader-accent) 0 12deg, color-mix(in srgb, var(--loader-accent) 50%, transparent) 12deg 24deg);
  box-shadow: inset 0 0 0 10px color-mix(in srgb, var(--loader-accent) 32%, #fff), 0 10px 16px rgba(15, 23, 42, .14);
  transform: rotateX(62deg);
}
.vl-gear-pair-3d span::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--loader-accent) 62%, white);
}
.vl-gear-pair-3d span:first-child {
  left: 3px;
  top: 2px;
  animation: vl-gear-pair-left calc(var(--loader-speed) * 1.65) linear infinite;
}
.vl-gear-pair-3d span:last-child {
  right: 3px;
  bottom: 0;
  width: 38px;
  height: 38px;
  animation: vl-gear-pair-right calc(var(--loader-speed) * 1.35) linear infinite reverse;
}
@keyframes vl-gear-pair-left { to { transform: rotateX(62deg) rotateZ(360deg); } }
@keyframes vl-gear-pair-right { to { transform: rotateX(62deg) rotateZ(360deg); } }`
  },
  {
    id: 'stair-blocks-3d',
    name: '3D Stair Blocks',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Five isometric blocks form a rising staircase and bounce through depth.',
    markup: `<div class="vl-stair-blocks-3d" aria-hidden="true">
  <span style="--i:0"></span><span style="--i:1"></span><span style="--i:2"></span><span style="--i:3"></span><span style="--i:4"></span>
</div>`,
    css: `.vl-stair-blocks-3d {
  position: relative;
  width: 92px;
  height: 68px;
  perspective: 560px;
  transform-style: preserve-3d;
  transform: rotateX(58deg) rotateZ(40deg);
}
.vl-stair-blocks-3d span {
  position: absolute;
  left: calc(4px + var(--i) * 16px);
  top: calc(37px - var(--i) * 7px);
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background: var(--loader-accent);
  box-shadow: 6px 6px 0 color-mix(in srgb, var(--loader-accent) 52%, black);
  transform: translateZ(calc(var(--i) * 4px));
  animation: vl-stair-block-bounce calc(var(--loader-speed) * 1.45) ease-in-out infinite;
  animation-delay: calc(var(--i) * .1s);
}
.vl-stair-blocks-3d span::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: color-mix(in srgb, var(--loader-accent) 64%, white);
  transform: translateZ(7px);
}
@keyframes vl-stair-block-bounce {
  0%, 100% { transform: translateZ(calc(var(--i) * 4px)); }
  50% { transform: translateZ(calc(var(--i) * 4px + 20px)); }
}`
  },
  {
    id: 'portal-frames-3d',
    name: '3D Portal Frames',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Nested rounded frames pulse through depth like a compact dimensional portal.',
    markup: `<div class="vl-portal-frames-3d" aria-hidden="true">
  <span style="--i:0"></span><span style="--i:1"></span><span style="--i:2"></span><span style="--i:3"></span><span style="--i:4"></span>
</div>`,
    css: `.vl-portal-frames-3d {
  position: relative;
  width: 76px;
  height: 76px;
  perspective: 620px;
  transform-style: preserve-3d;
  transform: rotateY(-18deg) rotateX(8deg);
}
.vl-portal-frames-3d span {
  position: absolute;
  inset: calc(5px + var(--i) * 5px);
  border: 3px solid color-mix(in srgb, var(--loader-accent) calc(88% - var(--i) * 10%), transparent);
  border-radius: calc(13px - var(--i) * 1px);
  transform: translateZ(calc(var(--i) * -14px));
  box-shadow: 0 0 12px color-mix(in srgb, var(--loader-accent) 22%, transparent);
  animation: vl-portal-frame-pulse calc(var(--loader-speed) * 1.8) ease-in-out infinite;
  animation-delay: calc(var(--i) * .1s);
}
@keyframes vl-portal-frame-pulse {
  0%, 100% { transform: translateZ(calc(var(--i) * -14px)) scale(.82); opacity: .34; }
  50% { transform: translateZ(calc(28px - var(--i) * 8px)) scale(1); opacity: 1; }
}`
  }
];
