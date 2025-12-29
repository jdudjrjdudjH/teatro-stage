import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { useLanguage } from '@/contexts/LanguageContext';

// Import images
import hawadeetImg from '@/assets/articles/hawadeet.jpg';
import carmenImg from '@/assets/articles/carmen.jpg';
import kingLearImg from '@/assets/articles/king-lear.jpg';

const articlesData = [
  {
    id: 'hawadeet',
    title: 'حواديت',
    titleEn: 'Hawadeet',
    image: hawadeetImg,
    content: `من أبرز الكتابات النقدية عن عرض (حواديت) للمخرج الكبير خالد جلال:

بين أنهار الدموع ودموع الضحك ... قسوة خالد جلال في "حواديت"
بقلم الدكتور/ محمود كامل - الأستاذ بأكاديمية الفنون

في سهرة مسرحية استثنائية عشتها الليلة بصحبة زوجتي العزيزة وابني عاصم وجدت نفسي في مواجهة تجربة مسرحية نادرة الحدوث هي عرض "حواديت" للمخرج الكبير خالد جلال على خشبة مركز الإبداع الفني.

البداية ... فلسطين وأغنية بندقية الوجدان

افتتح خالد جلال عرضه بمشهد محوري سيظل محفورا في الذاكرة هو أغنية "الآن أصبح عندي بندقية" التي تردد صداها على الخشبة لتتحول إلى نشيد وجداني صادق لفلسطين.

ما يميز خالد جلال هو تلك القسوة الفنية التي تمارس نوعا من "التطهير الأرسطي" على الجمهور. لقد مارس خالد جلال علينا "الضغط الجمالي" الذي يحول القسوة إلى أداة تربوية.

من أبرز ملامح العرض أن البطولة لم تنحصر في فرد بعينه بل توزعت على ما يقارب 40 ممثلا وممثلة كل منهم كان بطلا في حكايته الخاصة.

إن الحديث عن خالد جلال لا يمكن اختزاله في كونه مخرجا مسرحيا فقط فهو بالمعنى العميق "مربي مسرحي" وصانع أجيال وعراب لمواهب شابة.`,
    contentEn: `One of the most prominent critical writings about the show (Hawadeet) by the great director Khaled Galal:

Between Rivers of Tears and Tears of Laughter... Khaled Galal's Cruelty in "Hawadeet"
By Dr. Mahmoud Kamel - Professor at the Academy of Arts

In an exceptional theatrical evening I experienced tonight with my dear wife and my son Asem, I found myself facing a rare theatrical experience - the show "Hawadeet" by the great director Khaled Galal on the stage of the Creativity Center.

The Beginning... Palestine and the Song of the Conscience's Rifle

Khaled Galal opened his show with a pivotal scene that will remain etched in memory - the song "Now I Have a Rifle" which echoed on the stage to become a sincere emotional anthem for Palestine.

What distinguishes Khaled Galal is that artistic cruelty that practices a kind of "Aristotelian catharsis" on the audience.

One of the most prominent features of the show is that the heroism was not confined to one individual but was distributed among about 40 actors and actresses, each being a hero in their own story.`,
  },
  {
    id: 'carmen-article',
    title: '«كارمن» تعود مجدداً لخشبة المسرح المصري برؤية حداثية',
    titleEn: 'Carmen Returns to Egyptian Theater with a Modern Vision',
    image: carmenImg,
    content: `تعود الفتاة الغجرية الإسبانية «كارمن»، بطلة رواية الكاتب الفرنسي بروسبير ميرميه، للظهور مجدداً على خشبة المسرح المصري، ولكن هذه المرة برؤية حداثية.

على مدار 3 أشهر يحتضن مسرح الطليعة بالقاهرة، عرض «كارمن»، الذي لفت أنظار الجمهور وأثار إعجاب النقاد.

قصة العرض الشهيرة تدور حول فتاة غجرية تسعى لإيقاع الرجال في حبها، ومنهم الضابط خوسيه نافارو، الذي وقع فعلاً في حبها، فتحول من شرطي إلى مجرم خارج على القانون.

يؤكد المخرج ناصر عبد المنعم أن «مسرحية (كارمن) تُعد من الأعمال الخالدة التي عبرت الأزمنة والأمكنة وظلت تجد طريقها إلى المسرح والسينما والأوبرا».`,
    contentEn: `The Spanish gypsy girl "Carmen," heroine of French writer Prosper Mérimée's novel, returns to the Egyptian theater stage, but this time with a modern vision.

For 3 months, the Tali'a Theater in Cairo hosts the "Carmen" show, which attracted the audience's attention and impressed critics.

The famous story revolves around a gypsy girl who seeks to make men fall in love with her, including officer José Navarro, who actually fell in love with her, transforming from a policeman to an outlaw criminal.

Director Nasser Abdel Moneim confirms that "the play (Carmen) is one of the immortal works that crossed times and places and continued to find its way to theater, cinema, and opera."`,
    links: [
      { url: 'https://drive.google.com/file/d/1zMIMJs-2ymxeaNsTt4ULEdXItLJX-JQe/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1KM_q-sXol19h0CuBxSb3_Ix3_PrSOsQK/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
    ],
  },
  {
    id: 'king-lear-article',
    title: '«الملك لير»... العرض المسرحي المصري يعزز حضوره عربياً',
    titleEn: 'King Lear... Egyptian Theater Show Strengthens Its Arab Presence',
    image: kingLearImg,
    content: `يعزز العرض المسرحي المصري «الملك لير» حضوره عربياً بعد اختياره لافتتاح الدورة الـ26 من مهرجان أيام قرطاج المسرحية في تونس.

وحقق عرض «الملك لير» نجاحاً لافتاً خلال عرضه في أكثر من موسم، وهو عن المسرحية الشهيرة من تأليف ويليام شكسبير، بترجمة فاطمة موسى، وقام بإخراجه للمسرح القومي شادي سرور، من بطولة يحيى الفخراني.

وتدور قصة المسرحية حول الملك لير الذي قرر توزيع أملاكه على بناته الثلاث، لكنه حرم ابنته الصغرى من نعمه لأنها رفضت أن تنافقه.

ووصف الناقد الفني المصري، أحمد سعد الدين، اختيار عرض «الملك لير» لافتتاح مهرجان أيام قرطاج المسرحية بأنه «اختيار رائع ومستحق».`,
    contentEn: `The Egyptian theatrical show "King Lear" strengthens its Arab presence after being chosen to open the 26th edition of the Carthage Theater Days Festival in Tunisia.

"King Lear" achieved remarkable success during its presentation in more than one season. It is based on the famous play by William Shakespeare, translated by Fatma Moussa, directed by Shady Sorour for the National Theater, starring Yahya El-Fakharani.

The story revolves around King Lear who decided to distribute his property among his three daughters, but deprived his youngest daughter of his blessings because she refused to flatter him.

Egyptian art critic Ahmed Saad El-Din described the selection of "King Lear" to open the Carthage Theater Days Festival as "a wonderful and deserved choice."`,
    links: [
      { url: 'https://drive.google.com/file/d/1mpho9ia2LuQC882pmtztR0PqnAnAdyFt/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1vVNU3hqiPKqqbV8BWEx6A2HsPgrikVFe/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
      { url: 'https://drive.google.com/file/d/1xFO_KeKdDX-s-OW2m33H7piS6mNe987I/view?usp=drivesdk', label: 'شاهد الآن', labelEn: 'Watch Now' },
    ],
  },
];

const Articles: React.FC = () => {
  const { language } = useLanguage();

  return (
    <Layout>
      <section className="py-20 min-h-screen bg-gradient-stage">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={language === 'ar' ? 'نقد ومقالات' : 'Criticism & Articles'} 
            subtitle={language === 'ar' ? 'قراءات نقدية وتحليلات فنية' : 'Critical readings and artistic analyses'} 
          />
          
          <div className="space-y-12 stagger-children">
            {articlesData.map((article) => (
              <article key={article.id} className="theater-card rounded-xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="lg:w-2/5 flex-shrink-0">
                    <img
                      src={article.image}
                      alt={language === 'ar' ? article.title : article.titleEn}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="lg:w-3/5 p-6 md:p-8">
                    <h2 className="font-amiri text-2xl md:text-3xl text-gold mb-6">
                      {language === 'ar' ? article.title : article.titleEn}
                    </h2>
                    
                    <p className="font-cairo text-foreground/80 leading-relaxed whitespace-pre-line mb-6 max-h-80 overflow-y-auto">
                      {language === 'ar' ? article.content : article.contentEn}
                    </p>
                    
                    {article.links && (
                      <div className="flex flex-wrap gap-3">
                        {article.links.map((link, index) => (
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
                    )}
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

export default Articles;
