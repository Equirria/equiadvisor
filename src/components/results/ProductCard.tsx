import type { Product } from '../../types/product';
import { CATEGORY_LABELS, CATEGORY_ICONS } from '../../types/product';
import { getProductUrl } from '../../utils/shopifyLinks';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-mid shadow-sm hover:shadow-md transition-all group">
      <div className="aspect-[4/3] bg-gray-light rounded-t-xl flex items-center justify-center text-6xl">
        {CATEGORY_ICONS[product.category]}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <span className="text-xs font-medium text-indigo bg-indigo/10 px-2 py-0.5 rounded-full">
            {CATEGORY_LABELS[product.category]}
          </span>
          <span className="text-xs text-dark/50">{product.brand}</span>
        </div>
        <h3 className="font-bold text-dark mt-2">{product.name}</h3>
        <p className="text-sm text-dark/60 mt-1 line-clamp-2">{product.description}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {product.features.slice(0, 3).map((f) => (
            <span key={f} className="text-xs bg-gray-light text-dark/70 px-2 py-0.5 rounded">
              {f}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-mid">
          <span className="text-lg font-bold text-navy">{product.price.toLocaleString('pl-PL')} zł</span>
          <a
            href={getProductUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2 bg-navy text-cream text-sm font-semibold rounded-lg no-underline hover:bg-indigo transition-colors"
          >
            Zobacz w sklepie &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
