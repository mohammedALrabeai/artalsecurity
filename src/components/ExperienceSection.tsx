import { Factory, Droplet, Building2, HardHat, Mountain, Package, ShoppingBag, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function ExperienceSection() {
  const { t } = useLanguage();

  const experiences = [
    {
      icon: Factory,
      title: t('exp.factories'),
      description: t('exp.factories.desc'),
    },
    {
      icon: Droplet,
      title: t('exp.oil'),
      description: t('exp.oil.desc'),
    },
    {
      icon: Building2,
      title: t('exp.residential'),
      description: t('exp.residential.desc'),
    },
    {
      icon: HardHat,
      title: t('exp.construction'),
      description: t('exp.construction.desc'),
    },
    {
      icon: Mountain,
      title: t('exp.remote'),
      description: t('exp.remote.desc'),
    },
    {
      icon: Package,
      title: t('exp.warehouses'),
      description: t('exp.warehouses.desc'),
    },
    {
      icon: ShoppingBag,
      title: t('exp.commercial'),
      description: t('exp.commercial.desc'),
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#EFB621]/10 text-[#EFB621] px-4 py-2 rounded-full mb-4">
            {t('experience.badge')}
          </div>
          <h2 className="text-4xl text-gray-900 mb-4">{t('experience.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('experience.description')}
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-100 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#EFB621]/10 group-hover:bg-[#EFB621] rounded-lg mb-4 transition-colors">
                <exp.icon className="w-6 h-6 text-[#EFB621] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">{exp.title}</h3>
              <p className="text-gray-600">{exp.description}</p>
              <CheckCircle className="w-5 h-5 text-green-500 mt-3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
