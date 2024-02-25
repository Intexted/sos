"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className="pt-10 text-center ">
      <h2 className="font-semibold text-3xl mb-5">{t("About")}</h2>
      <div className="flex flex-col md:flex-row gap-10">
        <p className="w-full md:w-1/2 text-2xl leading-8 text-justify px-5">
          {t("aboutP")}
        </p>
        <div className="thumb w-full md:w-[549px] px-5">
          <Image src="/about.jpeg" width={400} height={300} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
