// ─────────────────────────────────────────────────────────────────────────────
//  بيانات قطاعات العملاء — تُحمّل من content/sectors/<slug>.json (يديرها الـ CMS).
//  صفحات /sectors/<slug> و /ar/sectors/<slug> لاستهداف نية العميل (B2B).
// ─────────────────────────────────────────────────────────────────────────────

export interface SectorContent {
  title: string;
  description: string;
  name: string;
  heading: string;
  intro: string;
  sites: string[];
  points: string[];
  faqs: { q: string; a: string }[];
}

export interface Sector {
  slug: string;
  order?: number;
  keywords: string;
  en: SectorContent;
  ar: SectorContent;
}

const modules = import.meta.glob('../../content/sectors/*.json', { eager: true });

export const SECTORS: Sector[] = Object.values(modules)
  .map((m) => ((m as { default?: Sector }).default ?? m) as Sector)
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

export const SECTOR_SLUGS = SECTORS.map((s) => s.slug);
