import search from "../../../assets/images/search.svg";
import { RiArrowDropRightLine, RiArrowDropLeftLine, RiFilter3Line } from "react-icons/ri";
import { ProjectLineStyle } from "../../../ui/projectLineStyle";
import { ProjectsTitle } from "../../../ui/projectsTitle";
import i18next from "i18next";
import { useState, useEffect } from "react";
import { useFetchEngineeringProjects } from "../hook/useFetchProjects";

// Skeleton Loader Component
const TableSkeleton = ({ rows = 5 }) => {
    const styles = {
        tableCell: "px-6 py-4",
        tableHeader: "px-6 py-4 text-white font-semibold text-md uppercase tracking-wider",
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full border mt-[2rem] relative border-[#C4C6D4]">
                <thead>
                    <tr className={`bg-[#204CA9] ${i18next.language === "en" ? 'text-left' : 'text-right'}`}>
                        <th className={styles.tableHeader}>{i18next.t("projects.COMPANY_NAME")}</th>
                        <th className={styles.tableHeader}>{i18next.t("projects.RESPONSIBLE_AUTHORITY")}</th>
                        <th className={styles.tableHeader}>{i18next.t("projects.PROJECT_TYPE")}</th>
                        <th className={styles.tableHeader}>{i18next.t("projects.YEAR")}</th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(rows)].map((_, index) => (
                        <tr
                            key={index}
                            className={`border-b border-[#E5E7EB] ${index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFB]'}`}
                        >
                            <td className={styles.tableCell}>
                                <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4"></div>
                            </td>
                            <td className={styles.tableCell}>
                                <div className="h-5 bg-gray-200 rounded animate-pulse w-2/3"></div>
                            </td>
                            <td className={styles.tableCell}>
                                <div className="h-5 bg-gray-200 rounded animate-pulse w-4/5"></div>
                            </td>
                            <td className={styles.tableCell}>
                                <div className="h-5 bg-gray-200 rounded animate-pulse w-1/4"></div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center px-6 py-4 border border-t-0 border-[#C4C6D4] rounded-b-lg">
                <div className="mt-4">
                    <div className="h-6 bg-gray-200 rounded animate-pulse w-48"></div>
                </div>
                <div className="flex gap-x-2">
                    <div className="w-[2.5rem] h-[2.5rem] border border-[#C4C6D4] rounded bg-gray-200 animate-pulse"></div>
                    <div className="w-[2.5rem] h-[2.5rem] border border-[#C4C6D4] rounded bg-gray-200 animate-pulse"></div>
                    <div className="w-[2.5rem] h-[2.5rem] border border-[#C4C6D4] rounded bg-gray-200 animate-pulse"></div>
                    <div className="w-[2.5rem] h-[2.5rem] border border-[#C4C6D4] rounded bg-gray-200 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

const ProjectsFilter = ({ projectsData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [showFilters, setShowFilters] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    
    // Filter states
    const [filters, setFilters] = useState({
        company_name: "",
        responsible_authority: "",
        project_type: "",
        year: ""
    });
    
    // Debounced search and filters
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [debouncedFilters, setDebouncedFilters] = useState({
        company_name: "",
        responsible_authority: "",
        project_type: "",
        year: ""
    });

    // Determine which parameters to send to API
    const [apiParams, setApiParams] = useState({});

    const { 
        data: engineeringProjectsData, 
        isLoading, 
        error 
    } = useFetchEngineeringProjects(currentPage, apiParams);

    // Debounce search term
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
            setCurrentPage(1);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    // Debounce filters
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedFilters(filters);
            setCurrentPage(1);
        }, 500);

        return () => clearTimeout(timer);
    }, [filters]);

    // Build API parameters
    useEffect(() => {
        const params = {};
        
        if (debouncedSearch.trim()) {
            params.search = debouncedSearch.trim();
        }
        
        if (debouncedFilters.company_name.trim()) {
            params.company_name = debouncedFilters.company_name.trim();
        }
        if (debouncedFilters.responsible_authority.trim()) {
            params.responsible_authority = debouncedFilters.responsible_authority.trim();
        }
        if (debouncedFilters.project_type.trim()) {
            params.project_type = debouncedFilters.project_type.trim();
        }
        if (debouncedFilters.year.trim()) {
            params.year = debouncedFilters.year.trim();
        }
        
        setApiParams(params);
    }, [debouncedSearch, debouncedFilters]);

    const styles = {
        tableCell: "px-6 py-4",
        tableHeader: "px-6 py-4 text-white font-semibold text-md uppercase tracking-wider",
        rowEven: "bg-white",
        rowOdd: "bg-[#FAFAFB]",
        rowHover: "hover:bg-[#F2F3FF] transition-colors duration-150",
        paginationButton: "w-[2.5rem] h-[2.5rem] border border-[#C4C6D4] rounded flex justify-center items-center cursor-pointer hover:bg-[#204CA9] hover:text-white hover:border-[#204CA9] transition-colors duration-200",
        paginationButtonActive: "w-[2.5rem] h-[2.5rem] border border-[#204CA9] rounded flex justify-center items-center cursor-pointer bg-[#204CA9] text-white",
        paginationIcon: "text-[2rem] text-[#C4C6D4]",
        searchInput: "w-full md:w-[19rem] h-[3.5rem] text-lg px-4 py-2 border border-[#C4C6D4] focus:outline-none focus:border-[#204CA9] rounded-lg",
        filterInput: "w-full h-[2.5rem] text-md px-3 py-1 border border-[#C4C6D4] focus:outline-none focus:border-[#204CA9] rounded-lg",
        searchWrapper: "relative flex items-center flex-1 md:flex-none",
        searchIcon: "absolute right-3 w-5 h-5 text-[#C4C6D4]",
        filterButton: "px-5 py-2 bg-[#204CA9] text-white rounded-lg hover:bg-[#1a3d8a] transition-colors duration-200 flex items-center gap-2 whitespace-nowrap",
        filterContainer: "bg-white p-5 rounded-xl shadow-lg border border-[#E5E7EB] mt-3 w-full",
        filterLabel: "text-sm font-medium text-[#434652] mb-1.5",
        clearFilterButton: "px-4 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 text-sm",
        activeFilterBadge: "ml-1 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full",
        filterRow: "flex flex-col md:flex-row gap-3 items-stretch md:items-center",
        filterActions: "flex justify-end mt-4 pt-3 border-t border-[#E5E7EB]",
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= (engineeringProjectsData?.meta?.last_page || 1)) {
            setCurrentPage(newPage);
        }
    };

    const handleFilterChange = (field, value) => {
        setFilters(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const clearFilters = () => {
        setFilters({
            company_name: "",
            responsible_authority: "",
            project_type: "",
            year: ""
        });
        setSearchTerm("");
        setShowFilters(false);
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const renderPaginationButtons = () => {
        const totalPages = engineeringProjectsData?.meta?.last_page || 1;
        const current = engineeringProjectsData?.meta?.current_page || 1;
        const buttons = [];

        // Previous button
        buttons.push(
            <div 
                key="prev" 
                className={styles.paginationButton}
                onClick={() => handlePageChange(current - 1)}
                style={{ opacity: current === 1 ? 0.5 : 1, cursor: current === 1 ? 'not-allowed' : 'pointer' }}
            >
                <span className={styles.paginationIcon}>
                    {i18next.language === "en" ? <RiArrowDropLeftLine /> : <RiArrowDropRightLine />}
                </span>
            </div>
        );

        // Page numbers - show limited pages with ellipsis
        const maxVisiblePages = 5;
        let startPage = Math.max(1, current - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
        if (endPage - startPage < maxVisiblePages - 1) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        if (startPage > 1) {
            buttons.push(
                <div key="1" className={styles.paginationButton} onClick={() => handlePageChange(1)}>
                    <span className="text-sm font-medium">1</span>
                </div>
            );
            if (startPage > 2) {
                buttons.push(
                    <div key="ellipsis1" className="w-[2.5rem] h-[2.5rem] flex justify-center items-center">
                        <span className="text-[#C4C6D4]">...</span>
                    </div>
                );
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <div 
                    key={i} 
                    className={current === i ? styles.paginationButtonActive : styles.paginationButton}
                    onClick={() => handlePageChange(i)}
                >
                    <span className="text-sm font-medium">{i}</span>
                </div>
            );
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                buttons.push(
                    <div key="ellipsis2" className="w-[2.5rem] h-[2.5rem] flex justify-center items-center">
                        <span className="text-[#C4C6D4]">...</span>
                    </div>
                );
            }
            buttons.push(
                <div key={totalPages} className={styles.paginationButton} onClick={() => handlePageChange(totalPages)}>
                    <span className="text-sm font-medium">{totalPages}</span>
                </div>
            );
        }

        // Next button
        buttons.push(
            <div 
                key="next" 
                className={styles.paginationButton}
                onClick={() => handlePageChange(current + 1)}
                style={{ opacity: current === totalPages ? 0.5 : 1, cursor: current === totalPages ? 'not-allowed' : 'pointer' }}
            >
                <span className={styles.paginationIcon}>
                    {i18next.language === "en" ? <RiArrowDropRightLine /> : <RiArrowDropLeftLine />}
                </span>
            </div>
        );

        return buttons;
    };

    const hasActiveFilters = Object.values(filters).some(value => value !== "") || searchTerm.trim() !== "";

    const getActiveFilterCount = () => {
        let count = 0;
        if (searchTerm.trim()) count++;
        if (filters.company_name.trim()) count++;
        if (filters.responsible_authority.trim()) count++;
        if (filters.project_type.trim()) count++;
        if (filters.year.trim()) count++;
        return count;
    };

    if (error) {
        return (
            <div className="container4 mx-auto mt-[4rem]">
                <div className="text-center text-red-600 py-8">
                    {i18next.t("projects.Error_loading_projects")}: {error.message}
                </div>
            </div>
        );
    }

    const projects = engineeringProjectsData?.data || [];
    const meta = engineeringProjectsData?.meta || {};
    const totalProjects = meta.total_projects || 0;
    const filteredCount = meta.filtered_count || totalProjects;
    const currentPageData = meta.current_page || 1;
    const lastPage = meta.last_page || 1;
    const perPage = meta.per_page || 10;

    return (
        <div>
            <div className="container4 mx-auto mt-[4rem]">
                {/* Header Section */}
                <div className="mb-6">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div className="flex-1">
                            <ProjectsTitle title={i18next.t("projects.Engineering_Projects")} />
                            <p className="text-[#434652] mt-2 lg:text-xl text-lg">
                                {projectsData?.data?.engineering_projects_title || i18next.t("projects.Engineering_Projects")}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            {hasActiveFilters && (
                                <span className="text-sm text-[#434652] bg-gray-100 px-3 py-1.5 rounded-lg">
                                    {getActiveFilterCount()} {i18next.t("projects.filters_active")}
                                </span>
                            )}
                            <button
                                className={styles.filterButton}
                                onClick={toggleFilters}
                            >
                                <RiFilter3Line size={18} />
                                {showFilters ? i18next.t("projects.Hide_Filters") : i18next.t("projects.Filters")}
                                {hasActiveFilters && !showFilters && (
                                    <span className={styles.activeFilterBadge}>
                                        {getActiveFilterCount()}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Search and Filter Section */}
                    <div className="mt-4">
                        {/* Search Bar */}
                        <div className="flex flex-col md:flex-row gap-3">
                            <div className={styles.searchWrapper}>
                                <input
                                    className={styles.searchInput}
                                    type="search"
                                    placeholder={i18next.t("projects.Search_anything")}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    disabled={isLoading}
                                />
                                <img 
                                    src={search} 
                                    alt={i18next.t("projects.Search")} 
                                    className={`absolute ${i18next.language === "en" ? 'right-3' : 'left-3'} w-5 h-5 text-[#C4C6D4]`} 
                                />
                            </div>
                        </div>

                        {/* Filter Panel */}
                        {showFilters && (
                            <div className={styles.filterContainer}>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div>
                                        <label className={styles.filterLabel}>{i18next.t("projects.Company_Name")}</label>
                                        <input
                                            type="text"
                                            className={styles.filterInput}
                                            placeholder={i18next.t("projects.Filter_by_company")}
                                            value={filters.company_name}
                                            onChange={(e) => handleFilterChange('company_name', e.target.value)}
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <div>
                                        <label className={styles.filterLabel}>{i18next.t("projects.Responsible_Authority")}</label>
                                        <input
                                            type="text"
                                            className={styles.filterInput}
                                            placeholder={i18next.t("projects.Filter_by_authority")}
                                            value={filters.responsible_authority}
                                            onChange={(e) => handleFilterChange('responsible_authority', e.target.value)}
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <div>
                                        <label className={styles.filterLabel}>{i18next.t("projects.Project_Type")}</label>
                                        <input
                                            type="text"
                                            className={styles.filterInput}
                                            placeholder={i18next.t("projects.Filter_by_project_type")}
                                            value={filters.project_type}
                                            onChange={(e) => handleFilterChange('project_type', e.target.value)}
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <div>
                                        <label className={styles.filterLabel}>{i18next.t("projects.Year")}</label>
                                        <input
                                            type="text"
                                            className={styles.filterInput}
                                            placeholder={i18next.t("projects.Filter_by_year")}
                                            value={filters.year}
                                            onChange={(e) => handleFilterChange('year', e.target.value)}
                                            disabled={isLoading}
                                        />
                                    </div>
                                </div>
                                <div className={styles.filterActions}>
                                    <button
                                        className={styles.clearFilterButton}
                                        onClick={clearFilters}
                                    >
                                        {i18next.t("projects.Clear_All_Filters")}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Table Section */}
                {isLoading ? (
                    <TableSkeleton rows={5} />
                ) : (
                    <div className="overflow-x-auto border border-[#C4C6D4] rounded-lg">
                        <table className="w-full">
                            <thead>
                                <tr className={`bg-[#204CA9] ${i18next.language === "en" ? 'text-left' : 'text-right'}`}>
                                    <th className={styles.tableHeader}>{i18next.t("projects.COMPANY_NAME")}</th>
                                    <th className={styles.tableHeader}>{i18next.t("projects.RESPONSIBLE_AUTHORITY")}</th>
                                    <th className={styles.tableHeader}>{i18next.t("projects.PROJECT_TYPE")}</th>
                                    <th className={styles.tableHeader}>{i18next.t("projects.YEAR")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.length > 0 ? (
                                    projects.map((project, index) => (
                                        <tr
                                            key={project.id || index}
                                            className={`
                                                border-b border-[#E5E7EB]
                                                ${index % 2 === 0 ? styles.rowEven : styles.rowOdd}
                                                ${styles.rowHover}
                                            `}
                                        >
                                            <td className={`${styles.tableCell} font-bold text-[#131B2E] text-md`}>
                                                {project.company_name || project.company}
                                            </td>
                                            <td className={`${styles.tableCell} text-[#434652]`}>
                                                {project.responsible_authority || project.authority || "-"}
                                            </td>
                                            <td className={`${styles.tableCell} text-[#434652]`}>
                                                {project.project_type || project.projectType}
                                            </td>
                                            <td className={`${styles.tableCell} text-[#434652]`}>
                                                {project.year}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center py-8 text-[#434652]">
                                            {i18next.t("projects.No_projects_found")}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        
                        {/* Pagination Footer - Moved outside table */}
                        <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 border-t border-[#C4C6D4] bg-white rounded-b-lg">
                            <div className="text-[#434652] text-lg mb-3 md:mb-0">
                                {i18next.t("projects.Showing")} {projects.length} {i18next.t("projects.of")} {hasActiveFilters ? filteredCount : totalProjects} {i18next.t("projects.projects")}
                                {hasActiveFilters && ` ${i18next.t("projects.filtered")}`}
                            </div>
                            <div className="flex gap-x-2 flex-wrap justify-center">
                                {renderPaginationButtons()}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <ProjectLineStyle />
        </div>
    );
};

export default ProjectsFilter;