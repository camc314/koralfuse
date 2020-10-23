import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { locale } from 'expo-localization';

import en from './assets/locales/en-US.json';
import fr from './assets/locales/fr-FR.json';

// the translations
const resources = {
  en: {
    translation: en
  },
  fr: {
    translation: fr
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    whitelist: ['fr', 'en'],
    lng: locale.split('-')[0],
    fallbackLng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
