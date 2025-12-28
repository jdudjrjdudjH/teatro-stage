import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle,
  className = '' 
}) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="section-title font-amiri text-3xl md:text-4xl lg:text-5xl text-gold">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 font-cairo text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
