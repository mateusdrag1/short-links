import { ShortLink } from '@/models/short-link-model';

export interface ShortLinksRepository {
  findById(id: number): Promise<ShortLink | null>;
  findBySlug(slug: string): Promise<ShortLink | null>;
  findAll(): Promise<ShortLink[]>;
  create(shortLink: Omit<ShortLink, 'id' | 'createdAt'>): Promise<ShortLink>;
}
