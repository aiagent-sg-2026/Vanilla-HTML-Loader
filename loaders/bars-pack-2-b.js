export const barPack2LoadersB = [
  {
    id: 'bar-data-pulse',
    name: 'Data Pulse Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'A connected sequence of data blocks pulses forward for queries, APIs, and synchronization.',
    markup: `<div class="vl-bar-data-pulse" aria-hidden="true"><span></span><i></i><span></span><i></i><span></span><i></i><span></span><i></i><span></span></div>`,
    css: `.vl-bar-data-pulse {
  width: 154px;
  display: flex;
  align-items: center;
}
.vl-bar-data-pulse span {
  width: 13px;
  height: 13px;
  flex: 0 0 auto;
  border-radius: 4px;
  background: var(--loader-accent);
  animation: vl-bar-data-pulse calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-bar-data-pulse i {
  height: 3px;
  flex: 1;
  background: color-mix(in srgb, var(--loader-accent) 24%, transparent);
}
.vl-bar-data-pulse span:nth-of-type(2) { animation-delay: .18s; }
.vl-bar-data-pulse span:nth-of-type(3) { animation-delay: .36s; }
.vl-bar-data-pulse span:nth-of-type(4) { animation-delay: .54s; }
.vl-bar-data-pulse span:nth-of-type(5) { animation-delay: .72s; }
@keyframes vl-bar-data-pulse {
  0%, 70%, 100% { transform: scale(.7); opacity: .25; }
  35% { transform: scale(1.15); opacity: 1; box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 55%, transparent); }
}`
  },
  {
    id: 'bar-ribbon-progress',
    name: 'Ribbon Progress Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'Three overlapping ribbons slide at different speeds for layered processing feedback.',
    markup: `<div class="vl-bar-ribbon-progress" aria-hidden="true"><span></span><span></span><span></span></div>`,
    css: `.vl-bar-ribbon-progress {
  position: relative;
  width: 154px;
  height: 18px;
  overflow: hidden;
  border-radius: 99px;
  background: color-mix(in srgb, var(--loader-accent) 12%, transparent);
}
.vl-bar-ribbon-progress span {
  position: absolute;
  left: -55%;
  width: 55%;
  height: 5px;
  border-radius: 99px;
  background: var(--loader-accent);
  animation: vl-bar-ribbon-progress calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
.vl-bar-ribbon-progress span:nth-child(1) { top: 2px; opacity: .35; }
.vl-bar-ribbon-progress span:nth-child(2) { top: 7px; animation-delay: -.3s; opacity: .7; }
.vl-bar-ribbon-progress span:nth-child(3) { top: 12px; animation-delay: -.6s; }
@keyframes vl-bar-ribbon-progress {
  0% { transform: translateX(0) scaleX(.7); }
  45% { transform: translateX(150%) scaleX(1.15); }
  100% { transform: translateX(285%) scaleX(.7); }
}`
  },
  {
    id: 'bar-packet-stream',
    name: 'Packet Stream Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'Small packets travel through a transfer rail for uploads, downloads, and network activity.',
    markup: `<div class="vl-bar-packet-stream" aria-hidden="true"><i></i><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-bar-packet-stream {
  position: relative;
  width: 156px;
  height: 24px;
  overflow: hidden;
}
.vl-bar-packet-stream > i {
  position: absolute;
  left: 0;
  right: 0;
  top: 10px;
  height: 4px;
  border-radius: 99px;
  background: color-mix(in srgb, var(--loader-accent) 18%, transparent);
}
.vl-bar-packet-stream span {
  position: absolute;
  left: -18px;
  top: 5px;
  width: 18px;
  height: 14px;
  border-radius: 5px;
  background: var(--loader-accent);
  animation: vl-bar-packet-stream calc(var(--loader-speed) * 1.55) linear infinite;
}
.vl-bar-packet-stream span:nth-of-type(2) { animation-delay: .25s; }
.vl-bar-packet-stream span:nth-of-type(3) { animation-delay: .5s; }
.vl-bar-packet-stream span:nth-of-type(4) { animation-delay: .75s; }
.vl-bar-packet-stream span:nth-of-type(5) { animation-delay: 1s; }
@keyframes vl-bar-packet-stream {
  0% { transform: translateX(0) scale(.75); opacity: 0; }
  12%, 88% { opacity: 1; }
  100% { transform: translateX(178px) scale(1); opacity: 0; }
}`
  },
  {
    id: 'bar-step-equalizer',
    name: 'Step Equalizer Bars',
    category: 'Bars',
    tech: 'CSS',
    description: 'A mirrored stepped equalizer for voice, media, diagnostics, and realtime data activity.',
    markup: `<div class="vl-bar-step-equalizer" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-bar-step-equalizer {
  height: 50px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.vl-bar-step-equalizer span {
  width: 6px;
  height: var(--height, 14px);
  border-radius: 4px;
  background: var(--loader-accent);
  animation: vl-bar-step-equalizer calc(var(--loader-speed) * 1.05) ease-in-out infinite alternate;
}
.vl-bar-step-equalizer span:nth-child(1), .vl-bar-step-equalizer span:nth-child(9) { --height: 12px; animation-delay: -.8s; }
.vl-bar-step-equalizer span:nth-child(2), .vl-bar-step-equalizer span:nth-child(8) { --height: 20px; animation-delay: -.6s; }
.vl-bar-step-equalizer span:nth-child(3), .vl-bar-step-equalizer span:nth-child(7) { --height: 30px; animation-delay: -.4s; }
.vl-bar-step-equalizer span:nth-child(4), .vl-bar-step-equalizer span:nth-child(6) { --height: 40px; animation-delay: -.2s; }
.vl-bar-step-equalizer span:nth-child(5) { --height: 48px; }
@keyframes vl-bar-step-equalizer {
  0% { transform: scaleY(.35); opacity: .3; }
  100% { transform: scaleY(1); opacity: 1; }
}`
  },
  {
    id: 'bar-split-beam',
    name: 'Split Beam Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'Two beams expand from the center and reset, ideal for routing, branching, and processing states.',
    markup: `<div class="vl-bar-split-beam" aria-hidden="true"><span></span><span></span><i></i></div>`,
    css: `.vl-bar-split-beam {
  position: relative;
  width: 154px;
  height: 18px;
}
.vl-bar-split-beam::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 7px;
  height: 4px;
  border-radius: 99px;
  background: color-mix(in srgb, var(--loader-accent) 16%, transparent);
}
.vl-bar-split-beam span {
  position: absolute;
  top: 5px;
  width: 0;
  height: 8px;
  border-radius: 99px;
  background: var(--loader-accent);
  animation: vl-bar-split-beam calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
.vl-bar-split-beam span:first-child { right: 50%; transform-origin: right center; }
.vl-bar-split-beam span:nth-child(2) { left: 50%; transform-origin: left center; }
.vl-bar-split-beam i {
  position: absolute;
  left: 50%;
  top: 3px;
  width: 12px;
  height: 12px;
  margin-left: -6px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-bar-split-beam-core calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
@keyframes vl-bar-split-beam {
  0%, 100% { width: 0; opacity: .25; }
  55% { width: 50%; opacity: 1; }
}
@keyframes vl-bar-split-beam-core {
  0%, 100% { transform: scale(.65); opacity: .4; }
  55% { transform: scale(1.1); opacity: 1; box-shadow: 0 0 12px color-mix(in srgb, var(--loader-accent) 55%, transparent); }
}`
  }
];
