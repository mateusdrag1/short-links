import { MetricsShortLinkUseCase } from '@/use-cases/metrics-short-link';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function metrics(request: FastifyRequest, reply: FastifyReply) {
  const metricsShortLinkUseCase = new MetricsShortLinkUseCase();
  const metrics = await metricsShortLinkUseCase.execute();

  return reply.code(200).send(metrics);
}
