export const buttonsPack2LoadersA = [
  {
    id: 'button-orbit-trail',
    name: 'Orbit Trail Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A compact orbital trail circles the action label for sync, connect, and remote-request states.',
    markup: `<button class="vl-button-orbit-trail" type="button" disabled aria-busy="true">
  <span class="vl-button-orbit-trail-icon" aria-hidden="true"><i></i></span>
  <span>Connecting…</span>
</button>`,
    css: `.vl-button-orbit-trail {
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
  box-shadow: 0 7px 17px color-mix(in srgb, var(--loader-accent) 24%, transparent);
}
.vl-button-orbit-trail-icon {
  position: relative;
  width: 19px;
  height: 19px;
  flex: 0 0 19px;
  border: 2px solid rgba(255,255,255,.28);
  border-radius: 50%;
  animation: vl-button-orbit-trail-spin calc(var(--loader-speed) * .88) linear infinite;
}
.vl-button-orbit-trail-icon i {
  position: absolute;
  left: 6px;
  top: -3px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 0 2px rgba(255,255,255,.18);
}
@keyframes vl-button-orbit-trail-spin { to { transform: rotate(360deg); } }`
  },
  {
    id: 'button-equalizer-bars',
    name: 'Equalizer Bars Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'Four animated bars communicate active processing while keeping the button label stable and readable.',
    markup: `<button class="vl-button-equalizer" type="button" disabled aria-busy="true">
  <span class="vl-button-equalizer-bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
  <span>Processing…</span>
</button>`,
    css: `.vl-button-equalizer {
  min-width: 154px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 16px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 38%, transparent);
  border-radius: 10px;
  background: color-mix(in srgb, var(--loader-accent) 8%, #fff);
  color: var(--loader-accent);
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-equalizer-bars {
  width: 21px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
}
.vl-button-equalizer-bars i {
  width: 3px;
  height: 7px;
  border-radius: 999px;
  background: currentColor;
  animation: vl-button-equalizer-rise calc(var(--loader-speed) * .95) ease-in-out infinite;
}
.vl-button-equalizer-bars i:nth-child(2) { animation-delay: .1s; }
.vl-button-equalizer-bars i:nth-child(3) { animation-delay: .2s; }
.vl-button-equalizer-bars i:nth-child(4) { animation-delay: .3s; }
@keyframes vl-button-equalizer-rise {
  0%, 100% { height: 6px; opacity: .34; }
  50% { height: 18px; opacity: 1; }
}`
  },
  {
    id: 'button-radial-sweep',
    name: 'Radial Sweep Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A segmented radial sweep gives refresh and verification actions a precise technical loading state.',
    markup: `<button class="vl-button-radial-sweep" type="button" disabled aria-busy="true">
  <span class="vl-button-radial-sweep-disc" aria-hidden="true"></span>
  <span>Verifying…</span>
</button>`,
    css: `.vl-button-radial-sweep {
  min-width: 150px;
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
.vl-button-radial-sweep-disc {
  position: relative;
  width: 19px;
  height: 19px;
  flex: 0 0 19px;
  border-radius: 50%;
  background: conic-gradient(#fff 0 18%, transparent 18% 34%, rgba(255,255,255,.62) 34% 52%, transparent 52% 68%, rgba(255,255,255,.28) 68% 82%, transparent 82% 100%);
  animation: vl-button-radial-sweep-turn calc(var(--loader-speed) * .9) steps(6, end) infinite;
}
.vl-button-radial-sweep-disc::after {
  content: '';
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  background: #172033;
}
@keyframes vl-button-radial-sweep-turn { to { transform: rotate(360deg); } }`
  },
  {
    id: 'button-capsule-relay',
    name: 'Capsule Relay Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'Three capsule indicators relay emphasis across the button for queue, dispatch, and transfer actions.',
    markup: `<button class="vl-button-capsule-relay" type="button" disabled aria-busy="true">
  <span>Dispatching</span>
  <span class="vl-button-capsule-relay-track" aria-hidden="true"><i></i><i></i><i></i></span>
</button>`,
    css: `.vl-button-capsule-relay {
  min-width: 156px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 16px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #cfd7e3);
  border-radius: 999px;
  background: #fff;
  color: #344054;
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-capsule-relay-track {
  display: inline-flex;
  align-items: center;
  gap: 3px;
}
.vl-button-capsule-relay-track i {
  width: 5px;
  height: 11px;
  border-radius: 999px;
  background: var(--loader-accent);
  animation: vl-button-capsule-relay-pulse calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-button-capsule-relay-track i:nth-child(2) { animation-delay: .14s; }
.vl-button-capsule-relay-track i:nth-child(3) { animation-delay: .28s; }
@keyframes vl-button-capsule-relay-pulse {
  0%, 100% { transform: scaleY(.55); opacity: .25; }
  50% { transform: scaleY(1.15); opacity: 1; }
}`
  },
  {
    id: 'button-flip-squares',
    name: 'Flip Squares Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'Two compact squares flip in alternating sequence for transform, convert, and compilation actions.',
    markup: `<button class="vl-button-flip-squares" type="button" disabled aria-busy="true">
  <span class="vl-button-flip-squares-icon" aria-hidden="true"><i></i><i></i></span>
  <span>Converting…</span>
</button>`,
    css: `.vl-button-flip-squares {
  min-width: 154px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 16px;
  border: 0;
  border-radius: 9px;
  background: var(--loader-accent);
  color: #fff;
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-flip-squares-icon {
  width: 21px;
  height: 15px;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  perspective: 70px;
}
.vl-button-flip-squares-icon i {
  width: 9px;
  height: 9px;
  border-radius: 2px;
  background: #fff;
  animation: vl-button-flip-squares-turn calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-button-flip-squares-icon i:nth-child(2) { animation-delay: .22s; }
@keyframes vl-button-flip-squares-turn {
  0%, 100% { transform: rotateY(0deg) scale(.72); opacity: .38; }
  50% { transform: rotateY(180deg) scale(1.04); opacity: 1; }
}`
  }
];
