export const textPack4LoadersA = [
  {
    id: 'text-ribbon-sweep',
    name: 'Ribbon Sweep Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A narrow luminous ribbon travels across a quiet status word without moving the text itself.',
    markup: `<div class="vl-text-ribbon-sweep" role="status" aria-label="Loading content"><span data-text="LOADING" aria-hidden="true">LOADING</span></div>`,
    css: `.vl-text-ribbon-sweep {
  display: grid;
  place-items: center;
  min-width: 176px;
  min-height: 52px;
  overflow: hidden;
}
.vl-text-ribbon-sweep span {
  position: relative;
  color: color-mix(in srgb, var(--loader-accent) 30%, transparent);
  font: 900 20px/1.2 system-ui, sans-serif;
  letter-spacing: .14em;
}
.vl-text-ribbon-sweep span::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: transparent;
  background: linear-gradient(105deg, transparent 30%, var(--loader-accent) 46%, var(--loader-accent) 54%, transparent 70%);
  background-size: 260% 100%;
  background-position: 140% 0;
  background-clip: text;
  -webkit-background-clip: text;
  animation: vl-text-ribbon-sweep calc(var(--loader-speed) * 1.55) ease-in-out infinite;
}
@keyframes vl-text-ribbon-sweep {
  0%, 12% { background-position: 140% 0; }
  78%, 100% { background-position: -140% 0; }
}`
  },
  {
    id: 'text-barcode-reveal',
    name: 'Barcode Reveal Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Moving barcode stripes progressively resolve a compact indexing label.',
    markup: `<div class="vl-text-barcode-reveal" role="status" aria-label="Indexing data"><span data-text="INDEXING" aria-hidden="true">INDEXING</span></div>`,
    css: `.vl-text-barcode-reveal {
  display: grid;
  place-items: center;
  min-width: 180px;
  min-height: 52px;
}
.vl-text-barcode-reveal span {
  position: relative;
  color: color-mix(in srgb, var(--loader-accent) 24%, transparent);
  font: 900 20px/1.2 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  letter-spacing: .1em;
}
.vl-text-barcode-reveal span::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: transparent;
  background: repeating-linear-gradient(90deg, var(--loader-accent) 0 2px, transparent 2px 5px, var(--loader-accent) 5px 6px, transparent 6px 10px);
  background-size: 40px 100%;
  background-position: 0 0;
  background-clip: text;
  -webkit-background-clip: text;
  animation: vl-text-barcode-reveal calc(var(--loader-speed) * 1.35) linear infinite;
}
@keyframes vl-text-barcode-reveal {
  to { background-position: 40px 0; }
}`
  },
  {
    id: 'text-phase-shift',
    name: 'Phase Shift Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Upper and lower halves slide in opposite directions before locking back into phase.',
    markup: `<div class="vl-text-phase-shift" role="status" aria-label="Phasing content"><span class="vl-phase-top" aria-hidden="true">PHASING</span><span class="vl-phase-bottom" aria-hidden="true">PHASING</span></div>`,
    css: `.vl-text-phase-shift {
  position: relative;
  width: 178px;
  height: 52px;
  color: var(--loader-accent);
  font: 900 20px/52px system-ui, sans-serif;
  letter-spacing: .12em;
  text-align: center;
}
.vl-text-phase-shift span {
  position: absolute;
  inset: 0;
}
.vl-text-phase-shift .vl-phase-top {
  clip-path: inset(0 0 50% 0);
  animation: vl-text-phase-top calc(var(--loader-speed) * 1.4) ease-in-out infinite;
}
.vl-text-phase-shift .vl-phase-bottom {
  clip-path: inset(50% 0 0 0);
  animation: vl-text-phase-bottom calc(var(--loader-speed) * 1.4) ease-in-out infinite;
}
@keyframes vl-text-phase-top {
  0%, 100% { transform: translateX(0); opacity: 1; }
  45% { transform: translateX(18px); opacity: .45; }
}
@keyframes vl-text-phase-bottom {
  0%, 100% { transform: translateX(0); opacity: 1; }
  45% { transform: translateX(-18px); opacity: .45; }
}`
  },
  {
    id: 'text-constellation-letters',
    name: 'Constellation Letters',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Letters light up like connected stars along a restrained status path.',
    markup: `<div class="vl-text-constellation" role="status" aria-label="Synchronising"><div aria-hidden="true"><span>S</span><span>Y</span><span>N</span><span>C</span></div></div>`,
    css: `.vl-text-constellation {
  display: grid;
  place-items: center;
  min-width: 180px;
  min-height: 58px;
}
.vl-text-constellation > div {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 146px;
  color: color-mix(in srgb, var(--loader-accent) 42%, transparent);
  font: 900 20px/1 system-ui, sans-serif;
  letter-spacing: .04em;
}
.vl-text-constellation > div::before {
  content: '';
  position: absolute;
  left: 8px;
  right: 8px;
  top: 50%;
  height: 1px;
  background: color-mix(in srgb, var(--loader-accent) 30%, transparent);
  transform: translateY(-50%);
}
.vl-text-constellation span {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 7%, transparent);
  animation: vl-text-constellation calc(var(--loader-speed) * 1.6) ease-in-out infinite;
}
.vl-text-constellation span:nth-child(2) { animation-delay: calc(var(--loader-speed) * .18); }
.vl-text-constellation span:nth-child(3) { animation-delay: calc(var(--loader-speed) * .36); }
.vl-text-constellation span:nth-child(4) { animation-delay: calc(var(--loader-speed) * .54); }
@keyframes vl-text-constellation {
  0%, 100% { color: color-mix(in srgb, var(--loader-accent) 35%, transparent); box-shadow: 0 0 0 0 transparent; transform: scale(.88); }
  45% { color: var(--loader-accent); box-shadow: 0 0 0 5px color-mix(in srgb, var(--loader-accent) 12%, transparent), 0 0 14px color-mix(in srgb, var(--loader-accent) 55%, transparent); transform: scale(1); }
}`
  },
  {
    id: 'text-tracking-compression',
    name: 'Tracking Compression Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Wide letter spacing compresses into a focused processing word and releases again.',
    markup: `<div class="vl-text-tracking-compression" role="status" aria-label="Processing"><span aria-hidden="true">PROCESSING</span></div>`,
    css: `.vl-text-tracking-compression {
  display: grid;
  place-items: center;
  min-width: 198px;
  min-height: 54px;
  overflow: hidden;
}
.vl-text-tracking-compression span {
  color: var(--loader-accent);
  font: 850 17px/1.2 system-ui, sans-serif;
  white-space: nowrap;
  animation: vl-text-tracking-compression calc(var(--loader-speed) * 1.75) cubic-bezier(.45, 0, .25, 1) infinite;
}
@keyframes vl-text-tracking-compression {
  0%, 100% { letter-spacing: .34em; opacity: .38; transform: scaleX(.92); }
  48%, 58% { letter-spacing: .07em; opacity: 1; transform: scaleX(1); }
}`
  }
];
