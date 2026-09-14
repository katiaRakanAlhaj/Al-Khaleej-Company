import TitleSection from "../../../ui/titleSection";
import arrow from "../../../assets/images/arrow.svg";
import i18next from "i18next";

const WorkProcess = ({ homePageData }) => {
  const steps = homePageData?.data?.home_page?.work_process || [];

  // Detect current language direction
  const isRTL = i18next.language === "ar" || i18next.dir() === "rtl";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full overflow-hidden bg-white py-[4rem]"
    >
      {/* Heading */}
      <div className="mx-auto flex flex-col items-center justify-center">
        <TitleSection title={i18next.t("WorkProcess.work_process")} />

        <h1 className="mt-[1rem] text-center font-bold leading-tight text-primary lg:text-[2.5rem] text-[1.5rem] text-wrap lg:w-[100%] w-[80%]">
          {i18next.t("WorkProcess.work_steps")}
        </h1>
      </div>

      {/* Process */}
      <div className="relative mx-auto mt-[4rem] w-full px-[1rem]">
        {/* Curved Arrow — direction depends on language */}
        <div
          className={`pointer-events-none absolute top-[2.625rem] z-0 hidden h-[6.5625rem] lg:block ${
            isRTL ? "right-0 left-[3rem]" : "left-0 right-[3rem]"
          }`}
        >
          <svg
            viewBox="0 0 1200 95"
            preserveAspectRatio="none"
            className="h-full w-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isRTL ? (
              <path
                d="
                  M 1199 15
                  C 1155 130, 1045 50, 1090 70 
                  C 915 2, 830 20, 770 62 
                  C 695 50, 625 102, 550 62 
                  C 475 22, 410 22, 330 62 
                  C 260 90, 210 80, 120 55 
                  C 75 25, 40 10, 40 5
                "
                stroke="#1F56B3"
                strokeWidth="2"
                strokeDasharray="7 8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="
                  M 1 15
                  C 45 130, 155 50, 110 70 
                  C 285 2, 370 20, 430 62 
                  C 505 50, 575 102, 650 62 
                  C 725 22, 790 22, 870 62 
                  C 940 90, 990 80, 1080 55 
                  C 1125 25, 1160 10, 1160 5
                "
                stroke="#1F56B3"
                strokeWidth="2"
                strokeDasharray="7 8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </div>

        {/* Arrow SVG image at the end */}
        <div
          className={`pointer-events-none absolute top-[0.5rem] z-10 hidden h-[2.5rem] w-[2.5rem] lg:block ${
            isRTL ? "left-[3.5rem]" : "right-[3.5rem]"
          }`}
        >
          <img
            src={arrow}
            alt="Arrow"
            className={`h-full w-full object-contain ${isRTL ? "rotate-180" : ""}`}
          />
        </div>

        {/* STEPS */}
        <div className="relative z-10 grid grid-cols-1 gap-[2rem] sm:grid-cols-2 lg:px-[6rem] px-[3rem] lg:grid-cols-4 lg:gap-[2rem]">
          {steps.map((step, index) => {
            // Number positions per language
            const getNumberPosition = (idx) => {
              if (isRTL) {
                switch (idx) {
                  case 0:
                    return "top-[5.5rem] -right-[4.5rem]";
                  case 1:
                    return "top-[2.5rem] right-[-6rem]";
                  case 2:
                    return "top-[5.5rem] right-[-6rem]";
                  case 3:
                    return "top-[5.5rem] right-[-6rem]";
                  default:
                    return "-top-[0.1875rem] -right-[0.1875rem]";
                }
              } else {
                switch (idx) {
                  case 0:
                    return "top-[5.5rem] -left-[4.5rem]";
                  case 1:
                    return "top-[2.5rem] left-[-6rem]";
                  case 2:
                    return "top-[5.5rem] left-[-6rem]";
                  case 3:
                    return "top-[5.5rem] left-[-6rem]";
                  default:
                    return "-top-[0.1875rem] -left-[0.1875rem]";
                }
              }
            };

            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative">
                  <div
                    className="
                      relative 
                      h-[12rem] w-[12rem] 
                      overflow-hidden 
                      rounded-full
                      border-dashed 
                      border-[0.09375rem] 
                      border-primary
                      bg-white 
                      p-[0.8rem] 
                      shadow-sm 
                      transition-all 
                      duration-300 
                      ease-in-out
                      hover:p-0
                      hover:border-solid
                    "
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-full w-full rounded-full object-cover transition-all duration-300 ease-in-out"
                    />
                    <div className="absolute inset-0 rounded-full bg-primary opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-40"></div>
                  </div>

                  <div
                    className={`
                      absolute 
                      lg:block
                      hidden
                      z-30 
                      flex 
                      h-[3.5rem] 
                      w-[3.5rem] 
                      items-center 
                      justify-center 
                      rounded-full 
                      bg-primary 
                      text-[2rem] 
                      font-semibold 
                      text-white 
                      shadow-md
                      border-2
                      border-white
                      ${getNumberPosition(index)}
                    `}
                  >
                    {index + 1}
                  </div>
                </div>

                <h3 className="mt-[1.25rem] font-[600] leading-tight text-[#000000] text-[1.5rem]">
                  {step.title}
                </h3>

                <p className="mt-[0.5rem] text-[1.125rem] text-[#717171] lg:max-w-[90%] max-w-[100%]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;