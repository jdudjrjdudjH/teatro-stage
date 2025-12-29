import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram } from 'lucide-react';

// TikTok icon component since it's not in lucide-react
const TikTokIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-5 h-5"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Facebook, 
      url: 'https://www.facebook.com/share/1MSTXUh2FE/',
      label: 'Facebook'
    },
    { 
      icon: TikTokIcon, 
      url: 'https://www.tiktok.com/@xproject38?_r=1&_t=ZS-91gNubQnzk0',
      label: 'TikTok'
    },
    { 
      icon: Instagram, 
      url: 'https://www.instagram.com/x_teatro_x?igsh=NzJub3hxZmpqanI0',
      label: 'Instagram'
    },
  ];

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

          {/* Social Media Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors duration-300 p-2 hover:scale-110 transform"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
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
