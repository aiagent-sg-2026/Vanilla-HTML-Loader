export const buttonsPack3LoadersA = [
  {
    id: 'button-icon-breathe',
    name: 'Icon Breathe Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A compact action button whose leading icon breathes softly while work continues.',
    markup: `<button class="vl-button-icon-breathe" type="button" disabled aria-busy="true"><span class="vl-button-icon-breathe-mark" aria-hidden="true"></span><span>Preparing</span></button>`,
    css: `.vl-button-icon-breathe {
  min-width: 142px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 17px;
  border: 0;
  border-radius: 10px;
  background: var(--loader-accent);
  color: #fff;
  font: 800 13px/1.2 system-ui, sans-serif;
  box-shadow: 0 8px 18px color-mix(in srgb, var(--loader-accent) 24%, transparent);
}
.vl-button-icon-breathe-mark {
  position: relative;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #fff;
  animation: vl-button-icon-breathe-pulse calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-button-icon-breathe-mark::after {
  content: '';
  position: absolute;
  inset: -5px;
  border: 2px solid rgba(255,255,255,.52);
  border-radius: inherit;
  animation: vl-button-icon-breathe-halo calc(var(--loader-speed) * 1.15) ease-out infinite;
}
@keyframes vl-button-icon-breathe-pulse {
  0%, 100% { transform: scale(.72); opacity: .72; }
  50% { transform: scale(1); opacity: 1; }
}
@keyframes vl-button-icon-breathe-halo {
  0% { transform: scale(.55); opacity: .8; }
  100% { transform: scale(1.18); opacity: 0; }
}`
  },
  {
    id: 'button-corner-sequence',
    name: 'Corner Sequence Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'Four corner indicators illuminate in sequence around a restrained outlined button.',
    markup: `<button class="vl-button-corner-sequence" type="button" disabled aria-busy="true"><span>Validating</span><i aria-hidden="true"></i><i aria-hidden="true"></i><i aria-hidden="true"></i><i aria-hidden="true"></i></button>`,
    css: `.vl-button-corner-sequence {
  position: relative;
  min-width: 146px;
  min-height: 44px;
  overflow: hidden;
  display: inline-grid;
  place-items: center;
  padding: 10px 18px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 48%, transparent);
  border-radius: 10px;
  background: color-mix(in srgb, var(--loader-accent) 6%, #fff);
  color: var(--loader-accent);
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-corner-sequence i {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: var(--loader-accent);
  animation: vl-button-corner-sequence-step calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
.vl-button-corner-sequence i:nth-of-type(1) { left: 7px; top: 7px; }
.vl-button-corner-sequence i:nth-of-type(2) { right: 7px; top: 7px; animation-delay: .18s; }
.vl-button-corner-sequence i:nth-of-type(3) { right: 7px; bottom: 7px; animation-delay: .36s; }
.vl-button-corner-sequence i:nth-of-type(4) { left: 7px; bottom: 7px; animation-delay: .54s; }
@keyframes vl-button-corner-sequence-step {
  0%, 70%, 100% { transform: scale(.45); opacity: .18; }
  35% { transform: scale(1); opacity: 1; }
}`
  },
  {
    id: 'button-liquid-rise',
    name: 'Liquid Rise Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A soft liquid layer rises and falls behind the label for uploads, saves, and queued work.',
    markup: `<button class="vl-button-liquid-rise" type="button" disabled aria-busy="true"><span class="vl-button-liquid-rise-fill" aria-hidden="true"></span><span class="vl-button-liquid-rise-label">Uploading</span></button>`,
    css: `.vl-button-liquid-rise {
  position: relative;
  min-width: 146px;
  min-height: 44px;
  overflow: hidden;
  display: inline-grid;
  place-items: center;
  padding: 10px 18px;
  border: 1px solid var(--loader-accent);
  border-radius: 10px;
  background: color-mix(in srgb, var(--loader-accent) 7%, #fff);
  color: var(--loader-accent);
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-liquid-rise-fill {
  position: absolute;
  left: -8%;
  bottom: -54%;
  width: 116%;
  height: 115%;
  border-radius: 46% 54% 0 0 / 22% 24% 0 0;
  background: color-mix(in srgb, var(--loader-accent) 22%, transparent);
  transform-origin: 50% 100%;
  animation: vl-button-liquid-rise-wave calc(var(--loader-speed) * 1.8) ease-in-out infinite;
}
.vl-button-liquid-rise-label { position: relative; z-index: 1; }
@keyframes vl-button-liquid-rise-wave {
  0%, 100% { transform: translateY(12%) rotate(-2deg) scaleX(1); }
  50% { transform: translateY(-28%) rotate(2deg) scaleX(1.04); }
}`
  },
  {
    id: 'button-cursor-type',
    name: 'Cursor Type Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A typing-style cursor cycles beside the label for assistant, generation, and command actions.',
    markup: `<button class="vl-button-cursor-type" type="button" disabled aria-busy="true"><span>Generating</span><span class="vl-button-cursor-type-dots" aria-hidden="true"><i></i><i></i><i></i></span><b aria-hidden="true"></b></button>`,
    css: `.vl-button-cursor-type {
  min-width: 154px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px 17px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 44%, transparent);
  border-radius: 10px;
  background: #fff;
  color: var(--loader-accent);
  font: 800 13px/1.2 ui-monospace, SFMono-Regular, Consolas, monospace;
}
.vl-button-cursor-type-dots { display: inline-flex; gap: 2px; }
.vl-button-cursor-type-dots i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: currentColor;
  animation: vl-button-cursor-type-dot calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-button-cursor-type-dots i:nth-child(2) { animation-delay: .12s; }
.vl-button-cursor-type-dots i:nth-child(3) { animation-delay: .24s; }
.vl-button-cursor-type b {
  width: 2px;
  height: 16px;
  margin-left: 2px;
  background: currentColor;
  animation: vl-button-cursor-type-blink calc(var(--loader-speed) * .78) steps(1, end) infinite;
}
@keyframes vl-button-cursor-type-dot {
  0%, 100% { transform: translateY(1px); opacity: .28; }
  50% { transform: translateY(-2px); opacity: 1; }
}
@keyframes vl-button-cursor-type-blink { 50% { opacity: 0; } }`
  },
  {
    id: 'button-dual-ring-exchange',
    name: 'Dual Ring Exchange Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'Two small rings exchange scale and emphasis before the button label.',
    markup: `<button class="vl-button-dual-ring-exchange" type="button" disabled aria-busy="true"><span class="vl-button-dual-ring-exchange-icon" aria-hidden="true"><i></i><i></i></span><span>Connecting</span></button>`,
    css: `.vl-button-dual-ring-exchange {
  min-width: 150px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 17px;
  border: 0;
  border-radius: 10px;
  background: var(--loader-accent);
  color: #fff;
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-dual-ring-exchange-icon {
  position: relative;
  width: 31px;
  height: 18px;
}
.vl-button-dual-ring-exchange-icon i {
  position: absolute;
  top: 2px;
  width: 14px;
  height: 14px;
  border: 2px solid #fff;
  border-radius: 50%;
  animation: vl-button-dual-ring-exchange-cycle calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-button-dual-ring-exchange-icon i:first-child { left: 0; }
.vl-button-dual-ring-exchange-icon i:last-child { right: 0; animation-delay: .28s; }
@keyframes vl-button-dual-ring-exchange-cycle {
  0%, 100% { transform: scale(.62); opacity: .35; }
  50% { transform: scale(1); opacity: 1; }
}`
  }
];
