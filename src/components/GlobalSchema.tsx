import { Head } from 'vite-react-ssg';

const SITE = 'https://artalsecurity.com';

/**
 * Site-wide structured data injected on EVERY page (via Layout) to build a
 * strong, consistent entity for Google's knowledge panel + AI overviews:
 *  - Organization / SecurityService / LocalBusiness (NAP, license, sameAs, 24/7)
 *  - WebSite (publisher reference)
 * Page-specific schema (Service / FAQ / Breadcrumb) stays on each page.
 */
const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'SecurityService', 'LocalBusiness'],
  '@id': `${SITE}/#organization`,
  name: 'Artal Unified Security Services Co.',
  alternateName: 'شركة أرتال الموحدة للحراسات الأمنية',
  url: SITE,
  logo: `${SITE}/images/logo.png`,
  image: `${SITE}/images/artal_security3.jpg`,
  slogan: 'Protecting lives, property and facilities across Saudi Arabia',
  description:
    'Licensed private security guarding company in Saudi Arabia (Ministry of Interior — High Authority for Industrial Security, License No. 361), serving industrial, commercial, construction and government facilities.',
  telephone: '+966133449993',
  email: 'info@artalgroup.net',
  contactPoint: [
    { '@type': 'ContactPoint', telephone: '+966581797003', contactType: 'sales', areaServed: 'SA', availableLanguage: ['ar', 'en'] },
    { '@type': 'ContactPoint', telephone: '+966595639648', contactType: 'customer service', areaServed: 'SA', availableLanguage: ['ar', 'en'] },
    { '@type': 'ContactPoint', telephone: '+966593222287', contactType: 'technical support', areaServed: 'SA', availableLanguage: ['ar', 'en'] },
  ],
  address: {
    '@type': 'PostalAddress',
    postOfficeBoxNumber: '1218',
    addressLocality: 'Jubail',
    postalCode: '31951',
    addressRegion: 'Eastern Province',
    addressCountry: 'SA',
  },
  hasMap: 'https://maps.app.goo.gl/VfA6QRWgedJArMKA9',
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'license',
    name: 'Ministry of Interior — High Authority for Industrial Security, License No. 361',
  },
  knowsAbout: [
    'Security guarding',
    'Industrial security',
    'Manned guarding',
    'CCTV surveillance',
    'Fire safety systems',
    'Access control',
    'Facility protection',
  ],
  sameAs: [
    'https://www.linkedin.com/company/artalgroup/',
    'https://www.instagram.com/artal_group.sa/',
    'https://twitter.com/ArtalGroupSA',
    'https://www.youtube.com/@ArtalGroup',
    'https://t.me/artalgroup1',
    'https://t.snapchat.com/O9T1Eyj9',
    'https://play.google.com/store/apps/details?id=com.intshar.artalapp',
    'https://apps.apple.com/us/app/artal/id6740813953',
  ],
};

const WEBSITE = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  url: SITE,
  name: 'Artal Unified Security Services',
  inLanguage: ['ar', 'en'],
  publisher: { '@id': `${SITE}/#organization` },
};

export function GlobalSchema() {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(ORGANIZATION)}</script>
      <script type="application/ld+json">{JSON.stringify(WEBSITE)}</script>
    </Head>
  );
}
