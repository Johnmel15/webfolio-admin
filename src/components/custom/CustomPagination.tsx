import { FC } from "react";
import { Pagination } from "../ui";
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const CustomPagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // If total pages are within the limit, show all pages
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Always include the first page
      pages.push(1);

      // Determine the range of numbers to display
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      // Ensure at least `maxVisiblePages - 2` pages are visible
      if (currentPage <= 2) {
        start = 2;
        end = 4;
      } else if (currentPage >= totalPages - 1) {
        start = totalPages - 3;
        end = totalPages - 1;
      }

      // Add ellipsis if there's a gap after page 1
      if (start > 2) pages.push("...");

      // Add range of pages
      for (let i = start; i <= end; i++) pages.push(i);

      // Add ellipsis if there's a gap before the last page
      if (end < totalPages - 1) pages.push("...");

      // Always include the last page
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            className={`${
              currentPage === 1
                ? "pointer-events-none opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          />
        </PaginationItem>

        {/* Page Numbers */}
        {getPageNumbers().map((page, index) => (
          <PaginationItem key={index} className="cursor-pointer">
            {page === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                onClick={() => typeof page === "number" && onPageChange(page)}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            onClick={() =>
              currentPage < totalPages && onPageChange(currentPage + 1)
            }
            className={`${
              currentPage === totalPages
                ? "pointer-events-none opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
