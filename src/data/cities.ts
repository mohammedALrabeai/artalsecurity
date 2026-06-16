// ─────────────────────────────────────────────────────────────────────────────
//  بيانات المدن — صفحات هبوط /locations/<slug> و /ar/locations/<slug>
//  تستهدف "شركة حراسات أمنية في <المدينة>". نخدم كل المملكة، وهذه أبرز المدن.
// ─────────────────────────────────────────────────────────────────────────────

export interface CityContent {
  name: string; // اسم المدينة
  region: string;
  blurb: string; // سطر تعريفي يربط المدينة بخدمات الحراسة
}

export interface City {
  slug: string;
  en: CityContent;
  ar: CityContent;
}

export const CITIES: City[] = [
  {
    slug: 'riyadh',
    ar: { name: 'الرياض', region: 'منطقة الرياض', blurb: 'العاصمة وأكبر مركز تجاري وحكومي وصناعي في المملكة، بطلب عالٍ على حراسة المنشآت والأبراج والمجمعات.' },
    en: { name: 'Riyadh', region: 'Riyadh Region', blurb: 'The capital and largest commercial, government and industrial hub, with high demand for facility, tower and complex security.' },
  },
  {
    slug: 'jeddah',
    ar: { name: 'جدة', region: 'منطقة مكة المكرمة', blurb: 'الميناء التجاري الأهم على البحر الأحمر، بفرص واسعة لحراسة الموانئ والمولات والمستودعات.' },
    en: { name: 'Jeddah', region: 'Makkah Region', blurb: 'The key Red Sea commercial port, with broad demand for port, mall and warehouse security.' },
  },
  {
    slug: 'makkah',
    ar: { name: 'مكة المكرمة', region: 'منطقة مكة المكرمة', blurb: 'مدينة ذات كثافة عالية على مدار العام تتطلب كوادر حراسة مدرّبة للفنادق والمنشآت الكبرى.' },
    en: { name: 'Makkah', region: 'Makkah Region', blurb: 'A high-density city year-round requiring trained guards for hotels and major facilities.' },
  },
  {
    slug: 'madinah',
    ar: { name: 'المدينة المنورة', region: 'منطقة المدينة المنورة', blurb: 'وجهة دائمة الحركة تحتاج حراسة للفنادق والمجمعات السكنية والمنشآت الخدمية.' },
    en: { name: 'Madinah', region: 'Madinah Region', blurb: 'A constantly busy destination needing guarding for hotels, residential complexes and service facilities.' },
  },
  {
    slug: 'dammam',
    ar: { name: 'الدمام', region: 'المنطقة الشرقية', blurb: 'قلب المنطقة الشرقية الصناعي، بطلب متواصل على حراسة المنشآت النفطية والصناعية والتجارية.' },
    en: { name: 'Dammam', region: 'Eastern Province', blurb: 'The industrial heart of the Eastern Province, with steady demand for oil, industrial and commercial security.' },
  },
  {
    slug: 'khobar',
    ar: { name: 'الخبر', region: 'المنطقة الشرقية', blurb: 'مدينة تجارية حيوية على الخليج، بفرص لحراسة المولات والأبراج والمجمعات السكنية.' },
    en: { name: 'Khobar', region: 'Eastern Province', blurb: 'A vibrant commercial city on the Gulf, with demand for mall, tower and residential security.' },
  },
  {
    slug: 'jubail',
    ar: { name: 'الجبيل', region: 'المنطقة الشرقية', blurb: 'أكبر مدينة صناعية في الشرق الأوسط ومقر أرتال، بخبرة عميقة في تأمين المصانع والمنشآت الصناعية.' },
    en: { name: 'Jubail', region: 'Eastern Province', blurb: 'The largest industrial city in the Middle East and Artal’s home base, with deep experience securing factories and industrial facilities.' },
  },
  {
    slug: 'ahsa',
    ar: { name: 'الأحساء', region: 'المنطقة الشرقية', blurb: 'من أكبر محافظات المملكة، بفرص لحراسة المنشآت الزراعية والتجارية والحكومية.' },
    en: { name: 'Al-Ahsa', region: 'Eastern Province', blurb: 'One of the Kingdom’s largest governorates, with demand for agricultural, commercial and government security.' },
  },
  {
    slug: 'taif',
    ar: { name: 'الطائف', region: 'منطقة مكة المكرمة', blurb: 'مدينة المصايف، بطلب على حراسة المنتجعات والمجمعات السياحية والسكنية.' },
    en: { name: 'Taif', region: 'Makkah Region', blurb: 'A resort city with demand for guarding resorts, tourist and residential complexes.' },
  },
  {
    slug: 'tabuk',
    ar: { name: 'تبوك', region: 'منطقة تبوك', blurb: 'بوابة الشمال الغربي ومنطقة المشاريع الكبرى، بفرص متنامية لحراسة المواقع والمشاريع.' },
    en: { name: 'Tabuk', region: 'Tabuk Region', blurb: 'The northwestern gateway and mega-project zone, with growing demand for site and project security.' },
  },
  {
    slug: 'abha',
    ar: { name: 'أبها', region: 'منطقة عسير', blurb: 'وجهة الجنوب السياحية، بحاجة لحراسة المنتجعات والفنادق والوجهات السياحية.' },
    en: { name: 'Abha', region: 'Asir Region', blurb: 'The southern tourist destination, needing guarding for resorts, hotels and attractions.' },
  },
  {
    slug: 'buraidah',
    ar: { name: 'بريدة', region: 'منطقة القصيم', blurb: 'حاضرة القصيم التجارية والزراعية، بفرص لحراسة الأسواق والمستودعات والمنشآت.' },
    en: { name: 'Buraidah', region: 'Qassim Region', blurb: 'Qassim’s commercial and agricultural hub, with demand for market, warehouse and facility security.' },
  },
  {
    slug: 'yanbu',
    ar: { name: 'ينبع', region: 'منطقة المدينة المنورة', blurb: 'مدينة صناعية وميناء مهم على البحر الأحمر، بطلب على حراسة المنشآت الصناعية والمواقع.' },
    en: { name: 'Yanbu', region: 'Madinah Region', blurb: 'An industrial city and key Red Sea port, with demand for industrial facility and site security.' },
  },
  {
    slug: 'jazan',
    ar: { name: 'جازان', region: 'منطقة جازان', blurb: 'منطقة ساحلية واعدة بمشاريع كبرى، تتطلب كوادر لحراسة الموانئ والمنشآت الصناعية.' },
    en: { name: 'Jazan', region: 'Jazan Region', blurb: 'A promising coastal region with mega projects, requiring port and industrial facility security.' },
  },
];

export const CITY_SLUGS = CITIES.map((c) => c.slug);
