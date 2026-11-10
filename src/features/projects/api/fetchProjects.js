import client from "../../../api/client";

export const fetchProjectsPage = async () => {
    const response = await client.get(`/projects`);
    return response.data || null;
};

export const fetchEngineeringProjects = async (page = 1, filters = {}) => {
    const params = new URLSearchParams();
    params.append('page', page);

    if (filters.search && filters.search.trim()) {
        params.append('search', filters.search.trim());
    }
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
    // 👇 NEW: send category_id when a tab is selected
    if (filters.category_id) {
        params.append('category_id', filters.category_id);
    }

    const url = `/engineering-projects?${params.toString()}`;
    const response = await client.get(url);
    return response.data || null;
};

// 👇 NEW: categories API
export const fetchEngineeringProjectCategories = async () => {
    const response = await client.get(`/engineering-projects/categories`);
    return response.data || null;
};