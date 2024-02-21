import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title:
    "Urgence Médicale à Domicile au Maroc: Consultation 24/7 avec Médecins Qualifiés et Service d'Ambulance",
  description:
    "Offrant des services médicaux d'urgence à domicile au Maroc, notre équipe de médecins qualifiés est disponible 24h/24 et 7j/7 pour des consultations rapides et efficaces. Que ce soit pour une urgence médicale ou une simple consultation, nous vous apportons des soins de qualité dans le confort de votre foyer. De plus, notre service d'ambulance est prêt à intervenir pour des transports médicalisés en cas de besoin. Contactez-nous dès maintenant pour une assistance médicale rapide et fiable, sans attendre.",
  keywords: [
    "Médecin à Domicile Maroc",
    "Urgence Médicale Maroc",
    "Consultation à Domicile Maroc",
    "Urgence Médicale Maroc",
    "Soins d'Urgence en Ambulance",
    "Ambulance d'Urgence Maroc",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={roboto.className}>
        <Toaster position="top-right" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
