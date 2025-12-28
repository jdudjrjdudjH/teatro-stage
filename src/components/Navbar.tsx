import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { t, dir } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.news', path: '/news' },
    { key: 'nav.interviews', path: '/interviews' },
    { key: 'nav.festivals', path: '/festivals' },
    { key: 'nav.backstage', path: '/backstage' },
    { key: 'nav.worldBox', path: '/world-box' },
    { key: 'nav.memory', path: '/memory' },
    { key: 'nav.articles', path: '/articles' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex flex-col items-center">
              <span className="font-amiri text-3xl text-gold text-shadow-gold group-hover:animate-glow-pulse transition-all">
                تياترو
              </span>
              <span className="mt-1 text-[10px] font-playfair tracking-[0.3em] text-muted-foreground">
                TEATRO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link text-sm font-cairo ${
                  location.pathname === item.path
                    ? 'text-gold active'
                    : 'text-foreground/80'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <LanguageToggle />
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gold/20 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`nav-link text-base font-cairo py-3 px-4 rounded-lg ${
                    location.pathname === item.path
                      ? 'text-gold bg-gold/10'
                      : 'text-foreground/80 hover:bg-muted'
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
