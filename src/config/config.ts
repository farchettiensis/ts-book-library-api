import 'dotenv/config';
import { Env, EnvType } from '../_lib/env.js';

const env = Env.string('NODE_ENV', 'development') as EnvType;

const db = {
  development: {
    client: 'postgresql',
    connection: {
      host: Env.string('DB_HOST', 'localhost'),
      port: Env.number('DB_PORT', 5432),
      user: Env.string('DB_USER', 'postgres'),
      password: Env.string('DB_PASSWORD', 'postgres'),
      database: Env.string('DB_NAME', 'library_dev'),
    },
  },

  test: {
    client: 'postgresql',
    connection: {
      host: Env.string('DB_HOST', 'localhost'),
      port: Env.number('DB_PORT', 5432),
      user: Env.string('DB_USER', 'postgres'),
      password: Env.string('DB_PASSWORD', 'postgres'),
      database: Env.string('DB_NAME', 'library_test'),
    },
  },
} as const;

const http = {
  port: Env.number('PORT', 3000),
};

const config = {
  env,
  http,
  db,
};

type Config = typeof config;

export { config };
export type { Config };
