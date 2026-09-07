import client from "../../../api/client";

export const fetchBranchById = async(id) => {
    const response = await client.get(`/branch/${id}`);
    return response.data || null; // Return null if no data
};