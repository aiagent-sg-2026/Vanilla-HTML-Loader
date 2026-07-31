export const dotsPack4LoadersA = [
  {
    id: 'dot-metronome-arc',
    name: 'Metronome Arc Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Five dots swing along an arc like a metronome, handing the beat to the next one each pass.',
    markup: `<div class="vl-dot-metronome-arc" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-metronome-arc {
  position: relative;
  width: 92px;
  height: 44px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.vl-dot-metronome-arc span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  opacity: .3;
  animation: vl-dot-metronome-arc-lift calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
.vl-dot-metronome-arc span:nth-child(2) { animation-delay: calc(var(--loader-speed) * .12); }
.vl-dot-metronome-arc span:nth-child(3) { animation-delay: calc(var(--loader-speed) * .24); }
.vl-dot-metronome-arc span:nth-child(4) { animation-delay: calc(var(--loader-speed) * .36); }
.vl-dot-metronome-arc span:nth-child(5) { animation-delay: calc(var(--loader-speed) * .48); }
@keyframes vl-dot-metronome-arc-lift {
  0%, 55%, 100% { transform: translateY(0) scale(1); opacity: .3; }
  25% { transform: translateY(-26px) scale(1.25); opacity: 1; }
}`
  },
  {
    id: 'dot-carousel-swap',
    name: 'Carousel Swap Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Four dots rotate positions on a carousel, each fading as it passes behind the others.',
    markup: `<div class="vl-dot-carousel-swap" aria-hidden="true"><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-carousel-swap {
  position: relative;
  width: 74px;
  height: 30px;
}
.vl-dot-carousel-swap span {
  position: absolute;
  top: 10px;
  left: 0;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-carousel-swap-cycle calc(var(--loader-speed) * 2) cubic-bezier(.65, 0, .35, 1) infinite;
}
.vl-dot-carousel-swap span:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.5); }
.vl-dot-carousel-swap span:nth-child(3) { animation-delay: calc(var(--loader-speed) * -1); }
.vl-dot-carousel-swap span:nth-child(4) { animation-delay: calc(var(--loader-speed) * -1.5); }
@keyframes vl-dot-carousel-swap-cycle {
  0% { transform: translateX(0) scale(.6); opacity: .25; }
  25% { transform: translateX(21px) scale(1); opacity: 1; }
  50% { transform: translateX(42px) scale(1); opacity: 1; }
  75% { transform: translateX(63px) scale(.6); opacity: .25; }
  76%, 100% { transform: translateX(0) scale(.6); opacity: .25; }
}`
  },
  {
    id: 'dot-gravity-well',
    name: 'Gravity Well Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Dots fall inward toward a centre point, compress, then spring back out to their orbits.',
    markup: `<div class="vl-dot-gravity-well" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-gravity-well {
  position: relative;
  width: 68px;
  height: 68px;
}
.vl-dot-gravity-well span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 9px;
  height: 9px;
  margin: -4.5px 0 0 -4.5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-gravity-well-fall calc(var(--loader-speed) * 1.7) ease-in-out infinite;
}
.vl-dot-gravity-well span:nth-child(1) { --vl-gw-angle: 0deg; }
.vl-dot-gravity-well span:nth-child(2) { --vl-gw-angle: 60deg; animation-delay: calc(var(--loader-speed) * -.14); }
.vl-dot-gravity-well span:nth-child(3) { --vl-gw-angle: 120deg; animation-delay: calc(var(--loader-speed) * -.28); }
.vl-dot-gravity-well span:nth-child(4) { --vl-gw-angle: 180deg; animation-delay: calc(var(--loader-speed) * -.42); }
.vl-dot-gravity-well span:nth-child(5) { --vl-gw-angle: 240deg; animation-delay: calc(var(--loader-speed) * -.56); }
.vl-dot-gravity-well span:nth-child(6) { --vl-gw-angle: 300deg; animation-delay: calc(var(--loader-speed) * -.7); }
@keyframes vl-dot-gravity-well-fall {
  0%, 100% { transform: rotate(var(--vl-gw-angle)) translateX(26px) scale(1); opacity: .9; }
  45% { transform: rotate(var(--vl-gw-angle)) translateX(4px) scale(.55); opacity: .35; }
  60% { transform: rotate(var(--vl-gw-angle)) translateX(30px) scale(1.15); opacity: 1; }
}`
  },
  {
    id: 'dot-relay-baton',
    name: 'Relay Baton Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'A bright dot runs the track and passes the baton, lighting each waiting dot as it arrives.',
    markup: `<div class="vl-dot-relay-baton" aria-hidden="true"><i></i><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-relay-baton {
  position: relative;
  width: 84px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.vl-dot-relay-baton span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--loader-accent);
  opacity: .22;
  animation: vl-dot-relay-baton-lit calc(var(--loader-speed) * 2) ease-in-out infinite;
}
.vl-dot-relay-baton span:nth-child(3) { animation-delay: calc(var(--loader-speed) * .5); }
.vl-dot-relay-baton span:nth-child(4) { animation-delay: calc(var(--loader-speed) * 1); }
.vl-dot-relay-baton span:nth-child(5) { animation-delay: calc(var(--loader-speed) * 1.5); }
.vl-dot-relay-baton i {
  position: absolute;
  top: 50%;
  left: 0;
  width: 13px;
  height: 13px;
  margin-top: -6.5px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--loader-accent) 22%, transparent);
  animation: vl-dot-relay-baton-run calc(var(--loader-speed) * 2) ease-in-out infinite;
}
@keyframes vl-dot-relay-baton-run {
  0% { transform: translateX(-2px); }
  25% { transform: translateX(23px); }
  50% { transform: translateX(48px); }
  75%, 100% { transform: translateX(71px); }
}
@keyframes vl-dot-relay-baton-lit {
  0%, 100% { opacity: .22; transform: scale(1); }
  12% { opacity: 1; transform: scale(1.35); }
}`
  },
  {
    id: 'dot-scatter-gather',
    name: 'Scatter Gather Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'A tight cluster scatters outward and regroups, suggesting data being collected and merged.',
    markup: `<div class="vl-dot-scatter-gather" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-scatter-gather {
  position: relative;
  width: 70px;
  height: 70px;
}
.vl-dot-scatter-gather span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-scatter-gather-out calc(var(--loader-speed) * 2.2) ease-in-out infinite;
}
.vl-dot-scatter-gather span:nth-child(1) { --vl-sg-x: 0px;   --vl-sg-y: -27px; }
.vl-dot-scatter-gather span:nth-child(2) { --vl-sg-x: 24px;  --vl-sg-y: -13px; }
.vl-dot-scatter-gather span:nth-child(3) { --vl-sg-x: 24px;  --vl-sg-y: 13px; }
.vl-dot-scatter-gather span:nth-child(4) { --vl-sg-x: 0px;   --vl-sg-y: 27px; }
.vl-dot-scatter-gather span:nth-child(5) { --vl-sg-x: -24px; --vl-sg-y: 13px; }
.vl-dot-scatter-gather span:nth-child(6) { --vl-sg-x: -24px; --vl-sg-y: -13px; }
.vl-dot-scatter-gather span:nth-child(7) { --vl-sg-x: 0px;   --vl-sg-y: 0px; opacity: .5; }
@keyframes vl-dot-scatter-gather-out {
  0%, 100% { transform: translate(0, 0) scale(.7); opacity: .45; }
  45%, 60% { transform: translate(var(--vl-sg-x), var(--vl-sg-y)) scale(1); opacity: 1; }
}`
  }
];
