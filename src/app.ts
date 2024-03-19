import fastify from 'fastify';
import { ZodError } from 'zod';
import { env } from './env';
import { shortLinksRoutes } from './http/controllers/short-links/routes';

export const app = fastify();

app.register(shortLinksRoutes);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Validation Error!',
      issues: error.format(),
    });
  }

  if (env.NODE_ENV !== 'production') {
    console.error('❌ Internal Server Error:', error);
  } else {
    console.error('❌ Internal Server Error');
  }

  return reply.status(500).send({
    message: 'Internal Server Error',
  });
});
