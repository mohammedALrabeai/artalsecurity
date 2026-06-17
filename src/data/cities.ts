// ─────────────────────────────────────────────────────────────────────────────
//  بيانات المدن — تُحمّل من content/locations/<slug>.json (يديرها الـ CMS).
//  تستهدف "شركة حراسات أمنية في <المدينة>".
// ─────────────────────────────────────────────────────────────────────────────

export interface CityContent {
  name: string;
  region: string;
  blurb: string;
}

export interface City {
  slug: string;
  order?: number;
  en: CityContent;
  ar: CityContent;
}

const modules = import.meta.glob('../../content/locations/*.json', { eager: true });

export const CITIES: City[] = Object.values(modules)
  .map((m) => ((m as { default?: City }).default ?? m) as City)
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

export const CITY_SLUGS = CITIES.map((c) => c.slug);
