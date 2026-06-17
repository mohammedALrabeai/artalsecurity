// آراء العملاء — تُحمّل من content/testimonials/*.json (تُضاف من /admin).
// فارغة افتراضياً → يُخفى القسم بالكامل (لا شهادات وهمية).
const modules = import.meta.glob('../../content/testimonials/*.json', { eager: true });

export interface TestimonialLocale {
  name: string;
  position: string;
  content: string;
}

export interface Testimonial {
  order?: number;
  rating: number;
  ar: TestimonialLocale;
  en: TestimonialLocale;
}

export const TESTIMONIALS: Testimonial[] = Object.values(modules)
  .map((m) => ((m as { default?: Testimonial }).default ?? m) as Testimonial)
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
