import { UserCheck, Heart, ClipboardList, Radio, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function SecurityDepartmentSection() {
  const { t } = useLanguage();

  const responsibilities = [
    {
      icon: UserCheck,
      title: t('dept1.title'),
      description: t('dept1.desc'),
    },
    {
      icon: Heart,
      title: t('dept2.title'),
      description: t('dept2.desc'),
    },
    {
      icon: ClipboardList,
      title: t('dept3.title'),
      description: t('dept3.desc'),
    },
    {
      icon: Shield,
      title: t('dept4.title'),
      description: t('dept4.desc'),
    },
    {
      icon: Radio,
      title: t('dept5.title'),
      description: t('dept5.desc'),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#EFB621]/10 text-[#EFB621] px-4 py-2 rounded-full mb-4">
            {t('department.badge')}
          </div>
          <h2 className="text-4xl text-gray-900 mb-4">{t('department.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('department.description')}
          </p>
        </div>

        {/* Responsibilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {responsibilities.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#EFB621] transition-all hover:shadow-lg group"
            >
              <div className="w-14 h-14 bg-[#EFB621]/10 group-hover:bg-[#EFB621] rounded-xl flex items-center justify-center mb-4 transition-colors">
                <item.icon className="w-7 h-7 text-[#EFB621] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-[#EFB621] to-[#d9a41d] p-8 rounded-2xl text-white">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl mb-3">{t('dept.footer.title')}</h3>
              <p className="text-white/90 text-lg">
                {t('dept.footer.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
