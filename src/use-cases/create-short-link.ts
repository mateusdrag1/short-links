import { ShortLink } from '@/models/short-link-model';
import { ShortLinksRepository } from '@/repositories/short-links-repository';
import { ShortLinkAlreadyExistsError } from './errors/short-link-already-exists-error';

interface CreateShortLinkUseCaseRequest {
  url: string;
  slug: string;
}

interface CreateShortLinkUseCaseResponse {
  shortLink: ShortLink;
}

export class CreateShortLinkUseCase {
  constructor(private shortLinksRepository: ShortLinksRepository) {}

  async execute({
    url,
    slug,
  }: CreateShortLinkUseCaseRequest): Promise<CreateShortLinkUseCaseResponse> {
    const existingShortLink = await this.shortLinksRepository.findBySlug(slug);

    if (existingShortLink) {
      throw new ShortLinkAlreadyExistsError();
    }

    const shortLink = await this.shortLinksRepository.create({
      url,
      slug,
    });

    return {
      shortLink,
    };
  }
}
