import * as migration_20251025_170159 from './20251025_170159';
import * as migration_20251025_170643 from './20251025_170643';
import * as migration_20251112_100838_newest from './20251112_100838_newest';

export const migrations = [
  {
    up: migration_20251025_170159.up,
    down: migration_20251025_170159.down,
    name: '20251025_170159',
  },
  {
    up: migration_20251025_170643.up,
    down: migration_20251025_170643.down,
    name: '20251025_170643',
  },
  {
    up: migration_20251112_100838_newest.up,
    down: migration_20251112_100838_newest.down,
    name: '20251112_100838_newest'
  },
];
