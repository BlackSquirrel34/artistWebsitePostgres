import * as migration_20251025_170159 from './20251025_170159';
import * as migration_20251025_170643 from './20251025_170643';

export const migrations = [
  {
    up: migration_20251025_170159.up,
    down: migration_20251025_170159.down,
    name: '20251025_170159',
  },
  {
    up: migration_20251025_170643.up,
    down: migration_20251025_170643.down,
    name: '20251025_170643'
  },
];
