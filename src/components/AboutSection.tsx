import { Award, Users, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

export function AboutSection() {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, label: t('about.stat1.label'), value: t('about.stat1.value') },
    { icon: Users, label: t('about.stat2.label'), value: t('about.stat2.value') },
    { icon: Target, label: t('about.stat3.label'), value: t('about.stat3.value') },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollReveal direction="left" delay={100}>
            <div>
              <div className="inline-block bg-[#EFB621]/10 text-[#EFB621] px-4 py-2 rounded-full mb-4">
                {t('about.badge')}
              </div>
              
              <h2 className="text-4xl text-gray-900 mb-6">
                {t('about.title')}
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('about.description1')}
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t('about.description2')}
              </p>

              {/* Stats */}
              <div className="grid sm:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#EFB621] rounded-lg mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Image Placeholder */}
          <ScrollReveal direction="right" delay={200}>
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#EFB621]/20 transition-shadow duration-500">
                <ImageWithFallback
                  src="https://artalsecurity.com/public/images/home.webp"
                  alt="Artal Office Building"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#EFB621] to-[#d9a41d] text-white p-6 rounded-xl shadow-2xl hover:shadow-[#EFB621]/50 hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-1">{t('about.years')}</div>
                <div className="text-2xl">{t('about.excellence')}</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}