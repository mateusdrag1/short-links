import { ShortLink } from '@/models/short-link-model';
import { ShortLinksRepository } from '../short-links-repository';

export class InMemoryShortLinksRepository implements ShortLinksRepository {
  public items: ShortLink[] = [];

  async findById(id: number): Promise<ShortLink | null> {
    const shortLink = this.items.find((item) => item.id === id);

    return shortLink || null;
  }

  async findBySlug(slug: string): Promise<ShortLink | null> {
    const shortLink = this.items.find((item) => item.slug === slug);

    return shortLink || null;
  }

  async findAll(): Promise<ShortLink[]> {
    return this.items;
  }

  async create(
    shortLink: Omit<ShortLink, 'id' | 'createdAt'>,
  ): Promise<ShortLink> {
    const newShortLink = {
      id: this.items.length + 1,
      slug: shortLink.slug,
      url: shortLink.url,
      createdAt: new Date(),
    };

    this.items.push(newShortLink);

    return newShortLink;
  }
}
