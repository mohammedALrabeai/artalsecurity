import { Header } from '../components/Header';
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
import { CareersSection } from '../components/CareersSection';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/BackToTop';
import { FloatingContact } from '../components/FloatingContact';
import { FloatingQuoteButton } from '../components/FloatingQuoteButton';
// import { FloatingContactBar } from '../components/FloatingContactBar'; // Alternative: Uncomment to use sidebar style
import { LanguageProvider } from '../context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <TrustBadges />
        <AboutSection />
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
        <CareersSection />
        <FAQSection />
        <Footer />
        <BackToTop />
        
        {/* Floating Contact Button - Main Style */}
        <FloatingContact />
        
        {/* Floating Quote Button - Prominent CTA */}
        <FloatingQuoteButton />
        
        {/* Alternative: Floating Contact Sidebar - Uncomment below and comment FloatingContact above to use */}
        {/* <FloatingContactBar /> */}
      </div>
    </LanguageProvider>
  );
}
