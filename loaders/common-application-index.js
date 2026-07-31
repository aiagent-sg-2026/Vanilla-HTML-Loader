import { commonControlLoaders } from './common-controls.js';
import { commonShellSkeletonLoaders } from './common-shell-skeletons.js';
import { commonApplicationLoaders } from './common-application.js';
import { commonDataSkeletonLoaders } from './common-data-skeletons.js';
import { commonFeedbackLoaders } from './common-feedback.js';
import { commonStateLoaders } from './common-state-loaders.js';
import { commonStructureLoaders } from './common-structure-skeletons.js';

export const commonApplicationPackLoaders = [
  ...commonControlLoaders,
  ...commonShellSkeletonLoaders,
  ...commonApplicationLoaders,
  ...commonDataSkeletonLoaders,
  ...commonFeedbackLoaders,
  ...commonStateLoaders,
  ...commonStructureLoaders
];
