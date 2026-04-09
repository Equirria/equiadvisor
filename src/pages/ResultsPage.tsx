import { useLocation, Navigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { QuizAnswers } from '../types/quiz';
import type { Product } from '../types/product';
import { CATEGORY_LABELS } from '../types/product';
import { getRecommendations } from '../logic/recommendation';
import { getCategoryUrl } from '../utils/shopifyLinks';
import { useLeadCapture } from '../hooks/useLeadCapture';
import ProductCard from '../components/results/ProductCard';
import LeadCaptureModal from '../components/lead/LeadCaptureModal';
import Button from '../components/ui/Button';
import productsData from '../data/products.json';

export default function ResultsPage() {
  const location = useLocation();
  const answers = (location.state as { answers?: QuizAnswers })?.answers;
  const { isModalOpen, isCaptured, openModal, submitLead, skipCapture } = useLeadCapture();
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (!isCaptured && answers) {
      openModal();
    } else {
      setShowResults(true);
    }
  }, [isCaptured, answers, openModal]);

  if (!answers) {
    return <Navigate to="/doradca" replace />;
  }

  const products = productsData as unknown as Product[];
  const { primary, crossSell } = getRecommendations(answers, products);

  const groupedByCategory = primary.reduce<Record<string, Product[]>>((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});

  const handleModalSubmit = (email: string, newsletter: boolean) => {
    submitLead(email, newsletter);
    setShowResults(true);
  };

  const handleModalSkip = () => {
    skipCapture();
    setShowResults(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <LeadCaptureModal isOpen={isModalOpen} onSubmit={handleModalSubmit} onSkip={handleModalSkip} />

      {showResults && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-light text-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              Analiza ukończona
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-dark">Twoje rekomendacje</h1>
            <p className="text-gray-text mt-3 max-w-lg mx-auto">Na podstawie Twoich odpowiedzi wybraliśmy najlepsze produkty z oferty Equishop</p>
          </div>

          {/* Results by category */}
          {Object.entries(groupedByCategory).map(([category, items], idx) => (
            <motion.section
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.4 }}
              className="mb-14"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-indigo to-indigo-light rounded-full" />
                  <h2 className="text-xl font-bold text-dark">
                    {CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS]}
                  </h2>
                </div>
                <a
                  href={getCategoryUrl(category as Product['category'])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo font-semibold no-underline hover:text-indigo-light transition-colors flex items-center gap-1"
                >
                  Wszystkie produkty
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                </a>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </motion.section>
          ))}

          {/* No results */}
          {primary.length === 0 && (
            <div className="text-center py-20 bg-gray-light rounded-3xl">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-5">
                <svg className="w-10 h-10 text-gray-text" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/></svg>
              </div>
              <p className="text-xl font-bold text-dark mb-2">Nie znaleźliśmy produktów w tym budżecie</p>
              <p className="text-gray-text">Spróbuj zwiększyć budżet lub zmienić kategorie</p>
              <Link to="/doradca" className="no-underline">
                <Button className="mt-6">Wróć do quizu</Button>
              </Link>
            </div>
          )}

          {/* Cross-sell */}
          {crossSell.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-14 bg-gradient-to-br from-gray-light to-white rounded-3xl p-8 border border-gray-mid/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
                <h2 className="text-lg font-bold text-dark">Może Cię również zainteresować</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {crossSell.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </motion.section>
          )}

          {/* Bottom CTA */}
          <div className="text-center mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/doradca" className="no-underline">
              <Button variant="outline" size="lg">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/></svg>
                Powtórz quiz
              </Button>
            </Link>
            <Link to="/kalkulator" className="no-underline">
              <Button size="lg">
                Sprawdź rozmiar
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
