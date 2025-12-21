import { useState } from 'react';
import { Phone, Mail, MessageCircle, X, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const contactOptions = [
    {
      icon: MessageCircle,
      label: language === 'ar' ? 'واتساب' : 'WhatsApp',
      value: language === 'ar' ? 'محادثة فورية' : 'Quick Chat',
      href: 'https://wa.me/966133449993',
      color: 'from-emerald-500 to-emerald-600',
      hoverColor: 'hover:shadow-emerald-500/50',
      featured: true,
    },
    {
      icon: Phone,
      label: language === 'ar' ? 'اتصل بنا' : 'Call Us',
      value: '0133449993',
      href: 'tel:+966133449993',
      color: 'from-[#EFB621] to-[#d9a41d]',
      hoverColor: 'hover:shadow-[#EFB621]/50',
    },
    {
      icon: Phone,
      label: language === 'ar' ? 'هاتف بديل' : 'Alternative',
      value: '0133612002',
      href: 'tel:+966133612002',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:shadow-blue-500/50',
    },
    {
      icon: Mail,
      label: language === 'ar' ? 'راسلنا' : 'Email Us',
      value: 'info@artalgroup.net',
      href: 'mailto:info@artalgroup.net',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:shadow-purple-500/50',
    },
  ];

  return (
    <>
      {/* Floating Button */}
      <div 
        className={`fixed ${language === 'ar' ? 'left-6 md:left-8' : 'right-6 md:right-8'} bottom-24 z-50`}
        style={{ 
          animation: 'float 3s ease-in-out infinite',
        }}
      >
        {/* Contact Options - Show when open */}
        {isOpen && (
          <div className="mb-4 space-y-3">
            {contactOptions.map((option, index) => (
              <a
                key={index}
                href={option.href}
                target={option.icon === Mail || option.icon === MessageCircle ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-3 bg-white rounded-2xl shadow-2xl p-4 ${language === 'ar' ? 'flex-row-reverse' : ''} ${option.hoverColor} hover:scale-105 transition-all duration-300 group ${option.featured ? 'ring-2 ring-emerald-500 ring-offset-2' : ''}`}
                style={{
                  animation: `slideIn 0.3s ease-out ${index * 0.1}s both`,
                }}
                onClick={() => setIsOpen(false)}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex-1 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <div className="text-sm text-gray-900">{option.label}</div>
                  <div className="text-xs text-gray-500">{option.value}</div>
                </div>
                {option.featured && (
                  <Send className={`w-4 h-4 text-emerald-500 ${language === 'ar' ? 'rotate-180' : ''}`} />
                )}
              </a>
            ))}

            {/* Info Card */}
            <div 
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 text-white shadow-2xl"
              style={{
                animation: 'slideIn 0.3s ease-out 0.4s both',
              }}
            >
              <div className={`text-xs ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className="mb-2 opacity-90">
                  {language === 'ar' 
                    ? '🕐 نحن متاحون من السبت إلى الخميس' 
                    : '🕐 Available Sat - Thu'}
                </div>
                <div className="opacity-75">
                  {language === 'ar' 
                    ? 'استجابة سريعة خلال دقائق' 
                    : 'Quick response within minutes'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 bg-gradient-to-br from-[#EFB621] to-[#d9a41d] rounded-full shadow-2xl hover:shadow-[#EFB621]/60 flex items-center justify-center group transition-all duration-300 hover:scale-110"
        >
          {/* Ripple Effect - Multiple Layers */}
          <div className="absolute inset-0 rounded-full bg-[#EFB621] animate-ping opacity-20" />
          <div className="absolute inset-0 rounded-full bg-[#EFB621] animate-ping opacity-10" style={{ animationDelay: '0.5s' }} />
          
          {/* Icon */}
          <div className="relative z-10">
            {isOpen ? (
              <X className="w-7 h-7 text-white transition-transform duration-300 rotate-90" />
            ) : (
              <MessageCircle className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-300" />
            )}
          </div>

          {/* Notification Dot with Pulse */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1">
              <div className="relative w-4 h-4">
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75" />
                <div className="relative w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
              </div>
            </div>
          )}
        </button>

        {/* Tooltip */}
        {!isOpen && (
          <div 
            className={`absolute top-1/2 -translate-y-1/2 ${language === 'ar' ? 'right-20' : 'left-20'} bg-gray-900 text-white px-4 py-2 rounded-xl shadow-2xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none scale-95 group-hover:scale-100`}
          >
            <div className="text-sm">
              {language === 'ar' ? '💬 تواصل معنا الآن!' : '💬 Contact Us Now!'}
            </div>
            {/* Arrow */}
            <div 
              className={`absolute top-1/2 -translate-y-1/2 ${language === 'ar' ? '-right-1' : '-left-1'} w-2 h-2 bg-gray-900 rotate-45`}
            />
          </div>
        )}
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
          style={{
            animation: 'fadeIn 0.3s ease-out',
          }}
        />
      )}

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

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(${language === 'ar' ? '-' : ''}20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}