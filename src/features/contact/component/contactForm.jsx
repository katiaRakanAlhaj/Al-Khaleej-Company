import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import i18next from "i18next";
// Reusable input field component
const InputField = ({
  label,
  type = "text",
  placeholder,
  required = true,
  className = "",
}) => (
  <div className={className}>
    <label className="block md:text-lg text-md font-bold text-gray-900 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-4 text-lg border border-[#A1A1A1] rounded-lg focus:outline-none font-light placeholder-[#A1A1A1]"
    />
  </div>
);

// Reusable textarea component
const TextAreaField = ({ label, rows = 4, placeholder, required = true }) => (
  <div>
    <label className="block md:text-lg text-md font-bold text-gray-900 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      rows={rows}
      placeholder={placeholder}
      className="w-full px-4 py-6 h-[12rem] text-lg border border-[#A1A1A1] rounded-lg focus:outline-none font-light placeholder-[#A1A1A1] resize-none"
    />
  </div>
);

const ContactForm = ({ noMargin = false }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <div
      style={{ boxShadow: "0px 0px 8px 0px #00000040" }}
      className={`lg:col-span-6 lg:h-[47rem] bg-white rounded-2xl lg:px-[3rem] px-[1.5rem] lg:py-[4rem] py-[2rem] ${
        noMargin ? "" : "lg:mt-[6rem] mt-[3rem]"
      }`}
    >
      <h2 className="lg:text-5xl text-[2rem] font-bold text-gray-900 mb-6">
        {i18next.t("contact.title")}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label={i18next.t("contact.first_name")}
            placeholder={i18next.t("contact.first_name_placeholder")}
          />
          <InputField
            label={i18next.t("contact.last_name")}
            placeholder={i18next.t("contact.last_name_placeholder")}
          />
        </div>

        {/* Phone Number & Email Address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label={i18next.t("contact.phone")}
            type="tel"
            placeholder={i18next.t("contact.phone_placeholder")}
          />
          <InputField
            label={i18next.t("contact.email")}
            type="email"
            placeholder={i18next.t("contact.email_placeholder")}
          />
        </div>

        {/* Message */}
        <TextAreaField
          label={i18next.t("contact.message")}
          placeholder={i18next.t("contact.message_placeholder")}
          rows={4}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="inline-flex items-center justify-center px-4 py-4 mt-[1rem] bg-primary hover:bg-blue-800 text-white font-bold md:text-lg text-md cursor-pointer shadow-md transition-colors duration-200 space-x-2"
        >
          <span>{i18next.t("contact.message_placeholder")}</span>
          <icon
            className={`md:text-[1.5rem] text-[1.3rem] ${i18next.language == "ar" ? "-rotate-90" : ""}`}
          >
            <MdOutlineArrowOutward />
          </icon>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
