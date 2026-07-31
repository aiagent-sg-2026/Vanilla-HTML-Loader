export const textPack4LoadersB = [
  {
    id: 'text-halftone-pulse',
    name: 'Halftone Pulse Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A pulsing field of halftone dots gives a print-inspired loading texture.',
    markup: `<div class="vl-text-halftone-pulse" role="status" aria-label="Preparing output"><span data-text="PREPARING" aria-hidden="true">PREPARING</span></div>`,
    css: `.vl-text-halftone-pulse {
  display: grid;
  place-items: center;
  min-width: 188px;
  min-height: 54px;
}
.vl-text-halftone-pulse span {
  position: relative;
  color: color-mix(in srgb, var(--loader-accent) 24%, transparent);
  font: 900 19px/1.2 system-ui, sans-serif;
  letter-spacing: .1em;
}
.vl-text-halftone-pulse span::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: transparent;
  background: radial-gradient(circle, var(--loader-accent) 0 1.2px, transparent 1.6px);
  background-size: 7px 7px;
  background-position: center;
  background-clip: text;
  -webkit-background-clip: text;
  animation: vl-text-halftone-pulse calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
@keyframes vl-text-halftone-pulse {
  0%, 100% { background-size: 9px 9px; opacity: .38; filter: blur(.25px); }
  50% { background-size: 4px 4px; opacity: 1; filter: blur(0); }
}`
  },
  {
    id: 'text-checker-reveal',
    name: 'Checker Reveal Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A moving checker pattern reveals a status word in crisp geometric cells.',
    markup: `<div class="vl-text-checker-reveal" role="status" aria-label="Composing"><span data-text="COMPOSING" aria-hidden="true">COMPOSING</span></div>`,
    css: `.vl-text-checker-reveal {
  display: grid;
  place-items: center;
  min-width: 190px;
  min-height: 54px;
}
.vl-text-checker-reveal span {
  position: relative;
  color: color-mix(in srgb, var(--loader-accent) 22%, transparent);
  font: 900 19px/1.2 system-ui, sans-serif;
  letter-spacing: .1em;
}
.vl-text-checker-reveal span::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: transparent;
  background: conic-gradient(from 90deg, var(--loader-accent) 0 25%, transparent 0 50%, var(--loader-accent) 0 75%, transparent 0);
  background-size: 12px 12px;
  background-position: 0 0;
  background-clip: text;
  -webkit-background-clip: text;
  clip-path: inset(0 100% 0 0);
  animation: vl-text-checker-reveal calc(var(--loader-speed) * 1.7) ease-in-out infinite;
}
@keyframes vl-text-checker-reveal {
  0%, 12% { clip-path: inset(0 100% 0 0); background-position: 0 0; }
  56%, 74% { clip-path: inset(0 0 0 0); background-position: 18px 0; }
  100% { clip-path: inset(0 0 0 100%); background-position: 30px 0; }
}`
  },
  {
    id: 'text-heat-haze',
    name: 'Heat Haze Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Soft offset layers shimmer like heated air while keeping the central label readable.',
    markup: `<div class="vl-text-heat-haze" role="status" aria-label="Rendering"><span data-text="RENDERING" aria-hidden="true">RENDERING</span></div>`,
    css: `.vl-text-heat-haze {
  display: grid;
  place-items: center;
  min-width: 186px;
  min-height: 56px;
}
.vl-text-heat-haze span {
  position: relative;
  color: var(--loader-accent);
  font: 900 19px/1.2 system-ui, sans-serif;
  letter-spacing: .11em;
}
.vl-text-heat-haze span::before,
.vl-text-heat-haze span::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  pointer-events: none;
  color: color-mix(in srgb, var(--loader-accent) 45%, transparent);
}
.vl-text-heat-haze span::before {
  animation: vl-text-heat-haze-a calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-text-heat-haze span::after {
  animation: vl-text-heat-haze-b calc(var(--loader-speed) * 1.25) ease-in-out infinite reverse;
}
@keyframes vl-text-heat-haze-a {
  0%, 100% { transform: translate(-2px, 1px) skewX(-3deg); filter: blur(.8px); opacity: .2; }
  50% { transform: translate(3px, -2px) skewX(4deg); filter: blur(1.4px); opacity: .55; }
}
@keyframes vl-text-heat-haze-b {
  0%, 100% { transform: translate(2px, -1px) skewX(3deg); filter: blur(.8px); opacity: .18; }
  50% { transform: translate(-3px, 2px) skewX(-4deg); filter: blur(1.4px); opacity: .5; }
}`
  },
  {
    id: 'text-magnet-letters',
    name: 'Magnet Letters',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Separated letters pull toward alignment as though attracted by a central magnetic field.',
    markup: `<div class="vl-text-magnet-letters" role="status" aria-label="Merging"><div aria-hidden="true"><span>M</span><span>E</span><span>R</span><span>G</span><span>I</span><span>N</span><span>G</span></div></div>`,
    css: `.vl-text-magnet-letters {
  display: grid;
  place-items: center;
  min-width: 188px;
  min-height: 58px;
  overflow: hidden;
}
.vl-text-magnet-letters > div {
  display: inline-flex;
  gap: 2px;
  color: var(--loader-accent);
  font: 900 19px/1 system-ui, sans-serif;
}
.vl-text-magnet-letters span {
  display: inline-block;
  animation: vl-text-magnet-letters calc(var(--loader-speed) * 1.65) cubic-bezier(.55, -.1, .2, 1.25) infinite;
}
.vl-text-magnet-letters span:nth-child(1) { --vl-magnet-x: -30px; }
.vl-text-magnet-letters span:nth-child(2) { --vl-magnet-x: -20px; animation-delay: calc(var(--loader-speed) * .05); }
.vl-text-magnet-letters span:nth-child(3) { --vl-magnet-x: -10px; animation-delay: calc(var(--loader-speed) * .1); }
.vl-text-magnet-letters span:nth-child(4) { --vl-magnet-x: 0px; animation-delay: calc(var(--loader-speed) * .15); }
.vl-text-magnet-letters span:nth-child(5) { --vl-magnet-x: 10px; animation-delay: calc(var(--loader-speed) * .2); }
.vl-text-magnet-letters span:nth-child(6) { --vl-magnet-x: 20px; animation-delay: calc(var(--loader-speed) * .25); }
.vl-text-magnet-letters span:nth-child(7) { --vl-magnet-x: 30px; animation-delay: calc(var(--loader-speed) * .3); }
@keyframes vl-text-magnet-letters {
  0%, 100% { transform: translateX(var(--vl-magnet-x)) scale(.78); opacity: .18; }
  48%, 62% { transform: translateX(0) scale(1); opacity: 1; }
}`
  },
  {
    id: 'text-radial-iris',
    name: 'Radial Iris Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A circular iris expands from the centre to reveal the active status word.',
    markup: `<div class="vl-text-radial-iris" role="status" aria-label="Opening"><span data-text="OPENING" aria-hidden="true">OPENING</span></div>`,
    css: `.vl-text-radial-iris {
  display: grid;
  place-items: center;
  min-width: 176px;
  min-height: 56px;
}
.vl-text-radial-iris span {
  position: relative;
  color: color-mix(in srgb, var(--loader-accent) 24%, transparent);
  font: 900 20px/1.2 system-ui, sans-serif;
  letter-spacing: .13em;
}
.vl-text-radial-iris span::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: var(--loader-accent);
  clip-path: circle(0 at 50% 50%);
  animation: vl-text-radial-iris calc(var(--loader-speed) * 1.65) ease-in-out infinite;
}
@keyframes vl-text-radial-iris {
  0%, 12% { clip-path: circle(0 at 50% 50%); opacity: .4; }
  52%, 70% { clip-path: circle(75% at 50% 50%); opacity: 1; }
  100% { clip-path: circle(0 at 50% 50%); opacity: .4; }
}`
  }
];
