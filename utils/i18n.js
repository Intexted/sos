import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      language: "English",
      discover:
        "Discover our emergency medical services at home! Our qualified doctors are available 24/7 for quick and effective consultations. Receive quality care at your doorstep, whether it's for a medical emergency or a routine consultation. Our ambulance service is also ready for medical transportation. Contact us now for fast and reliable medical assistance!",
      callUsNow: "Call us now",
      sos: "SOS AMBULANCES DOCTORS: RABAT - SALE - TEMARA",
      Au: "At the",
      phone: "+212 654-845780",
    },
  },
  fr: {
    translation: {
      language: "Français",
      discover:
        "Découvrez nos services médicaux d'urgence à domicile ! Nos médecins qualifiés sont disponibles 24/7 pour des consultations rapides et efficaces. Recevez des soins de qualité chez vous, que ce soit pour une urgence médicale ou une simple consultation. Notre service d'ambulance est également prêt pour des transports médicalisés. Contactez-nous dès maintenant pour une assistance médicale rapide et fiable !",
      callUsNow: "Appelez-nous maintenant",
      sos: "SOS AMBULANCES MÉDECINS : RABAT - SALÉ - TÉMARA",
      Au: "Au",
      phone: "+212 654-845780",
    },
  },
  ar: {
    translation: {
      language: "العربية",
      discover:
        "اكتشف خدماتنا الطبية الطارئة في المنزل! أطباؤنا المؤهلون متاحون على مدار الساعة للاستشارات السريعة والفعّالة. تلقى رعاية عالية الجودة في منزلك، سواء كان ذلك لحالة طبية طارئة أو استشارة عادية. خدمتنا للإسعاف جاهزة أيضًا للنقل الطبي. اتصل بنا الآن للحصول على مساعدة طبية سريعة وموثوقة!",
      callUsNow: "اتصل بنا الآن",
      sos: "سيارات الإسعاف الأطباء: الرباط - السلا - تمارة",
      Au: "في",
      phone: "+212 654-845780",
    },
  },
};

const init_i18 = ({ resources }) => {
  return i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
      // the translations
      // (tip move them in a JSON file and import them,
      // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
      resources,
      //   lng: 'fr', // if you're using a language detector, do not define the lng option
      fallbackLng: "fr",

      detection: {
        order: [
          "querystring",
          "cookie",
          "localStorage",
          "sessionStorage",
          "navigator",
          "path",
          "subdomain",
        ],
      },

      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    });
};

init_i18({ resources });

export { init_i18 };
export default i18n;
