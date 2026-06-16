import { Outlet, useLocation } from 'react-router-dom';
import { ClientOnly } from 'vite-react-ssg';
import { LanguageProvider } from './context/LanguageContext';
import { GlobalSchema } from './components/GlobalSchema';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { FloatingContact } from './components/FloatingContact';
import { FloatingQuoteButton } from './components/FloatingQuoteButton';

/**
 * Root layout — language is derived from the URL (/ar prefix) so each route
 * prerenders in the correct language. Wraps every route with the language
 * provider and site chrome. Floating widgets are client-only.
 */
export function Layout() {
  const { pathname } = useLocation();
  const initialLanguage =
    pathname === '/ar' || pathname.startsWith('/ar/') ? 'ar' : 'en';

  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <GlobalSchema />
      <div className="min-h-screen bg-white">
        <Header />
        <Outlet />
        <Footer />
        <ClientOnly>
          {() => (
            <>
              <BackToTop />
              <FloatingContact />
              <FloatingQuoteButton />
            </>
          )}
        </ClientOnly>
      </div>
    </LanguageProvider>
  );
}
