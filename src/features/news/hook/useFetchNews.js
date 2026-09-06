import { useQuery } from "@tanstack/react-query";
import { fetchNewsPage } from "../api/fetchNews";

export const usefetchNewsPage = () => {
    return useQuery({
        queryKey: ["news"],
        queryFn: fetchNewsPage,

    });
}