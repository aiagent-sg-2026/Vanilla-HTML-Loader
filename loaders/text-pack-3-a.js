export const textPack3LoadersA = [
  {
    id: 'text-ink-fill',
    name: 'Ink Fill Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A liquid-like accent fill rises through the word while the outline remains readable.',
    markup: `<div class="vl-text-ink-fill" role="status" aria-label="Loading content"><span aria-hidden="true" data-text="LOADING">LOADING</span></div>`,
    css: `.vl-text-ink-fill {
  min-width: 174px;
  min-height: 48px;
  display: grid;
  place-items: center;
}
.vl-text-ink-fill span {
  position: relative;
  color: color-mix(in srgb, var(--loader-accent) 24%, transparent);
  -webkit-text-stroke: 1px color-mix(in srgb, var(--loader-accent) 58%, transparent);
  font: 900 23px/1 system-ui, sans-serif;
  letter-spacing: .12em;
}
.vl-text-ink-fill span::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: var(--loader-accent);
  -webkit-text-stroke: 0;
  clip-path: inset(100% 0 0 0);
  animation: vl-text-ink-fill calc(var(--loader-speed) * 1.8) ease-in-out infinite;
}
@keyframes vl-text-ink-fill {
  0%, 12% { clip-path: inset(100% 0 0 0); }
  52%, 72% { clip-path: inset(0 0 0 0); }
  100% { clip-path: inset(0 0 100% 0); }
}`
  },
  {
    id: 'text-ladder-rise',
    name: 'Ladder Rise Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Letters climb upward one step at a time, creating a structured progress rhythm.',
    markup: `<div class="vl-text-ladder-rise" role="status" aria-label="Building response"><span aria-hidden="true">B</span><span aria-hidden="true">U</span><span aria-hidden="true">I</span><span aria-hidden="true">L</span><span aria-hidden="true">D</span><span aria-hidden="true">I</span><span aria-hidden="true">N</span><span aria-hidden="true">G</span></div>`,
    css: `.vl-text-ladder-rise {
  min-height: 52px;
  display: inline-flex;
  align-items: flex-end;
  gap: 2px;
  color: var(--loader-accent);
  font: 850 19px/1 system-ui, sans-serif;
  letter-spacing: .04em;
}
.vl-text-ladder-rise span {
  display: inline-block;
  animation: vl-text-ladder-rise calc(var(--loader-speed) * 1.55) cubic-bezier(.45,0,.2,1) infinite;
}
.vl-text-ladder-rise span:nth-child(2) { animation-delay: .07s; }
.vl-text-ladder-rise span:nth-child(3) { animation-delay: .14s; }
.vl-text-ladder-rise span:nth-child(4) { animation-delay: .21s; }
.vl-text-ladder-rise span:nth-child(5) { animation-delay: .28s; }
.vl-text-ladder-rise span:nth-child(6) { animation-delay: .35s; }
.vl-text-ladder-rise span:nth-child(7) { animation-delay: .42s; }
.vl-text-ladder-rise span:nth-child(8) { animation-delay: .49s; }
@keyframes vl-text-ladder-rise {
  0%, 100% { transform: translateY(8px); opacity: .3; }
  38%, 62% { transform: translateY(-7px); opacity: 1; }
}`
  },
  {
    id: 'text-signal-sweep',
    name: 'Signal Sweep Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A signal-strength pulse travels across compact glyph blocks from left to right.',
    markup: `<div class="vl-text-signal-sweep" role="status" aria-label="Receiving data"><span aria-hidden="true">R</span><span aria-hidden="true">E</span><span aria-hidden="true">C</span><span aria-hidden="true">E</span><span aria-hidden="true">I</span><span aria-hidden="true">V</span><span aria-hidden="true">I</span><span aria-hidden="true">N</span><span aria-hidden="true">G</span></div>`,
    css: `.vl-text-signal-sweep {
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  gap: 1px;
  color: var(--loader-accent);
  font: 900 18px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .04em;
}
.vl-text-signal-sweep span {
  opacity: .2;
  transform: scaleY(.74);
  animation: vl-text-signal-sweep calc(var(--loader-speed) * 1.4) ease-in-out infinite;
}
.vl-text-signal-sweep span:nth-child(2) { animation-delay: .06s; }
.vl-text-signal-sweep span:nth-child(3) { animation-delay: .12s; }
.vl-text-signal-sweep span:nth-child(4) { animation-delay: .18s; }
.vl-text-signal-sweep span:nth-child(5) { animation-delay: .24s; }
.vl-text-signal-sweep span:nth-child(6) { animation-delay: .30s; }
.vl-text-signal-sweep span:nth-child(7) { animation-delay: .36s; }
.vl-text-signal-sweep span:nth-child(8) { animation-delay: .42s; }
.vl-text-signal-sweep span:nth-child(9) { animation-delay: .48s; }
@keyframes vl-text-signal-sweep {
  0%, 100% { opacity: .2; transform: scaleY(.74); }
  42%, 58% { opacity: 1; transform: scaleY(1.28); text-shadow: 0 0 10px currentColor; }
}`
  },
  {
    id: 'text-mirror-reflection',
    name: 'Mirror Reflection Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A soft reflection glides beneath the label for a polished dashboard loading state.',
    markup: `<div class="vl-text-mirror-reflection" role="status" aria-label="Preparing preview"><span aria-hidden="true" data-text="PREPARING">PREPARING</span></div>`,
    css: `.vl-text-mirror-reflection {
  min-width: 182px;
  min-height: 60px;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.vl-text-mirror-reflection span {
  position: relative;
  color: var(--loader-accent);
  font: 850 20px/1 system-ui, sans-serif;
  letter-spacing: .1em;
}
.vl-text-mirror-reflection span::after {
  content: attr(data-text);
  position: absolute;
  top: 24px;
  left: 0;
  width: 100%;
  color: var(--loader-accent);
  opacity: .28;
  transform: scaleY(-1);
  mask-image: linear-gradient(to bottom, rgba(0,0,0,.7), transparent 78%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,.7), transparent 78%);
  animation: vl-text-mirror-reflection calc(var(--loader-speed) * 1.7) ease-in-out infinite;
}
@keyframes vl-text-mirror-reflection {
  0%, 100% { opacity: .1; filter: blur(1.5px); transform: scaleY(-1) translateX(-5px); }
  50% { opacity: .42; filter: blur(0); transform: scaleY(-1) translateX(5px); }
}`
  },
  {
    id: 'text-data-scramble',
    name: 'Data Scramble Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Binary fragments phase behind a stable status word to suggest live decoding.',
    markup: `<div class="vl-text-data-scramble" role="status" aria-label="Decoding data"><span class="vl-text-data-main" aria-hidden="true">DECODING</span><span class="vl-text-data-noise" aria-hidden="true">01011010</span></div>`,
    css: `.vl-text-data-scramble {
  position: relative;
  min-width: 180px;
  min-height: 50px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 8px;
}
.vl-text-data-main {
  position: relative;
  z-index: 2;
  color: var(--loader-accent);
  font: 900 20px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .09em;
}
.vl-text-data-noise {
  position: absolute;
  color: var(--loader-accent);
  opacity: .18;
  font: 700 13px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .22em;
  animation: vl-text-data-scramble calc(var(--loader-speed) * 1.25) steps(5,end) infinite;
}
@keyframes vl-text-data-scramble {
  0% { transform: translate(-12px,-10px); clip-path: inset(0 0 70% 0); }
  25% { transform: translate(10px,7px); clip-path: inset(25% 0 38% 0); }
  50% { transform: translate(-5px,1px); clip-path: inset(48% 0 18% 0); }
  75% { transform: translate(7px,-5px); clip-path: inset(68% 0 0 0); }
  100% { transform: translate(-12px,-10px); clip-path: inset(0 0 70% 0); }
}`
  }
];