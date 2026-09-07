import { useQuery } from "@tanstack/react-query";
import { fetchBranchById } from "../api/fetchBranchById";

export const useFetchBranchById = (id) => {
    return useQuery({
        queryKey: ["news", id], // Include id in queryKey for caching
        queryFn: () => fetchBranchById(id),
        enabled: !!id, // Only run query if id exists
    });
};