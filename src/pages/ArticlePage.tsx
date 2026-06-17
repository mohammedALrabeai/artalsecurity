import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Markdown } from '../components/Markdown';
import { QuoteButton } from '../components/QuoteButton';
import { useLanguage, useLocalePath } from '../context/LanguageContext';
import { ARTICLES, ARTICLES_SORTED } from '../data/articles';
import { SECTORS } from '../data/sectors';

const SITE = 'https://artalsecurity.com';

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const localePath = useLocalePath();
  const isAr = language === 'ar';

  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <main className="min-h-screen flex items-center justify-center pt-28 pb-20 text-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{isAr ? 'المقال غير موجود' : 'Article not found'}</h1>
          <Link to={localePath('/blog')} className="text-[#EFB621] underline">{isAr ? 'العودة للمدوّنة' : 'Back to blog'}</Link>
        </div>
      </main>
    );
  }

  const c = article[language];
  const path = `/blog/${article.slug}`;
  const url = isAr ? `${SITE}/ar${path}` : `${SITE}${path}`;
  const related = ARTICLES_SORTED.filter((a) => a.slug !== article.slug).slice(0, 3);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: c.title,
      description: c.description,
      datePublished: article.date,
      dateModified: article.date,
      inLanguage: isAr ? 'ar' : 'en',
      mainEntityOfPage: url,
      author: { '@id': `${SITE}/#organization` },
      publisher: { '@id': `${SITE}/#organization` },
      url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: isAr ? `${SITE}/ar` : `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: isAr ? 'المدوّنة' : 'Blog', item: isAr ? `${SITE}/ar/blog` : `${SITE}/blog` },
        { '@type': 'ListItem', position: 3, name: c.title, item: url },
      ],
    },
  ];

  return (
    <>
      <SEO title={`${c.title} | ${isAr ? 'مدوّنة أرتال' : 'Artal Blog'}`} description={c.description} keywords={article.keywords} path={path} jsonLd={jsonLd} />

      <section className="bg-[#0B1F3A] text-white pt-32 pb-14">
        <div className="max-w-3xl mx-auto px-6">
          <nav className="text-sm text-gray-300 mb-6">
            <Link to={localePath('/')} className="hover:text-[#EFB621]">{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span className="mx-2">/</span>
            <Link to={localePath('/blog')} className="hover:text-[#EFB621]">{isAr ? 'المدوّنة' : 'Blog'}</Link>
          </nav>
          <span className="inline-block bg-[#EFB621] text-[#0B1F3A] text-xs font-bold px-3 py-1 rounded-full mb-4">
            {article.category[language]}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">{c.title}</h1>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Calendar className="w-4 h-4" />
            <time dateTime={article.date}>{article.date}</time>
          </div>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6 py-14">
        <article dir={isAr ? 'rtl' : 'ltr'}>
          <Markdown>{c.body}</Markdown>
        </article>

        {/* CTA */}
        <div className="bg-[#0B1F3A] text-white rounded-2xl p-8 text-center mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-3">{isAr ? 'تبحث عن شركة حراسات أمنية موثوقة؟' : 'Looking for a reliable security guarding company?'}</h2>
          <p className="text-gray-300 mb-5">{isAr ? 'أرتال — مرخّصة برقم 361 وتخدم كل مناطق المملكة.' : 'Artal — licensed (No. 361) and serving all regions of Saudi Arabia.'}</p>
          <div className="flex justify-center"><QuoteButton /></div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl font-bold text-[#0B1F3A] mb-5">{isAr ? 'مقالات ذات صلة' : 'Related articles'}</h2>
            <div className="space-y-3">
              {related.map((a) => (
                <Link key={a.slug} to={localePath(`/blog/${a.slug}`)} className="flex items-center justify-between gap-3 bg-white border border-gray-200 hover:border-[#EFB621] rounded-xl p-4 transition-colors group">
                  <span className="font-semibold text-[#0B1F3A] group-hover:text-[#EFB621] transition-colors">{a[language].title}</span>
                  <ArrowLeft className={`w-5 h-5 text-[#EFB621] shrink-0 ${isAr ? '' : 'rotate-180'}`} />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* روابط سياقية لصفحات القطاعات والخدمات (ربط داخلي يقوّي الصفحات التجارية) */}
        <section className="mt-14">
          <h2 className="text-xl font-bold text-[#0B1F3A] mb-5">{isAr ? 'خدماتنا وقطاعاتنا' : 'Our services & sectors'}</h2>
          <div className="flex flex-wrap gap-3">
            {SECTORS.map((s) => (
              <Link
                key={s.slug}
                to={localePath(`/sectors/${s.slug}`)}
                className="text-sm bg-white border border-gray-200 hover:border-[#EFB621] hover:text-[#EFB621] rounded-full px-4 py-2 transition-colors text-gray-700"
              >
                {s[language].name}
              </Link>
            ))}
            <Link
              to={localePath('/services')}
              className="text-sm bg-[#0B1F3A] text-white rounded-full px-4 py-2 hover:opacity-90 transition-opacity"
            >
              {isAr ? 'كل الخدمات' : 'All services'}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
