export const css3dPack4LoadersA = [
  {
    id: 'shutter-panels-3d',
    name: '3D Shutter Panels',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Six translucent panels rotate through staggered depth like a mechanical camera shutter.',
    markup: `<div class="vl-shutter-panels-3d" aria-hidden="true">
  <div>
    <span style="--x:-25px;--z:-15px;--d:-.50s"></span>
    <span style="--x:-15px;--z:-9px;--d:-.40s"></span>
    <span style="--x:-5px;--z:-3px;--d:-.30s"></span>
    <span style="--x:5px;--z:3px;--d:-.20s"></span>
    <span style="--x:15px;--z:9px;--d:-.10s"></span>
    <span style="--x:25px;--z:15px;--d:0s"></span>
  </div>
</div>`,
    css: `.vl-shutter-panels-3d {
  width: 86px;
  height: 72px;
  display: grid;
  place-items: center;
  perspective: 620px;
}
.vl-shutter-panels-3d > div {
  position: relative;
  width: 58px;
  height: 54px;
  transform-style: preserve-3d;
  animation: vl-shutter-panels-scene calc(var(--loader-speed) * 2.5) ease-in-out infinite;
}
.vl-shutter-panels-3d span {
  position: absolute;
  left: 50%;
  top: 5px;
  width: 12px;
  height: 44px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 68%, white);
  border-radius: 4px;
  background: color-mix(in srgb, var(--loader-accent) 62%, transparent);
  box-shadow: 0 0 12px color-mix(in srgb, var(--loader-accent) 22%, transparent);
  transform-origin: center;
  animation: vl-shutter-panel-turn calc(var(--loader-speed) * 1.35) ease-in-out infinite;
  animation-delay: var(--d);
}
@keyframes vl-shutter-panel-turn {
  0%, 100% { transform: translateX(var(--x)) translateZ(var(--z)) rotateY(-58deg) scaleY(.72); opacity: .42; }
  50% { transform: translateX(var(--x)) translateZ(calc(var(--z) + 18px)) rotateY(58deg) scaleY(1); opacity: 1; }
}
@keyframes vl-shutter-panels-scene {
  0%, 100% { transform: rotateX(-10deg) rotateY(-18deg); }
  50% { transform: rotateX(12deg) rotateY(18deg); }
}`
  },
  {
    id: 'orbit-columns-3d',
    name: '3D Orbit Columns',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Six vertical columns orbit a central axis while their inner bars pulse in sequence.',
    markup: `<div class="vl-orbit-columns-3d" aria-hidden="true">
  <div>
    <span style="--r:0deg;--d:-.0s"><i></i></span>
    <span style="--r:60deg;--d:-.12s"><i></i></span>
    <span style="--r:120deg;--d:-.24s"><i></i></span>
    <span style="--r:180deg;--d:-.36s"><i></i></span>
    <span style="--r:240deg;--d:-.48s"><i></i></span>
    <span style="--r:300deg;--d:-.60s"><i></i></span>
  </div>
</div>`,
    css: `.vl-orbit-columns-3d {
  width: 84px;
  height: 74px;
  display: grid;
  place-items: center;
  perspective: 640px;
}
.vl-orbit-columns-3d > div {
  position: relative;
  width: 12px;
  height: 46px;
  transform-style: preserve-3d;
  animation: vl-orbit-columns-turn calc(var(--loader-speed) * 2.4) linear infinite;
}
.vl-orbit-columns-3d span {
  position: absolute;
  inset: 0;
  transform: rotateY(var(--r)) translateZ(30px);
  transform-style: preserve-3d;
}
.vl-orbit-columns-3d i {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: linear-gradient(to top, color-mix(in srgb, var(--loader-accent) 48%, transparent), var(--loader-accent));
  border: 1px solid color-mix(in srgb, var(--loader-accent) 66%, white);
  box-shadow: 0 0 11px color-mix(in srgb, var(--loader-accent) 22%, transparent);
  animation: vl-orbit-column-pulse calc(var(--loader-speed) * 1.15) ease-in-out infinite;
  animation-delay: var(--d);
}
@keyframes vl-orbit-columns-turn {
  from { transform: rotateX(-12deg) rotateY(0deg); }
  to { transform: rotateX(-12deg) rotateY(360deg); }
}
@keyframes vl-orbit-column-pulse {
  0%, 100% { transform: scaleY(.55); opacity: .42; }
  50% { transform: scaleY(1); opacity: 1; }
}`
  },
  {
    id: 'layer-fan-3d',
    name: '3D Layer Fan',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'A stack of slim cards fans open across the Y-axis and closes with layered depth.',
    markup: `<div class="vl-layer-fan-3d" aria-hidden="true">
  <span style="--r:-48deg;--c:-12deg;--z:-15px;--d:-.30s"></span>
  <span style="--r:-30deg;--c:-7deg;--z:-9px;--d:-.24s"></span>
  <span style="--r:-12deg;--c:-3deg;--z:-3px;--d:-.18s"></span>
  <span style="--r:12deg;--c:3deg;--z:3px;--d:-.12s"></span>
  <span style="--r:30deg;--c:7deg;--z:9px;--d:-.06s"></span>
  <span style="--r:48deg;--c:12deg;--z:15px;--d:0s"></span>
</div>`,
    css: `.vl-layer-fan-3d {
  position: relative;
  width: 86px;
  height: 70px;
  perspective: 620px;
  transform-style: preserve-3d;
  transform: rotateX(-10deg);
}
.vl-layer-fan-3d span {
  position: absolute;
  left: 29px;
  top: 10px;
  width: 30px;
  height: 48px;
  border-radius: 5px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 68%, white);
  background: linear-gradient(145deg, color-mix(in srgb, var(--loader-accent) 78%, white), color-mix(in srgb, var(--loader-accent) 42%, transparent));
  transform-origin: left center;
  animation: vl-layer-fan-open calc(var(--loader-speed) * 1.75) ease-in-out infinite;
  animation-delay: var(--d);
}
@keyframes vl-layer-fan-open {
  0%, 100% { transform: rotateY(var(--c)) translateZ(var(--z)); opacity: .38; }
  50% { transform: rotateY(var(--r)) translateZ(calc(var(--z) + 13px)); opacity: 1; }
}`
  },
  {
    id: 'hexa-rotor-3d',
    name: '3D Hexa Rotor',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Six beveled blades form a rotating three-dimensional hexagonal rotor.',
    markup: `<div class="vl-hexa-rotor-3d" aria-hidden="true">
  <div>
    <span style="--r:0deg"></span><span style="--r:60deg"></span><span style="--r:120deg"></span>
    <span style="--r:180deg"></span><span style="--r:240deg"></span><span style="--r:300deg"></span>
  </div>
</div>`,
    css: `.vl-hexa-rotor-3d {
  position: relative;
  width: 78px;
  height: 78px;
  display: grid;
  place-items: center;
  perspective: 620px;
}
.vl-hexa-rotor-3d > div {
  position: relative;
  width: 62px;
  height: 62px;
  transform-style: preserve-3d;
  animation: vl-hexa-rotor-turn calc(var(--loader-speed) * 2.1) linear infinite;
}
.vl-hexa-rotor-3d span {
  position: absolute;
  left: 25px;
  top: 3px;
  width: 12px;
  height: 29px;
  border-radius: 8px 8px 3px 3px;
  transform-origin: 6px 28px;
  transform: rotateZ(var(--r)) rotateX(62deg) translateZ(7px);
  background: linear-gradient(to bottom, color-mix(in srgb, var(--loader-accent) 86%, white), var(--loader-accent));
  border: 1px solid color-mix(in srgb, var(--loader-accent) 64%, white);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 22%, transparent);
}
.vl-hexa-rotor-3d::after {
  content: '';
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 15px var(--loader-accent);
  position: absolute;
}
@keyframes vl-hexa-rotor-turn {
  from { transform: rotateX(56deg) rotateZ(0deg); }
  to { transform: rotateX(56deg) rotateZ(360deg); }
}`
  },
  {
    id: 'pendulum-cards-3d',
    name: '3D Pendulum Cards',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Five hanging cards swing independently through perspective like synchronized pendulums.',
    markup: `<div class="vl-pendulum-cards-3d" aria-hidden="true">
  <span style="--x:-34px;--d:-.32s"></span><span style="--x:-17px;--d:-.24s"></span>
  <span style="--x:0px;--d:-.16s"></span><span style="--x:17px;--d:-.08s"></span><span style="--x:34px;--d:0s"></span>
</div>`,
    css: `.vl-pendulum-cards-3d {
  position: relative;
  width: 92px;
  height: 72px;
  perspective: 620px;
  transform-style: preserve-3d;
}
.vl-pendulum-cards-3d::before {
  content: '';
  position: absolute;
  left: 5px;
  right: 5px;
  top: 8px;
  height: 3px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 36%, #dce3ec);
}
.vl-pendulum-cards-3d span {
  position: absolute;
  left: calc(50% - 6px);
  top: 10px;
  width: 12px;
  height: 45px;
  border-radius: 3px 3px 7px 7px;
  transform-origin: 50% 0;
  background: linear-gradient(to bottom, color-mix(in srgb, var(--loader-accent) 55%, transparent), var(--loader-accent));
  border: 1px solid color-mix(in srgb, var(--loader-accent) 64%, white);
  animation: vl-pendulum-card-swing calc(var(--loader-speed) * 1.45) ease-in-out infinite;
  animation-delay: var(--d);
}
@keyframes vl-pendulum-card-swing {
  0%, 100% { transform: translateX(var(--x)) rotateZ(-22deg) rotateX(28deg); opacity: .52; }
  50% { transform: translateX(var(--x)) rotateZ(22deg) rotateX(-28deg) translateZ(13px); opacity: 1; }
}`
  }
];
