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
            ? 'شركة أرتال الموحدة للحراسات الأمنية | حراسة المنشآت في السعودية'
            : 'Artal Unified Security Services | Licensed Security Guarding in Saudi Arabia'
        }
        description={
          isAr
            ? 'شركة حراسات أمنية مرخّصة من وزارة الداخلية (ترخيص رقم 361). حراسة احترافية للمنشآت الصناعية والتجارية والمشاريع والمنشآت الحكومية في جميع مناطق المملكة العربية السعودية.'
            : 'Licensed by the Ministry of Interior (License No. 361). Professional manned guarding for industrial, commercial, construction and government facilities across Saudi Arabia.'
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
