export type Category = 'helmet' | 'saddle' | 'vest' | 'boots' | 'horse-equipment';
export type Discipline = 'dressage' | 'jumping' | 'eventing' | 'western' | 'recreational';
export type RiderLevel = 'beginner' | 'intermediate' | 'advanced';
export type BudgetTier = 'economy' | 'mid-range' | 'premium';

export interface Product {
  id: string;
  name: string;
  category: Category;
  brand: string;
  price: number;
  shopifyUrl: string;
  imageUrl: string;
  description: string;
  features: string[];
  disciplines: Discipline[];
  riderLevels: RiderLevel[];
  budgetTier: BudgetTier;
  sizes: string[];
  tags: string[];
  crossSellIds: string[];
  rating: number;
  priority: number;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  helmet: 'Kaski',
  saddle: 'Siodła',
  vest: 'Kamizelki ochronne',
  boots: 'Buty jeździeckie',
  'horse-equipment': 'Wyposażenie konia',
};

export const CATEGORY_ICONS: Record<Category, string> = {
  helmet: '🪖',
  saddle: '🐴',
  vest: '🛡️',
  boots: '👢',
  'horse-equipment': '🐎',
};
