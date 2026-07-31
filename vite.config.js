import { defineConfig } from 'vite';

export default defineConfig({
  // Relative asset URLs, so the same build works at the domain root and under
  // the /Vanilla-HTML-Loader/ path GitHub Pages serves it from.
  base: './',

  build: {
    outDir: 'dist',
    emptyOutDir: true,

    // The loader registry is data: every loader's markup and CSS is a template
    // literal that is copied verbatim into the user's clipboard. Minifying the
    // JS around it is fine, but the strings themselves must survive untouched,
    // which esbuild does — qa/verify-snippet-parity.mjs proves it per release.
    minify: 'esbuild',

    rollupOptions: {
      input: {
        main: 'index.html',
        // The QA harness ships with the site so the smoke test can be run
        // against the deployed copy, exactly as it could before the build step.
        smoke: 'qa/snippet-paste-smoke.html'
      }
    }
  },

  server: { port: 8765 },
  preview: { port: 8765 }
});
