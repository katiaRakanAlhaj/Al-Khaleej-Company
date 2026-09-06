import { useQuery } from "@tanstack/react-query";
import { fetchServicesPage } from "../api/fecthServices";

export const usefetchServicesPage = () => {
    return useQuery({
        queryKey: ["services-page"],
        queryFn: fetchServicesPage,

    });
}