import client from "../../../api/client";

export const fetchServicesPage = async() => {
    const response = await client.get(`/services-page`);
    return response.data || null; // Return null if no data
};