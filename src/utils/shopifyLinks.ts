import type { Category, Product } from '../types/product';

const UTM_PARAMS = 'utm_source=equiadvisor&utm_medium=quiz&utm_campaign=recommendation';

export function getProductUrl(product: Product): string {
  const separator = product.shopifyUrl.includes('?') ? '&' : '?';
  return `${product.shopifyUrl}${separator}${UTM_PARAMS}`;
}

const COLLECTION_URLS: Record<Category, string> = {
  helmet: 'https://equishop.com/collections/kaski',
  saddle: 'https://equishop.com/collections/siodla',
  vest: 'https://equishop.com/collections/kamizelki-ochronne',
  boots: 'https://equishop.com/collections/buty-jezdzieckie',
  'horse-equipment': 'https://equishop.com/collections/dla-konia',
};

export function getCategoryUrl(category: Category): string {
  return `${COLLECTION_URLS[category]}?${UTM_PARAMS}`;
}

export function getSearchUrl(query: string): string {
  return `https://equishop.com/search?q=${encodeURIComponent(query)}&${UTM_PARAMS}`;
}
