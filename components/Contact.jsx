"use client";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pl-8 md:pl-16 md:px-20 w-full bg-[rgb(2,33,75)] py-5 text-neutral-content border-b-2 border-gray-800 ">
      <span className="flex items-center gap-5 mb-1 ">
        <FaEnvelope size={35} />
        <h4 className="text-center  font-semibold">
          {t("email")} <br className="hidden md:flex" />{" "}
          sosambulancerabat@gmail.com
        </h4>
      </span>
      <a href="tel:+212654845780" className="flex items-center gap-5 mb-1 ">
        <FaPhoneAlt size={35} />
        <h4 className="text-center underline font-semibold cursor-pointer ltr">
          {t("callUs")} <br className="hidden md:flex" />
          +212 611-130509
        </h4>
      </a>
      <span className="flex items-center gap-5 ">
        <FaMapMarkerAlt size={35} />
        <h4 className="text-center  font-semibold">
          Addresse <br className="hidden md:flex" /> Av. Zarbia, Salé 11000
        </h4>
      </span>
    </div>
  );
}

export default Contact;
