export const barPack2LoadersA = [
  {
    id: 'bar-stacked-wave',
    name: 'Stacked Wave Bars',
    category: 'Bars',
    tech: 'CSS',
    description: 'Three synchronized rows of compact bars for analytics, streaming, and background processing states.',
    markup: `<div class="vl-bar-stacked-wave" aria-hidden="true">
  <span><i></i><i></i><i></i><i></i><i></i></span>
  <span><i></i><i></i><i></i><i></i><i></i></span>
  <span><i></i><i></i><i></i><i></i><i></i></span>
</div>`,
    css: `.vl-bar-stacked-wave {
  width: 150px;
  display: grid;
  gap: 5px;
}
.vl-bar-stacked-wave > span {
  height: 7px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.vl-bar-stacked-wave i {
  width: 18px;
  height: 5px;
  border-radius: 99px;
  background: var(--loader-accent);
  transform-origin: left center;
  animation: vl-bar-stacked-wave calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-bar-stacked-wave > span:nth-child(2) i { animation-delay: -.2s; }
.vl-bar-stacked-wave > span:nth-child(3) i { animation-delay: -.4s; }
.vl-bar-stacked-wave i:nth-child(2) { animation-delay: -.12s; }
.vl-bar-stacked-wave i:nth-child(3) { animation-delay: -.24s; }
.vl-bar-stacked-wave i:nth-child(4) { animation-delay: -.36s; }
.vl-bar-stacked-wave i:nth-child(5) { animation-delay: -.48s; }
@keyframes vl-bar-stacked-wave {
  0%, 100% { transform: scaleX(.35); opacity: .25; }
  50% { transform: scaleX(1); opacity: 1; }
}`
  },
  {
    id: 'bar-scanner-sweep',
    name: 'Scanner Sweep Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'A scanning beam crosses a segmented data rail for search, validation, or security checks.',
    markup: `<div class="vl-bar-scanner-sweep" aria-hidden="true">
  <span><i></i><i></i><i></i><i></i><i></i><i></i></span>
  <b></b>
</div>`,
    css: `.vl-bar-scanner-sweep {
  position: relative;
  width: 154px;
  height: 24px;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.vl-bar-scanner-sweep > span {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
}
.vl-bar-scanner-sweep i {
  height: 7px;
  border-radius: 3px;
  background: color-mix(in srgb, var(--loader-accent) 18%, transparent);
  animation: vl-bar-scanner-cell calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
.vl-bar-scanner-sweep i:nth-child(2) { animation-delay: .1s; }
.vl-bar-scanner-sweep i:nth-child(3) { animation-delay: .2s; }
.vl-bar-scanner-sweep i:nth-child(4) { animation-delay: .3s; }
.vl-bar-scanner-sweep i:nth-child(5) { animation-delay: .4s; }
.vl-bar-scanner-sweep i:nth-child(6) { animation-delay: .5s; }
.vl-bar-scanner-sweep b {
  position: absolute;
  left: -12px;
  width: 12px;
  height: 22px;
  border-radius: 99px;
  background: var(--loader-accent);
  box-shadow: 0 0 14px color-mix(in srgb, var(--loader-accent) 65%, transparent);
  animation: vl-bar-scanner-sweep calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-bar-scanner-sweep {
  0% { transform: translateX(0); opacity: 0; }
  12%, 88% { opacity: 1; }
  100% { transform: translateX(178px); opacity: 0; }
}
@keyframes vl-bar-scanner-cell {
  0%, 100% { opacity: .35; }
  45%, 60% { opacity: 1; }
}`
  },
  {
    id: 'bar-segment-chase',
    name: 'Segment Chase Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'Eight rounded segments chase from left to right for compact inline loading feedback.',
    markup: `<div class="vl-bar-segment-chase" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-bar-segment-chase {
  width: 150px;
  display: flex;
  gap: 5px;
  align-items: center;
}
.vl-bar-segment-chase span {
  width: 14px;
  height: 9px;
  border-radius: 4px;
  background: var(--loader-accent);
  animation: vl-bar-segment-chase calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-bar-segment-chase span:nth-child(2) { animation-delay: .1s; }
.vl-bar-segment-chase span:nth-child(3) { animation-delay: .2s; }
.vl-bar-segment-chase span:nth-child(4) { animation-delay: .3s; }
.vl-bar-segment-chase span:nth-child(5) { animation-delay: .4s; }
.vl-bar-segment-chase span:nth-child(6) { animation-delay: .5s; }
.vl-bar-segment-chase span:nth-child(7) { animation-delay: .6s; }
.vl-bar-segment-chase span:nth-child(8) { animation-delay: .7s; }
@keyframes vl-bar-segment-chase {
  0%, 75%, 100% { transform: scaleY(.65); opacity: .2; }
  35% { transform: scaleY(1.25); opacity: 1; }
}`
  },
  {
    id: 'bar-audio-ladder',
    name: 'Audio Ladder Bars',
    category: 'Bars',
    tech: 'CSS',
    description: 'A stepped equalizer ladder suited to audio, voice, media, and streaming indicators.',
    markup: `<div class="vl-bar-audio-ladder" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-bar-audio-ladder {
  height: 54px;
  display: flex;
  gap: 5px;
  align-items: flex-end;
}
.vl-bar-audio-ladder span {
  width: 7px;
  height: calc(12px + var(--step, 0) * 5px);
  border-radius: 4px 4px 2px 2px;
  background: var(--loader-accent);
  transform-origin: bottom;
  animation: vl-bar-audio-ladder calc(var(--loader-speed) * 1.05) ease-in-out infinite alternate;
}
.vl-bar-audio-ladder span:nth-child(1) { --step: 0; animation-delay: -.6s; }
.vl-bar-audio-ladder span:nth-child(2) { --step: 1; animation-delay: -.5s; }
.vl-bar-audio-ladder span:nth-child(3) { --step: 2; animation-delay: -.4s; }
.vl-bar-audio-ladder span:nth-child(4) { --step: 3; animation-delay: -.3s; }
.vl-bar-audio-ladder span:nth-child(5) { --step: 2; animation-delay: -.2s; }
.vl-bar-audio-ladder span:nth-child(6) { --step: 1; animation-delay: -.1s; }
.vl-bar-audio-ladder span:nth-child(7) { --step: 0; }
@keyframes vl-bar-audio-ladder {
  0% { transform: scaleY(.35); opacity: .35; }
  100% { transform: scaleY(1); opacity: 1; }
}`
  },
  {
    id: 'bar-dual-rail',
    name: 'Dual Rail Loader',
    category: 'Bars',
    tech: 'CSS',
    description: 'Two opposing activity rails communicate bidirectional syncing, transfer, or reconciliation.',
    markup: `<div class="vl-bar-dual-rail" aria-hidden="true"><span><i></i></span><span><i></i></span></div>`,
    css: `.vl-bar-dual-rail {
  width: 152px;
  display: grid;
  gap: 8px;
}
.vl-bar-dual-rail span {
  position: relative;
  height: 6px;
  overflow: hidden;
  border-radius: 99px;
  background: color-mix(in srgb, var(--loader-accent) 16%, transparent);
}
.vl-bar-dual-rail i {
  position: absolute;
  top: 0;
  width: 45%;
  height: 100%;
  border-radius: inherit;
  background: var(--loader-accent);
  animation: vl-bar-dual-rail-a calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-bar-dual-rail span:nth-child(2) i {
  right: 0;
  animation-name: vl-bar-dual-rail-b;
}
@keyframes vl-bar-dual-rail-a {
  0%, 100% { transform: translateX(-105%); }
  50% { transform: translateX(225%); }
}
@keyframes vl-bar-dual-rail-b {
  0%, 100% { transform: translateX(105%); }
  50% { transform: translateX(-225%); }
}`
  }
];
