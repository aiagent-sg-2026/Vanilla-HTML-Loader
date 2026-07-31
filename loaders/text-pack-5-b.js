export const textPack5LoadersB = [
  {
    id: 'text-cursor-chase',
    name: 'Cursor Chase Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A compact caret races beneath the word and pauses at each character.',
    markup: `<div class="vl-text-cursor-chase" role="status" aria-label="Loading"><span aria-hidden="true">LOADING</span></div>`,
    css: `.vl-text-cursor-chase {
  position: relative;
  width: 178px;
  min-height: 48px;
  display: grid;
  place-items: center;
  color: var(--loader-accent);
  font: 850 19px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .08em;
}
.vl-text-cursor-chase span { position: relative; z-index: 1; }
.vl-text-cursor-chase::after {
  content: '';
  position: absolute;
  left: 27px;
  top: 35px;
  width: 15px;
  height: 2px;
  border-radius: 999px;
  background: var(--loader-accent);
  box-shadow: 0 0 7px color-mix(in srgb, var(--loader-accent) 72%, transparent);
  animation: vl-text-cursor-chase calc(var(--loader-speed) * 1.55) steps(7, end) infinite;
}
@keyframes vl-text-cursor-chase {
  0%, 8% { transform: translateX(0); opacity: .45; }
  78% { transform: translateX(108px); opacity: 1; }
  100% { transform: translateX(108px); opacity: 0; }
}`
  },
  {
    id: 'text-spectrum-bands',
    name: 'Spectrum Bands Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Layered horizontal bands drift through the text with changing intensity.',
    markup: `<div class="vl-text-spectrum-bands" role="status" aria-label="Loading"><span aria-hidden="true">RENDERING</span></div>`,
    css: `.vl-text-spectrum-bands {
  min-width: 184px;
  min-height: 48px;
  display: grid;
  place-items: center;
}
.vl-text-spectrum-bands span {
  color: transparent;
  background: repeating-linear-gradient(
    0deg,
    color-mix(in srgb, var(--loader-accent) 24%, transparent) 0 4px,
    var(--loader-accent) 4px 8px,
    color-mix(in srgb, var(--loader-accent) 50%, transparent) 8px 12px
  );
  background-size: 100% 36px;
  background-clip: text;
  -webkit-background-clip: text;
  font: 900 19px/1 system-ui, sans-serif;
  letter-spacing: .07em;
  animation: vl-text-spectrum-bands calc(var(--loader-speed) * 1.25) linear infinite;
}
@keyframes vl-text-spectrum-bands {
  from { background-position: 0 -36px; }
  to { background-position: 0 36px; }
}`
  },
  {
    id: 'text-gravity-drop',
    name: 'Gravity Drop Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Letters drop into place with a restrained rebound before resetting.',
    markup: `<div class="vl-text-gravity-drop" role="status" aria-label="Loading"><span aria-hidden="true"><i>P</i><i>E</i><i>N</i><i>D</i><i>I</i><i>N</i><i>G</i></span></div>`,
    css: `.vl-text-gravity-drop {
  min-width: 178px;
  min-height: 52px;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.vl-text-gravity-drop span {
  display: inline-flex;
  gap: 1px;
  color: var(--loader-accent);
  font: 900 19px/1 system-ui, sans-serif;
  letter-spacing: .05em;
}
.vl-text-gravity-drop i {
  display: inline-block;
  font-style: normal;
  animation: vl-text-gravity-drop calc(var(--loader-speed) * 1.55) cubic-bezier(.22,.85,.32,1.18) infinite;
}
.vl-text-gravity-drop i:nth-child(2) { animation-delay: .08s; }
.vl-text-gravity-drop i:nth-child(3) { animation-delay: .16s; }
.vl-text-gravity-drop i:nth-child(4) { animation-delay: .24s; }
.vl-text-gravity-drop i:nth-child(5) { animation-delay: .32s; }
.vl-text-gravity-drop i:nth-child(6) { animation-delay: .40s; }
.vl-text-gravity-drop i:nth-child(7) { animation-delay: .48s; }
@keyframes vl-text-gravity-drop {
  0%, 18% { opacity: 0; transform: translateY(-28px) scaleY(.86); }
  48% { opacity: 1; transform: translateY(3px) scaleY(1.08); }
  62%, 78% { opacity: 1; transform: translateY(0) scaleY(1); }
  100% { opacity: 0; transform: translateY(18px) scaleY(.92); }
}`
  },
  {
    id: 'text-dial-sweep',
    name: 'Dial Sweep Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A rotating dial marker circles the status while the text gently brightens.',
    markup: `<div class="vl-text-dial-sweep" role="status" aria-label="Loading"><span aria-hidden="true">CALIBRATING</span></div>`,
    css: `.vl-text-dial-sweep {
  position: relative;
  width: 188px;
  min-height: 52px;
  display: grid;
  place-items: center;
  color: color-mix(in srgb, var(--loader-accent) 58%, transparent);
  font: 850 16px/1 system-ui, sans-serif;
  letter-spacing: .08em;
  animation: vl-text-dial-label calc(var(--loader-speed) * 1.7) ease-in-out infinite;
}
.vl-text-dial-sweep::before {
  content: '';
  position: absolute;
  inset: 6px 14px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, transparent);
  border-radius: 999px;
}
.vl-text-dial-sweep::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 5px;
  width: 3px;
  height: 10px;
  border-radius: 999px;
  background: var(--loader-accent);
  transform-origin: 50% 21px;
  box-shadow: 0 0 7px color-mix(in srgb, var(--loader-accent) 68%, transparent);
  animation: vl-text-dial-sweep calc(var(--loader-speed) * 1.7) linear infinite;
}
@keyframes vl-text-dial-sweep { to { transform: rotate(360deg); } }
@keyframes vl-text-dial-label {
  0%, 100% { color: color-mix(in srgb, var(--loader-accent) 45%, transparent); }
  50% { color: var(--loader-accent); text-shadow: 0 0 6px color-mix(in srgb, var(--loader-accent) 42%, transparent); }
}`
  },
  {
    id: 'text-stitch-pulse',
    name: 'Stitch Pulse Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Dashed stitch-like highlights travel across outlined loading text.',
    markup: `<div class="vl-text-stitch-pulse" role="status" aria-label="Loading"><span aria-hidden="true">STITCHING</span></div>`,
    css: `.vl-text-stitch-pulse {
  min-width: 184px;
  min-height: 48px;
  display: grid;
  place-items: center;
}
.vl-text-stitch-pulse span {
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in srgb, var(--loader-accent) 45%, transparent);
  background: repeating-linear-gradient(
    90deg,
    transparent 0 7px,
    var(--loader-accent) 7px 12px,
    transparent 12px 19px
  );
  background-size: 76px 100%;
  background-clip: text;
  -webkit-background-clip: text;
  font: 900 19px/1 system-ui, sans-serif;
  letter-spacing: .06em;
  animation: vl-text-stitch-pulse calc(var(--loader-speed) * 1.2) linear infinite;
}
@keyframes vl-text-stitch-pulse {
  from { background-position: -76px 0; }
  to { background-position: 76px 0; }
}`
  }
];
