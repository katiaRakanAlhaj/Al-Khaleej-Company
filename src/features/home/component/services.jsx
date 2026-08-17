import TitleSection from "../../../ui/titleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./servicesStyle.css"
import service1 from "../../../assets/images/service1.png";
import service2 from "../../../assets/images/service2.png";
import service3 from "../../../assets/images/service3.png";
import { TfiArrowTopRight } from "react-icons/tfi";


const servicesData = [
  { id: 1, title: "Vehicle Insurance Vehicle Insurance", image: service1 },
  { id: 2, title: "Vehicle Insurance Vehicle Insurance", image: service2 },
  { id: 3, title: "Vehicle Insurance Vehicle Insurance", image: service3 },
  { id: 4, title: "Vehicle Insurance Vehicle Insurance", image: service1 },
  { id: 5, title: "Vehicle Insurance Vehicle Insurance", image: service2 },
  { id: 6, title: "Vehicle Insurance Vehicle Insurance", image: service3 },
];

const Services = () => {
  return (
    <div className="w-full mt-[4rem] py-[4rem] h-auto bg-[#F4F7FF] overflow-hidden">
      <div className="container1 mx-auto">
        <TitleSection title={"Our Services"} />
        <div className="grid grid-cols-12 mb-[3rem]">
          <div className="flex flex-col col-span-6">
            <h1 className="text-primary font-bold text-[2.5rem] w-[80%] leading-tight">
              Insurance service that keep you protect & confident
            </h1>
          </div>
          <div className="col-span-6 ml-[-2rem]">
            <p className="text-[1.125rem] text-[#777777]">
              Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
              tempor incididunt labore dolore magna aliquaenim ad minim. Sed risus
              commodo ornare felis non, eleifend eleifend.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full pl-[4rem]">
        <div className="swiper-wrapper-custom">
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
            }}
            loop={true}
            className="w-full pb-[4rem]"
          >
            {servicesData.map((service, index) => (
              <SwiperSlide key={index} className="!w-[22rem] transition-all duration-300">
                <div className="service-card relative h-[28rem] rounded-[1.5rem] overflow-hidden shadow-md cursor-pointer group">
                  {/* Image Container with Scale on Hover */}
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  {/* Content Container */}
                  <div className="absolute bottom-0 left-0 right-0 px-[1.5rem] pb-[1.3rem]">
                    {/* Title - close to bottom before hover */}
                    <h3 className="text-white tracking-[0.1rem] font-[600] text-xl leading-snug transition-all duration-300 group-hover:-translate-y-[0.8rem]">
                      {service.title}
                    </h3>
                  
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Services;