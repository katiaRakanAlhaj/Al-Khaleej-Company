import { useQuery } from "@tanstack/react-query";
import {
    fetchEngineeringProjects,
    fetchEngineeringProjectCategories,
    fetchProjectsPage,
} from "../api/fetchProjects";

export const usefetchProjectsPage = () => {
    return useQuery({
        queryKey: ["projects"],
        queryFn: fetchProjectsPage,
    });
};

export const useFetchEngineeringProjects = (page = 1, filters = {}) => {
    return useQuery({
        queryKey: ["engineering-projects", page, filters],
        queryFn: () => fetchEngineeringProjects(page, filters),
        keepPreviousData: true,
    });
};

// 👇 NEW
export const useFetchEngineeringProjectCategories = () => {
    return useQuery({
        queryKey: ["engineering-project-categories"],
        queryFn: fetchEngineeringProjectCategories,
        staleTime: 5 * 60 * 1000, // categories rarely change
    });
};