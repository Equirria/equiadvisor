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
    <div className="max-w-5xl mx-auto px-4 py-10">
      <LeadCaptureModal isOpen={isModalOpen} onSubmit={handleModalSubmit} onSkip={handleModalSkip} />

      {showResults && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-dark">Twoje rekomendacje</h1>
            <p className="text-dark/60 mt-2">Na podstawie Twoich odpowiedzi wybraliśmy najlepsze produkty</p>
          </div>

          {Object.entries(groupedByCategory).map(([category, items]) => (
            <section key={category} className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-dark">
                  {CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS]}
                </h2>
                <a
                  href={getCategoryUrl(category as Product['category'])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo font-medium no-underline hover:underline"
                >
                  Zobacz wszystkie &rarr;
                </a>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          ))}

          {primary.length === 0 && (
            <div className="text-center py-16 bg-gray-light rounded-2xl">
              <p className="text-4xl mb-4">🔍</p>
              <p className="text-lg font-semibold text-dark">Nie znaleźliśmy produktów w tym budżecie</p>
              <p className="text-dark/60 mt-2">Spróbuj zwiększyć budżet lub zmienić kategorie</p>
              <Link to="/doradca" className="no-underline">
                <Button variant="primary" className="mt-4">Wróć do quizu</Button>
              </Link>
            </div>
          )}

          {crossSell.length > 0 && (
            <section className="mt-12 p-6 bg-gray-light rounded-2xl">
              <h2 className="text-lg font-bold text-dark mb-4">Może Cię również zainteresować</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {crossSell.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}

          <div className="text-center mt-12 space-x-4">
            <Link to="/doradca" className="no-underline">
              <Button variant="outline">&larr; Powtórz quiz</Button>
            </Link>
            <Link to="/kalkulator" className="no-underline">
              <Button variant="primary">Sprawdź rozmiar &rarr;</Button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
