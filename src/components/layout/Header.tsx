import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Start' },
    { to: '/doradca', label: 'Doradca' },
    { to: '/kalkulator', label: 'Kalkulator' },
  ];

  return (
    <header className="bg-navy text-cream">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 bg-indigo rounded-full flex items-center justify-center text-cream font-bold text-sm">E</div>
          <span className="text-lg font-bold tracking-wide text-cream">EquiAdvisor</span>
        </Link>
        <nav className="flex gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium no-underline transition-colors ${
                location.pathname === item.to
                  ? 'bg-indigo text-cream'
                  : 'text-cream/80 hover:text-cream hover:bg-white/10'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://equishop.com?utm_source=equiadvisor"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1 px-4 py-1.5 bg-cream text-navy rounded-lg text-sm font-semibold no-underline hover:bg-cream-dark transition-colors"
        >
          Equishop.com &rarr;
        </a>
      </div>
    </header>
  );
}
