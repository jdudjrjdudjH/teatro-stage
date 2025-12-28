import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import PlayCard from '@/components/PlayCard';
import { useLanguage } from '@/contexts/LanguageContext';

// Import images
import kingLearImg from '@/assets/plays/king-lear.jpg';
import carmenImg from '@/assets/plays/carmen.jpg';
import womenPrisonImg from '@/assets/plays/women-prison.jpg';

const WorldBox: React.FC = () => {
  const { t, language } = useLanguage();

  const plays = [
    {
      id: 'king-lear',
      title: 'الملك لير',
      titleEn: 'King Lear',
      description: language === 'ar' 
        ? 'مأساة شكسبيرية خالدة تتناول صراع السلطة والغرور والخيانة'
        : 'A timeless Shakespearean tragedy about power, pride and betrayal',
      image: kingLearImg,
      link: '/world-box/king-lear',
    },
    {
      id: 'carmen',
      title: 'كارمن',
      titleEn: 'Carmen',
      description: language === 'ar'
        ? 'قصة فتاة حرة تُدعى كارمن وصراع الحب مع الحرية'
        : 'A story of a free-spirited girl Carmen and the conflict of love with freedom',
      image: carmenImg,
      link: '/world-box/carmen',
    },
    {
      id: 'women-prison',
      title: 'سجن النسا',
      titleEn: "Women's Prison",
      description: language === 'ar'
        ? 'مسرحية اجتماعية جريئة تكشف عالم السجن النسائي'
        : 'A bold social play revealing the world of women\'s prison',
      image: womenPrisonImg,
      link: '/world-box/women-prison',
    },
    {
      id: 'play-4',
      title: 'مسرحية ٤',
      titleEn: 'Play 4',
      description: language === 'ar'
        ? 'عمل مسرحي كلاسيكي يستكشف أعماق النفس البشرية'
        : 'A classic theatrical work exploring the depths of human soul',
      image: kingLearImg,
      link: '/world-box/play-4',
    },
    {
      id: 'play-5',
      title: 'مسرحية ٥',
      titleEn: 'Play 5',
      description: language === 'ar'
        ? 'دراما مؤثرة تجسد الصراع بين الخير والشر'
        : 'A touching drama embodying the struggle between good and evil',
      image: carmenImg,
      link: '/world-box/play-5',
    },
    {
      id: 'play-6',
      title: 'مسرحية ٦',
      titleEn: 'Play 6',
      description: language === 'ar'
        ? 'رحلة درامية في عوالم الحب والفقدان'
        : 'A dramatic journey through the worlds of love and loss',
      image: womenPrisonImg,
      link: '/world-box/play-6',
    },
  ];

  return (
    <Layout>
      <section className="py-20 min-h-screen bg-gradient-stage">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={t('worldBox.title')} 
            subtitle={t('worldBox.subtitle')} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {plays.map((play) => (
              <PlayCard key={play.id} {...play} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WorldBox;
