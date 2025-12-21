import { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, ChevronRight, Users, TrendingUp, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CareersModal } from './CareersModal';

export function CareersSection() {
  const { language } = useLanguage();
  const [selectedPosition, setSelectedPosition] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  const openPositions = [
    {
      id: 1,
      title: language === 'ar' ? 'حارس أمن' : 'Security Guard',
      location: language === 'ar' ? 'الجبيل، الدمام، الخبر' : 'Jubail, Dammam, Khobar',
      type: language === 'ar' ? 'دوام كامل' : 'Full Time',
      experience: language === 'ar' ? '1-3 سنوات' : '1-3 Years',
      positions: '15',
      salary: language === 'ar' ? 'حسب الخبرة' : 'Based on experience',
      description: language === 'ar' 
        ? 'نبحث عن حراس أمن محترفين لديهم خبرة في المجال الأمني وحاصلين على دورات تدريبية.'
        : 'We are looking for professional security guards with experience in the security field and training courses.',
      requirements: language === 'ar'
        ? ['شهادة ثانوية أو ما يعادلها', 'خبرة سابقة في الحراسات الأمنية', 'اللياقة البدنية العالية', 'دورات تدريبية في المجال الأمني']
        : ['High school diploma or equivalent', 'Previous security experience', 'High physical fitness', 'Security training courses']
    },
    {
      id: 2,
      title: language === 'ar' ? 'مشرف أمن' : 'Security Supervisor',
      location: language === 'ar' ? 'الجبيل' : 'Jubail',
      type: language === 'ar' ? 'دوام كامل' : 'Full Time',
      experience: language === 'ar' ? '3-5 سنوات' : '3-5 Years',
      positions: '5',
      salary: language === 'ar' ? 'حسب الخبرة' : 'Based on experience',
      description: language === 'ar'
        ? 'مطلوب مشرف أمن ذو خبرة في إدارة فرق العمل الأمنية وتطبيق المعايير الأمنية.'
        : 'Security supervisor with experience in managing security teams and implementing security standards.',
      requirements: language === 'ar'
        ? ['خبرة لا تقل عن 3 سنوات في الإشراف الأمني', 'مؤهل جامعي (يفضل)', 'مهارات قيادية وإدارية', 'إجادة استخدام الحاسب الآلي']
        : ['Minimum 3 years supervisory experience', 'University degree (preferred)', 'Leadership and management skills', 'Computer proficiency']
    },
    {
      id: 3,
      title: language === 'ar' ? 'مشغل غرفة تحكم' : 'Control Room Operator',
      location: language === 'ar' ? 'الجبيل' : 'Jubail',
      type: language === 'ar' ? 'دوام كامل' : 'Full Time',
      experience: language === 'ar' ? '2-4 سنوات' : '2-4 Years',
      positions: '3',
      salary: language === 'ar' ? 'حسب الخبرة' : 'Based on experience',
      description: language === 'ar'
        ? 'نبحث عن مشغل غرفة تحكم ماهر في إدارة أنظمة المراقبة والتحكم الأمني.'
        : 'Skilled control room operator in managing surveillance and security control systems.',
      requirements: language === 'ar'
        ? ['خبرة في العمل بغرف التحكم الأمنية', 'معرفة بأنظمة المراقبة CCTV', 'القدرة على العمل بنظام الورديات', 'دقة عالية في الملاحظة والتقارير']
        : ['Control room experience', 'CCTV surveillance systems knowledge', 'Ability to work shifts', 'High attention to detail and reporting']
    },
    {
      id: 4,
      title: language === 'ar' ? 'مسؤول سلامة' : 'Safety Officer',
      location: language === 'ar' ? 'الجبيل، الدمام' : 'Jubail, Dammam',
      type: language === 'ar' ? 'دوام كامل' : 'Full Time',
      experience: language === 'ar' ? '3-6 سنوات' : '3-6 Years',
      positions: '2',
      salary: language === 'ar' ? 'حسب الخبرة' : 'Based on experience',
      description: language === 'ar'
        ? 'مطلوب مسؤول سلامة معتمد لضمان تطبيق معايير السلامة والصحة المهنية.'
        : 'Certified safety officer to ensure implementation of occupational health and safety standards.',
      requirements: language === 'ar'
        ? ['شهادة معتمدة في السلامة والصحة المهنية', 'خبرة في القطاع الصناعي', 'معرفة باللوائح والمعايير السعودية', 'مهارات تدريب وتوعية']
        : ['Certified in occupational health and safety', 'Industrial sector experience', 'Knowledge of Saudi regulations', 'Training and awareness skills']
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: language === 'ar' ? 'رواتب تنافسية' : 'Competitive Salary',
      description: language === 'ar' ? 'رواتب مجزية تتناسب مع الخبرة' : 'Attractive salaries based on experience'
    },
    {
      icon: TrendingUp,
      title: language === 'ar' ? 'فرص التطور' : 'Career Growth',
      description: language === 'ar' ? 'برامج تطوير وتدريب مستمر' : 'Continuous development and training programs'
    },
    {
      icon: Award,
      title: language === 'ar' ? 'بيئة عمل احترافية' : 'Professional Environment',
      description: language === 'ar' ? 'بيئة عمل محترفة وداعمة' : 'Professional and supportive work environment'
    },
    {
      icon: Users,
      title: language === 'ar' ? 'فريق متميز' : 'Outstanding Team',
      description: language === 'ar' ? 'انضم لفريق من الخبراء' : 'Join a team of experts'
    },
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EFB621]/10 px-6 py-3 rounded-full mb-6">
            <Briefcase className="w-5 h-5 text-[#EFB621]" />
            <span className="text-[#EFB621]">
              {language === 'ar' ? 'الوظائف' : 'Careers'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            {language === 'ar' ? 'انضم إلى فريقنا المتميز' : 'Join Our Outstanding Team'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar'
              ? 'نبحث عن محترفين موهوبين للانضمام إلى فريق أرتال وبناء مسيرة مهنية ناجحة في مجال الأمن والسلامة'
              : 'We are looking for talented professionals to join Artal team and build a successful career in security and safety'}
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-[#EFB621]/10 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-[#EFB621]" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Open Positions */}
        <div className="mb-12">
          <h3 className="text-3xl mb-8 text-gray-900 text-center">
            {language === 'ar' ? 'الوظائف المتاحة' : 'Open Positions'}
          </h3>
          <div className="grid gap-6">
            {openPositions.map((position) => (
              <div
                key={position.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    {/* Position Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#EFB621] to-[#d9a41d] rounded-xl flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-2xl mb-2 text-gray-900 group-hover:text-[#EFB621] transition-colors">
                            {position.title}
                          </h4>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4 text-[#EFB621]" />
                              {position.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4 text-[#EFB621]" />
                              {position.type}
                            </div>
                            <div className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4 text-[#EFB621]" />
                              {language === 'ar' ? 'الخبرة: ' : 'Experience: '}{position.experience}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4 text-[#EFB621]" />
                              {position.positions} {language === 'ar' ? 'وظائف متاحة' : 'positions'}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{position.description}</p>

                      <div className="mb-4">
                        <h5 className="text-sm text-gray-900 mb-2">
                          {language === 'ar' ? 'المتطلبات:' : 'Requirements:'}
                        </h5>
                        <ul className="space-y-1">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 text-[#EFB621] mt-0.5 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="w-4 h-4 text-[#EFB621]" />
                        <span className="text-gray-600">
                          {language === 'ar' ? 'الراتب: ' : 'Salary: '}{position.salary}
                        </span>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="lg:flex-shrink-0">
                      <button
                        onClick={() => handleApply(position.title)}
                        className="w-full lg:w-auto bg-gradient-to-r from-[#EFB621] to-[#d9a41d] text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2 group"
                      >
                        <span>{language === 'ar' ? 'قدم الآن' : 'Apply Now'}</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Decorative Bottom Border */}
                <div className="h-1 bg-gradient-to-r from-[#EFB621] to-[#d9a41d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#EFB621] to-[#d9a41d] rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl text-white mb-4">
              {language === 'ar' ? 'لم تجد الوظيفة المناسبة؟' : 'Didn\'t Find the Right Position?'}
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'أرسل سيرتك الذاتية وسنتواصل معك عند توفر الفرصة المناسبة'
                : 'Send us your CV and we will contact you when a suitable opportunity becomes available'}
            </p>
            <button
              onClick={() => {
                setSelectedPosition('');
                setIsModalOpen(true);
              }}
              className="bg-white text-[#EFB621] px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              <span>{language === 'ar' ? 'أرسل سيرتك الذاتية' : 'Send Your CV'}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Careers Modal */}
      <CareersModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPosition('');
        }}
        selectedPosition={selectedPosition}
      />
    </section>
  );
}
