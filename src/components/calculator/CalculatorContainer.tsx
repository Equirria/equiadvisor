import { useState } from 'react';
import HelmetCalculator from './HelmetCalculator';
import BootCalculator from './BootCalculator';
import SaddleCalculator from './SaddleCalculator';
import VestCalculator from './VestCalculator';

const TABS = [
  { id: 'helmet', label: 'Kask', icon: '🪖' },
  { id: 'boots', label: 'Buty', icon: '👢' },
  { id: 'saddle', label: 'Siodło', icon: '🐴' },
  { id: 'vest', label: 'Kamizelka', icon: '🛡️' },
] as const;

export default function CalculatorContainer() {
  const [activeTab, setActiveTab] = useState<string>('helmet');

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex gap-1 bg-gray-light p-1 rounded-xl mb-8">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer border-none ${
              activeTab === tab.id
                ? 'bg-navy text-cream shadow-sm'
                : 'text-dark/60 hover:text-dark hover:bg-white'
            }`}
          >
            <span>{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>
      {activeTab === 'helmet' && <HelmetCalculator />}
      {activeTab === 'boots' && <BootCalculator />}
      {activeTab === 'saddle' && <SaddleCalculator />}
      {activeTab === 'vest' && <VestCalculator />}
    </div>
  );
}
