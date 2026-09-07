import ProjectsBanner from "../features/projects/component/projectsBanner";
import ProjectsFilter from "../features/projects/component/projectsFilter";
import ProjectPartnerships from "../features/projects/component/projectsPartnerships";
import ProjectsSpeclalizedCoverage from "../features/projects/component/projectsSpeclalizedCoverage";
import { useFetchEngineeringProjects, usefetchProjectsPage } from "../features/projects/hook/useFetchProjects";

const Projects = () => {
  const {
    data: projectsData,
    isLoading: projectsDataLoading,
    error: projectsDataError,
  } = usefetchProjectsPage();
  const {
    data: engineeringProjectsData,
    isLoading: engineeringProjectsDataLoading,
    error: engineeringProjectsDataError,
  } = useFetchEngineeringProjects();
  return (
    <div>
      <ProjectsBanner projectsData={projectsData} />
      <ProjectPartnerships projectsData={projectsData} />
      <ProjectsFilter engineeringProjectsData = {engineeringProjectsData} projectsData={projectsData} />
      <ProjectsSpeclalizedCoverage projectsData={projectsData} />
    </div>
  );
};
export default Projects;
