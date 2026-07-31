export const textPack3LoadersB = [
  {
    id: 'text-spotlight-pass',
    name: 'Spotlight Pass Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A circular highlight sweeps across muted text like a moving inspection light.',
    markup: `<div class="vl-text-spotlight-pass" role="status" aria-label="Scanning content"><span aria-hidden="true">SCANNING</span></div>`,
    css: `.vl-text-spotlight-pass {
  min-width: 184px;
  min-height: 50px;
  display: grid;
  place-items: center;
}
.vl-text-spotlight-pass span {
  color: transparent;
  background-color: color-mix(in srgb, var(--loader-accent) 24%, transparent);
  background-image: radial-gradient(circle, var(--loader-accent) 0 18%, transparent 58%);
  background-size: 76px 100%;
  background-repeat: no-repeat;
  background-position: -76px 50%;
  background-clip: text;
  -webkit-background-clip: text;
  font: 900 21px/1 system-ui, sans-serif;
  letter-spacing: .12em;
  animation: vl-text-spotlight-pass calc(var(--loader-speed) * 1.75) ease-in-out infinite;
}
@keyframes vl-text-spotlight-pass {
  0%, 100% { background-position: -76px 50%; filter: drop-shadow(0 0 0 transparent); }
  50% { background-position: calc(100% + 76px) 50%; filter: drop-shadow(0 0 7px color-mix(in srgb, var(--loader-accent) 46%, transparent)); }
}`
  },
  {
    id: 'text-accordion-fold',
    name: 'Accordion Fold Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Letters fold open in sequence around their vertical axes, then settle flat.',
    markup: `<div class="vl-text-accordion-fold" role="status" aria-label="Opening workspace"><span aria-hidden="true">O</span><span aria-hidden="true">P</span><span aria-hidden="true">E</span><span aria-hidden="true">N</span><span aria-hidden="true">I</span><span aria-hidden="true">N</span><span aria-hidden="true">G</span></div>`,
    css: `.vl-text-accordion-fold {
  min-height: 52px;
  display: inline-flex;
  align-items: center;
  perspective: 420px;
  color: var(--loader-accent);
  font: 900 20px/1 system-ui, sans-serif;
  letter-spacing: .03em;
}
.vl-text-accordion-fold span {
  display: inline-block;
  transform-origin: left center;
  animation: vl-text-accordion-fold calc(var(--loader-speed) * 1.65) ease-in-out infinite;
}
.vl-text-accordion-fold span:nth-child(2) { animation-delay: .07s; }
.vl-text-accordion-fold span:nth-child(3) { animation-delay: .14s; }
.vl-text-accordion-fold span:nth-child(4) { animation-delay: .21s; }
.vl-text-accordion-fold span:nth-child(5) { animation-delay: .28s; }
.vl-text-accordion-fold span:nth-child(6) { animation-delay: .35s; }
.vl-text-accordion-fold span:nth-child(7) { animation-delay: .42s; }
@keyframes vl-text-accordion-fold {
  0%, 100% { opacity: .25; transform: rotateY(82deg) translateX(-3px); }
  42%, 68% { opacity: 1; transform: rotateY(0) translateX(0); }
}`
  },
  {
    id: 'text-pulse-track',
    name: 'Pulse Track Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A small pulse races beneath a stable status label along a bounded track.',
    markup: `<div class="vl-text-pulse-track" role="status" aria-label="Tracking progress"><span aria-hidden="true">TRACKING</span><i aria-hidden="true"></i></div>`,
    css: `.vl-text-pulse-track {
  position: relative;
  min-width: 174px;
  min-height: 54px;
  display: grid;
  place-items: center;
  color: var(--loader-accent);
}
.vl-text-pulse-track span {
  font: 850 20px/1 system-ui, sans-serif;
  letter-spacing: .11em;
}
.vl-text-pulse-track::after {
  content: '';
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 9px;
  height: 2px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 22%, transparent);
}
.vl-text-pulse-track i {
  position: absolute;
  z-index: 2;
  bottom: 6px;
  left: 12px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 10px currentColor;
  animation: vl-text-pulse-track calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
@keyframes vl-text-pulse-track {
  0%, 100% { transform: translateX(0) scale(.75); opacity: .45; }
  50% { transform: translateX(142px) scale(1.18); opacity: 1; }
}`
  },
  {
    id: 'text-chromatic-split',
    name: 'Chromatic Split Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Two translucent accent echoes separate and reunite around a crisp central label.',
    markup: `<div class="vl-text-chromatic-split" role="status" aria-label="Synchronising channels"><span aria-hidden="true" data-text="SYNCING">SYNCING</span></div>`,
    css: `.vl-text-chromatic-split {
  min-width: 176px;
  min-height: 50px;
  display: grid;
  place-items: center;
}
.vl-text-chromatic-split span {
  position: relative;
  color: var(--loader-accent);
  font: 900 21px/1 system-ui, sans-serif;
  letter-spacing: .12em;
}
.vl-text-chromatic-split span::before,
.vl-text-chromatic-split span::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: var(--loader-accent);
  opacity: .28;
  pointer-events: none;
}
.vl-text-chromatic-split span::before { animation: vl-text-chromatic-left calc(var(--loader-speed) * 1.25) ease-in-out infinite; }
.vl-text-chromatic-split span::after { animation: vl-text-chromatic-right calc(var(--loader-speed) * 1.25) ease-in-out infinite; }
@keyframes vl-text-chromatic-left {
  0%, 100% { transform: translate(0); clip-path: inset(0 0 0 0); }
  50% { transform: translate(-5px, 2px); clip-path: inset(0 0 48% 0); }
}
@keyframes vl-text-chromatic-right {
  0%, 100% { transform: translate(0); clip-path: inset(0 0 0 0); }
  50% { transform: translate(5px, -2px); clip-path: inset(48% 0 0 0); }
}`
  },
  {
    id: 'text-curtain-slices',
    name: 'Curtain Slices Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Alternating letter slices slide into alignment to reveal a complete status word.',
    markup: `<div class="vl-text-curtain-slices" role="status" aria-label="Revealing result"><span aria-hidden="true">R</span><span aria-hidden="true">E</span><span aria-hidden="true">V</span><span aria-hidden="true">E</span><span aria-hidden="true">A</span><span aria-hidden="true">L</span><span aria-hidden="true">I</span><span aria-hidden="true">N</span><span aria-hidden="true">G</span></div>`,
    css: `.vl-text-curtain-slices {
  min-height: 52px;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  color: var(--loader-accent);
  font: 900 19px/1 system-ui, sans-serif;
  letter-spacing: .04em;
}
.vl-text-curtain-slices span {
  display: inline-block;
  animation: vl-text-curtain-odd calc(var(--loader-speed) * 1.55) cubic-bezier(.45,0,.2,1) infinite;
}
.vl-text-curtain-slices span:nth-child(even) {
  animation-name: vl-text-curtain-even;
}
@keyframes vl-text-curtain-odd {
  0%, 100% { opacity: .2; transform: translateY(-18px); clip-path: inset(0 0 55% 0); }
  44%, 68% { opacity: 1; transform: translateY(0); clip-path: inset(0 0 0 0); }
}
@keyframes vl-text-curtain-even {
  0%, 100% { opacity: .2; transform: translateY(18px); clip-path: inset(55% 0 0 0); }
  44%, 68% { opacity: 1; transform: translateY(0); clip-path: inset(0 0 0 0); }
}`
  }
];