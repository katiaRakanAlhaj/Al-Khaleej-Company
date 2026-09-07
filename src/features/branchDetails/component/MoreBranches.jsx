import BranchCard from "../../../ui/branchCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import i18next from "i18next";

const MoreBranches = ({ branchesData }) => {
  const isRTL = i18next.language === "ar";

  return (
    <div className="lg:mt-[7rem] mt-[3rem] overflow-hidden">
      <div className="container1 mx-auto">
        <div className="bg-[#C4C6D4] w-full h-[0.1rem] pr-[3.8rem]"></div>
      </div>
      <div className={`w-full ${isRTL ? "lg:pr-[3.8rem]" : "lg:pl-[3.8rem]"}`}>
        <h1 className="text-[#111C2D] lg:text-3xl text-[1.5rem] font-bold lg:mt-[1rem] mt-[2rem] mb-[1rem] px-4 lg:px-0">
          {i18next.t("branches.more_branches")}
        </h1>
        <div className="swiper-wrapper-custom px-4 lg:px-0">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView="auto"
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              reverseDirection: isRTL, // Reverse autoplay direction for RTL
            }}
            loop={true}
            dir={isRTL ? "rtl" : "ltr"} // 👈 IMPORTANT: Set RTL/LTR direction
            className="w-full pb-[4rem]"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: "auto",
                spaceBetween: 24,
              },
            }}
          >
            {branchesData?.data?.map((branch, index) => (
              <SwiperSlide
                key={index}
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

export default MoreBranches;
