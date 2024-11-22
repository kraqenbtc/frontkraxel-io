import DexCard from "@/components/DexCard";
import PoolList from "@/components/PoolList";
import Link from 'next/link';
import { Wrench } from 'lucide-react';
import Image from 'next/image';
import { getKraxelMetrics } from '@/lib/api';

const gridStyles = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

export default async function Home() {
  const metrics = await getKraxelMetrics();

  const dexData = [
    {
      name: "Charisma",
      logo: "/images/charisma-logo.png",
      volume24h: "X",
      tvl: "X",
      trades24h: metrics.swaps.bySource.charisma,
      poolCount: metrics.pools.bySource.charisma,
      status: "active" as const
    },
    {
      name: "Velar",
      logo: "/images/velar-logo.png",
      volume24h: "X",
      tvl: "X",
      trades24h: metrics.swaps.bySource.velar,
      poolCount: metrics.pools.bySource.velar,
      status: "active" as const
    },
    {
      name: "AlexLAB",
      logo: "/images/alexlab-logo.png",
      status: "maintenance" as const,
      maintenanceMsg: "Under Development"
    }
  ];

  const poolsData = [
    {
      id: "1",
      token0: "ETH",
      token1: "USDC",
      liquidity: 5000000,
      volume24h: 1000000,
      apy: 12.5,
    },
    {
      id: "2",
      token0: "BTC",
      token1: "USDT",
      liquidity: 7500000,
      volume24h: 2000000,
      apy: 15.8,
    },
    {
      id: "3",
      token0: "SOL",
      token1: "USDC",
      liquidity: 3000000,
      volume24h: 800000,
      apy: 18.2,
    },
  ];

  return (
    <div className="space-y-16">
      <section className="text-center mb-12">
        <div className="flex items-center justify-center space-x-6 mb-4">
          <div className="relative w-24 h-24">
            <Image
              src="/images/kraxel-logo.png"
              alt="KRAXEL"
              fill
              className="object-contain animate-pulse-slow"
            />
          </div>
          <div className="text-left">
            <h1 className="pixel-text text-4xl mb-2 text-purple-500">
              Advanced DEX Analytics
            </h1>
            <p className="text-text-secondary text-lg pixel-text">
              Explore pixel by pixel
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dexData.map((dex, index) => (
            <DexCard key={index} {...dex} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="pixel-text text-2xl">Trending Pools</h2>
          <Link href="/pools" className="pixel-button">
            View All
          </Link>
        </div>
        <PoolList pools={poolsData} />
      </section>
    </div>
  );
}
