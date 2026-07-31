import { researchProgressLoaders } from './research-progress-loaders.js';
import { researchOverlayLoaders } from './research-overlay-loaders.js';
import { researchSkeletonLoaders } from './research-skeleton-loaders.js';

export const commonResearchLoaders = [
  ...researchProgressLoaders,
  ...researchOverlayLoaders,
  ...researchSkeletonLoaders
];
