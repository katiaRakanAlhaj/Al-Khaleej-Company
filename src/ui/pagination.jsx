import i18next from "i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ currentPage, lastPage, onPageChange }) => {
  if (lastPage <= 1) return null;

  const isRTL = i18next.language === "ar";

  // Build page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const delta = 2; // pages around current

    const left = Math.max(2, currentPage - delta);
    const right = Math.min(lastPage - 1, currentPage + delta);

    pages.push(1);

    if (left > 2) pages.push("...");

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < lastPage - 1) pages.push("...");

    if (lastPage > 1) pages.push(lastPage);

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex items-center justify-center gap-2 mt-[3rem] flex-wrap">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center gap-1 px-3 h-[2.5rem] rounded-md border border-[#DAE2FD] text-[#434652] transition
          ${currentPage === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-primary hover:text-white"}`}
      >
        {isRTL ? <FaChevronRight size={12} /> : <FaChevronLeft size={12} />}
        <span className="hidden sm:inline">
          {i18next.t("pagination.previous")}
        </span>
      </button>

      {/* Page numbers */}
      {pages.map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className="px-2 text-[#434652]">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-[2.5rem] h-[2.5rem] rounded-md border transition text-sm font-medium
              ${
                page === currentPage
                  ? "bg-primary text-white border-primary"
                  : "border-[#DAE2FD] text-[#434652] hover:bg-primary hover:text-white"
              }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === lastPage}
        className={`flex items-center gap-1 px-3 h-[2.5rem] rounded-md border border-[#DAE2FD] text-[#434652] transition
          ${currentPage === lastPage ? "opacity-40 cursor-not-allowed" : "hover:bg-primary hover:text-white"}`}
      >
        <span className="hidden sm:inline">
          {i18next.t("pagination.next")}
        </span>
        {isRTL ? <FaChevronLeft size={12} /> : <FaChevronRight size={12} />}
      </button>
    </div>
  );
};

export default Pagination;