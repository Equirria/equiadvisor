import type { SizeResult } from '../../types/calculator';

interface Props {
  result: SizeResult | null;
}

export default function SizeResultDisplay({ result }: Props) {
  if (!result) return null;

  return (
    <div className="mt-6 p-6 bg-gray-light rounded-xl border border-gray-mid">
      <div className="text-center mb-4">
        <p className="text-sm text-dark/60 mb-1">Twój rekomendowany rozmiar:</p>
        <p className="text-4xl font-bold text-navy">{result.size}</p>
        <p className="text-sm text-dark/70 mt-1">{result.sizeLabel}</p>
        {result.confidence === 'between' && result.alternateSize && (
          <p className="text-sm text-indigo mt-2 bg-indigo/10 inline-block px-3 py-1 rounded-full">
            Alternatywny rozmiar: {result.alternateSize}
          </p>
        )}
      </div>
      {result.tips.length > 0 && (
        <div className="border-t border-gray-mid pt-4 mt-4">
          <p className="text-xs font-semibold text-dark/50 uppercase tracking-wide mb-2">Wskazówki</p>
          <ul className="space-y-1">
            {result.tips.map((tip, i) => (
              <li key={i} className="text-sm text-dark/70 flex gap-2">
                <span className="text-indigo">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
