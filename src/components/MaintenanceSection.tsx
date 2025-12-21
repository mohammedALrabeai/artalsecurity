import { Camera, Shield, Wrench, Package } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

export function MaintenanceSection() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('maint1.title'),
      description: t('maint1.desc'),
    },
    {
      title: t('maint2.title'),
      description: t('maint2.desc'),
    },
    {
      title: t('maint3.title'),
      description: t('maint3.desc'),
    },
    {
      title: t('maint4.title'),
      description: t('maint4.desc'),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#EFB621]/10 text-[#EFB621] px-4 py-2 rounded-full mb-4">
            {t('maintenance.badge')}
          </div>
          <h2 className="text-4xl text-gray-900 mb-4">{t('maintenance.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('maintenance.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-[#EFB621] rounded-xl flex items-center justify-center">
                  <Wrench className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl text-gray-900 mb-3">{t('maintenance.intro.title')}</h3>
                <p className="text-gray-600 text-lg">
                  {t('maintenance.intro.desc')}
                </p>
              </div>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#EFB621]/10 rounded-lg flex items-center justify-center">
                    <Camera className="w-5 h-5 text-[#EFB621]" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg">
                <Package className="w-5 h-5" />
                <span>{t('maint.supply')}</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                <Wrench className="w-5 h-5" />
                <span>{t('maint.installation')}</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5" />
                <span>{t('maint.maintenance')}</span>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Image Placeholder 1 */}
            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1566060475410-1159300f046f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjY3R2JTIwc3VydmVpbGxhbmNlJTIwY2FtZXJhfGVufDF8fHx8MTc2NTc5OTE1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="CCTV Camera"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image Placeholder 2 */}
            <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Camera className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Service Image</p>
              </div>
            </div>
            
            {/* Image Placeholder 3 */}
            <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Shield className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Service Image</p>
              </div>
            </div>
            
            {/* Image Placeholder 4 */}
            <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Wrench className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Service Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
