import { UserPlus, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

interface CareersButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function CareersButton({ variant = 'primary', size = 'md', className = '' }: CareersButtonProps) {
  const { language } = useLanguage();

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#EFB621] to-[#d9a41d] text-white shadow-lg hover:shadow-2xl hover:shadow-[#EFB621]/50 border-2 border-[#EFB621]',
    secondary: 'bg-white text-[#EFB621] border-2 border-[#EFB621] shadow-lg hover:bg-[#EFB621] hover:text-white hover:border-[#d9a41d]',
    outline: 'border-2 border-[#EFB621] text-[#EFB621] bg-white/10 backdrop-blur-sm hover:bg-[#EFB621] hover:text-white shadow-md hover:shadow-xl hover:shadow-[#EFB621]/30',
  };

  return (
    <Link
      to="/careers"
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
        <UserPlus className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} group-hover:rotate-12 transition-transform`} />
        <span>{language === 'ar' ? 'انضم لفريقنا' : 'Join Our Team'}</span>
        <Sparkles className={`${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} animate-pulse`} />
      </div>
    </Link>
  );
}