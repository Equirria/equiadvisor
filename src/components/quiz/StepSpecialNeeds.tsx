import type { Category } from '../../types/product';
import { SPECIAL_NEEDS } from '../../data/specialNeeds';

interface Props {
  equipment: Category[];
  value: string[];
  onChange: (needs: string[]) => void;
}

export default function StepSpecialNeeds({ equipment, value, onChange }: Props) {
  const availableNeeds = equipment.flatMap((cat) => SPECIAL_NEEDS[cat] || []);
  const uniqueNeeds = availableNeeds.filter((n, i, arr) => arr.findIndex((x) => x.id === n.id) === i);

  const toggle = (id: string) => {
    if (value.includes(id)) {
      onChange(value.filter((n) => n !== id));
    } else {
      onChange([...value, id]);
    }
  };

  if (uniqueNeeds.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-dark/60">Brak dodatkowych opcji dla wybranych kategorii.</p>
        <p className="text-sm text-dark/40 mt-2">Kliknij "Dalej" aby zobaczyć rekomendacje.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-dark/60 text-center mb-6">Zaznacz opcje, które Cię dotyczą (opcjonalne)</p>
      <div className="grid gap-2">
        {uniqueNeeds.map((need) => (
          <label
            key={need.id}
            className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
              value.includes(need.id)
                ? 'border-indigo bg-indigo/5'
                : 'border-gray-mid hover:border-indigo/30'
            }`}
          >
            <input
              type="checkbox"
              checked={value.includes(need.id)}
              onChange={() => toggle(need.id)}
              className="w-4 h-4 accent-indigo"
            />
            <span className="text-sm font-medium text-dark">{need.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
