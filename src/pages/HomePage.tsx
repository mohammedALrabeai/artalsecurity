import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { Hero } from '../components/Hero';
import { TrustBadges } from '../components/TrustBadges';
import { AboutSection } from '../components/AboutSection';
import { VisionMissionSection } from '../components/VisionMissionSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { GoalsSection } from '../components/GoalsSection';
import { SecurityStrategiesSection } from '../components/SecurityStrategiesSection';
import { SecurityDepartmentSection } from '../components/SecurityDepartmentSection';
import { OperationsControlSection } from '../components/OperationsControlSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { StatsSection } from '../components/StatsSection';
import { CertificatesSection } from '../components/CertificatesSection';
import { MaintenanceSection } from '../components/MaintenanceSection';
import { VideoSection } from '../components/VideoSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { SafetyQualitySection } from '../components/SafetyQualitySection';

export function HomePage() {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <>
      <SEO
        title={
          isAr
            ? 'شركة حراسات أمنية في السعودية — مرخّصة (361) | أرتال الموحدة'
            : 'Security Guarding Company in Saudi Arabia — Licensed (No. 361) | Artal'
        }
        description={
          isAr
            ? 'أرتال الموحدة شركة حراسات أمنية مرخّصة من وزارة الداخلية (ترخيص 361). نؤمّن المنشآت الصناعية والتجارية والمشاريع والجهات الحكومية في كل مناطق المملكة بكوادر مدرّبة وعمليات على مدار الساعة. اطلب عرض سعر الآن.'
            : 'Artal Unified is a licensed security guarding company (Ministry of Interior No. 361). We secure industrial, commercial, construction and government facilities across Saudi Arabia with trained personnel and 24/7 operations. Request a quote today.'
        }
        keywords={
          isAr
            ? 'شركة حراسات أمنية, شركة أمن وحراسة, حراسات أمنية صناعية, حراسة منشآت, شركة حراسات في السعودية, أرتال للحراسات الأمنية'
            : 'security company Saudi Arabia, security guarding, industrial security, facility security, manned guarding Riyadh'
        }
        path="/"
      />
      <Hero />
      <TrustBadges />
      <AboutSection />
      <SafetyQualitySection />
      <VisionMissionSection />
      <VideoSection />
      <ExperienceSection />
      <GoalsSection />
      <SecurityStrategiesSection />
      <SecurityDepartmentSection />
      <OperationsControlSection />
      <ServicesSection />
      <ProjectsSection />
      <StatsSection />
      <CertificatesSection />
      <MaintenanceSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
