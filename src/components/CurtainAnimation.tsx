import React, { useState, useEffect } from 'react';

interface CurtainAnimationProps {
  onAnimationComplete?: () => void;
}

const CurtainAnimation: React.FC<CurtainAnimationProps> = ({ onAnimationComplete }) => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
      onAnimationComplete?.();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  if (isHidden) return null;

  return (
    <div className="curtain-container">
      {/* Left Curtain */}
      <div className="curtain-left">
        <div className="curtain-tassel" />
        {/* Curtain Folds */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 h-full w-8"
              style={{
                left: `${i * 12.5}%`,
                background: `linear-gradient(90deg, 
                  transparent 0%, 
                  rgba(0,0,0,0.3) 30%, 
                  transparent 50%, 
                  rgba(139,0,0,0.2) 70%, 
                  transparent 100%
                )`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Right Curtain */}
      <div className="curtain-right">
        <div className="curtain-tassel" />
        {/* Curtain Folds */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 h-full w-8"
              style={{
                right: `${i * 12.5}%`,
                background: `linear-gradient(90deg, 
                  transparent 0%, 
                  rgba(139,0,0,0.2) 30%, 
                  transparent 50%, 
                  rgba(0,0,0,0.3) 70%, 
                  transparent 100%
                )`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Center Logo - fades out with curtain */}
      <div 
        className="absolute inset-0 flex items-center justify-center z-[10001] pointer-events-none transition-opacity duration-1000"
        style={{ 
          animationDelay: '0.3s',
          opacity: 1,
        }}
      >
        <div className="text-center animate-fade-in curtain-logo">
          <h1 className="font-amiri text-6xl md:text-8xl text-gold text-shadow-gold mb-6">
            تياترو
          </h1>
          <p className="font-playfair text-2xl md:text-3xl text-foreground/80 tracking-widest">
            TEATRO
          </p>
        </div>
      </div>

      {/* Spotlight Effect */}
      <div 
        className="absolute inset-0 z-[10000] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.8) 100%)',
        }}
      />
    </div>
  );
};

export default CurtainAnimation;
