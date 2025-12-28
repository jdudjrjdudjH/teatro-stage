import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="lang-toggle flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-foreground hover:text-gold transition-colors"
      aria-label={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <Globe className="w-4 h-4" />
      <span className="font-cairo">{language === 'ar' ? 'EN' : 'عربي'}</span>
    </button>
  );
};

export default LanguageToggle;
