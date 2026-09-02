import search from "../../../assets/images/search.svg";
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";
import { ProjectLineStyle } from "../../../ui/projectLineStyle";
import { ProjectsTitle } from "../../../ui/projectsTitle";
import i18next from "i18next";

const ProjectsFilter = () => {
  const projects = [
    {
      company: "Al-Mafkhara & Tur Sinai Co.",
      authority: "Ministry of Water Resources",
      projectType: "Irrigation & Drainage Project - Al Khalis",
      year: "2009",
    },
    {
      company: "Jannat Al-Abraj Gen. Contracting",
      authority: "-",
      projectType: "Building Cladding Project",
      year: "2009",
    },
    {
      company: "Tur Sinai Gen. Contracting",
      authority: "Sunni Endowment Diwan",
      projectType: "Mosque Construction",
      year: "2009",
    },
    {
      company: "Abeer Al-Furat Gen. Contracting",
      authority: "Ministry of Water Resources",
      projectType: "Rest House Construction - Haditha Project",
      year: "2010",
    },
    {
      company: "Maysan Oil Company",
      authority: "Ministry of Oil",
      projectType: "Multi-benefit, Health, Fleet & Cash Insurance",
      year: "2017",
    },
    {
      company: "General Co. for Marketing Drugs",
      authority: "Ministry of Health",
      projectType: "Warehouse Insurance against Terrorism & Fire",
      year: "2018",
    },
    {
      company: "General Co. for Southern Electricity Dist.",
      authority: "Ministry of Electricity",
      projectType: "Comprehensive Asset Insurance",
      year: "2024",
    },
  ];

  const styles = {
    tableCell: "px-6 py-4",
    tableHeader:
      "px-6 py-4 text-white font-semibold text-md uppercase tracking-wider",
    rowEven: "bg-white",
    rowOdd: "bg-[#FAFAFB]",
    rowHover: "hover:bg-[#F2F3FF] transition-colors duration-150",
    paginationButton:
      "w-[2.5rem] h-[2.5rem] border border-[#C4C6D4] rounded flex justify-center items-center cursor-pointer",
    paginationIcon: "text-[2rem] text-[#C4C6D4]",
    searchInput:
      "w-[19rem] h-[3.5rem] text-lg px-4 py-2 border border-[#C4C6D4] focus:outline-none",
    searchWrapper: "relative flex items-center",
    searchIcon: "absolute right-3 w-5 h-5 text-[#C4C6D4]",
  };

  return (
    <div>
      <div className="container4 mx-auto mt-[4rem]">
        <div className="lg:flex space-y-2 justify-between items-center">
          <div>
            <ProjectsTitle title={i18next.t("projects.Engineering_Projects")} />
            <p className="text-[#434652] mt-2 lg:text-xl text-lg">
              A detailed log of our issued engineering policies.
            </p>
          </div>
          <div className={styles.searchWrapper}>
            <input
              className={styles.searchInput}
              type="search"
              placeholder={i18next.t("projects.Filter_projects")}
            />
            <img src={search} alt="search" className={`absolute ${i18next.language == "en"?'right-3':'left-3'} w-5 h-5 text-[#C4C6D4]` }/>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border mt-[2rem] relative border-[#C4C6D4]">
            <thead>
              <tr className={`bg-[#204CA9] ${i18next.language == "en"?'text-left':'text-right'}`}>
                <th className={styles.tableHeader}>COMPANY NAME</th>
                <th className={styles.tableHeader}>RESPONSIBLE AUTHORITY</th>
                <th className={styles.tableHeader}>PROJECT TYPE</th>
                <th className={styles.tableHeader}>YEAR</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr
                  key={index}
                  className={`
                    border-b border-[#E5E7EB]
                    ${index % 2 === 0 ? styles.rowEven : styles.rowOdd}
                    ${styles.rowHover}
                  `}
                >
                  <td
                    className={`${styles.tableCell} font-bold text-[#131B2E] text-md`}
                  >
                    {project.company}
                  </td>
                  <td className={`${styles.tableCell} text-[#434652]`}>
                    {project.authority}
                  </td>
                  <td className={`${styles.tableCell} text-[#434652]`}>
                    {project.projectType}
                  </td>
                  <td className={`${styles.tableCell} text-[#434652]`}>
                    {project.year}
                  </td>
                </tr>
              ))}
            </tbody>
            <div className="flex justify-between px-6 pb-6">
              <div className="mt-4 text-[#434652] text-lg">
                Showing {projects.length} of 17 projects
              </div>
              <div className={`absolute ${i18next.language == "en"?'right-6':'left-6'} bottom-3 gap-x-2`}>
                <div className="flex gap-x-2">
                  <div className={styles.paginationButton}>
                    <icon className={styles.paginationIcon}>
                    {i18next.language == "en"?  <RiArrowDropLeftLine />:  <RiArrowDropRightLine />}
                    </icon>
                  </div>
                  <div className={styles.paginationButton}>
                    <icon className={styles.paginationIcon}>
                     {i18next.language == "en"? <RiArrowDropRightLine /> :  <RiArrowDropLeftLine />}
                    </icon>
                  </div>
                </div>
              </div>
            </div>
          </table>
        </div>
      </div>
      <ProjectLineStyle />
    </div>
  );
};

export default ProjectsFilter;
