# Project Memory

## Cyber loader animation visibility fix

Recorded: 2026-07-16T04:35:00.818Z
Tags: loader-studio, animation, matrix, holographic, compact-card, visual-fix, reduced-motion, verified

The five Matrix/Holographic loaders originally contained valid CSS animations, but their movement was too slow and subtle at the compact 112px card-preview scale, making them appear static. The fix increased depth travel, scale contrast, scan distance, signal cadence, cube/voxel rotation, holographic ring speed, and neural pulse amplitude while preserving global pause controls and prefers-reduced-motion behavior. Future animated loaders must be visually verified at card scale as well as full-preview scale.

Sources:
- backup:backup_69be700d-ca6_mrn0eafh
- files:loaders/matrix.js,loaders/holographic.js

