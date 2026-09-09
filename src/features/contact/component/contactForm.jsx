import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import i18next from "i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContactUs } from "../hook/usePostContact";
import toast, { Toaster } from "react-hot-toast";
import { contactSchema } from "./contactShema";

// Reusable input field component with react-hook-form integration
const InputField = ({
  label,
  type = "text",
  placeholder,
  required = true,
  className = "",
  register,
  error,
  name,
}) => (
  <div className={className}>
    <label className="block md:text-lg text-md font-bold text-gray-900 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className={`w-full px-4 py-4 text-lg border ${
        error ? "border-red-500" : "border-[#A1A1A1]"
      } rounded-lg focus:outline-none font-light placeholder-[#A1A1A1]`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

// Reusable textarea component with react-hook-form integration
const TextAreaField = ({
  label,
  rows = 4,
  placeholder,
  required = true,
  register,
  error,
  name,
}) => (
  <div>
    <label className="block md:text-lg text-md font-bold text-gray-900 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      rows={rows}
      placeholder={placeholder}
      {...register(name)}
      className={`w-full px-4 py-6 h-[12rem] text-lg border ${
        error ? "border-red-500" : "border-[#A1A1A1]"
      } rounded-lg focus:outline-none font-light placeholder-[#A1A1A1] resize-none`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

const ContactForm = ({ noMargin = false }) => {
  const { mutate, isPending } = useContactUs();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        toast.success(i18next.t("contact.success_message"), {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#22c55e",
            color: "#fff",
            padding: "16px",
            borderRadius: "12px",
          },
          icon: "✅",
        });
      },
      onError: (error) => {
        console.error("Form submission error:", error);
        toast.error(i18next.t("contact.error_message"), {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#ef4444",
            color: "#fff",
            padding: "16px",
            borderRadius: "12px",
          },
          icon: "❌",
        });
      },
    });
  };

  return (
   <>
   <Toaster/>
    <div
      style={{ boxShadow: "0px 0px 8px 0px #00000040" }}
      className={`lg:col-span-6 lg:h-auto bg-white rounded-2xl lg:px-[3rem] px-[1.5rem] lg:py-[4rem] py-[2rem] ${
        noMargin ? "" : "lg:mt-[6rem] mt-[3rem]"
      }`}
    >
      <h2 className="lg:text-5xl text-[2rem] font-bold text-gray-900 mb-6">
        {i18next.t("contact.title")}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* First Name & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label={i18next.t("contact.first_name")}
            placeholder={i18next.t("contact.first_name_placeholder")}
            register={register}
            error={errors.first_name}
            name="first_name"
          />
          <InputField
            label={i18next.t("contact.last_name")}
            placeholder={i18next.t("contact.last_name_placeholder")}
            register={register}
            error={errors.last_name}
            name="last_name"
          />
        </div>

        {/* Phone Number & Email Address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label={i18next.t("contact.phone")}
            placeholder={i18next.t("contact.phone_placeholder")}
            register={register}
            error={errors.phone}
            name="phone"
          />
          <InputField
            label={i18next.t("contact.email")}
            type="email"
            placeholder={i18next.t("contact.email_placeholder")}
            register={register}
            error={errors.email}
            name="email"
          />
        </div>

        {/* Message */}
        <TextAreaField
          label={i18next.t("contact.message")}
          placeholder={i18next.t("contact.message_placeholder")}
          rows={4}
          register={register}
          error={errors.message}
          name="message"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center px-4 py-4 mt-[1rem] bg-primary hover:bg-blue-800 text-white font-bold md:text-lg text-md cursor-pointer shadow-md transition-colors duration-200 space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>
            {isPending
              ? i18next.t("contact.sending")
              : i18next.t("contact.submit")}
          </span>
          <icon
            className={`md:text-[1.5rem] text-[1.3rem] ${
              i18next.language == "ar" ? "-rotate-90" : ""
            }`}
          >
            <MdOutlineArrowOutward />
          </icon>
        </button>
      </form>
    </div>
   </>
  );
};

export default ContactForm;