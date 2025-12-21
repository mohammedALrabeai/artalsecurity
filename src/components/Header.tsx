import { Shield, Menu, X, Languages } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { QuoteButton } from './QuoteButton';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Check if scrolled
      setIsScrolled(window.pageYOffset > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: t('nav.home'), href: '/', type: 'route' },
    { label: t('nav.about'), href: '#about', type: 'anchor' },
    { label: t('nav.services'), href: '#services', type: 'anchor' },
    { label: t('nav.experience'), href: '#experience', type: 'anchor' },
    { label: t('nav.careers'), href: '/careers', type: 'route' },
    { label: t('nav.contact'), href: '#contact', type: 'anchor' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const handleNavClick = (item: typeof menuItems[0]) => {
    setIsMenuOpen(false);
    
    if (item.type === 'anchor' && !isHomePage) {
      // If on a different page, navigate to home first then scroll
      window.location.href = '/' + item.href;
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm shadow-md'
    }`}>
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#EFB621] via-[#FFD700] to-[#EFB621] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className={`bg-[#EFB621] p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}>
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl text-gray-900">{t('company.name')}</h1>
              <p className="text-sm text-gray-600">{t('company.tagline')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              item.type === 'route' ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-gray-700 hover:text-[#EFB621] transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EFB621] group-hover:w-full transition-all duration-300" />
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-700 hover:text-[#EFB621] transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EFB621] group-hover:w-full transition-all duration-300" />
                </a>
              )
            ))}
            
            {/* Quote Button */}
            <QuoteButton size="sm" />
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105"
            >
              <Languages className="w-4 h-4" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="bg-[#EFB621] text-white p-2 rounded-lg hover:bg-[#d9a41d] transition-all duration-300"
            >
              <Languages className="w-5 h-5" />
            </button>
            <button
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            {menuItems.map((item) => (
              item.type === 'route' ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block py-2 text-gray-700 hover:text-[#EFB621] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-[#EFB621] transition-colors"
                  onClick={() => handleNavClick(item)}
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}