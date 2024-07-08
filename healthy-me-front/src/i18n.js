import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "th",
    resources: {
      en: {
        translation: {
          greeting: "EN",
          mainpage: "Main Page",
          calpday: "Calories per day",
          healthfood: "Clean menu",
          savecal: "Save calories",
          login: "Login",
        },
      },
      th: {
        translation: {
          greeting: "TH",
          mainpage: "หน้าแรก",
          calpday: "แคลลอรี่ต่อวัน",
          healthfood: "เมนูลดน้ำหนัก",
          savecal: "บันทึกแคลลอรี่",
          login: "เข้าสู่ระบบ",
        },
      },
    },
  });
