"use client";

import { useState } from "react";
import Link from "next/link";
import i18n from "@/utils/i18n";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [menuopen, setMenuopen] = useState(false);
  const { t } = useTranslation();
  return (
    <header className="pt-2">
      <nav className="relative px-10 py-4 flex justify-between items-center ">
        <a
          className="text-lg text-gray-600 flex items-center gap-3 font-semibold leading-none"
          href="/"
        >
          <img src="/sos-1.svg" alt="logo" height={200} width={200} />
        </a>
        <div
          onClick={() => setMenuopen((menuopen) => !menuopen)}
          className={` ${menuopen ? "hidden" : ""} lg:hidden`}
        >
          <button className="navbar-burger flex items-center text-blue-600 p-3">
            <svg
              className="block h-7 w-7 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a className="text-sm text-[#15213C] font-bold " href="#">
              Accueil
            </a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-[#15213C]" href="#">
              About
            </a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-[#15213C]" href="#">
              Nos Services
            </a>
          </li>

          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-[#15213C]" href="#">
              Contact
            </a>
          </li>
        </ul>
        <button
          className="hidden md:flex"
          onClick={() =>
            i18n.changeLanguage(i18n?.language === "fr" ? "en" : "fr")
          }
        >
          {i18n?.language === "fr" ? (
            <div className="flex items-center gap-2 font-semibold text-base text-gray-700">
              <img src="/svg/en.svg" height={25} width={25} alt="" />
              <p>{t("language")}</p>
            </div>
          ) : (
            <div className="flex items-center gap-2 font-semibold text-base text-gray-700">
              <img src="/svg/fr.svg" height={25} width={25} alt="" />
              <p>{t("language")}</p>
            </div>
          )}
        </button>
      </nav>
      <div className={`navbar-menu relative z-50 ${!menuopen ? "hidden" : ""}`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a
              className="mr-auto text-xl flex gap-2 items-center font-semibold leading-none"
              href="/"
            >
              <img src="/sos-1.svg" alt="logo" width={150} />
            </a>

            <button
              onClick={() => setMenuopen((menuopen) => !menuopen)}
              className="navbar-close"
            >
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="/"
                >
                  Accueil
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Nos Services
                </a>
              </li>
              <li className="mb-20">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Contact
                </a>
              </li>
              <li className="mb-1">
                <button
                  onClick={() =>
                    i18n.changeLanguage(i18n?.language === "fr" ? "en" : "fr")
                  }
                >
                  {i18n?.language === "fr" ? (
                    <div className="flex items-center gap-2 font-semibold text-base">
                      <img src="/svg/en.svg" height={25} width={25} alt="" />
                      <p>{t("language")}</p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 font-semibold text-base">
                      <img src="/svg/fr.svg" height={25} width={25} alt="" />
                      <p>{t("language")}</p>
                    </div>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
