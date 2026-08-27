import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

// Reusable input field component
const InputField = ({
  label,
  type = "text",
  placeholder,
  required = true,
  className = "",
}) => (
  <div className={className}>
    <label className="block text-lg font-bold text-gray-900 mb-1">
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
    <label className="block text-lg font-bold text-gray-900 mb-1">
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
      style={{ boxShadow: '0px 0px 8px 0px #00000040' }} 
      className={`lg:col-span-6 h-[47rem] bg-white rounded-2xl px-[3rem] py-[4rem] ${
        noMargin ? '' : 'mt-[6rem]'
      }`}
    >
      <h2 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField label="First Name" placeholder="Enter First Name" />
          <InputField label="Last Name" placeholder="Enter Last Name" />
        </div>

        {/* Phone Number & Email Address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="Phone Number"
            type="tel"
            placeholder="Enter Phone Number"
          />
          <InputField
            label="Email Address"
            type="email"
            placeholder="Enter Email Address"
          />
        </div>

        {/* Message */}
        <TextAreaField label="Message" placeholder="Any Message" rows={4} />

        {/* Submit Button */}
        <button
          type="submit"
          className="inline-flex items-center justify-center px-4 py-4 mt-[1rem] bg-primary hover:bg-blue-800 text-white font-bold text-lg cursor-pointer shadow-md transition-colors duration-200 space-x-2"
        >
          <span>Submit Message</span>
          <icon className="text-[1.5rem]">
            <MdOutlineArrowOutward />
          </icon>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;