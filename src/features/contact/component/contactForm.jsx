import React, { useState, useEffect, useRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import i18next from "i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContactUs } from "../hook/usePostContact";
import toast, { Toaster } from "react-hot-toast";
import { contactSchema } from "./contactShema";

// ✅ Site Key الموحّد
const RECAPTCHA_SITE_KEY = "6Lc45-EtAAAAACjSTAL7gfiV_fzWRXg-Y-_fxpaK";

// ==================== Reusable Input Field ====================
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

// ==================== Reusable Textarea Field ====================
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

// ==================== Main Contact Form ====================
const ContactForm = ({ noMargin = false }) => {
  const { mutate, isPending } = useContactUs();

  const [recaptchaError, setRecaptchaError] = useState("");
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  const isSubmittingRef = useRef(false);

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

  // ═══════════════════════════════════════════════════════
  // ✅ تحميل reCAPTCHA v3 — نفس طريقة ContactInfo
  // ═══════════════════════════════════════════════════════
  useEffect(() => {
    const loadRecaptcha = () => {
      // لو الـ script موجود بالفعل، متضيفهوش تاني
      if (document.getElementById("recaptcha-script")) {
        // بس اتأكد إن grecaptcha جاهزة
        if (window.grecaptcha?.ready) {
          window.grecaptcha.ready(() => {
            console.log("✅ reCAPTCHA v3 is READY");
            setIsRecaptchaLoaded(true);
          });
        } else {
          // استنى لحد ما يبقى جاهز
          const int = setInterval(() => {
            if (window.grecaptcha?.ready) {
              window.grecaptcha.ready(() => {
                console.log("✅ reCAPTCHA v3 is READY");
                setIsRecaptchaLoaded(true);
              });
              clearInterval(int);
            }
          }, 100);
        }
        return;
      }

      console.log("📥 Loading reCAPTCHA script...");
      const script = document.createElement("script");
      script.id = "recaptcha-script";
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        console.log("✅ reCAPTCHA script loaded");
        if (window.grecaptcha?.ready) {
          window.grecaptcha.ready(() => {
            console.log("✅ reCAPTCHA v3 is READY");
            setIsRecaptchaLoaded(true);
          });
        }
      };

      script.onerror = () => {
        console.error("❌ reCAPTCHA script failed to load");
        setRecaptchaError(i18next.t("contact.recaptcha_error"));
      };

      document.body.appendChild(script);
    };

    loadRecaptcha();

    // ⚠️ ممنوع شيل الـ script في الـ cleanup
  }, []);

  // ═══════════════════════════════════════════════════════
  // ✅ الحصول على التوكن — نفس طريقة ContactInfo
  // ═══════════════════════════════════════════════════════
  const getRecaptchaToken = async () => {
    if (!window.grecaptcha?.ready) {
      console.error("reCAPTCHA not loaded");
      return "";
    }

    try {
      await new Promise((r) => window.grecaptcha.ready(r));

      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: "submit",
      });

      // 🔍 DEBUG LOGS
      console.log("════════════ RECAPTCHA DEBUG ════════════");
      console.log("RAW TOKEN:", token);
      console.log("TOKEN TYPE:", typeof token);
      console.log("TOKEN LENGTH:", token?.length);
      console.log("FIRST 30 CHARS:", token?.substring(0, 30));
      console.log("LAST 30 CHARS:", token?.substring(token.length - 30));
      console.log("HOSTNAME:", window.location.hostname);
      console.log("ORIGIN:", window.location.origin);
      console.log("SITE KEY USED:", RECAPTCHA_SITE_KEY);
      console.log("═════════════════════════════════════════");

      return token;
    } catch (error) {
      console.error("reCAPTCHA error:", error);
      return "";
    }
  };

  // ═══════════════════════════════════════════════════════
  // ✅ Submit Handler
  // ═══════════════════════════════════════════════════════
  const onSubmit = async (data) => {
    // منع الإرسال المتكرر
    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;

    setRecaptchaError("");

    // تحقق من تحميل reCAPTCHA
    if (!isRecaptchaLoaded) {
      const msg = i18next.t("contact.recaptcha_loading");
      setRecaptchaError(msg);
      toast.error(msg, {
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
      isSubmittingRef.current = false;
      return;
    }

    // الحصول على التوكن
    const token = await getRecaptchaToken();
    console.log("reCAPTCHA Token:", token);

    if (!token) {
      const msg = i18next.t("contact.recaptcha_error");
      setRecaptchaError(msg);
      toast.error(msg, {
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
      isSubmittingRef.current = false;
      return;
    }

    // تجهيز الـ payload
    const payload = {
      ...data,
      "g-recaptcha-response": token,
    };

    // 🔍 DEBUG الـ payload النهائي
    console.log("════════════ FINAL PAYLOAD ════════════");
    console.log("Payload keys:", Object.keys(payload));
    console.log(
      "Token in payload (first 30):",
      payload["g-recaptcha-response"]?.substring(0, 30)
    );
    console.log(
      "Token in payload length:",
      payload["g-recaptcha-response"]?.length
    );
    console.log("Full payload:", payload);
    console.log("═══════════════════════════════════════");

    mutate(payload, {
      onSuccess: () => {
        reset();
        setRecaptchaError("");
        isSubmittingRef.current = false;
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
        console.error("❌ Form submission error:", error);
        isSubmittingRef.current = false;
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

  // ==================== Render ====================
  return (
    <>
      <Toaster />
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

          {/* Phone & Email */}
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

          {/* reCAPTCHA error message */}
          {recaptchaError && (
            <p className="text-red-500 text-sm mt-1">{recaptchaError}</p>
          )}

          
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