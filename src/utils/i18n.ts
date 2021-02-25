import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
// import languageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
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
