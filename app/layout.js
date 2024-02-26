import { Roboto, Tajawal } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: "500",
});

export const metadata = {
  metadataBase: new URL("https://www.ambulancerabat.com/"),
  alternates: {
    canonical: "/",
  },
  title:
    "Ambulance et Urgence Médicale à Domicile 24/7 au Maroc avec Médecins Qualifiés",
  description:
    "Bénéficiez de services médicaux d'urgence à domicile 24/7 au Maroc. Nos médecins qualifiés offrent des consultations rapides et efficaces. En cas de besoin de transport médicalisé, notre service d'ambulance est prêt à intervenir. Contactez-nous dès maintenant pour une assistance médicale rapide et fiable.",
  keywords: [
    "Médecin à Domicile Rabat",
    "Urgence Médicale Rabat",
    "Consultation à Domicile Rabat",
    "Soins d'Urgence en Ambulance Rabat",
    "Ambulance d'Urgence Rabat",
    "Service Médical à Domicile Rabat",
  ],

  openGraph: {
    title:
      "Service d'Ambulance et Urgence Médicale à Domicile 24/7 au Maroc avec Médecins Qualifiés",
    description:
      "Bénéficiez de services médicaux d'urgence à domicile 24/7 au Maroc. Nos médecins qualifiés offrent des consultations rapides et efficaces. En cas de besoin de transport médicalisé, notre service d'ambulance est prêt à intervenir. Contactez-nous dès maintenant pour une assistance médicale rapide et fiable.",
    url: "https://www.ambulancerabat.com/",
    images: "/opengraph-image.png",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={roboto.className}
        style={{ "--ar-font": tajawal.style.fontFamily }}
      >
        <Toaster position="top-right" />
        <Navbar />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
