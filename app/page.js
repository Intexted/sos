import AppointmentForm from "@/components/AppointmentForm";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  const services = [
    {
      title: "Médecine d’Urgence",
      image: "doctor.svg",
      description:
        " SOS Urgence est dotée d’une équipe d’urgentistes compétente qui assure une permanence de soins.",
    },
    {
      title: "Hospitalisation à Domicile",
      image: "home.svg",
      description:
        "SOS Urgence propose l’hospitalisation à domicile pour se rétablirchez soi entouré de ses proches.",
    },
    {
      title: "Ambulance Equipée",
      image: "ambulance.svg",
      description:
        "SOS Urgence met à votre disposition un transport médicalisé pour être accompagné dans les meilleures conditions.",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-start py-5 px-2 md:px-16">
      {/*Hero Image With Call to Action Btns*/}
      <div className="hero relative overflow-hidden min-h-[400px] rounded-lg w-full mb-10">
        <Image
          src="/hero.jpeg"
          alt="background image"
          priority
          fill
          style={{
            height: "100%",
            display: "flex",
            position: "absolute",
            width: "100%",
            objectFit: "cover",
          }}
        />

        <div className="hero-content h-full w-full text-center bg-[#0009]">
          <div className="max-w-5xl text-gray-50">
            <h1
              className="text-2xl md:text-4xl font-bold capitalize"
              style={{
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
              }}
            >
              SOS AMBULANCES MÉDECINS: RABAT - SALE - TEMARA
              <br />
              Au <span className=" underline">+212 654-845780</span>
            </h1>

            <p className="px-10 py-6 leading-loose text-center text-base md:text-lg font-semibold">
              Découvrez nos services médicaux d&apos;urgence à domicile ! Nos
              médecins qualifiés sont disponibles 24/7 pour des consultations
              rapides et efficaces. Recevez des soins de qualité chez vous, que
              ce soit pour une urgence médicale ou une simple consultation.
              Notre service d&apos;ambulance est également prêt pour des
              transports médicalisés. Contactez-nous dès maintenant pour une
              assistance médicale rapide et fiable !
            </p>
            <a
              href="tel:+212647478911"
              className="btn bg-[#15213C] w-full md:w-1/3 font-semibold text-white hover:text-black"
            >
              <FaPhoneAlt /> Appelez-nous Maintenant
            </a>
          </div>
        </div>
      </div>

      {/*Nos Services*/}
      <div id="service" className="text-center md:text-left">
        <h2 className="font-semibold  text-3xl">Nos Services:</h2>
        <div className="w-full flex flex-col md:flex-row gap-3 items-center mt-5 mb-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="w-full border-2 rounded-md shadow-sm px-2 py-5 gap-5 md:w-1/3 flex flex-col md:gap-2 items-center justify-center"
            >
              <Image src={`/${item.image}`} width={140} height={170} alt="" />
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="px-5 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/*About us*/}
      <div id="about" className="pt-10 text-center md:text-left">
        <h2 className="font-semibold text-3xl mb-5">A Propos de nous</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <p className="w-full md:w-1/2 text-xl text-justify px-5">
            Nous offrons une gamme complète de services médicaux, y compris des
            urgences médicales, des soins à domicile et des hospitalisations.
            <br /> Avec notre équipe de professionnels dévoués, nous vous
            garantissons des soins personnalisés et de qualité où que vous
            soyez.
            <br /> Nos ambulances sont équipées pour répondre rapidement à toute
            urgence, et nous proposons également des hospitalisations à domicile
            pour un suivi médical continu dans le confort de votre foyer.
            <br />
            Votre santé et votre bien-être sont notre priorité absolue.
            Contactez-nous dès aujourd&apos;hui pour en savoir plus et planifier
            votre prochaine consultation médicale.
          </p>
          <div className="thumb w-full md:w-[549px] px-5">
            <Image src="/about.jpeg" width={400} height={350} alt="" />
          </div>
        </div>
      </div>
      {/*Form To Contact Us*/}
      <AppointmentForm />

      {/*Maps*/}
      <div id="contact" className="w-full  px-3 text-center md:text-left mb-10">
        <h2 className="font-semibold text-3xl mb-5">Notre Localisation</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13226.759457209768!2d-6.7533261!3d34.0261709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76a771f082c8f%3A0x20c2f08a6c95a48!2sHospital%20Moulay%20Abdellah!5e0!3m2!1sen!2sma!4v1708526531874!5m2!1sen!2sma"
          title="SoS Ambulance Location"
          style={{ border: 0, width: "100%", height: "300px" }}
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md"
        />
      </div>

      {/*Testimonials*/}
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

      <a
        href="tel:+212647478911"
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
