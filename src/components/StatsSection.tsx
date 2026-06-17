import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Building2, Award, Shield, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { STATS } from '../data/settings';

export function StatsSection() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ end, duration = 2000, suffix = '', prefix = '' }: { end: number; duration?: number; suffix?: string; prefix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return <span>{prefix}{count}{suffix}</span>;
  };

  // الأرقام تأتي من الإعدادات (content/settings.json) — قابلة للتعديل من /admin
  const icons = [Building2, Users, Award, Clock, Shield, TrendingUp];
  const colors = [
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600',
    'from-[#EFB621] to-[#d9a41d]',
    'from-red-500 to-red-600',
    'from-purple-500 to-purple-600',
    'from-emerald-500 to-emerald-600',
  ];
  const stats = STATS.map((s, i) => ({
    icon: icons[i % icons.length],
    value: s.value,
    suffix: s.suffix,
    label: language === 'ar' ? s.labelAr : s.labelEn,
    color: colors[i % colors.length],
  }));

  return (
    <section ref={sectionRef} className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#EFB621] rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#EFB621 1px, transparent 1px), linear-gradient(90deg, #EFB621 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              {language === 'ar' ? 'أرقامنا تتحدث' : 'Our Numbers Speak'}
            </h2>
            <p className="text-xl text-gray-300">
              {language === 'ar'
                ? 'إنجازات ملموسة وثقة متزايدة من عملائنا'
                : 'Tangible achievements and growing trust from our clients'}
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group hover:-translate-y-2 border border-white/10">
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                {/* Number */}
                <div className="text-3xl md:text-4xl text-white text-center mb-2">
                  {/^\d+$/.test(stat.value) ? (
                    <AnimatedNumber end={parseInt(stat.value, 10)} suffix={stat.suffix} />
                  ) : (
                    <span>{stat.value}{stat.suffix}</span>
                  )}
                </div>

                {/* Label */}
                <div className="text-sm text-gray-300 text-center">
                  {stat.label}
                </div>

                {/* Progress Bar */}
                <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-2000 ease-out`}
                    style={{ 
                      width: isVisible ? '100%' : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={600}>
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-300 mb-6">
              {language === 'ar'
                ? 'شركة حراسات أمنية مرخّصة — اطلب عرض سعر لمنشأتك'
                : 'A licensed security company — request a quote for your facility'}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EFB621] to-[#d9a41d] text-white px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-[#EFB621]/50"
            >
              {language === 'ar' ? 'ابدأ مشروعك معنا' : 'Start Your Project'}
              <TrendingUp className="w-5 h-5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
