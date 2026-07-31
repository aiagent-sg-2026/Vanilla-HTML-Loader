export const spinnersPack6LoadersA = [
  {
    id: 'spinner-plasma-halo',
    name: 'Plasma Halo Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A luminous segmented halo circles a pulsing core for AI, sync, and high-energy processing states.',
    markup: `<div class="vl-spinner-plasma-halo" aria-hidden="true"></div>`,
    css: `.vl-spinner-plasma-halo {
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    transparent 0 12%,
    var(--loader-accent) 12% 28%,
    transparent 28% 43%,
    color-mix(in srgb, var(--loader-accent) 65%, white) 43% 61%,
    transparent 61% 78%,
    var(--loader-accent) 78% 92%,
    transparent 92% 100%
  );
  animation: vl-spinner-plasma-halo-spin calc(var(--loader-speed) * 1.1) linear infinite;
}
.vl-spinner-plasma-halo::before {
  content: '';
  position: absolute;
  inset: 7px;
  border-radius: 50%;
  background: var(--surface, #fff);
  box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--loader-accent) 18%, transparent);
}
.vl-spinner-plasma-halo::after {
  content: '';
  position: absolute;
  inset: 22px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 8px color-mix(in srgb, var(--loader-accent) 14%, transparent);
  animation: vl-spinner-plasma-halo-core calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
@keyframes vl-spinner-plasma-halo-spin { to { transform: rotate(360deg); } }
@keyframes vl-spinner-plasma-halo-core {
  0%, 100% { transform: scale(.72); opacity: .55; }
  50% { transform: scale(1.12); opacity: 1; }
}`
  },
  {
    id: 'spinner-orbit-switch',
    name: 'Orbit Switch Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Two orbiting nodes repeatedly exchange lanes around a compact circular track.',
    markup: `<div class="vl-spinner-orbit-switch" aria-hidden="true"><span></span><span></span></div>`,
    css: `.vl-spinner-orbit-switch {
  position: relative;
  width: 66px;
  height: 66px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 22%, transparent);
  border-radius: 50%;
  animation: vl-spinner-orbit-switch-track calc(var(--loader-speed) * 1.55) linear infinite;
}
.vl-spinner-orbit-switch::before {
  content: '';
  position: absolute;
  inset: 13px;
  border: 2px dashed color-mix(in srgb, var(--loader-accent) 32%, transparent);
  border-radius: 50%;
  animation: vl-spinner-orbit-switch-track calc(var(--loader-speed) * .9) linear infinite reverse;
}
.vl-spinner-orbit-switch span {
  position: absolute;
  top: 27px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--loader-accent) 14%, transparent);
}
.vl-spinner-orbit-switch span:first-child {
  left: 0;
  animation: vl-spinner-orbit-switch-left calc(var(--loader-speed) * 1.2) ease-in-out infinite alternate;
}
.vl-spinner-orbit-switch span:last-child {
  right: 0;
  animation: vl-spinner-orbit-switch-right calc(var(--loader-speed) * 1.2) ease-in-out infinite alternate;
}
@keyframes vl-spinner-orbit-switch-track { to { transform: rotate(360deg); } }
@keyframes vl-spinner-orbit-switch-left {
  0% { transform: translateX(0) scale(.76); opacity: .45; }
  100% { transform: translateX(23px) scale(1.08); opacity: 1; }
}
@keyframes vl-spinner-orbit-switch-right {
  0% { transform: translateX(0) scale(.76); opacity: .45; }
  100% { transform: translateX(-23px) scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'spinner-tri-ring-flux',
    name: 'Tri-Ring Flux Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Three offset rings rotate at independent speeds to create a layered flux-field effect.',
    markup: `<div class="vl-spinner-tri-ring-flux" aria-hidden="true"><span></span><span></span><span></span></div>`,
    css: `.vl-spinner-tri-ring-flux {
  position: relative;
  width: 68px;
  height: 68px;
}
.vl-spinner-tri-ring-flux span {
  position: absolute;
  border: 3px solid transparent;
  border-radius: 50%;
}
.vl-spinner-tri-ring-flux span:nth-child(1) {
  inset: 1px;
  border-top-color: var(--loader-accent);
  border-left-color: color-mix(in srgb, var(--loader-accent) 35%, transparent);
  animation: vl-spinner-tri-ring-flux-spin calc(var(--loader-speed) * 1.3) linear infinite;
}
.vl-spinner-tri-ring-flux span:nth-child(2) {
  inset: 10px;
  border-right-color: color-mix(in srgb, var(--loader-accent) 75%, white);
  border-bottom-color: color-mix(in srgb, var(--loader-accent) 28%, transparent);
  animation: vl-spinner-tri-ring-flux-spin calc(var(--loader-speed) * .88) linear infinite reverse;
}
.vl-spinner-tri-ring-flux span:nth-child(3) {
  inset: 20px;
  border-top-color: var(--loader-accent);
  border-right-color: color-mix(in srgb, var(--loader-accent) 45%, transparent);
  animation: vl-spinner-tri-ring-flux-spin calc(var(--loader-speed) * .62) linear infinite;
}
@keyframes vl-spinner-tri-ring-flux-spin { to { transform: rotate(360deg); } }`
  },
  {
    id: 'spinner-pixel-compass',
    name: 'Pixel Compass Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Eight square pixels pulse around a compass-like center for technical and dashboard loading states.',
    markup: `<div class="vl-spinner-pixel-compass" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-spinner-pixel-compass {
  position: relative;
  width: 66px;
  height: 66px;
  animation: vl-spinner-pixel-compass-spin calc(var(--loader-speed) * 2.15) linear infinite;
}
.vl-spinner-pixel-compass span {
  position: absolute;
  width: 9px;
  height: 9px;
  border-radius: 2px;
  background: var(--loader-accent);
  animation: vl-spinner-pixel-compass-pulse calc(var(--loader-speed) * 1.1) steps(2, end) infinite;
}
.vl-spinner-pixel-compass span:nth-child(1) { left: 29px; top: 1px; }
.vl-spinner-pixel-compass span:nth-child(2) { right: 8px; top: 8px; animation-delay: .1s; }
.vl-spinner-pixel-compass span:nth-child(3) { right: 1px; top: 29px; animation-delay: .2s; }
.vl-spinner-pixel-compass span:nth-child(4) { right: 8px; bottom: 8px; animation-delay: .3s; }
.vl-spinner-pixel-compass span:nth-child(5) { left: 29px; bottom: 1px; animation-delay: .4s; }
.vl-spinner-pixel-compass span:nth-child(6) { left: 8px; bottom: 8px; animation-delay: .5s; }
.vl-spinner-pixel-compass span:nth-child(7) { left: 1px; top: 29px; animation-delay: .6s; }
.vl-spinner-pixel-compass span:nth-child(8) { left: 8px; top: 8px; animation-delay: .7s; }
.vl-spinner-pixel-compass i {
  position: absolute;
  left: 27px;
  top: 27px;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  background: color-mix(in srgb, var(--loader-accent) 72%, white);
}
@keyframes vl-spinner-pixel-compass-spin { to { transform: rotate(360deg); } }
@keyframes vl-spinner-pixel-compass-pulse {
  0%, 70%, 100% { opacity: .2; transform: scale(.62); }
  35% { opacity: 1; transform: scale(1.18); }
}`
  },
  {
    id: 'spinner-spiral-aperture',
    name: 'Spiral Aperture Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Six tapered blades form a rotating aperture with a breathing central opening.',
    markup: `<div class="vl-spinner-spiral-aperture" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-spinner-spiral-aperture {
  position: relative;
  width: 68px;
  height: 68px;
  animation: vl-spinner-spiral-aperture-spin calc(var(--loader-speed) * 1.45) linear infinite;
}
.vl-spinner-spiral-aperture span {
  position: absolute;
  left: 30px;
  top: 4px;
  width: 9px;
  height: 29px;
  border-radius: 8px 8px 3px 3px;
  background: linear-gradient(to bottom, var(--loader-accent), transparent);
  transform-origin: 4.5px 30px;
}
.vl-spinner-spiral-aperture span:nth-child(1) { transform: rotate(0deg); }
.vl-spinner-spiral-aperture span:nth-child(2) { transform: rotate(60deg); }
.vl-spinner-spiral-aperture span:nth-child(3) { transform: rotate(120deg); }
.vl-spinner-spiral-aperture span:nth-child(4) { transform: rotate(180deg); }
.vl-spinner-spiral-aperture span:nth-child(5) { transform: rotate(240deg); }
.vl-spinner-spiral-aperture span:nth-child(6) { transform: rotate(300deg); }
.vl-spinner-spiral-aperture::after {
  content: '';
  position: absolute;
  inset: 25px;
  border-radius: 50%;
  background: var(--surface, #fff);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--loader-accent) 22%, transparent);
  animation: vl-spinner-spiral-aperture-core calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-spinner-spiral-aperture-spin { to { transform: rotate(360deg); } }
@keyframes vl-spinner-spiral-aperture-core {
  0%, 100% { transform: scale(.72); }
  50% { transform: scale(1.12); }
}`
  }
];
