import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutUs: React.FC = () => {
  const { language } = useLanguage();

  return (
    <Layout>
      <section className="py-20 min-h-screen bg-gradient-stage">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={language === 'ar' ? 'من نحن' : 'About Us'} 
            subtitle={language === 'ar' ? 'تعرف علينا' : 'Get to know us'} 
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="theater-card rounded-xl overflow-hidden p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                {/* Decorative Theater Mask */}
                <div className="text-6xl mb-8">🎭</div>
                
                <h2 className="font-amiri text-3xl md:text-4xl text-gold mb-8">
                  {language === 'ar' ? 'من نحن؟' : 'Who Are We?'}
                </h2>
                
                <p className="font-cairo text-lg md:text-xl text-foreground/90 leading-relaxed">
                  {language === 'ar' 
                    ? 'نحن مشروع تخرج إعلامي يسلّط الضوء على المسرح بوصفه أحد أهم أشكال التعبير الفني والثقافي، ونوثّق من خلاله العروض المسرحية، صُنّاعها، وتاريخها، لنقدّم محتوى يعكس قيمة المسرح ودوره في تشكيل الوعي المجتمعي.'
                    : 'We are a media graduation project that sheds light on theater as one of the most important forms of artistic and cultural expression. Through this project, we document theatrical performances, their creators, and their history, to provide content that reflects the value of theater and its role in shaping social awareness.'
                  }
                </p>

                {/* Decorative Divider */}
                <div className="w-48 h-px bg-gradient-to-r from-transparent via-gold to-transparent my-10" />

                {/* Additional Info */}
                <div className="grid md:grid-cols-3 gap-8 w-full mt-4">
                  <div className="text-center p-6 rounded-lg bg-card/50 border border-gold/10">
                    <div className="text-3xl mb-3">📜</div>
                    <h3 className="font-amiri text-gold text-xl mb-2">
                      {language === 'ar' ? 'التوثيق' : 'Documentation'}
                    </h3>
                    <p className="font-cairo text-sm text-muted-foreground">
                      {language === 'ar' 
                        ? 'نوثق العروض المسرحية وتاريخها'
                        : 'We document theatrical performances and their history'
                      }
                    </p>
                  </div>
                  
                  <div className="text-center p-6 rounded-lg bg-card/50 border border-gold/10">
                    <div className="text-3xl mb-3">🎬</div>
                    <h3 className="font-amiri text-gold text-xl mb-2">
                      {language === 'ar' ? 'صناع الفن' : 'Art Makers'}
                    </h3>
                    <p className="font-cairo text-sm text-muted-foreground">
                      {language === 'ar' 
                        ? 'نسلط الضوء على صناع المسرح'
                        : 'We highlight theater makers'
                      }
                    </p>
                  </div>
                  
                  <div className="text-center p-6 rounded-lg bg-card/50 border border-gold/10">
                    <div className="text-3xl mb-3">💡</div>
                    <h3 className="font-amiri text-gold text-xl mb-2">
                      {language === 'ar' ? 'الوعي المجتمعي' : 'Social Awareness'}
                    </h3>
                    <p className="font-cairo text-sm text-muted-foreground">
                      {language === 'ar' 
                        ? 'نعكس دور المسرح في تشكيل الوعي'
                        : 'We reflect the role of theater in shaping awareness'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
