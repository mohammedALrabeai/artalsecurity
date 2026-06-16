import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLanguage = 'en',
}: {
  children: ReactNode;
  initialLanguage?: Language;
}) {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  // Keep state in sync when navigating between locale route trees (/ ↔ /ar)
  useEffect(() => {
    setLanguage(initialLanguage);
  }, [initialLanguage]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

/**
 * Returns a function that prefixes a route path with the active locale.
 * In Arabic, '/careers' → '/ar/careers' and '/' → '/ar'. Anchors (#...) and
 * external links should NOT be passed through this helper.
 */
export function useLocalePath() {
  const { language } = useLanguage();
  return (path: string): string => {
    const clean = path.startsWith('/') ? path : `/${path}`;
    if (language !== 'ar') return clean;
    return clean === '/' ? '/ar' : `/ar${clean}`;
  };
}

/** Strips/adds the /ar prefix to swap a path's locale. */
export function swapLocalePath(pathname: string, target: Language): string {
  const isAr = pathname === '/ar' || pathname.startsWith('/ar/');
  const neutral = isAr ? pathname.replace(/^\/ar/, '') || '/' : pathname;
  if (target === 'ar') return neutral === '/' ? '/ar' : `/ar${neutral}`;
  return neutral;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Language identifier
    'language': 'en',
    
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.experience': 'Experience',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',
    'company.name': 'Artal Unified Security Service Co.',
    'company.tagline': 'Professional Security Solutions',

    // Hero
    'hero.badge': 'License No. 361 - Ministry of Interior',
    'hero.title': 'Artal Unified Security Services',
    'hero.description': 'A group of companies working in several different activities, providing professional security and safety services with high competencies and accuracy of achievement to protect lives, properties and facilities.',
    'hero.cta.services': 'Explore Our Services',
    'hero.cta.contact': 'Contact Us',

    // About
    'about.badge': 'About Us',
    'about.title': 'Artal Unified Security Service',
    'about.description1': 'A group of companies working in several different activities, including the activity of security guarding under the name of Artal Unified Security Services Co. Under the permission of the Ministry of Interior High Authority for Industrial Security – License No. (361).',
    'about.description2': 'Over consecutive years, Artal Co. has proven its efficiency and professionalism in providing all security and safety services. Since the moment of foundation of Artal group, it took a successful path in the Kingdom of Saudi Arabia, through cadres with experience, high competencies, accuracy of achievement and upgrade the level of service to protect lives, properties and facilities, which working all the time to secure them.',
    'about.stat1.value': 'License #361',
    'about.stat1.label': 'Licensed by Ministry of Interior',
    'about.stat2.value': 'National Cadres',
    'about.stat2.label': 'Highly Qualified',
    'about.stat3.value': 'Security Services',
    'about.stat3.label': 'Professional',
    'about.years': 'Years of',
    'about.excellence': 'Excellence',

    // Vision & Mission
    'vision.badge': 'Strategic Planning',
    'vision.title': 'Our Vision',
    'vision.description': 'To be one of the best-performing companies in the field of security and safety by harnessing our experience, capabilities and competencies represented in highly qualified and distinct national cadres to find solutions for clients and reach results that guarantee continuity and success as well as to reach the highest levels of service to improve community security and develop security awareness.',
    'mission.title': 'Our Message',
    'mission.description': 'Harnessing all efforts and capabilities to serve the ultimate goal, which is the spread of security in society, the reduction of crime rates, and the creation of new job opportunities in the Saudi labor market in a promising field that brings prosperity and greater stability to the individual and society.',

    // Experience
    'experience.badge': 'Our Expertise',
    'experience.title': 'Our Experiences',
    'experience.description': 'The company has great practical experience in managing and operating all kinds of security operations',
    'exp.factories': 'Factories Security',
    'exp.factories.desc': 'Chemical and petrochemical industrial facilities',
    'exp.oil': 'Oil Facilities',
    'exp.oil.desc': 'Security of oil facilities and operations',
    'exp.residential': 'Residential Security',
    'exp.residential.desc': 'Security of residential facilities and buildings',
    'exp.construction': 'Construction Projects',
    'exp.construction.desc': 'Security of work areas and construction projects',
    'exp.remote': 'Remote Installations',
    'exp.remote.desc': 'Security of vital installations in remote and desert areas',
    'exp.warehouses': 'Warehouses Security',
    'exp.warehouses.desc': 'Security of warehouses, shipping and launch centers',
    'exp.commercial': 'Commercial Security',
    'exp.commercial.desc': 'Security of markets and malls',

    // Goals
    'goals.badge': 'Our Goals',
    'goals.title': 'Strategic Objectives',
    'goals.description': 'We aim to provide excellence in security services through strategic planning and professional execution',
    'goal1.title': 'High-Quality Service',
    'goal1.desc': 'Providing a high-quality and technical security service in proportion to the needs of our clients.',
    'goal2.title': 'Excellence in Performance',
    'goal2.desc': 'Excellence in administrative and field performance to achieve a successful strategy with our clients.',
    'goal3.title': 'Client Partnership',
    'goal3.desc': 'Considering our clients as partners in success and the basis of support to continue providing better security services.',
    'goal4.title': 'Professional Development',
    'goal4.desc': 'Developing our cadres working in the security field and upgrading their professional level.',
    'goal5.title': 'Global Standards',
    'goal5.desc': 'Keeping abreast of developments in the security and safety industry in the world from theoretical and industrial sides.',

    // Security Strategies
    'strategies.badge': 'Strategic Planning',
    'strategies.title': 'Security Strategies and Plans',
    'strategies.description': 'Comprehensive security planning and implementation for complete facility protection',
    'strategy1.title': 'Field Survey',
    'strategy1.desc': 'Thorough field survey of the facility to identify gates, entrances, emergency exits, and required personnel.',
    'strategy2.title': 'Site Analysis',
    'strategy2.desc': 'Comprehensive site study to analyze nature, activity, area, surrounding locations, and audience type.',
    'strategy3.title': 'Risk Assessment',
    'strategy3.desc': 'Determining potential and expected security risks, type of risk, and level of protection required.',
    'strategy4.title': 'Traffic Planning',
    'strategy4.desc': 'Traffic plan and follow up the movement of individuals and vehicles when necessary.',
    'strategy5.title': 'Safety Measures',
    'strategy5.desc': 'Ensure safety means including smoke detectors, alarm bells, firefighting equipment, and emergency doors.',
    'strategy6.title': 'Surveillance Systems',
    'strategy6.desc': 'Ensure surveillance cameras are available in open areas that are easy to steal or enter.',
    'strategy7.title': 'Facility Protection',
    'strategy7.desc': 'Monitor entrances and exits for hazardous materials, warehouses, workshops, and internal areas.',
    'strategies.badge.footer': '24/7',
    'strategies.coverage': 'Security Coverage',

    // Security Department
    'department.badge': 'Training & Development',
    'department.title': 'Security and Safety Department',
    'department.description': 'Professional training and development programs to ensure the highest standards of security service',
    'dept1.title': 'Training & Qualification',
    'dept1.desc': 'Qualifying and training individuals to develop a sense of security in the workplace and deal with the public.',
    'dept2.title': 'Emergency Response',
    'dept2.desc': 'Qualifying individuals and supervisors to deal with first aid, emergency, fire and evacuation cases.',
    'dept3.title': 'Disciplinary Compliance',
    'dept3.desc': 'Directing employees and supervisors to discipline and abide by direct reporting for emergency situations.',
    'dept4.title': 'Access Control',
    'dept4.desc': 'Implementation of entry and exit regulations for visitors, workers, materials, goods and daily activities.',
    'dept5.title': 'Technology Training',
    'dept5.desc': 'Training security guards to use modern security devices and surveillance systems.',
    'dept.footer.title': 'Field Survey & Implementation',
    'dept.footer.desc': 'Participate in the field survey of the site and follow it up with the Operations Department to ensure the implementation of the security plan. Our team works closely with clients to understand specific requirements and deliver customized security solutions.',

    // Operations Control
    'operations.badge': '24/7 Monitoring',
    'operations.title': 'Operation Control Center',
    'operations.description': 'Advanced operations management center with modern technologies and experienced specialists',
    'operations.intro': "In the company's operations management center, all modern technologies, mechanisms and devices have been harnessed so that it is managed by specialists in the field of security operations management in several areas with their previous military and security experience, combined with the skills and experience of the private sector.",
    'ops1.title': '24/7 Operations',
    'ops1.desc': 'Operations Control Center working around the clock for continuous monitoring and support.',
    'ops2.title': 'Modern Technology',
    'ops2.desc': 'All modern technologies, mechanisms and devices managed by security operations specialists.',
    'ops3.title': 'Daily Reports',
    'ops3.desc': 'Follow up daily records and reports for all sites with personal follow-up and documentation.',
    'ops4.title': 'Site Coverage',
    'ops4.desc': 'Securing sites with guards upon shortage or absence with substitute guards or coverage support.',
    'ops5.title': 'Instant Updates',
    'ops5.desc': 'Inform operations supervisor and security manager of field events and keep them updated.',
    'ops6.title': 'Client Communication',
    'ops6.desc': 'Direct follow-up with client or facility official representative for any notices or directives.',
    'ops.live': 'Live Monitoring',

    // Services
    'services.badge': 'What We Offer',
    'services.title': 'Our Services',
    'services.description': 'Comprehensive security solutions with supportive and enhanced services for complete protection',
    'service1.title': 'Security Vehicles Rental',
    'service1.desc': 'Equipped with full security equipment such as communication devices, GPS devices, security lights and horns. Available in three categories according to client needs.',
    'service2.title': 'Safety & Firefighting Systems',
    'service2.desc': 'Specialized department working in safety systems, firefighting systems and fire alarms (supply, installation and maintenance).',
    'service3.title': 'CCTV & Access Control',
    'service3.desc': 'Monitoring and control systems, entry and exit control systems, and facilities management (supply, installation and maintenance).',
    'service4.title': 'Joint Security Management',
    'service4.desc': 'Providing security solutions support service for joint security management with the client for enhanced protection.',
    'service5.title': 'Vehicle Tracking',
    'service5.desc': 'Vehicle tracking devices, tracking software and comprehensive security operations management systems.',
    'service6.title': 'Communication Systems',
    'service6.desc': 'Providing wireless communication devices, accessories and advanced operating systems for seamless coordination.',
    'service7.title': 'Female Security Personnel',
    'service7.desc': 'Providing trained female security professionals for facilities requiring specialized security services.',
    'service8.title': 'Government Relations',
    'service8.desc': 'Full responsibility for governmental relations in security field and coordination with relevant security authorities.',
    'services.cta.text': 'Need a customized security solution? We\'re here to help.',
    'services.cta.button': 'Get in Touch',

    // Projects
    'projects.badge': 'Track Record',
    'projects.title': 'Our Practical Experience for Mega Projects',
    'projects.description': 'Successfully delivered security solutions for major projects across Saudi Arabia',
    'project1.title': 'Industrial Project',
    'project1.desc': 'Major facility security implementation',
    'project2.title': 'Commercial Complex',
    'project2.desc': 'Comprehensive security coverage',
    'project3.title': 'Residential Development',
    'project3.desc': '24/7 security operations',
    'projects.stat1': '100+',
    'projects.stat1.label': 'Completed Projects',
    'projects.stat2': '100%',
    'projects.stat2.label': 'Client Satisfaction',
    'projects.stat3': '50+',
    'projects.stat3.label': 'Active Sites',
    'projects.stat4': '24/7',
    'projects.stat4.label': 'Operations',

    // Certificates
    'certificates.badge': 'Accreditations',
    'certificates.title': 'Certificates',
    'certificates.description': 'Officially licensed and certified to provide security services in Saudi Arabia',
    'cert.main.title': 'Ministry of Interior License',
    'cert.main.subtitle': 'High Authority for Industrial Security',
    'cert.main.license': 'License No. 361',
    'cert1.label': 'Official Certification',
    'cert2.label': 'Accreditation Document',
    'cert3.label': 'Quality Certification',
    'cert.footer.title': 'Fully Compliant & Certified',
    'cert.footer.desc': 'All our operations are conducted in full compliance with Saudi Arabian security regulations and standards. We maintain the highest levels of professionalism and accountability in all our services.',

    // Maintenance
    'maintenance.badge': 'Technical Services',
    'maintenance.title': 'Part of Our Services',
    'maintenance.description': 'Maintenance, installation and supply of cameras, surveillance devices, access control systems and safety equipment',
    'maintenance.intro.title': 'Professional Installation & Maintenance',
    'maintenance.intro.desc': 'Our technical team provides comprehensive installation, maintenance, and supply services for all types of security and surveillance equipment. We ensure all systems operate at peak performance.',
    'maint1.title': 'CCTV Systems',
    'maint1.desc': 'Professional installation and maintenance of surveillance camera systems',
    'maint2.title': 'Access Control',
    'maint2.desc': 'Entry and exit control systems for secure facility management',
    'maint3.title': 'Safety Equipment',
    'maint3.desc': 'Supply and maintenance of all safety and security equipment',
    'maint4.title': 'Monitoring Devices',
    'maint4.desc': 'Advanced surveillance devices and monitoring solutions',
    'maint.supply': 'Supply',
    'maint.installation': 'Installation',
    'maint.maintenance': 'Maintenance',

    // Safety & Quality
    'safety.badge': 'Our Core Values',
    'safety.title': 'Safety First, Quality Must',
    'safety.description': 'Our commitment to safety and quality is unwavering. We maintain the highest standards in all our operations to protect lives, properties, and facilities.',
    'safety.imageAlt': 'Professional security team with company vehicle',
    'safety.motto1': 'SAFETY FIRST',
    'safety.motto2': 'QUALITY MUST',
    'safety.value1.title': 'Safety First Approach',
    'safety.value1.desc': 'Safety is our top priority in every operation. We implement strict safety protocols and procedures to ensure the protection of all personnel and assets.',
    'safety.value2.title': 'Quality Assurance',
    'safety.value2.desc': 'We maintain exceptional quality standards in all our services, ensuring professional and reliable security solutions for our clients.',
    'safety.value3.title': 'Professional Team',
    'safety.value3.desc': 'Our highly trained security personnel are equipped with the latest skills and knowledge to handle any security situation professionally.',
    'safety.value4.title': 'Certified Operations',
    'safety.value4.desc': 'All our operations are fully certified and compliant with Saudi Arabian security regulations and international standards.',
    'safety.stat1': 'Safety Compliance',
    'safety.stat2': 'Operations',
    'safety.stat3': 'Licensed & Certified',
    'safety.stat4': 'Quality Standards',

    // Footer
    'footer.description': 'Professional security and safety services with high competencies to protect lives, properties and facilities across Saudi Arabia.',
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.contact': 'Contact Us',
    'footer.about': 'About Us',
    'footer.vision': 'Our Vision',
    'footer.experience': 'Experience',
    'footer.certificates': 'Certificates',
    'footer.security': 'Security Services',
    'footer.cctv': 'CCTV Systems',
    'footer.access': 'Access Control',
    'footer.training': 'Training',
    'footer.rights': 'Artal Unified Security Services. All rights reserved.',
    'footer.license': 'License No.',
    'footer.ministry': 'Ministry of Interior',
  },
  ar: {
    // Language identifier
    'language': 'ar',
    
    // Header
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.experience': 'خبراتنا',
    'nav.careers': 'الوظائف',
    'nav.contact': 'اتصل بنا',
    'company.name': 'شركة ارتال الموحدة للحراسات الامنية',
    'company.tagline': 'حلول أمنية احترافية',

    // Hero
    'hero.badge': 'ترخيص رقم ٣٦١ - وزارة الداخلية',
    'hero.title': 'أرتال خدمة الأمن الموحدة',
    'hero.description': 'مجموعة شركات تعمل في عدة أنشطة مختلفة، تقدم خدمات أمنية وسلامة احترافية بكفاءات عالية ودقة إنجاز لحماية الأرواح والممتلكات والمنشآت.',
    'hero.cta.services': 'استكشف خدماتنا',
    'hero.cta.contact': 'اتصل بنا',

    // About
    'about.badge': 'من نحن',
    'about.title': 'أرتال خدمة الأمن الموحدة',
    'about.description1': 'مجموعة شركات تعمل في عدة أنشطة مختلفة ومنها نشاط الحراسات الأمنية تحت مسمى شركة أرتال الموحدة للحراسات الأمنية المدنية الخاصة بموجب تصريح وزارة الداخلية – الهيئة العليا للأمن الصناعي – ترخيص رقم (٣٦١).',
    'about.description2': 'على مدى سنوات متتالية أثبتت شركة أرتال الموحدة للحراسات الأمنية مدى كفاءتها واحترافيتها في تقديم كافة خدمات الأمن والسلامة. فمنذ لحظة تأسيس مجموعة شركات أرتال وهي تسلك طريق ملئ بالنجاحات على مستوى المملكة العربية السعودية النابعة من كوادر لديها الخبرات والكفاءات العالية ودقة الإنجاز والرقي بمستوى الخدمة لحماية الأرواح والممتلكات والمنشآت التي نعمل على مدار الساعة لتأمينها.',
    'about.stat1.value': 'ترخيص #٣٦١',
    'about.stat1.label': 'مرخص من وزارة الداخلية',
    'about.stat2.value': 'كوادر وطنية',
    'about.stat2.label': 'ذوي كفاءة عالية',
    'about.stat3.value': 'خدمات أمنية',
    'about.stat3.label': 'احترافية',
    'about.years': 'سنوات من',
    'about.excellence': 'التميز',

    // Vision & Mission
    'vision.badge': 'التخطيط الاستراتيجي',
    'vision.title': 'رؤيتنا',
    'vision.description': 'أن نكون من الشركات الأفضل أداءاً في مجال الأمن والسلامة وذلك بتسخير خبراتنا وإمكانياتنا وكفاءاتنا الممثلة في الكوادر الوطنية ذوي الكفاءة العالية والمميزين في أداء عملهم لإيجاد الحلول للعملاء والوصول الى نتائج تضمن الاستمرارية والنجاح وكذلك للوصول الى أعلى مستويات الخدمة للارتقاء بالأمن المجتمعي وتنمية الوعي الأمني.',
    'mission.title': 'رسالتنا',
    'mission.description': 'تسخير كافة الجهود والإمكانيات بما يخدم الهدف الأسمى وهو انتشار الأمن في المجتمع والحد من نسبة الجريمة، وتوفير فرص عمل جديدة في سوق العمل السعودي في مجال واعد يعود على الفرد والمجتمع بالازدهار والمزيد من الاستقرار.',

    // Experience
    'experience.badge': 'خبراتنا',
    'experience.title': 'خبراتنا',
    'experience.description': 'تمتلك الشركة خبرة عملية كبيرة في إدارة وتشغيل العمليات الأمنية بأنواعها',
    'exp.factories': 'أمن المصانع',
    'exp.factories.desc': 'المنشآت الصناعية الكيميائية والبتروكيميائية',
    'exp.oil': 'المنشآت النفطية',
    'exp.oil.desc': 'أمن المنشآت والعمليات النفطية',
    'exp.residential': 'الأمن السكني',
    'exp.residential.desc': 'أمن المنشآت والمباني السكنية',
    'exp.construction': 'المشاريع الإنشائية',
    'exp.construction.desc': 'أمن مناطق العمل والمشاريع الإنشائية',
    'exp.remote': 'المناطق النائية',
    'exp.remote.desc': 'أمن المنشآت الحيوية في المناطق النائية والصحراوية',
    'exp.warehouses': 'أمن المستودعات',
    'exp.warehouses.desc': 'أمن المستودعات والمخازن ومراكز الشحن والانطلاق',
    'exp.commercial': 'الأمن التجاري',
    'exp.commercial.desc': 'أمن الأسواق والمجمعات التجارية',

    // Goals
    'goals.badge': 'أهدافنا',
    'goals.title': 'الأهداف الاستراتيجية',
    'goals.description': 'نهدف لتقديم التميز في الخدمات الأمنية من خلال التخطيط الاستراتيجي والتنفيذ الاحترافي',
    'goal1.title': 'خدمة عالية الجودة',
    'goal1.desc': 'تقديم خدمة أمنية ذات جودة وتقنية عالية بما يتناسب مع احتياج عملائنا.',
    'goal2.title': 'التميز في الأداء',
    'goal2.desc': 'التميز في الأداء الإداري والميداني لتحقيق استراتيجية ناجحة مع عملائنا.',
    'goal3.title': 'شراكة العملاء',
    'goal3.desc': 'اعتبار عملاءنا شركاء في النجاح وأساس الدعم لمواصلة تقديم خدمات أمنية أفضل.',
    'goal4.title': 'التطوير المهني',
    'goal4.desc': 'تطوير كوادرنا العاملة في المجال الأمني ورفع مستوى المهنية لديهم.',
    'goal5.title': 'المعايير العالمية',
    'goal5.desc': 'مواكبة ومتابعة المستجدات في صناعة الأمن والسلامة في العالم من الناحية النظرية والصناعية.',

    // Security Strategies
    'strategies.badge': 'التخطيط الاستراتيجي',
    'strategies.title': 'الاستراتيجيات والخطط الأمنية',
    'strategies.description': 'تخطيط أمني شامل وتنفيذ متكامل لحماية المنشآت بشكل كامل',
    'strategy1.title': 'المسح الميداني',
    'strategy1.desc': 'القيام بمسح ميداني دقيق للمنشأة لمعرفة البوابات والمنافذ ومخارج الطوارئ والأفراد المطلوبين.',
    'strategy2.title': 'تحليل الموقع',
    'strategy2.desc': 'عمل دراسة شاملة للموقع من حيث طبيعة الموقع ونشاطه والمنطقة والمناطق المحيطة ونمط الجمهور.',
    'strategy3.title': 'تقييم المخاطر',
    'strategy3.desc': 'وضع الأخطار الأمنية المحتملة والمتوقعة ونوعها ومستوى الحماية المطلوب توفيرها.',
    'strategy4.title': 'تخطيط المرور',
    'strategy4.desc': 'خطة حركة السير المرورية ومتابعة حركة الأفراد والمركبات في حال لزم الأمر.',
    'strategy5.title': 'وسائل السلامة',
    'strategy5.desc': 'التأكد من وجود وسائل السلامة كاشف الدخان وجرس الإنذار ومعدات الإطفاء وأبواب الطوارئ.',
    'strategy6.title': 'أنظمة المراقبة',
    'strategy6.desc': 'التأكد من توفر كاميرات المراقبة في الأماكن المكشوفة وسهلة السرقة أو الدخول منها.',
    'strategy7.title': 'حماية المنشآت',
    'strategy7.desc': 'مراقبة مداخل ومنافذ المواد الخطرة والمستودعات والورش والمخازن الداخلية.',
    'strategies.badge.footer': '٢٤/٧',
    'strategies.coverage': 'التغطية الأمنية',

    // Security Department
    'department.badge': 'التدريب والتطوير',
    'department.title': 'إدارة الأمن والسلامة',
    'department.description': 'برامج تدريب وتطوير احترافية لضمان أعلى معايير الخدمة الأمنية',
    'dept1.title': 'التأهيل والتدريب',
    'dept1.desc': 'تأهيل وتدريب الأفراد لتنمية الشعور بالأمان في مكان العمل والتعامل مع الجمهور.',
    'dept2.title': 'الاستجابة للطوارئ',
    'dept2.desc': 'تأهيل الأفراد والمشرفين للتعامل مع حالات الإسعافات الأولية والطوارئ والإطفاء والإخلاء.',
    'dept3.title': 'الامتثال الانضباطي',
    'dept3.desc': 'توجيه الموظفين والمشرفين بالانضباط والالتزام بالبلاغ المباشر لاتخاذ الإجراء المناسب.',
    'dept4.title': 'التحكم في الدخول',
    'dept4.desc': 'تنفيذ ضوابط الدخول والخروج للزوار والعاملين والمواد والبضائع والأنشطة اليومية.',
    'dept5.title': 'التدريب التقني',
    'dept5.desc': 'تدريب رجال الأمن على استخدام الأجهزة الأمنية الحديثة وأنظمة المراقبة.',
    'dept.footer.title': 'المسح الميداني والتنفيذ',
    'dept.footer.desc': 'المشاركة في المسح الميداني للموقع ومتابعته مع إدارة العمليات للتأكد من تنفيذ الخطة الأمنية. يعمل فريقنا بشكل وثيق مع العملاء لفهم المتطلبات المحددة وتقديم حلول أمنية مخصصة.',

    // Operations Control
    'operations.badge': 'المراقبة ٢٤/٧',
    'operations.title': 'مركز التحكم في العمليات',
    'operations.description': 'مركز إدارة عمليات متقدم بتقنيات حديثة ومتخصصين ذوي خبرة',
    'operations.intro': 'تم في مركز إدارة العمليات بالشركة تسخير كافة التقنيات والآليات والأجهزة الحديثة بحيث يدار من قبل متخصصين في مجال إدارة العمليات الأمنية في عدة مجالات بخبراتهم العسكرية والأمنية السابقة ومهارات وخبرات القطاع الخاص.',
    'ops1.title': 'العمليات ٢٤/٧',
    'ops1.desc': 'مركز مراقبة العمليات يعمل على مدار الساعة للمراقبة والدعم المستمر.',
    'ops2.title': 'التقنية الحديثة',
    'ops2.desc': 'كافة التقنيات والآليات والأجهزة الحديثة التي يديرها متخصصون في العمليات الأمنية.',
    'ops3.title': 'التقارير اليومية',
    'ops3.desc': 'متابعة السجلات اليومية والتقارير لجميع المواقع مع المتابعة الشخصية والتوثيق.',
    'ops4.title': 'تغطية المواقع',
    'ops4.desc': 'تأمين المواقع بحراس عند النقص أو الغياب مع حراس بديلين أو دم التغطية.',
    'ops5.title': 'التحديثات الفورية',
    'ops5.desc': 'إبلاغ مشرف العمليات ومدير الأمن بأحداث الميدان وإطلاعهم على المستجدات.',
    'ops6.title': 'التواصل مع العملاء',
    'ops6.desc': 'المتابعة المباشرة مع العميل أو الممثل الرسمي للمنشأة لأي إشعارات أو توجيهات.',
    'ops.live': 'المراقبة المباشرة',

    // Services
    'services.badge': 'ما نقدمه',
    'services.title': 'خدماتنا',
    'services.description': 'حلول أمنية شاملة مع خدمات داعمة ومعززة للحماية الكاملة',
    'service1.title': 'تأجير السيارات الأمنية',
    'service1.desc': 'مجهزة بكامل المعدات الأمنية مثل أجهزة الاتصالات وتحديد المواقع والمصابيح والأبواق الأمنية. متوفرة في ثلاث فئات حسب حاجة العميل.',
    'service2.title': 'أنظمة السلامة والإطفاء',
    'service2.desc': 'قسم متخصص يعمل في أنظمة السلامة وأنظمة الإطفاء وإنذار الحريق (توريد وتركيب وصيانة).',
    'service3.title': 'كاميرات المراقبة والتحكم',
    'service3.desc': 'أنظمة المراقبة والتحكم وأنظمة التحكم في الدخول والخروج وإدارة المرافق (توريد وتركيب وصيانة).',
    'service4.title': 'الإدارة الأمنية المشتركة',
    'service4.desc': 'تقديم خدمة دعم الحلول الأمنية للإدارة الأمنية المشتركة مع العميل للحماية المعززة.',
    'service5.title': 'تتبع المركبات',
    'service5.desc': 'أجهزة تتبع المركبات وبرامج التتبع وأنظمة إدارة العمليات الأمنية الشاملة.',
    'service6.title': 'أنظمة الاتصالات',
    'service6.desc': 'توفير أجهزة الاتصالات اللاسلكية وملحقاتها وأنظمة التشغيل المتقدمة للتنسيق السلس.',
    'service7.title': 'الأمن النسائي',
    'service7.desc': 'توفير محترفات أمن مدربات للمنشآت التي تتطلب خدمات أمنية متخصصة.',
    'service8.title': 'العلاقات الحكومية',
    'service8.desc': 'المسؤولية الكاملة عن العلاقات الحكومية في المجال الأمني والتنسيق مع الجهات الأمنية.',
    'services.cta.text': 'هل تحتاج لحل أمني مخصص؟ نحن هنا للمساعدة.',
    'services.cta.button': 'تواصل معنا',

    // Projects
    'projects.badge': 'سجل الإنجازات',
    'projects.title': 'خبرتنا العملية للمشاريع الضخمة',
    'projects.description': 'نجحنا في تقديم حلول أمنية لمشاريع كبرى في جميع أنحاء المملكة العربية السعودية',
    'project1.title': 'مشروع صناعي',
    'project1.desc': 'تنفيذ أمني لمنشأة كبرى',
    'project2.title': 'مجمع تجاري',
    'project2.desc': 'تغطية أمنية شاملة',
    'project3.title': 'مشروع سكني',
    'project3.desc': 'عمليات أمنية ٢٤/٧',
    'projects.stat1': '+٠٠٠',
    'projects.stat1.label': 'مشروع مكتمل',
    'projects.stat2': '٠٠٠٪',
    'projects.stat2.label': 'رضا العملاء',
    'projects.stat3': '+٥٠',
    'projects.stat3.label': 'موقع نشط',
    'projects.stat4': '٢٤/٧',
    'projects.stat4.label': 'العمليات',

    // Certificates
    'certificates.badge': 'الاعتمادات',
    'certificates.title': 'الشهادات',
    'certificates.description': 'مرخص ومعتمد رسمياً لتقديم الخدمات الأمنية في المملكة العربية السعودية',
    'cert.main.title': 'ترخيص وزارة الداخلية',
    'cert.main.subtitle': 'الهيئة العليا للأمن الصناعي',
    'cert.main.license': 'ترخيص رقم ٣٦١',
    'cert1.label': 'شهادة رسمية',
    'cert2.label': 'وثيقة اعتماد',
    'cert3.label': 'شهادة الجودة',
    'cert.footer.title': 'ممتثل ومعتمد بالكامل',
    'cert.footer.desc': 'يتم تنفيذ جميع عملياتنا بالامتثال الكامل للوائح والمعايير الأمنية في المملكة العربية السعودية. نحافظ على أعلى مستويات الاحترافية والمساءلة في جميع خدماتنا.',

    // Maintenance
    'maintenance.badge': 'الخدمات الفنية',
    'maintenance.title': 'جزء من خدماتنا',
    'maintenance.description': 'صيانة وتركيب وتوريد الكاميرات وأجهزة المراقبة وأنظمة التحكم في الدخول ومعدات السلامة',
    'maintenance.intro.title': 'التركيب والصيانة الاحترافية',
    'maintenance.intro.desc': 'يقدم فريقنا الفني خدمات شاملة للتركيب والصيانة والتوريد لجميع أنواع معدات الأمن والمراقبة. نضمن تشغيل جميع الأنظمة بأقصى كفاءة.',
    'maint1.title': 'أنظمة كاميرات المراقبة',
    'maint1.desc': 'تركيب وصيانة احترافية لأنظمة كاميرات المراقبة',
    'maint2.title': 'التحكم في الدول',
    'maint2.desc': 'أنظمة التحكم في الدخول والخروج لإدارة آمنة للمنشآت',
    'maint3.title': 'معدات السلامة',
    'maint3.desc': 'توريد وصيانة جميع معدات السلامة والأمن',
    'maint4.title': 'أجهزة المراقبة',
    'maint4.desc': 'أجهزة مراقبة متقدمة وحلول مراقبة متطورة',
    'maint.supply': 'التوريد',
    'maint.installation': 'التركيب',
    'maint.maintenance': 'الصيانة',

    // Safety & Quality
    'safety.badge': 'قيمنا الأساسية',
    'safety.title': 'الأمان أولوية، الجودة ضرورية',
    'safety.description': 'التزامنا بالأمان والجودة غير متناهي. نحافظ على أعلى معايير في جميع عملياتنا لحماية الأرواح والممتلكات والمنشآت.',
    'safety.imageAlt': 'فريق أمن محترف مع سيارة الشركة',
    'safety.motto1': 'الأمان أولوية',
    'safety.motto2': 'الجودة ضرورية',
    'safety.value1.title': 'منهجية الأمان الأولوية',
    'safety.value1.desc': 'الأمان هو أولويتنا في كل عملية. نطبق إجراءات الأمان الصارمة والإجراءات لضمان حماية جميع الموظفين والممتلكات.',
    'safety.value2.title': 'ضمان الجودة',
    'safety.value2.desc': 'نحافظ على معايير جودة استثنائية في جميع خدماتنا، مما يضمن حلول أمنية محترفة وموثوقة لعملائنا.',
    'safety.value3.title': 'فريق محترف',
    'safety.value3.desc': 'فريقنا من حراس أمن مدربين على أحدث المهارات والمعرفة لمعالجة أي موقف أمني بشكل محترف.',
    'safety.value4.title': 'عمليات معتمدة',
    'safety.value4.desc': 'جميع عملياتنا معتمدة تماماً ومتزامنة مع لوائح الأمن في المملكة العربية السعودية والمعايير الدولية.',
    'safety.stat1': 'امتثال للأمان',
    'safety.stat2': 'العمليات',
    'safety.stat3': 'مرخص و معتمد',
    'safety.stat4': 'معايير الجودة',

    // Footer
    'footer.description': 'خدمات أمنية وسلامة احترافية بكفاءات عالية لحماية الأرواح والممتلكات والمنشآت في جميع أنحاء المملكة العربية السعودية.',
    'footer.company': 'الشركة',
    'footer.services': 'الخدمات',
    'footer.contact': 'اتصل بنا',
    'footer.about': 'من نحن',
    'footer.vision': 'رؤيتنا',
    'footer.experience': 'خبراتنا',
    'footer.certificates': 'الشهادات',
    'footer.security': 'الخدمات الأمنية',
    'footer.cctv': 'كاميرات المراقبة',
    'footer.access': 'التحكم في الدخول',
    'footer.training': 'التدريب',
    'footer.rights': 'أرتال الموحدة للحراسات الأمنية. جميع الحقوق محفوظة.',
    'footer.license': 'ترخيص رقم',
    'footer.ministry': 'وزارة الداخلية',
  },
};