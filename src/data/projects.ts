// أعمال/مشاريع — تُحمّل من content/projects/*.json (تُضاف من /admin).
// فارغة افتراضياً → يُخفى القسم بالكامل (لا مشاريع وهمية).
const modules = import.meta.glob('../../content/projects/*.json', { eager: true });

export interface ProjectLocale {
  title: string;
  description: string;
}

export interface Project {
  order?: number;
  image: string;
  ar: ProjectLocale;
  en: ProjectLocale;
}

export const PROJECTS: Project[] = Object.values(modules)
  .map((m) => ((m as { default?: Project }).default ?? m) as Project)
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
