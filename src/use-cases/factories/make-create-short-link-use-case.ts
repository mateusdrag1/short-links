import { PostgresShortLinksRepository } from '@/repositories/postgres/postgres-short-links-repository';
import { CreateShortLinkUseCase } from '../create-short-link';

export function makeCreateShortLinkUseCase() {
  const shortLinksRepository = new PostgresShortLinksRepository();
  const useCase = new CreateShortLinkUseCase(shortLinksRepository);

  return useCase;
}
