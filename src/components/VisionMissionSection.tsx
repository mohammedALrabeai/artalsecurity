import { Eye, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

export function VisionMissionSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <ScrollReveal direction="left" delay={100}>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#EFB621]/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#EFB621]/5 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#EFB621] rounded-xl mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl mb-4">{t('vision.title')}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {t('vision.description')}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal direction="right" delay={200}>
            <div className="bg-gradient-to-br from-[#EFB621] to-[#d9a41d] p-8 rounded-2xl text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-xl mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                  <Target className="w-7 h-7 text-[#EFB621]" />
                </div>
                <h3 className="text-3xl mb-4">{t('mission.title')}</h3>
                <p className="text-white/90 leading-relaxed">
                  {t('mission.description')}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}