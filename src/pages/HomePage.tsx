import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TargetIcon, RulerIcon, CartIcon, HelmetIcon, SaddleIcon, BootIcon, VestIcon, HorseIcon } from '../components/ui/Icons';

const features = [
  { icon: <TargetIcon className="w-7 h-7" />, title: 'Spersonalizowane rekomendacje', text: 'Quiz doradczy dopasuje sprzęt do Twojego poziomu, dyscypliny i budżetu' },
  { icon: <RulerIcon className="w-7 h-7" />, title: 'Precyzyjny dobór rozmiaru', text: 'Kalkulator pomoże dobrać kask, buty, siodło i kamizelkę ochronną' },
  { icon: <CartIcon className="w-7 h-7" />, title: 'Prosto do sklepu', text: 'Wybrane produkty kupisz od razu w Equishop.com z gwarancją najlepszej ceny' },
];

const categories = [
  { icon: <HelmetIcon className="w-6 h-6" />, label: 'Kaski' },
  { icon: <SaddleIcon className="w-6 h-6" />, label: 'Siodła' },
  { icon: <VestIcon className="w-6 h-6" />, label: 'Kamizelki' },
  { icon: <BootIcon className="w-6 h-6" />, label: 'Buty' },
  { icon: <HorseIcon className="w-6 h-6" />, label: 'Dla konia' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' } }),
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-hero-gradient bg-hero-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="max-w-6xl mx-auto px-4 pt-20 pb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-green rounded-full animate-pulse" />
              <span className="text-cream/80 text-sm font-medium">Powered by Equishop.com</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Dobierz idealny
              <br />
              <span className="bg-gradient-to-r from-indigo-lighter to-indigo-light bg-clip-text text-transparent">sprzęt jeździecki</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Interaktywny doradca i kalkulator rozmiarów. Odpowiedz na kilka pytań,
              a zaproponujemy najlepszy sprzęt dopasowany do Ciebie.
            </p>
          </motion.div>

          {/* Category pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {categories.map((cat) => (
              <div key={cat.label} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-white/70 text-sm">
                {cat.icon}
                <span>{cat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L48 36C96 32 192 24 288 28C384 32 480 48 576 52C672 56 768 48 864 40C960 32 1056 24 1152 28C1248 32 1344 48 1392 56L1440 64V80H0V40Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="max-w-4xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid sm:grid-cols-2 gap-6">
          <Link to="/doradca" className="no-underline group">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="relative bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-mid/50 overflow-hidden transition-all duration-300 hover:shadow-[0_16px_50px_rgba(43,40,123,0.15)] hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo/5 to-transparent rounded-bl-full" />
              <div className="w-14 h-14 bg-gradient-to-br from-indigo to-indigo-light rounded-2xl flex items-center justify-center mb-5 text-white shadow-lg shadow-indigo/25 group-hover:scale-110 transition-transform duration-300">
                <TargetIcon className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold text-dark mb-2">Doradca Sprzętowy</h2>
              <p className="text-gray-text text-sm leading-relaxed">
                Odpowiedz na 5 pytań i otrzymaj spersonalizowane rekomendacje produktów dopasowane do Ciebie.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-indigo font-semibold text-sm group-hover:gap-3 transition-all">
                Rozpocznij quiz
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
              </div>
            </motion.div>
          </Link>

          <Link to="/kalkulator" className="no-underline group">
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="relative bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-mid/50 overflow-hidden transition-all duration-300 hover:shadow-[0_16px_50px_rgba(43,40,123,0.15)] hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo/5 to-transparent rounded-bl-full" />
              <div className="w-14 h-14 bg-gradient-to-br from-navy to-indigo rounded-2xl flex items-center justify-center mb-5 text-white shadow-lg shadow-navy/25 group-hover:scale-110 transition-transform duration-300">
                <RulerIcon className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold text-dark mb-2">Kalkulator Rozmiaru</h2>
              <p className="text-gray-text text-sm leading-relaxed">
                Dobierz idealny rozmiar kasku, butów, siodła lub kamizelki ochronnej na podstawie wymiarów.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-indigo font-semibold text-sm group-hover:gap-3 transition-all">
                Sprawdź rozmiar
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-center mb-14">
          <p className="text-indigo font-semibold text-sm uppercase tracking-wider mb-2">Prosty proces</p>
          <h2 className="text-3xl font-bold text-dark">Jak to działa?</h2>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i + 3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-5 bg-gray-light rounded-2xl flex items-center justify-center text-indigo group-hover:bg-indigo group-hover:text-white transition-all duration-300 shadow-sm">
                {f.icon}
              </div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="w-6 h-6 bg-indigo/10 rounded-full flex items-center justify-center text-xs font-bold text-indigo">{i + 1}</span>
                <h3 className="font-bold text-dark">{f.title}</h3>
              </div>
              <p className="text-sm text-gray-text leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-section-gradient py-14 border-t border-gray-mid/30">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-xs text-gray-text font-semibold uppercase tracking-widest mb-8">Zaufane marki w naszym sklepie</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {['KASK', 'Pikeur', 'De Niro', 'Prestige', 'Renaissance', 'KEP Italia', 'Uvex'].map((b) => (
              <span key={b} className="text-dark/20 font-extrabold text-xl hover:text-indigo/40 transition-colors cursor-default">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-hero-gradient py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Gotowy na idealny sprzęt?</h2>
          <p className="text-white/60 mb-8">Wystarczy 2 minuty, żeby otrzymać spersonalizowane rekomendacje</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/doradca" className="no-underline">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-navy font-bold rounded-xl hover:bg-cream transition-colors cursor-pointer border-none text-base btn-glow">
                Rozpocznij quiz
              </button>
            </Link>
            <Link to="/kalkulator" className="no-underline">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors cursor-pointer text-base">
                Sprawdź rozmiar
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
