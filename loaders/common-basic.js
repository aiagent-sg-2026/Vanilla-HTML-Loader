export const commonBasicLoaders = [
  {
    id: 'half-ring-spinner',
    name: 'Half Ring Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A clean half-ring spinner for standard page, form, and inline loading states.',
    markup: `<div class="vl-half-ring" role="status" aria-label="Loading"></div>`,
    css: `.vl-half-ring {
  width: 50px;
  height: 50px;
  border: 4px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-right-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-half-ring calc(var(--loader-speed) * .82) linear infinite;
}
@keyframes vl-half-ring { to { transform: rotate(360deg); } }`
  },
  {
    id: 'four-dot-grid',
    name: 'Four Dot Grid',
    category: 'Dots',
    tech: 'CSS',
    description: 'Four dots pulse in a compact grid for simple application and dashboard loading states.',
    markup: `<div class="vl-four-dot-grid" role="status" aria-label="Loading"><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-four-dot-grid {
  width: 38px;
  height: 38px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7px;
}
.vl-four-dot-grid span {
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-four-dot-grid calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-four-dot-grid span:nth-child(2) { animation-delay: .12s; }
.vl-four-dot-grid span:nth-child(3) { animation-delay: .24s; }
.vl-four-dot-grid span:nth-child(4) { animation-delay: .36s; }
@keyframes vl-four-dot-grid {
  0%, 100% { transform: scale(.55); opacity: .3; }
  50% { transform: scale(1); opacity: 1; }
}`
  },
  {
    id: 'square-sequence',
    name: 'Square Sequence',
    category: 'Dots',
    tech: 'CSS',
    description: 'Three rounded squares fade in sequence for neutral business and utility interfaces.',
    markup: `<div class="vl-square-sequence" role="status" aria-label="Loading"><span></span><span></span><span></span></div>`,
    css: `.vl-square-sequence {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}
.vl-square-sequence span {
  width: 11px;
  height: 11px;
  border-radius: 3px;
  background: var(--loader-accent);
  animation: vl-square-sequence calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-square-sequence span:nth-child(2) { animation-delay: .15s; }
.vl-square-sequence span:nth-child(3) { animation-delay: .3s; }
@keyframes vl-square-sequence {
  0%, 80%, 100% { transform: translateY(0); opacity: .25; }
  40% { transform: translateY(-7px); opacity: 1; }
}`
  },
  {
    id: 'bouncing-line',
    name: 'Bouncing Line',
    category: 'Bars',
    tech: 'CSS',
    description: 'A small bar moves along a track for route changes, refreshes, and background requests.',
    markup: `<div class="vl-bouncing-line" role="progressbar" aria-label="Loading"><span></span></div>`,
    css: `.vl-bouncing-line {
  position: relative;
  width: min(150px, 58vw);
  height: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 14%, #e7ecf3);
}
.vl-bouncing-line span {
  position: absolute;
  inset-block: 0;
  left: 0;
  width: 36%;
  border-radius: inherit;
  background: var(--loader-accent);
  animation: vl-bouncing-line calc(var(--loader-speed) * 1.25) ease-in-out infinite alternate;
}
@keyframes vl-bouncing-line { to { left: 64%; } }`
  },
  {
    id: 'loading-badge',
    name: 'Loading Badge',
    category: 'Common UI',
    tech: 'CSS',
    description: 'A compact status badge for table rows, cards, filters, and background synchronisation.',
    markup: `<span class="vl-loading-badge" role="status"><i aria-hidden="true"></i>Updating</span>`,
    css: `.vl-loading-badge {
  min-height: 30px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 10px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 7%, #fff);
  color: var(--loader-accent);
  font: 800 11px/1.2 system-ui, sans-serif;
}
.vl-loading-badge i {
  width: 12px;
  height: 12px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 22%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-loading-badge calc(var(--loader-speed) * .72) linear infinite;
}
@keyframes vl-loading-badge { to { transform: rotate(360deg); } }`
  }
];
