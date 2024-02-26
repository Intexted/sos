"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const ServiceSection = () => {
  const { t } = useTranslation();
  const services = [
    {
      title: t("service1 title"),
      image: "doctor.svg",
      description: t("service1 content"),
    },
    {
      title: t("service2 title"),
      image: "home.svg",
      description: t("service2 content"),
    },
    {
      title: t("service3 title"),
      image: "ambulance.svg",
      description: t("service3 content"),
    },
  ];
  return (
    <div id="service" className="text-center ">
      <h2 className="font-semibold  text-3xl">{t("Services")}</h2>
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
  );
};

export default ServiceSection;
