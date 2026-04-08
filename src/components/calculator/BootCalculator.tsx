import { useState } from 'react';
import { calculateBootSize } from '../../logic/sizeCalculator';
import type { SizeResult } from '../../types/calculator';
import Button from '../ui/Button';
import SizeResultDisplay from './SizeResultDisplay';

export default function BootCalculator() {
  const [footLength, setFootLength] = useState('');
  const [calfCirc, setCalfCirc] = useState('');
  const [result, setResult] = useState<SizeResult | null>(null);

  const handleCalculate = () => {
    const fl = parseFloat(footLength);
    const cc = parseFloat(calfCirc);
    if (fl >= 20 && fl <= 32 && cc >= 25 && cc <= 50) {
      setResult(calculateBootSize({ footLength: fl, calfCircumference: cc }));
    }
  };

  return (
    <div>
      <h3 className="text-lg font-bold text-dark mb-2">Dobierz rozmiar butów</h3>
      <p className="text-sm text-dark/60 mb-6">
        Zmierz długość stopy (od pięty do najdłuższego palca) oraz obwód łydki w najszerszym miejscu.
      </p>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block text-sm font-medium text-dark/70 mb-1">Długość stopy (cm)</label>
          <input
            type="number"
            value={footLength}
            onChange={(e) => { setFootLength(e.target.value); setResult(null); }}
            placeholder="np. 25.5"
            min="20"
            max="32"
            step="0.1"
            className="w-full px-4 py-3 border-2 border-gray-mid rounded-lg text-dark focus:border-indigo focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark/70 mb-1">Obwód łydki (cm)</label>
          <input
            type="number"
            value={calfCirc}
            onChange={(e) => { setCalfCirc(e.target.value); setResult(null); }}
            placeholder="np. 36"
            min="25"
            max="50"
            step="0.5"
            className="w-full px-4 py-3 border-2 border-gray-mid rounded-lg text-dark focus:border-indigo focus:outline-none transition-colors"
          />
        </div>
      </div>
      <Button onClick={handleCalculate} disabled={!footLength || !calfCirc}>
        Oblicz
      </Button>
      <SizeResultDisplay result={result} />
    </div>
  );
}
