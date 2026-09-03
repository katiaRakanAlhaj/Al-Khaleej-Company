import { useQuery } from "@tanstack/react-query";
import { fetchHomePage } from "../api/fetchHome";

export const usefetchHomePage = () => {
    return useQuery({
        queryKey: ["homePage"],
        queryFn: fetchHomePage,

    });
}