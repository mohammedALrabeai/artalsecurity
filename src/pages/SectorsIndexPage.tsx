import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { QuoteButton } from '../components/QuoteButton';
import { useLanguage, useLocalePath } from '../context/LanguageContext';
import { SECTORS } from '../data/sectors';

const SITE = 'https://artalsecurity.com';

export function SectorsIndexPage() {
  const { language } = useLanguage();
  const localePath = useLocalePath();
  const isAr = language === 'ar';

  const url = isAr ? `${SITE}/ar/sectors` : `${SITE}/sectors`;
  const title = isAr
    ? 'قطاعات الحراسة الأمنية التي نخدمها | أرتال للحراسات الأمنية'
    : 'Security Sectors We Serve | Artal Security';
  const description = isAr
    ? 'حلول حراسة أمنية متخصصة لكل قطاع: المصانع والمنشآت الصناعية، المجمعات التجارية والسكنية، المشاريع والإنشاءات، والمنشآت الحكومية والحيوية في جميع مناطق المملكة.'
    : 'Specialized security guarding for every sector: industrial facilities, commercial & residential, construction projects, and government & vital facilities across Saudi Arabia.';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: isAr ? `${SITE}/ar` : `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: isAr ? 'القطاعات' : 'Sectors', item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: SECTORS.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s[language].name,
        url: isAr ? `${SITE}/ar/sectors/${s.slug}` : `${SITE}/sectors/${s.slug}`,
      })),
    },
  ];

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={isAr ? 'قطاعات الحراسة الأمنية, حراسة المنشآت, شركة حراسات أمنية للقطاعات' : 'security sectors, facility security, guarding services'}
        path="/sectors"
        jsonLd={jsonLd}
      />

      <section className="bg-[#0B1F3A] text-white pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-9 h-9 text-[#EFB621]" />
            <span className="text-[#EFB621] font-semibold">
              {isAr ? 'ترخيص الهيئة العليا للأمن الصناعي رقم 361' : 'High Authority for Industrial Security — License No. 361'}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">
            {isAr ? 'قطاعات نخدمها بحلول أمنية متخصصة' : 'Sectors We Serve With Specialized Security'}
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl leading-relaxed">{description}</p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 gap-6">
          {SECTORS.map((s) => {
            const c = s[language];
            return (
              <Link
                key={s.slug}
                to={localePath(`/sectors/${s.slug}`)}
                className="group bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:border-[#EFB621] transition-all"
              >
                <h2 className="text-xl font-bold text-[#0B1F3A] mb-2 group-hover:text-[#EFB621] transition-colors">
                  {c.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{c.sites.slice(0, 3).join(' · ')}</p>
                <span className="inline-flex items-center gap-2 text-[#EFB621] font-semibold text-sm">
                  {isAr ? 'اعرف المزيد' : 'Learn more'}
                  <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="bg-[#0B1F3A] text-white rounded-2xl p-10 text-center mt-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {isAr ? 'لم تجد قطاعك؟ نخدم جميع المنشآت' : 'Don’t see your sector? We secure all facilities'}
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {isAr
              ? 'نغطّي جميع مناطق المملكة — اطلب عرض سعر وسنقدّم الحل الأمني المناسب لمنشأتك.'
              : 'We cover all regions of the Kingdom — request a quote and we’ll propose the right solution for your facility.'}
          </p>
          <div className="flex justify-center">
            <QuoteButton />
          </div>
        </div>
      </main>
    </>
  );
}
