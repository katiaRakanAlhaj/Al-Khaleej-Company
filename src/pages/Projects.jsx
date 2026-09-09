import { HelmetProvider } from "react-helmet-async";
import ProjectsBanner from "../features/projects/component/projectsBanner";
import ProjectsFilter from "../features/projects/component/projectsFilter";
import ProjectPartnerships from "../features/projects/component/projectsPartnerships";
import ProjectsSpeclalizedCoverage from "../features/projects/component/projectsSpeclalizedCoverage";
import {
  useFetchEngineeringProjects,
  usefetchProjectsPage,
} from "../features/projects/hook/useFetchProjects";
import MetaHelmet from "../component/meta/metaHelemt";
import ScrollToTop from "../component/scrollToTop/scrollToTop";
import Loader from "../component/loader/loader";

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
  if (projectsDataLoading || engineeringProjectsDataLoading) {
    return <Loader />;
  }
  return (
    <div>
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet
          title={projectsData?.data?.meta_title}
          description={projectsData?.data?.meta_description}
        />
        <ProjectsBanner projectsData={projectsData} />
        <ProjectPartnerships projectsData={projectsData} />
        <ProjectsFilter
          engineeringProjectsData={engineeringProjectsData}
          projectsData={projectsData}
        />
        <ProjectsSpeclalizedCoverage projectsData={projectsData} />
      </HelmetProvider>
    </div>
  );
};
export default Projects;
