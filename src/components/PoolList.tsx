import { Badge } from './ui/Badge';

interface Pool {
  id: string;
  token0: string;
  token1: string;
  liquidity: number;
  volume24h: number;
  apy: number;
}

interface PoolListProps {
  pools: Pool[];
}

const PoolList = ({ pools }: PoolListProps) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(num);
  };

  return (
    <div className="pool-grid">
      {pools.map((pool) => (
        <div key={pool.id} className="card">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="pixel-text text-lg">{pool.token0}/{pool.token1}</h4>
              <p className="text-text-secondary text-sm">Pool ID: {pool.id}</p>
            </div>
            <Badge variant="success">{pool.apy.toFixed(2)}% APY</Badge>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-text-secondary text-sm">Liquidity</p>
              <p className="text-lg font-bold">{formatNumber(pool.liquidity)}</p>
            </div>
            <div>
              <p className="text-text-secondary text-sm">24h Volume</p>
              <p className="text-lg font-bold">{formatNumber(pool.volume24h)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PoolList; 