export const textPack5LoadersA = [
  {
    id: 'text-perspective-tunnel',
    name: 'Perspective Tunnel Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Letters travel forward from depth and settle into a crisp loading word.',
    markup: `<div class="vl-text-perspective-tunnel" role="status" aria-label="Loading"><span aria-hidden="true"><i>L</i><i>O</i><i>A</i><i>D</i><i>I</i><i>N</i><i>G</i></span></div>`,
    css: `.vl-text-perspective-tunnel {
  min-width: 178px;
  min-height: 48px;
  display: grid;
  place-items: center;
  perspective: 240px;
}
.vl-text-perspective-tunnel span {
  display: inline-flex;
  gap: 2px;
  color: var(--loader-accent);
  font: 900 20px/1 system-ui, sans-serif;
  letter-spacing: .04em;
  transform-style: preserve-3d;
}
.vl-text-perspective-tunnel i {
  display: inline-block;
  font-style: normal;
  animation: vl-text-perspective-tunnel calc(var(--loader-speed) * 1.65) cubic-bezier(.2,.7,.25,1) infinite;
}
.vl-text-perspective-tunnel i:nth-child(2) { animation-delay: .07s; }
.vl-text-perspective-tunnel i:nth-child(3) { animation-delay: .14s; }
.vl-text-perspective-tunnel i:nth-child(4) { animation-delay: .21s; }
.vl-text-perspective-tunnel i:nth-child(5) { animation-delay: .28s; }
.vl-text-perspective-tunnel i:nth-child(6) { animation-delay: .35s; }
.vl-text-perspective-tunnel i:nth-child(7) { animation-delay: .42s; }
@keyframes vl-text-perspective-tunnel {
  0%, 18% { opacity: 0; transform: translateZ(-110px) scale(.42); filter: blur(3px); }
  48%, 72% { opacity: 1; transform: translateZ(0) scale(1); filter: blur(0); }
  100% { opacity: 0; transform: translateZ(44px) scale(1.12); filter: blur(2px); }
}`
  },
  {
    id: 'text-shadow-relay',
    name: 'Shadow Relay Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A luminous shadow passes from letter to letter like a relay signal.',
    markup: `<div class="vl-text-shadow-relay" role="status" aria-label="Loading"><span aria-hidden="true"><i>S</i><i>Y</i><i>N</i><i>C</i><i>I</i><i>N</i><i>G</i></span></div>`,
    css: `.vl-text-shadow-relay {
  min-width: 176px;
  min-height: 48px;
  display: grid;
  place-items: center;
}
.vl-text-shadow-relay span {
  display: inline-flex;
  gap: 1px;
  color: color-mix(in srgb, var(--loader-accent) 42%, transparent);
  font: 850 19px/1 system-ui, sans-serif;
  letter-spacing: .06em;
}
.vl-text-shadow-relay i {
  display: inline-block;
  font-style: normal;
  animation: vl-text-shadow-relay calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
.vl-text-shadow-relay i:nth-child(2) { animation-delay: .09s; }
.vl-text-shadow-relay i:nth-child(3) { animation-delay: .18s; }
.vl-text-shadow-relay i:nth-child(4) { animation-delay: .27s; }
.vl-text-shadow-relay i:nth-child(5) { animation-delay: .36s; }
.vl-text-shadow-relay i:nth-child(6) { animation-delay: .45s; }
.vl-text-shadow-relay i:nth-child(7) { animation-delay: .54s; }
@keyframes vl-text-shadow-relay {
  0%, 22%, 100% { color: color-mix(in srgb, var(--loader-accent) 38%, transparent); text-shadow: none; transform: translateY(0); }
  46% { color: var(--loader-accent); text-shadow: 0 0 6px var(--loader-accent), 0 7px 12px color-mix(in srgb, var(--loader-accent) 55%, transparent); transform: translateY(-3px); }
  70% { color: color-mix(in srgb, var(--loader-accent) 62%, transparent); text-shadow: 0 3px 7px color-mix(in srgb, var(--loader-accent) 35%, transparent); transform: translateY(1px); }
}`
  },
  {
    id: 'text-split-rail',
    name: 'Split Rail Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Top and bottom text halves approach on opposite rails before locking together.',
    markup: `<div class="vl-text-split-rail" role="status" aria-label="Loading" data-text="LOADING" aria-hidden="false"></div>`,
    css: `.vl-text-split-rail {
  position: relative;
  width: 178px;
  height: 48px;
  color: transparent;
  font: 900 21px/48px system-ui, sans-serif;
  letter-spacing: .08em;
  text-align: center;
  overflow: hidden;
}
.vl-text-split-rail::before,
.vl-text-split-rail::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: var(--loader-accent);
  text-align: center;
  animation: vl-text-split-rail calc(var(--loader-speed) * 1.75) cubic-bezier(.65,0,.35,1) infinite;
}
.vl-text-split-rail::before { clip-path: inset(0 0 50% 0); transform: translateX(-105%); }
.vl-text-split-rail::after { clip-path: inset(50% 0 0 0); transform: translateX(105%); animation-direction: reverse; }
@keyframes vl-text-split-rail {
  0%, 14% { transform: translateX(-105%); opacity: .2; }
  48%, 72% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(105%); opacity: .2; }
}`
  },
  {
    id: 'text-waveform-mask',
    name: 'Waveform Mask Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A repeating waveform-like highlight moves through the status text.',
    markup: `<div class="vl-text-waveform-mask" role="status" aria-label="Loading"><span aria-hidden="true">ANALYSING</span></div>`,
    css: `.vl-text-waveform-mask {
  min-width: 184px;
  min-height: 48px;
  display: grid;
  place-items: center;
}
.vl-text-waveform-mask span {
  color: transparent;
  background:
    radial-gradient(16px 13px at 8px 50%, var(--loader-accent) 0 45%, transparent 50%) 0 0 / 32px 100% repeat-x,
    linear-gradient(90deg, color-mix(in srgb, var(--loader-accent) 24%, transparent), color-mix(in srgb, var(--loader-accent) 62%, transparent));
  background-clip: text;
  -webkit-background-clip: text;
  font: 900 19px/1 system-ui, sans-serif;
  letter-spacing: .07em;
  animation: vl-text-waveform-mask calc(var(--loader-speed) * 1.4) linear infinite;
}
@keyframes vl-text-waveform-mask {
  from { background-position: -64px 0, 0 0; }
  to { background-position: 64px 0, 0 0; }
}`
  },
  {
    id: 'text-flip-tile',
    name: 'Flip Tile Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Individual character tiles flip forward in sequence like a compact departure board.',
    markup: `<div class="vl-text-flip-tile" role="status" aria-label="Loading"><span aria-hidden="true"><i>L</i><i>O</i><i>A</i><i>D</i><i>I</i><i>N</i><i>G</i></span></div>`,
    css: `.vl-text-flip-tile {
  min-width: 190px;
  min-height: 52px;
  display: grid;
  place-items: center;
  perspective: 420px;
}
.vl-text-flip-tile span { display: inline-flex; gap: 3px; }
.vl-text-flip-tile i {
  width: 21px;
  height: 28px;
  display: grid;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--loader-accent) 9%, transparent);
  color: var(--loader-accent);
  font: 850 15px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  font-style: normal;
  transform-origin: center bottom;
  backface-visibility: hidden;
  animation: vl-text-flip-tile calc(var(--loader-speed) * 1.65) cubic-bezier(.4,0,.2,1) infinite;
}
.vl-text-flip-tile i:nth-child(2) { animation-delay: .08s; }
.vl-text-flip-tile i:nth-child(3) { animation-delay: .16s; }
.vl-text-flip-tile i:nth-child(4) { animation-delay: .24s; }
.vl-text-flip-tile i:nth-child(5) { animation-delay: .32s; }
.vl-text-flip-tile i:nth-child(6) { animation-delay: .40s; }
.vl-text-flip-tile i:nth-child(7) { animation-delay: .48s; }
@keyframes vl-text-flip-tile {
  0%, 18% { opacity: .35; transform: rotateX(86deg) translateY(-5px); }
  46%, 72% { opacity: 1; transform: rotateX(0) translateY(0); }
  100% { opacity: .35; transform: rotateX(-86deg) translateY(5px); }
}`
  }
];
