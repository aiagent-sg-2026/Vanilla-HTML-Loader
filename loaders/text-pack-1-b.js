export const textPack1LoadersB = [
  {
    id: 'text-vertical-roll',
    name: 'Vertical Status Roll',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Status words roll vertically through a compact viewport to show staged processing.',
    markup: `<div class="vl-text-vertical-roll" role="status" aria-label="Preparing, processing, finalising"><span aria-hidden="true"><b>Preparing</b><b>Processing</b><b>Finalising</b><b>Preparing</b></span></div>`,
    css: `.vl-text-vertical-roll {
  width: 170px;
  height: 30px;
  overflow: hidden;
  color: var(--loader-accent);
  font: 850 18px/30px system-ui, sans-serif;
  text-align: center;
}
.vl-text-vertical-roll > span {
  display: grid;
  animation: vl-text-vertical-roll calc(var(--loader-speed) * 3.6) cubic-bezier(.65,0,.35,1) infinite;
}
.vl-text-vertical-roll b {
  height: 30px;
  font: inherit;
}
@keyframes vl-text-vertical-roll {
  0%, 20% { transform: translateY(0); }
  30%, 50% { transform: translateY(-30px); }
  60%, 80% { transform: translateY(-60px); }
  90%, 100% { transform: translateY(-90px); }
}`
  },
  {
    id: 'text-echo-layers',
    name: 'Echo Layers',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Layered copies drift outward and fade while the main status remains readable.',
    markup: `<div class="vl-text-echo" role="status" aria-label="Loading"><span aria-hidden="true" data-text="LOADING">LOADING</span></div>`,
    css: `.vl-text-echo {
  position: relative;
  width: 150px;
  height: 30px;
  color: var(--loader-accent);
  font: 900 20px/30px system-ui, sans-serif;
  letter-spacing: .08em;
  text-align: center;
}
.vl-text-echo span,
.vl-text-echo span::before,
.vl-text-echo span::after {
  position: absolute;
  inset: 0;
  content: attr(data-text);
}
.vl-text-echo span::before {
  animation: vl-text-echo-left calc(var(--loader-speed) * 1.5) ease-out infinite;
}
.vl-text-echo span::after {
  animation: vl-text-echo-right calc(var(--loader-speed) * 1.5) ease-out infinite;
}
@keyframes vl-text-echo-left {
  0% { transform: translateX(0); opacity: .7; }
  100% { transform: translateX(-14px); opacity: 0; }
}
@keyframes vl-text-echo-right {
  0% { transform: translateX(0); opacity: .7; }
  100% { transform: translateX(14px); opacity: 0; }
}`
  },
  {
    id: 'text-marquee-window',
    name: 'Marquee Status Window',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A restrained status message travels through a clipped horizontal window.',
    markup: `<div class="vl-text-marquee" role="status" aria-label="Synchronising workspace"><span aria-hidden="true">Synchronising workspace · Synchronising workspace</span></div>`,
    css: `.vl-text-marquee {
  width: 205px;
  height: 32px;
  overflow: hidden;
  display: flex;
  align-items: center;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 6%, transparent);
  color: var(--loader-accent);
  font: 800 13px/1 system-ui, sans-serif;
  white-space: nowrap;
}
.vl-text-marquee span {
  display: inline-block;
  padding-left: 205px;
  animation: vl-text-marquee calc(var(--loader-speed) * 4.2) linear infinite;
}
@keyframes vl-text-marquee {
  to { transform: translateX(-100%); }
}`
  },
  {
    id: 'text-bracket-pulse',
    name: 'Bracket Pulse',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Animated brackets close around a technical status word and release again.',
    markup: `<div class="vl-text-bracket" role="status" aria-label="Synchronising"><span aria-hidden="true">SYNC</span></div>`,
    css: `.vl-text-bracket {
  min-width: 142px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--loader-accent);
  font: 900 20px/1.2 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  letter-spacing: .08em;
}
.vl-text-bracket::before,
.vl-text-bracket::after {
  font-size: 25px;
  line-height: 1;
  opacity: .45;
  animation: vl-text-bracket calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
.vl-text-bracket::before { content: '['; }
.vl-text-bracket::after { content: ']'; animation-direction: reverse; }
@keyframes vl-text-bracket {
  0%, 100% { transform: translateX(-6px); opacity: .3; }
  50% { transform: translateX(0); opacity: 1; }
}`
  },
  {
    id: 'text-pixel-decode',
    name: 'Pixel Decode Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Characters resolve from blocky, blurred glyphs into a crisp final status.',
    markup: `<div class="vl-text-pixel-decode" role="status" aria-label="Decoded"><span aria-hidden="true">D</span><span aria-hidden="true">E</span><span aria-hidden="true">C</span><span aria-hidden="true">O</span><span aria-hidden="true">D</span><span aria-hidden="true">E</span><span aria-hidden="true">D</span></div>`,
    css: `.vl-text-pixel-decode {
  display: inline-flex;
  gap: 2px;
  color: var(--loader-accent);
  font: 900 20px/1.2 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  letter-spacing: .04em;
}
.vl-text-pixel-decode span {
  display: inline-block;
  min-width: .72em;
  text-align: center;
  animation: vl-text-pixel-decode calc(var(--loader-speed) * 1.55) steps(4, end) infinite;
}
.vl-text-pixel-decode span:nth-child(2) { animation-delay: .08s; }
.vl-text-pixel-decode span:nth-child(3) { animation-delay: .16s; }
.vl-text-pixel-decode span:nth-child(4) { animation-delay: .24s; }
.vl-text-pixel-decode span:nth-child(5) { animation-delay: .32s; }
.vl-text-pixel-decode span:nth-child(6) { animation-delay: .40s; }
.vl-text-pixel-decode span:nth-child(7) { animation-delay: .48s; }
@keyframes vl-text-pixel-decode {
  0%, 18% { filter: blur(3px); transform: scale(.72); opacity: .18; text-shadow: 0 0 8px currentColor; }
  48%, 70% { filter: blur(0); transform: scale(1); opacity: 1; text-shadow: none; }
  100% { filter: blur(2px); transform: scale(.82); opacity: .35; }
}`
  }
];
