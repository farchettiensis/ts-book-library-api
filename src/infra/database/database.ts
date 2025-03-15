import Knex from 'knex';
import { Model } from 'objection';
import { config } from '../../config/config.js';

export const makeDatabase = () => {
  const knex = Knex({
    ...config.db[config.env],
    debug: config.env === 'development',
  });

  Model.knex(knex);

  return {
    async connect() {
      await knex.raw('SELECT 1');
      console.log('Connected to the database');
    },
    async disconnect() {
      await knex.destroy();
      console.log('Disconnected from the database');
    },
  };
};
