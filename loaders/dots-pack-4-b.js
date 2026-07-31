export const dotsPack4LoadersB = [
  {
    id: 'dot-conveyor-belt',
    name: 'Conveyor Belt Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Dots ride a belt from left to right, dropping off the end and reappearing at the start.',
    markup: `<div class="vl-dot-conveyor-belt" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-conveyor-belt {
  position: relative;
  width: 88px;
  height: 26px;
  overflow: hidden;
}
.vl-dot-conveyor-belt::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 3px;
  height: 2px;
  border-radius: 2px;
  background: var(--loader-accent);
  opacity: .18;
}
.vl-dot-conveyor-belt span {
  position: absolute;
  top: 5px;
  left: -12px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-conveyor-belt-ride calc(var(--loader-speed) * 2) linear infinite;
}
.vl-dot-conveyor-belt span:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.4); }
.vl-dot-conveyor-belt span:nth-child(3) { animation-delay: calc(var(--loader-speed) * -.8); }
.vl-dot-conveyor-belt span:nth-child(4) { animation-delay: calc(var(--loader-speed) * -1.2); }
.vl-dot-conveyor-belt span:nth-child(5) { animation-delay: calc(var(--loader-speed) * -1.6); }
@keyframes vl-dot-conveyor-belt-ride {
  0% { transform: translateX(0); opacity: 0; }
  12% { opacity: 1; }
  85% { opacity: 1; }
  100% { transform: translateX(100px); opacity: 0; }
}`
  },
  {
    id: 'dot-pendulum-newton',
    name: 'Newton Cradle Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'End dots swing out in turn while the middle stays still, like a desktop Newton cradle.',
    markup: `<div class="vl-dot-pendulum-newton" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-pendulum-newton {
  display: flex;
  align-items: center;
  gap: 2px;
  height: 30px;
}
.vl-dot-pendulum-newton span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--loader-accent);
}
.vl-dot-pendulum-newton span:first-child {
  transform-origin: 50% -18px;
  animation: vl-dot-pendulum-newton-left calc(var(--loader-speed) * 1.4) cubic-bezier(.4, 0, .6, 1) infinite;
}
.vl-dot-pendulum-newton span:last-child {
  transform-origin: 50% -18px;
  animation: vl-dot-pendulum-newton-right calc(var(--loader-speed) * 1.4) cubic-bezier(.4, 0, .6, 1) infinite;
}
.vl-dot-pendulum-newton span:nth-child(2),
.vl-dot-pendulum-newton span:nth-child(3),
.vl-dot-pendulum-newton span:nth-child(4) { opacity: .6; }
@keyframes vl-dot-pendulum-newton-left {
  0%, 50%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-42deg); }
}
@keyframes vl-dot-pendulum-newton-right {
  0%, 50%, 100% { transform: rotate(0deg); }
  75% { transform: rotate(42deg); }
}`
  },
  {
    id: 'dot-radar-sweep',
    name: 'Radar Sweep Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'A rotating sweep lights each dot in turn as it passes, like contacts appearing on a scope.',
    markup: `<div class="vl-dot-radar-sweep" aria-hidden="true"><i></i><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-radar-sweep {
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--loader-accent) 18%, transparent);
}
.vl-dot-radar-sweep i {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 2px;
  margin-top: -1px;
  transform-origin: 0 50%;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--loader-accent), transparent);
  animation: vl-dot-radar-sweep-turn calc(var(--loader-speed) * 2) linear infinite;
}
.vl-dot-radar-sweep span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 7px;
  height: 7px;
  margin: -3.5px 0 0 -3.5px;
  border-radius: 50%;
  background: var(--loader-accent);
  opacity: .18;
  animation: vl-dot-radar-sweep-ping calc(var(--loader-speed) * 2) linear infinite;
}
.vl-dot-radar-sweep span:nth-child(2) { transform: rotate(0deg) translateX(26px); }
.vl-dot-radar-sweep span:nth-child(3) { transform: rotate(45deg) translateX(26px); animation-delay: calc(var(--loader-speed) * .25); }
.vl-dot-radar-sweep span:nth-child(4) { transform: rotate(90deg) translateX(26px); animation-delay: calc(var(--loader-speed) * .5); }
.vl-dot-radar-sweep span:nth-child(5) { transform: rotate(135deg) translateX(26px); animation-delay: calc(var(--loader-speed) * .75); }
.vl-dot-radar-sweep span:nth-child(6) { transform: rotate(180deg) translateX(26px); animation-delay: calc(var(--loader-speed) * 1); }
.vl-dot-radar-sweep span:nth-child(7) { transform: rotate(225deg) translateX(26px); animation-delay: calc(var(--loader-speed) * 1.25); }
.vl-dot-radar-sweep span:nth-child(8) { transform: rotate(270deg) translateX(26px); animation-delay: calc(var(--loader-speed) * 1.5); }
.vl-dot-radar-sweep span:nth-child(9) { transform: rotate(315deg) translateX(26px); animation-delay: calc(var(--loader-speed) * 1.75); }
@keyframes vl-dot-radar-sweep-turn { to { transform: rotate(360deg); } }
@keyframes vl-dot-radar-sweep-ping {
  0%, 100% { opacity: .18; }
  6% { opacity: 1; }
  30% { opacity: .18; }
}`
  },
  {
    id: 'dot-stack-tower',
    name: 'Stack Tower Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Dots drop in to build a tower from the base up, then the stack clears and starts again.',
    markup: `<div class="vl-dot-stack-tower" aria-hidden="true"><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-stack-tower {
  position: relative;
  width: 34px;
  height: 62px;
}
.vl-dot-stack-tower span {
  position: absolute;
  left: 50%;
  width: 12px;
  height: 12px;
  margin-left: -6px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-stack-tower-drop calc(var(--loader-speed) * 2.4) ease-in-out infinite;
}
.vl-dot-stack-tower span:nth-child(1) { bottom: 0; }
.vl-dot-stack-tower span:nth-child(2) { bottom: 15px; animation-delay: calc(var(--loader-speed) * .2); }
.vl-dot-stack-tower span:nth-child(3) { bottom: 30px; animation-delay: calc(var(--loader-speed) * .4); }
.vl-dot-stack-tower span:nth-child(4) { bottom: 45px; animation-delay: calc(var(--loader-speed) * .6); }
@keyframes vl-dot-stack-tower-drop {
  0% { transform: translateY(-50px); opacity: 0; }
  20%, 75% { transform: translateY(0); opacity: 1; }
  92%, 100% { transform: translateY(0); opacity: 0; }
}`
  },
  {
    id: 'dot-morse-signal',
    name: 'Morse Signal Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Short and long pulses flash in sequence like a signal being keyed out over a wire.',
    markup: `<div class="vl-dot-morse-signal" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-morse-signal {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 22px;
}
.vl-dot-morse-signal span {
  height: 9px;
  border-radius: 99px;
  background: var(--loader-accent);
  opacity: .2;
  animation: vl-dot-morse-signal-key calc(var(--loader-speed) * 2.4) steps(1, end) infinite;
}
.vl-dot-morse-signal span:nth-child(1) { width: 9px; }
.vl-dot-morse-signal span:nth-child(2) { width: 22px; animation-delay: calc(var(--loader-speed) * .4); }
.vl-dot-morse-signal span:nth-child(3) { width: 9px;  animation-delay: calc(var(--loader-speed) * .8); }
.vl-dot-morse-signal span:nth-child(4) { width: 9px;  animation-delay: calc(var(--loader-speed) * 1.2); }
.vl-dot-morse-signal span:nth-child(5) { width: 22px; animation-delay: calc(var(--loader-speed) * 1.6); }
.vl-dot-morse-signal span:nth-child(6) { width: 9px;  animation-delay: calc(var(--loader-speed) * 2); }
@keyframes vl-dot-morse-signal-key {
  0%, 100% { opacity: .2; }
  6%, 14% { opacity: 1; }
}`
  }
];
