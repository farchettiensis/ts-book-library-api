import { config } from '../config/config.js';
import Fastify from 'fastify';

export const makeServer = () => {
  return Fastify({ logger: true });
};

export const startServer = async () => {
  const server = makeServer();

  try {
    const address = await server.listen({ port: config.http.port });
    console.log(`Server listening at ${address}`);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};
