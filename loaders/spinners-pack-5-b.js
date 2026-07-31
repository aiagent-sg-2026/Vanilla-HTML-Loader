export const spinnersPack5LoadersB = [
  {
    id: 'spinner-strobe-segments',
    name: 'Strobe Segments Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Eight radial segments strobe in sequence for precise queued and transactional loading states.',
    markup: `<div class="vl-spinner-strobe-segments" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-spinner-strobe-segments {
  position: relative;
  width: 68px;
  height: 68px;
  animation: vl-spinner-strobe-segments-spin calc(var(--loader-speed) * 1.9) linear infinite;
}
.vl-spinner-strobe-segments span {
  position: absolute;
  left: 29px;
  top: 4px;
  width: 10px;
  height: 18px;
  border-radius: 6px;
  transform-origin: 5px 30px;
  background: var(--loader-accent);
  animation: vl-spinner-strobe-segments-flash var(--loader-speed) ease-in-out infinite;
}
.vl-spinner-strobe-segments span:nth-child(2) { transform: rotate(45deg); animation-delay: .1s; }
.vl-spinner-strobe-segments span:nth-child(3) { transform: rotate(90deg); animation-delay: .2s; }
.vl-spinner-strobe-segments span:nth-child(4) { transform: rotate(135deg); animation-delay: .3s; }
.vl-spinner-strobe-segments span:nth-child(5) { transform: rotate(180deg); animation-delay: .4s; }
.vl-spinner-strobe-segments span:nth-child(6) { transform: rotate(225deg); animation-delay: .5s; }
.vl-spinner-strobe-segments span:nth-child(7) { transform: rotate(270deg); animation-delay: .6s; }
.vl-spinner-strobe-segments span:nth-child(8) { transform: rotate(315deg); animation-delay: .7s; }
@keyframes vl-spinner-strobe-segments-spin { to { rotate: 360deg; } }
@keyframes vl-spinner-strobe-segments-flash {
  0%, 100% { opacity: .18; background: color-mix(in srgb, var(--loader-accent) 38%, transparent); }
  45% { opacity: 1; background: var(--loader-accent); }
}`
  },
  {
    id: 'spinner-twin-comets',
    name: 'Twin Comets Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Two glowing comet heads chase each other around a shared orbit for fast transfer and sync feedback.',
    markup: `<div class="vl-spinner-twin-comets" aria-hidden="true"><i></i><span></span><span></span></div>`,
    css: `.vl-spinner-twin-comets {
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 16%, transparent);
}
.vl-spinner-twin-comets i {
  position: absolute;
  inset: 17px;
  border-radius: 50%;
  border: 2px dashed color-mix(in srgb, var(--loader-accent) 28%, transparent);
  animation: vl-spinner-twin-comets-dash calc(var(--loader-speed) * 2) linear infinite reverse;
}
.vl-spinner-twin-comets span {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: -8px 0 8px color-mix(in srgb, var(--loader-accent) 48%, transparent), -15px 0 10px color-mix(in srgb, var(--loader-accent) 20%, transparent);
  animation: vl-spinner-twin-comets-orbit var(--loader-speed) linear infinite;
}
.vl-spinner-twin-comets span:last-child {
  animation-direction: reverse;
  animation-duration: calc(var(--loader-speed) * .82);
  opacity: .68;
}
@keyframes vl-spinner-twin-comets-orbit {
  to { transform: rotate(360deg) translateX(27px) rotate(-360deg); }
}
@keyframes vl-spinner-twin-comets-dash { to { transform: rotate(360deg); } }`
  },
  {
    id: 'spinner-cyclone-blades',
    name: 'Cyclone Blades Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Six curved blades rotate around a compact hub to create a mechanical cyclone loading signal.',
    markup: `<div class="vl-spinner-cyclone-blades" aria-hidden="true"><i></i><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-spinner-cyclone-blades {
  position: relative;
  width: 70px;
  height: 70px;
  animation: vl-spinner-cyclone-blades-spin calc(var(--loader-speed) * 1.15) cubic-bezier(.45,.05,.55,.95) infinite;
}
.vl-spinner-cyclone-blades i {
  position: absolute;
  left: 27px;
  top: 27px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--loader-accent);
}
.vl-spinner-cyclone-blades span {
  position: absolute;
  left: 30px;
  top: 7px;
  width: 10px;
  height: 24px;
  border-radius: 9px 3px 9px 3px;
  transform-origin: 5px 28px;
  background: color-mix(in srgb, var(--loader-accent) 76%, white);
}
.vl-spinner-cyclone-blades span:nth-of-type(2) { transform: rotate(60deg); opacity: .86; }
.vl-spinner-cyclone-blades span:nth-of-type(3) { transform: rotate(120deg); opacity: .72; }
.vl-spinner-cyclone-blades span:nth-of-type(4) { transform: rotate(180deg); opacity: .58; }
.vl-spinner-cyclone-blades span:nth-of-type(5) { transform: rotate(240deg); opacity: .44; }
.vl-spinner-cyclone-blades span:nth-of-type(6) { transform: rotate(300deg); opacity: .3; }
@keyframes vl-spinner-cyclone-blades-spin { to { transform: rotate(360deg); } }`
  },
  {
    id: 'spinner-orbital-prism',
    name: 'Orbital Prism Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Three prism tiles orbit on staggered tracks for rendering, composition, and asset-processing states.',
    markup: `<div class="vl-spinner-orbital-prism" aria-hidden="true"><i></i><span></span><span></span><span></span></div>`,
    css: `.vl-spinner-orbital-prism {
  position: relative;
  width: 72px;
  height: 72px;
}
.vl-spinner-orbital-prism i {
  position: absolute;
  inset: 20px;
  border-radius: 8px;
  transform: rotate(45deg);
  background: color-mix(in srgb, var(--loader-accent) 16%, transparent);
  box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--loader-accent) 46%, transparent);
}
.vl-spinner-orbital-prism span {
  position: absolute;
  left: 30px;
  top: 4px;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  transform: rotate(45deg);
  background: var(--loader-accent);
}
.vl-spinner-orbital-prism span:nth-of-type(1) {
  transform-origin: 6px 32px;
  animation: vl-spinner-orbital-prism-outer calc(var(--loader-speed) * 1.25) linear infinite;
}
.vl-spinner-orbital-prism span:nth-of-type(2) {
  left: 31px;
  top: 13px;
  width: 10px;
  height: 10px;
  opacity: .7;
  transform-origin: 5px 23px;
  animation: vl-spinner-orbital-prism-mid var(--loader-speed) linear infinite reverse;
}
.vl-spinner-orbital-prism span:nth-of-type(3) {
  left: 32px;
  top: 22px;
  width: 8px;
  height: 8px;
  opacity: .46;
  transform-origin: 4px 14px;
  animation: vl-spinner-orbital-prism-inner calc(var(--loader-speed) * .68) linear infinite;
}
@keyframes vl-spinner-orbital-prism-outer { to { transform: rotate(405deg); } }
@keyframes vl-spinner-orbital-prism-mid { to { transform: rotate(405deg); } }
@keyframes vl-spinner-orbital-prism-inner { to { transform: rotate(405deg); } }`
  },
  {
    id: 'spinner-nova-core',
    name: 'Nova Core Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A radiant segmented shell spins around an expanding core for startup, generation, and compute states.',
    markup: `<div class="vl-spinner-nova-core" aria-hidden="true"><span></span><i></i></div>`,
    css: `.vl-spinner-nova-core {
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: repeating-conic-gradient(from 0deg, var(--loader-accent) 0 9deg, transparent 9deg 24deg);
  animation: vl-spinner-nova-core-spin calc(var(--loader-speed) * 1.3) linear infinite;
}
.vl-spinner-nova-core::before {
  content: '';
  position: absolute;
  inset: 8px;
  border-radius: 50%;
  background: var(--surface, #fff);
  box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--loader-accent) 22%, transparent);
}
.vl-spinner-nova-core span {
  position: absolute;
  inset: 17px;
  z-index: 1;
  border-radius: 50%;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 42%, transparent);
  border-top-color: var(--loader-accent);
  animation: vl-spinner-nova-core-spin calc(var(--loader-speed) * .72) linear infinite reverse;
}
.vl-spinner-nova-core i {
  position: absolute;
  left: 27px;
  top: 27px;
  z-index: 2;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 7px color-mix(in srgb, var(--loader-accent) 14%, transparent), 0 0 18px color-mix(in srgb, var(--loader-accent) 55%, transparent);
  animation: vl-spinner-nova-core-pulse calc(var(--loader-speed) * .9) ease-in-out infinite;
}
@keyframes vl-spinner-nova-core-spin { to { transform: rotate(360deg); } }
@keyframes vl-spinner-nova-core-pulse {
  0%, 100% { transform: scale(.72); opacity: .58; }
  50% { transform: scale(1.12); opacity: 1; }
}`
  }
];
