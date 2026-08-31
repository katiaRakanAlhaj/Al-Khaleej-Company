import water from "../../../assets/images/water.svg";
import bank from "../../../assets/images/bank.svg";
import mall from "../../../assets/images/mall.svg";
import { ProjectLineStyle } from "../../../ui/projectLineStyle";
import { ProjectsTitle } from "../../../ui/projectsTitle";

const ProjectPartnerships = () => {
  const projectItems = [
    {
      image: water,
      title: "Ministry of Water Resources",
      desc: "Comprehensive insurance for all dams across Iraq, including Mosul Dam, Hindiya Barrage, Hemrin Dam, and Kut Barrage.",
    },
    {
      image: bank,
      title: "Iraqi Investment Bank",
      desc: "Coverage for all branches nationwide, including cash transit, fidelity guarantees, fleet insurance, and asset protection.",
    },
    {
      image: mall,
      title: "Babylon Mall",
      desc: "Extensive fire and allied perils insurance, covering total income loss, rent loss, earthquakes, and flood risks.",
    },
  ];

  return (
    <div>
      <div className="container4 mx-auto mt-[5rem]">
        <ProjectsTitle title = {"Key Partnerships"}/>
        <p className="text-[#434652] mt-2 text-xl">
          Securing Iraq's most critical assets and infrastructure.
        </p>
        <div className="grid grid-cols-3 gap-[1.5rem] mt-[2rem]">
          {projectItems.map((item, index) => (
            <div
              key={index}
              className="w-full h-[16rem] rounded-lg p-[2rem] border border-[#C4C6D4]"
            >
              <div className="flex flex-col space-y-2">
                <div className="w-[3.5rem] h-[3.5rem] rounded bg-[#F2F3FF] flex justify-center items-center">
                  <img
                    className="w-[1.3rem]"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <h1 className="text-[#131B2E] font-bold text-[1.4rem] mt-2 line-clamp-1">
                  {item.title}
                </h1>
                <p className="text-[#434652] text-md leading-relaxed line-clamp-3">
                  {item.desc}
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
