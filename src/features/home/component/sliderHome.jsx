import slide from "../../../assets/images/slide1.png";
import { useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const SliderHome = () => {
  return (
    <div className="relative w-full h-[40rem] overflow-hidden">
      {/* Blue Background Div (Sits behind the image, same size, no rounded corners) */}
      <div className="absolute inset-0 w-full h-full bg-primary" />

      {/* Background Image with Rounded Corner and Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full rounded-bl-[16rem] overflow-hidden">
        <img
          src={slide}
          alt="Family protection"
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

      {/* Content Overlay */}
      <div className="absolute left-[7rem] top-[-3rem] inset-0 flex items-center px-8 md:px-16 z-10">
        <div className="text-white max-w-xl">
          <h1 className="lg:text-[2.5rem] font-bold leading-tight mb-4">
            An investment in your peace of mind... Lifetime security... Protect
            your family's future today.
          </h1>
          <button className="w-[14rem] h-[3.5rem] flex justify-center cursor-pointer items-center gap-x-2 shadow-lg bg-[#214CA9]">
            <p className="text-white text-lg font-bold">Lets get started</p>
            <icon className="text-[2.5rem]">
              <IoIosArrowRoundForward />
            </icon>
          </button>
        </div>
      </div>
    </div>
  );
};
export default SliderHome;
