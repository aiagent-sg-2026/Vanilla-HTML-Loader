export const textPack2LoadersB = [
  {
    id: 'text-compass-letters',
    name: 'Compass Letters',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Letters rotate through quarter-turn compass positions for navigation, routing, and lookup states.',
    markup: `<div class="vl-text-compass" role="status" aria-label="Routing request">
  <span aria-hidden="true"><i>R</i><i>O</i><i>U</i><i>T</i><i>I</i><i>N</i><i>G</i></span>
</div>`,
    css: `.vl-text-compass {
  min-width: 184px;
  min-height: 52px;
  display: grid;
  place-items: center;
  color: var(--loader-accent);
}
.vl-text-compass span { display: inline-flex; gap: 3px; perspective: 360px; }
.vl-text-compass i {
  width: 19px;
  height: 25px;
  display: grid;
  place-items: center;
  border-radius: 5px;
  background: color-mix(in srgb, var(--loader-accent) 8%, #fff);
  font: 900 15px/1 system-ui, sans-serif;
  font-style: normal;
  transform-origin: center;
  animation: vl-text-compass calc(var(--loader-speed) * 1.6) ease-in-out infinite;
}
.vl-text-compass i:nth-child(2) { animation-delay: .08s; }
.vl-text-compass i:nth-child(3) { animation-delay: .16s; }
.vl-text-compass i:nth-child(4) { animation-delay: .24s; }
.vl-text-compass i:nth-child(5) { animation-delay: .32s; }
.vl-text-compass i:nth-child(6) { animation-delay: .40s; }
.vl-text-compass i:nth-child(7) { animation-delay: .48s; }
@keyframes vl-text-compass {
  0%, 100% { transform: rotateY(0deg) rotateZ(0deg); opacity: .42; }
  35% { transform: rotateY(0deg) rotateZ(90deg); opacity: .72; }
  65% { transform: rotateY(180deg) rotateZ(90deg); opacity: 1; }
}`
  },
  {
    id: 'text-beacon-outline',
    name: 'Beacon Outline Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Soft outline echoes expand from a status word like a beacon without obscuring the readable center label.',
    markup: `<div class="vl-text-beacon" role="status" aria-label="Broadcasting status">
  <span data-text="BROADCAST" aria-hidden="true">BROADCAST</span>
</div>`,
    css: `.vl-text-beacon {
  min-width: 205px;
  min-height: 58px;
  display: grid;
  place-items: center;
  color: var(--loader-accent);
}
.vl-text-beacon span {
  position: relative;
  z-index: 0;
  font: 900 18px/1 system-ui, sans-serif;
  letter-spacing: .11em;
}
.vl-text-beacon span::before,
.vl-text-beacon span::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  z-index: -1;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in srgb, var(--loader-accent) 55%, transparent);
  animation: vl-text-beacon calc(var(--loader-speed) * 1.8) ease-out infinite;
}
.vl-text-beacon span::after { animation-delay: calc(var(--loader-speed) * .6); }
@keyframes vl-text-beacon {
  0% { transform: scale(1); opacity: .65; }
  100% { transform: scale(1.22); opacity: 0; }
}`
  },
  {
    id: 'text-counter-ticker',
    name: 'Counter Ticker Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Two mechanical digit columns roll through progress values for loading, analysis, and calculation states.',
    markup: `<div class="vl-text-counter" role="status" aria-label="Calculating progress">
  <span class="vl-text-counter-label" aria-hidden="true">CALCULATING</span>
  <span class="vl-text-counter-digits" aria-hidden="true">
    <i><b>0</b><b>2</b><b>4</b><b>6</b><b>8</b><b>0</b></i>
    <i><b>0</b><b>3</b><b>6</b><b>9</b><b>2</b><b>0</b></i><em>%</em>
  </span>
</div>`,
    css: `.vl-text-counter {
  min-width: 198px;
  min-height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--loader-accent);
}
.vl-text-counter-label {
  font: 850 13px/1 system-ui, sans-serif;
  letter-spacing: .09em;
}
.vl-text-counter-digits {
  height: 29px;
  display: inline-flex;
  align-items: flex-start;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, transparent);
  border-radius: 7px;
  background: color-mix(in srgb, var(--loader-accent) 7%, #fff);
  padding: 0 6px;
  font: 900 20px/29px ui-monospace, monospace;
}
.vl-text-counter-digits i { display: grid; font-style: normal; animation: vl-text-counter-a calc(var(--loader-speed) * 2.4) steps(5) infinite; }
.vl-text-counter-digits i:nth-child(2) { animation-name: vl-text-counter-b; }
.vl-text-counter-digits b { height: 29px; font: inherit; }
.vl-text-counter-digits em { font-style: normal; margin-left: 2px; }
@keyframes vl-text-counter-a { to { transform: translateY(-145px); } }
@keyframes vl-text-counter-b { to { transform: translateY(-145px); } }`
  },
  {
    id: 'text-tilt-cascade',
    name: 'Tilt Cascade Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Characters tilt forward in sequence like falling cards for queue, batch, and pipeline processing.',
    markup: `<div class="vl-text-tilt-cascade" role="status" aria-label="Processing queue">
  <span aria-hidden="true"><i>Q</i><i>U</i><i>E</i><i>U</i><i>E</i><i>D</i></span>
</div>`,
    css: `.vl-text-tilt-cascade {
  min-width: 176px;
  min-height: 54px;
  display: grid;
  place-items: center;
  color: var(--loader-accent);
  perspective: 420px;
}
.vl-text-tilt-cascade span { display: inline-flex; gap: 2px; }
.vl-text-tilt-cascade i {
  display: inline-block;
  min-width: 18px;
  font: 900 20px/1 system-ui, sans-serif;
  font-style: normal;
  text-align: center;
  transform-origin: center bottom;
  animation: vl-text-tilt-cascade calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
.vl-text-tilt-cascade i:nth-child(2) { animation-delay: .1s; }
.vl-text-tilt-cascade i:nth-child(3) { animation-delay: .2s; }
.vl-text-tilt-cascade i:nth-child(4) { animation-delay: .3s; }
.vl-text-tilt-cascade i:nth-child(5) { animation-delay: .4s; }
.vl-text-tilt-cascade i:nth-child(6) { animation-delay: .5s; }
@keyframes vl-text-tilt-cascade {
  0%, 100% { transform: rotateX(0deg) translateY(0); opacity: .38; }
  45% { transform: rotateX(-64deg) translateY(-5px); opacity: 1; }
  72% { transform: rotateX(0deg) translateY(0); opacity: .72; }
}`
  },
  {
    id: 'text-prism-shadow',
    name: 'Prism Shadow Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Layered accent shadows slide around a stable label to create a subtle prism-like processing effect.',
    markup: `<div class="vl-text-prism-shadow" role="status" aria-label="Rendering preview">
  <span aria-hidden="true">RENDERING</span>
</div>`,
    css: `.vl-text-prism-shadow {
  min-width: 198px;
  min-height: 54px;
  display: grid;
  place-items: center;
  color: var(--loader-accent);
}
.vl-text-prism-shadow span {
  font: 900 19px/1 system-ui, sans-serif;
  letter-spacing: .12em;
  animation: vl-text-prism-shadow calc(var(--loader-speed) * 1.65) ease-in-out infinite;
}
@keyframes vl-text-prism-shadow {
  0%, 100% {
    text-shadow:
      -4px 0 0 color-mix(in srgb, var(--loader-accent) 22%, transparent),
      4px 0 0 color-mix(in srgb, var(--loader-accent) 38%, transparent);
  }
  35% {
    text-shadow:
      0 -4px 0 color-mix(in srgb, var(--loader-accent) 28%, transparent),
      0 4px 0 color-mix(in srgb, var(--loader-accent) 46%, transparent);
  }
  70% {
    text-shadow:
      4px 0 0 color-mix(in srgb, var(--loader-accent) 22%, transparent),
      -4px 0 0 color-mix(in srgb, var(--loader-accent) 38%, transparent);
  }
}`
  }
];
