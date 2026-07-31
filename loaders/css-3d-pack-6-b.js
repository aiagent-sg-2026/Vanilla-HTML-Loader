export const css3dPack6LoadersB = [
  {
    id: 'flip-cylinder-3d',
    name: '3D Flip Cylinder',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Eight narrow panels form a rotating cylinder and pulse outward in sequence.',
    markup: `<div class="vl-flip-cylinder-3d" aria-hidden="true">
  <div><span style="--a:0deg;--i:0"></span><span style="--a:45deg;--i:1"></span><span style="--a:90deg;--i:2"></span><span style="--a:135deg;--i:3"></span><span style="--a:180deg;--i:4"></span><span style="--a:225deg;--i:5"></span><span style="--a:270deg;--i:6"></span><span style="--a:315deg;--i:7"></span></div>
</div>`,
    css: `.vl-flip-cylinder-3d {
  width: 84px;
  height: 80px;
  display: grid;
  place-items: center;
  perspective: 660px;
}
.vl-flip-cylinder-3d > div {
  position: relative;
  width: 28px;
  height: 46px;
  transform-style: preserve-3d;
  animation: vl-flip-cylinder-scene calc(var(--loader-speed) * 2.2) linear infinite;
}
.vl-flip-cylinder-3d span {
  position: absolute;
  inset: 0 8px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 68%, white);
  border-radius: 4px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 74%, white), color-mix(in srgb, var(--loader-accent) 46%, transparent));
  backface-visibility: hidden;
  animation: vl-flip-cylinder-strip calc(var(--loader-speed) * 1.25) ease-in-out infinite;
  animation-delay: calc(var(--i) * -.08s);
}
@keyframes vl-flip-cylinder-scene {
  from { transform: rotateX(-10deg) rotateY(0deg); }
  to { transform: rotateX(-10deg) rotateY(360deg); }
}
@keyframes vl-flip-cylinder-strip {
  0%, 100% { transform: rotateY(var(--a)) translateZ(22px) scaleY(.72); opacity: .42; }
  50% { transform: rotateY(var(--a)) translateZ(32px) scaleY(1); opacity: 1; }
}`
  },
  {
    id: 'hex-net-fold-3d',
    name: '3D Hex Net Fold',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Six hexagonal tiles fold upward around a central plate in a staggered net animation.',
    markup: `<div class="vl-hex-net-fold-3d" aria-hidden="true">
  <div><i></i><span style="--x:0px;--y:-25px;--r:0deg;--i:0"></span><span style="--x:22px;--y:-13px;--r:60deg;--i:1"></span><span style="--x:22px;--y:13px;--r:120deg;--i:2"></span><span style="--x:0px;--y:25px;--r:180deg;--i:3"></span><span style="--x:-22px;--y:13px;--r:240deg;--i:4"></span><span style="--x:-22px;--y:-13px;--r:300deg;--i:5"></span></div>
</div>`,
    css: `.vl-hex-net-fold-3d {
  width: 92px;
  height: 82px;
  display: grid;
  place-items: center;
  perspective: 640px;
}
.vl-hex-net-fold-3d > div {
  position: relative;
  width: 66px;
  height: 58px;
  transform-style: preserve-3d;
  transform: rotateX(56deg) rotateZ(30deg);
}
.vl-hex-net-fold-3d i,
.vl-hex-net-fold-3d span {
  position: absolute;
  left: 22px;
  top: 18px;
  width: 22px;
  height: 22px;
  clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0 50%);
  border-radius: 4px;
  background: linear-gradient(145deg, color-mix(in srgb, var(--loader-accent) 72%, white), var(--loader-accent));
  box-shadow: 0 5px 10px color-mix(in srgb, var(--loader-accent) 22%, transparent);
}
.vl-hex-net-fold-3d i {
  transform: translateZ(7px);
  box-shadow: 0 0 16px color-mix(in srgb, var(--loader-accent) 44%, transparent);
}
.vl-hex-net-fold-3d span {
  transform-origin: 50% 50%;
  animation: vl-hex-net-tile calc(var(--loader-speed) * 1.6) ease-in-out infinite;
  animation-delay: calc(var(--i) * -.1s);
}
@keyframes vl-hex-net-tile {
  0%, 100% { transform: translate3d(var(--x), var(--y), 0) rotateZ(var(--r)) rotateX(0deg) scale(.78); opacity: .4; }
  50% { transform: translate3d(var(--x), var(--y), 20px) rotateZ(var(--r)) rotateX(72deg) scale(1); opacity: 1; }
}`
  },
  {
    id: 'swing-blocks-3d',
    name: '3D Swing Blocks',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Five compact blocks swing from a shared rail with alternating depth and perspective.',
    markup: `<div class="vl-swing-blocks-3d" aria-hidden="true">
  <div><span style="--i:0;--z1:0px;--z2:18px"></span><span style="--i:1;--z1:2px;--z2:16px"></span><span style="--i:2;--z1:4px;--z2:14px"></span><span style="--i:3;--z1:6px;--z2:12px"></span><span style="--i:4;--z1:8px;--z2:10px"></span></div>
</div>`,
    css: `.vl-swing-blocks-3d {
  width: 94px;
  height: 78px;
  display: grid;
  place-items: center;
  perspective: 620px;
}
.vl-swing-blocks-3d > div {
  position: relative;
  width: 84px;
  height: 56px;
  transform-style: preserve-3d;
  transform: rotateX(8deg) rotateY(-16deg);
}
.vl-swing-blocks-3d > div::before {
  content: '';
  position: absolute;
  left: 4px;
  right: 4px;
  top: 4px;
  height: 3px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 42%, #dbe3ec);
}
.vl-swing-blocks-3d span {
  position: absolute;
  left: calc(5px + var(--i) * 16px);
  top: 5px;
  width: 13px;
  height: 28px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 66%, white);
  border-radius: 4px;
  background: var(--loader-accent);
  transform-origin: 50% 0;
  box-shadow: 4px 5px 0 color-mix(in srgb, var(--loader-accent) 48%, black);
  animation: vl-swing-block calc(var(--loader-speed) * 1.35) ease-in-out infinite;
  animation-delay: calc(var(--i) * -.11s);
}
@keyframes vl-swing-block {
  0%, 100% { transform: rotateX(58deg) translateZ(var(--z1)); opacity: .45; }
  50% { transform: rotateX(-38deg) translateZ(var(--z2)); opacity: 1; }
}`
  },
  {
    id: 'chamber-pulse-3d',
    name: '3D Chamber Pulse',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Six translucent walls form a chamber that rotates and breathes around a bright inner core.',
    markup: `<div class="vl-chamber-pulse-3d" aria-hidden="true">
  <div><span class="front"></span><span class="back"></span><span class="right"></span><span class="left"></span><span class="top"></span><span class="bottom"></span><i></i></div>
</div>`,
    css: `.vl-chamber-pulse-3d {
  width: 86px;
  height: 82px;
  display: grid;
  place-items: center;
  perspective: 640px;
}
.vl-chamber-pulse-3d > div {
  position: relative;
  width: 38px;
  height: 38px;
  transform-style: preserve-3d;
  animation: vl-chamber-pulse-scene calc(var(--loader-speed) * 2.25) ease-in-out infinite;
}
.vl-chamber-pulse-3d span {
  position: absolute;
  inset: 0;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 68%, white);
  background: color-mix(in srgb, var(--loader-accent) 34%, transparent);
  box-shadow: inset 0 0 14px color-mix(in srgb, var(--loader-accent) 24%, transparent);
  backface-visibility: visible;
}
.vl-chamber-pulse-3d .front { transform: translateZ(19px); }
.vl-chamber-pulse-3d .back { transform: rotateY(180deg) translateZ(19px); }
.vl-chamber-pulse-3d .right { transform: rotateY(90deg) translateZ(19px); }
.vl-chamber-pulse-3d .left { transform: rotateY(-90deg) translateZ(19px); }
.vl-chamber-pulse-3d .top { transform: rotateX(90deg) translateZ(19px); }
.vl-chamber-pulse-3d .bottom { transform: rotateX(-90deg) translateZ(19px); }
.vl-chamber-pulse-3d i {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: translate(-50%, -50%);
  box-shadow: 0 0 20px var(--loader-accent);
}
@keyframes vl-chamber-pulse-scene {
  0%, 100% { transform: rotateX(-20deg) rotateY(0deg) scale(.72); opacity: .48; }
  50% { transform: rotateX(160deg) rotateY(180deg) scale(1); opacity: 1; }
}`
  },
  {
    id: 'satellite-panels-3d',
    name: '3D Satellite Panels',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Four solar-style panels deploy around a glowing hub while the satellite turns in depth.',
    markup: `<div class="vl-satellite-panels-3d" aria-hidden="true">
  <div><span style="--a:0deg;--i:0"></span><span style="--a:90deg;--i:1"></span><span style="--a:180deg;--i:2"></span><span style="--a:270deg;--i:3"></span><i></i></div>
</div>`,
    css: `.vl-satellite-panels-3d {
  width: 92px;
  height: 84px;
  display: grid;
  place-items: center;
  perspective: 680px;
}
.vl-satellite-panels-3d > div {
  position: relative;
  width: 72px;
  height: 72px;
  transform-style: preserve-3d;
  animation: vl-satellite-scene calc(var(--loader-speed) * 2.45) linear infinite;
}
.vl-satellite-panels-3d span {
  position: absolute;
  left: 30px;
  top: 2px;
  width: 12px;
  height: 28px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 68%, white);
  border-radius: 3px;
  background: repeating-linear-gradient(90deg, color-mix(in srgb, var(--loader-accent) 78%, white) 0 3px, var(--loader-accent) 3px 6px);
  transform-origin: 50% 34px;
  animation: vl-satellite-panel calc(var(--loader-speed) * 1.45) ease-in-out infinite;
  animation-delay: calc(var(--i) * -.13s);
}
.vl-satellite-panels-3d i {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: translate(-50%, -50%) translateZ(14px);
  box-shadow: 0 0 18px color-mix(in srgb, var(--loader-accent) 68%, transparent);
}
@keyframes vl-satellite-scene {
  from { transform: rotateX(58deg) rotateZ(0deg); }
  to { transform: rotateX(58deg) rotateZ(360deg); }
}
@keyframes vl-satellite-panel {
  0%, 100% { transform: rotateZ(var(--a)) translateY(-10px) rotateX(72deg) translateZ(2px) scaleY(.58); opacity: .42; }
  50% { transform: rotateZ(var(--a)) translateY(-18px) rotateX(8deg) translateZ(18px) scaleY(1); opacity: 1; }
}`
  }
];
