import { startServer } from './server.js';
import { makeDatabase } from '../infra/database/database.js';

const database = makeDatabase();

(async () => {
  try {
    await database.connect();
    await startServer();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
