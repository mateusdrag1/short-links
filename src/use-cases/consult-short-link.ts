import { redis } from '@/lib/redis';
import { ShortLink } from '@/models/short-link-model';
import { ShortLinksRepository } from '@/repositories/short-links-repository';
import { ShortLinkNotFoundError } from './errors/short-link-not-found-error';

interface ConsultShortLinkUseCaseRequest {
  slug: string;
}

interface ConsultShortLinkUseCaseResponse {
  shortLink: ShortLink;
}

export class ConsultShortLinkUseCase {
  constructor(private shortLinksRepository: ShortLinksRepository) {}

  async execute({
    slug,
  }: ConsultShortLinkUseCaseRequest): Promise<ConsultShortLinkUseCaseResponse> {
    const shortLink = await this.shortLinksRepository.findBySlug(slug);

    if (!shortLink) {
      throw new ShortLinkNotFoundError();
    }

    await redis.zIncrBy('metrics', 1, String(shortLink.id));

    return {
      shortLink,
    };
  }
}
