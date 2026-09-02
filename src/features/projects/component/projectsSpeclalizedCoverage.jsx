import operationImage from "../../../assets/images/operationImage.png";
import operationIcon from "../../../assets/images/operationIcon.svg";
import checkProject from "../../../assets/images/checkProject.svg";
import { ProjectsTitle } from "../../../ui/projectsTitle";
import i18next from "i18next";

const ProjectsSpeclalizedCoverage = () => {
  const itemsCheck = [
    "Phase II camp expansion (Gharraf, 2012)",
    "Diesel tanks supply & installation (Gharraf, 2012)",
    "Temporary housing construction (2012)",
    "River water treatment unit supply (2012)",
  ];

  return (
    <div className="container4 mx-auto mt-[4rem]">
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-x-[2rem]">
        <div className="lg:col-span-5 col-span-1 flex flex-col justify-center">
          <div className="flex gap-x-2 items-center">
            <div className="w-[3rem] h-[0.2rem] rounded-full bg-[#00348A]"></div>
            <h1 className="text-[#00348A] text-lg font-bold">
              {i18next.t("projects.SPECIALIZED_COVERAGE")}
            </h1>
          </div>
          <div className="mt-[1.5rem]">
            <ProjectsTitle title={"PETRONAS Oil Operations"} />
          </div>
          <p className="text-[#434652] mt-[2rem] text-lg">
            Engineering insurance contracts with PETRONAS operating across
            multiple sites and fields within Iraq, securing critical
            infrastructure development.
          </p>

          {/* Map through itemsCheck array */}
          <div className="mt-[2rem]">
            {itemsCheck.map((item, index) => (
              <div key={index} className="flex gap-x-4 items-center mt-3">
                <img src={checkProject} alt="check" />
                <p className="text-[#131B2E] mt-1 text-md">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 col-span-1">
          <div className="relative">
            <img
              className="w-full lg:h-[29rem] h-[25rem] object-cover rounded-lg"
              src={operationImage}
            />

            {/* Fix: Use solid color or higher opacity */}
            <div className="w-[19rem] flex gap-x-4 items-center h-auto p-[1rem] absolute right-[2rem] bottom-[2rem] z-10 bg-white/80 rounded-md shadow-lg">
              <div className="w-[3rem] h-[3rem] flex justify-center items-center bg-[#204CA9]">
                <img className="w-[1.3rem]" src={operationIcon} />
              </div>
              <div>
                <h1 className="text-md font-bold text-[#131B2E]">
                  Gharraf Oil Field
                </h1>
                <p className="text-[#434652] text-sm mt-2">
                  Major Infrastructure Security
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSpeclalizedCoverage;
