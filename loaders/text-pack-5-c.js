export const textPack5LoadersC = [
  {
    id: 'text-orbit-glyph',
    name: 'Orbit Glyph Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'Text glyphs orbit around each other as if tracing a loading phrase.',
    markup: `<div class="vl-cat-text-orbit-glyph" role="img" aria-label="Orbit glyph text">
  <span>•</span>
  <span>Loading</span>
  <span>◐</span>
</div>`,
    css: `.vl-cat-text-orbit-glyph {
  width: 170px;
  height: 50px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #1f598a);
  border-radius: 12px;
  margin: 0 auto;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  font-size: 16px;
  letter-spacing: .06em;
  color: color-mix(in srgb, var(--loader-accent) 75%, #122d46);
}
.vl-cat-text-orbit-glyph span {
  position: absolute;
  animation: vl-cat-text-orbit-glyph-float calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-cat-text-orbit-glyph span:nth-child(2) { animation-delay: -.33s; }
.vl-cat-text-orbit-glyph span:nth-child(3) { animation-delay: -.66s; }
@keyframes vl-cat-text-orbit-glyph-float {
  0%,100% { opacity: .25; transform: translateX(-24px) scale(.9); }
  50% { opacity: 1; transform: translateX(24px) scale(1.1); }
}`
  },
];
