import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Home Improvement', path: '/home-improvement' },
  { name: 'Interior Solutions', path: '/interior-solutions' },
  { name: 'Collections', path: '/collections' },
  { name: 'Inspiration', path: '/inspiration' },
  { name: 'Gallery', path: '/gallery' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-studio-white/95 backdrop-blur-md transition-all duration-300 border-b ${
          isScrolled ? 'border-studio-lightgray py-2.5 shadow-xs' : 'border-studio-lightgray/60 py-3.5'
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* LEFT: Brand */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-studio-black"
            >
              <span className="font-architectural text-sm sm:text-base xl:text-[17px] tracking-[0.2em] font-bold text-studio-black transition-colors group-hover:text-studio-accent uppercase leading-tight">
                Hassan Interior
              </span>
              <span className="font-mono text-[8px] xl:text-[9px] tracking-[0.22em] text-studio-muted uppercase mt-0.5">
                Home Improvement Store
              </span>
            </Link>
          </div>

          {/* CENTER / MAIN: Navigation Links (Desktop - Luxury Architectural Studio Navigation) */}
          <nav 
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1 p-1 bg-studio-offwhite/80 border border-studio-lightgray/80 backdrop-blur-xs shadow-2xs"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-[11px] xl:text-xs uppercase tracking-[0.08em] font-medium transition-all duration-200 px-3 py-1.5 whitespace-nowrap ${
                    isActive
                      ? 'text-studio-black bg-studio-white shadow-2xs font-semibold border border-studio-lightgray/70'
                      : 'text-studio-muted hover:text-studio-black hover:bg-studio-white/50 border border-transparent'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT: Contact Action */}
          <div className="hidden lg:flex items-center">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-[11px] xl:text-xs uppercase tracking-[0.1em] font-semibold px-4 py-2 border transition-all ${
                  isActive
                    ? 'border-studio-black bg-studio-black text-studio-white shadow-2xs'
                    : 'border-studio-black text-studio-black hover:bg-studio-black hover:text-studio-white'
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-studio-black hover:bg-studio-offwhite border border-studio-lightgray transition-colors focus:outline-none focus:ring-1 focus:ring-studio-black"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE FULL-SCREEN ARCHITECTURAL OVERLAY */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-studio-white flex flex-col justify-between pt-24 pb-8 px-6 sm:px-10 overflow-y-auto animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-md w-full mx-auto space-y-6">
            <div className="pb-4 border-b border-studio-lightgray flex items-center justify-between">
              <span className="font-mono text-xs tracking-widest text-studio-muted">MENU / DIRECTORY</span>
              <span className="font-mono text-xs tracking-widest text-studio-muted">08 ITEMS</span>
            </div>

            <nav className="flex flex-col space-y-4">
              {navItems.map((item, idx) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-baseline justify-between py-2 text-base font-serif tracking-wide border-b border-studio-lightgray/40 transition-colors ${
                      isActive ? 'text-studio-black font-bold pl-2 border-l-2 border-l-studio-black' : 'text-studio-muted hover:text-studio-black'
                    }`
                  }
                >
                  <span className="text-lg">{item.name}</span>
                  <span className="font-mono text-[11px] text-studio-muted">
                    0{idx + 1}
                  </span>
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex items-baseline justify-between py-2 text-base font-serif tracking-wide border-b border-studio-lightgray/40 transition-colors ${
                    isActive ? 'text-studio-black font-bold pl-2 border-l-2 border-l-studio-black' : 'text-studio-muted hover:text-studio-black'
                  }`
                }
              >
                <span className="text-lg">Contact</span>
                <span className="font-mono text-[11px] text-studio-muted">08</span>
              </NavLink>
            </nav>
          </div>

          {/* Bottom actions & Business details */}
          <div className="max-w-md w-full mx-auto pt-8 border-t border-studio-lightgray space-y-4">
            <a
              href="tel:+923224045703"
              className="w-full flex items-center justify-center gap-3 py-3.5 bg-studio-black text-studio-white uppercase text-xs tracking-widest font-semibold hover:bg-studio-charcoal transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call +92 322 4045703</span>
            </a>

            <div className="text-center space-y-1">
              <p className="font-mono text-[11px] tracking-wider text-studio-charcoal">
                Beadon Rd, Royal Park Lahore, Pakistan
              </p>
              <p className="text-[11px] text-studio-muted">
                Home Improvement Store
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
