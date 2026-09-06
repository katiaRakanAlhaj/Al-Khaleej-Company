import client from "../../../api/client";

export const fetchNewsPageById = async(id) => {
    const response = await client.get(`/news/${id}`);
    return response.data || null; // Return null if no data
};
export const fetchLatestNews = async() => {
    const response = await client.get(`/latest-news`);
    return response.data || null; // Return null if no data
};