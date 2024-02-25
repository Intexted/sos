"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const AppointmentForm = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { email, firstName, lastName, message, phone } = data;
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/send-message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            firstName,
            lastName,
            message,
            phone,
          }),
        }
      );
      if (!response.ok) {
        const data = await response.json();
        toast.error(data.err);
        return;
      }
      const data = await response.json();
      setLoading(false);
      reset();
      toast.success(data.success);
    } catch (err) {
      // console.log(err);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start w-full py-16">
      <div className="md:w-1/2 text-center ">
        <h2 className="font-semibold text-3xl mb-5">{t("Appointment")}</h2>
        <form className="w-full px-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-5 mb-5">
            <label className="form-control w-full">
              <input
                type="text"
                placeholder="Prénom"
                className="input input-bordered w-full"
                {...register("firstName", { required: "Prénom requis" })}
              />
              {errors.firstName && (
                <span className="text-red-500">{errors.firstName.message}</span>
              )}
            </label>
            <label className="form-control w-full">
              <input
                type="text"
                placeholder="Nom"
                className="input input-bordered w-full"
                {...register("lastName", { required: "Nom requis" })}
              />
              {errors.lastName && (
                <span className="text-red-500">{errors.lastName.message}</span>
              )}
            </label>
          </div>
          <div className="flex gap-5 mb-5">
            <label className="form-control w-full">
              <input
                type="text"
                placeholder="E-mail"
                className="input input-bordered w-full"
                {...register("email", {
                  required: "E-mail requis",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "E-mail invalide",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </label>
            <label className="form-control w-full">
              <input
                type="text"
                placeholder="Téléphone"
                className="input input-bordered w-full"
                {...register("phone", { required: "Téléphone requis" })}
              />
              {errors.phone && (
                <span className="text-red-500">{errors.phone.message}</span>
              )}
            </label>
          </div>
          <label className="form-control">
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Votre Message"
              {...register("message")}
            ></textarea>
          </label>
          <button
            type="submit"
            className="btn bg-[#1c2c50] hover:text-black text-white mt-5 font-semibold w-full"
          >
            {!loading ? "Envoyer" : "Loading..."}
          </button>
        </form>
      </div>
      <div>
        <Image src="/stethoscope.png" width={500} height={500} alt="" />
      </div>
    </div>
  );
};

export default AppointmentForm;
