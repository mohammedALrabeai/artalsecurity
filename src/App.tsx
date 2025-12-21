import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { FloatingContact } from './components/FloatingContact';
import { FloatingQuoteButton } from './components/FloatingQuoteButton';
// import { FloatingContactBar } from './components/FloatingContactBar'; // Alternative: Uncomment to use sidebar style
import { LanguageProvider } from './context/LanguageContext';
import { HomePage } from './pages/HomePage';
import { CareersPage } from './pages/CareersPage';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Header />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
          
          <Footer />
          <BackToTop />
          
          {/* Floating Contact Button - Main Style */}
          <FloatingContact />
          
          {/* Floating Quote Button - Prominent CTA */}
          <FloatingQuoteButton />
          
          {/* Alternative: Floating Contact Sidebar - Uncomment below and comment FloatingContact above to use */}
          {/* <FloatingContactBar /> */}
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}