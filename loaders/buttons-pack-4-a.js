export const buttonsPack4LoadersA = [
  {
    id: 'button-ripple-toggle',
    name: 'Ripple Toggle Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A pill toggle sweeps progress through ripple rings.',
    markup: `<div class="vl-cat-button-ripple-toggle" role="img" aria-label="Ripple toggle button">
  <button type="button" aria-label="toggle" disabled></button>
  <span class="ring"></span>
  <span class="ring"></span>
  <span class="ring"></span>
</div>`,
    css: `.vl-cat-button-ripple-toggle {
  width: 170px;
  height: 48px;
  margin: 0 auto;
  position: relative;
  border-radius: 999px;
  overflow: hidden;
}
.vl-cat-button-ripple-toggle button {
  width: 100%;
  height: 100%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #1f5c8a);
  border-radius: 999px;
  background: linear-gradient(135deg, color-mix(in srgb, var(--loader-accent) 25%, #f5f8fd), #ffffff);
  position: relative;
  opacity: .86;
}
.vl-cat-button-ripple-toggle .ring {
  position: absolute;
  inset: 12px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 46%, transparent);
  animation: vl-cat-button-ripple-toggle-wave calc(var(--loader-speed) * 1.2) ease-out infinite;
}
.vl-cat-button-ripple-toggle .ring:nth-child(3) { animation-delay: -.2s; }
.vl-cat-button-ripple-toggle .ring:nth-child(4) { animation-delay: -.4s; }
@keyframes vl-cat-button-ripple-toggle-wave {
  0% { transform: scale(.75); opacity: .9; }
  100% { transform: scale(2.05); opacity: 0; }
}`
  },
];
