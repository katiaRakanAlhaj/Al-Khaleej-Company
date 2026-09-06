import client from "../../../api/client";

export const fetchAboutPage = async() => {
    const response = await client.get(`/about-us-page`);
    return response.data || null; // Return null if no data
};