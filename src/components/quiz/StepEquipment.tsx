import type { Category } from '../../types/product';
import { CATEGORY_LABELS } from '../../types/product';
import { HelmetIcon, SaddleIcon, VestIcon, BootIcon, HorseIcon } from '../ui/Icons';
import Card from '../ui/Card';
import type { ReactNode } from 'react';

interface Props {
  value: Category[];
  onChange: (categories: Category[]) => void;
}

const CATEGORIES: { id: Category; icon: ReactNode }[] = [
  { id: 'helmet', icon: <HelmetIcon className="w-8 h-8" /> },
  { id: 'saddle', icon: <SaddleIcon className="w-8 h-8" /> },
  { id: 'vest', icon: <VestIcon className="w-8 h-8" /> },
  { id: 'boots', icon: <BootIcon className="w-8 h-8" /> },
  { id: 'horse-equipment', icon: <HorseIcon className="w-8 h-8" /> },
];

export default function StepEquipment({ value, onChange }: Props) {
  const toggle = (cat: Category) => {
    if (value.includes(cat)) {
      onChange(value.filter((c) => c !== cat));
    } else {
      onChange([...value, cat]);
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-gray-text text-center mb-6">Zaznacz wszystko, czego szukasz (możesz wybrać kilka)</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {CATEGORIES.map((cat) => (
          <Card
            key={cat.id}
            selected={value.includes(cat.id)}
            onClick={() => toggle(cat.id)}
            className="p-5 text-center"
          >
            <div className={`mb-3 transition-colors ${value.includes(cat.id) ? 'text-indigo' : 'text-gray-text'}`}>
              {cat.icon}
            </div>
            <p className="font-bold text-dark text-sm">{CATEGORY_LABELS[cat.id]}</p>
          </Card>
        ))}
      </div>
      {value.length > 0 && (
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 bg-indigo/10 text-indigo text-sm font-semibold px-4 py-1.5 rounded-full">
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            Wybrano: {value.length}
          </span>
        </div>
      )}
    </div>
  );
}
