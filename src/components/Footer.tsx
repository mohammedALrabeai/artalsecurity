import { Shield, Phone, Mail, MapPin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage, useLocalePath } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { SECTORS } from '../data/sectors';
import { SERVICES } from '../data/services';
import { KeywordLinks } from './KeywordLinks';
import { SETTINGS } from '../data/settings';

export function Footer() {
  const { t, language } = useLanguage();
  const localePath = useLocalePath();

  // التواصل يُقرأ من content/settings.json (قابل للتعديل من /admin)
  const emails = SETTINGS.contact.emails;
  const phones = SETTINGS.contact.phones;

  const footerLinks = {
    company: [
      { label: t('footer.about'), href: '#about', type: 'anchor' },
      { label: t('footer.vision'), href: '#vision', type: 'anchor' },
      { label: t('footer.experience'), href: '#experience', type: 'anchor' },
      { label: language === 'ar' ? 'المدوّنة' : 'Blog', href: '/blog', type: 'route' },
      { label: t('nav.careers'), href: '/careers', type: 'route' },
      { label: t('footer.certificates'), href: '#certificates', type: 'anchor' },
    ],
    // قطاعات العملاء — روابط داخلية لصفحات الهبوط (تظهر في كل الصفحات)
    sectors: SECTORS.map((s) => ({
      label: s[language].name,
      href: `/sectors/${s.slug}`,
      type: 'route' as const,
    })),
    services: SERVICES.map((s) => ({
      label: s[language].name,
      href: `/services/${s.slug}`,
      type: 'route' as const,
    })),
  };

  const socialLinks = [
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/ArtalGroupSA',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/artal_group.sa/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/artalgroup/?viewAsMember=true',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'YouTube',
      href: 'https://www.youtube.com/@ArtalGroup',
      icon: <Youtube className="w-5 h-5" />
    },
    { 
      name: 'Snapchat', 
      href: 'https://t.snapchat.com/O9T1Eyj9',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3 0 .605-.118.9-.228.295-.11.596-.22.896-.22.3 0 .596.08.896.228.3.148.596.294.896.294.3 0 .604-.118.9-.228.295-.11.596-.22.896-.22.3 0 .604.08.896.228.3.148.604.294.9.294.3 0 .604-.118.9-.228.295-.11.596-.22.896-.22.3 0 .6.08.9.228.3.148.6.294.9.294.3 0 .6-.118.9-.228.3-.11.6-.22.9-.22.3 0 .6.08.9.228.3.148.6.294.9.294.401 0 .53-.045.604-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847 1.583-3.545 4.94-3.821 5.93-3.821 1.028 0 1.788.213 2.21.527.527.393.79.945.79 1.643 0 1.558-1.315 2.467-2.364 3.256l-.345.263c-.81.615-1.365 1.04-1.365 1.48 0 .398.194.776.582 1.128.388.353.925.664 1.487.975l.265.147c1.133.627 2.4 1.328 2.4 2.677 0 1.03-.494 1.848-1.455 2.407-.96.56-2.25.84-3.78.84-.3 0-.604-.118-.9-.228-.3-.11-.604-.22-.9-.22-.3 0-.604.08-.9.228-.3.148-.604.294-.9.294-.3 0-.604-.118-.9-.228-.3-.11-.604-.22-.9-.22-1.53 0-2.82-.28-3.78-.84-.96-.559-1.455-1.377-1.455-2.407 0-1.349 1.267-2.05 2.4-2.677l.265-.147c.562-.311 1.1-.622 1.487-.975.388-.352.582-.73.582-1.128 0-.44-.555-.865-1.365-1.48l-.345-.263c-1.05-.789-2.364-1.698-2.364-3.256 0-.698.263-1.25.79-1.643.422-.314 1.182-.527 2.21-.527z"/>
        </svg>
      )
    },
    { 
      name: 'Telegram', 
      href: 'https://t.me/artalgroup1',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
        </svg>
      )
    },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#EFB621] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EFB621] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact CTA Section */}
        <ScrollReveal direction="up" delay={100}>
          <div className="bg-gradient-to-br from-[#EFB621] to-[#d9a41d] rounded-2xl p-8 md:p-12 mb-16 text-center">
            <h2 className="text-3xl md:text-4xl mb-4">
              {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'نحن هنا لنجعل تجربتك استثنائية. اتصل بنا اليوم ودعنا نتجاوز توقعاتك.'
                : 'We are here to make your experience exceptional. Contact us today and let us exceed your expectations.'}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <ScrollReveal direction="up" delay={100}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#EFB621] p-2 rounded-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl">{t('company.name')}</h3>
                  <p className="text-sm text-gray-400">{t('company.tagline')}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                {t('footer.description')}
              </p>
              
              {/* Social Media */}
              <div>
                <h4 className="text-sm mb-3">
                  {language === 'ar' ? 'تابعونا' : 'Follow Us'}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-[#EFB621] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 group"
                      aria-label={social.name}
                    >
                      <div className="group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Company + Sectors Links */}
          <ScrollReveal direction="up" delay={200}>
            <div>
              <h4 className="text-lg mb-6">{t('footer.company')}</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    {link.type === 'route' ? (
                      <Link
                        to={localePath(link.href)}
                        className="text-gray-400 hover:text-[#EFB621] transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-0 h-0.5 bg-[#EFB621] group-hover:w-4 transition-all duration-300" />
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-[#EFB621] transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-0 h-0.5 bg-[#EFB621] group-hover:w-4 transition-all duration-300" />
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              <h4 className="text-lg mb-4 mt-8">
                <Link to={localePath('/sectors')} className="hover:text-[#EFB621] transition-colors">
                  {language === 'ar' ? 'القطاعات التي نخدمها' : 'Sectors We Serve'}
                </Link>
              </h4>
              <ul className="space-y-3">
                {footerLinks.sectors.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={localePath(link.href)}
                      className="text-gray-400 hover:text-[#EFB621] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-[#EFB621] group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg mb-4 mt-8">
                <Link to={localePath('/services')} className="hover:text-[#EFB621] transition-colors">
                  {language === 'ar' ? 'خدماتنا' : 'Our Services'}
                </Link>
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={localePath(link.href)}
                      className="text-gray-400 hover:text-[#EFB621] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-[#EFB621] group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="up" delay={300}>
            <div>
              <h4 className="text-lg mb-6">
                {language === 'ar' ? 'معلومات الاتصال' : 'Contact Information'}
              </h4>
              
              {/* Address */}
              <div className="mb-6">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-[#EFB621] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      {language === 'ar' ? 'العنوان' : 'Address'}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {language === 'ar' 
                        ? 'ص.ب: 1218 - الجبيل: 31951' 
                        : 'P.O. Box: 1218 - Jubail: 31951'}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {language === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia'}
                    </p>
                  </div>
                </div>
                <a 
                  href={SETTINGS.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#EFB621] hover:text-[#d9a41d] transition-colors text-sm mt-2"
                >
                  <MapPin className="w-4 h-4" />
                  {language === 'ar' ? 'عرض على الخريطة' : 'View on Map'}
                </a>
              </div>

              {/* Phones */}
              <div className="mb-6">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#EFB621] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 mb-2">
                      {language === 'ar' ? 'أرقام الهواتف' : 'Phone Numbers'}
                    </p>
                    {phones.map((phone, index) => (
                      <a 
                        key={index}
                        href={`tel:+966${phone.substring(1)}`}
                        className="block text-gray-300 hover:text-[#EFB621] transition-colors text-sm mb-1"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Email Info */}
          <ScrollReveal direction="up" delay={400}>
            <div>
              <h4 className="text-lg mb-6">
                {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
              </h4>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#EFB621] flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  {emails.map((email, index) => (
                    <a 
                      key={index}
                      href={`mailto:${email}`}
                      className="block text-gray-300 hover:text-[#EFB621] transition-colors text-sm break-all"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Embedded location map (الموقع على الخريطة) */}
        <ScrollReveal direction="up" delay={200}>
          <div className="mt-12">
            <h4 className="text-lg mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#EFB621]" />
              {language === 'ar' ? 'موقعنا على الخريطة' : 'Find Us on the Map'}
            </h4>
            <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d222.200110936927!2d49.65379458832338!3d26.992166264330674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a16f51fa14f9%3A0x78f3cfbcdfe12d3!2sArtal%20unified%20security%20services%20company!5e0!3m2!1sen!2ssa!4v1782811799917!5m2!1sen!2ssa"
                title={language === 'ar' ? 'موقع شركة أرتال الموحدة للحراسات الأمنية على خرائط جوجل' : 'Artal Unified Security Services location on Google Maps'}
                className="w-full h-[300px] md:h-[360px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Keyword / service quick-links (internal links for SEO) */}
        <KeywordLinks />

        {/* Bottom Bar */}
        <div className="pt-8 mt-10 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {t('footer.rights')}
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">{t('footer.license')}</span>
              <span className="bg-[#EFB621] text-gray-900 px-3 py-1 rounded">361</span>
              <span className="text-gray-400">{t('footer.ministry')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}