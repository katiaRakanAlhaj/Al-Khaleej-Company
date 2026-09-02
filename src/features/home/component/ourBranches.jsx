import branch1 from "../../../assets/images/branch1.png";
import branch2 from "../../../assets/images/branch2.jpg";
import TitleSection from "../../../ui/titleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./servicesStyle.css";
import BranchCard from "../../../ui/branchCard";
import i18next from "i18next";

const branchesData = [
  {
    id: 1,
    title: "Al-Arsat branch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    address: "Arasat Al-Hindia St., Al-Karrada, Baghdad, Iraq",
    image: branch1,
  },
  {
    id: 2,
    title: "Al-Arsat branch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    address: "Arasat Al-Hindia St., Al-Karrada, Baghdad, Iraq",
    image: branch2,
  },
  {
    id: 3,
    title: "Al-Arsat branch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    address: "Arasat Al-Hindia St., Al-Karrada, Baghdad, Iraq",
    image: branch1,
  },
  {
    id: 4,
    title: "Al-Arsat branch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    address: "Arasat Al-Hindia St., Al-Karrada, Baghdad, Iraq",
    image: branch2,
  },
  {
    id: 5,
    title: "Al-Arsat branch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    address: "Arasat Al-Hindia St., Al-Karrada, Baghdad, Iraq",
    image: branch2,
  },
  {
    id: 6,
    title: "Al-Arsat branch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    address: "Arasat Al-Hindia St., Al-Karrada, Baghdad, Iraq",
    image: branch2,
  },
];

const OurBranches = () => {
  return (
    <div className="w-full lg:mt-[4rem] mt-[2rem] py-[2rem] h-auto bg-[#FFFFFF] overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center mb-[3rem] px-4">
        <TitleSection title={i18next.t("branches.branches_title")} />
        <h1 className="font-bold text-primary lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] mt-[1rem] text-center">
          The Prims People Trust Most
        </h1>
      </div>

      {/* Swiper Slider Section */}
      <div className="w-full px-4 md:px-0 lg:pl-[4rem]">
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
            breakpoints={{
              // Mobile - show 1 slide with padding
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: false,
              },
              // Tablet - show 2 slides
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
              },
              // Desktop - show auto slides
              1024: {
                slidesPerView: "auto",
                spaceBetween: 24,
                centeredSlides: false,
              },
            }}
          >
            {branchesData.map((branch, index) => (
              <SwiperSlide
                key={index}
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