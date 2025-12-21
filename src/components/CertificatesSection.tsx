import { Award, Shield, CheckCircle, FileCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

export function CertificatesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center mb-16">
            <div className="inline-block bg-[#EFB621]/10 text-[#EFB621] px-4 py-2 rounded-full mb-4">
              {t('certificates.badge')}
            </div>
            <h2 className="text-4xl text-gray-900 mb-4">{t('certificates.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('certificates.description')}
            </p>
          </div>
        </ScrollReveal>

        {/* Main License */}
        <ScrollReveal direction="up" delay={100}>
          <div className="bg-gradient-to-br from-[#EFB621] to-[#d9a41d] p-8 rounded-2xl text-white mb-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-[#EFB621]/30 transition-all duration-500">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl mb-3">{t('cert.main.title')}</h3>
                <p className="text-xl text-white/90 mb-2">
                  {t('cert.main.subtitle')}
                </p>
                <div className="inline-block bg-white/20 px-6 py-3 rounded-lg backdrop-blur-sm">
                  <span className="text-2xl">{t('cert.main.license')}</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Certificates Grid - Placeholders */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Certificate Placeholder 1 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#EFB621] transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <Award className="w-12 h-12 text-gray-400 mx-auto mb-2 group-hover:scale-110 group-hover:text-[#EFB621] transition-all duration-300" />
                  <p className="text-sm text-gray-500">Certificate Image</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{t('cert1.label')}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Certificate Placeholder 2 */}
          <ScrollReveal direction="up" delay={200}>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#EFB621] transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <FileCheck className="w-12 h-12 text-gray-400 mx-auto mb-2 group-hover:scale-110 group-hover:text-[#EFB621] transition-all duration-300" />
                  <p className="text-sm text-gray-500">Certificate Image</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{t('cert2.label')}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Certificate Placeholder 3 */}
          <ScrollReveal direction="up" delay={300}>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#EFB621] transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <Award className="w-12 h-12 text-gray-400 mx-auto mb-2 group-hover:scale-110 group-hover:text-[#EFB621] transition-all duration-300" />
                  <p className="text-sm text-gray-500">Certificate Image</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{t('cert3.label')}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Additional Info */}
        <ScrollReveal direction="up" delay={100}>
          <div className="mt-12 bg-white p-8 rounded-xl border border-gray-200 hover:border-[#EFB621] hover:shadow-xl transition-all duration-500 group">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#EFB621]/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Shield className="w-8 h-8 text-[#EFB621]" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl text-gray-900 mb-2">{t('cert.footer.title')}</h3>
                <p className="text-gray-600">
                  {t('cert.footer.desc')}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}