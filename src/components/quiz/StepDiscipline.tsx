import { DISCIPLINES } from '../../data/quizOptions';
import type { Discipline } from '../../types/product';
import Card from '../ui/Card';

interface Props {
  value?: Discipline;
  onChange: (d: Discipline) => void;
}

export default function StepDiscipline({ value, onChange }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-dark/60 text-center mb-6">Każda dyscyplina ma inne wymagania co do sprzętu</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {DISCIPLINES.map((d) => (
          <Card
            key={d.value}
            selected={value === d.value}
            onClick={() => onChange(d.value)}
            className="p-4 text-center"
          >
            <div className="text-3xl mb-2">{d.icon}</div>
            <p className="font-semibold text-dark text-sm">{d.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
