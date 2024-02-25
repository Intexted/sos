"use client";
import { useTranslation } from "react-i18next";

const LocationSection = () => {
  const { t } = useTranslation();
  return (
    <div id="contact" className="w-full  px-3 text-center mb-10">
      <h2 className="font-semibold text-3xl mb-5">{t("location")}</h2>
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
  );
};

export default LocationSection;
