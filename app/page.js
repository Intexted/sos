import Image from "next/image";
import dynamic from "next/dynamic";
import AboutSection from "@/components/AboutSection";
import AppointmentForm from "@/components/AppointmentForm";
import LocationSection from "@/components/LocationSection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
const HeroSection = dynamic(() => import("@/components/HeroSection"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start py-5 px-2 md:px-16">
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <AppointmentForm />
      <LocationSection />
      <TestimonialsSection />
      {/* Whatsapp Icon */}
      <a
        href="https://api.whatsapp.com/send?phone=+212654845780&text=Salut "
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: 10,
          height: 50,
          width: 50,
          right: 10,
          zIndex: 999,
          borderRadius: "50%",
          boxShadow: "rgba(0, 0, 0, 0.133) 0px 10px 40px",
        }}
      >
        <Image
          src="/whatsapp.svg"
          alt="whatsapp logo"
          height={50}
          width={50}
          className="cursor-pointer"
        />
      </a>
      {/* Phone Icon */}
      <a
        href="tel:+212654845780"
        style={{
          position: "fixed",
          bottom: 10,
          height: 50,
          width: 50,
          left: 10,
          zIndex: 999,
          borderRadius: "50%",
          boxShadow: "rgba(0, 0, 0, 0.133) 0px 10px 40px",
        }}
      >
        <Image
          src="/phone.svg"
          alt="phone logo"
          height={50}
          width={50}
          className="cursor-pointer"
        />
      </a>
    </main>
  );
}
