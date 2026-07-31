export const shapesPack4LoadersA = [
  {
    id: 'shape-dodecagon-ripple',
    name: 'Dodecagon Ripple',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Three twelve-sided layers expand in sequence while rotating through a compact geometric ripple.',
    markup: `<div class="vl-shape-dodecagon-ripple" aria-hidden="true"><span></span><span></span><span></span></div>`,
    css: `.vl-shape-dodecagon-ripple {
  position: relative;
  width: 76px;
  height: 76px;
}
.vl-shape-dodecagon-ripple span {
  position: absolute;
  inset: 10px;
  background: color-mix(in srgb, var(--loader-accent) 70%, transparent);
  clip-path: polygon(50% 0, 75% 6.7%, 93.3% 25%, 100% 50%, 93.3% 75%, 75% 93.3%, 50% 100%, 25% 93.3%, 6.7% 75%, 0 50%, 6.7% 25%, 25% 6.7%);
  animation: vl-shape-dodecagon-ripple-wave calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
.vl-shape-dodecagon-ripple span:nth-child(2) {
  animation-delay: .18s;
  background: color-mix(in srgb, var(--loader-accent) 50%, white);
}
.vl-shape-dodecagon-ripple span:nth-child(3) {
  animation-delay: .36s;
  background: var(--loader-accent);
}
@keyframes vl-shape-dodecagon-ripple-wave {
  0%, 100% { transform: rotate(0deg) scale(.28); opacity: 0; }
  40% { opacity: .9; }
  75% { transform: rotate(30deg) scale(1); opacity: .35; }
}`
  },
  {
    id: 'shape-arrowhead-exchange',
    name: 'Arrowhead Exchange',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Opposing arrowheads trade positions across a central lane for transfer and synchronization states.',
    markup: `<div class="vl-shape-arrowhead-exchange" aria-hidden="true"><span></span><span></span><i></i><i></i></div>`,
    css: `.vl-shape-arrowhead-exchange {
  position: relative;
  width: 94px;
  height: 46px;
}
.vl-shape-arrowhead-exchange span,
.vl-shape-arrowhead-exchange i {
  position: absolute;
  top: 12px;
  width: 22px;
  height: 22px;
  background: var(--loader-accent);
  clip-path: polygon(0 0, 100% 50%, 0 100%, 30% 50%);
}
.vl-shape-arrowhead-exchange span:first-child {
  left: 3px;
  animation: vl-shape-arrowhead-exchange-right calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-shape-arrowhead-exchange span:nth-child(2) {
  right: 3px;
  transform: rotate(180deg);
  animation: vl-shape-arrowhead-exchange-left calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-shape-arrowhead-exchange i:nth-of-type(1) {
  left: 25px;
  opacity: .25;
  transform: scale(.7);
}
.vl-shape-arrowhead-exchange i:nth-of-type(2) {
  right: 25px;
  opacity: .25;
  transform: rotate(180deg) scale(.7);
}
@keyframes vl-shape-arrowhead-exchange-right {
  0%, 100% { transform: translateX(0) scale(.72); opacity: .35; }
  50% { transform: translateX(43px) scale(1.06); opacity: 1; }
}
@keyframes vl-shape-arrowhead-exchange-left {
  0%, 100% { transform: translateX(0) rotate(180deg) scale(.72); opacity: .35; }
  50% { transform: translateX(-43px) rotate(180deg) scale(1.06); opacity: 1; }
}`
  },
  {
    id: 'shape-clover-orbit',
    name: 'Clover Orbit',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Four rounded lobes breathe around a rotating satellite for a soft organic geometric loader.',
    markup: `<div class="vl-shape-clover-orbit" aria-hidden="true"><span></span><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-shape-clover-orbit {
  position: relative;
  width: 74px;
  height: 74px;
  animation: vl-shape-clover-orbit-turn calc(var(--loader-speed) * 2.4) linear infinite;
}
.vl-shape-clover-orbit span {
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 65% 35% 65% 35%;
  background: color-mix(in srgb, var(--loader-accent) 72%, transparent);
  animation: vl-shape-clover-orbit-bloom calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-shape-clover-orbit span:nth-child(1) { left: 23px; top: 4px; }
.vl-shape-clover-orbit span:nth-child(2) { right: 4px; top: 23px; transform: rotate(90deg); animation-delay: .12s; }
.vl-shape-clover-orbit span:nth-child(3) { left: 23px; bottom: 4px; transform: rotate(180deg); animation-delay: .24s; }
.vl-shape-clover-orbit span:nth-child(4) { left: 4px; top: 23px; transform: rotate(270deg); animation-delay: .36s; }
.vl-shape-clover-orbit i {
  position: absolute;
  left: 32px;
  top: 2px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--loader-accent) 16%, transparent);
  transform-origin: 5px 35px;
  animation: vl-shape-clover-orbit-satellite calc(var(--loader-speed) * 1.1) linear infinite reverse;
}
@keyframes vl-shape-clover-orbit-turn { to { transform: rotate(360deg); } }
@keyframes vl-shape-clover-orbit-bloom {
  0%, 100% { opacity: .28; filter: saturate(.7); }
  50% { opacity: 1; filter: saturate(1.25); }
}
@keyframes vl-shape-clover-orbit-satellite { to { transform: rotate(360deg); } }`
  },
  {
    id: 'shape-sector-fan',
    name: 'Sector Fan',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Six circular sectors open and close in sequence like a technical cooling fan or aperture.',
    markup: `<div class="vl-shape-sector-fan" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-shape-sector-fan {
  position: relative;
  width: 72px;
  height: 72px;
  animation: vl-shape-sector-fan-spin calc(var(--loader-speed) * 2.2) linear infinite;
}
.vl-shape-sector-fan span {
  position: absolute;
  left: 31px;
  top: 5px;
  width: 10px;
  height: 31px;
  border-radius: 10px 10px 2px 2px;
  background: linear-gradient(to bottom, var(--loader-accent), color-mix(in srgb, var(--loader-accent) 22%, transparent));
  transform-origin: 5px 31px;
  animation: vl-shape-sector-fan-open calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
.vl-shape-sector-fan span:nth-child(1) { --angle: 0deg; }
.vl-shape-sector-fan span:nth-child(2) { --angle: 60deg; animation-delay: .08s; }
.vl-shape-sector-fan span:nth-child(3) { --angle: 120deg; animation-delay: .16s; }
.vl-shape-sector-fan span:nth-child(4) { --angle: 180deg; animation-delay: .24s; }
.vl-shape-sector-fan span:nth-child(5) { --angle: 240deg; animation-delay: .32s; }
.vl-shape-sector-fan span:nth-child(6) { --angle: 300deg; animation-delay: .4s; }
.vl-shape-sector-fan i {
  position: absolute;
  inset: 27px;
  border-radius: 50%;
  background: var(--surface, #fff);
  box-shadow: inset 0 0 0 3px var(--loader-accent);
}
@keyframes vl-shape-sector-fan-spin { to { transform: rotate(360deg); } }
@keyframes vl-shape-sector-fan-open {
  0%, 100% { transform: rotate(var(--angle)) scaleY(.35); opacity: .25; }
  50% { transform: rotate(var(--angle)) scaleY(1); opacity: 1; }
}`
  },
  {
    id: 'shape-frame-collapse',
    name: 'Frame Collapse',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Nested square frames collapse toward the center and rebuild with alternating rotation.',
    markup: `<div class="vl-shape-frame-collapse" aria-hidden="true"><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-shape-frame-collapse {
  position: relative;
  width: 76px;
  height: 76px;
}
.vl-shape-frame-collapse span {
  position: absolute;
  border: 4px solid var(--loader-accent);
  border-radius: 5px;
  animation: vl-shape-frame-collapse-fold calc(var(--loader-speed) * 1.4) ease-in-out infinite;
}
.vl-shape-frame-collapse span:nth-child(1) { inset: 6px; }
.vl-shape-frame-collapse span:nth-child(2) { inset: 17px; animation-delay: .14s; }
.vl-shape-frame-collapse span:nth-child(3) { inset: 28px; animation-delay: .28s; }
.vl-shape-frame-collapse i {
  position: absolute;
  left: 34px;
  top: 34px;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: var(--loader-accent);
  transform: rotate(45deg);
}
@keyframes vl-shape-frame-collapse-fold {
  0%, 100% { transform: rotate(0deg) scale(1); opacity: .22; }
  45% { transform: rotate(45deg) scale(.42); opacity: 1; }
  70% { transform: rotate(90deg) scale(.72); opacity: .65; }
}`
  }
];
