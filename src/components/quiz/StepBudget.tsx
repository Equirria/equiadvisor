import { BUDGET_RANGES } from '../../data/quizOptions';
import Card from '../ui/Card';

interface Props {
  budgetMin?: number;
  budgetMax?: number;
  onChange: (min: number, max: number) => void;
}

export default function StepBudget({ budgetMin, budgetMax, onChange }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-gray-text text-center mb-6">Pomoże nam to dobrać najlepsze produkty w Twoim budżecie</p>
      <div className="grid gap-3">
        {BUDGET_RANGES.map((range) => {
          const selected = budgetMin === range.min && budgetMax === range.max;
          return (
            <Card
              key={range.label}
              selected={selected}
              onClick={() => onChange(range.min, range.max)}
              className="p-4 flex items-center gap-4"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${selected ? 'bg-indigo text-white' : 'bg-gray-light text-gray-text'}`}>
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>
              </div>
              <p className="font-bold text-dark">{range.label}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
