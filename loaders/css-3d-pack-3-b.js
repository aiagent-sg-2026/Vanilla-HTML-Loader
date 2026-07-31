export const css3dPack3LoadersB = [
  {
    id: 'coin-stack-3d',
    name: '3D Coin Stack',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Six tilted discs lift and settle like a rotating stack of dimensional coins.',
    markup: `<div class="vl-coin-stack-3d" aria-hidden="true"><span style="--i:0"></span><span style="--i:1"></span><span style="--i:2"></span><span style="--i:3"></span><span style="--i:4"></span><span style="--i:5"></span></div>`,
    css: `.vl-coin-stack-3d {
  position: relative;
  width: 78px;
  height: 72px;
  perspective: 560px;
  transform-style: preserve-3d;
  transform: rotateX(62deg) rotateZ(-10deg);
  animation: vl-coin-stack-turn calc(var(--loader-speed) * 2.35) linear infinite;
}
.vl-coin-stack-3d span {
  position: absolute;
  left: 17px;
  top: calc(25px - var(--i) * 3px);
  width: 44px;
  height: 24px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 72%, white);
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) calc(26% + var(--i) * 8%), transparent);
  box-shadow: 0 5px 0 color-mix(in srgb, var(--loader-accent) 48%, black);
  transform: translateZ(calc(var(--i) * 6px));
  animation: vl-coin-stack-lift calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--i) * .08s);
}
@keyframes vl-coin-stack-turn { to { transform: rotateX(62deg) rotateZ(350deg); } }
@keyframes vl-coin-stack-lift {
  0%, 100% { transform: translateZ(calc(var(--i) * 6px)); opacity: .48; }
  50% { transform: translateZ(calc(var(--i) * 6px + 16px)); opacity: 1; }
}`
  },
  {
    id: 'frame-cage-3d',
    name: '3D Frame Cage',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Three orthogonal square frames rotate around a luminous central core.',
    markup: `<div class="vl-frame-cage-3d" aria-hidden="true"><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-frame-cage-3d {
  position: relative;
  width: 72px;
  height: 72px;
  perspective: 580px;
  transform-style: preserve-3d;
  animation: vl-frame-cage-scene calc(var(--loader-speed) * 2.3) linear infinite;
}
.vl-frame-cage-3d span {
  position: absolute;
  inset: 11px;
  border: 3px solid var(--loader-accent);
  border-radius: 10px;
  box-shadow: 0 0 12px color-mix(in srgb, var(--loader-accent) 32%, transparent);
  transform-style: preserve-3d;
}
.vl-frame-cage-3d span:nth-child(1) { transform: rotateX(72deg); }
.vl-frame-cage-3d span:nth-child(2) { transform: rotateY(72deg); }
.vl-frame-cage-3d span:nth-child(3) { transform: rotateX(48deg) rotateY(48deg); }
.vl-frame-cage-3d i {
  position: absolute;
  left: 50%; top: 50%;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: translate(-50%, -50%) translateZ(10px);
  box-shadow: 0 0 20px var(--loader-accent);
}
@keyframes vl-frame-cage-scene {
  to { transform: rotateX(360deg) rotateY(540deg) rotateZ(180deg); }
}`
  },
  {
    id: 'flip-bridge-3d',
    name: '3D Flip Bridge',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Six bridge panels flip in sequence across a shallow perspective plane.',
    markup: `<div class="vl-flip-bridge-3d" aria-hidden="true"><span style="--i:0"></span><span style="--i:1"></span><span style="--i:2"></span><span style="--i:3"></span><span style="--i:4"></span><span style="--i:5"></span></div>`,
    css: `.vl-flip-bridge-3d {
  width: 92px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  perspective: 520px;
  transform: rotateX(52deg) rotateZ(-6deg);
  transform-style: preserve-3d;
}
.vl-flip-bridge-3d span {
  width: 12px;
  height: 38px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, white);
  border-radius: 3px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 82%, white), color-mix(in srgb, var(--loader-accent) 48%, transparent));
  box-shadow: 0 7px 10px rgba(15, 23, 42, .12);
  transform-origin: 50% 100%;
  animation: vl-flip-bridge-panel calc(var(--loader-speed) * 1.45) ease-in-out infinite;
  animation-delay: calc(var(--i) * .1s);
}
@keyframes vl-flip-bridge-panel {
  0%, 100% { transform: rotateX(0deg) translateZ(0); opacity: .42; }
  50% { transform: rotateX(180deg) translateZ(16px); opacity: 1; }
}`
  },
  {
    id: 'depth-rail-3d',
    name: '3D Depth Rail',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Glowing blocks travel toward the viewer along a central Z-axis rail.',
    markup: `<div class="vl-depth-rail-3d" aria-hidden="true"><i></i><span style="--i:0"></span><span style="--i:1"></span><span style="--i:2"></span><span style="--i:3"></span><span style="--i:4"></span></div>`,
    css: `.vl-depth-rail-3d {
  position: relative;
  width: 82px;
  height: 72px;
  perspective: 520px;
  transform-style: preserve-3d;
  transform: rotateX(66deg);
}
.vl-depth-rail-3d i {
  position: absolute;
  left: 39px;
  top: 5px;
  width: 4px;
  height: 62px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 30%, transparent);
  transform: translateZ(-28px);
}
.vl-depth-rail-3d span {
  position: absolute;
  left: 32px;
  top: 28px;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  background: var(--loader-accent);
  box-shadow: 0 0 14px color-mix(in srgb, var(--loader-accent) 52%, transparent);
  opacity: 0;
  transform: translateZ(-52px) scale(.55);
  animation: vl-depth-rail-travel calc(var(--loader-speed) * 2) linear infinite;
  animation-delay: calc(var(--i) * -.4s);
}
@keyframes vl-depth-rail-travel {
  0% { transform: translateZ(-52px) scale(.55); opacity: 0; }
  22% { opacity: 1; }
  70% { opacity: 1; }
  100% { transform: translateZ(42px) scale(1.12); opacity: 0; }
}`
  },
  {
    id: 'diamond-prism-3d',
    name: '3D Diamond Prism',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Four diamond faces form a translucent prism that rotates and contracts.',
    markup: `<div class="vl-diamond-prism-3d" aria-hidden="true"><div><span></span><span></span><span></span><span></span></div></div>`,
    css: `.vl-diamond-prism-3d {
  width: 82px;
  height: 74px;
  display: grid;
  place-items: center;
  perspective: 600px;
}
.vl-diamond-prism-3d > div {
  position: relative;
  width: 42px;
  height: 50px;
  transform-style: preserve-3d;
  animation: vl-diamond-prism-turn calc(var(--loader-speed) * 2.25) ease-in-out infinite;
}
.vl-diamond-prism-3d span {
  position: absolute;
  left: 4px;
  top: 2px;
  width: 34px;
  height: 46px;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, white);
  background: color-mix(in srgb, var(--loader-accent) 56%, transparent);
  box-shadow: inset 0 0 14px color-mix(in srgb, var(--loader-accent) 26%, transparent);
  backface-visibility: visible;
}
.vl-diamond-prism-3d span:nth-child(1) { transform: rotateY(0deg) translateZ(13px); }
.vl-diamond-prism-3d span:nth-child(2) { transform: rotateY(90deg) translateZ(13px); }
.vl-diamond-prism-3d span:nth-child(3) { transform: rotateY(180deg) translateZ(13px); }
.vl-diamond-prism-3d span:nth-child(4) { transform: rotateY(270deg) translateZ(13px); }
@keyframes vl-diamond-prism-turn {
  0%, 100% { transform: rotateX(-15deg) rotateY(0deg) scale3d(.8, .8, .8); }
  50% { transform: rotateX(195deg) rotateY(180deg) scale3d(1.05, 1.05, 1.05); }
}`
  }
];
