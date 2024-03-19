import { ShortLink } from '@/models/short-link-model';
import { ShortLinksRepository } from '@/repositories/short-links-repository';

interface HistoryShortLinkUseCaseResponse {
  shortLinks: ShortLink[];
}

export class HistoryShortLinkUseCase {
  constructor(private shortLinksRepository: ShortLinksRepository) {}

  async execute(): Promise<HistoryShortLinkUseCaseResponse> {
    const shortLinks = await this.shortLinksRepository.findAll();

    return {
      shortLinks,
    };
  }
}
