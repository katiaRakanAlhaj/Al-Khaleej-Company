import client from "../../../api/client";

export const fetchProjectsPage = async() => {
    const response = await client.get(`/projects`);
    return response.data || null; // Return null if no data
};

export const fetchEngineeringProjects = async(page = 1, filters = {}) => {
    // Build query parameters
    const params = new URLSearchParams();
    params.append('page', page);

    // Add search parameter if it exists
    if (filters.search && filters.search.trim()) {
        params.append('search', filters.search.trim());
    }

    // Add individual filters if they exist
    if (filters.company_name && filters.company_name.trim()) {
        params.append('company_name', filters.company_name.trim());
    }
    if (filters.responsible_authority && filters.responsible_authority.trim()) {
        params.append('responsible_authority', filters.responsible_authority.trim());
    }
    if (filters.project_type && filters.project_type.trim()) {
        params.append('project_type', filters.project_type.trim());
    }
    if (filters.year && filters.year.trim()) {
        params.append('year', filters.year.trim());
    }

    const url = `/engineering-projects?${params.toString()}`;

    const response = await client.get(url);
    return response.data || null;
};