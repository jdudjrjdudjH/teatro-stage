import React, { useState } from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { useLanguage } from '@/contexts/LanguageContext';
import { X } from 'lucide-react';

interface LegendData {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
}

const legendsData: LegendData[] = [
  {
    id: 'samir-ghanem',
    name: 'سمير غانم',
    nameEn: 'Samir Ghanem',
    title: 'نجم الكوميديا المصرية الجماهيرية',
    titleEn: 'Star of Egyptian Popular Comedy',
    content: `يُعد سمير غانم واحدًا من أبرز نجوم الكوميديا في مصر، ولقّب بـ «أيقونة الكوميديا الجماهيرية». اشتهر بقدرته الفائقة على إضحاك الجمهور بأسلوب مرح وساخر.

النشأة والبدايات: وُلد سمير غانم عام 1937 في طنطا، وبدأ مشواره الفني في أوائل الخمسينيات من خلال المسرح الكوميدي.

كان سمير غانم جزءًا من ثلاثي أضواء المسرح، مع جورج سيدهم وعبد الله محمود، وقدم مسرحيات كوميدية حققت نجاحًا جماهيريًا كبيرًا.

أشهر أعماله المسرحية: مدرسة المشاغبين، أهلا يا دكتور، ومسرحيات ثنائي وثلاثي الكوميديا.`,
    contentEn: `Samir Ghanem is considered one of the most prominent comedy stars in Egypt, nicknamed "Icon of Popular Comedy." He was famous for his exceptional ability to make audiences laugh.

Birth and Beginnings: Samir Ghanem was born in 1937 in Tanta and began his artistic career in the early fifties through comedic theater.

He was part of the Trio of Stage Lights with George Sidhom and Abdullah Mahmoud, presenting comedic plays that achieved great popular success.

Most Famous Works: School of Troublemakers, Hello Doctor, and duo and trio comedy plays.`,
  },
  {
    id: 'mohamed-sobhi',
    name: 'محمد صبحي',
    nameEn: 'Mohamed Sobhi',
    title: 'رائد المسرح السياسي والفكاهي',
    titleEn: 'Pioneer of Political and Comedic Theater',
    content: `يُعد محمد صبحي أحد أبرز نجوم المسرح المصري الحديث، ولقّب بـ «المسرحي السياسي الفكاهي» بفضل أعماله التي تمزج بين الكوميديا والرسائل الاجتماعية والسياسية.

وُلد محمد صبحي عام 1948 في القاهرة، وأسس فرقة المسرح الحديث، وقدم مسرحيات تناولت القضايا الاجتماعية والسياسية ومشاكل الفساد.

أشهر أعماله: شاهد ما شفش حاجة، جوهره، العيال كبرت.`,
    contentEn: `Mohamed Sobhi is one of the most prominent stars of modern Egyptian theater, nicknamed "Political Comedic Theatrist" for his works that blend comedy with social and political messages.

Born in 1948 in Cairo, he founded the Modern Theater Company and presented plays addressing social and political issues and corruption problems.

Most Famous Works: Witness Who Saw Nothing, Jawhara, The Kids Have Grown Up.`,
  },
  {
    id: 'adel-imam',
    name: 'عادل إمام',
    nameEn: 'Adel Imam',
    title: 'الزعيم وملك الكوميديا السياسية',
    titleEn: 'The Leader and King of Political Comedy',
    content: `يُعد عادل إمام أحد أعظم نجوم المسرح والسينما المصرية، ولقّب بـ «الزعيم» بفضل تأثيره الكبير وجماهيريته الضخمة.

وُلد عادل إمام عام 1940 في القاهرة، وتميز بـ الكوميديا السياسية والاجتماعية التي تناولت قضايا المجتمع بأسلوب ساخر.

أشهر أعماله: الواد سيد الشغال، مدرسة المشاغبين، الزعيم، شاهد ما شفش حاجة.`,
    contentEn: `Adel Imam is one of the greatest stars of Egyptian theater and cinema, nicknamed "The Leader" due to his great influence and massive popularity.

Born in 1940 in Cairo, he excelled in political and social comedy that addressed societal issues in a satirical manner.

Most Famous Works: The Working Boy, School of Troublemakers, The Leader, Witness Who Saw Nothing.`,
  },
  {
    id: 'fatma-rushdi',
    name: 'فاطمة رشدي',
    nameEn: 'Fatma Rushdi',
    title: 'سارة برنار الشرق',
    titleEn: 'Sarah Bernhardt of the East',
    content: `تُعد فاطمة رشدي واحدة من أهم وأبرز نجمات المسرح المصري، وأول امرأة تفرض اسمها بقوة على خشبة المسرح. لُقّبت بـ «سارة برنار الشرق».

وُلدت فاطمة رشدي عام 1908، وبدأت علاقتها بالمسرح في سن صغيرة مع فرقة عزيز عيد.

ارتبط اسمها بالمسرح الجاد وقدمت أعمالاً عالمية لكبار الكتاب خاصة مسرحيات شكسبير. أسست فرقة مسرحية تحمل اسمها.`,
    contentEn: `Fatma Rushdi is one of the most important and prominent stars of Egyptian theater, the first woman to establish her name on stage. She was nicknamed "Sarah Bernhardt of the East."

Born in 1908, she began her relationship with theater at a young age with Aziz Eid's troupe.

Her name was associated with serious theater and she presented international works by great writers, especially Shakespeare's plays. She founded a theatrical troupe bearing her name.`,
  },
  {
    id: 'shwikar',
    name: 'شويكار',
    nameEn: 'Shwikar',
    title: 'نجمة الكوميديا والدراما المسرحية',
    titleEn: 'Star of Comedy and Theatrical Drama',
    content: `تُعد شويكار واحدة من أبرز نجمات المسرح المصري، ولقّبت بـ «نجمة الكوميديا الشعبية» بفضل حضورها المتميز في المسرح والسينما.

وُلدت شويكار عام 1938 في القاهرة، وجمعت في أعمالها بين الكوميديا والدراما.

أشهر أعمالها: مدرسة المشاغبين (مع عادل إمام)، أهلا يا دكتور (مع فؤاد المهندس).`,
    contentEn: `Shwikar is one of the most prominent stars of Egyptian theater, nicknamed "Star of Popular Comedy" due to her distinguished presence in theater and cinema.

Born in 1938 in Cairo, she combined comedy and drama in her works.

Most Famous Works: School of Troublemakers (with Adel Imam), Hello Doctor (with Fouad El-Mohandes).`,
  },
  {
    id: 'fouad-mohandes',
    name: 'فؤاد المهندس',
    nameEn: 'Fouad El-Mohandes',
    title: 'أيقونة الكوميديا المصرية',
    titleEn: 'Icon of Egyptian Comedy',
    content: `يُعد فؤاد المهندس واحدًا من أعظم نجوم الكوميديا في مصر، ولقّب بـ «ملك الكوميديا المسرحية والسينمائية».

وُلد فؤاد المهندس عام 1924 في القاهرة، وقدّم كوميديا اجتماعية هادفة تستخدم المواقف اليومية والنقد اللطيف.

أشهر أعماله: مدرسة المشاغبين، أهلا يا دكتور، ريا وسكينة.`,
    contentEn: `Fouad El-Mohandes is one of the greatest comedy stars in Egypt, nicknamed "King of Theatrical and Cinematic Comedy."

Born in 1924 in Cairo, he presented purposeful social comedy using everyday situations and gentle criticism.

Most Famous Works: School of Troublemakers, Hello Doctor, Raya and Sakina.`,
  },
  {
    id: 'youssef-wahbi',
    name: 'يوسف وهبي',
    nameEn: 'Youssef Wahbi',
    title: 'عميد المسرح العربي',
    titleEn: 'Dean of Arab Theater',
    content: `يُعد يوسف وهبي واحدًا من أعظم أعمدة المسرح المصري والعربي، ولقّب بـ «عميد المسرح العربي».

وُلد يوسف وهبي عام 1898 في القاهرة، وأسس فرقة رمسيس المسرحية التي قدّمت الكلاسيكيات العالمية.

أشهر أعماله: مصرع كليوباترا، رجل في قصره، الملك لير، هاملت.`,
    contentEn: `Youssef Wahbi is one of the greatest pillars of Egyptian and Arab theater, nicknamed "Dean of Arab Theater."

Born in 1898 in Cairo, he founded the Ramses Theater Company which presented world classics.

Most Famous Works: The Fall of Cleopatra, A Man in His Palace, King Lear, Hamlet.`,
  },
  {
    id: 'ali-kassar',
    name: 'علي الكسار',
    nameEn: 'Ali El-Kassar',
    title: 'ملك الكوميديا الشعبية',
    titleEn: 'King of Popular Comedy',
    content: `يُعد علي الكسار أحد أهم نجوم المسرح الكوميدي في مصر، ولقّب بـ «ملك الكوميديا الشعبية».

وُلد علي الكسار عام 1887 في القاهرة، واشتهر بتقديم الكوميديا الشعبية التي تعكس حياة الناس اليومية.

شخصيته المحبوبة «عثمان عبد الباسط» كانت من أشهر الشخصيات التي أحبها الجمهور.`,
    contentEn: `Ali El-Kassar is one of the most important comedic theater stars in Egypt, nicknamed "King of Popular Comedy."

Born in 1887 in Cairo, he was famous for presenting popular comedy reflecting people's daily lives.

His beloved character "Othman Abdel Baset" was one of the most famous characters loved by the audience.`,
  },
  {
    id: 'naguib-rihani',
    name: 'نجيب الريحاني',
    nameEn: 'Naguib El-Rihani',
    title: 'ملك الكوميديا',
    titleEn: 'King of Comedy',
    content: `يُعد نجيب الريحاني من أعظم رواد المسرح الكوميدي في مصر والعالم العربي، ولقّب بـ «ملك الكوميديا» و«موليير الشرق».

وُلد عام 1889 في القاهرة، وأسس فرقته المسرحية الخاصة وقدم عروضاً كوميدية راقية تناولت قضايا المجتمع.

تميز بشخصية «كشكش بيه» العمدة الريفي الساذج، وقدم مسرحيات خالدة مثل «الدلوعة» و«حسن ومرقص وكوهين».`,
    contentEn: `Naguib El-Rihani is one of the greatest pioneers of comedic theater in Egypt and the Arab world, nicknamed "King of Comedy" and "Molière of the East."

Born in 1889 in Cairo, he founded his own theatrical troupe and presented refined comedic performances addressing societal issues.

He was distinguished by his character "Keshkesh Bey," the naive rural mayor, and presented immortal plays like "The Spoiled One" and "Hassan, Morcos, and Cohen."`,
  },
  {
    id: 'aziz-eid',
    name: 'عزيز عيد',
    nameEn: 'Aziz Eid',
    title: 'رائد المسرح المصري',
    titleEn: 'Pioneer of Egyptian Theater',
    content: `يُعد عزيز عيد من أوائل المخرجين المسرحيين في مصر ورائد حقيقي للمسرح المصري الحديث.

وُلد عام 1884، وكان له دور كبير في تأسيس فرق مسرحية وتدريب أجيال من الممثلين والممثلات.

ساهم في اكتشاف مواهب كبيرة مثل فاطمة رشدي، وقدم مسرحيات متنوعة بين الكوميديا والدراما.`,
    contentEn: `Aziz Eid is one of the first theatrical directors in Egypt and a true pioneer of modern Egyptian theater.

Born in 1884, he played a major role in establishing theatrical troupes and training generations of actors and actresses.

He contributed to discovering great talents like Fatma Rushdi and presented diverse plays between comedy and drama.`,
  },
  {
    id: 'yaqub-sanu',
    name: 'يعقوب صنوع',
    nameEn: 'Yaqub Sanu',
    title: 'أبو المسرح العربي',
    titleEn: 'Father of Arab Theater',
    content: `يُعد يعقوب صنوع مؤسس المسرح العربي الحديث، ولقّب بـ «أبو المسرح العربي» و«موليير مصر».

وُلد عام 1839 في القاهرة، وأسس أول فرقة مسرحية مصرية عام 1870 وقدم عروضاً بالعامية المصرية.

كتب وأخرج العديد من المسرحيات الاجتماعية الساخرة، وكان له دور كبير في نشر الوعي المسرحي في مصر.`,
    contentEn: `Yaqub Sanu is the founder of modern Arab theater, nicknamed "Father of Arab Theater" and "Egypt's Molière."

Born in 1839 in Cairo, he established the first Egyptian theatrical troupe in 1870 and presented performances in Egyptian colloquial Arabic.

He wrote and directed many satirical social plays and played a major role in spreading theatrical awareness in Egypt.`,
  },
];

const Memory: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedLegend, setSelectedLegend] = useState<LegendData | null>(null);

  return (
    <Layout>
      <section className="py-20 min-h-screen bg-gradient-stage">
        <div className="container mx-auto px-4">
          <SectionTitle title={t('memory.title')} subtitle={t('memory.subtitle')} />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 stagger-children">
            {legendsData.map((legend) => (
              <button
                key={legend.id}
                onClick={() => setSelectedLegend(legend)}
                className="theater-card rounded-xl p-6 text-center spotlight cursor-pointer hover:scale-105 transition-transform text-start"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold/20 to-primary/20 flex items-center justify-center">
                  <span className="font-amiri text-3xl text-gold">🎭</span>
                </div>
                <h3 className="font-amiri text-xl text-gold mb-2 text-center">
                  {language === 'ar' ? legend.name : legend.nameEn}
                </h3>
                <p className="font-cairo text-sm text-muted-foreground text-center">
                  {language === 'ar' ? legend.title : legend.titleEn}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedLegend && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedLegend(null)}
        >
          <div 
            className="theater-card rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto gold-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="font-amiri text-3xl text-gold mb-2">
                  {language === 'ar' ? selectedLegend.name : selectedLegend.nameEn}
                </h2>
                <p className="font-cairo text-muted-foreground">
                  {language === 'ar' ? selectedLegend.title : selectedLegend.titleEn}
                </p>
              </div>
              <button 
                onClick={() => setSelectedLegend(null)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-muted-foreground" />
              </button>
            </div>
            
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/30 to-primary/30 flex items-center justify-center">
              <span className="font-amiri text-5xl text-gold">🎭</span>
            </div>
            
            <p className="font-cairo text-foreground/90 leading-relaxed whitespace-pre-line">
              {language === 'ar' ? selectedLegend.content : selectedLegend.contentEn}
            </p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Memory;
