import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Clock, Users, Phone, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/SEO';
import { QuoteButton } from '../components/QuoteButton';
import { useLanguage, useLocalePath } from '../context/LanguageContext';
import { CITIES } from '../data/cities';
import { SECTORS } from '../data/sectors';

const SITE = 'https://artalsecurity.com';

export function LocationPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const localePath = useLocalePath();
  const isAr = language === 'ar';

  const city = CITIES.find((c) => c.slug === slug);

  if (!city) {
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

  const c = city[language];
  const path = `/locations/${city.slug}`;
  const url = isAr ? `${SITE}/ar${path}` : `${SITE}${path}`;
  const others = CITIES.filter((x) => x.slug !== city.slug);

  const heading = isAr ? `شركة حراسات أمنية في ${c.name}` : `Security Guarding Company in ${c.name}`;
  const intro = isAr
    ? `توفّر شركة أرتال الموحدة للحراسات الأمنية — المرخّصة من الهيئة العليا للأمن الصناعي (رقم 361) — خدمات حراسة أمنية احترافية في ${c.name} ضمن ${c.region}. ${c.blurb} نخدم المنشآت الصناعية والتجارية والسكنية والحكومية بكوادر مدرّبة وعمليات على مدار الساعة.`
    : `Artal Unified Security Services — licensed by the High Authority for Industrial Security (No. 361) — provides professional security guarding in ${c.name}, ${c.region}. ${c.blurb} We secure industrial, commercial, residential and government facilities with trained personnel and 24/7 operations.`;

  const faqs = isAr
    ? [
        { q: `هل تقدّمون خدمات الحراسة الأمنية في ${c.name}؟`, a: `نعم، توفّر أرتال حراسة أمنية في ${c.name} وجميع مناطق المملكة، بكوادر مدرّبة وترخيص رقم 361.` },
        { q: `ما القطاعات التي تخدمونها في ${c.name}؟`, a: 'نخدم المنشآت الصناعية والمصانع، المجمعات التجارية والسكنية، المشاريع والإنشاءات، والمنشآت الحكومية والحيوية.' },
        { q: `كيف أطلب عرض سعر لحراسة منشأة في ${c.name}؟`, a: 'تواصل معنا عبر الموقع أو الهاتف، وسيقوم فريقنا بزيارة الموقع وتقديم عرض مخصّص.' },
      ]
    : [
        { q: `Do you provide security guarding in ${c.name}?`, a: `Yes, Artal provides security guarding in ${c.name} and all regions of Saudi Arabia, with trained personnel and License No. 361.` },
        { q: `Which sectors do you serve in ${c.name}?`, a: 'We serve industrial facilities and factories, commercial and residential complexes, construction projects, and government and vital facilities.' },
        { q: `How do I request a quote for a facility in ${c.name}?`, a: 'Contact us via the website or phone; our team will survey the site and provide a tailored proposal.' },
      ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: isAr ? 'حراسات أمنية' : 'Security guarding',
      name: heading,
      description: intro,
      areaServed: { '@type': 'City', name: c.name },
      provider: {
        '@type': 'Organization',
        '@id': 'https://artalsecurity.com/#organization',
        name: 'Artal Unified Security Services Co.',
        telephone: '+966133449993',
      },
      url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: isAr ? `${SITE}/ar` : `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: c.name, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];

  return (
    <>
      <SEO
        title={`${heading} | ${isAr ? 'أرتال للحراسات الأمنية' : 'Artal Security'}`}
        description={intro.slice(0, 160)}
        keywords={isAr ? `شركة حراسات أمنية في ${c.name}, حراسة منشآت ${c.name}, أمن وحراسة ${c.name}` : `security company ${c.name}, guarding ${c.name}, facility security ${c.name}`}
        path={path}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="bg-[#0B1F3A] text-white pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm text-gray-300 mb-6">
            <Link to={localePath('/')} className="hover:text-[#EFB621]">{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span className="mx-2">/</span>
            <span>{c.name}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-9 h-9 text-[#EFB621]" />
            <span className="text-[#EFB621] font-semibold">
              {isAr ? 'ترخيص رقم 361 — الهيئة العليا للأمن الصناعي' : 'License No. 361 — High Authority for Industrial Security'}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">{heading}</h1>
          <p className="text-gray-200 text-lg max-w-3xl leading-relaxed">{intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuoteButton />
            <a href="tel:+966133449993" className="inline-flex items-center gap-2 border border-white/30 hover:border-[#EFB621] hover:text-[#EFB621] text-white rounded-lg px-6 py-3 transition-colors">
              <Phone className="w-5 h-5" />
              {isAr ? 'اتصل بنا الآن' : 'Call us now'}
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-[#EFB621]/10 border-b border-[#EFB621]/30">
        <div className="max-w-5xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-[#0B1F3A]">
          <div className="flex flex-col items-center gap-1"><ShieldCheck className="w-6 h-6 text-[#EFB621]" /><span className="font-semibold">{isAr ? 'ترخيص رقم 361' : 'License No. 361'}</span></div>
          <div className="flex flex-col items-center gap-1"><MapPin className="w-6 h-6 text-[#EFB621]" /><span className="font-semibold">{c.name}{isAr ? ' وكل المملكة' : ' & all KSA'}</span></div>
          <div className="flex flex-col items-center gap-1"><Clock className="w-6 h-6 text-[#EFB621]" /><span className="font-semibold">{isAr ? 'عمليات 24/7' : '24/7 operations'}</span></div>
          <div className="flex flex-col items-center gap-1"><Users className="w-6 h-6 text-[#EFB621]" /><span className="font-semibold">{isAr ? 'كوادر مدرّبة' : 'Trained personnel'}</span></div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {/* Sectors in this city */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">
            {isAr ? `خدمات الحراسة الأمنية في ${c.name}` : `Security services in ${c.name}`}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {SECTORS.map((s) => (
              <Link key={s.slug} to={localePath(`/sectors/${s.slug}`)} className="group bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-[#EFB621] transition-colors">
                <span className="font-semibold text-[#0B1F3A] group-hover:text-[#EFB621] transition-colors">{s[language].name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">{isAr ? 'الأسئلة الشائعة' : 'Frequently asked questions'}</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white border border-gray-200 rounded-xl p-5">
                <summary className="font-semibold cursor-pointer text-[#0B1F3A]">{f.q}</summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0B1F3A] text-white rounded-2xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{isAr ? `جاهزون لتأمين منشأتك في ${c.name}` : `Ready to secure your facility in ${c.name}`}</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{isAr ? 'اطلب عرض سعر وسيقوم فريقنا بزيارة موقعك وتقديم الحل الأمني المناسب.' : 'Request a quote and our team will survey your site and propose the right security solution.'}</p>
          <div className="flex justify-center"><QuoteButton /></div>
        </section>

        {/* Other cities */}
        <section>
          <h2 className="text-xl font-bold text-[#0B1F3A] mb-4">{isAr ? 'مدن أخرى نخدمها' : 'Other cities we serve'}</h2>
          <div className="flex flex-wrap gap-3">
            {others.map((x) => (
              <Link key={x.slug} to={localePath(`/locations/${x.slug}`)} className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#EFB621] hover:text-[#EFB621] rounded-full px-5 py-2.5 transition-colors text-gray-700">
                <ArrowLeft className={`w-4 h-4 ${isAr ? '' : 'rotate-180'}`} />
                {x[language].name}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
