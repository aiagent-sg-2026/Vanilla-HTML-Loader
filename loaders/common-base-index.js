import { commonLoaders } from './common.js';
import { commonInlineLoaders } from './common-inline.js';
import { commonPanelLoaders } from './common-panels.js';
import { commonProgressLoaders } from './common-progress.js';
import { commonMotionLoaders } from './common-motion.js';
import { commonLayoutLoaders } from './common-layouts.js';
import { commonBasicLoaders } from './common-basic.js';
import { commonContentLoaders } from './common-content-2.js';

export const commonBaseLoaders = [
  ...commonLoaders,
  ...commonInlineLoaders,
  ...commonPanelLoaders,
  ...commonProgressLoaders,
  ...commonMotionLoaders,
  ...commonLayoutLoaders,
  ...commonBasicLoaders,
  ...commonContentLoaders
];
