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
      <p className="text-dark/60 text-center mb-6">Pomoże nam to dobrać najlepsze produkty w Twoim budżecie</p>
      <div className="grid gap-3">
        {BUDGET_RANGES.map((range) => (
          <Card
            key={range.label}
            selected={budgetMin === range.min && budgetMax === range.max}
            onClick={() => onChange(range.min, range.max)}
            className="p-4 text-center"
          >
            <p className="font-semibold text-dark">{range.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
