export const css3dPack6LoadersA = [
  {
    id: 'origami-star-3d',
    name: '3D Origami Star',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Six folded wedges open and close around a rotating center like a compact origami star.',
    markup: `<div class="vl-origami-star-3d" aria-hidden="true">
  <div><span style="--a:0deg;--i:0"></span><span style="--a:60deg;--i:1"></span><span style="--a:120deg;--i:2"></span><span style="--a:180deg;--i:3"></span><span style="--a:240deg;--i:4"></span><span style="--a:300deg;--i:5"></span><i></i></div>
</div>`,
    css: `.vl-origami-star-3d {
  width: 84px;
  height: 84px;
  display: grid;
  place-items: center;
  perspective: 620px;
}
.vl-origami-star-3d > div {
  position: relative;
  width: 48px;
  height: 48px;
  transform-style: preserve-3d;
  animation: vl-origami-star-scene calc(var(--loader-speed) * 2.35) linear infinite;
}
.vl-origami-star-3d span {
  position: absolute;
  left: 19px;
  top: -1px;
  width: 10px;
  height: 31px;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  transform-origin: 50% 25px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 72%, white), var(--loader-accent));
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 24%, transparent);
  animation: vl-origami-star-fold calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--i) * -.09s);
}
.vl-origami-star-3d i {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: translate(-50%, -50%) translateZ(10px);
  box-shadow: 0 0 16px color-mix(in srgb, var(--loader-accent) 65%, transparent);
}
@keyframes vl-origami-star-scene {
  from { transform: rotateX(58deg) rotateZ(0deg); }
  to { transform: rotateX(58deg) rotateZ(360deg); }
}
@keyframes vl-origami-star-fold {
  0%, 100% { transform: rotateZ(var(--a)) rotateX(68deg) translateZ(4px) scaleY(.72); opacity: .48; }
  50% { transform: rotateZ(var(--a)) rotateX(-28deg) translateZ(17px) scaleY(1); opacity: 1; }
}`
  },
  {
    id: 'sphere-bands-3d',
    name: '3D Sphere Bands',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Five elliptical bands rotate across independent axes to suggest a breathing wireframe sphere.',
    markup: `<div class="vl-sphere-bands-3d" aria-hidden="true">
  <div><span style="--rx:0deg;--ry:0deg;--rz:0deg"></span><span style="--rx:62deg;--ry:0deg;--rz:0deg"></span><span style="--rx:-62deg;--ry:0deg;--rz:0deg"></span><span style="--rx:0deg;--ry:62deg;--rz:18deg"></span><span style="--rx:0deg;--ry:-62deg;--rz:-18deg"></span><i></i></div>
</div>`,
    css: `.vl-sphere-bands-3d {
  width: 82px;
  height: 82px;
  display: grid;
  place-items: center;
  perspective: 640px;
}
.vl-sphere-bands-3d > div {
  position: relative;
  width: 66px;
  height: 66px;
  transform-style: preserve-3d;
  animation: vl-sphere-bands-turn calc(var(--loader-speed) * 2.7) linear infinite;
}
.vl-sphere-bands-3d span {
  position: absolute;
  inset: 7px;
  border: 3px solid var(--loader-accent);
  border-left-color: color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-right-color: color-mix(in srgb, var(--loader-accent) 42%, transparent);
  border-radius: 50%;
  transform: rotateX(var(--rx)) rotateY(var(--ry)) rotateZ(var(--rz));
  animation: vl-sphere-band-breathe calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
.vl-sphere-bands-3d i {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: translate(-50%, -50%) translateZ(16px);
  box-shadow: 0 0 18px var(--loader-accent);
}
@keyframes vl-sphere-bands-turn {
  from { transform: rotateX(-16deg) rotateY(0deg) rotateZ(0deg); }
  to { transform: rotateX(344deg) rotateY(360deg) rotateZ(180deg); }
}
@keyframes vl-sphere-band-breathe {
  0%, 100% { transform: rotateX(var(--rx)) rotateY(var(--ry)) rotateZ(var(--rz)) scale(.84); opacity: .4; }
  50% { transform: rotateX(var(--rx)) rotateY(var(--ry)) rotateZ(var(--rz)) scale(1); opacity: 1; }
}`
  },
  {
    id: 'reactor-panels-3d',
    name: '3D Reactor Panels',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Six translucent panels pulse around a glowing core while the reactor assembly slowly rotates.',
    markup: `<div class="vl-reactor-panels-3d" aria-hidden="true">
  <div><span style="--a:0deg;--i:0"></span><span style="--a:60deg;--i:1"></span><span style="--a:120deg;--i:2"></span><span style="--a:180deg;--i:3"></span><span style="--a:240deg;--i:4"></span><span style="--a:300deg;--i:5"></span><i></i></div>
</div>`,
    css: `.vl-reactor-panels-3d {
  width: 90px;
  height: 82px;
  display: grid;
  place-items: center;
  perspective: 680px;
}
.vl-reactor-panels-3d > div {
  position: relative;
  width: 20px;
  height: 34px;
  transform-style: preserve-3d;
  animation: vl-reactor-panel-scene calc(var(--loader-speed) * 2.4) linear infinite;
}
.vl-reactor-panels-3d span {
  position: absolute;
  inset: 0;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 70%, white);
  border-radius: 4px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 62%, white), color-mix(in srgb, var(--loader-accent) 42%, transparent));
  backface-visibility: hidden;
  animation: vl-reactor-panel-pulse calc(var(--loader-speed) * 1.3) ease-in-out infinite;
  animation-delay: calc(var(--i) * -.12s);
}
.vl-reactor-panels-3d i {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: translate(-50%, -50%);
  box-shadow: 0 0 22px var(--loader-accent);
}
@keyframes vl-reactor-panel-scene {
  from { transform: rotateX(-12deg) rotateY(0deg); }
  to { transform: rotateX(-12deg) rotateY(360deg); }
}
@keyframes vl-reactor-panel-pulse {
  0%, 100% { transform: rotateY(var(--a)) translateZ(28px) rotateX(16deg) scaleY(.62); opacity: .45; }
  50% { transform: rotateY(var(--a)) translateZ(42px) rotateX(-10deg) scaleY(1); opacity: 1; }
}`
  },
  {
    id: 'escalator-tiles-3d',
    name: '3D Escalator Tiles',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Six platform tiles climb a tilted perspective path with staggered height and depth.',
    markup: `<div class="vl-escalator-tiles-3d" aria-hidden="true">
  <div><span style="--x:0px;--y:30px;--z:0px;--i:0"></span><span style="--x:13px;--y:24px;--z:3px;--i:1"></span><span style="--x:26px;--y:18px;--z:6px;--i:2"></span><span style="--x:39px;--y:12px;--z:9px;--i:3"></span><span style="--x:52px;--y:6px;--z:12px;--i:4"></span><span style="--x:65px;--y:0px;--z:15px;--i:5"></span></div>
</div>`,
    css: `.vl-escalator-tiles-3d {
  width: 94px;
  height: 74px;
  display: grid;
  place-items: center;
  perspective: 640px;
}
.vl-escalator-tiles-3d > div {
  position: relative;
  width: 82px;
  height: 42px;
  transform-style: preserve-3d;
  transform: rotateX(58deg) rotateZ(-16deg);
}
.vl-escalator-tiles-3d span {
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 64%, white);
  border-radius: 4px;
  background: linear-gradient(145deg, color-mix(in srgb, var(--loader-accent) 72%, white), var(--loader-accent));
  box-shadow: 5px 5px 0 color-mix(in srgb, var(--loader-accent) 48%, black);
  animation: vl-escalator-tile-climb calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--i) * -.12s);
}
@keyframes vl-escalator-tile-climb {
  0%, 100% { transform: translate3d(var(--x), var(--y), var(--z)); opacity: .45; }
  50% { transform: translate3d(var(--x), calc(var(--y) - 14px), calc(var(--z) + 18px)); opacity: 1; }
}`
  },
  {
    id: 'torque-bars-3d',
    name: '3D Torque Bars',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Six narrow bars twist around a shared axis with offset torque and a rotating scene.',
    markup: `<div class="vl-torque-bars-3d" aria-hidden="true">
  <div><span style="--a:0deg;--i:0"></span><span style="--a:30deg;--i:1"></span><span style="--a:60deg;--i:2"></span><span style="--a:90deg;--i:3"></span><span style="--a:120deg;--i:4"></span><span style="--a:150deg;--i:5"></span></div>
</div>`,
    css: `.vl-torque-bars-3d {
  width: 86px;
  height: 82px;
  display: grid;
  place-items: center;
  perspective: 620px;
}
.vl-torque-bars-3d > div {
  position: relative;
  width: 78px;
  height: 78px;
  transform-style: preserve-3d;
  animation: vl-torque-bars-scene calc(var(--loader-speed) * 2.45) linear infinite;
}
.vl-torque-bars-3d span {
  position: absolute;
  left: 35px;
  top: 17px;
  width: 8px;
  height: 44px;
  border-radius: 999px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 68%, white), var(--loader-accent));
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 28%, transparent);
  animation: vl-torque-bar-twist calc(var(--loader-speed) * 1.4) ease-in-out infinite;
  animation-delay: calc(var(--i) * -.1s);
}
@keyframes vl-torque-bars-scene {
  from { transform: rotateX(54deg) rotateZ(0deg); }
  to { transform: rotateX(54deg) rotateZ(360deg); }
}
@keyframes vl-torque-bar-twist {
  0%, 100% { transform: rotateZ(var(--a)) rotateY(62deg) translateZ(14px) scaleY(.7); opacity: .4; }
  50% { transform: rotateZ(var(--a)) rotateY(242deg) translateZ(26px) scaleY(1); opacity: 1; }
}`
  }
];
