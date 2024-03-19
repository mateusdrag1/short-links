import { ShortLinkAlreadyExistsError } from '@/use-cases/errors/short-link-already-exists-error';
import { makeCreateShortLinkUseCase } from '@/use-cases/factories/make-create-short-link-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import z from 'zod';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createBodySchema = z.object({
    url: z.string(),
    slug: z.string(),
  });

  const { url, slug } = createBodySchema.parse(request.body);

  try {
    const createShortLinkUseCase = makeCreateShortLinkUseCase();
    const shortLink = await createShortLinkUseCase.execute({ url, slug });

    return reply.code(201).send(shortLink);
  } catch (error) {
    if (error instanceof ShortLinkAlreadyExistsError) {
      return reply.code(409).send({ message: 'Short link already exists' });
    }

    throw error;
  }
}
