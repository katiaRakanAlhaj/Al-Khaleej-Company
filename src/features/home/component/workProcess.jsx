import TitleSection from "../../../ui/titleSection";
import work1 from "../../../assets/images/work1.png";
import work2 from "../../../assets/images/work2.png";
import work3 from "../../../assets/images/work3.png";
import work4 from "../../../assets/images/work4.png";
import arrow from "../../../assets/images/arrow.svg";

const WorkProcess = () => {
  const steps = [
    {
      image: work1,
      number: 1,
      title: "Select Insurance",
      description:
        "The first step in selecting insurance is to assess your needs",
    },
    {
      image: work2,
      number: 2,
      title: "Schedule meeting",
      description:
        "The first step in selecting insurance is to assess your needs",
    },
    {
      image: work3,
      number: 3,
      title: "Meet with Agent",
      description:
        "The first step in selecting insurance is to assess your needs",
    },
    {
      image: work4,
      number: 4,
      title: "Get Insurance",
      description:
        "The first step in selecting insurance is to assess your needs",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white py-[4rem]">
      {/* Heading */}
      <div className="mx-auto flex flex-col items-center justify-center">
        <TitleSection title="Work Process" />

        <h1 className="mt-[1rem] text-center font-bold leading-tight text-primary text-[2.5rem]">
          Easy our Work Process in 4 step
        </h1>
      </div>

      {/* Process */}
      <div className="relative mx-auto mt-[4rem] w-full px-[1rem]">
        {/* =========================
            CURVED ARROW with SVG image at the end
        ========================== */}
        <div className="pointer-events-none absolute left-0 right-[3rem] top-[2.625rem] z-0 hidden h-[6.5625rem] lg:block">
          <svg
            viewBox="0 0 1200 95"
            preserveAspectRatio="none"
            className="h-full w-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
          </svg>
        </div>

        {/* Arrow SVG image at the end */}
        <div className="pointer-events-none absolute right-[3.5rem] top-[0.5rem] z-10 hidden h-[2.5rem] w-[2.5rem] lg:block">
          <img 
            src={arrow} 
            alt="Arrow" 
            className="h-full w-full object-contain"
          />
        </div>

        {/* =========================
            STEPS 
        ========================== */}
        <div className="relative z-10 grid grid-cols-1 gap-[4rem] sm:grid-cols-2 px-[6rem] lg:grid-cols-4 lg:gap-[2rem]">
          {steps.map((step, index) => {
            // Get number position based on the number
            const getNumberPosition = (num) => {
              switch(num) {
                case 1:
                  return "top-[5.5rem] -left-[4.5rem]";
                case 2:
                  return "top-[2.5rem] left-[-6rem]";
                case 3:
                  return "top-[5.5rem] left-[-6rem]";
                case 4:
                  return "top-[5.5rem] left-[-6rem]";
                default:
                  return "-top-[0.1875rem] -left-[0.1875rem]";
              }
            };

            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Image with Number on Border */}
                <div className="relative">
                  {/* Image Container */}
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
                    
                    {/* Overlay with primary color and opacity on hover */}
                    <div className="absolute inset-0 rounded-full bg-primary opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-40"></div>
                  </div>

                  {/* Number Badge - On the border (stays fixed) */}
                  <div
                    className={`
                      absolute 
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
                      ${getNumberPosition(step.number)}
                    `}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-[1.25rem] font-[600] leading-tight text-[#000000] text-[1.5rem]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-[0.5rem] text-[1.125rem] text-[#717171] max-w-[90%]">
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