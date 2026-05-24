import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Custom hook to handle dynamic language switching via query parameter
 * Usage: ?lang=en, ?lang=hi, ?lang=gu
 * Automatically scrolls to target section if ?scroll parameter is provided
 */
export const useLangQueryParam = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Get query parameters from URL
    const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
    const langParam = params.get('lang');
    const scrollTarget = params.get('scroll');

    // Change language if lang parameter is valid
    if (langParam && ['en', 'hi', 'gu'].includes(langParam)) {
      i18n.changeLanguage(langParam);
    }

    // Auto-scroll to target section if scroll parameter provided
    if (scrollTarget) {
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [i18n]);
};
