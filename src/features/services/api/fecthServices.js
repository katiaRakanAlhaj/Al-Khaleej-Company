import client from "../../../api/client";

export const fetchServicesPage = async() => {
    const response = await client.get(`/services-page`);
    return response.data || null; // Return null if no data
};
export const fetchAllServices = async(page = 1) => {
    const response = await client.get(`/services?page=${page}`);
    return response.data || null;
};
export const fetchServiceById = async(id) => {
    const response = await client.get(`/service/${id}`);
    return response.data || null; // Return null if no data
};