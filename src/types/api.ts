export interface KraxelMetrics {
  pools: {
    total: number;
    bySource: {
      charisma: number;
      velar: number;
    };
  };
  swaps: {
    total: number;
    last24h: number;
    bySource: {
      velar: number;
      charisma: number;
    };
  };
  performance: {
    avgResponseTime: number;
    errorRate: number;
  };
} 