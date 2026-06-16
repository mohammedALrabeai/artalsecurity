// ─────────────────────────────────────────────────────────────────────────────
//  أنواع الخدمة — صفحات /services/<slug> و /ar/services/<slug>
//  الخدمة الأساسية (الحراسة المدنية) + الخدمات الثماني المساندة، بلغتين.
// ─────────────────────────────────────────────────────────────────────────────

export interface ServiceContent {
  name: string;
  title: string; // meta title
  description: string; // meta description
  heading: string; // H1
  intro: string;
  features: string[];
  faqs: { q: string; a: string }[];
}

export interface Service {
  slug: string;
  keywords: string;
  ar: ServiceContent;
  en: ServiceContent;
}

export const SERVICES: Service[] = [
  {
    slug: 'manned-guarding',
    keywords: 'حراسات أمنية مدنية, حراس أمن, حراسة مسلحة, حراسة غير مسلحة, أفراد أمن مدربون, manned guarding, security guards',
    ar: {
      name: 'الحراسات الأمنية المدنية',
      title: 'الحراسات الأمنية المدنية (حراس أمن) | أرتال',
      description: 'خدمة الحراسات الأمنية المدنية من أرتال: أفراد أمن مدرّبون ومرخّصون (مسلحون وغير مسلحين) لتأمين منشأتك على مدار الساعة في جميع مناطق المملكة.',
      heading: 'الحراسات الأمنية المدنية',
      intro: 'الخدمة الأساسية لشركة أرتال: توفير أفراد أمن مدرّبين ومؤهّلين — مسلحين وغير مسلحين — لتأمين المنشآت الصناعية والتجارية والسكنية والحكومية. كوادرنا مرخّصة وفق ترخيص الهيئة العليا للأمن الصناعي رقم 361، ومدعومة بغرفة عمليات تعمل على مدار الساعة.',
      features: [
        'أفراد أمن مدرّبون على إجراءات التشغيل والطوارئ',
        'خيارات الحراسة المسلحة وغير المسلحة حسب طبيعة الموقع',
        'إشراف ميداني وتقارير مناوبة دورية',
        'غرفة عمليات ومتابعة على مدار الساعة',
        'كوادر نسائية عند الحاجة لتفتيش السيدات',
      ],
      faqs: [
        { q: 'هل توفّرون حراسة مسلحة وغير مسلحة؟', a: 'نعم، نوفّر النوعين وفق طبيعة الموقع ومتطلباته والأنظمة المعتمدة.' },
        { q: 'هل الحرّاس مرخّصون ومدرّبون؟', a: 'نعم، كوادرنا مؤهّلة ومدرّبة، وتعمل الشركة بترخيص الهيئة العليا للأمن الصناعي رقم 361.' },
      ],
    },
    en: {
      name: 'Manned Security Guarding',
      title: 'Manned Security Guarding (Guards) | Artal',
      description: "Artal's core service: trained, licensed security guards (armed and unarmed) protecting your facility 24/7 across all regions of Saudi Arabia.",
      heading: 'Manned Security Guarding',
      intro: "Artal's core service: trained, qualified security personnel — armed and unarmed — to protect industrial, commercial, residential and government facilities. Our guards operate under High Authority for Industrial Security License No. 361, backed by a 24/7 operations room.",
      features: [
        'Guards trained in standard operating and emergency procedures',
        'Armed and unarmed options based on site requirements',
        'Field supervision and periodic shift reporting',
        '24/7 operations room and monitoring',
        'Female personnel available when required',
      ],
      faqs: [
        { q: 'Do you provide armed and unarmed guarding?', a: 'Yes, we provide both based on the site’s nature, requirements, and applicable regulations.' },
        { q: 'Are the guards licensed and trained?', a: 'Yes, our personnel are qualified and trained, and the company operates under High Authority for Industrial Security License No. 361.' },
      ],
    },
  },
  {
    slug: 'cctv-access-control',
    keywords: 'كاميرات مراقبة, أنظمة التحكم في الدخول, CCTV, access control, مراقبة وتحكم',
    ar: {
      name: 'كاميرات المراقبة والتحكم في الدخول',
      title: 'كاميرات المراقبة وأنظمة التحكم في الدخول | أرتال',
      description: 'توريد وتركيب وصيانة أنظمة كاميرات المراقبة (CCTV) والتحكم في الدخول والخروج وإدارة المرافق، مع ربطها بالمراقبة المركزية على مدار الساعة.',
      heading: 'كاميرات المراقبة وأنظمة التحكم في الدخول',
      intro: 'حلول مراقبة وتحكم متكاملة: توريد وتركيب وصيانة أنظمة الكاميرات وأنظمة التحكم في الدخول والخروج وإدارة المرافق، مع ربطها بغرفة العمليات للمراقبة الحية والاستجابة الفورية.',
      features: [
        'كاميرات مراقبة عالية الدقة وتغطية شاملة',
        'أنظمة تحكم في الدخول والخروج وإدارة الهوية',
        'ربط بالمراقبة المركزية على مدار الساعة',
        'توريد وتركيب وصيانة وعقود دعم',
      ],
      faqs: [
        { q: 'هل تقدّمون الصيانة بعد التركيب؟', a: 'نعم، نوفّر عقود صيانة ودعم دورية لضمان عمل الأنظمة بكفاءة.' },
        { q: 'هل يمكن ربط الكاميرات بغرفة العمليات؟', a: 'نعم، نربط الأنظمة بالمراقبة المركزية لرصد الأحداث والاستجابة الفورية.' },
      ],
    },
    en: {
      name: 'CCTV & Access Control',
      title: 'CCTV Surveillance & Access Control Systems | Artal',
      description: 'Supply, installation and maintenance of CCTV surveillance and access control systems, integrated with 24/7 central monitoring.',
      heading: 'CCTV Surveillance & Access Control',
      intro: 'Integrated surveillance and control solutions: supply, installation and maintenance of CCTV and entry/exit access control and facility management systems, integrated with the operations room for live monitoring and instant response.',
      features: [
        'High-resolution cameras with comprehensive coverage',
        'Entry/exit access control and identity management',
        'Integration with 24/7 central monitoring',
        'Supply, installation, maintenance and support contracts',
      ],
      faqs: [
        { q: 'Do you provide maintenance after installation?', a: 'Yes, we offer periodic maintenance and support contracts to keep systems running efficiently.' },
        { q: 'Can cameras be linked to the operations room?', a: 'Yes, we integrate systems with central monitoring for event detection and instant response.' },
      ],
    },
  },
  {
    slug: 'fire-safety-systems',
    keywords: 'أنظمة السلامة, أنظمة الإطفاء, إنذار الحريق, fire safety, fire alarm systems',
    ar: {
      name: 'أنظمة السلامة والإطفاء',
      title: 'أنظمة السلامة والإطفاء وإنذار الحريق | أرتال',
      description: 'قسم متخصّص في أنظمة السلامة والإطفاء وإنذار الحريق: توريد وتركيب وصيانة وفق المعايير المعتمدة لحماية منشأتك.',
      heading: 'أنظمة السلامة والإطفاء',
      intro: 'قسم متخصّص يعمل في أنظمة السلامة وأنظمة الإطفاء وإنذار الحريق — توريداً وتركيباً وصيانة — وفق المعايير المعتمدة، بما يتكامل مع منظومة الأمن والحماية في المنشأة.',
      features: [
        'أنظمة إنذار وكشف الحريق',
        'أنظمة الإطفاء ومعدّات السلامة',
        'توريد وتركيب وصيانة دورية',
        'تكامل مع غرفة العمليات والإجراءات الأمنية',
      ],
      faqs: [
        { q: 'هل تشمل الخدمة الصيانة الدورية؟', a: 'نعم، نوفّر عقود صيانة دورية لضمان جاهزية أنظمة السلامة والإطفاء.' },
        { q: 'هل تتوافق الأنظمة مع المعايير المعتمدة؟', a: 'نعم، نلتزم بالمعايير والاشتراطات المعتمدة في المملكة.' },
      ],
    },
    en: {
      name: 'Fire & Safety Systems',
      title: 'Fire & Safety and Alarm Systems | Artal',
      description: 'A specialized department for safety, firefighting and fire alarm systems: supply, installation and maintenance to approved standards to protect your facility.',
      heading: 'Fire & Safety Systems',
      intro: 'A specialized department working in safety systems, firefighting systems and fire alarms — supply, installation and maintenance — to approved standards, integrated with the facility’s overall security and protection system.',
      features: [
        'Fire alarm and detection systems',
        'Firefighting systems and safety equipment',
        'Supply, installation and periodic maintenance',
        'Integration with the operations room and security procedures',
      ],
      faqs: [
        { q: 'Does the service include periodic maintenance?', a: 'Yes, we provide periodic maintenance contracts to keep safety and firefighting systems ready.' },
        { q: 'Do the systems comply with approved standards?', a: 'Yes, we adhere to approved standards and requirements in the Kingdom.' },
      ],
    },
  },
  {
    slug: 'security-vehicles',
    keywords: 'تأجير سيارات أمنية, مركبات أمنية مجهزة, دوريات أمنية, security vehicles rental, patrol vehicles',
    ar: {
      name: 'تأجير السيارات الأمنية',
      title: 'تأجير السيارات الأمنية المجهّزة | أرتال',
      description: 'تأجير سيارات أمنية مجهّزة بالكامل بمعدّات الاتصال وتحديد المواقع والإنارة والأبواق الأمنية، متوفرة بعدة فئات حسب حاجة العميل.',
      heading: 'تأجير السيارات الأمنية',
      intro: 'نوفّر سيارات أمنية مجهّزة بكامل المعدّات الأمنية مثل أجهزة الاتصالات وتحديد المواقع والمصابيح والأبواق الأمنية، وهي متوفرة في عدة فئات بحسب حاجة العميل وطبيعة الموقع.',
      features: [
        'مركبات مجهّزة بأجهزة اتصال وتحديد مواقع',
        'إنارة وأبواق أمنية',
        'عدة فئات حسب الحاجة',
        'دعم لعمليات الدوريات والاستجابة',
      ],
      faqs: [
        { q: 'هل تتوفر فئات مختلفة من المركبات؟', a: 'نعم، تتوفر ثلاث فئات حسب حاجة العميل وطبيعة الموقع.' },
        { q: 'هل المركبات مجهّزة بمعدّات الاتصال؟', a: 'نعم، مجهّزة بأجهزة الاتصالات وتحديد المواقع والمعدّات الأمنية.' },
      ],
    },
    en: {
      name: 'Security Vehicles Rental',
      title: 'Equipped Security Vehicles Rental | Artal',
      description: 'Rental of fully equipped security vehicles with communication, GPS, lighting and security horns, available in several categories based on client needs.',
      heading: 'Security Vehicles Rental',
      intro: 'We provide security vehicles fully equipped with security gear such as communication devices, GPS, lights and security horns, available in several categories based on the client’s needs and site nature.',
      features: [
        'Vehicles equipped with communication and GPS devices',
        'Security lighting and horns',
        'Several categories based on need',
        'Support for patrol and response operations',
      ],
      faqs: [
        { q: 'Are different vehicle categories available?', a: 'Yes, three categories are available based on client needs and site nature.' },
        { q: 'Are the vehicles equipped with communication gear?', a: 'Yes, they are equipped with communication, GPS and security equipment.' },
      ],
    },
  },
  {
    slug: 'vehicle-tracking',
    keywords: 'تتبع المركبات, أنظمة تتبع, GPS, إدارة العمليات الأمنية, vehicle tracking',
    ar: {
      name: 'تتبع المركبات',
      title: 'أنظمة تتبع المركبات وإدارة العمليات | أرتال',
      description: 'أجهزة وبرامج تتبع المركبات وأنظمة إدارة العمليات الأمنية الشاملة لمتابعة الأسطول والدوريات لحظياً.',
      heading: 'تتبع المركبات',
      intro: 'نوفّر أجهزة تتبع المركبات وبرامج التتبع وأنظمة إدارة العمليات الأمنية الشاملة، بما يتيح متابعة الأسطول والدوريات لحظياً ورفع كفاءة الاستجابة.',
      features: [
        'أجهزة تتبع GPS للمركبات والدوريات',
        'برامج متابعة وإدارة العمليات',
        'تقارير ومؤشرات أداء',
        'تكامل مع غرفة العمليات',
      ],
      faqs: [
        { q: 'هل يمكن متابعة الدوريات لحظياً؟', a: 'نعم، توفّر الأنظمة متابعة لحظية للمركبات والدوريات.' },
        { q: 'هل تتوفر تقارير أداء؟', a: 'نعم، تتيح المنصّة تقارير ومؤشرات لقياس الأداء.' },
      ],
    },
    en: {
      name: 'Vehicle Tracking',
      title: 'Vehicle Tracking & Operations Management | Artal',
      description: 'Vehicle tracking devices and software with comprehensive security operations management to monitor fleets and patrols in real time.',
      heading: 'Vehicle Tracking',
      intro: 'We provide vehicle tracking devices, tracking software and comprehensive security operations management systems, enabling real-time fleet and patrol monitoring and improved response efficiency.',
      features: [
        'GPS tracking devices for vehicles and patrols',
        'Operations monitoring and management software',
        'Reports and performance indicators',
        'Integration with the operations room',
      ],
      faqs: [
        { q: 'Can patrols be tracked in real time?', a: 'Yes, the systems provide real-time tracking of vehicles and patrols.' },
        { q: 'Are performance reports available?', a: 'Yes, the platform provides reports and indicators to measure performance.' },
      ],
    },
  },
  {
    slug: 'communication-systems',
    keywords: 'أنظمة اتصالات, أجهزة لاسلكي, اتصالات أمنية, communication systems, two-way radio',
    ar: {
      name: 'أنظمة الاتصالات',
      title: 'أنظمة الاتصالات اللاسلكية الأمنية | أرتال',
      description: 'توفير أجهزة الاتصالات اللاسلكية وملحقاتها وأنظمة التشغيل المتقدمة لتنسيق سلس بين فرق الأمن.',
      heading: 'أنظمة الاتصالات',
      intro: 'نوفّر أجهزة الاتصالات اللاسلكية وملحقاتها وأنظمة التشغيل المتقدمة، بما يضمن تنسيقاً سلساً وفورياً بين فرق الأمن وغرفة العمليات في الموقع.',
      features: [
        'أجهزة لاسلكي وملحقاتها',
        'أنظمة تشغيل متقدمة',
        'تنسيق فوري بين الفرق',
        'تكامل مع غرفة العمليات',
      ],
      faqs: [
        { q: 'هل توفّرون الأجهزة والملحقات؟', a: 'نعم، نوفّر الأجهزة اللاسلكية وملحقاتها وأنظمة التشغيل.' },
        { q: 'هل تتكامل مع غرفة العمليات؟', a: 'نعم، تتكامل لتنسيق الاتصال بين الفرق والغرفة المركزية.' },
      ],
    },
    en: {
      name: 'Communication Systems',
      title: 'Wireless Security Communication Systems | Artal',
      description: 'Wireless communication devices, accessories and advanced operating systems for seamless coordination between security teams.',
      heading: 'Communication Systems',
      intro: 'We provide wireless communication devices, their accessories and advanced operating systems, ensuring seamless, instant coordination between security teams and the on-site operations room.',
      features: [
        'Two-way radios and accessories',
        'Advanced operating systems',
        'Instant coordination between teams',
        'Integration with the operations room',
      ],
      faqs: [
        { q: 'Do you provide devices and accessories?', a: 'Yes, we provide wireless devices, accessories and operating systems.' },
        { q: 'Do they integrate with the operations room?', a: 'Yes, they integrate to coordinate communication between teams and the central room.' },
      ],
    },
  },
  {
    slug: 'female-security',
    keywords: 'الأمن النسائي, حارسات أمن, محترفات أمن, female security personnel, women security guards',
    ar: {
      name: 'الأمن النسائي',
      title: 'خدمات الأمن النسائي (حارسات مدرّبات) | أرتال',
      description: 'توفير محترفات أمن مدرّبات للمنشآت والفعاليات التي تتطلب خدمات أمنية نسائية متخصّصة، مع مراعاة الخصوصية.',
      heading: 'الأمن النسائي',
      intro: 'نوفّر محترفات أمن مدرّبات للمنشآت والمناسبات التي تتطلب خدمات أمنية متخصّصة، مثل تفتيش السيدات وتنظيم دخول العائلات في المرافق المختلطة، مع مراعاة الخصوصية والاحترافية.',
      features: [
        'حارسات أمن مدرّبات ومؤهّلات',
        'تفتيش السيدات وتنظيم دخول العائلات',
        'مناسبة للمولات والفعاليات والمنشآت المختلطة',
        'مراعاة الخصوصية والذوق العام',
      ],
      faqs: [
        { q: 'متى أحتاج خدمة الأمن النسائي؟', a: 'في المرافق المختلطة والفعاليات التي تتطلب تفتيش السيدات أو تنظيم دخول العائلات.' },
        { q: 'هل الكوادر مدرّبة؟', a: 'نعم، محترفات مدرّبات ومؤهّلات وفق إجراءات العمل المعتمدة.' },
      ],
    },
    en: {
      name: 'Female Security Personnel',
      title: 'Female Security Personnel (Trained) | Artal',
      description: 'Trained female security professionals for facilities and events that require specialized female security services, with respect for privacy.',
      heading: 'Female Security Personnel',
      intro: 'We provide trained female security professionals for facilities and events requiring specialized services, such as screening women and managing family entry in mixed facilities, with respect for privacy and professionalism.',
      features: [
        'Trained and qualified female guards',
        'Screening women and managing family entry',
        'Suitable for malls, events and mixed facilities',
        'Respect for privacy and decorum',
      ],
      faqs: [
        { q: 'When do I need female security?', a: 'In mixed facilities and events that require screening women or managing family entry.' },
        { q: 'Are the personnel trained?', a: 'Yes, trained and qualified professionals following approved operating procedures.' },
      ],
    },
  },
  {
    slug: 'joint-security-management',
    keywords: 'الإدارة الأمنية المشتركة, استشارات أمنية, حلول أمنية, joint security management, security consulting',
    ar: {
      name: 'الإدارة الأمنية المشتركة',
      title: 'الإدارة الأمنية المشتركة وحلول الدعم | أرتال',
      description: 'دعم الحلول الأمنية وإدارة أمنية مشتركة مع العميل لتعزيز الحماية ورفع كفاءة المنظومة الأمنية للمنشأة.',
      heading: 'الإدارة الأمنية المشتركة',
      intro: 'نقدّم خدمة دعم الحلول الأمنية عبر الإدارة الأمنية المشتركة مع العميل، بما يعزّز الحماية ويرفع كفاءة المنظومة الأمنية ويضمن تكامل الإجراءات مع أهداف المنشأة.',
      features: [
        'دعم وإدارة أمنية مشتركة مع العميل',
        'تحسين الإجراءات ورفع الكفاءة',
        'تكامل العنصر البشري والتقني',
        'متابعة وتقارير دورية',
      ],
      faqs: [
        { q: 'ما المقصود بالإدارة الأمنية المشتركة؟', a: 'تعاون أرتال مع فريق العميل لإدارة المنظومة الأمنية ورفع كفاءتها بشكل مشترك.' },
        { q: 'هل تشمل تحسين الإجراءات الحالية؟', a: 'نعم، نراجع الإجراءات ونطوّرها لرفع مستوى الحماية.' },
      ],
    },
    en: {
      name: 'Joint Security Management',
      title: 'Joint Security Management & Support | Artal',
      description: 'Security solutions support and joint security management with the client to enhance protection and improve the facility’s security system.',
      heading: 'Joint Security Management',
      intro: 'We provide security solutions support through joint security management with the client, enhancing protection, improving the efficiency of the security system, and ensuring procedures align with the facility’s objectives.',
      features: [
        'Joint security support and management with the client',
        'Improving procedures and raising efficiency',
        'Integration of human and technical elements',
        'Ongoing follow-up and periodic reporting',
      ],
      faqs: [
        { q: 'What is joint security management?', a: 'Artal collaborates with the client’s team to jointly manage and improve the security system.' },
        { q: 'Does it include improving current procedures?', a: 'Yes, we review and develop procedures to raise the level of protection.' },
      ],
    },
  },
  {
    slug: 'government-relations',
    keywords: 'العلاقات الحكومية, التنسيق الأمني, الجهات الأمنية, government relations, security coordination',
    ar: {
      name: 'العلاقات الحكومية',
      title: 'العلاقات الحكومية والتنسيق الأمني | أرتال',
      description: 'تحمّل المسؤولية الكاملة عن العلاقات الحكومية في المجال الأمني والتنسيق مع الجهات الأمنية المختصّة نيابة عن المنشأة.',
      heading: 'العلاقات الحكومية',
      intro: 'نتحمّل المسؤولية الكاملة عن العلاقات الحكومية في المجال الأمني، والتنسيق مع الجهات الأمنية المختصّة، بما يوفّر على المنشأة عناء المتابعة ويضمن الامتثال للإجراءات الرسمية.',
      features: [
        'التنسيق مع الجهات الأمنية المختصّة',
        'متابعة الإجراءات والمتطلبات الرسمية',
        'دعم الامتثال النظامي',
        'تخفيف العبء الإداري عن المنشأة',
      ],
      faqs: [
        { q: 'ماذا تشمل خدمة العلاقات الحكومية؟', a: 'التنسيق مع الجهات الأمنية ومتابعة الإجراءات الرسمية المتعلقة بالمجال الأمني.' },
        { q: 'هل تساعد في الامتثال النظامي؟', a: 'نعم، نساعد المنشأة على الالتزام بالإجراءات والمتطلبات المعتمدة.' },
      ],
    },
    en: {
      name: 'Government Relations',
      title: 'Government Relations & Security Liaison | Artal',
      description: 'Taking full responsibility for government relations in the security field and coordinating with the relevant security authorities on the facility’s behalf.',
      heading: 'Government Relations',
      intro: 'We take full responsibility for government relations in the security field and coordinate with the relevant security authorities, sparing the facility the follow-up burden and ensuring compliance with official procedures.',
      features: [
        'Coordination with the relevant security authorities',
        'Follow-up on official procedures and requirements',
        'Support for regulatory compliance',
        'Reducing the administrative burden on the facility',
      ],
      faqs: [
        { q: 'What does government relations include?', a: 'Coordination with security authorities and follow-up on official procedures related to the security field.' },
        { q: 'Does it help with regulatory compliance?', a: 'Yes, we help the facility adhere to approved procedures and requirements.' },
      ],
    },
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
