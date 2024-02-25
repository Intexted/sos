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
      sos: "SOS AMBULANCES : RABAT - SALE - TEMARA - KENITRA",
      Au: "At the",
      accueil: "Home",
      About: "About us",
      Services: "Our Services",
      Contact: "Contact",
      Appointment: "Make an Appointment",
      testimonial: "What Our Clients Say About Us",
      location: "Our Location",
      aboutP:
        "We offer a complete range of medical services, including medical emergencies, home care, and hospitalizations. With our team of dedicated professionals, we guarantee personalized and quality care wherever you are. Our ambulances are equipped to quickly respond to any emergency, and we also offer home hospitalizations for continuous medical follow-up in the comfort of your home. Your health and well-being are our top priority. Contact us today to learn more and schedule your next medical consultation.",
    },
  },
  fr: {
    translation: {
      language: "Français",
      discover:
        "Découvrez nos services médicaux d'urgence à domicile ! Nos médecins qualifiés sont disponibles 24/7 pour des consultations rapides et efficaces. Recevez des soins de qualité chez vous, que ce soit pour une urgence médicale ou une simple consultation. Notre service d'ambulance est également prêt pour des transports médicalisés. Contactez-nous dès maintenant pour une assistance médicale rapide et fiable !",
      callUsNow: "Appelez-nous maintenant",
      sos: "SOS AMBULANCES : RABAT - SALÉ - TÉMARA - KENITRA",
      Au: "Au",
      accueil: "Accueil",
      About: "A Propos De Nous",
      Services: "Nos Services",
      Contact: "Contact",
      Appointment: "Prenez Un Rendez-Vous",
      testimonial: "Ce Que Nos Clients Disent De Nous",
      location: "Notre Localisation",
      aboutP:
        "Nous offrons une gamme complète de services médicaux, y compris des urgences médicales, des soins à domicile et des hospitalisations. Avec notre équipe de professionnels dévoués, nous vous garantissons des soins personnalisés et de qualité où que vous soyez. Nos ambulances sont équipées pour répondre rapidement à toute urgence, et nous proposons également des hospitalisations à domicile pour un suivi médical continu dans le confort de votre foyer. Votre santé et votre bien-être sont notre priorité absolue. Contactez-nous dès aujourd'hui pour en savoir plus et planifier votre prochaine consultation médicale.",
    },
  },
  ar: {
    translation: {
      language: "العربية",
      discover:
        "اكتشف خدماتنا الطبية الطارئة في المنزل! أطباؤنا المؤهلون متاحون على مدار الساعة للاستشارات السريعة والفعّالة. تلقى رعاية عالية الجودة في منزلك، سواء كان ذلك لحالة طبية طارئة أو استشارة عادية. خدمتنا للإسعاف جاهزة أيضًا للنقل الطبي. اتصل بنا الآن للحصول على مساعدة طبية سريعة وموثوقة!",
      callUsNow: "اتصل بنا الآن",
      sos: "سيارات الإسعاف : الرباط - السلا - تمارة - القنيطرة",
      Au: "في",
      accueil: "الرئيسية",
      About: "من نحن",
      Services: "خدماتنا",
      Contact: "اتصل",
      Appointment: "احجز موعدًا",
      testimonial: "ما يقوله عملاؤنا عنا",
      location: "موقعنا",
      aboutP:
        "نحن نقدم مجموعة كاملة من الخدمات الطبية بما في ذلك الطوارئ الطبية والرعاية المنزلية والإستشفاء. مع فريقنا من المحترفين الملتزمين، نضمن لك رعاية مخصصة وذات جودة أينما كنت. تم تجهيز سيارات الإسعاف الخاصة بنا للرد بسرعة على أي طارئة، ونقدم أيضًا الإستشفاء في المنزل للمتابعة الطبية المستمرة في راحة منزلك. صحتك ورفاهيتك هي أولويتنا القصوى. اتصل بنا اليوم لمعرفة المزيد وترتيب موعد لاستشارتك الطبية القادمة.",
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

const change_lang = () => {
  let lng = i18n.language.split("-")[0].toLowerCase();

  if (lng === "en" || lng === "fr" || lng === "ar") i18n.changeLanguage(lng);
  else {
    i18n.changeLanguage("fr");
  }
};
change_lang();

export { init_i18 };
export default i18n;
