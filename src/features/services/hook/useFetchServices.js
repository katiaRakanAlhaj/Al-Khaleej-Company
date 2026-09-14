import { useQuery } from "@tanstack/react-query";
import { fetchAllServices, fetchServiceById, fetchServicesPage } from "../api/fecthServices";

export const usefetchServicesPage = () => {
    return useQuery({
        queryKey: ["services-page"],
        queryFn: fetchServicesPage,

    });
}

export const usefetchAllServices = (page = 1) => {
    return useQuery({
        queryKey: ["services", page],
        queryFn: () => fetchAllServices(page),
        keepPreviousData: true, // avoids flicker when changing pages
    });
};
export const useFetchServiceById = (id) => {
    return useQuery({
        queryKey: ["service", id], // Include id in queryKey for caching
        queryFn: () => fetchServiceById(id),
        enabled: !!id, // Only run query if id exists
    });
};