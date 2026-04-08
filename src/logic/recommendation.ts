import type { Product } from '../types/product';
import type { QuizAnswers } from '../types/quiz';

interface ScoredProduct extends Product {
  score: number;
}

export function getRecommendations(answers: QuizAnswers, products: Product[]): { primary: Product[]; crossSell: Product[] } {
  const filtered = products.filter((p) => {
    if (!answers.equipment.includes(p.category)) return false;
    if (p.price < answers.budgetMin || p.price > answers.budgetMax) return false;
    return true;
  });

  const scored: ScoredProduct[] = filtered.map((p) => {
    let score = 0;
    if (p.riderLevels.includes(answers.riderLevel)) score += 3;
    if (p.disciplines.includes(answers.discipline)) score += 3;
    for (const need of answers.specialNeeds) {
      if (p.tags.includes(need)) score += 1;
    }
    score += (p.priority / 10) * 2;
    score += (p.rating / 5) * 1;
    return { ...p, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const primaryByCategory = new Map<string, Product[]>();
  for (const p of scored) {
    const existing = primaryByCategory.get(p.category) || [];
    if (existing.length < 3) {
      primaryByCategory.set(p.category, [...existing, p]);
    }
  }

  const primary = Array.from(primaryByCategory.values()).flat();
  const primaryIds = new Set(primary.map((p) => p.id));

  const crossSellIds = new Set<string>();
  for (const p of primary) {
    for (const csId of p.crossSellIds) {
      if (!primaryIds.has(csId)) crossSellIds.add(csId);
    }
  }

  const crossSell = products.filter((p) => crossSellIds.has(p.id)).slice(0, 4);

  return { primary, crossSell };
}
