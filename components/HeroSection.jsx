"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt, FaPhone } from "react-icons/fa";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className="hero relative overflow-hidden min-h-[400px] rounded-lg w-full mb-10">
      <Image
        src="/herobg.jpeg"
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

      <div className="hero-content h-full w-full text-center bg-[#0004]">
        <div className="max-w-5xl text-gray-50">
          <h1
            className="text-2xl md:text-4xl font-bold capitalize"
            style={{
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            {t("sos")}
          </h1>

          <p className=" px-2 md:px-10 py-6 leading-loose text-center text-base md:text-lg font-semibold">
            {t("discover")}
          </p>
          <a
            href="tel:+212611130509"
            className="btn bg-[#1c2c50] w-full md:w-1/3 font-semibold text-white hover:text-black"
          >
            <FaPhoneAlt /> {t("callUsNow")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
