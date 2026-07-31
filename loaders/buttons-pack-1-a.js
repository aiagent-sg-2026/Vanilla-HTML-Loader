export const buttonsPack1LoadersA = [
  {
    id: 'button-orbit-label',
    name: 'Orbit Label Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A primary action button with two orbiting dots that keep the label readable during processing.',
    markup: `<button class="vl-button-orbit-label" type="button" disabled aria-busy="true">
  <span class="vl-button-orbit-label-icon" aria-hidden="true"><i></i><i></i></span>
  <span>Processing</span>
</button>`,
    css: `.vl-button-orbit-label {
  min-width: 146px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 16px;
  border: 0;
  border-radius: 10px;
  background: var(--loader-accent);
  color: #fff;
  font: 800 13px/1.2 system-ui, sans-serif;
  box-shadow: 0 8px 18px color-mix(in srgb, var(--loader-accent) 24%, transparent);
}
.vl-button-orbit-label-icon {
  position: relative;
  width: 18px;
  height: 18px;
  animation: vl-button-orbit-label-spin calc(var(--loader-speed) * .9) linear infinite;
}
.vl-button-orbit-label-icon i {
  position: absolute;
  left: 6px;
  top: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  transform-origin: 3px 9px;
}
.vl-button-orbit-label-icon i:nth-child(2) { transform: rotate(180deg); opacity: .42; }
@keyframes vl-button-orbit-label-spin { to { transform: rotate(360deg); } }`
  },
  {
    id: 'button-arrow-conveyor',
    name: 'Arrow Conveyor Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'Three compact arrowheads flow across a download-style button for transfer and export actions.',
    markup: `<button class="vl-button-arrow-conveyor" type="button" disabled aria-busy="true">
  <span>Transferring</span>
  <span class="vl-button-arrow-conveyor-track" aria-hidden="true"><i></i><i></i><i></i></span>
</button>`,
    css: `.vl-button-arrow-conveyor {
  min-width: 158px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 15px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 42%, transparent);
  border-radius: 10px;
  background: color-mix(in srgb, var(--loader-accent) 7%, #fff);
  color: var(--loader-accent);
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-arrow-conveyor-track {
  width: 38px;
  height: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 3px;
}
.vl-button-arrow-conveyor-track i {
  flex: 0 0 9px;
  width: 9px;
  height: 9px;
  border-top: 3px solid currentColor;
  border-right: 3px solid currentColor;
  transform: translateX(-18px) rotate(45deg);
  animation: vl-button-arrow-conveyor calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-button-arrow-conveyor-track i:nth-child(2) { animation-delay: .12s; }
.vl-button-arrow-conveyor-track i:nth-child(3) { animation-delay: .24s; }
@keyframes vl-button-arrow-conveyor {
  0% { transform: translateX(-18px) rotate(45deg); opacity: 0; }
  35% { opacity: 1; }
  100% { transform: translateX(26px) rotate(45deg); opacity: 0; }
}`
  },
  {
    id: 'button-sweep-highlight',
    name: 'Sweep Highlight Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A premium button with a restrained moving highlight for waiting, generating, and preparing states.',
    markup: `<button class="vl-button-sweep-highlight" type="button" disabled aria-busy="true">
  <span>Preparing result</span>
</button>`,
    css: `.vl-button-sweep-highlight {
  position: relative;
  min-width: 164px;
  min-height: 44px;
  overflow: hidden;
  display: inline-grid;
  place-items: center;
  padding: 10px 17px;
  border: 0;
  border-radius: 10px;
  background: var(--loader-accent);
  color: #fff;
  font: 800 13px/1.2 system-ui, sans-serif;
  box-shadow: 0 8px 18px color-mix(in srgb, var(--loader-accent) 25%, transparent);
}
.vl-button-sweep-highlight::before {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-120%) skewX(-18deg);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.34), transparent);
  animation: vl-button-sweep-highlight calc(var(--loader-speed) * 1.55) ease-in-out infinite;
}
.vl-button-sweep-highlight span { position: relative; z-index: 1; }
@keyframes vl-button-sweep-highlight { to { transform: translateX(120%) skewX(-18deg); } }`
  },
  {
    id: 'button-pulse-border',
    name: 'Pulse Border Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'An outlined action button whose border breathes gently while a request is being checked.',
    markup: `<button class="vl-button-pulse-border" type="button" disabled aria-busy="true">
  <span class="vl-button-pulse-border-dot" aria-hidden="true"></span>
  <span>Checking</span>
</button>`,
    css: `.vl-button-pulse-border {
  min-width: 132px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 10px 16px;
  border: 2px solid var(--loader-accent);
  border-radius: 10px;
  background: #fff;
  color: var(--loader-accent);
  font: 800 13px/1.2 system-ui, sans-serif;
  animation: vl-button-pulse-border calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-button-pulse-border-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
  animation: vl-button-pulse-border-dot calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
@keyframes vl-button-pulse-border {
  0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--loader-accent) 0%, transparent); }
  50% { box-shadow: 0 0 0 5px color-mix(in srgb, var(--loader-accent) 13%, transparent); }
}
@keyframes vl-button-pulse-border-dot {
  0%, 100% { transform: scale(.65); opacity: .35; }
  50% { transform: scale(1.12); opacity: 1; }
}`
  },
  {
    id: 'button-segment-cycle',
    name: 'Segment Cycle Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'Four short segments illuminate in sequence beside the label for queued and multi-step actions.',
    markup: `<button class="vl-button-segment-cycle" type="button" disabled aria-busy="true">
  <span class="vl-button-segment-cycle-bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
  <span>Running steps</span>
</button>`,
    css: `.vl-button-segment-cycle {
  min-width: 156px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 16px;
  border: 1px solid #d5deea;
  border-radius: 10px;
  background: #fff;
  color: #344054;
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-segment-cycle-bars { display: inline-flex; align-items: center; gap: 2px; }
.vl-button-segment-cycle-bars i {
  width: 3px;
  height: 14px;
  border-radius: 999px;
  background: var(--loader-accent);
  animation: vl-button-segment-cycle calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-button-segment-cycle-bars i:nth-child(2) { animation-delay: .1s; }
.vl-button-segment-cycle-bars i:nth-child(3) { animation-delay: .2s; }
.vl-button-segment-cycle-bars i:nth-child(4) { animation-delay: .3s; }
@keyframes vl-button-segment-cycle {
  0%, 100% { transform: scaleY(.45); opacity: .25; }
  50% { transform: scaleY(1); opacity: 1; }
}`
  }
];
