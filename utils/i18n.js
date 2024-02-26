import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      language: "English",
      discover:
        "Discover our emergency medical services at home! Our qualified doctors are available 24/7 for quick and efficient consultations. Receive quality care at your doorstep, whether it's for a medical emergency or a simple consultation. Our ambulance service is also ready for medical transportation. Contact us now for fast and reliable medical assistance!",
      callUsNow: "Call us now",
      callUs: "Call us",
      sos: "SOS AMBULANCES : RABAT - SALE - TEMARA - KENITRA",
      Au: "At the",
      email: "Email",
      accueil: "Home",
      About: "About us",
      Services: "Our Services",
      Contact: "Contact",
      Appointment: "Make an Appointment",
      testimonial: "What Our Clients Say About Us",
      location: "Our Location",
      aboutP:
        "We offer a comprehensive range of medical services, including medical emergencies, home care, and hospitalizations. With our team of dedicated professionals, we guarantee personalized and quality care wherever you are. Our ambulances are equipped to respond quickly to any emergency, and we also provide home hospitalizations for continuous medical monitoring in the comfort of your home. Your health and well-being are our top priority. Contact us today to learn more and schedule your next medical consultation.",
      "service1 title": "Emergency Medicine",
      "service2 title": "Home Hospitalization",
      "service3 title": "Equipped Ambulance",
      "service1 content":
        "SOS Urgency is equipped with a competent team of emergency physicians ensuring continuous care.",
      "service2 content":
        "SOS Urgency offers home hospitalization services, allowing patients to recover at home surrounded by their loved ones.",
      "service3 content":
        "SOS Urgency provides you with medical transportation equipped to accompany you under the best conditions.",
    },
  },
  fr: {
    translation: {
      language: "Français",
      discover:
        "Explorez nos services médicaux d'urgence à domicile ! Nos médecins qualifiés sont disponibles 24/7 pour des consultations rapides et efficaces. Bénéficiez de soins de qualité chez vous, que ce soit pour une urgence médicale ou une simple consultation. Notre service d'ambulance est également prêt pour des transports médicalisés. Contactez-nous dès maintenant pour une assistance médicale rapide et fiable !",
      callUsNow: "Appelez-nous maintenant",
      callUs: "Appelez-nous",
      sos: "SOS AMBULANCES : RABAT - SALÉ - TÉMARA - KENITRA",
      Au: "Au",
      email: "Email",
      accueil: "Accueil",
      About: "A Propos De Nous",
      Services: "Nos Services",
      Contact: "Contact",
      Appointment: "Prenez Un Rendez-Vous",
      testimonial: "Ce Que Nos Clients Disent De Nous",
      location: "Notre Localisation",
      aboutP:
        "Nous offrons une gamme complète de services médicaux, y compris des urgences médicales, des soins à domicile et des hospitalisations. Avec notre équipe de professionnels dévoués, nous vous garantissons des soins personnalisés et de qualité où que vous soyez. Nos ambulances sont équipées pour répondre rapidement à toute urgence, et nous proposons également des hospitalisations à domicile pour un suivi médical continu dans le confort de votre foyer. Votre santé et votre bien-être sont notre priorité absolue. Contactez-nous dès aujourd'hui pour en savoir plus et planifier votre prochaine consultation médicale.",
      "service1 title": "Médecine d’Urgence",
      "service2 title": "Hospitalisation à Domicile",
      "service3 title": "Ambulance Equipée",
      "service1 content":
        "SOS Urgence bénéficie d’une équipe d’urgentistes compétente assurant une permanence des soins.",
      "service2 content":
        "SOS Urgence offre des services d'hospitalisation à domicile, permettant aux patients de récupérer chez eux entourés de leurs proches.",
      "service3 content":
        "SOS Urgence met à votre disposition un transport médicalisé pour être accompagné dans les meilleures conditions.",
    },
  },
  ar: {
    translation: {
      language: "العربية",
      discover:
        "اكتشف خدماتنا الطبية الطارئة في المنزل! أطباؤنا المؤهلون متاحون على مدار الساعة طوال أيام الأسبوع للمشاورات السريعة والفعّالة. احصل على رعاية ذات جودة عندك في المنزل، سواء كان الأمر بحاجة إلى طوارئ طبية أو استشارة بسيطة. خدمة الإسعاف لدينا جاهزة أيضًا للنقل الطبي. اتصل بنا الآن للحصول على مساعدة طبية سريعة وموثوقة!",
      callUsNow: "اتصل بنا الآن",
      callUs: "اتصل بنا",

      sos: "سيارات الإسعاف : الرباط - السلا - تمارة - القنيطرة",
      Au: "في",
      email: "البريد الإلكتروني",
      accueil: "الرئيسية",
      About: "من نحن",
      Services: "خدماتنا",
      Contact: "اتصل",
      Appointment: "احجز موعدًا",
      testimonial: "ما يقوله عملاؤنا عنا",
      location: "موقعنا",
      aboutP:
        "نقدم مجموعة شاملة من الخدمات الطبية، بما في ذلك الطوارئ الطبية، والرعاية المنزلية، والإقامات في المستشفى. مع فريقنا من المحترفين المتفانين، نضمن لك رعاية شخصية وجودة في أي مكان تكون فيه. تم تجهيز سيارات الإسعاف الخاصة بنا للرد بسرعة على أي طوارئ، ونقدم أيضًا الإقامات في المستشفى المنزلية للمتابعة الطبية المستمرة في راحة منزلك. صحتك ورفاهيتك هي أولويتنا القصوى. اتصل بنا اليوم لمعرفة المزيد وترتيب موعد لاستشارتك الطبية القادمة.",
      "service1 title": "طب الطوارئ",
      "service2 title": "الإستشفاء في المنزل",
      "service3 title": "سيارة إسعاف مجهزة",
      "service1 content":
        "SOS الطوارئ مجهزة بفريق متميز من أطباء الطوارئ يضمن توفير رعاية مستمرة.",
      "service2 content":
        "تقدم SOS الطوارئ خدمات الإقامة في المنزل، مما يتيح للمرضى الانتعاش في المنزل ومحاطين بأحبائهم.",
      "service3 content":
        "SOS الطوارئ توفر لك خدمة نقل طبي مجهزة لضمان مرافقتك في أفضل الظروف.",
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

  if (lng === "en" || lng === "fr" || lng === "ar") {
    i18n.changeLanguage(lng);
    if (i18n?.language === "ar") {
      document.body.classList.add("rtl");
    }
  } else {
    i18n.changeLanguage("fr");
  }
};
change_lang();

export { init_i18 };
export default i18n;
