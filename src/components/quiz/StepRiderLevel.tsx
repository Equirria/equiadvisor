import { RIDER_LEVELS } from '../../data/quizOptions';
import type { RiderLevel } from '../../types/product';
import Card from '../ui/Card';

interface Props {
  value?: RiderLevel;
  onChange: (level: RiderLevel) => void;
}

export default function StepRiderLevel({ value, onChange }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-dark/60 text-center mb-6">Pomożemy dobrać sprzęt dopasowany do Twojego doświadczenia</p>
      <div className="grid gap-3">
        {RIDER_LEVELS.map((level) => (
          <Card
            key={level.value}
            selected={value === level.value}
            onClick={() => onChange(level.value)}
            className="p-4"
          >
            <p className="font-semibold text-dark">{level.label}</p>
            <p className="text-sm text-dark/60 mt-1">{level.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
