import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from 'locales/en/translation.json';
import es from 'locales/es/translation.json';

const defaultLanguage = 'en';

const resources = {
  en,
  es,
};

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
