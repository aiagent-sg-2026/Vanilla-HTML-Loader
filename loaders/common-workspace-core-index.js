import { commonHierarchyLoaders } from './common-hierarchy-loaders.js';
import { commonTableNavigationLoaders } from './common-table-navigation-loaders.js';
import { commonWorkspaceSkeletonLoadersA } from './common-workspace-skeletons-a.js';
import { commonWorkspaceSkeletonLoadersB } from './common-workspace-skeletons-b.js';
import { commonStatusLoaders2 } from './common-status-loaders-2.js';
import { commonPanelLoaders2 } from './common-panel-loaders-2.js';

export const commonWorkspaceCoreLoaders = [
  ...commonHierarchyLoaders,
  ...commonTableNavigationLoaders,
  ...commonWorkspaceSkeletonLoadersA,
  ...commonWorkspaceSkeletonLoadersB,
  ...commonStatusLoaders2,
  ...commonPanelLoaders2
];
