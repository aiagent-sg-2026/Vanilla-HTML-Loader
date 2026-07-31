export const textPack2LoadersA = [
  {
    id: 'text-letter-orbit',
    name: 'Letter Orbit',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A compact status word with two orbiting glyphs for syncing, indexing, and background analysis states.',
    markup: `<div class="vl-text-letter-orbit" role="status" aria-label="Indexing content">
  <span class="vl-text-letter-orbit-word" aria-hidden="true">INDEXING</span>
  <span class="vl-text-letter-orbit-glyph one" aria-hidden="true">I</span>
  <span class="vl-text-letter-orbit-glyph two" aria-hidden="true">O</span>
</div>`,
    css: `.vl-text-letter-orbit {
  position: relative;
  width: 178px;
  min-height: 52px;
  display: grid;
  place-items: center;
  color: var(--loader-accent);
}
.vl-text-letter-orbit-word {
  font: 900 17px/1 system-ui, sans-serif;
  letter-spacing: .12em;
}
.vl-text-letter-orbit-glyph {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;
  margin: -10px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 42%, transparent);
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 8%, #fff);
  font: 800 9px/1 system-ui, sans-serif;
  animation: vl-text-letter-orbit calc(var(--loader-speed) * 2.1) linear infinite;
}
.vl-text-letter-orbit-glyph.two { animation-delay: calc(var(--loader-speed) * -1.05); }
@keyframes vl-text-letter-orbit {
  from { transform: rotate(0deg) translateX(76px) rotate(0deg); }
  to { transform: rotate(360deg) translateX(76px) rotate(-360deg); }
}`
  },
  {
    id: 'text-neon-flicker',
    name: 'Neon Flicker Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A restrained neon-style flicker for connection checks, startup states, and system diagnostics.',
    markup: `<div class="vl-text-neon-flicker" role="status" aria-label="Connecting">
  <span aria-hidden="true">CONNECTING</span>
</div>`,
    css: `.vl-text-neon-flicker {
  min-width: 190px;
  min-height: 48px;
  display: grid;
  place-items: center;
  color: var(--loader-accent);
}
.vl-text-neon-flicker span {
  font: 900 19px/1 system-ui, sans-serif;
  letter-spacing: .1em;
  text-shadow:
    0 0 4px color-mix(in srgb, var(--loader-accent) 72%, transparent),
    0 0 12px color-mix(in srgb, var(--loader-accent) 42%, transparent);
  animation: vl-text-neon-flicker calc(var(--loader-speed) * 1.7) steps(1) infinite;
}
@keyframes vl-text-neon-flicker {
  0%, 18%, 22%, 52%, 56%, 100% { opacity: 1; filter: brightness(1); }
  19%, 21%, 53%, 55% { opacity: .34; filter: brightness(.75); }
  38% { opacity: .72; filter: brightness(1.25); }
}`
  },
  {
    id: 'text-line-build',
    name: 'Line Build Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Vertical construction lines rise first, then reveal the final status word for report and layout generation.',
    markup: `<div class="vl-text-line-build" role="status" aria-label="Building layout">
  <span class="vl-text-line-build-lines" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>
  <strong aria-hidden="true">BUILDING</strong>
</div>`,
    css: `.vl-text-line-build {
  position: relative;
  width: 184px;
  min-height: 54px;
  display: grid;
  place-items: center;
  color: var(--loader-accent);
}
.vl-text-line-build-lines {
  position: absolute;
  inset: 8px 12px;
  display: flex;
  align-items: end;
  justify-content: space-between;
}
.vl-text-line-build-lines i {
  width: 2px;
  height: 100%;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 42%, transparent);
  transform-origin: bottom;
  animation: vl-text-line-build-bar calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
.vl-text-line-build-lines i:nth-child(2n) { animation-delay: .1s; }
.vl-text-line-build-lines i:nth-child(3n) { animation-delay: .2s; }
.vl-text-line-build strong {
  font: 900 18px/1 system-ui, sans-serif;
  letter-spacing: .12em;
  animation: vl-text-line-build-word calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
@keyframes vl-text-line-build-bar {
  0%, 100% { transform: scaleY(.1); opacity: .18; }
  42%, 65% { transform: scaleY(1); opacity: .72; }
}
@keyframes vl-text-line-build-word {
  0%, 28% { opacity: 0; transform: translateY(6px); letter-spacing: .24em; }
  52%, 82% { opacity: 1; transform: translateY(0); letter-spacing: .12em; }
  100% { opacity: 0; transform: translateY(-4px); }
}`
  },
  {
    id: 'text-slot-shuffle',
    name: 'Slot Shuffle Words',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Status words cycle through a clipped slot window for multi-stage processing and import workflows.',
    markup: `<div class="vl-text-slot-shuffle" role="status" aria-label="Preparing, processing, and verifying">
  <span aria-hidden="true"><b>PREPARING</b><b>PROCESSING</b><b>VERIFYING</b><b>PREPARING</b></span>
</div>`,
    css: `.vl-text-slot-shuffle {
  width: 184px;
  height: 36px;
  overflow: hidden;
  display: grid;
  place-items: start center;
  border-block: 1px solid color-mix(in srgb, var(--loader-accent) 22%, transparent);
  color: var(--loader-accent);
}
.vl-text-slot-shuffle span {
  display: grid;
  animation: vl-text-slot-shuffle calc(var(--loader-speed) * 3.2) cubic-bezier(.65, 0, .35, 1) infinite;
}
.vl-text-slot-shuffle b {
  height: 36px;
  display: grid;
  place-items: center;
  font: 900 16px/1 system-ui, sans-serif;
  letter-spacing: .1em;
}
@keyframes vl-text-slot-shuffle {
  0%, 18% { transform: translateY(0); }
  28%, 46% { transform: translateY(-36px); }
  56%, 74% { transform: translateY(-72px); }
  84%, 100% { transform: translateY(-108px); }
}`
  },
  {
    id: 'text-morse-decode',
    name: 'Morse Decode Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Dots and dashes pulse in sequence before resolving into a readable status message.',
    markup: `<div class="vl-text-morse-decode" role="status" aria-label="Decoding signal">
  <span class="vl-text-morse-code" aria-hidden="true"><i></i><i></i><i class="dash"></i><i></i><i class="dash"></i><i></i></span>
  <strong aria-hidden="true">DECODING</strong>
</div>`,
    css: `.vl-text-morse-decode {
  min-width: 188px;
  min-height: 58px;
  display: grid;
  place-items: center;
  gap: 7px;
  color: var(--loader-accent);
}
.vl-text-morse-code { display: inline-flex; align-items: center; gap: 6px; height: 10px; }
.vl-text-morse-code i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: vl-text-morse-dot calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
.vl-text-morse-code i.dash { width: 18px; border-radius: 999px; }
.vl-text-morse-code i:nth-child(2) { animation-delay: .1s; }
.vl-text-morse-code i:nth-child(3) { animation-delay: .2s; }
.vl-text-morse-code i:nth-child(4) { animation-delay: .3s; }
.vl-text-morse-code i:nth-child(5) { animation-delay: .4s; }
.vl-text-morse-code i:nth-child(6) { animation-delay: .5s; }
.vl-text-morse-decode strong {
  font: 900 17px/1 system-ui, sans-serif;
  letter-spacing: .14em;
  animation: vl-text-morse-word calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
@keyframes vl-text-morse-dot {
  0%, 100% { opacity: .18; transform: scaleX(.72); }
  45% { opacity: 1; transform: scaleX(1); }
}
@keyframes vl-text-morse-word {
  0%, 26% { opacity: .22; filter: blur(1.5px); }
  52%, 82% { opacity: 1; filter: blur(0); }
  100% { opacity: .22; }
}`
  }
];
