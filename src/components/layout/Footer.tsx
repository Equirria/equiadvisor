export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-lighter to-indigo rounded-lg flex items-center justify-center text-white font-extrabold text-xs">E</div>
              <span className="font-bold text-white text-base">EquiAdvisor</span>
            </div>
            <p className="text-sm leading-relaxed">
              Interaktywny doradca sprzętu jeździeckiego. Pomagamy dobrać idealny sprzęt dopasowany do Twoich potrzeb.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white/80 text-sm uppercase tracking-wider mb-3">Narzędzia</h4>
            <ul className="space-y-2 list-none">
              <li><a href="/doradca" className="text-sm text-white/50 hover:text-white no-underline transition-colors">Doradca Sprzętowy</a></li>
              <li><a href="/kalkulator" className="text-sm text-white/50 hover:text-white no-underline transition-colors">Kalkulator Rozmiaru</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white/80 text-sm uppercase tracking-wider mb-3">Kontakt</h4>
            <ul className="space-y-2 list-none">
              <li>
                <a href="https://equishop.com?utm_source=equiadvisor" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white no-underline transition-colors flex items-center gap-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4z" clipRule="evenodd"/></svg>
                  equishop.com
                </a>
              </li>
              <li>
                <a href="tel:+48327824568" className="text-sm text-white/50 hover:text-white no-underline transition-colors flex items-center gap-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                  +48 32 782 45 68
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/30">&copy; {new Date().getFullYear()} Equishop. Wszystkie prawa zastrzeżone.</p>
          <p className="text-xs text-white/20">Doradca sprzętu jeździeckiego</p>
        </div>
      </div>
    </footer>
  );
}
