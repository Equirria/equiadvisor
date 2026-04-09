import { RIDER_LEVELS } from '../../data/quizOptions';
import type { RiderLevel } from '../../types/product';
import Card from '../ui/Card';

interface Props {
  value?: RiderLevel;
  onChange: (level: RiderLevel) => void;
}

const levelEmojis: Record<string, string> = {
  beginner: '🌱',
  intermediate: '⭐',
  advanced: '🏆',
};

export default function StepRiderLevel({ value, onChange }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-gray-text text-center mb-6">Pomożemy dobrać sprzęt dopasowany do Twojego doświadczenia</p>
      <div className="grid gap-3">
        {RIDER_LEVELS.map((level) => (
          <Card
            key={level.value}
            selected={value === level.value}
            onClick={() => onChange(level.value)}
            className="p-5 flex items-start gap-4"
          >
            <div className="text-2xl flex-shrink-0 mt-0.5">{levelEmojis[level.value]}</div>
            <div>
              <p className="font-bold text-dark">{level.label}</p>
              <p className="text-sm text-gray-text mt-1 leading-relaxed">{level.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
