import { Building2, Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center mb-16">
            <div className="inline-block bg-[#EFB621]/10 text-[#EFB621] px-4 py-2 rounded-full mb-4">
              {t('projects.badge')}
            </div>
            <h2 className="text-4xl text-gray-900 mb-4">{t('projects.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('projects.description')}
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Showcase */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project Card 1 - Placeholder for Image */}
          <ScrollReveal direction="up" delay={100}>
            <div className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-square hover:shadow-2xl hover:shadow-[#EFB621]/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-center">
                  <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-500">Project Image</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#EFB621]/95 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl mb-2">{t('project1.title')}</h3>
                  <p className="text-white/90">{t('project1.desc')}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Project Card 2 - Placeholder for Image */}
          <ScrollReveal direction="up" delay={200}>
            <div className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-square hover:shadow-2xl hover:shadow-[#EFB621]/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-center">
                  <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-500">Project Image</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#EFB621]/95 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl mb-2">{t('project2.title')}</h3>
                  <p className="text-white/90">{t('project2.desc')}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Project Card 3 - Placeholder for Image */}
          <ScrollReveal direction="up" delay={300}>
            <div className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-square hover:shadow-2xl hover:shadow-[#EFB621]/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-center">
                  <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-500">Project Image</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#EFB621]/95 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl mb-2">{t('project3.title')}</h3>
                  <p className="text-white/90">{t('project3.desc')}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <ScrollReveal direction="up" delay={100}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#EFB621] rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl text-gray-900 mb-2">{t('projects.stat1')}</div>
              <div className="text-gray-600">{t('projects.stat1.label')}</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#EFB621] rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl text-gray-900 mb-2">{t('projects.stat2')}</div>
              <div className="text-gray-600">{t('projects.stat2.label')}</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#EFB621] rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl text-gray-900 mb-2">{t('projects.stat3')}</div>
              <div className="text-gray-600">{t('projects.stat3.label')}</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#EFB621] rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl text-gray-900 mb-2">{t('projects.stat4')}</div>
              <div className="text-gray-600">{t('projects.stat4.label')}</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}