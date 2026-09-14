import checkProject from "../../../assets/images/checkProject.svg";
import { ProjectsTitle } from "../../../ui/projectsTitle";
import i18next from "i18next";

const ProjectsSpeclalizedCoverage = ({ projectsData }) => {
  return (
    <div className="container4 mx-auto mt-[4rem]">
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-[2rem]">
        <div className="lg:col-span-5 col-span-1 flex flex-col justify-center">
          <div className="flex gap-x-2 items-center">
            <div className="w-[3rem] h-[0.2rem] rounded-full bg-[#00348A]"></div>
            <h1 className="text-[#00348A] text-lg font-bold">
              {i18next.t("projects.SPECIALIZED_COVERAGE")}
            </h1>
          </div>
          <div className="mt-[1.5rem]">
            <ProjectsTitle title={projectsData?.data?.title} />
          </div>
          <p className="text-[#434652] mt-[2rem] text-lg">
            {projectsData?.data?.description}
          </p>

          {/* Map through itemsCheck array */}
          <div className="mt-[2rem]">
            {projectsData?.data?.description_section?.map((item, index) => (
              <div key={index} className="flex gap-x-4 items-center mt-3">
                <img src={checkProject} alt="check" />
                <p className="text-[#131B2E] mt-1 text-md">{item.item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 col-span-1">
          <div className="relative">
            <img
              className="w-full lg:h-[29rem] h-[25rem] object-cover rounded-lg"
              src={projectsData?.data?.image}
            />

            {/* Fix: Use solid color or higher opacity */}
            <div
              className={`w-[19rem] flex gap-x-4 items-center h-auto p-[1rem] absolute ${i18next.language == "en" ? "lg:right-[2rem]" : "lg:left-[2rem]"} bottom-[2rem] z-10 bg-white/80 rounded-md shadow-lg`}
            >
              <div className="w-[3rem] h-[3rem] flex justify-center items-center bg-[#204CA9]">
                <img
                  className="w-[1.3rem]"
                  src={projectsData?.data?.image_icon}
                />
              </div>
              <div>
                <h1 className="text-md font-bold text-[#131B2E]">
                  {projectsData?.data?.image_title}
                </h1>
                <p className="text-[#434652] text-sm mt-2">
                  {projectsData?.data?.image_description}
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
