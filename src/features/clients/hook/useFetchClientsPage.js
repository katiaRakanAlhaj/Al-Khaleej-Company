import { useQuery } from "@tanstack/react-query";
import { fetchClientsPage } from "../api/fetchClientsPage";

export const usefetchClientsPage = () => {
    return useQuery({
        queryKey: ["our-clients"],
        queryFn: fetchClientsPage,

    });
}