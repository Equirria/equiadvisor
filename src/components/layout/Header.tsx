import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { to: '/', label: 'Start' },
    { to: '/doradca', label: 'Doradca' },
    { to: '/kalkulator', label: 'Kalkulator' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isHome ? 'bg-navy-dark/80 backdrop-blur-xl border-b border-white/5' : 'bg-white/80 backdrop-blur-xl border-b border-gray-mid/50 shadow-sm'}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 no-underline group">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm transition-all duration-300 group-hover:scale-105 ${isHome ? 'bg-gradient-to-br from-indigo-lighter to-indigo text-white shadow-lg shadow-indigo/30' : 'bg-gradient-to-br from-navy to-indigo text-white shadow-md shadow-navy/20'}`}>
            E
          </div>
          <div className="flex flex-col">
            <span className={`text-base font-bold leading-tight ${isHome ? 'text-white' : 'text-dark'}`}>EquiAdvisor</span>
            <span className={`text-[10px] font-medium leading-tight ${isHome ? 'text-white/40' : 'text-gray-text'}`}>by Equishop</span>
          </div>
        </Link>

        <nav className="flex gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium no-underline transition-all duration-200 ${
                location.pathname === item.to
                  ? isHome
                    ? 'bg-white/15 text-white'
                    : 'bg-indigo/10 text-indigo'
                  : isHome
                    ? 'text-white/60 hover:text-white hover:bg-white/10'
                    : 'text-gray-text hover:text-dark hover:bg-gray-light'
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
          className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold no-underline transition-all duration-200 ${
            isHome
              ? 'bg-white text-navy hover:bg-cream shadow-lg shadow-black/10 hover:shadow-xl'
              : 'bg-navy text-white hover:bg-indigo shadow-md shadow-navy/20'
          }`}
        >
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"/></svg>
          Equishop.com
        </a>
      </div>
    </header>
  );
}
