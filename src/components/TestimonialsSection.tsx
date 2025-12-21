import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

export function TestimonialsSection() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: language === 'ar' ? 'شركة البتروكيماويات الوطنية' : 'National Petrochemicals Co.',
      position: language === 'ar' ? 'مدير الأمن' : 'Security Manager',
      content: language === 'ar' 
        ? 'خدمات أمنية استثنائية مع فريق محترف. التزامهم بالجودة والمعايير العالية جعلهم شريكنا الموثوق لأكثر من 5 سنوات.'
        : 'Exceptional security services with a professional team. Their commitment to quality and high standards made them our trusted partner for over 5 years.',
      rating: 5,
      image: '👔',
    },
    {
      name: language === 'ar' ? 'المجمع التجاري الشرقي' : 'Eastern Commercial Complex',
      position: language === 'ar' ? 'مدير العمليات' : 'Operations Manager',
      content: language === 'ar'
        ? 'أفضل شركة أمن تعاملنا معها. الاحترافية والالتزام بالمواعيد والجودة العالية في الخدمة. نوصي بهم بشدة.'
        : 'The best security company we have dealt with. Professionalism, punctuality, and high quality service. We highly recommend them.',
      rating: 5,
      image: '🏢',
    },
    {
      name: language === 'ar' ? 'مصنع الجبيل للصناعات' : 'Jubail Industries Factory',
      position: language === 'ar' ? 'المدير التنفيذي' : 'CEO',
      content: language === 'ar'
        ? 'تعاون ممتاز على مدار السنين. فريق أمني مدرب ومعدات حديثة. الأمان والطمأنينة مع أرتال.'
        : 'Excellent cooperation over the years. Trained security team and modern equipment. Safety and peace of mind with Artal.',
      rating: 5,
      image: '🏭',
    },
    {
      name: language === 'ar' ? 'مشروع الأبراج السكنية' : 'Residential Towers Project',
      position: language === 'ar' ? 'مدير المشروع' : 'Project Manager',
      content: language === 'ar'
        ? 'خدمة أمنية متكاملة على مدار الساعة. فريق محترف ومتعاون. سعداء جداً بالتعاون معهم.'
        : 'Complete 24/7 security service. Professional and cooperative team. Very happy to work with them.',
      rating: 5,
      image: '🏗️',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#EFB621] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#EFB621]/10 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-[#EFB621]" />
              <span className="text-sm text-[#EFB621]">
                {language === 'ar' ? 'آراء العملاء' : 'Client Testimonials'}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              {language === 'ar' ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar'
                ? 'نفخر بثقة عملائنا ورضاهم التام عن خدماتنا الأمنية المتميزة'
                : 'We are proud of our clients\' trust and complete satisfaction with our distinguished security services'}
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Carousel */}
        <ScrollReveal direction="up" delay={200}>
          <div className="relative max-w-5xl mx-auto">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-5">
                <Quote className="w-32 h-32 text-[#EFB621]" />
              </div>

              {/* Content */}
              <div className="relative">
                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#EFB621] text-[#EFB621]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#EFB621] to-[#d9a41d] rounded-full flex items-center justify-center text-3xl shadow-lg">
                    {testimonials[currentIndex].image}
                  </div>
                  <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                    <h4 className="text-lg text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white hover:bg-[#EFB621] text-gray-600 hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label={language === 'ar' ? 'السابق' : 'Previous'}
              >
                {language === 'ar' ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white hover:bg-[#EFB621] text-gray-600 hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label={language === 'ar' ? 'التالي' : 'Next'}
              >
                {language === 'ar' ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-[#EFB621]' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Row */}
        <ScrollReveal direction="up" delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '500+', label: language === 'ar' ? 'عميل راضٍ' : 'Happy Clients' },
              { value: '100%', label: language === 'ar' ? 'معدل الرضا' : 'Satisfaction Rate' },
              { value: '15+', label: language === 'ar' ? 'سنة خبرة' : 'Years Experience' },
              { value: '24/7', label: language === 'ar' ? 'دعم متواصل' : 'Support' },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl md:text-4xl text-[#EFB621] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
