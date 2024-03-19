import { PostgresShortLinksRepository } from '@/repositories/postgres/postgres-short-links-repository';
import { HistoryShortLinkUseCase } from '../history-short-link';

export function makeHistoryShortLinkUseCase() {
  const shortLinksRepository = new PostgresShortLinksRepository();
  const useCase = new HistoryShortLinkUseCase(shortLinksRepository);

  return useCase;
}
