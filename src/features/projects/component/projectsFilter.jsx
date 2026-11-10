import search from "../../../assets/images/search.svg";
import {
  RiArrowDropRightLine,
  RiArrowDropLeftLine,
  RiFilter3Line,
  RiInboxLine,
} from "react-icons/ri";
import { ProjectLineStyle } from "../../../ui/projectLineStyle";
import { ProjectsTitle } from "../../../ui/projectsTitle";
import i18next from "i18next";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* =====================================================================
   REAL HOOKS
   ===================================================================== */
import {
  useFetchEngineeringProjects,
  useFetchEngineeringProjectCategories,
} from "../hook/useFetchProjects";

const isEn = () => i18next.language === "en";
const catName = (c) =>
  c?.name && typeof c.name === "object"
    ? c.name[isEn() ? "en" : "ar"]
    : c?.name;

// ---------- Skeletons ----------
const TableSkeleton = ({ rows = 8 }) => (
  <div className="bg-white rounded-2xl shadow-xl border border-[#C4C6D4] overflow-hidden">
    <div className="h-[3.25rem] bg-[#204CA9]" />
    {[...Array(rows)].map((_, i) => (
      <div
        key={i}
        className={`flex items-center gap-4 px-6 h-[4.5rem] border-b border-[#E5E7EB] ${
          i % 2 === 0 ? "bg-white" : "bg-[#FAFAFB]"
        }`}
      >
        <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/5 hidden md:block" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-16 ms-auto" />
      </div>
    ))}
  </div>
);

const CategorySkeleton = () => (
  <div className="flex gap-3 overflow-hidden">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="h-[3.25rem] w-36 rounded-2xl bg-gray-200 animate-pulse shrink-0"
      />
    ))}
  </div>
);

const ProjectsFilter = ({ projectsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all"); // "all" or category id

  const emptyFilters = {
    company_name: "",
    responsible_authority: "",
    project_type: "",
    year: "",
  };
  const [filters, setFilters] = useState(emptyFilters);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [debouncedFilters, setDebouncedFilters] = useState(emptyFilters);
  const [apiParams, setApiParams] = useState({});

  // ===== Real API hooks =====
  const { data: categoriesData, isLoading: categoriesLoading } =
    useFetchEngineeringProjectCategories();

  const {
    data: engineeringProjectsData,
    isLoading,
    error,
  } = useFetchEngineeringProjects(currentPage, apiParams);

  // Categories (works whether backend wraps in .data or returns array)
  const categories = categoriesData?.data ?? categoriesData ?? [];
  const categoriesById = Object.fromEntries(categories.map((c) => [c.id, c]));
  const activeCategory =
    selectedCategory === "all" ? null : categoriesById[selectedCategory];

  // Debounce search
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(1);
    }, 500);
    return () => clearTimeout(t);
  }, [searchTerm]);

  // Debounce filters
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedFilters(filters);
      setCurrentPage(1);
    }, 500);
    return () => clearTimeout(t);
  }, [filters]);

  // Build API params (category_id included)
  useEffect(() => {
    const params = {};
    if (debouncedSearch.trim()) params.search = debouncedSearch.trim();
    Object.entries(debouncedFilters).forEach(([k, v]) => {
      if (v.trim()) params[k] = v.trim();
    });
    if (selectedCategory !== "all") params.category_id = selectedCategory;
    setApiParams(params);
  }, [debouncedSearch, debouncedFilters, selectedCategory]);

  const styles = {
    paginationButton:
      "w-[2.5rem] h-[2.5rem] border border-[#C4C6D4] rounded flex justify-center items-center cursor-pointer hover:bg-[#204CA9] hover:text-white hover:border-[#204CA9] transition-colors duration-200",
    paginationButtonActive:
      "w-[2.5rem] h-[2.5rem] border border-[#204CA9] rounded flex justify-center items-center cursor-pointer bg-[#204CA9] text-white",
    paginationIcon: "text-[2rem] text-[#C4C6D4]",
    searchInput:
      "w-full md:w-[19rem] h-[3.5rem] text-lg px-4 py-2 border border-[#C4C6D4] focus:outline-none focus:border-[#204CA9] rounded-lg",
    filterInput:
      "w-full h-[2.5rem] text-md px-3 py-1 border border-[#C4C6D4] focus:outline-none focus:border-[#204CA9] rounded-lg",
    filterButton:
      "px-5 py-2 bg-[#204CA9] text-white rounded-lg hover:bg-[#1a3d8a] transition-colors duration-200 flex items-center gap-2 whitespace-nowrap",
    filterContainer:
      "bg-white p-5 rounded-xl shadow-lg border border-[#E5E7EB] mt-3 w-full",
    filterLabel: "text-sm font-medium text-[#434652] mb-1.5",
    clearFilterButton:
      "px-4 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 text-sm",
    activeFilterBadge:
      "ml-1 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full",
  };

  const handlePageChange = (p) => {
    if (p >= 1 && p <= (engineeringProjectsData?.meta?.last_page || 1))
      setCurrentPage(p);
  };

  const handleCategoryChange = (id) => {
    setSelectedCategory(id);
    setCurrentPage(1);
  };

  const handleFilterChange = (field, value) =>
    setFilters((prev) => ({ ...prev, [field]: value }));

  const clearFilters = () => {
    setFilters(emptyFilters);
    setSearchTerm("");
    setShowFilters(false);
  };

  const renderPaginationButtons = () => {
    const totalPages = engineeringProjectsData?.meta?.last_page || 1;
    const current = engineeringProjectsData?.meta?.current_page || 1;
    const buttons = [];

    buttons.push(
      <div
        key="prev"
        className={styles.paginationButton}
        onClick={() => handlePageChange(current - 1)}
        style={{
          opacity: current === 1 ? 0.5 : 1,
          cursor: current === 1 ? "not-allowed" : "pointer",
        }}
      >
        <span className={styles.paginationIcon}>
          {isEn() ? <RiArrowDropLeftLine /> : <RiArrowDropRightLine />}
        </span>
      </div>
    );

    const maxVisible = 5;
    let startPage = Math.max(1, current - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);
    if (endPage - startPage < maxVisible - 1)
      startPage = Math.max(1, endPage - maxVisible + 1);

    if (startPage > 1) {
      buttons.push(
        <div
          key="1"
          className={styles.paginationButton}
          onClick={() => handlePageChange(1)}
        >
          <span className="text-sm font-medium">1</span>
        </div>
      );
      if (startPage > 2)
        buttons.push(
          <div
            key="e1"
            className="w-[2.5rem] h-[2.5rem] flex justify-center items-center"
          >
            <span className="text-[#C4C6D4]">...</span>
          </div>
        );
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <div
          key={i}
          className={
            current === i
              ? styles.paginationButtonActive
              : styles.paginationButton
          }
          onClick={() => handlePageChange(i)}
        >
          <span className="text-sm font-medium">{i}</span>
        </div>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1)
        buttons.push(
          <div
            key="e2"
            className="w-[2.5rem] h-[2.5rem] flex justify-center items-center"
          >
            <span className="text-[#C4C6D4]">...</span>
          </div>
        );
      buttons.push(
        <div
          key={totalPages}
          className={styles.paginationButton}
          onClick={() => handlePageChange(totalPages)}
        >
          <span className="text-sm font-medium">{totalPages}</span>
        </div>
      );
    }

    buttons.push(
      <div
        key="next"
        className={styles.paginationButton}
        onClick={() => handlePageChange(current + 1)}
        style={{
          opacity: current === totalPages ? 0.5 : 1,
          cursor: current === totalPages ? "not-allowed" : "pointer",
        }}
      >
        <span className={styles.paginationIcon}>
          {isEn() ? <RiArrowDropRightLine /> : <RiArrowDropLeftLine />}
        </span>
      </div>
    );

    return buttons;
  };

  const hasActiveFilters =
    Object.values(filters).some((v) => v !== "") || searchTerm.trim() !== "";
  const getActiveFilterCount = () =>
    (searchTerm.trim() ? 1 : 0) +
    Object.values(filters).filter((v) => v.trim()).length;

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
  const filteredCount = meta.filtered_count ?? meta.total_projects ?? 0;

  return (
    <div>
      <div className="container4 mx-auto mt-[4rem]">
        {/* ===== Header ===== */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="flex-1">
              <ProjectsTitle
                title={projectsData?.data?.engineering_projects_title}
              />
              <p className="text-[#434652] w-[90%] mt-2 lg:text-xl text-lg">
                {projectsData?.data?.engineering_projects_description}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {hasActiveFilters && (
                <span className="text-sm text-[#434652] bg-gray-100 px-3 py-1.5 rounded-lg">
                  {getActiveFilterCount()}{" "}
                  {i18next.t("projects.filters_active")}
                </span>
              )}
              <button
                className={styles.filterButton}
                onClick={() => setShowFilters(!showFilters)}
              >
                <RiFilter3Line size={18} />
                {showFilters
                  ? i18next.t("projects.Hide_Filters")
                  : i18next.t("projects.Filters")}
                {hasActiveFilters && !showFilters && (
                  <span className={styles.activeFilterBadge}>
                    {getActiveFilterCount()}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* ===== Category tabs (no counts) ===== */}
          <div className="mt-8">
            {categoriesLoading ? (
              <CategorySkeleton />
            ) : (
              <div className="flex gap-3 overflow-x-auto pb-3 -mx-1 px-1 snap-x">
                {[{ id: "all" }, ...categories].map((c) => {
                  const active = selectedCategory === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => handleCategoryChange(c.id)}
                      className={`snap-start shrink-0 flex items-center px-5 py-2.5 rounded-2xl border transition-all duration-300 cursor-pointer
                        ${
                          active
                            ? "bg-[#204CA9] border-[#204CA9] text-white shadow-lg"
                            : "bg-white border-[#C4C6D4] text-[#434652] hover:border-[#204CA9] hover:text-[#204CA9]"
                        }`}
                    >
                      <span className="font-bold whitespace-nowrap">
                        {c.id === "all"
                          ? i18next.t("projects.All")
                          : catName(c)}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* ===== Search + filters ===== */}
          <div className="mt-4">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex items-center flex-1 md:flex-none">
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
                  className={`absolute ${isEn() ? "right-3" : "left-3"} w-5 h-5`}
                />
              </div>
            </div>

            {showFilters && (
              <div className={styles.filterContainer}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    ["company_name", "Company_Name", "Filter_by_company"],
                    [
                      "responsible_authority",
                      "Responsible_Authority",
                      "Filter_by_authority",
                    ],
                    ["project_type", "Project_Type", "Filter_by_project_type"],
                    ["year", "Year", "Filter_by_year"],
                  ].map(([field, label, ph]) => (
                    <div key={field}>
                      <label className={styles.filterLabel}>
                        {i18next.t(`projects.${label}`)}
                      </label>
                      <input
                        type="text"
                        className={styles.filterInput}
                        placeholder={i18next.t(`projects.${ph}`)}
                        value={filters[field]}
                        onChange={(e) =>
                          handleFilterChange(field, e.target.value)
                        }
                        disabled={isLoading}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-4 pt-3 border-t border-[#E5E7EB]">
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

        {/* ===== Table ===== */}
        {isLoading ? (
          <TableSkeleton rows={8} />
        ) : (
          <div className="bg-white rounded-2xl shadow-xl border border-[#C4C6D4] overflow-hidden">
            {/* selected category strip (no count) */}
            <div className="flex items-center gap-3 px-6 py-3 bg-white border-b border-[#E5E7EB]">
              <span className="w-1.5 h-6 rounded-full bg-[#204CA9]" />
              <h3 className="font-bold text-lg text-[#131B2E]">
                {activeCategory
                  ? catName(activeCategory)
                  : i18next.t("projects.All")}
              </h3>
            </div>

            <div className="overflow-x-auto min-h-[39.5rem]">
              <table className="w-full min-w-[48rem] table-fixed">
                <colgroup>
                  <col style={{ width: "32%" }} />
                  <col style={{ width: "26%" }} />
                  <col style={{ width: "30%" }} />
                  <col style={{ width: "12%" }} />
                </colgroup>

                <thead>
                  <tr
                    className={`bg-[#204CA9] ${isEn() ? "text-left" : "text-right"}`}
                  >
                    {[
                      "COMPANY_NAME",
                      "RESPONSIBLE_AUTHORITY",
                      "PROJECT_TYPE",
                      "YEAR",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-6 h-[3.25rem] text-white font-semibold text-sm uppercase tracking-wider"
                      >
                        {i18next.t(`projects.${h}`)}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {projects.length > 0 ? (
                    projects.map((project, index) => {
                      const name =
                        project.company_name || project.company || "";
                      const authority =
                        project.responsible_authority ||
                        project.authority ||
                        "-";
                      const type =
                        project.project_type || project.projectType || "";

                      return (
                        <motion.tr
                          key={project.id || index}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.04 }}
                          className={`h-[4.5rem] border-b border-[#E5E7EB] hover:bg-[#F2F3FF] transition-colors duration-150 group ${
                            index % 2 === 0 ? "bg-white" : "bg-[#FAFAFB]"
                          }`}
                        >
                          <td className="px-6">
                            <div className="flex items-center gap-3 min-w-0">
                              <span className="w-10 h-10 rounded-full bg-[#F2F3FF] text-[#204CA9] flex items-center justify-center font-bold shrink-0 transition-transform duration-300 group-hover:scale-110">
                                {name.charAt(0).toUpperCase()}
                              </span>
                              <span
                                className="font-bold text-[#131B2E] truncate"
                                title={name}
                              >
                                {name}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 text-[#434652]">
                            <span className="block truncate" title={authority}>
                              {authority}
                            </span>
                          </td>
                          <td className="px-6 text-[#434652]">
                            <span className="block truncate" title={type}>
                              {type}
                            </span>
                          </td>
                          <td className="px-6 text-[#434652] font-medium">
                            {project.year}
                          </td>
                        </motion.tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="4" className="h-[36rem]">
                        <div className="flex flex-col items-center justify-center gap-3 text-[#434652]">
                          <span className="w-16 h-16 rounded-full bg-[#F2F3FF] text-[#204CA9] flex items-center justify-center text-3xl">
                            <RiInboxLine />
                          </span>
                          <p className="text-lg">
                            {i18next.t("projects.No_projects_found")}
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination footer */}
            <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 border-t border-[#C4C6D4] bg-white">
              <div className="text-[#434652] text-lg mb-3 md:mb-0">
                {i18next.t("projects.Showing")} {projects.length}{" "}
                {i18next.t("projects.of")} {filteredCount}{" "}
                {i18next.t("projects.projects")}
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
