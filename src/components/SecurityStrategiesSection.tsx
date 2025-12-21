import { ClipboardCheck, MapPin, Users, AlertTriangle, Car, Shield, Camera, Package } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

export function SecurityStrategiesSection() {
  const { t } = useLanguage();

  const strategies = [
    {
      icon: MapPin,
      title: t('strategy1.title'),
      description: t('strategy1.desc'),
    },
    {
      icon: ClipboardCheck,
      title: t('strategy2.title'),
      description: t('strategy2.desc'),
    },
    {
      icon: AlertTriangle,
      title: t('strategy3.title'),
      description: t('strategy3.desc'),
    },
    {
      icon: Car,
      title: t('strategy4.title'),
      description: t('strategy4.desc'),
    },
    {
      icon: Shield,
      title: t('strategy5.title'),
      description: t('strategy5.desc'),
    },
    {
      icon: Camera,
      title: t('strategy6.title'),
      description: t('strategy6.desc'),
    },
    {
      icon: Package,
      title: t('strategy7.title'),
      description: t('strategy7.desc'),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#EFB621] text-white px-4 py-2 rounded-full mb-4">
            {t('strategies.badge')}
          </div>
          <h2 className="text-4xl mb-4">{t('strategies.title')}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('strategies.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Strategies List */}
          <div className="space-y-4">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors border border-white/10"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#EFB621] rounded-lg flex items-center justify-center">
                    <strategy.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg mb-1">{strategy.title}</h3>
                  <p className="text-gray-300">{strategy.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759310347581-b3eb0a385ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2VjdXJpdHklMjBmYWNpbGl0eXxlbnwxfHx8fDE3NjU3OTkxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Security Planning"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#EFB621] p-6 rounded-xl shadow-2xl">
              <div className="text-4xl">{t('strategies.badge.footer')}</div>
              <div className="text-lg">{t('strategies.coverage')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
