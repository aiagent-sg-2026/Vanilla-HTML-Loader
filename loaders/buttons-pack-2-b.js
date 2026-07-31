export const buttonsPack2LoadersB = [
  {
    id: 'button-twin-comets',
    name: 'Twin Comets Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'Two comet-like dots cross paths beside the label for fetch, upload, and bidirectional sync states.',
    markup: `<button class="vl-button-twin-comets" type="button" disabled aria-busy="true">
  <span class="vl-button-twin-comets-icon" aria-hidden="true"><i></i><i></i></span>
  <span>Fetching…</span>
</button>`,
    css: `.vl-button-twin-comets {
  min-width: 146px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 16px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 40%, transparent);
  border-radius: 10px;
  background: color-mix(in srgb, var(--loader-accent) 7%, #fff);
  color: var(--loader-accent);
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-twin-comets-icon {
  position: relative;
  width: 24px;
  height: 16px;
  flex: 0 0 24px;
}
.vl-button-twin-comets-icon i {
  position: absolute;
  top: 5px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  box-shadow: -6px 0 8px color-mix(in srgb, var(--loader-accent) 28%, transparent);
  animation: vl-button-twin-comets-cross calc(var(--loader-speed) * 1.05) ease-in-out infinite alternate;
}
.vl-button-twin-comets-icon i:first-child { left: 1px; --travel: 15px; }
.vl-button-twin-comets-icon i:last-child { right: 1px; --travel: -15px; }
@keyframes vl-button-twin-comets-cross {
  from { transform: translateX(0) scale(.72); opacity: .35; }
  to { transform: translateX(var(--travel)) scale(1.05); opacity: 1; }
}`
  },
  {
    id: 'button-progress-steps',
    name: 'Progress Steps Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'Four compact steps illuminate in sequence to communicate staged validation or multi-step submission.',
    markup: `<button class="vl-button-progress-steps" type="button" disabled aria-busy="true">
  <span>Submitting</span>
  <span class="vl-button-progress-steps-track" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
</button>`,
    css: `.vl-button-progress-steps {
  min-width: 158px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 16px;
  border: 0;
  border-radius: 10px;
  background: #172033;
  color: #fff;
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-progress-steps-track {
  display: inline-flex;
  align-items: center;
  gap: 3px;
}
.vl-button-progress-steps-track i {
  width: 5px;
  height: 14px;
  border-radius: 2px;
  background: #fff;
  animation: vl-button-progress-steps-light calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-button-progress-steps-track i:nth-child(2) { animation-delay: .13s; }
.vl-button-progress-steps-track i:nth-child(3) { animation-delay: .26s; }
.vl-button-progress-steps-track i:nth-child(4) { animation-delay: .39s; }
@keyframes vl-button-progress-steps-light {
  0%, 75%, 100% { transform: translateY(2px) scaleY(.65); opacity: .22; }
  35% { transform: translateY(-2px) scaleY(1); opacity: 1; }
}`
  },
  {
    id: 'button-elastic-dots',
    name: 'Elastic Dots Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'Three elastic dots stretch and recover inside a pill button for search and conversational actions.',
    markup: `<button class="vl-button-elastic-dots" type="button" disabled aria-busy="true">
  <span>Searching</span>
  <span class="vl-button-elastic-dots-group" aria-hidden="true"><i></i><i></i><i></i></span>
</button>`,
    css: `.vl-button-elastic-dots {
  min-width: 146px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 10px 17px;
  border: 0;
  border-radius: 999px;
  background: var(--loader-accent);
  color: #fff;
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-elastic-dots-group {
  display: inline-flex;
  align-items: center;
  gap: 3px;
}
.vl-button-elastic-dots-group i {
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: #fff;
  transform-origin: center;
  animation: vl-button-elastic-dots-stretch calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-button-elastic-dots-group i:nth-child(2) { animation-delay: .13s; }
.vl-button-elastic-dots-group i:nth-child(3) { animation-delay: .26s; }
@keyframes vl-button-elastic-dots-stretch {
  0%, 100% { transform: scaleX(.75); opacity: .35; }
  50% { transform: scaleX(1.8); opacity: 1; }
}`
  },
  {
    id: 'button-dashed-march',
    name: 'Dashed March Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A marching dashed underline adds motion without disturbing the label, suitable for route and download states.',
    markup: `<button class="vl-button-dashed-march" type="button" disabled aria-busy="true">
  <span>Downloading…</span>
  <span class="vl-button-dashed-march-line" aria-hidden="true"></span>
</button>`,
    css: `.vl-button-dashed-march {
  position: relative;
  min-width: 154px;
  min-height: 44px;
  overflow: hidden;
  display: inline-grid;
  place-items: center;
  padding: 10px 17px 12px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 35%, #cfd7e3);
  border-radius: 9px;
  background: #fff;
  color: #344054;
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-dashed-march-line {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 7px;
  height: 2px;
  background: repeating-linear-gradient(90deg, var(--loader-accent) 0 7px, transparent 7px 12px);
  background-size: 24px 100%;
  animation: vl-button-dashed-march-shift calc(var(--loader-speed) * .8) linear infinite;
}
@keyframes vl-button-dashed-march-shift { to { background-position: 24px 0; } }`
  },
  {
    id: 'button-checkpoint-pulse',
    name: 'Checkpoint Pulse Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'Three checkpoint nodes pulse along a connector line for approval, verification, and workflow transitions.',
    markup: `<button class="vl-button-checkpoint-pulse" type="button" disabled aria-busy="true">
  <span class="vl-button-checkpoint-pulse-track" aria-hidden="true"><i></i><i></i><i></i></span>
  <span>Approving…</span>
</button>`,
    css: `.vl-button-checkpoint-pulse {
  min-width: 154px;
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
}
.vl-button-checkpoint-pulse-track {
  position: relative;
  width: 29px;
  height: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
}
.vl-button-checkpoint-pulse-track::before {
  content: '';
  position: absolute;
  left: 3px;
  right: 3px;
  top: 5px;
  height: 2px;
  background: rgba(255,255,255,.35);
}
.vl-button-checkpoint-pulse-track i {
  position: relative;
  z-index: 1;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  animation: vl-button-checkpoint-pulse-node calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
.vl-button-checkpoint-pulse-track i:nth-child(2) { animation-delay: .15s; }
.vl-button-checkpoint-pulse-track i:nth-child(3) { animation-delay: .3s; }
@keyframes vl-button-checkpoint-pulse-node {
  0%, 100% { transform: scale(.65); opacity: .35; }
  50% { transform: scale(1.2); opacity: 1; box-shadow: 0 0 0 3px rgba(255,255,255,.18); }
}`
  }
];
