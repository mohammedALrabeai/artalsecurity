// ─────────────────────────────────────────────────────────────────────────────
//  بيانات قطاعات العملاء — صفحات هبوط /sectors/<slug> و /ar/sectors/<slug>
//  كل قطاع له محتوى فريد بلغتين لاستهداف نية العميل (B2B).
//  أضف قطاعاً جديداً هنا فقط — يُدرَج تلقائياً في المسارات وخريطة الموقع.
// ─────────────────────────────────────────────────────────────────────────────

export interface SectorContent {
  /** meta title */
  title: string;
  /** meta description */
  description: string;
  /** display name (short) */
  name: string;
  /** H1 */
  heading: string;
  /** lead paragraph(s) */
  intro: string;
  /** "ما نؤمّنه" — types of sites we secure */
  sites: string[];
  /** "لماذا نحن" — value points for this sector */
  points: string[];
  faqs: { q: string; a: string }[];
}

export interface Sector {
  slug: string;
  keywords: string;
  en: SectorContent;
  ar: SectorContent;
}

export const SECTORS: Sector[] = [
  {
    slug: 'industrial',
    keywords:
      'حراسات أمنية صناعية, حراسة مصانع, أمن المناطق الصناعية, حراسة مستودعات, شركة أمن صناعي',
    ar: {
      name: 'القطاع الصناعي والمصانع',
      title: 'حراسة المنشآت الصناعية والمصانع | أرتال للحراسات الأمنية',
      description:
        'شركة أرتال — حلول حراسة أمنية متخصصة للمصانع والمناطق الصناعية والمستودعات في السعودية، بترخيص الهيئة العليا للأمن الصناعي رقم 361. اطلب عرض سعر.',
      heading: 'حراسة المنشآت الصناعية والمصانع',
      intro:
        'تتطلب المنشآت الصناعية والمصانع مستوى أمنياً عالياً يراعي طبيعة المواد والمعدّات والمخاطر التشغيلية. توفّر شركة أرتال الموحدة للحراسات الأمنية — المرخّصة من الهيئة العليا للأمن الصناعي بوزارة الداخلية (ترخيص رقم 361) — حراساً مدرّبين وأنظمة تحكّم وغرفة عمليات على مدار الساعة لحماية أصولكم الصناعية في جميع مناطق المملكة.',
      sites: [
        'المصانع والمجمّعات الإنتاجية',
        'المدن والمناطق الصناعية',
        'المستودعات ومراكز التوزيع',
        'منشآت البتروكيماويات والمواد الخطرة',
        'محطات الطاقة والمرافق',
      ],
      points: [
        'حراس مدرّبون على بروتوكولات السلامة الصناعية وإدارة المخاطر',
        'تحكّم في الدخول والخروج للمركبات والشاحنات والعمالة',
        'غرفة عمليات ومراقبة بالكاميرات على مدار الساعة',
        'التنسيق مع الدفاع المدني والجهات الأمنية عند الطوارئ',
        'تقارير دورية وإجراءات تفتيش موثّقة',
      ],
      faqs: [
        {
          q: 'هل أرتال مرخّصة لحراسة المنشآت الصناعية؟',
          a: 'نعم، شركة أرتال مرخّصة من الهيئة العليا للأمن الصناعي بوزارة الداخلية برقم 361، وهي مؤهّلة لتأمين المصانع والمنشآت الصناعية والحيوية.',
        },
        {
          q: 'هل توفّرون حراسة على مدار الساعة للمصانع؟',
          a: 'نعم، نوفّر تغطية 24/7 مدعومة بغرفة عمليات مركزية وأنظمة مراقبة وتقارير دورية.',
        },
        {
          q: 'في أي مناطق تقدّمون خدمة الحراسة الصناعية؟',
          a: 'نخدم جميع مناطق المملكة العربية السعودية، وننسّق توفير الكوادر حتى للمواقع الصناعية النائية.',
        },
      ],
    },
    en: {
      name: 'Industrial & Factories',
      title: 'Industrial & Factory Security Guarding | Artal Security',
      description:
        'Artal — specialized security guarding for factories, industrial cities and warehouses across Saudi Arabia. Licensed by the High Authority for Industrial Security (No. 361). Request a quote.',
      heading: 'Security Guarding for Industrial Facilities & Factories',
      intro:
        'Industrial facilities and factories demand a high security standard that accounts for materials, equipment and operational risk. Artal Unified Security Services — licensed by the Ministry of Interior’s High Authority for Industrial Security (License No. 361) — provides trained guards, access control and a 24/7 operations room to protect your industrial assets across Saudi Arabia.',
      sites: [
        'Factories and production complexes',
        'Industrial cities and zones',
        'Warehouses and distribution centers',
        'Petrochemical and hazardous-material facilities',
        'Power plants and utilities',
      ],
      points: [
        'Guards trained in industrial safety protocols and risk management',
        'Vehicle, truck and workforce access control',
        '24/7 operations room and CCTV monitoring',
        'Coordination with Civil Defense and authorities in emergencies',
        'Documented inspections and periodic reporting',
      ],
      faqs: [
        {
          q: 'Is Artal licensed to guard industrial facilities?',
          a: 'Yes. Artal is licensed by the Ministry of Interior’s High Authority for Industrial Security (No. 361) and is qualified to secure factories, industrial and vital facilities.',
        },
        {
          q: 'Do you provide 24/7 guarding for factories?',
          a: 'Yes — we provide round-the-clock coverage backed by a central operations room, monitoring systems and periodic reporting.',
        },
        {
          q: 'Which regions do you cover for industrial security?',
          a: 'We serve all regions of Saudi Arabia and can mobilize personnel even for remote industrial sites.',
        },
      ],
    },
  },
  {
    slug: 'commercial-residential',
    keywords:
      'حراسات أمنية للمولات, أمن سكني, حراسة مجمعات تجارية, حراسة كمباوندات, حراسة أبراج',
    ar: {
      name: 'القطاع التجاري والسكني',
      title: 'حراسة المجمعات التجارية والسكنية | أرتال للحراسات الأمنية',
      description:
        'شركة أرتال — حراسة أمنية للمولات والمجمعات التجارية والأبراج والكمباوندات السكنية في السعودية. حراس محترفون وخدمة عملاء راقية. اطلب عرض سعر.',
      heading: 'حراسة المجمعات التجارية والسكنية',
      intro:
        'يجمع القطاع التجاري والسكني بين الحاجة للأمن والحفاظ على تجربة راقية للزوّار والسكّان. توفّر أرتال حراساً يتمتّعون بالمظهر اللائق وحسن التعامل، مع أنظمة تحكّم بالدخول ومراقبة، لتأمين المولات والأبراج والكمباوندات دون الإخلال براحة المرتادين.',
      sites: [
        'المولات والمراكز التجارية',
        'الأبراج والمكاتب الإدارية',
        'المجمعات والكمباوندات السكنية',
        'الأحياء والمخططات السكنية المغلقة',
        'الفنادق والشقق الفندقية',
      ],
      points: [
        'حراس بمظهر لائق ومهارات تعامل مع الجمهور',
        'تنظيم الدخول والمواقف وإدارة الزوّار',
        'مراقبة بالكاميرات وتحكّم في البوابات',
        'استجابة سريعة للحوادث والطوارئ',
        'تكامل مع إدارة المرافق وخدمات الأمن النسائي عند الحاجة',
      ],
      faqs: [
        {
          q: 'هل توفّرون حراسة نسائية للمجمعات؟',
          a: 'نعم، نوفّر محترفات أمن مدرّبات للمنشآت والمناسبات التي تتطلب ذلك.',
        },
        {
          q: 'هل تناسب خدمتكم الكمباوندات السكنية والأبراج؟',
          a: 'نعم، لدينا برامج حراسة مخصّصة للمجمعات السكنية والأبراج تشمل تنظيم الدخول والمواقف والمراقبة.',
        },
        {
          q: 'كيف أطلب عرض سعر لتأمين مجمّع تجاري؟',
          a: 'تواصل معنا عبر الموقع أو الهاتف، وسيقوم فريقنا بزيارة الموقع وتقديم عرض مخصّص حسب احتياجك.',
        },
      ],
    },
    en: {
      name: 'Commercial & Residential',
      title: 'Commercial & Residential Security Guarding | Artal Security',
      description:
        'Artal — security guarding for malls, commercial complexes, towers and residential compounds across Saudi Arabia. Professional guards and premium service. Request a quote.',
      heading: 'Security Guarding for Commercial & Residential Properties',
      intro:
        'Commercial and residential properties need security that also preserves a premium experience for visitors and residents. Artal provides well-presented, customer-oriented guards together with access control and monitoring to secure malls, towers and compounds without disrupting the comfort of occupants.',
      sites: [
        'Malls and shopping centers',
        'Towers and office buildings',
        'Residential complexes and compounds',
        'Gated communities',
        'Hotels and serviced apartments',
      ],
      points: [
        'Well-presented guards with strong public-handling skills',
        'Entry, parking and visitor management',
        'CCTV monitoring and gate control',
        'Rapid incident and emergency response',
        'Integration with facility management and female security when required',
      ],
      faqs: [
        {
          q: 'Do you provide female security guards for complexes?',
          a: 'Yes, we provide trained female security professionals for facilities and events that require them.',
        },
        {
          q: 'Is your service suitable for residential compounds and towers?',
          a: 'Yes — we have dedicated guarding programs for residential complexes and towers covering access, parking and surveillance.',
        },
        {
          q: 'How do I request a quote to secure a commercial complex?',
          a: 'Contact us via the website or phone; our team will survey the site and provide a tailored proposal for your needs.',
        },
      ],
    },
  },
  {
    slug: 'construction-projects',
    keywords:
      'حراسة مواقع إنشائية, أمن المشاريع, حراسة مشاريع المقاولات, حراسة مواقع البناء',
    ar: {
      name: 'المشاريع والإنشاءات',
      title: 'حراسة المشاريع والمواقع الإنشائية | أرتال للحراسات الأمنية',
      description:
        'شركة أرتال — حراسة أمنية للمواقع الإنشائية والمشاريع الكبرى ومواقع المقاولين في السعودية. حماية المعدّات والمواد وتنظيم الدخول. اطلب عرض سعر.',
      heading: 'حراسة المشاريع والمواقع الإنشائية',
      intro:
        'تواجه المواقع الإنشائية مخاطر السرقة والتعدّي وفقدان المعدّات والمواد. توفّر أرتال حراسة متخصّصة للمشاريع تشمل تأمين المحيط وتنظيم دخول العمالة والمركبات وحماية المعدّات والمخزون على مدار مراحل المشروع، في جميع مناطق المملكة.',
      sites: [
        'مواقع البناء والإنشاء',
        'المشاريع الكبرى والبنية التحتية',
        'مخيمات ومواقع المقاولين',
        'مستودعات المواد والمعدّات بالموقع',
        'مشاريع الطرق والمرافق',
      ],
      points: [
        'تأمين محيط الموقع ومنع التعدّي والسرقة',
        'تنظيم دخول العمالة والمركبات والمعدّات',
        'حماية المخزون والمعدّات الثمينة',
        'دوريات ليلية وتغطية على مدار الساعة',
        'تقارير حوادث ومتابعة منظّمة مع إدارة المشروع',
      ],
      faqs: [
        {
          q: 'هل توفّرون حراسة مؤقتة طوال مدة المشروع فقط؟',
          a: 'نعم، نوفّر عقود حراسة مرنة تغطّي مدة المشروع بمراحله المختلفة حسب احتياجك.',
        },
        {
          q: 'كيف تحمون المعدّات والمواد في الموقع؟',
          a: 'عبر تأمين المحيط، وتنظيم الدخول، والدوريات، والمراقبة، وتوثيق حركة المعدّات والمواد.',
        },
        {
          q: 'هل تغطّون المشاريع في المواقع النائية؟',
          a: 'نعم، ننسّق توفير الكوادر والإعاشة اللازمة لتأمين المشاريع في المواقع النائية بجميع المناطق.',
        },
      ],
    },
    en: {
      name: 'Construction & Projects',
      title: 'Construction Site & Project Security | Artal Security',
      description:
        'Artal — security guarding for construction sites, mega projects and contractor sites across Saudi Arabia. Protect equipment and materials, control access. Request a quote.',
      heading: 'Security Guarding for Construction Sites & Projects',
      intro:
        'Construction sites face risks of theft, trespassing and loss of equipment and materials. Artal provides specialized project guarding covering perimeter security, workforce and vehicle access control, and protection of equipment and stock throughout every project phase, across all regions of Saudi Arabia.',
      sites: [
        'Construction and build sites',
        'Mega projects and infrastructure',
        'Contractor camps and sites',
        'On-site material and equipment stores',
        'Road and utility projects',
      ],
      points: [
        'Perimeter security and prevention of trespassing and theft',
        'Workforce, vehicle and equipment access control',
        'Protection of valuable stock and equipment',
        'Night patrols and 24/7 coverage',
        'Incident reporting and organized follow-up with project management',
      ],
      faqs: [
        {
          q: 'Do you provide temporary guarding for the project duration only?',
          a: 'Yes, we offer flexible guarding contracts covering the project duration across its phases as you need.',
        },
        {
          q: 'How do you protect on-site equipment and materials?',
          a: 'Through perimeter security, access control, patrols, surveillance and documented tracking of equipment and material movement.',
        },
        {
          q: 'Do you cover projects in remote locations?',
          a: 'Yes — we coordinate personnel and the required logistics to secure projects in remote sites across all regions.',
        },
      ],
    },
  },
  {
    slug: 'government-vital',
    keywords:
      'حراسة منشآت حكومية, أمن المنشآت النفطية, حراسة مستشفيات, حراسة منشآت تعليمية, أمن المنشآت الحيوية',
    ar: {
      name: 'القطاع الحكومي والحيوي',
      title: 'حراسة المنشآت الحكومية والحيوية | أرتال للحراسات الأمنية',
      description:
        'شركة أرتال — حراسة أمنية للمنشآت الحكومية والنفطية والصحية والتعليمية في السعودية، بترخيص الهيئة العليا للأمن الصناعي رقم 361. اطلب عرض سعر.',
      heading: 'حراسة المنشآت الحكومية والحيوية',
      intro:
        'تتطلب المنشآت الحكومية والحيوية انضباطاً عالياً والتزاماً صارماً بالأنظمة والإجراءات الأمنية. توفّر أرتال — بخبرتها وترخيصها رقم 361 — كوادر مؤهّلة لتأمين الجهات الحكومية والمنشآت النفطية والصحية والتعليمية مع التنسيق الكامل مع الجهات الأمنية المختصّة.',
      sites: [
        'الجهات والمباني الحكومية',
        'المنشآت النفطية ومنشآت الطاقة',
        'المستشفيات والمنشآت الصحية',
        'المدارس والجامعات والمنشآت التعليمية',
        'المنشآت الحيوية والبنية التحتية الحسّاسة',
      ],
      points: [
        'كوادر منضبطة ملتزمة بالأنظمة والإجراءات الرسمية',
        'تحكّم صارم في الدخول والتفتيش وإدارة الهوية',
        'تنسيق كامل مع الجهات الأمنية المختصّة',
        'غرفة عمليات ومراقبة على مدار الساعة',
        'سرية وموثوقية عالية في التعامل مع المواقع الحسّاسة',
      ],
      faqs: [
        {
          q: 'هل أنتم مؤهّلون لتأمين الجهات الحكومية والمنشآت الحيوية؟',
          a: 'نعم، أرتال مرخّصة من الهيئة العليا للأمن الصناعي رقم 361 ولديها خبرة في تأمين المنشآت الحكومية والحيوية الحسّاسة.',
        },
        {
          q: 'هل توفّرون حراسة للمستشفيات والمنشآت التعليمية؟',
          a: 'نعم، نوفّر برامج حراسة مخصّصة للمستشفيات والمدارس والجامعات تراعي طبيعة كل منشأة.',
        },
        {
          q: 'كيف تضمنون السرية في المواقع الحسّاسة؟',
          a: 'عبر كوادر مدرّبة وإجراءات صارمة واتفاقيات سرية والتزام كامل بالأنظمة الأمنية المعتمدة.',
        },
      ],
    },
    en: {
      name: 'Government & Vital',
      title: 'Government & Vital Facility Security | Artal Security',
      description:
        'Artal — security guarding for government, oil & energy, healthcare and education facilities in Saudi Arabia. Licensed (No. 361) by the High Authority for Industrial Security. Request a quote.',
      heading: 'Security Guarding for Government & Vital Facilities',
      intro:
        'Government and vital facilities require high discipline and strict compliance with security regulations and procedures. With its experience and License No. 361, Artal provides qualified personnel to secure government entities, oil, healthcare and education facilities, in full coordination with the relevant authorities.',
      sites: [
        'Government entities and buildings',
        'Oil and energy facilities',
        'Hospitals and healthcare facilities',
        'Schools, universities and education facilities',
        'Vital facilities and sensitive infrastructure',
      ],
      points: [
        'Disciplined personnel compliant with official regulations and procedures',
        'Strict access control, screening and identity management',
        'Full coordination with relevant authorities',
        '24/7 operations room and monitoring',
        'High confidentiality and reliability at sensitive sites',
      ],
      faqs: [
        {
          q: 'Are you qualified to secure government and vital facilities?',
          a: 'Yes. Artal is licensed by the High Authority for Industrial Security (No. 361) and has experience securing sensitive government and vital facilities.',
        },
        {
          q: 'Do you provide guarding for hospitals and education facilities?',
          a: 'Yes, we offer dedicated guarding programs for hospitals, schools and universities tailored to each facility.',
        },
        {
          q: 'How do you ensure confidentiality at sensitive sites?',
          a: 'Through trained personnel, strict procedures, confidentiality agreements and full compliance with approved security regulations.',
        },
      ],
    },
  },
];

export const SECTOR_SLUGS = SECTORS.map((s) => s.slug);
