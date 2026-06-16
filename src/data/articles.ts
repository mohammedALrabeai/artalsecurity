// ─────────────────────────────────────────────────────────────────────────────
//  مقالات المدوّنة — صفحات /blog و /blog/<slug> (و /ar/...)
//  محتوى ثنائي اللغة لاستهداف بحث معلوماتي وإظهار نشاط الشركة (يغذّي الـ AI).
//  body بصيغة Markdown. أضف مقالاً جديداً هنا فيُدرَج تلقائياً في القوائم وخريطة الموقع.
// ─────────────────────────────────────────────────────────────────────────────

export interface ArticleLocale {
  title: string; // العنوان (H1 + meta title)
  description: string; // وصف الميتا (~155 حرفاً)
  excerpt: string; // ملخّص في البطاقة
  body: string; // Markdown
}

export interface Article {
  slug: string;
  date: string; // ISO yyyy-mm-dd — للترتيب والحداثة
  category: { ar: string; en: string };
  keywords: string;
  ar: ArticleLocale;
  en: ArticleLocale;
}

interface RawArticle {
  slug: string;
  date: string;
  category_ar: string;
  category_en: string;
  keywords: string;
  ar: ArticleLocale;
  en: ArticleLocale;
}

import rawArticles from './articles-content.json';

export const ARTICLES: Article[] = (rawArticles as RawArticle[]).map((r) => ({
  slug: r.slug,
  date: r.date,
  category: { ar: r.category_ar, en: r.category_en },
  keywords: r.keywords,
  ar: r.ar,
  en: r.en,
}));

// مرتّبة بالأحدث أولاً
export const ARTICLES_SORTED = [...ARTICLES].sort((a, b) => (a.date < b.date ? 1 : -1));
export const ARTICLE_SLUGS = ARTICLES.map((a) => a.slug);
