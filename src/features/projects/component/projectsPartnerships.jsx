import water from "../../../assets/images/water.svg";
import bank from "../../../assets/images/bank.svg";
import mall from "../../../assets/images/mall.svg";
import { ProjectLineStyle } from "../../../ui/projectLineStyle";
import { ProjectsTitle } from "../../../ui/projectsTitle";
import i18next from "i18next";

const ProjectPartnerships = ({ projectsData }) => {
  return (
    <div>
      <div className="container4 mx-auto lg:mt-[5rem] mt-[3rem]">
        <ProjectsTitle title={i18next.t("projects.Key_Partnerships")} />
        <p className="text-[#434652] mt-2 lg:text-xl text-lg">
          {projectsData?.data?.key_partnerships_title}{" "}
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[1.5rem] mt-[2rem]">
          {projectsData?.data?.key_partnerships.map((item, index) => (
            <div
              key={index}
              className="w-full h-[16rem] rounded-lg p-[2rem] border border-[#C4C6D4]"
            >
              <div className="flex flex-col space-y-2">
                <div className="w-[3.5rem] h-[3.5rem] rounded bg-[#F2F3FF] flex justify-center items-center">
                  <img
                    className="w-[1.3rem]"
                    src={item.icon}
                    alt={item.title}
                  />
                </div>
                <h1 className="text-[#131B2E] font-bold text-[1.4rem] mt-2 line-clamp-1">
                  {item.title}
                </h1>
                <p className="text-[#434652] text-md leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProjectLineStyle />
    </div>
  );
};

export default ProjectPartnerships;
