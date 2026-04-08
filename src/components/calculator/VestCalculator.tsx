import { useState } from 'react';
import { calculateVestSize } from '../../logic/sizeCalculator';
import type { SizeResult } from '../../types/calculator';
import Button from '../ui/Button';
import SizeResultDisplay from './SizeResultDisplay';

export default function VestCalculator() {
  const [chest, setChest] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState<SizeResult | null>(null);

  const handleCalculate = () => {
    const c = parseFloat(chest);
    const h = parseFloat(height);
    if (c >= 60 && c <= 130 && h >= 140 && h <= 210) {
      setResult(calculateVestSize({ chestCircumference: c, height: h }));
    }
  };

  return (
    <div>
      <h3 className="text-lg font-bold text-dark mb-2">Dobierz rozmiar kamizelki ochronnej</h3>
      <p className="text-sm text-dark/60 mb-6">
        Zmierz obwód klatki piersiowej pod pachami oraz swój wzrost.
      </p>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block text-sm font-medium text-dark/70 mb-1">Obwód kl. piersiowej (cm)</label>
          <input
            type="number"
            value={chest}
            onChange={(e) => { setChest(e.target.value); setResult(null); }}
            placeholder="np. 92"
            min="60"
            max="130"
            className="w-full px-4 py-3 border-2 border-gray-mid rounded-lg text-dark focus:border-indigo focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark/70 mb-1">Wzrost (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => { setHeight(e.target.value); setResult(null); }}
            placeholder="np. 170"
            min="140"
            max="210"
            className="w-full px-4 py-3 border-2 border-gray-mid rounded-lg text-dark focus:border-indigo focus:outline-none transition-colors"
          />
        </div>
      </div>
      <Button onClick={handleCalculate} disabled={!chest || !height}>
        Oblicz
      </Button>
      <SizeResultDisplay result={result} />
    </div>
  );
}
