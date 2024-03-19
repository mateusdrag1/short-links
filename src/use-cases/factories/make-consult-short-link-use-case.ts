import { PostgresShortLinksRepository } from '@/repositories/postgres/postgres-short-links-repository';
import { ConsultShortLinkUseCase } from '../consult-short-link';

export function makeConsultShortLinkUseCase() {
  const shortLinksRepository = new PostgresShortLinksRepository();
  const useCase = new ConsultShortLinkUseCase(shortLinksRepository);

  return useCase;
}
