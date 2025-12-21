import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Upload, FileText, CheckCircle, AlertCircle, Send, Building2, User, Mail, Phone, MapPin, MessageSquare, Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    serviceType: '',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const serviceTypes = [
    { value: 'security-guards', label: language === 'ar' ? 'حراسات أمنية' : 'Security Guards' },
    { value: 'cctv', label: language === 'ar' ? 'كاميرات مراقبة' : 'CCTV Systems' },
    { value: 'access-control', label: language === 'ar' ? 'التحكم في الدخول' : 'Access Control' },
    { value: 'control-center', label: language === 'ar' ? 'مركز التحكم' : 'Control Center' },
    { value: 'training', label: language === 'ar' ? 'التدريب الأمني' : 'Security Training' },
    { value: 'maintenance', label: language === 'ar' ? 'الصيانة' : 'Maintenance' },
    { value: 'consultation', label: language === 'ar' ? 'استشارات أمنية' : 'Security Consultation' },
    { value: 'other', label: language === 'ar' ? 'أخرى' : 'Other' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const validFiles = selectedFiles.filter(file => {
      const maxSize = 5 * 1024 * 1024; // 5MB
      return file.size <= maxSize;
    });

    if (validFiles.length !== selectedFiles.length) {
      alert(language === 'ar' ? 'بعض الملفات تجاوزت الحد الأقصى 5MB' : 'Some files exceeded 5MB limit');
    }

    setFiles(prev => [...prev, ...validFiles].slice(0, 5)); // Max 5 files
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
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

    if (!formData.serviceType) {
      newErrors.serviceType = language === 'ar' ? 'نوع الخدمة مطلوب' : 'Service type is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = language === 'ar' ? 'الرسالة مطلوبة' : 'Message is required';
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
    setSubmitError(null);
    setErrors({});

    try {
      // Create FormData
      const apiFormData = new FormData();
      
      // Append form fields (matching API parameter names exactly)
      apiFormData.append('full_name', formData.fullName);
      apiFormData.append('company_name', formData.company || '');
      apiFormData.append('email', formData.email);
      apiFormData.append('phone', formData.phone);
      apiFormData.append('service_type', formData.serviceType);
      apiFormData.append('location_city', formData.location || '');
      apiFormData.append('project_details', formData.message);

      // Append files if any
      if (files.length > 0) {
        files.forEach((file) => {
          apiFormData.append('attachments[]', file);
        });
      }

      // Send request to API
      const response = await fetch('https://artalsys.com/api/quote-requests', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: apiFormData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Success (201)
        console.log('Quote request submitted successfully:', data);
        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({
            fullName: '',
            company: '',
            email: '',
            phone: '',
            serviceType: '',
            location: '',
            message: '',
          });
          setFiles([]);
          setErrors({});
          setSubmitError(null);
          onClose();
        }, 3000);
      } else if (response.status === 422 && data.errors) {
        // Validation errors (422)
        setIsSubmitting(false);
        
        // Map server errors to form field names
        const serverErrors: Record<string, string> = {};
        
        if (data.errors.full_name) {
          serverErrors.fullName = Array.isArray(data.errors.full_name) 
            ? data.errors.full_name[0] 
            : data.errors.full_name;
        }
        if (data.errors.email) {
          serverErrors.email = Array.isArray(data.errors.email) 
            ? data.errors.email[0] 
            : data.errors.email;
        }
        if (data.errors.phone) {
          serverErrors.phone = Array.isArray(data.errors.phone) 
            ? data.errors.phone[0] 
            : data.errors.phone;
        }
        if (data.errors.service_type) {
          serverErrors.serviceType = Array.isArray(data.errors.service_type) 
            ? data.errors.service_type[0] 
            : data.errors.service_type;
        }
        if (data.errors.location_city) {
          serverErrors.location = Array.isArray(data.errors.location_city) 
            ? data.errors.location_city[0] 
            : data.errors.location_city;
        }
        if (data.errors.project_details) {
          serverErrors.message = Array.isArray(data.errors.project_details) 
            ? data.errors.project_details[0] 
            : data.errors.project_details;
        }
        
        // Handle attachment errors
        if (data.errors.attachments) {
          const attachmentError = Array.isArray(data.errors.attachments) 
            ? data.errors.attachments[0] 
            : data.errors.attachments;
          
          setSubmitError(
            language === 'ar'
              ? `خطأ في الملفات: ${attachmentError}`
              : `File error: ${attachmentError}`
          );
        }
        
        // Handle individual file errors (attachments.0, attachments.1, etc.)
        Object.keys(data.errors).forEach(key => {
          if (key.startsWith('attachments.')) {
            const fileError = Array.isArray(data.errors[key]) 
              ? data.errors[key][0] 
              : data.errors[key];
            
            setSubmitError(
              language === 'ar'
                ? `خطأ في الملفات: ${fileError}`
                : `File error: ${fileError}`
            );
          }
        });
        
        setErrors(serverErrors);
        
        // Show general validation message if available
        if (data.message && Object.keys(serverErrors).length === 0) {
          setSubmitError(
            language === 'ar'
              ? 'يرجى التحقق من البيانات المدخلة'
              : data.message
          );
        }
      } else {
        // Other errors (500, etc.)
        setIsSubmitting(false);
        setSubmitError(
          language === 'ar'
            ? data.message || 'حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.'
            : data.message || 'An error occurred while submitting your request. Please try again.'
        );
      }
    } catch (error) {
      // Network or other errors
      console.error('Error submitting quote request:', error);
      setIsSubmitting(false);
      setSubmitError(
        language === 'ar'
          ? 'حدث خطأ في الاتصال. يرجى التحقق من الإنترنت والمحاولة مرة أخرى.'
          : 'Connection error. Please check your internet connection and try again.'
      );
    }
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
                {language === 'ar' ? 'اطلب عرض سعر' : 'Request a Quote'}
              </h2>
              <p className="text-white/90">
                {language === 'ar' 
                  ? 'احصل على عرض سعر مخصص لاحتياجاتك الأمنية'
                  : 'Get a customized quote for your security needs'}
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
              {language === 'ar' ? 'تم الإرسال بنجاح!' : 'Successfully Submitted!'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'ar'
                ? 'شكراً لتواصلك معنا. سنقوم بالرد على طلبك خلال 24 ساعة.'
                : 'Thank you for contacting us. We will respond to your request within 24 hours.'}
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
              {/* General Error Message */}
              {submitError && (
                <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-red-800">{submitError}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitError(null)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}

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

                {/* Company */}
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-4 h-4 text-[#EFB621]" />
                      {language === 'ar' ? 'اسم الشركة' : 'Company Name'}
                    </div>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder={language === 'ar' ? 'اسم الشركة (اختياري)' : 'Company name (optional)'}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#EFB621] focus:outline-none transition-colors"
                  />
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

                {/* Service Type */}
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-[#EFB621]" />
                      {language === 'ar' ? 'نوع الخدمة' : 'Service Type'}
                      <span className="text-red-500">*</span>
                    </div>
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.serviceType ? 'border-red-500' : 'border-gray-200'
                    } focus:border-[#EFB621] focus:outline-none transition-colors`}
                  >
                    <option value="">
                      {language === 'ar' ? 'اختر نوع الخدمة' : 'Select service type'}
                    </option>
                    {serviceTypes.map(service => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                  {errors.serviceType && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.serviceType}
                    </p>
                  )}
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-[#EFB621]" />
                      {language === 'ar' ? 'الموقع / المدينة' : 'Location / City'}
                    </div>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder={language === 'ar' ? 'الجبيل، الدمام، الخبر...' : 'Jubail, Dammam, Khobar...'}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#EFB621] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label className="block text-sm mb-2 text-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-[#EFB621]" />
                    {language === 'ar' ? 'تفاصيل المشروع / الاحتياجات' : 'Project Details / Requirements'}
                    <span className="text-red-500">*</span>
                  </div>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder={language === 'ar' 
                    ? 'اذكر تفاصيل المشروع، عدد الحراس المطلوب، المساحة، متطلبات خاصة...'
                    : 'Mention project details, number of guards needed, area size, special requirements...'}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.message ? 'border-red-500' : 'border-gray-200'
                  } focus:border-[#EFB621] focus:outline-none transition-colors resize-none`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* File Upload */}
              <div className="mt-6">
                <label className="block text-sm mb-2 text-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Upload className="w-4 h-4 text-[#EFB621]" />
                    {language === 'ar' ? 'إرفاق مستندات' : 'Attach Documents'}
                    <span className="text-xs text-gray-500">
                      ({language === 'ar' ? 'اختياري - حد أقصى 5 ملفات، 5MB لكل ملف' : 'Optional - Max 5 files, 5MB each'})
                    </span>
                  </div>
                </label>
                
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#EFB621] transition-colors">
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  
                  {files.length === 0 ? (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-gray-600 hover:text-[#EFB621] transition-colors"
                    >
                      <Upload className="w-10 h-10 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm">
                        {language === 'ar' 
                          ? 'اضغط لرفع الملفات أو اسحبها هنا'
                          : 'Click to upload files or drag them here'}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        PDF, DOC, DOCX, JPG, PNG
                      </p>
                    </button>
                  ) : (
                    <div className="space-y-2">
                      {files.map((file, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
                        >
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-[#EFB621]" />
                            <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                              <p className="text-sm text-gray-900">{file.name}</p>
                              <p className="text-xs text-gray-500">
                                {(file.size / 1024).toFixed(2)} KB
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      ))}
                      {files.length < 5 && (
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="text-sm text-[#EFB621] hover:text-[#d9a41d] transition-colors"
                        >
                          + {language === 'ar' ? 'إضافة المزيد' : 'Add More'}
                        </button>
                      )}
                    </div>
                  )}
                </div>
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
                      {language === 'ar' ? 'إرسال الطلب' : 'Submit Request'}
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