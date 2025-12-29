import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import PlayCard from '@/components/PlayCard';
import { useLanguage } from '@/contexts/LanguageContext';

// Import images
import kingLearImg from '@/assets/plays/king-lear.jpg';
import carmenImg from '@/assets/plays/carmen.jpg';
import womenPrisonImg from '@/assets/plays/women-prison.jpg';
import thatRedCloakImg from '@/assets/plays/that-red-cloak.jpg';
import crossingVictoryImg from '@/assets/plays/crossing-victory.jpg';
import museumImg from '@/assets/plays/museum.jpg';

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
      id: 'that-red-cloak',
      title: 'ذات والرداء الأحمر',
      titleEn: 'That and the Red Cloak',
      description: language === 'ar'
        ? 'حكاية معاصرة تواجه فيها البطلة ذئاب غابة السوشيال ميديا'
        : 'A contemporary tale where the heroine faces wolves in the social media forest',
      image: thatRedCloakImg,
      link: '/world-box/that-red-cloak',
    },
    {
      id: 'crossing-victory',
      title: 'عبور وانتصار',
      titleEn: 'Crossing and Victory',
      description: language === 'ar'
        ? 'مسرحية وطنية تجسد بطولات الجنود المصريين في حرب أكتوبر'
        : 'A patriotic play embodying the heroism of Egyptian soldiers in October War',
      image: crossingVictoryImg,
      link: '/world-box/crossing-victory',
    },
    {
      id: 'khaled-galal-tribute',
      title: 'حفل تكريم المخرج خالد جلال',
      titleEn: 'Director Khaled Galal Tribute',
      description: language === 'ar'
        ? 'تكريم المخرج القدير خالد جلال على مسيرته الإبداعية'
        : 'Tribute to distinguished director Khaled Galal for his creative career',
      image: kingLearImg,
      link: '/world-box/khaled-galal-tribute',
    },
    {
      id: 'museum',
      title: 'متحف رواد الفن',
      titleEn: 'Art Pioneers Museum',
      description: language === 'ar'
        ? 'جولة داخل متحف رواد الفن الذي يوثق تاريخ المسرح المصري'
        : 'A tour inside the Art Pioneers Museum documenting Egyptian theater history',
      image: museumImg,
      link: '/world-box/museum',
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
