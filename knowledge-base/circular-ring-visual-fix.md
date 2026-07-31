# Project Memory

## Circular percentage ring visual fix

Recorded: 2026-07-16T03:57:10.493Z
Tags: loader-studio, circular-progress, visual-fix, compact-card, svg, ssot, verified

The Circular Percentage Ring compact preview previously clipped its percentage because two text spans shared the root grid and relied on negative margins. The loader was redesigned with a dedicated centered `.vl-ring-content` layer, a 96×96 SVG ring, thinner 6px strokes, fixed determinate 68% demo progress, softer palette-aware shadow, and subtle breathe animation. `AppLoader.setProgress()` remains compatible using the updated radius-38 circumference of 238.76. All other loaders remain unchanged.

Sources:
- backup:backup_69be700d-ca6_mrmz5zpe
- qa:d791d1e7-9271-42a4-873a-facac08a5fca

