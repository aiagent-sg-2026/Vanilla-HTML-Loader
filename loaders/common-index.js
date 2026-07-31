import { commonBaseLoaders } from './common-base-index.js';
import { commonApplicationPackLoaders } from './common-application-index.js';
import { commonResearchLoaders } from './common-research-index.js';
import { commonWorkspaceLoaders } from './common-workspace-index.js';

export const commonPackLoaders = [
  ...commonBaseLoaders,
  ...commonApplicationPackLoaders,
  ...commonResearchLoaders,
  ...commonWorkspaceLoaders
];
