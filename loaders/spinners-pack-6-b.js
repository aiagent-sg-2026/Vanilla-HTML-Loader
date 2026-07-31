export const spinnersPack6LoadersB = [
  {
    id: 'spinner-halo-dash',
    name: 'Halo Dash Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A dashed outer halo and offset inner arc rotate in opposite directions for compact loading feedback.',
    markup: `<div class="vl-spinner-halo-dash" aria-hidden="true"></div>`,
    css: `.vl-spinner-halo-dash {
  position: relative;
  width: 66px;
  height: 66px;
  border: 4px dashed color-mix(in srgb, var(--loader-accent) 72%, transparent);
  border-radius: 50%;
  animation: vl-spinner-halo-dash-spin calc(var(--loader-speed) * 1.35) linear infinite;
}
.vl-spinner-halo-dash::before {
  content: '';
  position: absolute;
  inset: 9px;
  border: 4px solid transparent;
  border-top-color: var(--loader-accent);
  border-right-color: color-mix(in srgb, var(--loader-accent) 35%, transparent);
  border-radius: 50%;
  animation: vl-spinner-halo-dash-spin calc(var(--loader-speed) * .78) linear infinite reverse;
}
.vl-spinner-halo-dash::after {
  content: '';
  position: absolute;
  left: 25px;
  top: 25px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 6px color-mix(in srgb, var(--loader-accent) 14%, transparent);
}
@keyframes vl-spinner-halo-dash-spin { to { transform: rotate(360deg); } }`
  },
  {
    id: 'spinner-kinetic-diamond',
    name: 'Kinetic Diamond Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Three nested diamonds counter-rotate and pulse for transformation and calculation states.',
    markup: `<div class="vl-spinner-kinetic-diamond" aria-hidden="true"><span></span><span></span><span></span></div>`,
    css: `.vl-spinner-kinetic-diamond {
  position: relative;
  width: 66px;
  height: 66px;
}
.vl-spinner-kinetic-diamond span {
  position: absolute;
  left: 50%;
  top: 50%;
  border: 3px solid var(--loader-accent);
  border-radius: 4px;
}
.vl-spinner-kinetic-diamond span:nth-child(1) {
  width: 46px;
  height: 46px;
  margin: -23px 0 0 -23px;
  animation: vl-spinner-kinetic-diamond-outer calc(var(--loader-speed) * 1.6) ease-in-out infinite;
}
.vl-spinner-kinetic-diamond span:nth-child(2) {
  width: 30px;
  height: 30px;
  margin: -15px 0 0 -15px;
  border-color: color-mix(in srgb, var(--loader-accent) 68%, white);
  animation: vl-spinner-kinetic-diamond-inner calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-spinner-kinetic-diamond span:nth-child(3) {
  width: 12px;
  height: 12px;
  margin: -6px 0 0 -6px;
  border: 0;
  background: var(--loader-accent);
  animation: vl-spinner-kinetic-diamond-core calc(var(--loader-speed) * .82) ease-in-out infinite;
}
@keyframes vl-spinner-kinetic-diamond-outer {
  0%, 100% { transform: rotate(45deg) scale(.82); opacity: .45; }
  50% { transform: rotate(225deg) scale(1); opacity: 1; }
}
@keyframes vl-spinner-kinetic-diamond-inner {
  0%, 100% { transform: rotate(-45deg) scale(1); }
  50% { transform: rotate(-225deg) scale(.72); }
}
@keyframes vl-spinner-kinetic-diamond-core {
  0%, 100% { transform: rotate(45deg) scale(.62); opacity: .5; }
  50% { transform: rotate(225deg) scale(1.15); opacity: 1; }
}`
  },
  {
    id: 'spinner-wave-rotor',
    name: 'Wave Rotor Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Eight radial bars create a traveling wave while the rotor slowly turns.',
    markup: `<div class="vl-spinner-wave-rotor" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-spinner-wave-rotor {
  position: relative;
  width: 68px;
  height: 68px;
  animation: vl-spinner-wave-rotor-spin calc(var(--loader-speed) * 2.4) linear infinite;
}
.vl-spinner-wave-rotor span {
  position: absolute;
  left: 30px;
  top: 3px;
  width: 8px;
  height: 22px;
  border-radius: 8px;
  background: var(--loader-accent);
  transform-origin: 4px 31px;
  animation: vl-spinner-wave-rotor-pulse calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-spinner-wave-rotor span:nth-child(1) { transform: rotate(0deg); }
.vl-spinner-wave-rotor span:nth-child(2) { transform: rotate(45deg); animation-delay: .08s; }
.vl-spinner-wave-rotor span:nth-child(3) { transform: rotate(90deg); animation-delay: .16s; }
.vl-spinner-wave-rotor span:nth-child(4) { transform: rotate(135deg); animation-delay: .24s; }
.vl-spinner-wave-rotor span:nth-child(5) { transform: rotate(180deg); animation-delay: .32s; }
.vl-spinner-wave-rotor span:nth-child(6) { transform: rotate(225deg); animation-delay: .4s; }
.vl-spinner-wave-rotor span:nth-child(7) { transform: rotate(270deg); animation-delay: .48s; }
.vl-spinner-wave-rotor span:nth-child(8) { transform: rotate(315deg); animation-delay: .56s; }
@keyframes vl-spinner-wave-rotor-spin { to { transform: rotate(360deg); } }
@keyframes vl-spinner-wave-rotor-pulse {
  0%, 100% { opacity: .24; filter: brightness(.8); }
  50% { opacity: 1; filter: brightness(1.25); }
}`
  },
  {
    id: 'spinner-photon-chase',
    name: 'Photon Chase Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Eight luminous photons chase one another around a circular route for fast transfer states.',
    markup: `<div class="vl-spinner-photon-chase" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-spinner-photon-chase {
  position: relative;
  width: 66px;
  height: 66px;
  animation: vl-spinner-photon-chase-spin calc(var(--loader-speed) * 1.8) linear infinite;
}
.vl-spinner-photon-chase span {
  position: absolute;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 65%, transparent);
  animation: vl-spinner-photon-chase-pulse calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-spinner-photon-chase span:nth-child(1) { left: 28px; top: 0; }
.vl-spinner-photon-chase span:nth-child(2) { right: 7px; top: 7px; animation-delay: .08s; }
.vl-spinner-photon-chase span:nth-child(3) { right: 0; top: 28px; animation-delay: .16s; }
.vl-spinner-photon-chase span:nth-child(4) { right: 7px; bottom: 7px; animation-delay: .24s; }
.vl-spinner-photon-chase span:nth-child(5) { left: 28px; bottom: 0; animation-delay: .32s; }
.vl-spinner-photon-chase span:nth-child(6) { left: 7px; bottom: 7px; animation-delay: .4s; }
.vl-spinner-photon-chase span:nth-child(7) { left: 0; top: 28px; animation-delay: .48s; }
.vl-spinner-photon-chase span:nth-child(8) { left: 7px; top: 7px; animation-delay: .56s; }
@keyframes vl-spinner-photon-chase-spin { to { transform: rotate(360deg); } }
@keyframes vl-spinner-photon-chase-pulse {
  0%, 70%, 100% { opacity: .15; transform: scale(.55); }
  35% { opacity: 1; transform: scale(1.18); }
}`
  },
  {
    id: 'spinner-gravity-core',
    name: 'Gravity Core Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Counter-rotating orbital rings collapse toward a dense pulsing center.',
    markup: `<div class="vl-spinner-gravity-core" aria-hidden="true"><span></span><span></span><i></i></div>`,
    css: `.vl-spinner-gravity-core {
  position: relative;
  width: 70px;
  height: 70px;
}
.vl-spinner-gravity-core span {
  position: absolute;
  border-radius: 50%;
  border: 3px solid transparent;
}
.vl-spinner-gravity-core span:nth-child(1) {
  inset: 1px;
  border-top-color: var(--loader-accent);
  border-bottom-color: color-mix(in srgb, var(--loader-accent) 25%, transparent);
  animation: vl-spinner-gravity-core-spin calc(var(--loader-speed) * 1.35) linear infinite;
}
.vl-spinner-gravity-core span:nth-child(2) {
  inset: 12px;
  border-left-color: color-mix(in srgb, var(--loader-accent) 72%, white);
  border-right-color: color-mix(in srgb, var(--loader-accent) 22%, transparent);
  animation: vl-spinner-gravity-core-spin calc(var(--loader-speed) * .8) linear infinite reverse;
}
.vl-spinner-gravity-core i {
  position: absolute;
  left: 26px;
  top: 26px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow:
    0 0 0 7px color-mix(in srgb, var(--loader-accent) 14%, transparent),
    0 0 18px color-mix(in srgb, var(--loader-accent) 55%, transparent);
  animation: vl-spinner-gravity-core-pulse calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
@keyframes vl-spinner-gravity-core-spin { to { transform: rotate(360deg); } }
@keyframes vl-spinner-gravity-core-pulse {
  0%, 100% { transform: scale(.68); opacity: .58; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  }
];
