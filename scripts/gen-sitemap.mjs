// يولّد build/sitemap.xml تلقائياً من كل صفحات HTML المُصيَّرة بعد البناء.
// يُشغَّل بعد vite-react-ssg build (راجع package.json). يتحدّث تلقائياً مع كل صفحة جديدة.
import { readdirSync, statSync, writeFileSync } from 'fs';
import { join, relative } from 'path';

const BUILD = 'build';
const BASE = 'https://artalsecurity.com';

function walk(dir) {
  let out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out = out.concat(walk(p));
    else if (entry.endsWith('.html')) out.push(p);
  }
  return out;
}

const locs = walk(BUILD)
  .map((f) => relative(BUILD, f).replace(/\\/g, '/').replace(/\.html$/, ''))
  .map((r) => (r === 'index' ? '' : r))
  .map((r) => (r === '' ? `${BASE}/` : `${BASE}/${r}`))
  .sort();

const body = locs
  .map((loc) => {
    const priority = loc === `${BASE}/` ? '1.0' : loc.includes('/sectors') || loc.includes('/locations') ? '0.8' : '0.6';
    return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

writeFileSync(join(BUILD, 'sitemap.xml'), xml);
console.log(`[sitemap] wrote ${locs.length} URLs to build/sitemap.xml`);
