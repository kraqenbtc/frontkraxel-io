import { KraxelMetrics } from '@/types/api';

export async function getKraxelMetrics(): Promise<KraxelMetrics> {
  const response = await fetch('https://api.kraxel.io/api/metrics');
  if (!response.ok) {
    throw new Error('Failed to fetch metrics');
  }
  return response.json();
} 