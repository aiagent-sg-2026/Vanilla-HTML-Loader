export const spinnersPack5LoadersA = [
  {
    id: 'spinner-aurora-ring',
    name: 'Aurora Ring Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Three translucent ring arcs rotate at different speeds to create a soft aurora-style loading state.',
    markup: `<div class="vl-spinner-aurora-ring" aria-hidden="true"><span></span><span></span><span></span></div>`,
    css: `.vl-spinner-aurora-ring {
  position: relative;
  width: 68px;
  height: 68px;
}
.vl-spinner-aurora-ring span {
  position: absolute;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: var(--loader-accent);
  border-right-color: color-mix(in srgb, var(--loader-accent) 38%, transparent);
  animation: vl-spinner-aurora-ring-spin var(--loader-speed) linear infinite;
}
.vl-spinner-aurora-ring span:nth-child(1) { inset: 2px; }
.vl-spinner-aurora-ring span:nth-child(2) {
  inset: 11px;
  animation-direction: reverse;
  animation-duration: calc(var(--loader-speed) * .74);
  opacity: .72;
}
.vl-spinner-aurora-ring span:nth-child(3) {
  inset: 20px;
  animation-duration: calc(var(--loader-speed) * .52);
  opacity: .48;
}
@keyframes vl-spinner-aurora-ring-spin { to { transform: rotate(360deg); } }`
  },
  {
    id: 'spinner-torque-orbit',
    name: 'Torque Orbit Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Two weighted orbit points accelerate around a compact torque ring for sync and calculation states.',
    markup: `<div class="vl-spinner-torque-orbit" aria-hidden="true"><i></i><span></span><span></span></div>`,
    css: `.vl-spinner-torque-orbit {
  position: relative;
  width: 70px;
  height: 70px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 20%, transparent);
  border-radius: 50%;
}
.vl-spinner-torque-orbit i {
  position: absolute;
  inset: 20px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 18%, transparent);
  box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--loader-accent) 42%, transparent);
}
.vl-spinner-torque-orbit span {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 12px color-mix(in srgb, var(--loader-accent) 48%, transparent);
  animation: vl-spinner-torque-orbit calc(var(--loader-speed) * 1.05) cubic-bezier(.55,.05,.35,1) infinite;
}
.vl-spinner-torque-orbit span:last-child {
  width: 7px;
  height: 7px;
  left: 31.5px;
  top: 31.5px;
  opacity: .58;
  animation-direction: reverse;
  animation-duration: calc(var(--loader-speed) * .72);
}
@keyframes vl-spinner-torque-orbit {
  to { transform: rotate(360deg) translateX(27px) rotate(-360deg); }
}`
  },
  {
    id: 'spinner-diamond-rotor',
    name: 'Diamond Rotor Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Four diamond tiles rotate around a bright center for compact technical and processing interfaces.',
    markup: `<div class="vl-spinner-diamond-rotor" aria-hidden="true"><i></i><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-spinner-diamond-rotor {
  position: relative;
  width: 68px;
  height: 68px;
  animation: vl-spinner-diamond-rotor-spin calc(var(--loader-speed) * 1.15) linear infinite;
}
.vl-spinner-diamond-rotor i {
  position: absolute;
  left: 27px;
  top: 27px;
  width: 14px;
  height: 14px;
  transform: rotate(45deg);
  border-radius: 3px;
  background: var(--loader-accent);
  box-shadow: 0 0 0 6px color-mix(in srgb, var(--loader-accent) 12%, transparent);
}
.vl-spinner-diamond-rotor span {
  position: absolute;
  left: 29px;
  top: 3px;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 72%, white);
  animation: vl-spinner-diamond-rotor-pulse calc(var(--loader-speed) * .9) ease-in-out infinite;
}
.vl-spinner-diamond-rotor span:nth-of-type(2) { left: 55px; top: 29px; animation-delay: .12s; }
.vl-spinner-diamond-rotor span:nth-of-type(3) { left: 29px; top: 55px; animation-delay: .24s; }
.vl-spinner-diamond-rotor span:nth-of-type(4) { left: 3px; top: 29px; animation-delay: .36s; }
@keyframes vl-spinner-diamond-rotor-spin { to { transform: rotate(360deg); } }
@keyframes vl-spinner-diamond-rotor-pulse {
  0%, 100% { opacity: .32; transform: rotate(45deg) scale(.68); }
  50% { opacity: 1; transform: rotate(45deg) scale(1.12); }
}`
  },
  {
    id: 'spinner-pulse-crescent',
    name: 'Pulse Crescent Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A rotating crescent and pulsing inner moon create a calm spinner for content and page transitions.',
    markup: `<div class="vl-spinner-pulse-crescent" aria-hidden="true"><span></span></div>`,
    css: `.vl-spinner-pulse-crescent {
  position: relative;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  border: 5px solid color-mix(in srgb, var(--loader-accent) 16%, transparent);
  border-top-color: var(--loader-accent);
  border-left-color: color-mix(in srgb, var(--loader-accent) 62%, transparent);
  animation: vl-spinner-pulse-crescent-spin calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-spinner-pulse-crescent span {
  position: absolute;
  inset: 14px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 9px -4px 0 0 var(--surface, #fff);
  animation: vl-spinner-pulse-crescent-core calc(var(--loader-speed) * .9) ease-in-out infinite;
}
@keyframes vl-spinner-pulse-crescent-spin { to { transform: rotate(360deg); } }
@keyframes vl-spinner-pulse-crescent-core {
  0%, 100% { opacity: .42; transform: scale(.78); }
  50% { opacity: 1; transform: scale(1.05); }
}`
  },
  {
    id: 'spinner-arc-core',
    name: 'Arc Core Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Counter-rotating arc shells surround a pulsing core for system startup and computation states.',
    markup: `<div class="vl-spinner-arc-core" aria-hidden="true"><span></span><span></span><i></i></div>`,
    css: `.vl-spinner-arc-core {
  position: relative;
  width: 70px;
  height: 70px;
}
.vl-spinner-arc-core span {
  position: absolute;
  inset: 2px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: var(--loader-accent);
  border-bottom-color: color-mix(in srgb, var(--loader-accent) 28%, transparent);
  animation: vl-spinner-arc-core-spin var(--loader-speed) linear infinite;
}
.vl-spinner-arc-core span:nth-child(2) {
  inset: 13px;
  border-top-color: color-mix(in srgb, var(--loader-accent) 58%, white);
  border-bottom-color: transparent;
  animation-direction: reverse;
  animation-duration: calc(var(--loader-speed) * .65);
}
.vl-spinner-arc-core i {
  position: absolute;
  left: 27px;
  top: 27px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 7px color-mix(in srgb, var(--loader-accent) 14%, transparent);
  animation: vl-spinner-arc-core-pulse calc(var(--loader-speed) * .88) ease-in-out infinite;
}
@keyframes vl-spinner-arc-core-spin { to { transform: rotate(360deg); } }
@keyframes vl-spinner-arc-core-pulse {
  0%, 100% { transform: scale(.72); opacity: .56; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  }
];
