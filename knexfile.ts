import type { Knex } from 'knex';
import * as path from 'path';
import { fileURLToPath } from 'node:url';
import { config } from './src/config/config.js';

type KnexConfig = {
  string?: Knex.Config;
};

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const commonConfig = {
  migrations: {
    directory: path.join(__dirname, 'src/infra/database/migrations'),
  },
};

const dbConfig = Object.entries(config.db).reduce<KnexConfig>(
  (knexConfig, [envName, envConfig]) => ({
    ...knexConfig,
    [envName]: {
      ...commonConfig,
      ...envConfig,
    },
  }),
  {}
);

export default dbConfig;
