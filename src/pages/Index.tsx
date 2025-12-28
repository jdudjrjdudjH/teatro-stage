import React, { useState } from 'react';
import Layout from '@/components/Layout';
import HeroSlider from '@/components/HeroSlider';
import SectionTitle from '@/components/SectionTitle';
import PlayCard from '@/components/PlayCard';
import CurtainAnimation from '@/components/CurtainAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import images
import kingLearImg from '@/assets/plays/king-lear.jpg';
import carmenImg from '@/assets/plays/carmen.jpg';
import womenPrisonImg from '@/assets/plays/women-prison.jpg';

const Index: React.FC = () => {
  const [showCurtain, setShowCurtain] = useState(true);
  const { t, language } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  const featuredPlays = [
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
  ];

  const sections = [
    { key: 'nav.news', path: '/news', icon: '📰' },
    { key: 'nav.festivals', path: '/festivals', icon: '🎭' },
    { key: 'nav.backstage', path: '/backstage', icon: '🎬' },
    { key: 'nav.memory', path: '/memory', icon: '📚' },
  ];

  return (
    <>
      {showCurtain && (
        <CurtainAnimation onAnimationComplete={() => setShowCurtain(false)} />
      )}
      
      <Layout>
        {/* Hero Section */}
        <HeroSlider />

        {/* Featured Plays Section */}
        <section className="py-20 bg-gradient-stage">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title={t('worldBox.title')} 
              subtitle={t('worldBox.subtitle')} 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
              {featuredPlays.map((play) => (
                <PlayCard key={play.id} {...play} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/world-box"
                className="inline-flex items-center gap-2 text-gold hover:text-gold/80 font-cairo text-lg transition-colors group"
              >
                <span>{language === 'ar' ? 'عرض جميع المسرحيات' : 'View All Plays'}</span>
                <Arrow className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sections.map((section) => (
                <Link
                  key={section.path}
                  to={section.path}
                  className="theater-card group p-8 rounded-xl text-center spotlight"
                >
                  <div className="text-4xl mb-4">{section.icon}</div>
                  <h3 className="font-amiri text-xl text-gold group-hover:text-shadow-gold transition-all">
                    {t(section.key)}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Theater Quote Section */}
        <section className="py-24 bg-gradient-stage relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(212, 175, 55, 0.1) 10px,
                rgba(212, 175, 55, 0.1) 20px
              )`
            }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="font-amiri text-2xl md:text-4xl text-foreground/90 leading-relaxed mb-8">
                {language === 'ar' 
                  ? '"المسرح هو المرآة التي تعكس الحياة بكل تفاصيلها، فهو الضوء الذي ينير الطريق نحو الحقيقة"'
                  : '"Theater is the mirror that reflects life in all its details, it is the light that illuminates the path to truth"'
                }
              </blockquote>
              <div className="w-16 h-px bg-gold mx-auto mb-4" />
              <cite className="font-cairo text-muted-foreground">
                {language === 'ar' ? '— شكسبير' : '— Shakespeare'}
              </cite>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
