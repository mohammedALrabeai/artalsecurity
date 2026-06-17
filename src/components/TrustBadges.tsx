import { Shield, Award, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

export function TrustBadges() {
  const { language } = useLanguage();

  // شارات حقيقية قابلة للإثبات فقط (لا ادعاءات ISO/أرقام غير مؤكّدة)
  const badges = [
    {
      icon: Shield,
      title: language === 'ar' ? 'مرخّص رسمياً' : 'Officially Licensed',
      desc: language === 'ar' ? 'ترخيص رقم 361' : 'License No. 361',
      color: 'from-[#EFB621] to-[#d9a41d]',
    },
    {
      icon: Award,
      title: language === 'ar' ? 'أمن صناعي' : 'Industrial Security',
      desc: language === 'ar' ? 'الهيئة العليا للأمن الصناعي' : 'High Authority for Industrial Security',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: MapPin,
      title: language === 'ar' ? 'تغطية وطنية' : 'Nationwide Coverage',
      desc: language === 'ar' ? 'جميع مناطق المملكة' : 'All regions of Saudi Arabia',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Clock,
      title: language === 'ar' ? 'عمليات 24/7' : '24/7 Operations',
      desc: language === 'ar' ? 'غرفة عمليات ومراقبة' : 'Operations & monitoring room',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <div className={`w-14 h-14 bg-gradient-to-br ${badge.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <badge.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg mb-1 text-gray-900">{badge.title}</h3>
                <p className="text-sm text-gray-600">{badge.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
