// يستخرج بيانات القطاعات/الخدمات/المدن من ملفّات .ts الحالية إلى ملفّات JSON
// (ملف لكل عنصر) ليديرها الـ CMS. يُشغَّل مرة واحدة: npx tsx scripts/dump-content.ts
import { writeFileSync, mkdirSync } from 'fs';
import { SECTORS } from '../src/data/sectors';
import { SERVICES } from '../src/data/services';
import { CITIES } from '../src/data/cities';

function dump(dir: string, arr: { slug: string }[]) {
  mkdirSync(dir, { recursive: true });
  arr.forEach((item, i) => {
    writeFileSync(`${dir}/${item.slug}.json`, JSON.stringify({ order: i, ...item }, null, 2) + '\n');
  });
  console.log(`wrote ${arr.length} files to ${dir}`);
}

dump('content/sectors', SECTORS);
dump('content/services', SERVICES);
dump('content/locations', CITIES);
