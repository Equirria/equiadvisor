import type { Category } from '../../types/product';
import { SPECIAL_NEEDS } from '../../data/specialNeeds';
import { CheckIcon } from '../ui/Icons';

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
      <div className="text-center py-12 bg-gray-light rounded-2xl">
        <div className="text-4xl mb-3 opacity-40">🔧</div>
        <p className="text-gray-text font-medium">Brak dodatkowych opcji dla wybranych kategorii.</p>
        <p className="text-sm text-gray-text/60 mt-1">Kliknij "Dalej" aby zobaczyć rekomendacje.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-text text-center mb-6">Zaznacz opcje, które Cię dotyczą (opcjonalne)</p>
      <div className="grid gap-2">
        {uniqueNeeds.map((need) => {
          const checked = value.includes(need.id);
          return (
            <label
              key={need.id}
              className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                checked
                  ? 'border-indigo bg-indigo/5 shadow-sm'
                  : 'border-gray-mid/50 hover:border-indigo/30 hover:bg-gray-light/50'
              }`}
            >
              <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-all ${
                checked ? 'bg-gradient-to-br from-indigo to-indigo-light text-white' : 'border-2 border-gray-mid'
              }`}>
                {checked && <CheckIcon className="w-3.5 h-3.5" />}
              </div>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggle(need.id)}
                className="sr-only"
              />
              <span className="text-sm font-medium text-dark">{need.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
