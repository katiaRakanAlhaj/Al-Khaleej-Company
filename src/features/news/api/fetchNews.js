import client from "../../../api/client";

export const fetchNewsPage = async() => {
    const response = await client.get(`/news`);
    return response.data || null; // Return null if no data
};