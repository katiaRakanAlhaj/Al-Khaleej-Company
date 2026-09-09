import { useQuery } from "@tanstack/react-query";
import { fetchContactPage } from "../api/fetchContact";

export const usefetchContactPage = () => {
    return useQuery({
        queryKey: ["contact-page"],
        queryFn: fetchContactPage,

    });
}