import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SETTINGS } from '../data/settings';

export function FloatingContactBar() {
  const { language } = useLanguage();

  // رقم الاتصال الأساسي من الإعدادات (رقم الاستفسار) — قابل للتعديل من /admin
  const primaryPhone = SETTINGS.contact.phones[0];

  const quickContacts = [
    {
      icon: Phone,
      label: language === 'ar' ? 'اتصل الآن' : 'Call Now',
      href: `tel:+966${primaryPhone.substring(1)}`,
      value: primaryPhone,
      bgColor: 'bg-gradient-to-br from-[#EFB621] to-[#d9a41d]',
      hoverShadow: 'hover:shadow-[#EFB621]/50',
    },
    {
      icon: MessageCircle,
      label: language === 'ar' ? 'واتساب' : 'WhatsApp',
      href: 'https://wa.me/966133449993',
      value: language === 'ar' ? 'محادثة' : 'Chat',
      bgColor: 'bg-gradient-to-br from-green-500 to-green-600',
      hoverShadow: 'hover:shadow-green-500/50',
    },
    {
      icon: Mail,
      label: language === 'ar' ? 'البريد' : 'Email',
      href: 'mailto:info@artalgroup.net',
      value: 'info@',
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
      hoverShadow: 'hover:shadow-blue-500/50',
    },
    {
      icon: MapPin,
      label: language === 'ar' ? 'الموقع' : 'Location',
      href: 'https://maps.app.goo.gl/2oDPndRUm5zFiGSS9',
      value: language === 'ar' ? 'الخريطة' : 'Map',
      bgColor: 'bg-gradient-to-br from-red-500 to-red-600',
      hoverShadow: 'hover:shadow-red-500/50',
    },
  ];

  return (
    <div 
      className={`fixed top-1/2 -translate-y-1/2 ${language === 'ar' ? 'left-0' : 'right-0'} z-40 hidden lg:block`}
    >
      <div className="flex flex-col gap-2">
        {quickContacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target={contact.icon === Mail || contact.icon === MessageCircle || contact.icon === MapPin ? '_blank' : undefined}
            rel="noopener noreferrer"
            className={`group relative ${contact.bgColor} ${contact.hoverShadow} shadow-xl transition-all duration-300 hover:scale-105`}
            style={{
              animation: `slideInSide 0.5s ease-out ${index * 0.1}s both`,
            }}
          >
            {/* Icon Container */}
            <div className={`flex items-center justify-center w-14 h-14 ${language === 'ar' ? 'rounded-r-lg' : 'rounded-l-lg'}`}>
              <contact.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>

            {/* Expandable Info */}
            <div 
              className={`absolute top-0 ${language === 'ar' ? 'left-full' : 'right-full'} h-full flex items-center bg-white shadow-xl ${language === 'ar' ? 'rounded-r-lg' : 'rounded-l-lg'} overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none`}
              style={{
                width: '0',
                transition: 'width 0.3s ease, opacity 0.3s ease',
              }}
            >
              <div className="px-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{contact.label}</div>
                <div className="text-xs text-gray-500">{contact.value}</div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <style>{`
        @keyframes slideInSide {
          from {
            opacity: 0;
            transform: translateX(${language === 'ar' ? '-' : ''}100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .group:hover > div {
          width: 180px;
        }
      `}</style>
    </div>
  );
}
