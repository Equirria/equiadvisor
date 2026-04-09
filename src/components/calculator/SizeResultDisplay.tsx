import type { SizeResult } from '../../types/calculator';
import { motion } from 'framer-motion';

interface Props {
  result: SizeResult | null;
}

export default function SizeResultDisplay({ result }: Props) {
  if (!result) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-8"
    >
      <div className="bg-gradient-to-br from-navy to-indigo rounded-2xl p-6 text-center text-white shadow-lg shadow-navy/20">
        <p className="text-white/60 text-sm mb-1">Twój rekomendowany rozmiar</p>
        <p className="text-5xl font-extrabold my-2">{result.size}</p>
        <p className="text-white/70 text-sm">{result.sizeLabel}</p>
        {result.confidence === 'between' && result.alternateSize && (
          <div className="mt-3 inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm">
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/></svg>
            Alternatywny: {result.alternateSize}
          </div>
        )}
      </div>
      {result.tips.length > 0 && (
        <div className="mt-4 bg-gray-light rounded-xl p-5">
          <p className="text-xs font-bold text-gray-text uppercase tracking-wider mb-3">Wskazówki</p>
          <ul className="space-y-2">
            {result.tips.map((tip, i) => (
              <li key={i} className="text-sm text-dark/70 flex gap-2.5 items-start">
                <div className="w-1.5 h-1.5 bg-indigo rounded-full mt-1.5 flex-shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}
