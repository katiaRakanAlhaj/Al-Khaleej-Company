import { useQuery } from "@tanstack/react-query";
import { fetchNewsPage } from "../api/fetchNews";

export const usefetchNewsPage = (page = 1) => {
    return useQuery({
        queryKey: ["news", page],
        queryFn: () => fetchNewsPage(page),

    });
}