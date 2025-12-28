import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PlayCardProps {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  image: string;
  link: string;
}

const PlayCard: React.FC<PlayCardProps> = ({
  id,
  title,
  titleEn,
  description,
  image,
  link,
}) => {
  const { language, t } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <Link
      to={link}
      className="theater-card group block rounded-xl overflow-hidden spotlight"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={language === 'ar' ? title : titleEn}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-amiri text-2xl md:text-3xl text-gold mb-2">
            {language === 'ar' ? title : titleEn}
          </h3>
          <p className="font-cairo text-sm text-foreground/70 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Hover Arrow */}
        <div className="absolute top-4 end-4 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 rtl:-translate-x-2 rtl:group-hover:-translate-x-0">
          <Arrow className="w-5 h-5 text-gold" />
        </div>
      </div>
    </Link>
  );
};

export default PlayCard;
