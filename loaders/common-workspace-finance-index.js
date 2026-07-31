import { commonNetworkLoaders } from './common-network-loaders.js';
import { commonAccessLoaders } from './common-access-loaders.js';
import { commonQueueSettingsLoaders } from './common-queue-settings-loaders.js';
import { commonSessionRecordLoaders } from './common-session-record-loaders.js';
import { commonFinanceCalculationLoaders } from './common-finance-calculation-loaders.js';
import { commonLookupLedgerLoaders } from './common-lookup-ledger-loaders.js';
import { commonFinanceSkeletonLoadersF } from './common-finance-skeletons-f.js';

export const commonWorkspaceFinanceLoaders = [
  ...commonNetworkLoaders,
  ...commonAccessLoaders,
  ...commonQueueSettingsLoaders,
  ...commonSessionRecordLoaders,
  ...commonFinanceCalculationLoaders,
  ...commonLookupLedgerLoaders,
  ...commonFinanceSkeletonLoadersF
];
