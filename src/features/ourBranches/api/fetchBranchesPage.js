import client from "../../../api/client";

export const fetchBranchesPage = async() => {
    const response = await client.get(`/our-branches-page`);
    return response.data || null; // Return null if no data
};
export const fetchBranchesGrid = async() => {
    const response = await client.get(`/branches`);
    return response.data || null; // Return null if no data
};