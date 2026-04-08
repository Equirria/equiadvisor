export default function Footer() {
  return (
    <footer className="bg-navy text-cream/70 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="font-bold text-cream text-lg">EquiAdvisor</p>
            <p className="text-sm mt-1">Doradca sprzętu jeździeckiego by Equishop</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="https://equishop.com?utm_source=equiadvisor" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-cream no-underline transition-colors">
              Equishop.com
            </a>
            <a href="https://equishop.com/pages/kontakt?utm_source=equiadvisor" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-cream no-underline transition-colors">
              Kontakt
            </a>
            <a href="tel:+48327824568" className="text-cream/70 hover:text-cream no-underline transition-colors">
              +48 32 782 45 68
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-6 pt-4 text-center text-xs text-cream/50">
          &copy; {new Date().getFullYear()} Equishop. Wszystkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
