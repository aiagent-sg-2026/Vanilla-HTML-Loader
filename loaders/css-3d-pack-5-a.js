export const css3dPack5LoadersA = [
  {
    id: 'domino-helix-3d',
    name: '3D Domino Helix',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Eight slim domino panels form a rotating vertical helix and breathe through depth.',
    markup: `<div class="vl-domino-helix-3d" aria-hidden="true">
  <span style="--a:0deg;--y:-28px;--d:0s"></span><span style="--a:45deg;--y:-20px;--d:.08s"></span><span style="--a:90deg;--y:-12px;--d:.16s"></span><span style="--a:135deg;--y:-4px;--d:.24s"></span><span style="--a:180deg;--y:4px;--d:.32s"></span><span style="--a:225deg;--y:12px;--d:.4s"></span><span style="--a:270deg;--y:20px;--d:.48s"></span><span style="--a:315deg;--y:28px;--d:.56s"></span>
</div>`,
    css: `.vl-domino-helix-3d {
  position: relative;
  width: 78px;
  height: 82px;
  perspective: 620px;
  transform-style: preserve-3d;
  animation: vl-domino-helix-scene calc(var(--loader-speed) * 2.5) linear infinite;
}
.vl-domino-helix-3d span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 13px;
  height: 25px;
  margin: -12.5px 0 0 -6.5px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, white);
  border-radius: 3px;
  background: linear-gradient(145deg, color-mix(in srgb, var(--loader-accent) 82%, white), color-mix(in srgb, var(--loader-accent) 48%, transparent));
  box-shadow: 0 3px 8px rgba(15, 23, 42, .14);
  transform: rotateY(var(--a)) translateZ(25px) translateY(var(--y));
  animation: vl-domino-helix-breathe calc(var(--loader-speed) * 1.15) ease-in-out infinite;
  animation-delay: var(--d);
  backface-visibility: hidden;
}
@keyframes vl-domino-helix-scene { to { transform: rotateY(360deg); } }
@keyframes vl-domino-helix-breathe {
  0%, 100% { transform: rotateY(var(--a)) translateZ(25px) translateY(var(--y)) scale(.78); opacity: .38; }
  50% { transform: rotateY(var(--a)) translateZ(34px) translateY(var(--y)) scale(1); opacity: 1; }
}`
  },
  {
    id: 'elevator-shafts-3d',
    name: '3D Elevator Shafts',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Three isometric lift blocks travel through framed shafts with staggered vertical motion.',
    markup: `<div class="vl-elevator-shafts-3d" aria-hidden="true">
  <span style="--x:4px;--d:0s"></span><span style="--x:31px;--d:.18s"></span><span style="--x:58px;--d:.36s"></span>
</div>`,
    css: `.vl-elevator-shafts-3d {
  position: relative;
  width: 86px;
  height: 76px;
  perspective: 600px;
  transform: rotateX(58deg) rotateZ(-8deg);
  transform-style: preserve-3d;
}
.vl-elevator-shafts-3d::before {
  content: '';
  position: absolute;
  inset: 5px 1px;
  border-top: 2px solid color-mix(in srgb, var(--loader-accent) 30%, transparent);
  border-bottom: 2px solid color-mix(in srgb, var(--loader-accent) 30%, transparent);
  background: repeating-linear-gradient(90deg, color-mix(in srgb, var(--loader-accent) 18%, transparent) 0 2px, transparent 2px 27px);
}
.vl-elevator-shafts-3d span {
  position: absolute;
  left: var(--x);
  bottom: 9px;
  width: 23px;
  height: 22px;
  border-radius: 4px;
  background: var(--loader-accent);
  box-shadow: 5px 5px 0 color-mix(in srgb, var(--loader-accent) 54%, black);
  transform: translateZ(4px);
  animation: vl-elevator-shaft-rise calc(var(--loader-speed) * 1.65) ease-in-out infinite;
  animation-delay: var(--d);
}
.vl-elevator-shafts-3d span::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: color-mix(in srgb, var(--loader-accent) 62%, white);
  transform: translateZ(7px);
}
@keyframes vl-elevator-shaft-rise {
  0%, 100% { transform: translateY(0) translateZ(4px); opacity: .45; }
  50% { transform: translateY(-42px) translateZ(18px); opacity: 1; }
}`
  },
  {
    id: 'hinge-windows-3d',
    name: '3D Hinge Windows',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Four framed panels open from opposing hinges and reveal a glowing center.',
    markup: `<div class="vl-hinge-windows-3d" aria-hidden="true">
  <span class="top"></span><span class="right"></span><span class="bottom"></span><span class="left"></span><i></i>
</div>`,
    css: `.vl-hinge-windows-3d {
  position: relative;
  width: 76px;
  height: 76px;
  perspective: 540px;
  transform-style: preserve-3d;
}
.vl-hinge-windows-3d span {
  position: absolute;
  width: 32px;
  height: 32px;
  border: 2px solid var(--loader-accent);
  border-radius: 5px;
  background: color-mix(in srgb, var(--loader-accent) 24%, transparent);
  box-shadow: inset 0 0 12px color-mix(in srgb, var(--loader-accent) 24%, transparent);
  backface-visibility: hidden;
}
.vl-hinge-windows-3d .top { left: 22px; top: 3px; transform-origin: 50% 100%; animation: vl-hinge-top calc(var(--loader-speed) * 1.7) ease-in-out infinite; }
.vl-hinge-windows-3d .right { right: 3px; top: 22px; transform-origin: 0 50%; animation: vl-hinge-right calc(var(--loader-speed) * 1.7) ease-in-out infinite; }
.vl-hinge-windows-3d .bottom { left: 22px; bottom: 3px; transform-origin: 50% 0; animation: vl-hinge-bottom calc(var(--loader-speed) * 1.7) ease-in-out infinite; }
.vl-hinge-windows-3d .left { left: 3px; top: 22px; transform-origin: 100% 50%; animation: vl-hinge-left calc(var(--loader-speed) * 1.7) ease-in-out infinite; }
.vl-hinge-windows-3d i {
  position: absolute;
  left: 50%; top: 50%;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: translate(-50%, -50%) translateZ(-12px);
  box-shadow: 0 0 18px var(--loader-accent);
  animation: vl-hinge-core calc(var(--loader-speed) * 1.7) ease-in-out infinite;
}
@keyframes vl-hinge-top { 0%,100% { transform: rotateX(0); } 50% { transform: rotateX(-72deg); } }
@keyframes vl-hinge-right { 0%,100% { transform: rotateY(0); } 50% { transform: rotateY(72deg); } }
@keyframes vl-hinge-bottom { 0%,100% { transform: rotateX(0); } 50% { transform: rotateX(72deg); } }
@keyframes vl-hinge-left { 0%,100% { transform: rotateY(0); } 50% { transform: rotateY(-72deg); } }
@keyframes vl-hinge-core { 50% { transform: translate(-50%, -50%) translateZ(18px) scale(1.35); } }`
  },
  {
    id: 'wave-deck-3d',
    name: '3D Wave Deck',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Six floor panels ripple like a flexible deck while maintaining a deep perspective view.',
    markup: `<div class="vl-wave-deck-3d" aria-hidden="true">
  <span style="--i:0;--d:0s"></span><span style="--i:1;--d:.1s"></span><span style="--i:2;--d:.2s"></span><span style="--i:3;--d:.3s"></span><span style="--i:4;--d:.4s"></span><span style="--i:5;--d:.5s"></span>
</div>`,
    css: `.vl-wave-deck-3d {
  position: relative;
  width: 92px;
  height: 68px;
  perspective: 620px;
  transform: rotateX(60deg) rotateZ(-8deg);
  transform-style: preserve-3d;
}
.vl-wave-deck-3d span {
  position: absolute;
  left: calc(3px + var(--i) * 14px);
  top: 22px;
  width: 15px;
  height: 34px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 68%, white);
  border-radius: 3px;
  background: color-mix(in srgb, var(--loader-accent) 68%, transparent);
  transform-origin: 50% 100%;
  animation: vl-wave-deck-panel calc(var(--loader-speed) * 1.45) ease-in-out infinite;
  animation-delay: var(--d);
}
@keyframes vl-wave-deck-panel {
  0%, 100% { transform: rotateX(-8deg) translateZ(0); opacity: .42; }
  50% { transform: rotateX(26deg) translateZ(22px); opacity: 1; }
}`
  },
  {
    id: 'orbit-blades-3d',
    name: '3D Orbit Blades',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Six luminous blades orbit a vertical axis and flare outward in sequence.',
    markup: `<div class="vl-orbit-blades-3d" aria-hidden="true">
  <span style="--a:0deg;--d:0s"></span><span style="--a:60deg;--d:.08s"></span><span style="--a:120deg;--d:.16s"></span><span style="--a:180deg;--d:.24s"></span><span style="--a:240deg;--d:.32s"></span><span style="--a:300deg;--d:.4s"></span><i></i>
</div>`,
    css: `.vl-orbit-blades-3d {
  position: relative;
  width: 78px;
  height: 78px;
  perspective: 620px;
  transform-style: preserve-3d;
  animation: vl-orbit-blades-scene calc(var(--loader-speed) * 2.15) linear infinite;
}
.vl-orbit-blades-3d span {
  position: absolute;
  left: 50%; top: 50%;
  width: 9px; height: 42px;
  margin: -21px 0 0 -4.5px;
  border-radius: 999px;
  background: linear-gradient(to bottom, transparent, var(--loader-accent), transparent);
  transform: rotateY(var(--a)) translateZ(24px);
  animation: vl-orbit-blade-flare calc(var(--loader-speed) * 1.05) ease-in-out infinite;
  animation-delay: var(--d);
}
.vl-orbit-blades-3d i {
  position: absolute;
  left: 50%; top: 50%;
  width: 13px; height: 13px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: translate(-50%, -50%);
  box-shadow: 0 0 20px var(--loader-accent);
}
@keyframes vl-orbit-blades-scene { to { transform: rotateX(18deg) rotateY(360deg); } }
@keyframes vl-orbit-blade-flare {
  0%,100% { transform: rotateY(var(--a)) translateZ(24px) scaleY(.68); opacity: .38; }
  50% { transform: rotateY(var(--a)) translateZ(34px) scaleY(1); opacity: 1; }
}`
  }
];
