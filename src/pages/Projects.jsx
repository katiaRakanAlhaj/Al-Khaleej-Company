import ProjectsBanner from "../features/projects/component/projectsBanner";
import ProjectsFilter from "../features/projects/component/projectsFilter";
import ProjectPartnerships from "../features/projects/component/projectsPartnerships";
import ProjectsSpeclalizedCoverage from "../features/projects/component/projectsSpeclalizedCoverage";

const Projects = ()=> {
    return(
        <div>
            <ProjectsBanner/>
            <ProjectPartnerships/>
            <ProjectsFilter/>
            <ProjectsSpeclalizedCoverage/>
        </div>
    )
}
export default Projects;