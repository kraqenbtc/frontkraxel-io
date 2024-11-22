import Link from 'next/link';
import { BarChart2, Settings, Activity } from 'lucide-react';

const Header = () => {
  return (
    <header className="mb-8">
      <nav className="flex items-center justify-between py-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="pixel-text text-3xl text-purple-500 hover:text-purple-400 transition-colors animate-pulse">
            KRAXEL
          </span>
          <span className="badge">BETA</span>
        </Link>
        
        <div className="flex items-center space-x-8">
          <Link href="/analytics" className="nav-link">
            <BarChart2 className="w-5 h-5" />
            <span>Analytics</span>
          </Link>
          <Link href="/trading" className="nav-link">
            <Activity className="w-5 h-5" />
            <span>Trading</span>
          </Link>
          <Link href="/settings" className="nav-link">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 