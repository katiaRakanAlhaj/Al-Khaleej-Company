import client from "../../../api/client";

export const fetchHomePage = async() => {
    const response = await client.get(`/home-page`);
    return response.data || null; // Return null if no data
};