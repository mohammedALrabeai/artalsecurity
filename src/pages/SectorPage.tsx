import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowLeft, Phone, MapPin, Clock, Users } from 'lucide-react';
import { SEO } from '../components/SEO';
import { QuoteButton } from '../components/QuoteButton';
import { useLanguage, useLocalePath } from '../context/LanguageContext';
import { SECTORS } from '../data/sectors';

const SITE = 'https://artalsecurity.com';

export function SectorPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const localePath = useLocalePath();
  const isAr = language === 'ar';

  const sector = SECTORS.find((s) => s.slug === slug);

  if (!sector) {
    return (
      <main className="min-h-screen flex items-center justify-center pt-28 pb-20 text-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {isAr ? 'الصفحة غير موجودة' : 'Page not found'}
          </h1>
          <Link to={localePath('/')} className="text-[#EFB621] underline">
            {isAr ? 'العودة للرئيسية' : 'Back to home'}
          </Link>
        </div>
      </main>
    );
  }

  const c = sector[language];
  const path = `/sectors/${sector.slug}`;
  const url = isAr ? `${SITE}/ar${path}` : `${SITE}${path}`;
  const others = SECTORS.filter((s) => s.slug !== sector.slug);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: c.name,
      name: c.heading,
      description: c.description,
      areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
      provider: {
        '@type': 'Organization',
        '@id': 'https://artalsecurity.com/#organization',
        name: 'Artal Unified Security Services Co.',
      },
      url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: isAr ? 'الرئيسية' : 'Home',
          item: isAr ? `${SITE}/ar` : `${SITE}/`,
        },
        { '@type': 'ListItem', position: 2, name: c.name, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: c.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  return (
    <>
      <SEO
        title={c.title}
        description={c.description}
        keywords={sector.keywords}
        path={path}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="bg-[#0B1F3A] text-white pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm text-gray-300 mb-6">
            <Link to={localePath('/')} className="hover:text-[#EFB621]">
              {isAr ? 'الرئيسية' : 'Home'}
            </Link>
            <span className="mx-2">/</span>
            <span>{c.name}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-9 h-9 text-[#EFB621]" />
            <span className="text-[#EFB621] font-semibold">
              {isAr ? 'ترخيص الهيئة العليا للأمن الصناعي رقم 361' : 'High Authority for Industrial Security — License No. 361'}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">{c.heading}</h1>
          <p className="text-gray-200 text-lg max-w-3xl leading-relaxed">{c.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuoteButton />
            <a
              href="tel:+966133449993"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-[#EFB621] hover:text-[#EFB621] text-white rounded-lg px-6 py-3 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {isAr ? 'اتصل بنا الآن' : 'Call us now'}
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-[#EFB621]/10 border-b border-[#EFB621]/30">
        <div className="max-w-5xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-[#0B1F3A]">
          <div className="flex flex-col items-center gap-1">
            <ShieldCheck className="w-6 h-6 text-[#EFB621]" />
            <span className="font-semibold">{isAr ? 'ترخيص رقم 361' : 'License No. 361'}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <MapPin className="w-6 h-6 text-[#EFB621]" />
            <span className="font-semibold">{isAr ? 'جميع مناطق المملكة' : 'All regions of KSA'}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Clock className="w-6 h-6 text-[#EFB621]" />
            <span className="font-semibold">{isAr ? 'عمليات 24/7' : '24/7 operations'}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Users className="w-6 h-6 text-[#EFB621]" />
            <span className="font-semibold">{isAr ? 'كوادر مدرّبة' : 'Trained personnel'}</span>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {/* What we secure */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">
            {isAr ? 'ما الذي نؤمّنه في هذا القطاع' : 'What we secure in this sector'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.sites.map((site) => (
              <div key={site} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                {site}
              </div>
            ))}
          </div>
        </section>

        {/* Why us */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">
            {isAr ? 'لماذا أرتال لهذا القطاع' : 'Why Artal for this sector'}
          </h2>
          <ul className="space-y-3">
            {c.points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#EFB621] shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">
            {isAr ? 'الأسئلة الشائعة' : 'Frequently asked questions'}
          </h2>
          <div className="space-y-3">
            {c.faqs.map((f) => (
              <details key={f.q} className="bg-white border border-gray-200 rounded-xl p-5">
                <summary className="font-semibold cursor-pointer text-[#0B1F3A]">{f.q}</summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0B1F3A] text-white rounded-2xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {isAr ? 'جاهزون لتأمين منشأتك' : 'Ready to secure your facility'}
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {isAr
              ? 'اطلب عرض سعر مخصّصاً وسيقوم فريقنا بزيارة موقعك وتقديم الحل الأمني المناسب.'
              : 'Request a tailored quote and our team will survey your site and propose the right security solution.'}
          </p>
          <div className="flex justify-center">
            <QuoteButton />
          </div>
        </section>

        {/* Other sectors */}
        <section>
          <h2 className="text-xl font-bold text-[#0B1F3A] mb-4">
            {isAr ? 'قطاعات أخرى نخدمها' : 'Other sectors we serve'}
          </h2>
          <div className="flex flex-wrap gap-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={localePath(`/sectors/${s.slug}`)}
                className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#EFB621] hover:text-[#EFB621] rounded-full px-5 py-2.5 transition-colors text-gray-700"
              >
                <ArrowLeft className={`w-4 h-4 ${isAr ? '' : 'rotate-180'}`} />
                {s[language].name}
              </Link>
            ))}
          </div>
          <Link
            to={localePath('/sectors')}
            className="inline-block mt-5 text-[#EFB621] font-semibold hover:underline"
          >
            {isAr ? 'عرض جميع القطاعات ←' : '→ View all sectors'}
          </Link>
        </section>
      </main>
    </>
  );
}
