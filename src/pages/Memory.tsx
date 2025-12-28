import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { useLanguage } from '@/contexts/LanguageContext';

const legendsData = [
  { id: 'samir-ghanem', name: 'سمير غانم', nameEn: 'Samir Ghanem', title: 'نجم الكوميديا المصرية الجماهيرية', titleEn: 'Star of Egyptian Popular Comedy' },
  { id: 'mohamed-sobhi', name: 'محمد صبحي', nameEn: 'Mohamed Sobhi', title: 'رائد المسرح السياسي والفكاهي', titleEn: 'Pioneer of Political and Comedic Theater' },
  { id: 'adel-imam', name: 'عادل إمام', nameEn: 'Adel Imam', title: 'الزعيم وملك الكوميديا السياسية', titleEn: 'The Leader and King of Political Comedy' },
  { id: 'fatma-rushdi', name: 'فاطمة رشدي', nameEn: 'Fatma Rushdi', title: 'سارة برنار الشرق', titleEn: 'Sarah Bernhardt of the East' },
  { id: 'shwikar', name: 'شويكار', nameEn: 'Shwikar', title: 'نجمة الكوميديا والدراما المسرحية', titleEn: 'Star of Comedy and Theatrical Drama' },
  { id: 'fouad-mohandes', name: 'فؤاد المهندس', nameEn: 'Fouad El-Mohandes', title: 'أيقونة الكوميديا المصرية', titleEn: 'Icon of Egyptian Comedy' },
  { id: 'youssef-wahbi', name: 'يوسف وهبي', nameEn: 'Youssef Wahbi', title: 'عميد المسرح العربي', titleEn: 'Dean of Arab Theater' },
  { id: 'ali-kassar', name: 'علي الكسار', nameEn: 'Ali El-Kassar', title: 'ملك الكوميديا الشعبية', titleEn: 'King of Popular Comedy' },
  { id: 'naguib-rihani', name: 'نجيب الريحاني', nameEn: 'Naguib El-Rihani', title: 'ملك الكوميديا', titleEn: 'King of Comedy' },
  { id: 'aziz-eid', name: 'عزيز عيد', nameEn: 'Aziz Eid', title: 'رائد المسرح المصري', titleEn: 'Pioneer of Egyptian Theater' },
  { id: 'yaqub-sanu', name: 'يعقوب صنوع', nameEn: 'Yaqub Sanu', title: 'أبو المسرح العربي', titleEn: 'Father of Arab Theater' },
];

const Memory: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <section className="py-20 min-h-screen bg-gradient-stage">
        <div className="container mx-auto px-4">
          <SectionTitle title={t('memory.title')} subtitle={t('memory.subtitle')} />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 stagger-children">
            {legendsData.map((legend) => (
              <div key={legend.id} className="theater-card rounded-xl p-6 text-center spotlight">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold/20 to-primary/20 flex items-center justify-center">
                  <span className="font-amiri text-3xl text-gold">🎭</span>
                </div>
                <h3 className="font-amiri text-xl text-gold mb-2">
                  {language === 'ar' ? legend.name : legend.nameEn}
                </h3>
                <p className="font-cairo text-sm text-muted-foreground">
                  {language === 'ar' ? legend.title : legend.titleEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Memory;
