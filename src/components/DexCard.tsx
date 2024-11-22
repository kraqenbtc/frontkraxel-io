import { Wrench } from 'lucide-react';
import { Badge } from './ui/Badge';
import Image from 'next/image';

interface DexCardProps {
  name: string;
  logo: string;
  volume24h?: string | number;
  tvl?: string | number;
  trades24h?: number;
  poolCount?: number;
  status: "active" | "maintenance";
  maintenanceMsg?: string;
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(num);
};

const DexCard = ({ 
  name, 
  logo,
  volume24h = "X",
  tvl = "X",
  trades24h = 0,
  poolCount = 0,
  status, 
  maintenanceMsg 
}: DexCardProps) => {
  if (status === "maintenance") {
    return (
      <div className="card min-h-[160px] bg-gray-800/30 grayscale">
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <div className="relative w-20 h-20 mb-2 opacity-50 invert">
            <Image
              src={logo}
              alt={name}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Wrench className="w-5 h-5 text-red-500 animate-spin-slow" />
            <h3 className="pixel-text text-lg text-gray-400">{name}</h3>
          </div>
          <Badge variant="warning" className="pixel-text">
            {maintenanceMsg || 'Maintenance Mode'}
          </Badge>
          <p className="text-sm text-gray-500 text-center mt-2">
            Coming Soon
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card min-h-[160px]">
      <div className="flex items-center space-x-3 mb-6">
        <div className="relative w-16 h-16">
          <Image
            src={logo}
            alt={name}
            fill
            className={`object-contain ${name === "Charisma" ? "invert" : ""}`}
          />
        </div>
        <h3 className="pixel-text text-lg">{name}</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-text-secondary text-sm">24h Volume</p>
          <p className="text-base font-bold">
            {typeof volume24h === 'number' ? formatNumber(volume24h) : volume24h}
          </p>
        </div>
        <div>
          <p className="text-text-secondary text-sm">TVL</p>
          <p className="text-base font-bold">
            {typeof tvl === 'number' ? formatNumber(tvl) : tvl}
          </p>
        </div>
        <div>
          <p className="text-text-secondary text-sm">24h Trades</p>
          <p className="text-base font-bold">{trades24h.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-text-secondary text-sm">Total Pools</p>
          <p className="text-base font-bold">{poolCount}</p>
        </div>
      </div>
    </div>
  );
};

export default DexCard; 