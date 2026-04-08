import type { Discipline, RiderLevel } from '../types/product';

export const RIDER_LEVELS: { value: RiderLevel; label: string; description: string }[] = [
  { value: 'beginner', label: 'Początkujący', description: 'Dopiero zaczynam przygodę z jazdą konną lub jeżdżę krócej niż 2 lata' },
  { value: 'intermediate', label: 'Średniozaawansowany', description: 'Jeżdżę regularnie od kilku lat, uczestniczę w zawodach regionalnych' },
  { value: 'advanced', label: 'Zaawansowany', description: 'Wieloletnie doświadczenie, regularne starty w zawodach' },
];

export const DISCIPLINES: { value: Discipline; label: string; icon: string }[] = [
  { value: 'dressage', label: 'Ujeżdżenie', icon: '🎩' },
  { value: 'jumping', label: 'Skoki', icon: '🏇' },
  { value: 'eventing', label: 'WKKW', icon: '🏅' },
  { value: 'western', label: 'Western', icon: '🤠' },
  { value: 'recreational', label: 'Rekreacja', icon: '🌿' },
];

export const BUDGET_RANGES = [
  { min: 0, max: 500, label: 'Do 500 zł' },
  { min: 500, max: 1000, label: '500 - 1 000 zł' },
  { min: 1000, max: 2500, label: '1 000 - 2 500 zł' },
  { min: 2500, max: 5000, label: '2 500 - 5 000 zł' },
  { min: 5000, max: 99999, label: 'Powyżej 5 000 zł' },
];

export const STEP_TITLES = [
  'Jaki jest Twój poziom?',
  'Jaka dyscyplina?',
  'Czego szukasz?',
  'Jaki masz budżet?',
  'Dodatkowe potrzeby',
];
