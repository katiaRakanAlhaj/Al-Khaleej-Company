import TitleSection from "../../../ui/titleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./servicesStyle.css";
import BranchCard from "../../../ui/branchCard";
import i18next from "i18next";

const OurBranches = ({homePageData}) => {
  // Get branches from API response
  const branches = homePageData?.data?.branches || [];
  
  // Detect if current language is Arabic
  const isRTL = i18next.language === 'ar';
  
  // For RTL, reverse the slides order
  const slides = isRTL ? [...branches].reverse() : branches;

  // Get the title from home_page data
  const branchesTitle = homePageData?.data?.home_page?.our_branches_title || "Our Branches";

  return (
    <div className="w-full lg:mt-[4rem] mt-[2rem] py-[2rem] h-auto bg-[#FFFFFF] overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center mb-[3rem] px-4">
        <TitleSection title={i18next.t("branches.branches_title")} />
        <h1 className="font-bold text-primary lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] mt-[1rem] text-center">
          {branchesTitle}
        </h1>
      </div>

      {/* Swiper Slider Section */}
      <div className="w-full px-4 md:px-0 lg:pl-[4rem]">
        <div className="swiper-wrapper-custom">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView="auto"
            dir={isRTL ? "rtl" : "ltr"}
            rtl={isRTL}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={branches.length > 3}
            className="w-full pb-[4rem]"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: false,
              },
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
                <BranchCard 
                  branch={branch} 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurBranches;