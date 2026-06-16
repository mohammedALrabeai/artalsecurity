import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage, useLocalePath } from '../context/LanguageContext';
import { ARTICLES_SORTED } from '../data/articles';

const SITE = 'https://artalsecurity.com';

export function BlogIndexPage() {
  const { language } = useLanguage();
  const localePath = useLocalePath();
  const isAr = language === 'ar';

  const title = isAr ? 'مدوّنة أرتال — مقالات في الأمن والحراسة | أرتال للحراسات الأمنية' : 'Artal Blog — Security & Guarding Insights | Artal Security';
  const description = isAr
    ? 'مقالات ودلائل متخصّصة في الحراسات الأمنية للمنشآت الصناعية والتجارية والمشاريع والمنشآت الحكومية في السعودية — من شركة أرتال (ترخيص 361).'
    : 'Expert articles and guides on security guarding for industrial, commercial, construction and government facilities in Saudi Arabia — by Artal (License 361).';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      '@id': `${SITE}/blog#blog`,
      name: isAr ? 'مدوّنة أرتال للحراسات الأمنية' : 'Artal Security Blog',
      publisher: { '@id': `${SITE}/#organization` },
      blogPost: ARTICLES_SORTED.map((a) => ({
        '@type': 'BlogPosting',
        headline: a[language].title,
        datePublished: a.date,
        url: isAr ? `${SITE}/ar/blog/${a.slug}` : `${SITE}/blog/${a.slug}`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: isAr ? `${SITE}/ar` : `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: isAr ? 'المدوّنة' : 'Blog', item: isAr ? `${SITE}/ar/blog` : `${SITE}/blog` },
      ],
    },
  ];

  return (
    <>
      <SEO title={title} description={description} path="/blog" jsonLd={jsonLd} />

      <section className="bg-[#0B1F3A] text-white pt-32 pb-14">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{isAr ? 'مدوّنة أرتال' : 'Artal Blog'}</h1>
          <p className="text-gray-200 text-lg max-w-2xl">{isAr ? 'دلائل ومقالات متخصّصة في الحراسات الأمنية للمنشآت في المملكة.' : 'Expert guides and insights on facility security guarding in Saudi Arabia.'}</p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-14">
        {ARTICLES_SORTED.length === 0 ? (
          <p className="text-gray-500 text-center">{isAr ? 'مقالات جديدة قريباً.' : 'New articles coming soon.'}</p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-6">
            {ARTICLES_SORTED.map((a) => (
              <Link key={a.slug} to={localePath(`/blog/${a.slug}`)} className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-[#EFB621] transition-all flex flex-col">
                <span className="inline-block w-fit bg-[#EFB621]/15 text-[#0B1F3A] text-xs font-bold px-3 py-1 rounded-full mb-3">{a.category[language]}</span>
                <h2 className="text-lg font-bold text-[#0B1F3A] mb-2 group-hover:text-[#EFB621] transition-colors">{a[language].title}</h2>
                <p className="text-gray-600 text-sm mb-4 flex-1">{a[language].excerpt}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-gray-400"><Calendar className="w-4 h-4" /><time dateTime={a.date}>{a.date}</time></span>
                  <span className="flex items-center gap-1 text-[#EFB621] font-semibold">{isAr ? 'اقرأ' : 'Read'}<ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} /></span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
