import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Upload, FileText, CheckCircle, AlertCircle, Send, User, Mail, Phone, Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPosition?: string;
}

export function CareersModal({ isOpen, onClose, selectedPosition = '' }: CareersModalProps) {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const cvInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: selectedPosition,
    experience: '',
    education: '',
    city: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const positions = [
    { value: 'security-guard', label: language === 'ar' ? 'حارس أمن' : 'Security Guard' },
    { value: 'security-supervisor', label: language === 'ar' ? 'مشرف أمن' : 'Security Supervisor' },
    { value: 'control-room-operator', label: language === 'ar' ? 'مشغل غرفة تحكم' : 'Control Room Operator' },
    { value: 'security-manager', label: language === 'ar' ? 'مدير أمن' : 'Security Manager' },
    { value: 'safety-officer', label: language === 'ar' ? 'مسؤول سلامة' : 'Safety Officer' },
    { value: 'security-trainer', label: language === 'ar' ? 'مدرب أمني' : 'Security Trainer' },
    { value: 'technician', label: language === 'ar' ? 'فني صيانة' : 'Maintenance Technician' },
    { value: 'admin', label: language === 'ar' ? 'موظف إداري' : 'Administrative Staff' },
  ];

  const experienceLevels = [
    { value: 'fresh', label: language === 'ar' ? 'بدون خبرة' : 'Fresh Graduate' },
    { value: '1-2', label: language === 'ar' ? '1-2 سنة' : '1-2 Years' },
    { value: '3-5', label: language === 'ar' ? '3-5 سنوات' : '3-5 Years' },
    { value: '5-10', label: language === 'ar' ? '5-10 سنوات' : '5-10 Years' },
    { value: '10+', label: language === 'ar' ? 'أكثر من 10 سنوات' : '10+ Years' },
  ];

  const educationLevels = [
    { value: 'high-school', label: language === 'ar' ? 'ثانوية عامة' : 'High School' },
    { value: 'diploma', label: language === 'ar' ? 'دبلوم' : 'Diploma' },
    { value: 'bachelor', label: language === 'ar' ? 'بكالوريوس' : 'Bachelor\'s Degree' },
    { value: 'master', label: language === 'ar' ? 'ماجستير' : 'Master\'s Degree' },
    { value: 'other', label: language === 'ar' ? 'أخرى' : 'Other' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        alert(language === 'ar' ? 'حجم الملف يجب أن يكون أقل من 5MB' : 'File size must be less than 5MB');
        return;
      }
      setCvFile(file);
      // Clear CV error if exists
      if (errors.cv) {
        setErrors(prev => ({ ...prev, cv: '' }));
      }
    }
  };

  const removeCv = () => {
    setCvFile(null);
    if (cvInputRef.current) {
      cvInputRef.current.value = '';
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = language === 'ar' ? 'الاسم مطلوب' : 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Invalid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = language === 'ar' ? 'رقم الهاتف مطلوب' : 'Phone is required';
    } else if (!/^[0-9+\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = language === 'ar' ? 'رقم الهاتف غير صحيح' : 'Invalid phone number';
    }

    if (!formData.position) {
      newErrors.position = language === 'ar' ? 'الوظيفة المطلوبة مطلوبة' : 'Position is required';
    }

    if (!formData.experience) {
      newErrors.experience = language === 'ar' ? 'سنوات الخبرة مطلوبة' : 'Experience is required';
    }

    if (!formData.education) {
      newErrors.education = language === 'ar' ? 'المؤهل العلمي مطلوب' : 'Education is required';
    }

    if (!cvFile) {
      newErrors.cv = language === 'ar' ? 'السيرة الذاتية مطلوبة' : 'CV is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Here you would send the data to your backend
    console.log('Career Application:', formData);
    console.log('CV File:', cvFile);

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        education: '',
        city: '',
        message: '',
      });
      setCvFile(null);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      />

      {/* Modal */}
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        style={{ animation: 'slideUp 0.3s ease-out' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#EFB621] to-[#d9a41d] px-8 py-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative flex items-center justify-between">
            <div>
              <h2 className="text-3xl text-white mb-1">
                {language === 'ar' ? 'انضم لفريقنا' : 'Join Our Team'}
              </h2>
              <p className="text-white/90">
                {language === 'ar' 
                  ? 'ابدأ مسيرتك المهنية مع شركة أرتال للخدمات الأمنية'
                  : 'Start your career with Artal Unified Security Services'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Success State */}
        {isSuccess ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-2xl mb-3 text-gray-900">
              {language === 'ar' ? 'تم إرسال طلبك بنجاح!' : 'Application Submitted Successfully!'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'ar'
                ? 'شكراً لاهتمامك بالانضمام لفريقنا. سنقوم بمراجعة طلبك والتواصل معك قريباً.'
                : 'Thank you for your interest in joining our team. We will review your application and contact you soon.'}
            </p>
            <div className="flex gap-2 justify-center text-sm text-gray-500">
              <Phone className="w-4 h-4" />
              <span>0133449993</span>
            </div>
          </div>
        ) : (
          <>
            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="w-4 h-4 text-[#EFB621]" />
                      {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                      <span className="text-red-500">*</span>
                    </div>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.fullName ? 'border-red-500' : 'border-gray-200'
                    } focus:border-[#EFB621] focus:outline-none transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="w-4 h-4 text-[#EFB621]" />
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                      <span className="text-red-500">*</span>
                    </div>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={language === 'ar' ? 'example@email.com' : 'example@email.com'}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    } focus:border-[#EFB621] focus:outline-none transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4 text-[#EFB621]" />
                      {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                      <span className="text-red-500">*</span>
                    </div>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={language === 'ar' ? '05xxxxxxxx' : '05xxxxxxxx'}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.phone ? 'border-red-500' : 'border-gray-200'
                    } focus:border-[#EFB621] focus:outline-none transition-colors`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-[#EFB621]" />
                      {language === 'ar' ? 'المدينة' : 'City'}
                    </div>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder={language === 'ar' ? 'الجبيل، الدمام، الخبر...' : 'Jubail, Dammam, Khobar...'}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#EFB621] focus:outline-none transition-colors"
                  />
                </div>

                {/* Position */}
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-[#EFB621]" />
                      {language === 'ar' ? 'الوظيفة المطلوبة' : 'Position Applied For'}
                      <span className="text-red-500">*</span>
                    </div>
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.position ? 'border-red-500' : 'border-gray-200'
                    } focus:border-[#EFB621] focus:outline-none transition-colors`}
                  >
                    <option value="">
                      {language === 'ar' ? 'اختر الوظيفة' : 'Select position'}
                    </option>
                    {positions.map(position => (
                      <option key={position.value} value={position.value}>
                        {position.label}
                      </option>
                    ))}
                  </select>
                  {errors.position && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.position}
                    </p>
                  )}
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-[#EFB621]" />
                      {language === 'ar' ? 'سنوات الخبرة' : 'Years of Experience'}
                      <span className="text-red-500">*</span>
                    </div>
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.experience ? 'border-red-500' : 'border-gray-200'
                    } focus:border-[#EFB621] focus:outline-none transition-colors`}
                  >
                    <option value="">
                      {language === 'ar' ? 'اختر سنوات الخبرة' : 'Select experience'}
                    </option>
                    {experienceLevels.map(level => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                  {errors.experience && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.experience}
                    </p>
                  )}
                </div>

                {/* Education */}
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-4 h-4 text-[#EFB621]" />
                      {language === 'ar' ? 'المؤهل العلمي' : 'Education Level'}
                      <span className="text-red-500">*</span>
                    </div>
                  </label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.education ? 'border-red-500' : 'border-gray-200'
                    } focus:border-[#EFB621] focus:outline-none transition-colors`}
                  >
                    <option value="">
                      {language === 'ar' ? 'اختر المؤهل العلمي' : 'Select education'}
                    </option>
                    {educationLevels.map(level => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                  {errors.education && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.education}
                    </p>
                  )}
                </div>
              </div>

              {/* Cover Letter / Message */}
              <div className="mt-6">
                <label className="block text-sm mb-2 text-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-[#EFB621]" />
                    {language === 'ar' ? 'رسالة تعريفية' : 'Cover Letter'}
                  </div>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder={language === 'ar' 
                    ? 'اذكر لماذا ترغب في العمل معنا ولماذا أنت الأنسب لهذه الوظيفة...'
                    : 'Tell us why you want to work with us and why you are the best fit for this position...'}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#EFB621] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* CV Upload */}
              <div className="mt-6">
                <label className="block text-sm mb-2 text-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Upload className="w-4 h-4 text-[#EFB621]" />
                    {language === 'ar' ? 'السيرة الذاتية' : 'Upload CV'}
                    <span className="text-red-500">*</span>
                    <span className="text-xs text-gray-500">
                      ({language === 'ar' ? 'PDF أو Word - حد أقصى 5MB' : 'PDF or Word - Max 5MB'})
                    </span>
                  </div>
                </label>
                
                <div className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors ${
                  errors.cv ? 'border-red-500' : 'border-gray-300 hover:border-[#EFB621]'
                }`}>
                  <input
                    ref={cvInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleCvChange}
                    className="hidden"
                  />
                  
                  {!cvFile ? (
                    <button
                      type="button"
                      onClick={() => cvInputRef.current?.click()}
                      className="text-gray-600 hover:text-[#EFB621] transition-colors"
                    >
                      <Upload className="w-10 h-10 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm">
                        {language === 'ar' 
                          ? 'اضغط لرفع السيرة الذاتية'
                          : 'Click to upload your CV'}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        PDF, DOC, DOCX
                      </p>
                    </button>
                  ) : (
                    <div className="flex items-center justify-between bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-green-600" />
                        </div>
                        <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                          <p className="text-sm text-gray-900">{cvFile.name}</p>
                          <p className="text-xs text-gray-500">
                            {(cvFile.size / 1024).toFixed(2)} KB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeCv}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
                {errors.cv && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.cv}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="mt-8 flex gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-[#EFB621] to-[#d9a41d] text-white py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {language === 'ar' ? 'جاري الإرسال...' : 'Submitting...'}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {language === 'ar' ? 'إرسال الطلب' : 'Submit Application'}
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  {language === 'ar' ? 'إلغاء' : 'Cancel'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>,
    document.body
  );
}
