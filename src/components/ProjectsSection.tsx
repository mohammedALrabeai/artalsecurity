import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { PROJECTS } from '../data/projects';

export function ProjectsSection() {
  const { t, language } = useLanguage();

  // لا مشاريع بعد → يُخفى القسم بالكامل (تُضاف من /admin بصور حقيقية)
  if (PROJECTS.length === 0) return null;

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
          {PROJECTS.map((p, index) => {
            const title = language === 'ar' ? p.ar.title : p.en.title;
            const desc = language === 'ar' ? p.ar.description : p.en.description;
            return (
              <ScrollReveal key={index} direction="up" delay={(index + 1) * 100}>
                <div className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-square hover:shadow-2xl hover:shadow-[#EFB621]/20 transition-all duration-500 hover:-translate-y-2">
                  <img
                    src={p.image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#EFB621]/95 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                    <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl mb-2">{title}</h3>
                      <p className="text-white/90">{desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
