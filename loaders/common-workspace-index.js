import { commonWorkspaceCoreLoaders } from './common-workspace-core-index.js';
import { commonWorkspaceBusinessLoaders } from './common-workspace-business-index.js';
import { commonWorkspaceFinanceLoaders } from './common-workspace-finance-index.js';

export const commonWorkspaceLoaders = [
  ...commonWorkspaceCoreLoaders,
  ...commonWorkspaceBusinessLoaders,
  ...commonWorkspaceFinanceLoaders
];
