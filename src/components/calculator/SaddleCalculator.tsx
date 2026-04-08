import { useState } from 'react';
import { calculateSaddleSize } from '../../logic/sizeCalculator';
import type { SizeResult } from '../../types/calculator';
import type { SaddleMeasurement } from '../../types/calculator';
import Button from '../ui/Button';
import SizeResultDisplay from './SizeResultDisplay';

const HORSE_TYPES: { value: SaddleMeasurement['horseType']; label: string }[] = [
  { value: 'narrow', label: 'Wąski grzbiet' },
  { value: 'medium', label: 'Średni grzbiet' },
  { value: 'wide', label: 'Szeroki grzbiet' },
];

export default function SaddleCalculator() {
  const [weight, setWeight] = useState('');
  const [horseType, setHorseType] = useState<SaddleMeasurement['horseType']>('medium');
  const [result, setResult] = useState<SizeResult | null>(null);

  const handleCalculate = () => {
    const w = parseFloat(weight);
    if (w >= 30 && w <= 150) {
      setResult(calculateSaddleSize({ riderWeight: w, horseType }));
    }
  };

  return (
    <div>
      <h3 className="text-lg font-bold text-dark mb-2">Dobierz rozmiar siodła</h3>
      <p className="text-sm text-dark/60 mb-6">
        Podaj swoją wagę i typ grzbietu konia, aby dobrać optymalny rozmiar siedziska.
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-dark/70 mb-1">Twoja waga (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => { setWeight(e.target.value); setResult(null); }}
            placeholder="np. 70"
            min="30"
            max="150"
            className="w-full px-4 py-3 border-2 border-gray-mid rounded-lg text-dark focus:border-indigo focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark/70 mb-2">Typ grzbietu konia</label>
          <div className="grid grid-cols-3 gap-2">
            {HORSE_TYPES.map((ht) => (
              <button
                key={ht.value}
                onClick={() => { setHorseType(ht.value); setResult(null); }}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium border-2 cursor-pointer transition-all ${
                  horseType === ht.value
                    ? 'border-indigo bg-indigo/10 text-navy'
                    : 'border-gray-mid text-dark/70 hover:border-indigo/30'
                }`}
              >
                {ht.label}
              </button>
            ))}
          </div>
        </div>
        <Button onClick={handleCalculate} disabled={!weight}>
          Oblicz
        </Button>
      </div>
      <SizeResultDisplay result={result} />
    </div>
  );
}
