import { FastifyInstance } from 'fastify';
import { consult } from './consult';
import { create } from './create';
import { history } from './history';
import { metrics } from './metrics';

export async function shortLinksRoutes(app: FastifyInstance) {
  app.post('/api/links', create);
  app.get('/api/links', history);
  app.get('/:slug', consult);
  app.get('/api/metrics', metrics);
}
