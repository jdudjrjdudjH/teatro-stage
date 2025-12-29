import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import WatchButton from '@/components/WatchButton';
import { useLanguage } from '@/contexts/LanguageContext';

// Import images
import kingLearImg from '@/assets/plays/king-lear.jpg';
import carmenImg from '@/assets/plays/carmen.jpg';
import womenPrisonImg from '@/assets/plays/women-prison.jpg';
import thatRedCloakImg from '@/assets/plays/that-red-cloak.jpg';
import crossingVictoryImg from '@/assets/plays/crossing-victory.jpg';

interface NewsArticle {
  id: string;
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
  image: string;
  links: { url: string; label: string; labelEn: string }[];
}

const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'يحيى الفخراني يستعيد تألقه المسرحي تحت عباءة «الملك لير»',
    titleEn: 'Yahia Al-Fakharany Regains His Theatrical Brilliance Under "King Lear"',
    content: `وزير الثقافة المصري وصفه بأنه صاحب «طاقة إبداعية متجددة».

استعاد الفنان المصري يحيى الفخراني تألقه المسرحي عبر عرض «الملك لير» الذي تم افتتاحه مساء الثلاثاء على خشبة المسرح القومي بالعتبة وسط القاهرة، في حضور وزراء مصريين من بينهم الدكتور أحمد فؤاد هنو وزير الثقافة، والدكتور بدر عبد العاطي وزير الخارجية والهجرة.

وأعرب الدكتور أحمد فؤاد هنو وزير الثقافة، عن سعادته بعودة النجم يحيى الفخراني للوقوف على خشبة المسرح القومي، ليقدم رائعة «الملك لير» برؤية جديدة، مشيداً بجودة العرض ورؤية المخرج شادي سرور، وبأداء الفريق بالكامل من ممثلين ومصممي ديكور وأزياء وإضاءة.

وأثنى الوزير بشكل خاص على «الأداء المتفرد» للفنان الكبير يحيى الفخراني، الذي قدم شخصية «الملك لير» بإحساس عميق وبراعة فنية فائقة، مؤكداً أن «ما قدمه يعكس طاقته الإبداعية المتجددة وقدرته الاستثنائية على إعادة اكتشاف النص المسرحي بروح معاصرة».

ويضم عرض «الملك لير» نخبة من نجوم المسرح المصري، منهم، طارق دسوقي، حسن يوسف، أحمد عثمان، تامر الكاشف، أمل عبد الله، إيمان رجائي، لقاء علي، بسمة دويدار، طارق شرف، محمد العزايزي، عادل خلف، ومحمد حسن.`,
    contentEn: `The Egyptian Minister of Culture described him as having "renewed creative energy".

Egyptian artist Yahia Al-Fakharany regained his theatrical brilliance through the "King Lear" show, which opened on Tuesday evening on the stage of the National Theater in Ataba, central Cairo, in the presence of Egyptian ministers including Dr. Ahmed Fouad Hano, Minister of Culture, and Dr. Badr Abdel-Aty, Minister of Foreign Affairs and Immigration.

Dr. Ahmed Fouad Hano, Minister of Culture, expressed his happiness at the return of star Yahia Al-Fakharany to stand on the stage of the National Theater, to present the masterpiece "King Lear" with a new vision, praising the quality of the show and the vision of director Shady Sorour, and the performance of the entire team of actors, set designers, costumes, and lighting.

The minister particularly praised the "unique performance" of the great artist Yahia Al-Fakharany, who presented the character of "King Lear" with deep feeling and superb artistic mastery, confirming that "what he presented reflects his renewed creative energy and his exceptional ability to rediscover the theatrical text with a contemporary spirit."`,
    image: kingLearImg,
    links: [
      { url: 'https://drive.google.com/file/d/1bipSuU2yv5JcRjsfB2Nto57j5NAaxznr/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1xFO_KeKdDX-s-OW2m33H7piS6mNe987I/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1vVNU3hqiPKqqbV8BWEx6A2HsPgrikVFe/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1mpho9ia2LuQC882pmtztR0PqnAnAdyFt/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
    ],
  },
  {
    id: '2',
    title: 'وزير الثقافة يشهد العرض المسرحي "كارمن" بمسرح الطليعة ويشيد بصناعه',
    titleEn: 'Minister of Culture Attends "Carmen" Theater Performance at Tali\'a Theater and Praises Its Makers',
    content: `شهد الدكتور أحمد فؤاد هنو، وزير الثقافة، العرض المسرحي "كارمن"، على خشبة مسرح الطليعة بالعتبة، وذلك ضمن أنشطة قطاع المسرح برئاسة المخرج خالد جلال، ومن إنتاج فرقة مسرح الطليعة التابعة للبيت الفني للمسرح برئاسة المخرج هشام عطوة.

وأعرب وزير الثقافة عن سعادته بما شهده من معالجة مسرحية حديثة وجريئة لرواية "كارمن"، مشيدًا بأسلوب التناول المختلف، والرؤية الإخراجية المعاصرة التي تجمع بين الأصالة والحداثة، وتعكس وعيًا فنيًا راقيًا في توظيف عناصر العرض من تمثيل، وحركة، وموسيقى، واستعراض.

وأكد الدكتور أحمد فؤاد هنو أن العرض يُجسّد حيوية المسرح المصري، ويُبرز الطاقات الإبداعية للشباب، سواء على خشبة المسرح أو خلف الكواليس.

يُذكر أن العرض المسرحي "كارمن" مستلهم من رواية الكاتب الفرنسي بروسبير ميريميه، في معالجة مسرحية للكاتب محمد علي إبراهيم، ويشارك في بطولته الفنانون: ريم أحمد، ميدو عبد القادر، نهال فهمي، محمد حسيب، ليديا سليمان.`,
    contentEn: `Dr. Ahmed Fouad Hano, Minister of Culture, attended the theatrical performance "Carmen" on the stage of Tali'a Theater in Ataba, as part of the activities of the Theater Sector headed by director Khaled Jalal, and produced by the Tali'a Theater Company affiliated with the Fine Arts House for Theater headed by director Hisham Atwa.

The Minister of Culture expressed his happiness with what he witnessed from a modern and bold theatrical treatment of the novel "Carmen", praising the different approach style, and the contemporary directorial vision that combines authenticity and modernity, reflecting a refined artistic awareness in employing the elements of the show including acting, movement, music, and choreography.

Dr. Ahmed Fouad Hano confirmed that the show embodies the vitality of Egyptian theater and highlights the creative energies of youth, both on stage and behind the scenes.`,
    image: carmenImg,
    links: [
      { url: 'https://drive.google.com/file/d/1cdpLjwFkWn7VWMehIJkPjVKtmzIGyajs/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1zMIMJs-2ymxeaNsTt4ULEdXItLJX-JQe/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
    ],
  },
  {
    id: '3',
    title: '«سجن النسا»... مسرحية تراجيدية تجسّد «مظلومية المرأة» في قالب عصري',
    titleEn: '"Women\'s Prison"... A Tragic Play Embodying "Women\'s Oppression" in a Modern Format',
    content: `بصوت «شفيقة» المطربة الشعبية التي تتداخل في أغانيها مشاعر الحزن والشجن، مهّد صناع العرض المسرحي «سجن النسا» الأجواء للجمهور حتى يستقبل قصصاً مأساوية لعشر نساء يجمعهن مكان واحد، هو السجن.

النص المسرحي الذي كتبته واحدة من رموز الإبداع والكتابة النسوية في مصر، وهي فتحية العسال (1933 - 2014)، دونت فيه تجربتها بسجن القناطر حين تعرضت للاعتقال أكثر من مرة لمواقفها السياسية في سبعينات القرن الماضي.

تبدأ المسرحية بروح عصرية لفتاة تحاول كسب أموال عن طريق «السوشيال ميديا» بجذب المتابعين وطلب الهدايا منهم على أحد التطبيقات، وتحاول إقناع صديقتها بالدخول معها في هذا المجال لكسب المال، ثم تكتشفان أن الموقع الذي تدخلان عليه مشبوه، ويستدرج الفتيات لأفعال غير لائقة، فينتهي بهن المطاف خلف القضبان.

العرض الذي تقدمه «فرقة المسرح الحديث» على «مسرح السلام» من إخراج يوسف مراد منير، يحتوي على مقاطع موسيقية من تأليف محمد عزت. ويشارك في العرض الفنانات هايدي عبد الخالق، وهنادي عبد الخالق، وشريهان الشاذلي، وآية أبو زيد.`,
    contentEn: `With the voice of "Shafika", the folk singer whose songs intertwine feelings of sadness and melancholy, the makers of the theatrical performance "Women's Prison" set the atmosphere for the audience to receive tragic stories of ten women united by one place: the prison.

The theatrical text was written by one of the icons of creativity and feminist writing in Egypt, Fathia Al-Assal (1933-2014), who documented her experience at Qanater Prison when she was arrested more than once for her political positions in the 1970s.

The play begins with a modern spirit of a girl trying to earn money through "social media" by attracting followers and asking for gifts from them on one of the applications. She tries to convince her friend to join her in this field to earn money, then they discover that the site they are entering is suspicious and lures girls into inappropriate acts, ending them behind bars.`,
    image: womenPrisonImg,
    links: [
      { url: 'https://drive.google.com/file/d/1CzhRpzHXu8egRi71meOUgTeHNreo03W0/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/17Hdon12YauBfQ-fji0Vt7nshm3lFPBB7/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1vehadCJTaozUheGzwG498UcZP8v2U1xi/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
    ],
  },
  {
    id: '4',
    title: '«ذات والرداء الأحمر»... مسرحية تسلّط الضوء على «غابة السوشيال ميديا»',
    titleEn: '"That and the Red Dress"... A Play Highlighting the "Social Media Jungle"',
    content: `تستدعي مسرحية «ذات... والرداء الأحمر» الحكاية الخرافية الشهيرة للفتاة الصغيرة صاحبة الرداء الأحمر، المعروفة باسم «ليلى والذئب»، الفتاة التي خاضت مغامرة في الغابة لاحقها فيها الذئب، وتنكّر بصورة جدتها.

في العرض المسرحي الجديد الذي يستضيفه مسرح القاهرة للعرائس، من تأليف وليد كمال، وإخراج نادية الشويخ، ينقل فريق العمل الحكاية الخرافية إلى فضاء معاصر، حيث تواجه البطلة الصغيرة ذئاباً أخرى في غابة «السوشيال ميديا».

لا يفارق بطلة العرض «ذات» هاتفها المحمول طيلة العرض. وتظهر في بث حي «لايف» تخاطب من خلاله متابعيها على «تيك توك» بفستانها الأحمر الذي تعتقد أنه سيجعلها مميزة و«متفردة»، فتظل متمسكة بارتدائه طيلة بثها الحي، والتي تُكثف وتيرته أملاً في جذب مليون متابع.`,
    contentEn: `The play "That... and the Red Dress" evokes the famous fairy tale of the little girl with the red dress, known as "Little Red Riding Hood", the girl who went on an adventure in the forest where the wolf chased her and disguised himself as her grandmother.

In the new theatrical performance hosted by Cairo Puppet Theater, written by Walid Kamal and directed by Nadia Al-Sheikh, the team transports the fairy tale to a contemporary space, where the little heroine faces other wolves in the "social media" jungle.

The heroine "That" never leaves her mobile phone throughout the show. She appears in a "live" broadcast addressing her followers on "TikTok" in her red dress, which she believes will make her distinctive and "unique", so she remains attached to wearing it throughout her live broadcast, intensifying its pace hoping to attract a million followers.`,
    image: thatRedCloakImg,
    links: [
      { url: 'https://drive.google.com/file/d/1tdaefxgv0fEMd-Km2H1HqIb2kOOAjfvB/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1t9m_PjEKUnmc6nZEPh2SLRaRC2qxoFmM/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1NQRff1PLLOa6XI32XTEkkPtRDqxVxtcz/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1w-0dDASxtsa9DAjTlvpW-0A53QefL_ck/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
    ],
  },
  {
    id: '5',
    title: 'حول أكتوبر المجيد.. «عبور وانتصار» يستقبل جمهوره بـ المسرح القومي للأطفال',
    titleEn: 'About Glorious October... "Crossing and Victory" Welcomes Its Audience at the National Children\'s Theater',
    content: `يواصل العرض المسرحي «عبور وانتصار»، من إنتاج فرقة المسرح القومى للأطفال، بقيادة الفنانة إيناس نور، والتابع للبيت الفنى للمسرح، تقديم عروضه، وذلك بعد النجاح الكبير والإقبال الجماهيرى الذى حققه العرض منذ افتتاحه.

ويستمر تقديم العرض على خشبة المسرح القومى للأطفال بوسط القاهرة أيام الخميس والجمعة والسبت والأحد، فى الثامنة مساءً.

«عبور وانتصار» يسلط الضوء حول انتصارات أكتوبر، تُقدم أسرة العرض المسرحي «عبور وانتصار» تجربة حرب 1973 حتى لحظات الانتصار، والمسرحية الوطنية الاستعراضية تدور أحداثها منذ نكسة يونيو وحتى العبور.

والعرض من بطولة هانى كمال، منير مكرم، عبدالسلام الدهشان، عادل شعبان، وإيمان سالم، الطفل أحمد عصام، أداء صوتي حلمى فودة، والعرض من تأليف وإخراج محمد الخولي.`,
    contentEn: `The theatrical performance "Crossing and Victory", produced by the National Children's Theater Company, led by artist Enas Nour, and affiliated with the Fine Arts House for Theater, continues to present its shows, following the great success and public turnout the show has achieved since its opening.

The show continues to be presented on the stage of the National Children's Theater in central Cairo on Thursdays, Fridays, Saturdays and Sundays at 8 pm.

"Crossing and Victory" highlights October victories, presenting the 1973 war experience until moments of victory. The national spectacular play takes place from the June setback to the crossing.

The show stars Hany Kamal, Mounir Makram, Abdel Salam Al-Dahshan, Adel Shaaban, and Iman Salem, child Ahmed Essam, voice performance by Helmy Fouda, and the show is written and directed by Mohamed Al-Khouly.`,
    image: crossingVictoryImg,
    links: [
      { url: 'https://drive.google.com/file/d/165n0OJiu5jR3nE91DGcE-ovA5bJbM2nn/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1Rh173gQ9zd0qKxCLAKKIYbjRU6clQlLY/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1FOCizgNTRmnhBseTiztN_yyqnZ885grR/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
    ],
  },
];

const News: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <section className="py-20 min-h-screen bg-gradient-stage">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={t('news.title')} 
            subtitle={t('news.subtitle')} 
          />
          
          <div className="space-y-16 stagger-children">
            {newsArticles.map((article) => (
              <article key={article.id} className="theater-card rounded-xl overflow-hidden">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="md:col-span-1">
                    <img
                      src={article.image}
                      alt={language === 'ar' ? article.title : article.titleEn}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="md:col-span-2 p-6 md:p-8">
                    <h2 className="font-amiri text-2xl md:text-3xl text-gold mb-4">
                      {language === 'ar' ? article.title : article.titleEn}
                    </h2>
                    
                    <p className="font-cairo text-foreground/80 leading-relaxed mb-6 whitespace-pre-line line-clamp-6 md:line-clamp-none">
                      {language === 'ar' ? article.content : article.contentEn}
                    </p>
                    
                    {/* Watch Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {article.links.map((link, index) => (
                        <WatchButton 
                          key={index} 
                          href={link.url} 
                          variant="secondary"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
