export const buttonsPack1LoadersB = [
  {
    id: 'button-dot-matrix',
    name: 'Dot Matrix Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A compact 3×2 dot matrix cycles beside the label for dense toolbar and utility actions.',
    markup: `<button class="vl-button-dot-matrix" type="button" disabled aria-busy="true">
  <span class="vl-button-dot-matrix-grid" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span>
  <span>Loading data</span>
</button>`,
    css: `.vl-button-dot-matrix {
  min-width: 150px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 16px;
  border: 0;
  border-radius: 10px;
  background: var(--loader-accent);
  color: #fff;
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-dot-matrix-grid {
  width: 18px;
  display: grid;
  grid-template-columns: repeat(3, 4px);
  gap: 3px;
}
.vl-button-dot-matrix-grid i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: currentColor;
  animation: vl-button-dot-matrix calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-button-dot-matrix-grid i:nth-child(2) { animation-delay: .08s; }
.vl-button-dot-matrix-grid i:nth-child(3) { animation-delay: .16s; }
.vl-button-dot-matrix-grid i:nth-child(4) { animation-delay: .24s; }
.vl-button-dot-matrix-grid i:nth-child(5) { animation-delay: .32s; }
.vl-button-dot-matrix-grid i:nth-child(6) { animation-delay: .4s; }
@keyframes vl-button-dot-matrix {
  0%, 100% { transform: scale(.55); opacity: .28; }
  50% { transform: scale(1); opacity: 1; }
}`
  },
  {
    id: 'button-corner-orbit',
    name: 'Corner Orbit Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A quiet outlined button uses four travelling corner markers for background requests and validation.',
    markup: `<button class="vl-button-corner-orbit" type="button" disabled aria-busy="true">
  <span class="vl-button-corner-orbit-frame" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
  <span>Validating</span>
</button>`,
    css: `.vl-button-corner-orbit {
  min-width: 144px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 16px;
  border: 1px solid #d5deea;
  border-radius: 10px;
  background: #fff;
  color: #344054;
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-corner-orbit-frame {
  position: relative;
  width: 18px;
  height: 18px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, transparent);
  border-radius: 5px;
  animation: vl-button-corner-orbit-turn calc(var(--loader-speed) * 1.5) linear infinite;
}
.vl-button-corner-orbit-frame i {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-button-corner-orbit-dot calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-button-corner-orbit-frame i:nth-child(1) { left: -3px; top: -3px; }
.vl-button-corner-orbit-frame i:nth-child(2) { right: -3px; top: -3px; animation-delay: .15s; }
.vl-button-corner-orbit-frame i:nth-child(3) { right: -3px; bottom: -3px; animation-delay: .3s; }
.vl-button-corner-orbit-frame i:nth-child(4) { left: -3px; bottom: -3px; animation-delay: .45s; }
@keyframes vl-button-corner-orbit-turn { to { transform: rotate(360deg); } }
@keyframes vl-button-corner-orbit-dot {
  0%, 100% { transform: scale(.55); opacity: .25; }
  50% { transform: scale(1); opacity: 1; }
}`
  },
  {
    id: 'button-wave-label',
    name: 'Wave Label Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'The button label rises letter by letter in a subtle wave without replacing the action text.',
    markup: `<button class="vl-button-wave-label" type="button" disabled aria-busy="true" aria-label="Submitting">
  <span aria-hidden="true"><i>S</i><i>u</i><i>b</i><i>m</i><i>i</i><i>t</i><i>t</i><i>i</i><i>n</i><i>g</i></span>
</button>`,
    css: `.vl-button-wave-label {
  min-width: 144px;
  min-height: 44px;
  display: inline-grid;
  place-items: center;
  padding: 10px 17px;
  border: 0;
  border-radius: 10px;
  background: var(--loader-accent);
  color: #fff;
  font: 800 13px/1.2 system-ui, sans-serif;
  box-shadow: 0 8px 18px color-mix(in srgb, var(--loader-accent) 23%, transparent);
}
.vl-button-wave-label span { display: inline-flex; align-items: center; }
.vl-button-wave-label i {
  font-style: normal;
  animation: vl-button-wave-label calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-button-wave-label i:nth-child(2) { animation-delay: .04s; }
.vl-button-wave-label i:nth-child(3) { animation-delay: .08s; }
.vl-button-wave-label i:nth-child(4) { animation-delay: .12s; }
.vl-button-wave-label i:nth-child(5) { animation-delay: .16s; }
.vl-button-wave-label i:nth-child(6) { animation-delay: .2s; }
.vl-button-wave-label i:nth-child(7) { animation-delay: .24s; }
.vl-button-wave-label i:nth-child(8) { animation-delay: .28s; }
.vl-button-wave-label i:nth-child(9) { animation-delay: .32s; }
.vl-button-wave-label i:nth-child(10) { animation-delay: .36s; }
@keyframes vl-button-wave-label {
  0%, 100% { transform: translateY(0); opacity: .55; }
  50% { transform: translateY(-3px); opacity: 1; }
}`
  },
  {
    id: 'button-stripe-progress',
    name: 'Stripe Progress Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'An indeterminate diagonal stripe field moves beneath a stable label for long-running operations.',
    markup: `<button class="vl-button-stripe-progress" type="button" disabled aria-busy="true">
  <span class="vl-button-stripe-progress-bg" aria-hidden="true"></span>
  <span class="vl-button-stripe-progress-label">Generating report</span>
</button>`,
    css: `.vl-button-stripe-progress {
  position: relative;
  min-width: 174px;
  min-height: 44px;
  overflow: hidden;
  display: inline-grid;
  place-items: center;
  padding: 10px 17px;
  border: 1px solid var(--loader-accent);
  border-radius: 10px;
  background: color-mix(in srgb, var(--loader-accent) 9%, #fff);
  color: var(--loader-accent);
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-stripe-progress-bg {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    115deg,
    transparent 0 9px,
    color-mix(in srgb, var(--loader-accent) 14%, transparent) 9px 18px
  );
  background-size: 38px 100%;
  animation: vl-button-stripe-progress calc(var(--loader-speed) * 1.15) linear infinite;
}
.vl-button-stripe-progress-label { position: relative; z-index: 1; }
@keyframes vl-button-stripe-progress { to { background-position: 38px 0; } }`
  },
  {
    id: 'button-split-spinner',
    name: 'Split Spinner Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A split-button loading state keeps the main action label visible while the menu side shows activity.',
    markup: `<div class="vl-button-split-spinner" role="group" aria-label="Publishing in progress">
  <button type="button" disabled aria-busy="true">Publishing</button>
  <button class="vl-button-split-spinner-menu" type="button" disabled aria-label="Loading publish options"><span aria-hidden="true"></span></button>
</div>`,
    css: `.vl-button-split-spinner {
  display: inline-flex;
  min-height: 44px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 8px 18px color-mix(in srgb, var(--loader-accent) 22%, transparent);
}
.vl-button-split-spinner button {
  min-height: 44px;
  padding: 10px 16px;
  border: 0;
  background: var(--loader-accent);
  color: #fff;
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-split-spinner-menu {
  width: 44px;
  display: grid;
  place-items: center;
  padding: 0 !important;
  border-left: 1px solid rgba(255,255,255,.3) !important;
  background: color-mix(in srgb, var(--loader-accent) 88%, #000) !important;
}
.vl-button-split-spinner-menu span {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255,255,255,.38);
  border-top-color: #fff;
  border-radius: 50%;
  animation: vl-button-split-spinner calc(var(--loader-speed) * .72) linear infinite;
}
@keyframes vl-button-split-spinner { to { transform: rotate(360deg); } }`
  }
];
