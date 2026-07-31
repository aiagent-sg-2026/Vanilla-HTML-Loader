export const textPack1LoadersA = [
  {
    id: 'text-typewriter-dots',
    name: 'Typewriter Dots',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A compact status phrase with a stepped typewriter reveal and cycling ellipsis.',
    markup: `<div class="vl-text-typewriter" role="status" aria-label="Loading content"><span aria-hidden="true">Writing response<span class="vl-text-typewriter-dots">...</span></span></div>`,
    css: `.vl-text-typewriter {
  min-width: 190px;
  overflow: hidden;
  color: var(--loader-accent);
  font: 800 16px/1.3 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  white-space: nowrap;
}
.vl-text-typewriter > span {
  display: inline-block;
  width: 0;
  overflow: hidden;
  animation: vl-text-typewriter calc(var(--loader-speed) * 3.2) steps(19, end) infinite;
}
.vl-text-typewriter-dots {
  display: inline-block;
  width: 0;
  overflow: hidden;
  vertical-align: bottom;
  animation: vl-text-typewriter-dots calc(var(--loader-speed) * 1.2) steps(4, end) infinite;
}
@keyframes vl-text-typewriter {
  0%, 8% { width: 0; }
  42%, 76% { width: 190px; }
  100% { width: 0; }
}
@keyframes vl-text-typewriter-dots {
  0% { width: 0; }
  100% { width: 3ch; }
}`
  },
  {
    id: 'text-split-reveal',
    name: 'Split Reveal Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Two clipped halves slide together to reveal a processing label.',
    markup: `<div class="vl-text-split" role="status" aria-label="Processing"><span aria-hidden="true" data-text="PROCESSING">PROCESSING</span></div>`,
    css: `.vl-text-split {
  position: relative;
  width: 170px;
  height: 30px;
  color: var(--loader-accent);
  font: 900 21px/30px system-ui, sans-serif;
  letter-spacing: .08em;
  text-align: center;
}
.vl-text-split span,
.vl-text-split span::after {
  position: absolute;
  inset: 0;
  content: attr(data-text);
}
.vl-text-split span {
  clip-path: inset(0 0 50% 0);
  animation: vl-text-split-top calc(var(--loader-speed) * 1.6) ease-in-out infinite;
}
.vl-text-split span::after {
  clip-path: inset(50% 0 0 0);
  animation: vl-text-split-bottom calc(var(--loader-speed) * 1.6) ease-in-out infinite;
}
@keyframes vl-text-split-top {
  0%, 100% { transform: translateX(-18px); opacity: .28; }
  50% { transform: translateX(0); opacity: 1; }
}
@keyframes vl-text-split-bottom {
  0%, 100% { transform: translateX(18px); opacity: .28; }
  50% { transform: translateX(0); opacity: 1; }
}`
  },
  {
    id: 'text-glyph-cascade',
    name: 'Glyph Cascade',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Characters drop into place in sequence for a clean data-processing effect.',
    markup: `<div class="vl-text-glyph-cascade" role="status" aria-label="Loading"><span aria-hidden="true">L</span><span aria-hidden="true">O</span><span aria-hidden="true">A</span><span aria-hidden="true">D</span><span aria-hidden="true">I</span><span aria-hidden="true">N</span><span aria-hidden="true">G</span></div>`,
    css: `.vl-text-glyph-cascade {
  display: inline-flex;
  gap: 2px;
  min-height: 30px;
  align-items: center;
  color: var(--loader-accent);
  font: 900 20px/1 system-ui, sans-serif;
  letter-spacing: .04em;
}
.vl-text-glyph-cascade span {
  display: inline-block;
  animation: vl-text-glyph-cascade calc(var(--loader-speed) * 1.45) cubic-bezier(.2,.8,.25,1) infinite;
}
.vl-text-glyph-cascade span:nth-child(2) { animation-delay: .08s; }
.vl-text-glyph-cascade span:nth-child(3) { animation-delay: .16s; }
.vl-text-glyph-cascade span:nth-child(4) { animation-delay: .24s; }
.vl-text-glyph-cascade span:nth-child(5) { animation-delay: .32s; }
.vl-text-glyph-cascade span:nth-child(6) { animation-delay: .40s; }
.vl-text-glyph-cascade span:nth-child(7) { animation-delay: .48s; }
@keyframes vl-text-glyph-cascade {
  0%, 100% { transform: translateY(-10px) rotateX(65deg); opacity: .18; }
  42%, 62% { transform: translateY(0) rotateX(0); opacity: 1; }
}`
  },
  {
    id: 'text-underline-sweep',
    name: 'Underline Sweep',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A thin accent line sweeps beneath a stable loading message.',
    markup: `<div class="vl-text-underline" role="status" aria-label="Generating preview"><span aria-hidden="true">Generating preview</span></div>`,
    css: `.vl-text-underline {
  position: relative;
  min-width: 172px;
  padding-bottom: 9px;
  color: color-mix(in srgb, var(--loader-accent) 76%, #172033);
  font: 850 16px/1.25 system-ui, sans-serif;
  text-align: center;
}
.vl-text-underline::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 16%, transparent);
}
.vl-text-underline::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 36%;
  height: 3px;
  border-radius: 999px;
  background: var(--loader-accent);
  animation: vl-text-underline calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
@keyframes vl-text-underline {
  0% { transform: translateX(0); width: 22%; }
  50% { width: 44%; }
  100% { transform: translateX(290%); width: 22%; }
}`
  },
  {
    id: 'text-focus-cycle',
    name: 'Focus Blur Cycle',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A soft blur resolves into crisp text and fades again for subtle background work.',
    markup: `<div class="vl-text-focus" role="status" aria-label="Analysing data"><span aria-hidden="true">ANALYSING DATA</span></div>`,
    css: `.vl-text-focus {
  min-width: 190px;
  color: var(--loader-accent);
  font: 900 20px/1.2 system-ui, sans-serif;
  letter-spacing: .08em;
  text-align: center;
}
.vl-text-focus span {
  display: inline-block;
  animation: vl-text-focus calc(var(--loader-speed) * 1.8) ease-in-out infinite;
}
@keyframes vl-text-focus {
  0%, 100% { filter: blur(4px); transform: scale(.96); opacity: .24; }
  48%, 62% { filter: blur(0); transform: scale(1); opacity: 1; }
}`
  }
];
