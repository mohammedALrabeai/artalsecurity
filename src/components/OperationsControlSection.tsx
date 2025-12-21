import { Monitor, Clock, ClipboardCheck, Users, Bell, Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

export function OperationsControlSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Clock,
      title: t('ops1.title'),
      description: t('ops1.desc'),
    },
    {
      icon: Monitor,
      title: t('ops2.title'),
      description: t('ops2.desc'),
    },
    {
      icon: ClipboardCheck,
      title: t('ops3.title'),
      description: t('ops3.desc'),
    },
    {
      icon: Users,
      title: t('ops4.title'),
      description: t('ops4.desc'),
    },
    {
      icon: Bell,
      title: t('ops5.title'),
      description: t('ops5.desc'),
    },
    {
      icon: Phone,
      title: t('ops6.title'),
      description: t('ops6.desc'),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#EFB621]/10 text-[#EFB621] px-4 py-2 rounded-full mb-4">
            {t('operations.badge')}
          </div>
          <h2 className="text-4xl text-gray-900 mb-4">{t('operations.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('operations.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1715869428589-366729e7fdcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNvbnRyb2wlMjByb29tfGVufDF8fHx8MTc2NTcxMjI3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Operations Control Center"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-gray-900 text-white p-6 rounded-xl shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm">{t('ops.live')}</span>
              </div>
              <div className="text-3xl">24/7</div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-lg text-gray-700 mb-8">
              {t('operations.intro')}
            </p>
            
            <div className="space-y-4">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#EFB621] rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.slice(3).map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-[#EFB621] transition-all"
            >
              <div className="w-12 h-12 bg-[#EFB621]/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#EFB621]" />
              </div>
              <h4 className="text-lg text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
