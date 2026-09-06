import { useQuery } from "@tanstack/react-query";
import { fetchBranchesGrid, fetchBranchesPage } from "../api/fetchBranchesPage";

export const useFetchBranchesPage = () => {
    return useQuery({
        queryKey: ["branches-page"],
        queryFn: fetchBranchesPage,
    });
}

export const useFetchBranchesGrid = () => {
    return useQuery({
        queryKey: ["branches-grid"],
        queryFn: fetchBranchesGrid,
    });
}