export const dotsPack2LoadersA = [
  {
    id: 'dot-orbit-chain',
    name: 'Orbit Chain Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Six linked dots orbit around a compact center point for synchronization and background processing states.',
    markup: `<div class="vl-dot-orbit-chain" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-orbit-chain {
  position: relative;
  width: 64px;
  height: 64px;
  animation: vl-dot-orbit-chain-spin calc(var(--loader-speed) * 1.7) linear infinite;
}
.vl-dot-orbit-chain span {
  position: absolute;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--loader-accent) 12%, transparent);
  animation: vl-dot-orbit-chain-pulse calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
.vl-dot-orbit-chain span:nth-child(1) { left: 28px; top: 2px; }
.vl-dot-orbit-chain span:nth-child(2) { right: 7px; top: 15px; animation-delay: .12s; }
.vl-dot-orbit-chain span:nth-child(3) { right: 7px; bottom: 15px; animation-delay: .24s; }
.vl-dot-orbit-chain span:nth-child(4) { left: 28px; bottom: 2px; animation-delay: .36s; }
.vl-dot-orbit-chain span:nth-child(5) { left: 7px; bottom: 15px; animation-delay: .48s; }
.vl-dot-orbit-chain span:nth-child(6) { left: 7px; top: 15px; animation-delay: .6s; }
@keyframes vl-dot-orbit-chain-spin { to { transform: rotate(360deg); } }
@keyframes vl-dot-orbit-chain-pulse {
  0%, 100% { opacity: .35; transform: scale(.72); }
  50% { opacity: 1; transform: scale(1.12); }
}`
  },
  {
    id: 'dot-ripple-matrix',
    name: 'Ripple Matrix Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'A 3×3 dot matrix ripples outward from the center for compact data-loading and dashboard states.',
    markup: `<div class="vl-dot-ripple-matrix" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-ripple-matrix {
  display: grid;
  grid-template-columns: repeat(3, 9px);
  gap: 8px;
}
.vl-dot-ripple-matrix span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-ripple-matrix calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-dot-ripple-matrix span:nth-child(5) { animation-delay: 0s; }
.vl-dot-ripple-matrix span:nth-child(2),
.vl-dot-ripple-matrix span:nth-child(4),
.vl-dot-ripple-matrix span:nth-child(6),
.vl-dot-ripple-matrix span:nth-child(8) { animation-delay: .14s; }
.vl-dot-ripple-matrix span:nth-child(1),
.vl-dot-ripple-matrix span:nth-child(3),
.vl-dot-ripple-matrix span:nth-child(7),
.vl-dot-ripple-matrix span:nth-child(9) { animation-delay: .28s; }
@keyframes vl-dot-ripple-matrix {
  0%, 100% { opacity: .22; transform: scale(.55); }
  45% { opacity: 1; transform: scale(1.15); }
}`
  },
  {
    id: 'dot-comet-trail',
    name: 'Comet Trail Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'A fast dot trail with a bright leading point for transfer, upload, and streaming activity.',
    markup: `<div class="vl-dot-comet-trail" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-comet-trail {
  width: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
}
.vl-dot-comet-trail span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-comet-trail calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-dot-comet-trail span:nth-child(1) { animation-delay: -.5s; }
.vl-dot-comet-trail span:nth-child(2) { animation-delay: -.4s; }
.vl-dot-comet-trail span:nth-child(3) { animation-delay: -.3s; }
.vl-dot-comet-trail span:nth-child(4) { animation-delay: -.2s; }
.vl-dot-comet-trail span:nth-child(5) { animation-delay: -.1s; }
@keyframes vl-dot-comet-trail {
  0%, 100% { opacity: .18; transform: translateY(0) scale(.55); }
  50% { opacity: 1; transform: translateY(-6px) scale(1.25); }
}`
  },
  {
    id: 'dot-dna-helix',
    name: 'DNA Helix Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Alternating dots weave into a compact helix for analysis, computation, and model-processing states.',
    markup: `<div class="vl-dot-dna-helix" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-dna-helix {
  width: 132px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.vl-dot-dna-helix span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-dna-helix calc(var(--loader-speed) * 1.25) ease-in-out infinite alternate;
}
.vl-dot-dna-helix span:nth-child(2) { animation-delay: .1s; }
.vl-dot-dna-helix span:nth-child(3) { animation-delay: .2s; }
.vl-dot-dna-helix span:nth-child(4) { animation-delay: .3s; }
.vl-dot-dna-helix span:nth-child(5) { animation-delay: .4s; }
.vl-dot-dna-helix span:nth-child(6) { animation-delay: .5s; }
.vl-dot-dna-helix span:nth-child(7) { animation-delay: .6s; }
.vl-dot-dna-helix span:nth-child(8) { animation-delay: .7s; }
@keyframes vl-dot-dna-helix {
  0% { transform: translateY(-15px) scale(.72); opacity: .35; }
  100% { transform: translateY(15px) scale(1.12); opacity: 1; }
}`
  },
  {
    id: 'dot-cross-pulse',
    name: 'Cross Pulse Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Five dots pulse through a cross pattern for validation, location, and focused processing states.',
    markup: `<div class="vl-dot-cross-pulse" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-cross-pulse {
  position: relative;
  width: 58px;
  height: 58px;
}
.vl-dot-cross-pulse span {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-cross-pulse calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-dot-cross-pulse span:nth-child(1) { left: 24px; top: 24px; }
.vl-dot-cross-pulse span:nth-child(2) { left: 24px; top: 3px; animation-delay: .12s; }
.vl-dot-cross-pulse span:nth-child(3) { right: 3px; top: 24px; animation-delay: .24s; }
.vl-dot-cross-pulse span:nth-child(4) { left: 24px; bottom: 3px; animation-delay: .36s; }
.vl-dot-cross-pulse span:nth-child(5) { left: 3px; top: 24px; animation-delay: .48s; }
@keyframes vl-dot-cross-pulse {
  0%, 100% { opacity: .25; transform: scale(.55); }
  50% { opacity: 1; transform: scale(1.25); }
}`
  }
];
