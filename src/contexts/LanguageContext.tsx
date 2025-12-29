import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.news': 'أخبار وتقارير',
    'nav.interviews': 'حوارات النجوم',
    'nav.festivals': 'المهرجانات والفعاليات',
    'nav.backstage': 'الكواليس',
    'nav.worldBox': 'صندوق الدنيا',
    'nav.memory': 'ذاكرة المسرح',
    'nav.articles': 'نقد ومقالات',
    'nav.aboutUs': 'من نحن',
    
    // Hero
    'hero.welcome': 'مرحباً بكم في تياترو',
    'hero.subtitle': 'نافذتكم على عالم المسرح العربي',
    
    // Common
    'common.watchNow': 'شاهد الآن',
    'common.readMore': 'اقرأ المزيد',
    'common.sceneFromPlay': 'مشهدٌ من قلبِ المسرحية',
    
    // Plays
    'play.kingLear': 'الملك لير',
    'play.kingLear.desc': 'مأساة شكسبيرية خالدة تتناول صراع السلطة والغرور والخيانة، حيث يقرر الملك تقسيم مملكته بين بناته، فيقوده سوء التقدير إلى السقوط، ويكشف أن الحب الحقيقي لا يُقاس بالكلمات بل بالمواقف والوفاء.',
    
    'play.carmen': 'كارمن',
    'play.carmen.desc': 'مسرحية كارمن تحكي قصة فتاة حرة تُدعى كارمن، تقع في حب الجندي دون خوسيه، لكن غيرته الشديدة تقودهما إلى نهاية مأساوية، وتُبرز المسرحية صراع الحب مع الحرية في إطار درامي مؤثر.',
    
    'play.womensPrison': 'سجن النسا',
    'play.womensPrison.desc': 'مسرحية اجتماعية جريئة تكشف عالم السجن النسائي، وتسلّط الضوء على حكايات إنسانية لنساء قادتهن الظروف القاسية والظلم الاجتماعي إلى خلف القضبان، في طرح عميق لقضايا القهر، والعدالة، والبحث عن الخلاص.',

    // World Box Section
    'worldBox.title': 'صندوق الدنيا',
    'worldBox.subtitle': 'أعمال مسرحية خالدة',

    // Memory Section
    'memory.title': 'ذاكرة المسرح',
    'memory.subtitle': 'أساطير خالدة في تاريخ المسرح العربي',

    // News Section
    'news.title': 'أخبار وتقارير',
    'news.subtitle': 'آخر أخبار المسرح المصري والعربي',

    // Festivals Section
    'festivals.title': 'المهرجانات والفعاليات',
    'festivals.subtitle': 'أبرز الفعاليات المسرحية',

    // Backstage Section
    'backstage.title': 'الكواليس',
    'backstage.subtitle': 'خلف ستار المسرح',

    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.teatro': 'تياترو',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.news': 'News & Reports',
    'nav.interviews': 'Star Interviews',
    'nav.festivals': 'Festivals & Events',
    'nav.backstage': 'Backstage',
    'nav.worldBox': 'World Box',
    'nav.memory': 'Theater Memory',
    'nav.articles': 'Criticism & Articles',
    'nav.aboutUs': 'About Us',
    
    // Hero
    'hero.welcome': 'Welcome to Teatro',
    'hero.subtitle': 'Your Window to Arab Theater',
    
    // Common
    'common.watchNow': 'Watch Now',
    'common.readMore': 'Read More',
    'common.sceneFromPlay': 'A Scene from the Heart of the Play',
    
    // Plays
    'play.kingLear': 'King Lear',
    'play.kingLear.desc': 'A timeless Shakespearean tragedy about the struggle for power, pride, and betrayal. The king decides to divide his kingdom among his daughters, leading him to downfall through misjudgment, revealing that true love is measured not by words but by loyalty and actions.',
    
    'play.carmen': 'Carmen',
    'play.carmen.desc': 'The play Carmen tells the story of a free-spirited girl named Carmen who falls in love with soldier Don José, but his intense jealousy leads them to a tragic end, highlighting the conflict between love and freedom in a moving dramatic framework.',
    
    'play.womensPrison': "Women's Prison",
    'play.womensPrison.desc': 'A bold social play that reveals the world of women\'s prison, shedding light on human stories of women led behind bars by harsh circumstances and social injustice, in a deep exploration of oppression, justice, and the search for salvation.',

    // World Box Section
    'worldBox.title': 'World Box',
    'worldBox.subtitle': 'Timeless Theatrical Works',

    // Memory Section
    'memory.title': 'Theater Memory',
    'memory.subtitle': 'Immortal Legends of Arab Theater History',

    // News Section
    'news.title': 'News & Reports',
    'news.subtitle': 'Latest Egyptian and Arab Theater News',

    // Festivals Section
    'festivals.title': 'Festivals & Events',
    'festivals.subtitle': 'Major Theater Events',

    // Backstage Section
    'backstage.title': 'Backstage',
    'backstage.subtitle': 'Behind the Theater Curtain',

    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.teatro': 'Teatro',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
