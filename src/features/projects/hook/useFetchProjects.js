import { useQuery } from "@tanstack/react-query";
import { fetchEngineeringProjects, fetchProjectsPage } from "../api/fetchProjects";

export const usefetchProjectsPage = () => {
    return useQuery({
        queryKey: ["projects"],
        queryFn: fetchProjectsPage,
    });
}



export const useFetchEngineeringProjects = (page = 1, filters = {}) => {
    return useQuery({
        queryKey: ["engineering-projects", page, filters],
        queryFn: () => fetchEngineeringProjects(page, filters),
        keepPreviousData: true,
    });
}