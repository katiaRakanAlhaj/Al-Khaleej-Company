import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Import assets and icons
import slide1 from "../../../assets/images/slide1.png";
import slide2 from "../../../assets/images/service1.png";
import slide3 from "../../../assets/images/service2.png";

import { IoIosArrowRoundForward } from "react-icons/io";
import i18next from "i18next";

// Slide Data array
const slidesData = [
  {
    image: slide1,
    title: "An investment in your peace of mind... Lifetime security... Protect your family's future today.",
    buttonText: "Lets get started",
  },
  {
    image: slide2,
    title: "Secure your wealth and assets with comprehensive coverage tailored for you.",
    buttonText: "Lets get started",
  },
  {
    image: slide3,
    title: "An investment in your peace of mind... Lifetime security... Protect your family's future today.",
    buttonText: "Lets get started",
  },
];

const SliderHome = () => {
  return (
    <div className="relative w-full lg:h-[40rem] h-[25rem] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className="relative -z-10 w-full h-full overflow-hidden bg-primary">
            {({ isActive }) => (
              <>
                {/* Background Image with Rounded Corner, Gradient, and Downward Slide Animation */}
                <div
                  className={`absolute inset-0 w-full h-full ${i18next.language == "en"?'lg:rounded-bl-[16rem]':'lg:rounded-br-[16rem]'} overflow-hidden transition-all duration-1000 ease-out ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt="Slide background"
                    className="w-full h-full object-cover"
                  />
                  {/* Linear Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(102, 102, 102, 0) 100%)",
                    }}
                  />
                </div>

                {/* Content Overlay with Gradual Downward Slide Animation */}
                <div className="absolute lg:left-[7rem] left-[2rem] lg:top-[-3rem] inset-0 flex items-center px-8 md:px-16 z-10">
                  <div
                    className={`text-white max-w-xl transition-all duration-1000 ease-out delay-300 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-12"
                    }`}
                  >
                    <h1 className="lg:text-[2.5rem] text-[1.5rem] font-bold leading-tight mb-4">
                      {slide.title}
                    </h1>
                    {/* <button className="w-[14rem] h-[3.5rem] flex justify-center cursor-pointer items-center gap-x-2 shadow-lg bg-[#214CA9] hover:bg-[#1a3b85] transition-colors">
                      <p className="text-white text-lg font-bold">
                        {slide.buttonText}
                      </p>
                      <span className="text-[2.5rem]">
                        <IoIosArrowRoundForward />
                      </span>
                    </button> */}
                  </div>
                </div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderHome;