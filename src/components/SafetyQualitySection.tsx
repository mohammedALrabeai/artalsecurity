import { Shield, Award, Users, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import safetyImage from '../assets/safety-quality.jpg';

export function SafetyQualitySection() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t('safety.value1.title'),
      description: t('safety.value1.desc'),
    },
    {
      icon: Award,
      title: t('safety.value2.title'),
      description: t('safety.value2.desc'),
    },
    {
      icon: Users,
      title: t('safety.value3.title'),
      description: t('safety.value3.desc'),
    },
    {
      icon: CheckCircle,
      title: t('safety.value4.title'),
      description: t('safety.value4.desc'),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#EFB621]/10 text-[#EFB621] px-4 py-2 rounded-full mb-4">
              <Shield className="w-5 h-5" />
              <span>{t('safety.badge')}</span>
            </div>
            <h2 className="text-gray-900 mb-4">
              {t('safety.title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('safety.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <ScrollReveal delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#EFB621]/20 via-[#FFD700]/20 to-[#EFB621]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={safetyImage}
                  alt={t('safety.imageAlt')}
                  loading="lazy"
                  decoding="async"
                  width={1430}
                  height={950}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay with motto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-8 w-full">
                    <h3 className="text-white text-2xl mb-2">
                      {t('safety.motto1')}
                    </h3>
                    <p className="text-[#EFB621] text-xl">
                      {t('safety.motto2')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Values Side */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={0.1 * (index + 3)}>
                <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#EFB621]/30">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#EFB621]/10 p-3 rounded-lg group-hover:bg-[#EFB621] transition-colors duration-300">
                      <value.icon className="w-6 h-6 text-[#EFB621] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-2 group-hover:text-[#EFB621] transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16 bg-gradient-to-r from-[#EFB621] via-[#FFD700] to-[#EFB621] rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-white text-4xl mb-2">100%</div>
                <div className="text-white/90">{t('safety.stat1')}</div>
              </div>
              <div className="text-center">
                <div className="text-white text-4xl mb-2">24/7</div>
                <div className="text-white/90">{t('safety.stat2')}</div>
              </div>
              <div className="text-center">
                <div className="text-white text-4xl mb-2">
                  <Shield className="w-12 h-12 mx-auto" />
                </div>
                <div className="text-white/90">{t('safety.stat3')}</div>
              </div>
              <div className="text-center">
                <div className="text-white text-4xl mb-2">
                  <Award className="w-12 h-12 mx-auto" />
                </div>
                <div className="text-white/90">{t('safety.stat4')}</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
