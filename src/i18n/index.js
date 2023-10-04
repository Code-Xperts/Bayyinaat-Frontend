// i18n/index.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
      excludeCacheFor: ['cimode'],
      htmlTag: document.documentElement, // Use the HTML tag to dynamically set the dir attribute
    },
  });
  
  i18n.changeLanguage('en');

// Set the dir attribute dynamically based on language
document.documentElement.dir = i18n.dir();

export default i18n;
