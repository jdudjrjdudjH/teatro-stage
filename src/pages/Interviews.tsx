import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { useLanguage } from '@/contexts/LanguageContext';

const Interviews: React.FC = () => {
  const { language } = useLanguage();
  return (
    <Layout>
      <section className="py-20 min-h-screen bg-gradient-stage flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-amiri text-4xl text-gold mb-4">{language === 'ar' ? 'حوارات النجوم' : 'Star Interviews'}</h1>
          <p className="font-cairo text-muted-foreground">{language === 'ar' ? 'قريباً...' : 'Coming Soon...'}</p>
        </div>
      </section>
    </Layout>
  );
};

export default Interviews;
