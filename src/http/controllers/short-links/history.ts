import { makeHistoryShortLinkUseCase } from '@/use-cases/factories/make-history-short-link-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function history(request: FastifyRequest, reply: FastifyReply) {
  const historyShortLinkUseCase = makeHistoryShortLinkUseCase();
  const shortLinks = await historyShortLinkUseCase.execute();

  return reply.code(200).send(shortLinks);
}
