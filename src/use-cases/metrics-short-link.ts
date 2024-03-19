import { redis } from '@/lib/redis';
import { Metrics } from '@/models/metrics-model';

interface MetricsShortLinkUseCaseResponse {
  metrics: Metrics[];
}

export class MetricsShortLinkUseCase {
  async execute(): Promise<MetricsShortLinkUseCaseResponse> {
    const result = await redis.zRangeByScoreWithScores('metrics', 0, 50);

    const metrics = result
      .sort((a, b) => b.score - a.score)
      .map((item) => {
        return {
          shortLinkId: Number(item.value),
          clicks: item.score,
        };
      });

    return {
      metrics,
    };
  }
}
