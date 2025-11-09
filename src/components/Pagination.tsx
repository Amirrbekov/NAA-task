import { useState } from "react";
import { FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getVisiblePages = () => {
    const maxVisible = 7;
    let start = Math.max(currentPage - 3, 1);
    const end = Math.min(start + maxVisible - 1, totalPages);

    if (end - start < maxVisible - 1) {
      start = Math.max(end - maxVisible + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-40"
      >
        <FiChevronLeft className="text-gray-600 text-lg" />
      </button>
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-full text-sm font-medium flex items-center justify-center transition-colors
            ${
              currentPage === page
                ? "bg-[#243C7B] text-white shadow-sm"
                : "text-gray-700 hover:bg-gray-100"
            }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-40"
      >
        <FiChevronRight className="text-gray-600 text-lg" />
      </button>

      {/* <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full bg-[#FFFDF9] text-sm font-medium text-gray-800 cursor-pointer transition">
        <span>Rows: 10</span>
        <FiChevronRight className="text-gray-600 rotate-90" />
      </div> */}
      <div className="relative ml-3">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full bg-[#FFFDF9] text-sm font-medium text-gray-800 cursor-pointer hover:bg-gray-50 transition"
        >
          Page: {currentPage}
          <FiChevronDown
            className={`text-gray-600 transition-transform ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {dropdownOpen && (
          <div
            className="absolute bottom-12 left-0 w-32 bg-white border border-gray-200 rounded-xl shadow-lg overflow-y-auto z-10"
            style={{
              maxHeight: "120px", // shows 3 items (~40px each)
            }}
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <div
                key={page}
                onClick={() => {
                  onPageChange(page);
                  setDropdownOpen(false);
                }}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 ${
                  page === currentPage ? "bg-gray-100 font-semibold" : ""
                }`}
              >
                Page {page}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
