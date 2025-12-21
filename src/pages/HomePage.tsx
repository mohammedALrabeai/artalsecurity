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
  return (
    <>
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