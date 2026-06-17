// ─────────────────────────────────────────────────────────────────────────────
//  أنواع الخدمة — تُحمّل من content/services/<slug>.json (يديرها الـ CMS).
//  صفحات /services/<slug> و /ar/services/<slug>.
// ─────────────────────────────────────────────────────────────────────────────

export interface ServiceContent {
  name: string;
  title: string;
  description: string;
  heading: string;
  intro: string;
  features: string[];
  faqs: { q: string; a: string }[];
}

export interface Service {
  slug: string;
  order?: number;
  keywords: string;
  ar: ServiceContent;
  en: ServiceContent;
}

const modules = import.meta.glob('../../content/services/*.json', { eager: true });

export const SERVICES: Service[] = Object.values(modules)
  .map((m) => ((m as { default?: Service }).default ?? m) as Service)
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
