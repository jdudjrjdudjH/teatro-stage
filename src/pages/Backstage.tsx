import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { useLanguage } from '@/contexts/LanguageContext';
import { Play } from 'lucide-react';

interface BackstageItem {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  videoUrl: string;
  thumbnailUrl?: string;
}

const backstageItems: BackstageItem[] = [
  {
    id: '1',
    title: 'أبطال مسرحية "سجن النسا" يكشفون الكواليس وحبهم للمسرح',
    titleEn: 'The Cast of "Women\'s Prison" Reveal Behind-the-Scenes and Their Love for Theater',
    description: 'شاهد أبطال مسرحية سجن النسا وهم يتحدثون عن كواليس العمل وشغفهم بالمسرح',
    descriptionEn: 'Watch the cast of Women\'s Prison as they talk about behind-the-scenes and their passion for theater',
    videoUrl: 'https://youtu.be/nDybGhN81OY?si=5ZktabCQ1J8OwgFb',
  },
  {
    id: '2',
    title: 'كواليس مسرحية الملك لير',
    titleEn: 'Behind the Scenes of King Lear',
    description: 'الفنان طارق الدسوقي يكشف كواليس تحضيرات مسرحية "الملك لير" واجتهاد الفريق لنجاح العمل',
    descriptionEn: 'Artist Tarek El-Desouki reveals the behind-the-scenes preparations for "King Lear" and the team\'s efforts for the work\'s success',
    videoUrl: 'https://youtu.be/0qcA0JbDND0?si=sYiwe05CEsNEg9ij',
  },
  {
    id: '3',
    title: 'ريم أحمد تكشف أسرار وكواليس مسرحية كارمن',
    titleEn: 'Reem Ahmed Reveals Secrets and Behind-the-Scenes of Carmen',
    description: 'الفنانة ريم أحمد تتحدث عن أسرار وكواليس مسرحية كارمن وتجربتها في العمل',
    descriptionEn: 'Artist Reem Ahmed talks about the secrets and behind-the-scenes of Carmen and her experience in the work',
    videoUrl: 'https://youtu.be/OUKUqAk10gY?si=vFJP9cpqFWFAryzu',
  },
];

const Backstage: React.FC = () => {
  const { t, language } = useLanguage();

  const getYouTubeEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^?&]+)/);
    if (videoIdMatch) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    return url;
  };

  return (
    <Layout>
      <section className="py-20 min-h-screen bg-gradient-stage">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={t('backstage.title')} 
            subtitle={t('backstage.subtitle')} 
          />
          
          <div className="grid md:grid-cols-2 gap-8 stagger-children">
            {backstageItems.map((item) => (
              <div key={item.id} className="theater-card rounded-xl overflow-hidden">
                {/* Video Embed */}
                <div className="relative aspect-video">
                  <iframe
                    src={getYouTubeEmbedUrl(item.videoUrl)}
                    title={language === 'ar' ? item.title : item.titleEn}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-amiri text-xl text-gold mb-3">
                    {language === 'ar' ? item.title : item.titleEn}
                  </h3>
                  <p className="font-cairo text-foreground/70 text-sm">
                    {language === 'ar' ? item.description : item.descriptionEn}
                  </p>
                  
                  {/* Watch Link */}
                  <a
                    href={item.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-gold hover:text-gold/80 font-cairo text-sm transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    <span>{t('common.watchNow')}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Backstage;
