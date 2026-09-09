import client from "../../../api/client";

export const fetchContactPage = async() => {
    const response = await client.get(`/contact-page`);
    return response.data || null; // Return null if no data
};