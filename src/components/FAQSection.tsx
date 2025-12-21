import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { QuoteButton } from './QuoteButton';

export function FAQSection() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: language === 'ar' 
        ? 'ما هي الخدمات الأمنية التي تقدمها شركة أرتال؟'
        : 'What security services does Artal provide?',
      answer: language === 'ar'
        ? 'نقدم مجموعة شاملة من الخدمات الأمنية تشمل: الحراسات الأمنية على مدار الساعة، أنظمة المراقبة بالكاميرات، التحكم في الدخول والخروج، الأمن الصناعي، تدريب الكوادر الأمنية، وخدمات مركز التحكم والمراقبة المتطورة.'
        : 'We provide a comprehensive range of security services including: 24/7 security guards, CCTV surveillance systems, access control, industrial security, security training, and advanced control center services.',
    },
    {
      question: language === 'ar'
        ? 'هل الشركة مرخصة رسمياً؟'
        : 'Is the company officially licensed?',
      answer: language === 'ar'
        ? 'نعم، شركة أرتال الموحدة للحراسات الأمنية مرخصة بالكامل من وزارة الداخلية - الهيئة العليا للأمن الصناعي برخصة رقم (361). نحن ملتزمون بجميع المعايير والضوابط الأمنية في المملكة العربية السعودية.'
        : 'Yes, Artal Unified Security Services is fully licensed by the Ministry of Interior - Higher Authority for Industrial Security, License No. (361). We comply with all security standards and regulations in Saudi Arabia.',
    },
    {
      question: language === 'ar'
        ? 'ما الذي يميز شركة أرتال عن الشركات الأخرى؟'
        : 'What distinguishes Artal from other companies?',
      answer: language === 'ar'
        ? 'نتميز بخبرة تزيد عن 15 عاماً في مجال الأمن والسلامة، فريق عمل وطني مؤهل ومدرب، استخدام أحدث التقنيات الأمنية، الالتزام بالمواعيد والجودة، وخدمة عملاء متميزة على مدار الساعة. نركز على بناء علاقات طويلة الأمد مع عملائنا.'
        : 'We are distinguished by over 15 years of experience in security and safety, qualified and trained national workforce, use of latest security technologies, commitment to punctuality and quality, and 24/7 customer service. We focus on building long-term relationships with our clients.',
    },
    {
      question: language === 'ar'
        ? 'ما هي المناطق التي تغطيها خدماتكم؟'
        : 'What areas do your services cover?',
      answer: language === 'ar'
        ? 'نقدم خدماتنا في جميع أنحاء المملكة العربية السعودية، مع تركيز خاص على المنطقة الشرقية (الجبيل، الدمام، الخبر). لدينا القدرة على خدمة المشاريع الكبرى والمنشآت الصناعية في المناطق النائية والصحراوية.'
        : 'We provide our services throughout Saudi Arabia, with special focus on the Eastern Region (Jubail, Dammam, Khobar). We have the capability to serve major projects and industrial facilities in remote and desert areas.',
    },
    {
      question: language === 'ar'
        ? 'هل تقدمون حلول أمنية مخصصة حسب احتياجات العميل؟'
        : 'Do you provide customized security solutions?',
      answer: language === 'ar'
        ? 'بالتأكيد! نؤمن بأن كل عميل له احتياجات فريدة. نقوم بدراسة احتياجاتكم الأمنية بعناية ونصمم حلولاً مخصصة تناسب طبيعة عملكم وميزانيتكم. فريقنا المتخصص جاهز لزيارة موقعكم وتقديم استشارة أمنية مجانية.'
        : 'Absolutely! We believe each client has unique needs. We carefully study your security requirements and design customized solutions that suit your business nature and budget. Our specialized team is ready to visit your site and provide a free security consultation.',
    },
    {
      question: language === 'ar'
        ? 'كيف يمكنني الحصول على عرض سعر؟'
        : 'How can I get a quote?',
      answer: language === 'ar'
        ? 'يمكنكم التواصل معنا عبر الهاتف على الأرقام: 0133449993 أو 0133612002، أو عبر البريد الإلكتروني: info@artalgroup.net، أو عبر واتساب للرد السريع. سنقوم بترتيب زيارة ميدانية وتقديم عرض سعر تفصيلي خلال 24-48 ساعة.'
        : 'You can contact us by phone: 0133449993 or 0133612002, via email: info@artalgroup.net, or through WhatsApp for quick response. We will arrange a site visit and provide a detailed quote within 24-48 hours.',
    },
    {
      question: language === 'ar'
        ? 'هل تقدمون خدمات الصيانة للأنظمة الأمنية؟'
        : 'Do you provide maintenance services for security systems?',
      answer: language === 'ar'
        ? 'نعم، نقدم خدمات صيانة شاملة لجميع الأنظمة الأمنية بما في ذلك: كاميرات المراقبة، أنظمة التحكم في الدخول، أجهزة الإنذار، والاتصالات اللاسلكية. لدينا عقود صيانة دورية ودعم فني على مدار الساعة.'
        : 'Yes, we provide comprehensive maintenance services for all security systems including: CCTV cameras, access control systems, alarm systems, and wireless communications. We offer periodic maintenance contracts and 24/7 technical support.',
    },
    {
      question: language === 'ar'
        ? 'ما هي إجراءات التدريب للحراس الأمنيين؟'
        : 'What are the training procedures for security guards?',
      answer: language === 'ar'
        ? 'جميع حراسنا الأمنيين يخضعون لبرامج تدريبية مكثفة تشمل: الأمن والسلامة، الإسعافات الأولية، التعامل مع الطوارئ، استخدام الأنظمة الأمنية الحديثة، خدمة العملاء، والبروتوكولات الأمنية المتخصصة. نحرص على التدريب المستمر والتطوير الدوري.'
        : 'All our security guards undergo intensive training programs including: security and safety, first aid, emergency response, modern security systems usage, customer service, and specialized security protocols. We ensure continuous training and periodic development.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #EFB621 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#EFB621]/10 px-4 py-2 rounded-full mb-4">
              <HelpCircle className="w-4 h-4 text-[#EFB621]" />
              <span className="text-sm text-[#EFB621]">
                {language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              {language === 'ar' ? 'الأسئلة المتكررة' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar'
                ? 'إجابات على أكثر الأسئلة شيوعاً حول خدماتنا الأمنية'
                : 'Answers to the most common questions about our security services'}
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 50}>
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg text-gray-900 flex-1">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#EFB621] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact CTA */}
        <ScrollReveal direction="up" delay={400}>
          <div className="mt-16 text-center bg-gradient-to-br from-[#EFB621] to-[#d9a41d] rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl md:text-3xl mb-4 text-white">
              {language === 'ar' ? 'لديك سؤال آخر؟' : 'Have Another Question?'}
            </h3>
            <p className="text-white/90 mb-6">
              {language === 'ar'
                ? 'فريقنا جاهز للإجابة على جميع استفساراتكم'
                : 'Our team is ready to answer all your inquiries'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+966133449993"
                className="bg-white text-gray-900 px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg inline-flex items-center gap-2"
              >
                📞 {language === 'ar' ? 'اتصل بنا' : 'Call Us'}
              </a>
              <a
                href="https://wa.me/966133449993"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg inline-flex items-center gap-2"
              >
                💬 {language === 'ar' ? 'واتساب' : 'WhatsApp'}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}