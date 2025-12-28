import React, { useState, useEffect } from 'react';
import heroImage1 from '@/assets/hero/hero-1.jpg';
import heroImage2 from '@/assets/hero/hero-2.jpg';
import heroImage3 from '@/assets/hero/hero-3.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const heroImages = [heroImage1, heroImage2, heroImage3];

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Theater scene ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        </div>
      ))}

      {/* Spotlight Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center top, transparent 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 animate-fade-in">
          <h1 className="font-amiri text-5xl md:text-7xl lg:text-8xl text-gold text-shadow-gold mb-6">
            {t('hero.welcome')}
          </h1>
          <p className="font-cairo text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          {/* Decorative Element */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-gold" />
            <div className="w-3 h-3 rounded-full bg-gold animate-glow-pulse" />
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-gold scale-125'
                : 'bg-foreground/30 hover:bg-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-gold animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
