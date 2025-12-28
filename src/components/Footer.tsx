import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Logo */}
          <div className="text-center">
            <h2 className="font-amiri text-4xl text-gold text-shadow-gold mb-2">
              تياترو
            </h2>
            <p className="font-playfair text-sm tracking-[0.3em] text-muted-foreground">
              TEATRO
            </p>
          </div>

          {/* Decorative Line */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

          {/* Copyright */}
          <p className="text-muted-foreground text-sm font-cairo">
            © {currentYear} {t('footer.teatro')} - {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
