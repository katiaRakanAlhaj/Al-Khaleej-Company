import branch1 from "../../../assets/images/branch1.png";
import branch2 from "../../../assets/images/branch2.jpg";
import TitleSection from "../../../ui/titleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./servicesStyle.css";
import { FaMapMarkerAlt } from "react-icons/fa";

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
    <div className="w-full mt-[4rem] py-[2rem] h-auto bg-[#FFFFFF] overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center mb-[3rem]">
        <TitleSection title={"Our branches"} />
        <h1 className="font-bold text-primary text-[2.5rem] mt-[1rem] text-center">
          The Prims People Trust Most
        </h1>
      </div>

      {/* Swiper Slider Section */}
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
            {branchesData.map((branch, index) => (
              <SwiperSlide
                key={index}
                className="!w-[28rem] transition-all duration-300"
              >
                <div className="bg-white h-[26rem] rounded-[1.5rem] overflow-hidden shadow-lg cursor-pointer group border border-gray-100">
                  {/* Branch Image Container with Glassy Primary Cover Overlay */}
                  <div className="w-full h-[15rem] relative overflow-hidden">
                    <img
                      src={branch.image}
                      alt={branch.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Glassmorphic & Primary Color Blended Cover on Hover */}
                    <div className="absolute inset-0 bg-primary/30  opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>

                  {/* Branch Content */}
                  <div className="px-[1.5rem]">
                    <h3 className="text-primary font-bold text-xl mb-2 mt-2">
                      {branch.title}
                    </h3>
                    <p className="text-[#777777] text-lg leading-relaxed">
                      {branch.description}
                    </p>
                    <div className="flex items-center gap-2 text-md text-[#000000] pt-3 border-t border-gray-100">
                      <FaMapMarkerAlt className="text-red-500 text-[1.1rem] shrink-0" />
                      <span>{branch.address}</span>
                    </div>
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

export default OurBranches;