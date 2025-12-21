import { useState } from 'react';
import { FileText, Sparkles, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { QuoteModal } from './QuoteModal';

export function FloatingQuoteButton() {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className={`fixed ${language === 'ar' ? 'right-6 md:right-8' : 'left-6 md:left-8'} bottom-40 z-40 w-14 h-14 bg-gradient-to-br from-[#EFB621] to-[#d9a41d] rounded-full shadow-2xl hover:shadow-[#EFB621]/60 flex items-center justify-center group transition-all duration-300 hover:scale-110`}
        style={{ animation: 'float 3s ease-in-out infinite' }}
      >
        <FileText className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
      </button>
    );
  }

  return (
    <>
      <div 
        className={`fixed ${language === 'ar' ? 'right-6 md:right-8' : 'left-6 md:left-8'} bottom-40 z-40`}
        style={{ animation: 'float 3s ease-in-out infinite' }}
      >
        {/* Main Card */}
        <div className="bg-gradient-to-br from-[#EFB621] to-[#d9a41d] rounded-2xl shadow-2xl overflow-hidden">
          {/* Close/Minimize Button */}
          <button
            onClick={() => setIsMinimized(true)}
            className="absolute top-2 right-2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />

          {/* Content */}
          <div className="relative p-6 w-64">
            {/* Icon */}
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 mx-auto">
              <FileText className="w-6 h-6 text-white" />
            </div>

            {/* Text */}
            <h3 className="text-white text-center mb-2">
              {language === 'ar' ? 'احصل على عرض سعر مجاني' : 'Get a Free Quote'}
            </h3>
            <p className="text-white/90 text-sm text-center mb-4">
              {language === 'ar' 
                ? 'استشارة مجانية وعرض سعر خلال 24 ساعة'
                : 'Free consultation and quote within 24 hours'}
            </p>

            {/* CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-white text-gray-900 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
            >
              <span>{language === 'ar' ? 'اطلب الآن' : 'Request Now'}</span>
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </button>

            {/* Features */}
            <div className="mt-4 space-y-2 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                <span>{language === 'ar' ? 'رد خلال 24 ساعة' : '24-hour response'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                <span>{language === 'ar' ? 'استشارة مجانية' : 'Free consultation'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                <span>{language === 'ar' ? 'عرض مخصص' : 'Customized quote'}</span>
              </div>
            </div>
          </div>

          {/* Decorative Pattern */}
          <div className="absolute bottom-0 left-0 right-0 h-16 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
        </div>

        {/* Pulsing Ring */}
        <div className="absolute -inset-2 bg-[#EFB621] rounded-2xl animate-ping opacity-20 -z-10" />
      </div>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </>
  );
}
