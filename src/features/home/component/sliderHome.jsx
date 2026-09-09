import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import i18next from "i18next";

const SliderHome = ({ homePageData }) => {
  // Extract sliders from the response data
  const slidesData = homePageData?.data?.sliders || [];

  // If you need to map the data structure
  const formattedSlides = slidesData.map((slide) => ({
    image: slide.banner,
    title: slide.description,
    id: slide.id
  }));

  // Check if language is Arabic (RTL)
  const isRTL = i18next.language === "ar";

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
        dir={isRTL ? "rtl" : "ltr"} // Add RTL support
      >
        {formattedSlides.map((slide, index) => (
          <SwiperSlide key={slide.id || index} className="relative -z-10 w-full h-full overflow-hidden bg-primary">
            {({ isActive }) => (
              <>
                {/* Background Image with Rounded Corner, Gradient, and Downward Slide Animation */}
                <div
                  className={`absolute inset-0 w-full h-full ${
                    isRTL 
                      ? 'lg:rounded-br-[16rem]' 
                      : 'lg:rounded-bl-[16rem]'
                  } overflow-hidden transition-all duration-1000 ease-out ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Linear Gradient Overlay - RTL Support */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: isRTL
                        ? "linear-gradient(270deg, rgba(0, 0, 0, 0.6) 0%, rgba(102, 102, 102, 0) 100%)"
                        : "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(102, 102, 102, 0) 100%)",
                    }}
                  />
                </div>

                {/* Content Overlay with Gradual Downward Slide Animation */}
                <div 
                  className={`absolute ${
                    isRTL ? 'lg:right-[7rem] right-[2rem]' : 'lg:left-[7rem] left-[2rem]'
                  } lg:top-[-3rem] inset-0 flex items-center px-8 md:px-16 z-10`}
                >
                  <div
                    className={`text-white max-w-xl transition-all duration-1000 ease-out delay-300 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-12"
                    } ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    <h1 className="lg:text-[2.5rem] text-[1.5rem] font-bold leading-tight mb-4">
                      {slide.title}
                    </h1>
                    {/* Uncomment if you want to show the button */}
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