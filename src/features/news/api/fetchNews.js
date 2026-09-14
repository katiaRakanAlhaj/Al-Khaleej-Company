import client from "../../../api/client";

export const fetchNewsPage = async(page = 1) => {
    const response = await client.get(`/news?page=${page}`);
    return response.data || null;
};