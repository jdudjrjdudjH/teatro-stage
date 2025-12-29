import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

// Import images
import kingLearImg from '@/assets/plays/king-lear.jpg';
import carmenImg from '@/assets/plays/carmen.jpg';
import womenPrisonImg from '@/assets/plays/women-prison.jpg';
import thatRedCloakImg from '@/assets/plays/that-red-cloak.jpg';
import crossingVictoryImg from '@/assets/plays/crossing-victory.jpg';
import museumImg from '@/assets/plays/museum.jpg';

interface PlayData {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  videoPath: string;
  sceneLabel?: string;
  sceneLabelEn?: string;
  watchMoreLabel?: string;
  watchMoreLabelEn?: string;
  watchMoreLink?: string;
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
    watchMoreLabel: 'لمشاهدة باقي أحداث المسرحية',
    watchMoreLabelEn: 'Watch the rest of the play',
    watchMoreLink: 'https://drive.google.com/drive/folders/1U3x6z5n-cA1lPMRAWW6KQad3anUcl68G',
  },
  'carmen': {
    id: 'carmen',
    title: 'كارمن',
    titleEn: 'Carmen',
    description: 'مسرحية كارمن تحكي قصة فتاة حرة تُدعى كارمن، تقع في حب الجندي دون خوسيه، لكن غيرته الشديدة تقودهما إلى نهاية مأساوية، وتُبرز المسرحية صراع الحب مع الحرية في إطار درامي مؤثر.',
    descriptionEn: 'The play Carmen tells the story of a free-spirited girl named Carmen who falls in love with soldier Don José, but his intense jealousy leads them to a tragic end, highlighting the conflict between love and freedom in a moving dramatic framework.',
    image: carmenImg,
    videoPath: '/videos/carmen.mp4',
    watchMoreLabel: 'لمشاهدة باقي أجزاء المسرحية',
    watchMoreLabelEn: 'Watch the rest of the play',
    watchMoreLink: 'https://drive.google.com/drive/folders/10bBy6mkS9K_dSNURTWBjMWcFud-m5QpC',
  },
  'women-prison': {
    id: 'women-prison',
    title: 'سجن النسا',
    titleEn: "Women's Prison",
    description: 'مسرحية اجتماعية جريئة تكشف عالم السجن النسائي، وتسلّط الضوء على حكايات إنسانية لنساء قادتهن الظروف القاسية والظلم الاجتماعي إلى خلف القضبان، في طرح عميق لقضايا القهر، والعدالة، والبحث عن الخلاص.',
    descriptionEn: "A bold social play that reveals the world of women's prison, shedding light on human stories of women led behind bars by harsh circumstances and social injustice, in a deep exploration of oppression, justice, and the search for salvation.",
    image: womenPrisonImg,
    videoPath: '/videos/women-prison.mp4',
    watchMoreLabel: 'لمشاهدة باقي أجزاء المسرحية',
    watchMoreLabelEn: 'Watch the rest of the play',
    watchMoreLink: 'https://drive.google.com/drive/folders/1uNNcIgLRtRwjCbmGjCJby_TV5BQ9jW_H',
  },
  'that-red-cloak': {
    id: 'that-red-cloak',
    title: 'ذات والرداء الأحمر',
    titleEn: 'That and the Red Cloak',
    description: 'تستدعي مسرحية «ذات... والرداء الأحمر» الحكاية الخرافية الشهيرة للفتاة الصغيرة صاحبة الرداء الأحمر، المعروفة باسم «ليلى والذئب»، الفتاة التي خاضت مغامرة في الغابة لاحقها فيها الذئب، وتنكّر بصورة جدتها. في العرض المسرحي الجديد ينقل فريق العمل الحكاية الخرافية إلى فضاء معاصر، حيث تواجه البطلة الصغيرة ذئاباً أخرى في غابة «السوشيال ميديا».',
    descriptionEn: 'The play "That... and the Red Cloak" recalls the famous fairy tale of the little girl in the red cloak, known as "Little Red Riding Hood." In the new theatrical performance, the team transports the fairy tale to a contemporary space, where the young heroine faces other wolves in the "social media" forest.',
    image: thatRedCloakImg,
    videoPath: '/videos/that-red-cloak.mp4',
    watchMoreLabel: 'لمشاهدة باقي أجزاء المسرحية',
    watchMoreLabelEn: 'Watch the rest of the play',
    watchMoreLink: 'https://drive.google.com/drive/folders/1XzewURdXPHvQsb0BQce5VYnvQt3_Uj5i',
  },
  'crossing-victory': {
    id: 'crossing-victory',
    title: 'عبور وانتصار',
    titleEn: 'Crossing and Victory',
    description: 'مسرحية وطنية موجهة للأطفال، تجسّد بطولات الجنود المصريين وروح العبور في حرب أكتوبر، بأسلوب مبسّط يجمع بين الترفيه والتوعية، ويغرس قيم الشجاعة، والانتماء، وحب الوطن في نفوس الأجيال الجديدة.',
    descriptionEn: 'A patriotic play for children that embodies the heroism of Egyptian soldiers and the spirit of crossing in the October War, in a simplified style that combines entertainment and awareness, instilling values of courage, belonging, and love of country in the hearts of new generations.',
    image: crossingVictoryImg,
    videoPath: '/videos/crossing-victory.mp4',
    watchMoreLabel: 'لمشاهدة باقي أجزاء المسرحية',
    watchMoreLabelEn: 'Watch the rest of the play',
    watchMoreLink: 'https://drive.google.com/drive/folders/1AAhmcss1iHiRswaiA8KfFtXjSQ0a1XEP',
  },
  'khaled-galal-tribute': {
    id: 'khaled-galal-tribute',
    title: 'حفل تكريم المخرج خالد جلال',
    titleEn: 'Director Khaled Galal Tribute',
    description: 'حفل تكريم المخرج القدير خالد جلال، عضو مجلس الشيوخ المصري، خلال الاحتفالية الفنية الكبرى التي نظمها قطاع المسرح برئاسة المخرج هشام عطوة على خشبة المسرح القومي تقديرًا لمسيرته الإبداعية وإسهاماته المؤثرة في تطوير المشهد المسرحي المصري.',
    descriptionEn: 'Tribute ceremony for distinguished director Khaled Galal, member of the Egyptian Senate, during the grand artistic celebration organized by the Theater Sector in appreciation of his creative career and influential contributions to developing the Egyptian theatrical scene.',
    image: kingLearImg,
    videoPath: '/videos/king-lear.mp4',
    sceneLabel: 'مشهدٌ من قلبِ الندوة',
    sceneLabelEn: 'A Scene from the Symposium',
    watchMoreLabel: 'لمشاهدة باقي أجزاء الندوة',
    watchMoreLabelEn: 'Watch the rest of the symposium',
    watchMoreLink: 'https://drive.google.com/drive/folders/1OaguM1lOJcVw6Gox1DjWZBDX4YhWxKP-',
  },
  'museum': {
    id: 'museum',
    title: 'متحف رواد الفن',
    titleEn: 'Art Pioneers Museum',
    description: 'جولة داخل متحف رواد الفن الذي يوثق تاريخ المسرح المصري ويحتفي برواده الأوائل من خلال مجموعة فريدة من المقتنيات والوثائق التاريخية والصور النادرة التي تحكي قصة الفن المسرحي في مصر.',
    descriptionEn: 'A tour inside the Art Pioneers Museum, which documents the history of Egyptian theater and celebrates its early pioneers through a unique collection of artifacts, historical documents, and rare photos that tell the story of theatrical art in Egypt.',
    image: museumImg,
    videoPath: '/videos/museum.mp4',
    sceneLabel: 'لقطات من المتحف',
    sceneLabelEn: 'Scenes from the Museum',
    watchMoreLabel: 'لمشاهدة باقي المتحف',
    watchMoreLabelEn: 'Watch the rest of the museum',
    watchMoreLink: 'https://drive.google.com/drive/folders/1ONqgblBCpKfpGN9vgOq3kbsr-LZLtzhv',
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

  const sceneTitle = play.sceneLabel 
    ? (language === 'ar' ? play.sceneLabel : play.sceneLabelEn)
    : t('common.sceneFromPlay');

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
              className="w-full h-[50vh] md:h-[70vh] object-cover object-center"
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
                {sceneTitle}
              </h2>
              
              <div className="relative aspect-video rounded-lg overflow-hidden gold-border mb-6">
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

              {/* Watch More Link */}
              {play.watchMoreLink && (
                <div className="text-center">
                  <p className="font-cairo text-foreground/80 mb-4">
                    {language === 'ar' ? play.watchMoreLabel : play.watchMoreLabelEn}
                  </p>
                  <a
                    href={play.watchMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-gold text-gold hover:bg-gold/10 transition-all font-cairo text-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                    {language === 'ar' ? 'شاهد الآن' : 'Watch Now'}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlayDetail;
