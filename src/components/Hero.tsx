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
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images array
  const backgroundImages = [
    "https://artalsecurity.com/public/images/artal_security3.jpeg",
    "https://artalsecurity.com/public/images/artal_security6.jpeg",
    "https://artalsecurity.com/public/images/artal_security7.jpeg",
    "https://artalsecurity.com/public/images/artal_security9.jpeg",
    "https://artalsecurity.com/public/images/artal_security10.jpeg",
    "https://artalsecurity.com/public/images/artal_security12.jpeg",
    "https://artalsecurity.com/public/images/artal_security15.jpeg",
    "https://artalsecurity.com/public/images/artal_security18.jpeg",
    "https://artalsecurity.com/public/images/artal_security21.png",
    "https://artalsecurity.com/public/images/artal_security2.jpeg",
    "https://artalsecurity.com/public/images/artal_security4.jpeg",
    "https://artalsecurity.com/public/images/artal_security5.jpeg",
    "https://artalsecurity.com/public/images/artal_security8.jpeg",
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

  const stats = [
    {
      icon: Target,
      value: 200,
      suffix: "+",
      label: { en: "Projects Completed", ar: "مشروع منجز" },
    },
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: { en: "Security Personnel", ar: "موظف أمن" },
    },
    {
      icon: Award,
      value: 15,
      suffix: "+",
      label: { en: "Years Experience", ar: "سنة خبرة" },
    },
  ];

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
              alt="Security Professional"
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
                      <AnimatedCounter
                        end={stat.value}
                        suffix={stat.suffix}
                        duration={2500}
                      />
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