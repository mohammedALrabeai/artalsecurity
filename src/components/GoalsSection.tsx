import { Target, TrendingUp, Users, GraduationCap, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

export function GoalsSection() {
  const { t } = useLanguage();

  const goals = [
    {
      icon: Target,
      title: t('goal1.title'),
      description: t('goal1.desc'),
    },
    {
      icon: TrendingUp,
      title: t('goal2.title'),
      description: t('goal2.desc'),
    },
    {
      icon: Users,
      title: t('goal3.title'),
      description: t('goal3.desc'),
    },
    {
      icon: GraduationCap,
      title: t('goal4.title'),
      description: t('goal4.desc'),
    },
    {
      icon: Globe,
      title: t('goal5.title'),
      description: t('goal5.desc'),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center mb-16">
            <div className="inline-block bg-[#EFB621]/10 text-[#EFB621] px-4 py-2 rounded-full mb-4">
              {t('goals.badge')}
            </div>
            <h2 className="text-4xl text-gray-900 mb-4">{t('goals.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('goals.description')}
            </p>
          </div>
        </ScrollReveal>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <div className="relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-[#EFB621] transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#EFB621]/5 rounded-full -mr-10 -mt-10 group-hover:bg-[#EFB621]/10 group-hover:scale-150 transition-all duration-500" />
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#EFB621] rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <goal.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-3 group-hover:text-[#EFB621] transition-colors duration-300">{goal.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{goal.description}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#EFB621]/0 group-hover:bg-[#EFB621]/10 rounded-tr-full transition-all duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}