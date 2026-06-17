// شهادات/اعتمادات — تُحمّل من content/certificates/*.json (تُضاف من /admin).
// فارغة افتراضياً → تُخفى شبكة الشهادات (يبقى الترخيص الرئيسي ظاهراً).
const modules = import.meta.glob('../../content/certificates/*.json', { eager: true });

export interface Certificate {
  order?: number;
  image: string;
  labelAr: string;
  labelEn: string;
}

export const CERTIFICATES: Certificate[] = Object.values(modules)
  .map((m) => ((m as { default?: Certificate }).default ?? m) as Certificate)
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
