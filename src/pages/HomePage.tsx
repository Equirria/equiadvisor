import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const features = [
  { icon: '🎯', title: 'Spersonalizowane rekomendacje', text: 'Quiz doradczy dopasuje sprzęt do Twojego poziomu, dyscypliny i budżetu' },
  { icon: '📏', title: 'Precyzyjny dobór rozmiaru', text: 'Kalkulator pomoże dobrać kask, buty, siodło i kamizelkę ochronną' },
  { icon: '🛒', title: 'Bezpośrednio do sklepu', text: 'Wybrane produkty kupisz od razu w sklepie Equishop.com' },
];

const brands = ['Kask', 'Pikeur', 'De Niro Boot Co', 'Prestige', 'Renaissance', 'KEP Italia'];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-cream py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold leading-tight"
          >
            Dobierz idealny sprzęt
            <br />
            <span className="text-indigo-light">jeździecki</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-cream/70 max-w-xl mx-auto"
          >
            Interaktywny doradca i kalkulator rozmiarów. Odpowiedz na kilka pytań, a my zaproponujemy najlepszy sprzęt dla Ciebie.
          </motion.p>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="max-w-4xl mx-auto px-4 -mt-8">
        <div className="grid sm:grid-cols-2 gap-4">
          <Link to="/doradca" className="no-underline">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-mid p-6 sm:p-8 text-center group hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-indigo/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo/20 transition-colors">
                <span className="text-4xl">🎯</span>
              </div>
              <h2 className="text-xl font-bold text-dark">Doradca Sprzętowy</h2>
              <p className="text-dark/60 text-sm mt-2">
                Odpowiedz na 5 pytań i otrzymaj spersonalizowane rekomendacje produktów
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-indigo font-semibold text-sm">
                Rozpocznij quiz &rarr;
              </div>
            </motion.div>
          </Link>

          <Link to="/kalkulator" className="no-underline">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-mid p-6 sm:p-8 text-center group hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-indigo/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo/20 transition-colors">
                <span className="text-4xl">📏</span>
              </div>
              <h2 className="text-xl font-bold text-dark">Kalkulator Rozmiaru</h2>
              <p className="text-dark/60 text-sm mt-2">
                Dobierz idealny rozmiar kasku, butów, siodła lub kamizelki ochronnej
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-indigo font-semibold text-sm">
                Sprawdź rozmiar &rarr;
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-dark mb-10">Jak to działa?</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-dark mb-2">{f.title}</h3>
              <p className="text-sm text-dark/60">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="bg-gray-light py-10">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center text-sm text-dark/40 font-medium uppercase tracking-wider mb-6">Polecamy marki</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {brands.map((b) => (
              <span key={b} className="text-dark/30 font-bold text-lg">{b}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
