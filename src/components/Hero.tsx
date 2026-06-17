import {
  Shield,
  ChevronRight,
  Target,
  Users,
  Award,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useState, useEffect } from "react";
import { QuoteButton } from "./QuoteButton";
import { STATS } from "../data/settings";

// Animated Counter Component
function AnimatedCounter({
  end,
  suffix = "",
  duration = 2500,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min(
        (timestamp - startTime) / duration,
        1,
      );
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function Hero() {
  const { t, language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images array
  // صور مُضمّنة في المستودع (public/images) ومُحسّنة — تعمل من أي استضافة (Cloudflare/هوستنجر)
  const backgroundImages = [
    "/images/artal_security3.jpg",
    "/images/artal_security6.jpg",
    "/images/artal_security7.jpg",
    "/images/artal_security9.jpg",
    "/images/artal_security10.jpg",
    "/images/artal_security12.jpg",
    "/images/artal_security15.jpg",
    "/images/artal_security18.jpg",
    "/images/artal_security21.jpg",
    "/images/artal_security2.jpg",
    "/images/artal_security4.jpg",
    "/images/artal_security5.jpg",
    "/images/artal_security8.jpg",
  ];

  // نصوص بديلة وصفية بلغتين (سيو الصور + الوصول) — متنوّعة لكل صورة
  const imageAlts =
    language === 'ar'
      ? [
          'حارس أمن مدرّب من شركة أرتال للحراسات الأمنية في موقع بالمملكة',
          'فريق حراسة أمنية يؤمّن مدخل منشأة صناعية',
          'حارس أمن يراقب محيط موقع إنشائي',
          'عناصر أمن أرتال أثناء دورية ميدانية في منشأة',
          'حارس أمن أمام بوابة مجمّع تجاري',
          'مراقبة أمنية على مدار الساعة لمنشأة حيوية',
          'حارس أمن مرخّص يؤمّن مرفقاً في السعودية',
          'فريق أرتال الأمني في مهمة حراسة',
          'تأمين منشأة صناعية بكوادر حراسة محترفة',
          'حارس أمن ينظّم دخول المركبات إلى موقع',
          'حراسة أمنية احترافية لمنشأة تجارية',
          'عنصر أمن من أرتال يحرس مدخلاً رئيسياً',
          'خدمات الحراسة الأمنية المدنية في المملكة العربية السعودية',
        ]
      : [
          'Trained Artal security guard at a site in Saudi Arabia',
          'Security team protecting an industrial facility entrance',
          'Security guard monitoring a construction site perimeter',
          'Artal security personnel on a field patrol at a facility',
          'Security guard at the gate of a commercial complex',
          '24/7 security monitoring of a vital facility',
          'Licensed security guard protecting a facility in Saudi Arabia',
          'Artal security team on a guarding assignment',
          'Industrial facility secured by professional guarding staff',
          'Security guard managing vehicle access to a site',
          'Professional security guarding for a commercial property',
          'Artal officer guarding a main entrance',
          'Civil security guarding services across Saudi Arabia',
        ];

  // Auto-change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex + 1) % backgroundImages.length,
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // الأرقام من الإعدادات (content/settings.json) — قابلة للتعديل من /admin
  const heroIcons = [Target, Users, Award];
  const stats = STATS.slice(0, 3).map((s, i) => ({
    icon: heroIcons[i % heroIcons.length],
    value: s.value,
    suffix: s.suffix,
    label: { ar: s.labelAr, en: s.labelEn },
  }));

  return (
    <section
      id="home"
      className="relative pt-20 min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Images with Smooth Transition */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: currentImageIndex === index ? 1 : 0,
              pointerEvents:
                currentImageIndex === index ? "auto" : "none",
            }}
          >
            <img
              src={image}
              alt={imageAlts[index] ?? imageAlts[0]}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#EFB621]/20 border border-[#EFB621] rounded-full px-4 py-2 mb-6 animate-pulse">
            <Shield className="w-5 h-5 text-[#EFB621]" />
            <span className="text-[#EFB621]">
              {t("hero.badge")}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            {t("hero.title")}
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-[#EFB621] text-gray-900 px-8 py-4 rounded-lg hover:bg-[#EFB621]/90 transition-all duration-300 hover:shadow-2xl hover:shadow-[#EFB621]/50 hover:scale-105 group"
            >
              {t("hero.cta.services")}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              {t("hero.cta.contact")}
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#EFB621] p-3 rounded-lg">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl text-white mb-1">
                      {/^\d+$/.test(stat.value) ? (
                        <AnimatedCounter
                          end={parseInt(stat.value, 10)}
                          suffix={stat.suffix}
                          duration={2500}
                        />
                      ) : (
                        <span>{stat.value}{stat.suffix}</span>
                      )}
                    </div>
                    <div className="text-sm text-gray-300">
                      {t("language") === "ar"
                        ? stat.label.ar
                        : stat.label.en}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}