import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import WatchButton from '@/components/WatchButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import images
import kingLearImg from '@/assets/plays/king-lear.jpg';
import carmenImg from '@/assets/plays/carmen.jpg';
import womenPrisonImg from '@/assets/plays/women-prison.jpg';

interface PlayData {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  videoPath: string;
}

const playsData: Record<string, PlayData> = {
  'king-lear': {
    id: 'king-lear',
    title: 'الملك لير',
    titleEn: 'King Lear',
    description: 'مأساة شكسبيرية خالدة تتناول صراع السلطة والغرور والخيانة، حيث يقرر الملك تقسيم مملكته بين بناته، فيقوده سوء التقدير إلى السقوط، ويكشف أن الحب الحقيقي لا يُقاس بالكلمات بل بالمواقف والوفاء.',
    descriptionEn: 'A timeless Shakespearean tragedy about the struggle for power, pride, and betrayal. The king decides to divide his kingdom among his daughters, leading him to downfall through misjudgment, revealing that true love is measured not by words but by loyalty and actions.',
    image: kingLearImg,
    videoPath: '/videos/king-lear.mp4',
  },
  'carmen': {
    id: 'carmen',
    title: 'كارمن',
    titleEn: 'Carmen',
    description: 'مسرحية كارمن تحكي قصة فتاة حرة تُدعى كارمن، تقع في حب الجندي دون خوسيه، لكن غيرته الشديدة تقودهما إلى نهاية مأساوية، وتُبرز المسرحية صراع الحب مع الحرية في إطار درامي مؤثر.',
    descriptionEn: 'The play Carmen tells the story of a free-spirited girl named Carmen who falls in love with soldier Don José, but his intense jealousy leads them to a tragic end, highlighting the conflict between love and freedom in a moving dramatic framework.',
    image: carmenImg,
    videoPath: '/videos/carmen.mp4',
  },
  'women-prison': {
    id: 'women-prison',
    title: 'سجن النسا',
    titleEn: "Women's Prison",
    description: 'مسرحية اجتماعية جريئة تكشف عالم السجن النسائي، وتسلّط الضوء على حكايات إنسانية لنساء قادتهن الظروف القاسية والظلم الاجتماعي إلى خلف القضبان، في طرح عميق لقضايا القهر، والعدالة، والبحث عن الخلاص.',
    descriptionEn: "A bold social play that reveals the world of women's prison, shedding light on human stories of women led behind bars by harsh circumstances and social injustice, in a deep exploration of oppression, justice, and the search for salvation.",
    image: womenPrisonImg,
    videoPath: '/videos/women-prison.mp4',
  },
  'play-4': {
    id: 'play-4',
    title: 'مسرحية ٤',
    titleEn: 'Play 4',
    description: 'عمل مسرحي كلاسيكي يستكشف أعماق النفس البشرية ويطرح تساؤلات فلسفية عميقة حول الوجود والمعنى.',
    descriptionEn: 'A classic theatrical work exploring the depths of the human soul and raising deep philosophical questions about existence and meaning.',
    image: kingLearImg,
    videoPath: '/videos/king-lear.mp4',
  },
  'play-5': {
    id: 'play-5',
    title: 'مسرحية ٥',
    titleEn: 'Play 5',
    description: 'دراما مؤثرة تجسد الصراع الأزلي بين الخير والشر في قالب مسرحي آسر.',
    descriptionEn: 'A touching drama embodying the eternal struggle between good and evil in a captivating theatrical format.',
    image: carmenImg,
    videoPath: '/videos/carmen.mp4',
  },
  'play-6': {
    id: 'play-6',
    title: 'مسرحية ٦',
    titleEn: 'Play 6',
    description: 'رحلة درامية في عوالم الحب والفقدان والأمل، تأسر القلوب وتثير العقول.',
    descriptionEn: 'A dramatic journey through the worlds of love, loss, and hope that captivates hearts and stimulates minds.',
    image: womenPrisonImg,
    videoPath: '/videos/women-prison.mp4',
  },
};

const PlayDetail: React.FC = () => {
  const { playId } = useParams<{ playId: string }>();
  const { language, t } = useLanguage();
  const Arrow = language === 'ar' ? ArrowRight : ArrowLeft;

  const play = playId ? playsData[playId] : null;

  if (!play) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-amiri text-4xl text-gold mb-4">
              {language === 'ar' ? 'المسرحية غير موجودة' : 'Play Not Found'}
            </h1>
            <Link to="/world-box" className="text-gold hover:underline">
              {language === 'ar' ? 'العودة إلى صندوق الدنيا' : 'Back to World Box'}
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-stage py-12">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link
            to="/world-box"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 mb-8 font-cairo transition-colors"
          >
            <Arrow className="w-5 h-5" />
            <span>{language === 'ar' ? 'العودة إلى صندوق الدنيا' : 'Back to World Box'}</span>
          </Link>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden mb-12 gold-border">
            <img
              src={play.image}
              alt={language === 'ar' ? play.title : play.titleEn}
              className="w-full h-[50vh] md:h-[70vh] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h1 className="font-amiri text-4xl md:text-6xl text-gold text-shadow-gold mb-4">
                {language === 'ar' ? play.title : play.titleEn}
              </h1>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto">
            <p className="font-cairo text-lg md:text-xl text-foreground/90 leading-relaxed mb-12">
              {language === 'ar' ? play.description : play.descriptionEn}
            </p>

            {/* Video Section */}
            <div className="theater-card rounded-xl overflow-hidden p-6 md:p-8">
              <h2 className="font-amiri text-2xl text-gold mb-6 text-center">
                {t('common.sceneFromPlay')}
              </h2>
              
              <div className="relative aspect-video rounded-lg overflow-hidden gold-border">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster={play.image}
                >
                  <source src={play.videoPath} type="video/mp4" />
                  {language === 'ar' 
                    ? 'متصفحك لا يدعم تشغيل الفيديو'
                    : 'Your browser does not support video playback'
                  }
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlayDetail;
