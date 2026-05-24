import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false);
  };

  const currentLanguage = i18n.language || 'en';
  const languageLabels: { [key: string]: string } = {
    en: t('header.lang_en'),
    hi: t('header.lang_hi'),
    gu: t('header.lang_gu'),
  };

  return (
    <header className="sticky top-0 z-50 bg-primary backdrop-blur-md border-b border-white/5 shadow-custom-shadow-l1">
      <div className="max-w-container-max mx-auto px-4 md:px-gutter">
        <div className="h-20 flex justify-between items-center">
          {/* Brand Logo */}
          <div className="flex items-center">
            <h1 className="font-display-lg text-headline-md md:text-headline-md font-extrabold text-on-primary tracking-tight">
              {t('header.brand')}
            </h1>
          </div>

          {/* Language Switcher */}
          <nav className="flex items-center gap-2 md:gap-6">
            {/* Desktop Language Links */}
            <div className="hidden sm:flex items-center gap-4">
              {['en', 'hi', 'gu'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`font-label-sm text-label-sm font-semibold transition-colors duration-200 ${
                    currentLanguage === lang
                      ? 'text-secondary text-white'
                      : 'text-on-surface-variant hover:text-on-primary'
                  }`}
                  aria-label={`Switch to ${languageLabels[lang]}`}
                  title={languageLabels[lang]}
                >
                  {languageLabels[lang]}
                </button>
              ))}
            </div>

            {/* Mobile Language Dropdown */}
            <div className="sm:hidden relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-container/50 hover:bg-primary-container transition-colors"
                aria-label="Select language"
                aria-expanded={isDropdownOpen}
              >
                <span className="font-label-sm text-on-primary">
                  {languageLabels[currentLanguage]}
                </span>
                <svg
                  className={`w-4 h-4 text-on-primary transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-surface-container border border-outline rounded-xl shadow-custom-shadow-l2 overflow-hidden z-50">
                  {['en', 'hi', 'gu'].map((lang, index) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`block w-full text-left px-4 py-3 font-label-sm font-semibold transition-colors ${
                        index > 0 ? 'border-t border-outline-variant' : ''
                      } ${
                        currentLanguage === lang
                          ? 'bg-secondary/20 text-secondary'
                          : 'text-on-primary hover:bg-white/5 active:bg-white/10'
                      }`}
                      aria-current={currentLanguage === lang ? 'true' : undefined}
                    >
                      {languageLabels[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
