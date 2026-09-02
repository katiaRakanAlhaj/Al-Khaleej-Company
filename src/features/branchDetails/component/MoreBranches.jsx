import BranchCard from "../../../ui/branchCard";
import branch1 from "../../../assets/images/branch1.png";
import branch2 from "../../../assets/images/branch2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import i18next from "i18next";

const MoreBranches = () => {
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

  return (
    <div className="lg:mt-[7rem] mt-[3rem] overflow-hidden">
      <div className="container1 mx-auto">
        <div className="bg-[#C4C6D4] w-full h-[0.1rem] pr-[3.8rem]"></div>
      </div>
      <div className={`w-full ${i18next.language == "en"?'lg:pl-[3.8rem]':'lg:pr-[3.8rem]'}`}>
        <h1 className="text-[#111C2D] lg:text-3xl text-[1.5rem] font-bold lg:mt-[1rem] mt-[2rem] mb-[1rem] px-4 lg:px-0">
          More branches
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
            }}
            loop={true}
            className="w-full pb-[4rem]"
            breakpoints={{
              // Mobile - show 1 slide with padding
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              // Tablet - show 2 slides
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // Desktop - show auto slides
              1024: {
                slidesPerView: "auto",
                spaceBetween: 24,
              },
            }}
          >
            {branchesData.map((branch, index) => (
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