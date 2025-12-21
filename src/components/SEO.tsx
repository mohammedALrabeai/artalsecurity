import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export function SEO({
  title,
  description,
  keywords,
  ogImage = 'https://artalsecurity.com/og-image.jpg',
  canonical = 'https://artalsecurity.com'
}: SEOProps) {
  const { language } = useLanguage();

  useEffect(() => {
    // Update HTML lang and dir attributes
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

    // Update title
    if (title) {
      document.title = title;
      updateMetaTag('property', 'og:title', title);
      updateMetaTag('name', 'twitter:title', title);
    }

    // Update description
    if (description) {
      updateMetaTag('name', 'description', description);
      updateMetaTag('property', 'og:description', description);
      updateMetaTag('name', 'twitter:description', description);
    }

    // Update keywords
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }

    // Update OG image
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('name', 'twitter:image', ogImage);

    // Update canonical URL
    updateLinkTag('canonical', canonical);

    // Update language-specific alternate links
    updateLinkTag('alternate', canonical, language);
  }, [language, title, description, keywords, ogImage, canonical]);

  return null;
}

// Helper function to update meta tags
function updateMetaTag(attribute: string, key: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

// Helper function to update link tags
function updateLinkTag(rel: string, href: string, hreflang?: string) {
  const selector = hreflang 
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;
    
  let element = document.querySelector(selector);
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    if (hreflang) {
      element.setAttribute('hreflang', hreflang);
    }
    document.head.appendChild(element);
  }
  
  element.setAttribute('href', href);
}

// Hook for dynamic SEO
export function useSEO(props: SEOProps) {
  const { language } = useLanguage();

  useEffect(() => {
    const { title, description, keywords, ogImage, canonical } = props;

    // Update HTML attributes
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

    // Update meta tags
    if (title) {
      document.title = title;
      updateMetaTag('property', 'og:title', title);
      updateMetaTag('name', 'twitter:title', title);
    }

    if (description) {
      updateMetaTag('name', 'description', description);
      updateMetaTag('property', 'og:description', description);
      updateMetaTag('name', 'twitter:description', description);
    }

    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }

    if (ogImage) {
      updateMetaTag('property', 'og:image', ogImage);
      updateMetaTag('name', 'twitter:image', ogImage);
    }

    if (canonical) {
      updateLinkTag('canonical', canonical);
    }
  }, [language, props]);
}