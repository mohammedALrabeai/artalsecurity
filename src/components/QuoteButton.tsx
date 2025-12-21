import { useState } from 'react';
import { FileText, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { QuoteModal } from './QuoteModal';

interface QuoteButtonProps {
  variant?: 'primary' | 'secondary' | 'floating';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function QuoteButton({ variant = 'primary', size = 'md', className = '' }: QuoteButtonProps) {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#EFB621] to-[#d9a41d] text-white shadow-lg hover:shadow-2xl hover:shadow-[#EFB621]/50',
    secondary: 'bg-white text-[#EFB621] border-2 border-[#EFB621] shadow-lg hover:bg-[#EFB621] hover:text-white',
    floating: 'bg-gradient-to-r from-[#EFB621] to-[#d9a41d] text-white shadow-2xl hover:shadow-[#EFB621]/60',
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${className}
          rounded-xl font-medium
          transition-all duration-300
          hover:scale-105
          flex items-center gap-2
          group
          relative
          overflow-hidden
        `}
      >
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        {/* Content */}
        <div className="relative flex items-center gap-2">
          <FileText className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} group-hover:rotate-12 transition-transform`} />
          <span>{language === 'ar' ? 'اطلب عرض سعر' : 'Get a Quote'}</span>
          <Sparkles className={`${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} animate-pulse`} />
        </div>
      </button>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
