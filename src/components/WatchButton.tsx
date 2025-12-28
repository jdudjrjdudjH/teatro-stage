import React from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface WatchButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const WatchButton: React.FC<WatchButtonProps> = ({ 
  href, 
  variant = 'primary',
  className = '' 
}) => {
  const { t } = useLanguage();

  const isExternal = href.startsWith('http');

  if (variant === 'secondary') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gold/50 text-gold hover:bg-gold/10 transition-all font-cairo ${className}`}
      >
        <Play className="w-4 h-4" />
        <span>{t('common.watchNow')}</span>
        {isExternal && <ExternalLink className="w-3 h-3" />}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`watch-btn inline-flex items-center gap-2 rounded-lg font-cairo ${className}`}
    >
      <span className="flex items-center gap-2">
        <Play className="w-4 h-4" />
        {t('common.watchNow')}
        {isExternal && <ExternalLink className="w-3 h-3" />}
      </span>
    </a>
  );
};

export default WatchButton;
