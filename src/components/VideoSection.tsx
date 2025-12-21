import { Play, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

export function VideoSection() {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  // Replace with your actual YouTube video ID
  const videoId = 'dQw4w9WgXcQ'; // Example video ID

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#EFB621]/10 px-4 py-2 rounded-full mb-4">
              <Play className="w-4 h-4 text-[#EFB621]" />
              <span className="text-sm text-[#EFB621]">
                {language === 'ar' ? 'شاهد الفيديو' : 'Watch Video'}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              {language === 'ar' ? 'تعرف علينا أكثر' : 'Get to Know Us Better'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar'
                ? 'شاهد كيف نقدم أفضل الحلول الأمنية المتكاملة لحماية منشآتكم'
                : 'Watch how we provide the best integrated security solutions to protect your facilities'}
            </p>
          </div>
        </ScrollReveal>

        {/* Video Container */}
        <ScrollReveal direction="up" delay={200}>
          <div className="relative max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
              {/* Thumbnail */}
              {!isPlaying ? (
                <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-gray-800">
                  {/* Placeholder Image - Replace with actual thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#EFB621]/20 to-transparent flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎬</div>
                      <h3 className="text-2xl text-white mb-2">
                        {language === 'ar' ? 'أرتال للخدمات الأمنية' : 'Artal Security Services'}
                      </h3>
                      <p className="text-gray-300">
                        {language === 'ar' ? 'فيديو تعريفي' : 'Introduction Video'}
                      </p>
                    </div>
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="relative">
                      {/* Pulse Rings */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-[#EFB621] rounded-full animate-ping opacity-20" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-[#EFB621] rounded-full animate-ping opacity-30" style={{ animationDelay: '0.5s' }} />
                      </div>

                      {/* Play Button */}
                      <div className="relative w-24 h-24 bg-gradient-to-br from-[#EFB621] to-[#d9a41d] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </button>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                </div>
              ) : (
                <>
                  {/* YouTube Embed */}
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="Company Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                  {/* Close Button */}
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors z-10"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </>
              )}
            </div>

            {/* Features Below Video */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: '🎯',
                  title: language === 'ar' ? 'رؤية واضحة' : 'Clear Vision',
                  desc: language === 'ar' ? 'أهداف محددة لتحقيق أعلى معايير الأمن' : 'Defined goals for highest security standards',
                },
                {
                  icon: '⚡',
                  title: language === 'ar' ? 'استجابة سريعة' : 'Quick Response',
                  desc: language === 'ar' ? 'فريق جاهز على مدار الساعة' : '24/7 ready team',
                },
                {
                  icon: '🏆',
                  title: language === 'ar' ? 'جودة معتمدة' : 'Certified Quality',
                  desc: language === 'ar' ? 'معايير عالمية في الخدمة' : 'International service standards',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h4 className="text-lg mb-2 text-gray-900">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
