import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import languageDetector from "i18next-browser-languagedetector";

i18n
  // TODO: uncomment when english translations are available
  // .use(languageDetector)
  .use(initReactI18next)
  .init({
    lng: "cs",
    fallbackLng: "cs",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
