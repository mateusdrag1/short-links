import { sql } from '@/lib/postgres';
import { ShortLink } from '@/models/short-link-model';
import { ShortLinksRepository } from '../short-links-repository';

export class PostgresShortLinksRepository implements ShortLinksRepository {
  async findById(id: number): Promise<ShortLink | null> {
    const shortLink = await sql/* sql */ `
      SELECT * FROM short_links WHERE id = ${id};
    `;

    const result = shortLink[0] as ShortLink | null;

    return result || null;
  }

  async findBySlug(slug: string): Promise<ShortLink | null> {
    const shortLink = await sql/* sql */ `
      SELECT * FROM short_links WHERE slug = ${slug};
    `;

    const result = shortLink[0] as ShortLink | null;

    return result || null;
  }

  async findAll(): Promise<ShortLink[]> {
    const shortLinks = await sql<ShortLink[]>/* sql */ `
      SELECT * FROM short_links;
    `;

    const result = shortLinks;

    return result;
  }

  async create(
    shortLink: Omit<ShortLink, 'id' | 'createdAt'>,
  ): Promise<ShortLink> {
    const result = await sql/* sql */ `
      INSERT INTO short_links (slug, url)
      VALUES (${shortLink.slug}, ${shortLink.url})
      RETURNING *;
    `;

    const newShortLink = result[0] as ShortLink;

    return newShortLink;
  }
}
