"use client";
import Stars from "./icons/Stars";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const reviews = [
    {
      name: "Ilias Bellaoui",
      review: "Fast and professional service!",
    },
    { name: "Rania El", review: "Good service and good luck" },
    { name: "Brahim Mouchane", review: "Good SOS ambulance service in Rabat" },
    { name: "Zakaria As", review: "Good Services" },
    { name: "Sou Fiane", review: "SOS top" },
    { name: "Soukaina", review: "Trés Bon service ambulance sos rabat" },
  ];
  return (
    <div className="text-center">
      <h2 className="font-semibold   text-3xl mb-5 capitalize">
        {t("testimonial")}
      </h2>
      <div className="flex flex-wrap gap-3 pb-5 ">
        {reviews.map((item) => (
          <div
            key={item.name}
            className="flex flex-col text-left border p-4 rounded-md shadow-md flex-1"
          >
            <div className="flex items-center gap-2">
              <div className="bg-[rgb(3,65,146)] rounded-full text-white flex items-center justify-center w-12 h-12">
                {item.name[0]}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <Stars />
                <h3 className="mt-3 text-base">{item.review}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
