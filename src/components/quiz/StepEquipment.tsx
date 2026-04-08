import type { Category } from '../../types/product';
import { CATEGORY_LABELS, CATEGORY_ICONS } from '../../types/product';
import Card from '../ui/Card';

interface Props {
  value: Category[];
  onChange: (categories: Category[]) => void;
}

const CATEGORIES: Category[] = ['helmet', 'saddle', 'vest', 'boots', 'horse-equipment'];

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
      <p className="text-dark/60 text-center mb-6">Zaznacz wszystko, czego szukasz (możesz wybrać kilka)</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {CATEGORIES.map((cat) => (
          <Card
            key={cat}
            selected={value.includes(cat)}
            onClick={() => toggle(cat)}
            className="p-4 text-center"
          >
            <div className="text-3xl mb-2">{CATEGORY_ICONS[cat]}</div>
            <p className="font-semibold text-dark text-sm">{CATEGORY_LABELS[cat]}</p>
          </Card>
        ))}
      </div>
      {value.length > 0 && (
        <p className="text-center text-sm text-indigo font-medium">Wybrano: {value.length}</p>
      )}
    </div>
  );
}
