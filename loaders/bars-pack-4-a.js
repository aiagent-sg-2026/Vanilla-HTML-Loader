export const barsPack4LoadersA = [
  {
    id: 'bar-wave-conveyor',
    name: 'Wave Conveyor Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'A compact conveyor-style stripe animation for queued jobs, transfers, and continuous processing.',
    markup: `<div class="vl-bar-wave-conveyor" aria-hidden="true"></div>`,
    css: `.vl-bar-wave-conveyor {
  width: 148px;
  height: 10px;
  border-radius: 999px;
  background:
    repeating-linear-gradient(90deg,
      var(--loader-accent) 0 10px,
      color-mix(in srgb, var(--loader-accent) 24%, transparent) 10px 18px);
  background-size: 36px 100%;
  animation: vl-bar-wave-conveyor calc(var(--loader-speed) * 1.15) linear infinite;
}
@keyframes vl-bar-wave-conveyor {
  to { background-position: 36px 0; }
}`
  },
  {
    id: 'bar-dash-relay',
    name: 'Dash Relay Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'A five-segment relay pattern suited to network handoffs, validation steps, and staged requests.',
    markup: `<div class="vl-bar-dash-relay" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-bar-dash-relay {
  width: 148px;
  display: flex;
  gap: 6px;
  align-items: center;
}
.vl-bar-dash-relay span {
  flex: 1;
  height: 8px;
  border-radius: 999px;
  background: var(--loader-accent);
  animation: vl-bar-dash-relay calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-bar-dash-relay span:nth-child(2) { animation-delay: .1s; }
.vl-bar-dash-relay span:nth-child(3) { animation-delay: .2s; }
.vl-bar-dash-relay span:nth-child(4) { animation-delay: .3s; }
.vl-bar-dash-relay span:nth-child(5) { animation-delay: .4s; }
@keyframes vl-bar-dash-relay {
  0%, 70%, 100% { opacity: .2; transform: scaleX(.72); }
  35% { opacity: 1; transform: scaleX(1); }
}`
  },
  {
    id: 'bar-elastic-rail',
    name: 'Elastic Rail Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'An elastic indeterminate rail that stretches and contracts without leaving its bounded track.',
    markup: `<div class="vl-bar-elastic-rail" aria-hidden="true"><span></span></div>`,
    css: `.vl-bar-elastic-rail {
  position: relative;
  width: 148px;
  height: 9px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 16%, transparent);
}
.vl-bar-elastic-rail span {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 38%;
  border-radius: inherit;
  background: var(--loader-accent);
  transform-origin: center;
  animation: vl-bar-elastic-rail calc(var(--loader-speed) * 1.25) cubic-bezier(.65,.05,.36,1) infinite;
}
@keyframes vl-bar-elastic-rail {
  0% { left: 0; width: 24%; }
  45% { left: 24%; width: 58%; }
  100% { left: 76%; width: 24%; }
}`
  },
  {
    id: 'bar-signal-ladder',
    name: 'Signal Ladder Bars',
    category: 'Bars',
    tech: 'CSS',
    description: 'A stepped signal ladder for analytics refreshes, media loading, and live connection states.',
    markup: `<div class="vl-bar-signal-ladder" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-bar-signal-ladder {
  height: 48px;
  display: flex;
  align-items: flex-end;
  gap: 5px;
}
.vl-bar-signal-ladder span {
  width: 7px;
  height: 20px;
  border-radius: 5px 5px 2px 2px;
  background: var(--loader-accent);
  animation: vl-bar-signal-ladder calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
.vl-bar-signal-ladder span:nth-child(1) { height: 14px; }
.vl-bar-signal-ladder span:nth-child(2) { height: 19px; animation-delay: .08s; }
.vl-bar-signal-ladder span:nth-child(3) { height: 25px; animation-delay: .16s; }
.vl-bar-signal-ladder span:nth-child(4) { height: 33px; animation-delay: .24s; }
.vl-bar-signal-ladder span:nth-child(5) { height: 40px; animation-delay: .32s; }
.vl-bar-signal-ladder span:nth-child(6) { height: 32px; animation-delay: .4s; }
.vl-bar-signal-ladder span:nth-child(7) { height: 22px; animation-delay: .48s; }
@keyframes vl-bar-signal-ladder {
  0%, 100% { opacity: .28; transform: scaleY(.55); }
  50% { opacity: 1; transform: scaleY(1); }
}`
  },
  {
    id: 'bar-twin-scanner',
    name: 'Twin Scanner Bars',
    category: 'Bars',
    tech: 'CSS',
    description: 'Two synchronized scanning rails for dual-source loading, compare views, and parallel tasks.',
    markup: `<div class="vl-bar-twin-scanner" aria-hidden="true"><span></span><span></span></div>`,
    css: `.vl-bar-twin-scanner {
  width: 148px;
  display: grid;
  gap: 8px;
}
.vl-bar-twin-scanner span {
  height: 7px;
  border-radius: 999px;
  background:
    linear-gradient(90deg,
      color-mix(in srgb, var(--loader-accent) 14%, transparent) 0 32%,
      var(--loader-accent) 45% 55%,
      color-mix(in srgb, var(--loader-accent) 14%, transparent) 68% 100%);
  background-size: 220% 100%;
  animation: vl-bar-twin-scanner calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
.vl-bar-twin-scanner span:nth-child(2) { animation-direction: reverse; animation-delay: -.35s; }
@keyframes vl-bar-twin-scanner {
  0%, 100% { background-position: 100% 0; }
  50% { background-position: 0 0; }
}`
  }
];
