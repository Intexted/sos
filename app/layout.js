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
  title:
    "Urgence Médicale à Domicile au Maroc: Consultation 24/7 avec Médecins Qualifiés et Service d'Ambulance",
  description:
    "Offrant des services médicaux d'urgence à domicile au Maroc, notre équipe de médecins qualifiés est disponible 24h/24 et 7j/7 pour des consultations rapides et efficaces. Que ce soit pour une urgence médicale ou une simple consultation, nous vous apportons des soins de qualité dans le confort de votre foyer. De plus, notre service d'ambulance est prêt à intervenir pour des transports médicalisés en cas de besoin. Contactez-nous dès maintenant pour une assistance médicale rapide et fiable, sans attendre.",
  keywords: [
    "Médecin à Domicile Rabat",
    "Urgence Médicale Rabat",
    "Consultation à Domicile Rabat",
    "Urgence Médicale Rabat",
    "Soins d'Urgence en Ambulance Rabat",
    "Ambulance d'Urgence Rabat",
  ],
  openGraph: {
    images: "/opengraph-image.png",
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
