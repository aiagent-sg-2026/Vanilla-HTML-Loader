import { dotLoaders } from './dots.js';
import { dotsPack2LoadersA } from './dots-pack-2-a.js';
import { dotsPack2LoadersB } from './dots-pack-2-b.js';
import { dotsPack3LoadersA } from './dots-pack-3-a.js';
import { dotsPack3LoadersB } from './dots-pack-3-b.js';

export const dotPackLoaders = [
  ...dotLoaders,
  ...dotsPack2LoadersA,
  ...dotsPack2LoadersB,
  ...dotsPack3LoadersA,
  ...dotsPack3LoadersB
];
