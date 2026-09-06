import { useQuery } from "@tanstack/react-query";
import { fetchAboutPage } from "../api/fetchAbout";

export const usefetchAboutPage = () => {
    return useQuery({
        queryKey: ["about-us-page"],
        queryFn: fetchAboutPage,

    });
}