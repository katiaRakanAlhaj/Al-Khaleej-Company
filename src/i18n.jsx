import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "../src/locale/en.json";
import arJSON from "../src/locale/ar.json";

const resources = {
    en: { translation: enJSON },
    ar: { translation: arJSON }
};

// Get language from URL first, then localStorage
const getInitialLanguage = () => {
  // Try to get from URL
  const path = window.location.pathname;
  const langMatch = path.match(/^\/(en|ar)(\/|$)/);
  if (langMatch) return langMatch[1];
  
  // Fallback to localStorage
  return localStorage.getItem("language") || "en";
};

const language = getInitialLanguage();

i18n
  .use(initReactI18next)
  .init({
      resources: resources,  // ← THIS WAS COMMENTED OUT!
      fallbackLng: "en",
      debug: true,
      interpolation: {
          escapeValue: false,
      },
      lng: language,
  }, (err) => {
      if (err) {
          console.log('i18next init error:', err);
          return;
      }
      console.log('i18next initialized with language:', language);
      console.log('Available resources:', Object.keys(i18n.options.resources));
  });

export default i18n;