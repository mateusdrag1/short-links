import { ShortLinkNotFoundError } from '@/use-cases/errors/short-link-not-found-error';
import { makeConsultShortLinkUseCase } from '@/use-cases/factories/make-consult-short-link-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import z from 'zod';

export async function consult(request: FastifyRequest, reply: FastifyReply) {
  const consultParamsSchema = z.object({
    slug: z.string().min(3),
  });

  const { slug } = consultParamsSchema.parse(request.params);

  try {
    const consultShortLinkUseCase = makeConsultShortLinkUseCase();
    const shortLink = await consultShortLinkUseCase.execute({ slug });

    return reply.redirect(301, shortLink.shortLink.url);
  } catch (error) {
    if (error instanceof ShortLinkNotFoundError) {
      return reply.code(404).send({
        message: 'The short link does not exist',
      });
    }

    throw error;
  }
}
