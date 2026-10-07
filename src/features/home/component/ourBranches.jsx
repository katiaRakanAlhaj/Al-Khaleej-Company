import TitleSection from "../../../ui/titleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./servicesStyle.css";
import BranchCard from "../../../ui/branchCard";
import i18next from "i18next";
import { Link, useNavigate } from "react-router-dom";

const OurBranches = ({ homePageData }) => {
  const allBranches = homePageData?.data?.branches || [];
  const navigate = useNavigate();

  // 🔥 افصل الفرع الرئيسي عن الباقي
  const mainBranch = allBranches.find((b) => b.is_main);
  const otherBranches = allBranches.filter((b) => !b.is_main);

  const isRTL = i18next.language === "ar";
  const slides = isRTL ? [...otherBranches].reverse() : otherBranches;

  const branchesTitle =
    homePageData?.data?.home_page?.our_branches_title || "Our Branches";

  // 🔥 helper to open WhatsApp
  const openWhatsApp = (number) => {
    const cleanNumber = number.replace(/[^0-9]/g, "");
    window.open(
      `https://wa.me/${cleanNumber}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="w-full lg:mt-[4rem] mt-[2rem] py-[2rem] h-auto bg-[#FFFFFF] overflow-hidden">
      {/* Header */}
      <div className="flex flex-col justify-center items-center mb-[3rem] px-[1rem]">
        <TitleSection title={i18next.t("branches.branches_title")} />
        <h1 className="font-bold text-primary lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] mt-[1rem] text-center">
          {branchesTitle}
        </h1>
      </div>

      {/* 🔥 Main Branch Featured Card */}
      {mainBranch && (
        <div className="w-full px-[1rem] lg:px-[4rem] mb-[3rem]">
          <div
            onClick={() =>
              navigate(`/${i18next.language}/branch/${mainBranch.id}`)
            }
            className="relative cursor-pointer bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-[1.875rem] overflow-hidden border border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Badge */}
            <div className="absolute top-[1rem] ltr:right-[1rem] rtl:left-[1rem] z-20 flex items-center gap-[0.5rem] bg-primary text-white px-[1rem] py-[0.375rem] rounded-full text-[0.875rem] font-semibold shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[1rem] h-[1rem]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {i18next.t("branches.main_branch")}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative min-h-[17.5rem] lg:min-h-[26.25rem] overflow-hidden group">
                <img
                  src={mainBranch.image}
                  alt={mainBranch.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r" />
              </div>

              {/* Content */}
              <div className="p-[1.5rem] lg:p-[2.5rem] flex flex-col justify-center">
                <h2 className="text-primary font-bold text-[1.5rem] lg:text-[1.875rem] mb-[1rem]">
                  {mainBranch.name}
                </h2>

                <div className="w-[4rem] h-[0.0625rem] bg-primary rounded-full mb-[1.25rem]" />

                <p className="text-gray-600 text-md lg:text-lg leading-relaxed mb-[1.5rem] whitespace-pre-line">
                  {mainBranch.description}
                </p>

                {/* Info Row */}
                <div className="space-y-[0.75rem] mb-[1.5rem]">
                  {/* Address */}
                  {mainBranch.address && (
                    <div className="flex items-start gap-[0.75rem]">
                      <div className="w-[2.25rem] h-[2.25rem] rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[1rem] h-[1rem] text-primary"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-md lg:text-lg pt-[0.375rem]">
                        {mainBranch.address}
                      </span>
                    </div>
                  )}

                  {/* Phone */}
                  {mainBranch.number && mainBranch.number !== "00000000000" && (
                    <div className="flex items-center gap-[0.75rem]">
                      <div className="w-[2.25rem] h-[2.25rem] rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[1rem] h-[1rem] text-primary"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z" />
                        </svg>
                      </div>
                      <a
                        href={`https://wa.me/${mainBranch.number.replace(
                          /[^0-9]/g,
                          "",
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-700 text-md lg:text-lg pt-[0.375rem] hover:text-primary transition-colors"
                        dir="ltr"
                      >
                        {mainBranch.number}
                      </a>
                    </div>
                  )}

                  {/* Email */}
                  {mainBranch.email && (
                    <div className="flex items-center gap-[0.75rem]">
                      <div className="w-[2.25rem] h-[2.25rem] rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[1rem] h-[1rem] text-primary"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </div>
                      <a
                        href={`mailto:${mainBranch.email}`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.location.href = `mailto:${mainBranch.email}`;
                        }}
                        className="text-gray-700 text-md lg:text-lg pt-[0.375rem] hover:text-primary transition-colors break-all"
                        dir="ltr"
                      >
                        {mainBranch.email}
                      </a>
                    </div>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-[0.75rem]">
                  {mainBranch.number && mainBranch.number !== "00000000000" && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openWhatsApp(mainBranch.number);
                      }}
                      className="flex items-center gap-[0.5rem] bg-white text-primary border-[0.125rem] border-primary px-[1.5rem] py-[0.75rem] rounded-[0.75rem] font-semibold text-[0.875rem] hover:bg-primary hover:text-white transition-all shadow-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[1rem] h-[1rem]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z" />
                      </svg>
                      {i18next.t("branches.call_now")}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Divider */}
      {mainBranch && otherBranches.length > 0 && (
        <div className="flex items-center justify-center gap-[1rem] px-[1rem] mb-[2rem]">
          <div className="h-[0.0625rem] bg-gray-200 flex-1 max-w-[12.5rem]" />
          <span className="text-gray-400 text-md lg:text-2xl font-bold text-primary whitespace-nowrap">
            {i18next.t("branches.other_branches")}{" "}
          </span>
          <div className="h-[0.0625rem] bg-gray-200 flex-1 max-w-[12.5rem]" />
        </div>
      )}

      {/* Swiper Slider - Other Branches */}
      <div className="w-full px-[1rem] md:px-0 lg:pl-[4rem]">
        <div className="swiper-wrapper-custom">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView="auto"
            dir={isRTL ? "rtl" : "ltr"}
            rtl={isRTL}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={otherBranches.length > 3}
            className="w-full pb-[4rem]"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 0, centeredSlides: false },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: "auto",
                spaceBetween: 24,
                centeredSlides: false,
              },
            }}
          >
            {slides.map((branch, index) => (
              <SwiperSlide
                key={branch.id || index}
                className="lg:!w-[28rem] md:!w-[20rem] !w-full transition-all duration-300"
              >
                <BranchCard branch={branch} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurBranches;
