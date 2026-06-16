import { Head } from 'vite-react-ssg';
import { useLanguage } from '../context/LanguageContext';

const SITE = 'https://artalsecurity.com';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  /** Language-neutral route path, e.g. '/' or '/sectors/industrial'. Canonical
   *  + hreflang alternates are derived from it automatically. */
  path?: string;
  /** JSON-LD structured data — single object or array of objects */
  jsonLd?: object | object[];
}

/**
 * SEO component — renders real <head> tags into the prerendered HTML via
 * vite-react-ssg's <Head> (react-helmet-async). Works for SSG + client.
 */
export function SEO({
  title,
  description,
  keywords,
  ogImage = 'https://artalsecurity.com/og-image.jpg',
  path = '/',
  jsonLd,
}: SEOProps) {
  const { language } = useLanguage();
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  const clean = path.startsWith('/') ? path : `/${path}`;
  const enUrl = `${SITE}${clean}`;
  const arUrl = clean === '/' ? `${SITE}/ar` : `${SITE}/ar${clean}`;
  const canonical = language === 'ar' ? arUrl : enUrl;

  return (
    <Head>
      <html lang={language} dir={dir} />

      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {title && <meta name="twitter:title" content={title} />}

      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      {description && <meta name="twitter:description" content={description} />}

      {keywords && <meta name="keywords" content={keywords} />}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Artal Unified Security Services" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage} />

      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="ar" href={arUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Head>
  );
}
