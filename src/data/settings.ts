// إعدادات الموقع — تُحمّل من content/settings.json (يديرها الأدمن).
// الأرقام/التواصل/الفيديو قابلة للتعديل من لوحة /admin دون لمس الكود.
import settings from '../../content/settings.json';

export interface SiteStat {
  value: string;
  suffix: string;
  labelAr: string;
  labelEn: string;
  show: boolean;
}

export interface SiteSettings {
  stats: SiteStat[];
  contact: {
    phones: string[];
    emails: string[];
    addressAr: string;
    addressEn: string;
    mapUrl: string;
    license: string;
  };
  video: { youtubeId: string };
}

export const SETTINGS = settings as SiteSettings;
export const STATS = SETTINGS.stats.filter((s) => s.show);
