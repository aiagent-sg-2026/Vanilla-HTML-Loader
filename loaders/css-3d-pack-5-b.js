export const css3dPack5LoadersB = [
  {
    id: 'book-stack-3d',
    name: '3D Book Stack',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Layered pages flip over a compact book spine with staggered depth and timing.',
    markup: `<div class="vl-book-stack-3d" aria-hidden="true">
  <div><span style="--d:0s"></span><span style="--d:.14s"></span><span style="--d:.28s"></span><span style="--d:.42s"></span><span style="--d:.56s"></span></div>
</div>`,
    css: `.vl-book-stack-3d {
  width: 90px;
  height: 72px;
  display: grid;
  place-items: center;
  perspective: 620px;
}
.vl-book-stack-3d > div {
  position: relative;
  width: 64px;
  height: 44px;
  transform: rotateX(58deg) rotateZ(-8deg);
  transform-style: preserve-3d;
}
.vl-book-stack-3d > div::before {
  content: '';
  position: absolute;
  left: 0; top: 0;
  width: 5px; height: 44px;
  border-radius: 3px;
  background: color-mix(in srgb, var(--loader-accent) 72%, black);
  transform: translateZ(3px);
}
.vl-book-stack-3d span {
  position: absolute;
  left: 5px; top: 2px;
  width: 57px; height: 40px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 56%, white);
  border-radius: 0 6px 6px 0;
  background: color-mix(in srgb, var(--loader-accent) 34%, white);
  transform-origin: 0 50%;
  animation: vl-book-page-flip calc(var(--loader-speed) * 1.8) ease-in-out infinite;
  animation-delay: var(--d);
  backface-visibility: hidden;
}
@keyframes vl-book-page-flip {
  0%, 18%, 100% { transform: rotateY(0deg) translateZ(0); opacity: .55; }
  52% { transform: rotateY(-168deg) translateZ(8px); opacity: 1; }
  72% { transform: rotateY(-180deg) translateZ(2px); opacity: .34; }
}`
  },
  {
    id: 'suspended-tiles-3d',
    name: '3D Suspended Tiles',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Five hanging tiles swing independently from an invisible rail in perspective.',
    markup: `<div class="vl-suspended-tiles-3d" aria-hidden="true">
  <span style="--x:3px;--d:0s"></span><span style="--x:21px;--d:.1s"></span><span style="--x:39px;--d:.2s"></span><span style="--x:57px;--d:.3s"></span><span style="--x:75px;--d:.4s"></span>
</div>`,
    css: `.vl-suspended-tiles-3d {
  position: relative;
  width: 94px;
  height: 74px;
  perspective: 580px;
  transform-style: preserve-3d;
}
.vl-suspended-tiles-3d::before {
  content: '';
  position: absolute;
  left: 2px; right: 2px; top: 11px;
  height: 3px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 38%, transparent);
  transform: rotateX(58deg);
}
.vl-suspended-tiles-3d span {
  position: absolute;
  left: var(--x); top: 15px;
  width: 16px; height: 40px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, white);
  border-radius: 4px;
  background: linear-gradient(160deg, color-mix(in srgb, var(--loader-accent) 78%, white), color-mix(in srgb, var(--loader-accent) 48%, transparent));
  transform-origin: 50% -5px;
  animation: vl-suspended-tile-swing calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: var(--d);
  box-shadow: 0 8px 14px rgba(15, 23, 42, .12);
}
@keyframes vl-suspended-tile-swing {
  0%,100% { transform: rotateX(12deg) rotateY(-34deg) translateZ(0); }
  50% { transform: rotateX(-12deg) rotateY(34deg) translateZ(18px); }
}`
  },
  {
    id: 'spiral-frames-3d',
    name: '3D Spiral Frames',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Nested square frames spiral through the Z-axis while the whole scene slowly turns.',
    markup: `<div class="vl-spiral-frames-3d" aria-hidden="true">
  <span style="--r:0deg;--z:0px;--s:1"></span><span style="--r:18deg;--z:-10px;--s:.86"></span><span style="--r:36deg;--z:-20px;--s:.72"></span><span style="--r:54deg;--z:-30px;--s:.58"></span><span style="--r:72deg;--z:-40px;--s:.44"></span>
</div>`,
    css: `.vl-spiral-frames-3d {
  position: relative;
  width: 78px;
  height: 78px;
  perspective: 640px;
  transform-style: preserve-3d;
  animation: vl-spiral-frames-scene calc(var(--loader-speed) * 2.4) linear infinite;
}
.vl-spiral-frames-3d span {
  position: absolute;
  left: 8px; top: 8px;
  width: 62px; height: 62px;
  border: 3px solid var(--loader-accent);
  border-radius: 10px;
  box-shadow: 0 0 12px color-mix(in srgb, var(--loader-accent) 24%, transparent);
  transform: rotateZ(var(--r)) translateZ(var(--z)) scale(var(--s));
  animation: vl-spiral-frame-pulse calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
@keyframes vl-spiral-frames-scene { to { transform: rotateX(18deg) rotateY(360deg); } }
@keyframes vl-spiral-frame-pulse {
  0%,100% { opacity: .3; filter: saturate(.7); }
  50% { opacity: 1; filter: saturate(1.3); }
}`
  },
  {
    id: 'bridge-blocks-3d',
    name: '3D Bridge Blocks',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Seven isometric blocks rise into an arch and travel across a compact bridge path.',
    markup: `<div class="vl-bridge-blocks-3d" aria-hidden="true">
  <span style="--x:1px;--y:20px;--d:0s"></span><span style="--x:14px;--y:12px;--d:.08s"></span><span style="--x:27px;--y:5px;--d:.16s"></span><span style="--x:40px;--y:1px;--d:.24s"></span><span style="--x:53px;--y:5px;--d:.32s"></span><span style="--x:66px;--y:12px;--d:.4s"></span><span style="--x:79px;--y:20px;--d:.48s"></span>
</div>`,
    css: `.vl-bridge-blocks-3d {
  position: relative;
  width: 96px;
  height: 72px;
  perspective: 620px;
  transform: rotateX(58deg) rotateZ(-8deg);
  transform-style: preserve-3d;
}
.vl-bridge-blocks-3d span {
  position: absolute;
  left: var(--x); top: var(--y);
  width: 16px; height: 16px;
  border-radius: 3px;
  background: var(--loader-accent);
  box-shadow: 5px 5px 0 color-mix(in srgb, var(--loader-accent) 52%, black);
  animation: vl-bridge-block-hop calc(var(--loader-speed) * 1.3) ease-in-out infinite;
  animation-delay: var(--d);
}
.vl-bridge-blocks-3d span::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: color-mix(in srgb, var(--loader-accent) 64%, white);
  transform: translateZ(6px);
}
@keyframes vl-bridge-block-hop {
  0%,100% { transform: translateZ(0) scale(.76); opacity: .38; }
  50% { transform: translateZ(22px) scale(1); opacity: 1; }
}`
  },
  {
    id: 'depth-compass-3d',
    name: '3D Depth Compass',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Four directional planes pivot around a glowing center and pulse along opposing axes.',
    markup: `<div class="vl-depth-compass-3d" aria-hidden="true">
  <span class="north"></span><span class="east"></span><span class="south"></span><span class="west"></span><i></i>
</div>`,
    css: `.vl-depth-compass-3d {
  position: relative;
  width: 78px;
  height: 78px;
  perspective: 600px;
  transform-style: preserve-3d;
  animation: vl-depth-compass-scene calc(var(--loader-speed) * 2.2) linear infinite;
}
.vl-depth-compass-3d span {
  position: absolute;
  left: 50%; top: 50%;
  width: 15px; height: 34px;
  margin: -17px 0 0 -7.5px;
  clip-path: polygon(50% 0, 100% 100%, 50% 78%, 0 100%);
  background: linear-gradient(to bottom, color-mix(in srgb, var(--loader-accent) 84%, white), var(--loader-accent));
  transform-origin: 50% 100%;
}
.vl-depth-compass-3d .north { transform: translateY(-23px) rotateX(58deg); animation: vl-depth-north calc(var(--loader-speed) * 1.2) ease-in-out infinite; }
.vl-depth-compass-3d .east { transform: translateX(23px) rotateZ(90deg) rotateX(58deg); animation: vl-depth-east calc(var(--loader-speed) * 1.2) ease-in-out infinite .15s; }
.vl-depth-compass-3d .south { transform: translateY(23px) rotateZ(180deg) rotateX(58deg); animation: vl-depth-south calc(var(--loader-speed) * 1.2) ease-in-out infinite .3s; }
.vl-depth-compass-3d .west { transform: translateX(-23px) rotateZ(-90deg) rotateX(58deg); animation: vl-depth-west calc(var(--loader-speed) * 1.2) ease-in-out infinite .45s; }
.vl-depth-compass-3d i {
  position: absolute;
  left: 50%; top: 50%;
  width: 14px; height: 14px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: translate(-50%, -50%) translateZ(14px);
  box-shadow: 0 0 18px var(--loader-accent);
}
@keyframes vl-depth-compass-scene { to { transform: rotateX(24deg) rotateY(360deg); } }
@keyframes vl-depth-north { 50% { transform: translateY(-29px) rotateX(82deg) translateZ(12px); } }
@keyframes vl-depth-east { 50% { transform: translateX(29px) rotateZ(90deg) rotateX(82deg) translateZ(12px); } }
@keyframes vl-depth-south { 50% { transform: translateY(29px) rotateZ(180deg) rotateX(82deg) translateZ(12px); } }
@keyframes vl-depth-west { 50% { transform: translateX(-29px) rotateZ(-90deg) rotateX(82deg) translateZ(12px); } }`
  }
];
