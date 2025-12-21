import { Shield, Camera, Lock, Radio, UserCheck, Headphones, Users, Building } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { QuoteButton } from './QuoteButton';

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Shield,
      title: t('service1.title'),
      description: t('service1.desc'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Camera,
      title: t('service2.title'),
      description: t('service2.desc'),
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Lock,
      title: t('service3.title'),
      description: t('service3.desc'),
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Building,
      title: t('service4.title'),
      description: t('service4.desc'),
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Radio,
      title: t('service5.title'),
      description: t('service5.desc'),
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: UserCheck,
      title: t('service6.title'),
      description: t('service6.desc'),
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Headphones,
      title: t('service7.title'),
      description: t('service7.desc'),
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Users,
      title: t('service8.title'),
      description: t('service8.desc'),
      color: 'from-gray-500 to-gray-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#EFB621] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EFB621] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center mb-16">
            <div className="inline-block bg-[#EFB621] px-4 py-2 rounded-full mb-4 text-gray-900">
              {t('services.badge')}
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">{t('services.title')}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <div className="group relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#EFB621] transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#EFB621]/20 hover:-translate-y-2">
                {/* Icon with Gradient Background */}
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-lg mb-3 group-hover:text-[#EFB621] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#EFB621]/0 to-[#EFB621]/0 group-hover:from-[#EFB621]/10 group-hover:to-[#EFB621]/5 transition-all duration-500 pointer-events-none" />
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#EFB621]/0 group-hover:bg-[#EFB621]/10 rounded-bl-full transition-all duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={200}>
          <div className="mt-16 text-center">
            <p className="text-gray-300 mb-6 text-lg">
              {t('services.cta.text')}
            </p>
            <QuoteButton />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}