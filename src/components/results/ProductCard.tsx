import type { Product } from '../../types/product';
import { CATEGORY_LABELS } from '../../types/product';
import { HelmetIcon, SaddleIcon, VestIcon, BootIcon, HorseIcon, StarIcon } from '../ui/Icons';
import { getProductUrl } from '../../utils/shopifyLinks';
import type { ReactNode } from 'react';

const categoryIcons: Record<string, ReactNode> = {
  helmet: <HelmetIcon className="w-10 h-10" />,
  saddle: <SaddleIcon className="w-10 h-10" />,
  vest: <VestIcon className="w-10 h-10" />,
  boots: <BootIcon className="w-10 h-10" />,
  'horse-equipment': <HorseIcon className="w-10 h-10" />,
};

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const fullStars = Math.floor(product.rating);
  const hasHalf = product.rating % 1 >= 0.5;

  return (
    <div className="bg-white rounded-2xl border border-gray-mid/50 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(43,40,123,0.12)] transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-light to-white flex items-center justify-center text-gray-mid group-hover:text-indigo/40 transition-colors duration-300">
        {categoryIcons[product.category]}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="text-xs font-semibold text-indigo bg-indigo/8 px-2.5 py-1 rounded-lg">
            {CATEGORY_LABELS[product.category]}
          </span>
          <div className="flex items-center gap-0.5 text-gold">
            {Array.from({ length: 5 }, (_, i) => (
              <StarIcon key={i} className="w-3.5 h-3.5" filled={i < fullStars || (i === fullStars && hasHalf)} />
            ))}
            <span className="text-xs text-gray-text ml-1">{product.rating}</span>
          </div>
        </div>
        <p className="text-xs text-gray-text">{product.brand}</p>
        <h3 className="font-bold text-dark mt-1 text-base">{product.name}</h3>
        <p className="text-sm text-gray-text mt-2 leading-relaxed line-clamp-2">{product.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {product.features.slice(0, 3).map((f) => (
            <span key={f} className="text-xs bg-gray-light text-dark/60 px-2 py-0.5 rounded-lg font-medium">
              {f}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-mid/30">
          <div>
            <span className="text-xl font-extrabold text-dark">{product.price.toLocaleString('pl-PL')}</span>
            <span className="text-sm text-gray-text ml-1">zł</span>
          </div>
          <a
            href={getProductUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-navy to-indigo text-white text-sm font-semibold rounded-xl no-underline hover:from-indigo hover:to-indigo-light transition-all shadow-md shadow-navy/15 hover:shadow-lg hover:shadow-indigo/25"
          >
            Kup teraz
            <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
