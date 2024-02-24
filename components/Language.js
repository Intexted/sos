import React, { useState } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

function Language() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const { t } = useTranslation();
  const change_lang = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    try {
      if (i18n?.language === "ar") {
        document.body.classList.add("rtl");
      } else {
        document.body.classList.remove("rtl");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {languageOpen && (
        <div
          onClick={() => {
            setLanguageOpen(false);
          }}
          className="lang_overlay"
        ></div>
      )}
      <div className=" lang-dropdown">
        <div
          className="flex items-center gap-2 cursor-pointer "
          onClick={() => setLanguageOpen((languageOpen) => !languageOpen)}
        >
          <a
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Image
              height={26}
              width={26}
              src={
                i18n?.language === "fr"
                  ? "/svg/fr.svg"
                  : i18n?.language === "en"
                  ? "/svg/en.svg"
                  : "/ar.png"
              }
              alt="flag"
            />
            <span style={{ fontWeight: 600 }}>{t("language")}</span>
          </a>
          <FaChevronDown />
        </div>
        {languageOpen && (
          <div className="navbar-dropdown">
            <a
              className="navbar-item cursor-pointer"
              onClick={() => {
                setLanguageOpen(false);
                change_lang("en");
              }}
            >
              <Image
                height={26}
                width={26}
                src="/svg/en.svg"
                alt="american flag"
              />
              <span>English</span>
            </a>
            <a
              className="navbar-item cursor-pointer"
              onClick={() => {
                setLanguageOpen(false);
                change_lang("fr");
              }}
            >
              <Image
                height={26}
                width={26}
                src="/svg/fr.svg"
                alt="france flag"
              />
              <span>Français</span>
            </a>
            <a
              className="navbar-item cursor-pointer"
              onClick={() => {
                setLanguageOpen(false);
                change_lang("ar");
              }}
            >
              <Image height={26} width={26} src="/ar.png" alt="morocco flag" />
              <span>العربية</span>
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Language;
