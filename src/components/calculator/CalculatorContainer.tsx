import { useState } from 'react';
import { HelmetIcon, BootIcon, SaddleIcon, VestIcon } from '../ui/Icons';
import HelmetCalculator from './HelmetCalculator';
import BootCalculator from './BootCalculator';
import SaddleCalculator from './SaddleCalculator';
import VestCalculator from './VestCalculator';
import type { ReactNode } from 'react';

const TABS: { id: string; label: string; icon: ReactNode }[] = [
  { id: 'helmet', label: 'Kask', icon: <HelmetIcon className="w-5 h-5" /> },
  { id: 'boots', label: 'Buty', icon: <BootIcon className="w-5 h-5" /> },
  { id: 'saddle', label: 'Siodło', icon: <SaddleIcon className="w-5 h-5" /> },
  { id: 'vest', label: 'Kamizelka', icon: <VestIcon className="w-5 h-5" /> },
];

export default function CalculatorContainer() {
  const [activeTab, setActiveTab] = useState<string>('helmet');

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex gap-1.5 bg-gray-light p-1.5 rounded-2xl mb-8 shadow-inner">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer border-none ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-navy to-indigo text-white shadow-md shadow-navy/20'
                : 'text-gray-text hover:text-dark hover:bg-white/80'
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="bg-white rounded-2xl border border-gray-mid/50 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-6 sm:p-8">
        {activeTab === 'helmet' && <HelmetCalculator />}
        {activeTab === 'boots' && <BootCalculator />}
        {activeTab === 'saddle' && <SaddleCalculator />}
        {activeTab === 'vest' && <VestCalculator />}
      </div>
    </div>
  );
}
