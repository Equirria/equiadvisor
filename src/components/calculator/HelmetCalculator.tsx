import { useState } from 'react';
import { calculateHelmetSize } from '../../logic/sizeCalculator';
import type { SizeResult } from '../../types/calculator';
import Button from '../ui/Button';
import SizeResultDisplay from './SizeResultDisplay';

export default function HelmetCalculator() {
  const [circumference, setCircumference] = useState('');
  const [result, setResult] = useState<SizeResult | null>(null);

  const handleCalculate = () => {
    const val = parseFloat(circumference);
    if (val >= 48 && val <= 65) {
      setResult(calculateHelmetSize({ headCircumference: val }));
    }
  };

  return (
    <div>
      <h3 className="text-lg font-bold text-dark mb-2">Dobierz rozmiar kasku</h3>
      <p className="text-sm text-dark/60 mb-6">
        Zmierz obwód głowy centymetrem krawieckim, prowadząc go nad uszami i nad brwiami.
      </p>
      <div className="flex gap-3 items-end">
        <div className="flex-1">
          <label className="block text-sm font-medium text-dark/70 mb-1">Obwód głowy (cm)</label>
          <input
            type="number"
            value={circumference}
            onChange={(e) => { setCircumference(e.target.value); setResult(null); }}
            placeholder="np. 56"
            min="48"
            max="65"
            step="0.5"
            className="w-full px-4 py-3 border-2 border-gray-mid rounded-lg text-dark focus:border-indigo focus:outline-none transition-colors"
          />
        </div>
        <Button onClick={handleCalculate} disabled={!circumference}>
          Oblicz
        </Button>
      </div>
      <SizeResultDisplay result={result} />
    </div>
  );
}
