import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { TESTIMONIALS } from '../data/testimonials';

export function TestimonialsSection() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = TESTIMONIALS.map((t) => ({
    name: t[language].name,
    position: t[language].position,
    content: t[language].content,
    rating: t.rating || 5,
  }));

  useEffect(() => {
    if (testimonials.length < 2) return;
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // لا شهادات بعد → يُخفى القسم بالكامل (تُضاف من /admin)
  if (testimonials.length === 0) return null;

  const idx = Math.min(currentIndex, testimonials.length - 1);
  const current = testimonials[idx];
  const next = () => setCurrentIndex((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#EFB621] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-8 right-8 opacity-5">
                <Quote className="w-32 h-32 text-[#EFB621]" />
              </div>
              <div className="relative">
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#EFB621] text-[#EFB621]" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                  "{current.content}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#EFB621] to-[#d9a41d] rounded-full flex items-center justify-center shadow-lg">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                    <h4 className="text-lg text-gray-900">{current.name}</h4>
                    <p className="text-sm text-gray-600">{current.position}</p>
                  </div>
                </div>
              </div>
            </div>

            {testimonials.length > 1 && (
              <>
                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={prev}
                    className="w-12 h-12 bg-white hover:bg-[#EFB621] text-gray-600 hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={language === 'ar' ? 'السابق' : 'Previous'}
                  >
                    {language === 'ar' ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
                  </button>
                  <button
                    onClick={next}
                    className="w-12 h-12 bg-white hover:bg-[#EFB621] text-gray-600 hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={language === 'ar' ? 'التالي' : 'Next'}
                  >
                    {language === 'ar' ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                  </button>
                </div>
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === idx ? 'w-8 bg-[#EFB621]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
