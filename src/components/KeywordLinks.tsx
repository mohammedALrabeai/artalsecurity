import { Link } from 'react-router-dom';
import { useLanguage, useLocalePath } from '../context/LanguageContext';

/**
 * سحابة كلمات مفتاحية بنية العميل (B2B) — روابط داخلية حقيقية لصفحات القطاعات
 * والرئيسية. تظهر في تذييل كل الصفحات لتقوية الفهرسة والربط الداخلي.
 * كل كلمة تقود لأكثر صفحة صلة بها (لا حشو روابط فارغة).
 */
const KEYWORDS: { ar: string; en: string; path: string }[] = [
  // عامة / العلامة
  { ar: 'شركة حراسات أمنية', en: 'Security guarding company', path: '/' },
  { ar: 'شركة أمن وحراسة', en: 'Security & guarding company', path: '/' },
  { ar: 'أفضل شركة حراسات أمنية في السعودية', en: 'Best security company in Saudi Arabia', path: '/' },
  { ar: 'شركة حراسات أمنية معتمدة', en: 'Licensed security company', path: '/' },
  { ar: 'عقود حراسات أمنية', en: 'Security guarding contracts', path: '/' },
  { ar: 'خدمات أمن وسلامة', en: 'Security & safety services', path: '/' },
  { ar: 'شركة حراسات أمنية مرخصة', en: 'Authorized security firm', path: '/' },

  // صناعي
  { ar: 'حراسات أمنية صناعية', en: 'Industrial security guarding', path: '/sectors/industrial' },
  { ar: 'حراسة مصانع', en: 'Factory security', path: '/sectors/industrial' },
  { ar: 'حراسة مستودعات', en: 'Warehouse security', path: '/sectors/industrial' },
  { ar: 'أمن المناطق الصناعية', en: 'Industrial zone security', path: '/sectors/industrial' },
  { ar: 'شركة أمن صناعي', en: 'Industrial security firm', path: '/sectors/industrial' },

  // تجاري وسكني
  { ar: 'حراسة مولات ومجمعات تجارية', en: 'Mall & retail security', path: '/sectors/commercial-residential' },
  { ar: 'أمن سكني', en: 'Residential security', path: '/sectors/commercial-residential' },
  { ar: 'حراسة كمباوندات', en: 'Compound security', path: '/sectors/commercial-residential' },
  { ar: 'حراسة أبراج ومكاتب', en: 'Tower & office security', path: '/sectors/commercial-residential' },

  // مشاريع وإنشاءات
  { ar: 'حراسة مواقع إنشائية', en: 'Construction site security', path: '/sectors/construction-projects' },
  { ar: 'أمن المشاريع الكبرى', en: 'Project security', path: '/sectors/construction-projects' },
  { ar: 'حراسة مشاريع المقاولات', en: 'Contractor site security', path: '/sectors/construction-projects' },

  // حكومي وحيوي
  { ar: 'حراسة منشآت حكومية', en: 'Government facility security', path: '/sectors/government-vital' },
  { ar: 'أمن المنشآت النفطية', en: 'Oil & gas facility security', path: '/sectors/government-vital' },
  { ar: 'حراسة مستشفيات', en: 'Hospital security', path: '/sectors/government-vital' },
  { ar: 'حراسة منشآت تعليمية', en: 'School & university security', path: '/sectors/government-vital' },
  { ar: 'أمن المنشآت الحيوية', en: 'Vital facility security', path: '/sectors/government-vital' },

  // مدن — تقود لصفحات المدن المخصّصة
  { ar: 'شركة حراسات أمنية في الرياض', en: 'Security company in Riyadh', path: '/locations/riyadh' },
  { ar: 'شركة حراسات أمنية في جدة', en: 'Security company in Jeddah', path: '/locations/jeddah' },
  { ar: 'شركة حراسات أمنية في الدمام', en: 'Security company in Dammam', path: '/locations/dammam' },
  { ar: 'شركة حراسات أمنية في الجبيل', en: 'Security company in Jubail', path: '/locations/jubail' },
  { ar: 'شركة حراسات أمنية في مكة', en: 'Security company in Makkah', path: '/locations/makkah' },
  { ar: 'شركة حراسات أمنية في جازان', en: 'Security company in Jazan', path: '/locations/jazan' },
];

export function KeywordLinks() {
  const { language } = useLanguage();
  const localePath = useLocalePath();
  const isAr = language === 'ar';

  return (
    <section className="pt-10 mt-10 border-t border-gray-800" aria-label={isAr ? 'روابط خدمات الحراسة' : 'Security service links'}>
      <h2 className="text-sm font-semibold text-gray-300 mb-4">
        {isAr ? 'خدمات الحراسة الأمنية — روابط سريعة' : 'Security Guarding Services — Quick Links'}
      </h2>
      <div className="flex flex-wrap gap-2">
        {KEYWORDS.map((k, i) => (
          <Link
            key={i}
            to={localePath(k.path)}
            className="text-xs text-gray-400 bg-white/5 hover:bg-[#EFB621] hover:text-gray-900 rounded-full px-3 py-1.5 transition-colors"
          >
            {isAr ? k.ar : k.en}
          </Link>
        ))}
      </div>
    </section>
  );
}
