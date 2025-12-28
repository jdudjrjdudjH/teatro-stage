import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { useLanguage } from '@/contexts/LanguageContext';

interface FestivalEvent {
  id: string;
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
  links: { url: string; label: string; labelEn: string }[];
}

const festivalEvents: FestivalEvent[] = [
  {
    id: '1',
    title: 'مازن الغرباوى: "كتاب المخرجين الشباب مساهمة فى توثيق المسرح المصرى"',
    titleEn: 'Mazen Al-Gharbawi: "The Book of Young Directors is a Contribution to Documenting Egyptian Theater"',
    content: `بدأت منذ قليل، ندوة الاحتفاء بكتاب "رؤى وتجارب ووهج آسر مسرح الآلفية الثالثة" للناقد باسم صادق، والذي أقامها مهرجان شرم الشيخ الدولي للمسرح الشبابي، برئاسة المخرج مازن الغرباوي، وأدار الندوة الناقد والمخرج جمال عبد الناصر، وبمشاركة الفنان ميدو عادل.

واستهل المخرج مازن الغرباوي حديثه قائلاً: "أتقدم بخالص الشكر لرئيس المركز القومي للمسرح. لقد تصدت إدارة المهرجان لتنظيم هذا الحدث احتفالًا بمرور عشر سنوات على المهرجان، ليكون هناك توثيق لبعض المخرجين من مخرجي الألفية الجديدة، وفق رؤية الكاتب والناقد باسم صادق."

يقام مهرجان شرم الشيخ الدولي للمسرح الشبابي برعاية وزارة الثقافة المصرية برئاسة الأستاذ الدكتور أحمد فؤاد هنو، ووزارة السياحة والآثار برئاسة الوزير شريف فتحي.`,
    contentEn: `A symposium celebrating the book "Visions, Experiences, and Captivating Glow of Third Millennium Theater" by critic Bassem Sadeq has just begun. The symposium was organized by the Sharm El-Sheikh International Youth Theater Festival, headed by director Mazen Al-Gharbawi, and moderated by critic and director Gamal Abdel Nasser, with the participation of artist Mido Adel.

Director Mazen Al-Gharbawi began his speech by saying: "I extend my sincere thanks to the President of the National Theater Center. The festival administration has undertaken to organize this event to celebrate the festival's ten-year anniversary, to document some of the directors of the new millennium, according to the vision of writer and critic Bassem Sadeq."

The Sharm El-Sheikh International Youth Theater Festival is held under the patronage of the Egyptian Ministry of Culture headed by Professor Dr. Ahmed Fouad Hano, and the Ministry of Tourism and Antiquities headed by Minister Sherif Fathy.`,
    links: [
      { url: 'https://drive.google.com/file/d/1dnmgsDzo50D1hpANBnS1X_6PV1FrYNrT/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1CSRb0MAC-pKunn3Df6kEuhiTwCezsUNr/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1YDitsctnNA10sDNmocDL7JAQhtTBDAf9/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1OcKlImnpZCMoSCcdi3Z87JaLCn_1Xezo/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
    ],
  },
  {
    id: '2',
    title: '"كارمن يمثل مصر في المسابقة الرسمية لمهرجان المسرح العربي 2026"',
    titleEn: '"Carmen Represents Egypt in the Official Competition of the Arab Theater Festival 2026"',
    content: `تحت رعاية الدكتور أحمد فؤاد هنو وزير الثقافة، وبإشراف المخرج هشام عطوة رئيس قطاع المسرح، يشارك العرض المسرحي "كارمن" إخراج ناصر عبد المنعم إنتاج فرقة مسرح الطليعة بقيادة المخرج سامح بسيوني، في المسابقة الرسمية لمهرجان المسرح العربي الذي تنظمه الهيئة العربية للمسرح بالقاهرة خلال الفترة من 10 إلي 16 يناير 2026.

وأعلنت لجنة اختيار العروض، برئاسة الدكتور يوسف عايدابي من دولة السودان، عن اختيار 15 عرضًا مسرحيًا فقط من مختلف الدول العربية للتنافس على جائزة صاحب السمو الشيخ الدكتور سلطان محمد القاسمي لأفضل عمل مسرحي عربي.

يُذكر أن "كارمن" مأخوذة عن رواية الكاتب الفرنسي بروسبير ميريميه، دراماتورج محمد علي إبراهيم، وتتناول حياة كارمن الفتاة الغجرية المتمرّدة التي تمثل ثقافة الغجر في مواجهة ثقافة المدنية الإسبانية القائمة على النظام والقانون.`,
    contentEn: `Under the patronage of Dr. Ahmed Fouad Hano, Minister of Culture, and under the supervision of director Hisham Atwa, Head of the Theater Sector, the theatrical performance "Carmen" directed by Nasser Abdel Moneim, produced by the Tali'a Theater Company led by director Sameh Bassiouni, participates in the official competition of the Arab Theater Festival organized by the Arab Theater Authority in Cairo from January 10 to 16, 2026.

The selection committee, headed by Dr. Youssef Aidabi from Sudan, announced the selection of only 15 theatrical performances from various Arab countries to compete for His Highness Sheikh Dr. Sultan Muhammad Al-Qasimi Award for Best Arab Theatrical Work.

"Carmen" is based on the novel by French writer Prosper Mérimée, dramaturged by Mohamed Ali Ibrahim, and deals with the life of Carmen, the rebellious gypsy girl who represents gypsy culture in the face of Spanish civic culture based on order and law.`,
    links: [
      { url: 'https://drive.google.com/file/d/1KM_q-sXol19h0CuBxSb3_Ix3_PrSOsQK/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1cdpLjwFkWn7VWMehIJkPjVKtmzIGyajs/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
    ],
  },
  {
    id: '3',
    title: 'وزير الثقافة يُكرّم المخرج القدير خالد جلال في احتفالية كبرى بالمسرح القومي',
    titleEn: 'Minister of Culture Honors Distinguished Director Khaled Jalal at a Grand Ceremony at the National Theater',
    content: `كرّم الدكتور أحمد فؤاد هَنو، وزير الثقافة، المخرج القدير خالد جلال، عضو مجلس الشيوخ المصري، خلال الاحتفالية الفنية الكبرى التي نظمها قطاع المسرح برئاسة المخرج هشام عطوة على خشبة المسرح القومي تقديرًا لمسيرته الإبداعية وإسهاماته المؤثرة في تطوير المشهد المسرحي المصري.

وأكد وزير الثقافة خلال كلمته أن الاحتفاء بالمبدعين يمثل تأكيدًا لقيمة الفن المصري العظيم، مشيرًا إلى أن تكريم خالد جلال هو تكريم لتجربة فنية وفكرية أثرت الوجدان وأسهمت في تعزيز قوة الفن المصري في المحافل المختلفة.

وأضاف الوزير أن صداقة ممتدة جمعته بالمخرج القدير خالد جلال على مدار سنوات، وأنه شهد خلالها حجم ما قدمه من عطاء وفكر ورؤية في تقديم جيل واعد من الفنانين.`,
    contentEn: `Dr. Ahmed Fouad Hano, Minister of Culture, honored distinguished director Khaled Jalal, member of the Egyptian Senate, during the grand artistic celebration organized by the Theater Sector headed by director Hisham Atwa on the stage of the National Theater in appreciation of his creative career and influential contributions to the development of the Egyptian theatrical scene.

The Minister of Culture confirmed in his speech that celebrating creators represents an affirmation of the value of great Egyptian art, pointing out that honoring Khaled Jalal is an honor to an artistic and intellectual experience that enriched the conscience and contributed to strengthening the power of Egyptian art in various forums.

The minister added that an extended friendship brought him together with the distinguished director Khaled Jalal over the years, during which he witnessed the extent of his giving, thought, and vision in presenting a promising generation of artists.`,
    links: [
      { url: 'https://drive.google.com/file/d/1WcjcXTvL5y86FRl2rf9oSUgT3q4OnTgC/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1_d6JHnKnvQgZJWusaZrM8s-TmqCH7FR5/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
    ],
  },
  {
    id: '4',
    title: 'مهرجان القاهرة الدولي للمسرح التجريبي - الدورة 33',
    titleEn: 'Cairo International Festival for Experimental Theatre - 33rd Edition',
    content: `يعلن مهرجان القاهرة الدولي للمسرح التجريبي، برئاسة الدكتور سامح مهران عن طرح استمارة المشاركة في دورته ال33 للفرق الأجنبية والعربية، والمقرر أن تقام في الفترة من 1 إلى 8 سبتمبر 2026، وتحدد آخر معاد لتلقي المشاركات 1 فبراير 2026، وسيتم طرح استمارة مشاركة العروض المصرية في وقت لاحق.

استمارة الفرق العربية:
https://forms.gle/fG9ovoXhtFVAG8Rn7

استمارة الفرق الأجنبية:
https://forms.gle/bdGrjaoWdNasToVu8`,
    contentEn: `The Cairo International Festival for Experimental Theatre, headed by Prof. Sameh Mahran, announces the opening of submissions for Arab and foreign performances to participate in its 33rd edition, which will take place from 1 to 8 September 2026.

The deadline for submissions is 1 February 2026.
Please note that the participation call for Egyptian performances will be announced at a later date.

Arab Groups Application Form:
https://forms.gle/fG9ovoXhtFVAG8Rn7

Foreign Performances Participation Form:
https://forms.gle/bdGrjaoWdNasToVu8`,
    links: [
      { url: 'https://forms.gle/fG9ovoXhtFVAG8Rn7', label: 'استمارة الفرق العربية', labelEn: 'Arab Groups Form' },
      { url: 'https://forms.gle/bdGrjaoWdNasToVu8', label: 'استمارة الفرق الأجنبية', labelEn: 'Foreign Groups Form' },
    ],
  },
  {
    id: '5',
    title: 'انطلاق الدورة العاشرة من مهرجان شرم الشيخ الدولي للمسرح الشبابي',
    titleEn: 'Launch of the 10th Edition of Sharm El-Sheikh International Youth Theater Festival',
    content: `تنطلق الثلاثاء، 25 نوفمبر، فعاليات الدورة العاشرة من مهرجان شرم الشيخ الدولي للمسرح الشبابي، برئاسة المخرج مازن الغرباوي والمدير التنفيذي د. إنجي البستاوي ورئيس اللجنة العليا المنتج هشام سليمان.

يعد المهرجان أحد المشاريع التي شاركت في تأسيسها سيدة المسرح العربي الراحلة سميحة أيوب والتي تحمل هذا العام اسم النجمة المصرية إلهام شاهين احتفاء بمسيرتها الفنية ودعمها المستمر للمسرح والفنون.

وتقام فعاليات المهرجان في الفترة من 25 إلى 30 نوفمبر وسط مشاركة عربية ودولية واسعة وبرعاية من وزارتي الثقافة والسياحة ومحافظة جنوب سيناء.

تحتشد الدورة العاشرة ببرنامج عروض ضخم يضم 20 عرضا من 14 دولة عربية وأجنبية: مصر، السعودية، الإمارات، الكويت، قطر، الجزائر، تونس، الأردن، إسبانيا، إيطاليا، بولندا، كوريا الجنوبية، روسيا، أرمينيا.`,
    contentEn: `On Tuesday, November 25, the activities of the 10th edition of the Sharm El-Sheikh International Youth Theater Festival will be launched, headed by director Mazen Al-Gharbawi, executive director Dr. Engy El-Bestawy, and higher committee chairman producer Hisham Soliman.

The festival is one of the projects co-founded by the late lady of Arab theater, Samiha Ayoub, and this year bears the name of Egyptian star Elham Shaheen in celebration of her artistic career and continuous support for theater and arts.

The festival events are held from November 25 to 30 amid wide Arab and international participation and under the patronage of the Ministries of Culture and Tourism and South Sinai Governorate.

The 10th edition is packed with a huge program of 20 performances from 14 Arab and foreign countries: Egypt, Saudi Arabia, UAE, Kuwait, Qatar, Algeria, Tunisia, Jordan, Spain, Italy, Poland, South Korea, Russia, and Armenia.`,
    links: [
      { url: 'https://drive.google.com/file/d/1im4VTB1uCMKFP4tHxOQKhsAe8b1EuXDN/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1rq6AqrU3h9NhkGYyMgWFOh0UAigYzNJy/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1fbFg_q2x8TuI-tmHsY-pRld0fmCuEYVL/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
    ],
  },
];

const Festivals: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <section className="py-20 min-h-screen bg-gradient-stage">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={t('festivals.title')} 
            subtitle={t('festivals.subtitle')} 
          />
          
          <div className="space-y-12 stagger-children">
            {festivalEvents.map((event) => (
              <article key={event.id} className="theater-card rounded-xl overflow-hidden p-6 md:p-8">
                <h2 className="font-amiri text-2xl md:text-3xl text-gold mb-4">
                  {language === 'ar' ? event.title : event.titleEn}
                </h2>
                
                <p className="font-cairo text-foreground/80 leading-relaxed mb-6 whitespace-pre-line">
                  {language === 'ar' ? event.content : event.contentEn}
                </p>
                
                {/* Watch Buttons */}
                <div className="flex flex-wrap gap-3">
                  {event.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gold/50 text-gold hover:bg-gold/10 transition-all font-cairo"
                    >
                      {language === 'ar' ? link.label : link.labelEn}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Festivals;
