import client from "../../../api/client";

export const fetchClientsPage = async() => {
    const response = await client.get(`/our-clients`);
    return response.data || null; // Return null if no data
};