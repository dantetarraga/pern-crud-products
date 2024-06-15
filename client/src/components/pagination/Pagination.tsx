import { Product } from "../../types/product";
import { usePagination } from "../hooks/usePagination";

interface Props {
  data: Product[];
}

const Pagination = ({ data }: Props) => {
  const itemsPerPage = 5;
  const { nextPage, prevPage, goToPage, currentPage, maxPage } = usePagination(
    data,
    itemsPerPage
  );

  const pages = Array.from({ length: maxPage }, (_, i) => i + 1);

  return (
    <nav className="my-10 flex justify-end">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <button
            className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 border border-e-0 border-gray-300 rounded-s-lg ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400"
                : "hover:text-gray-700 hover:bg-gray-100"
            }`}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                currentPage === page && "text-black bg-gray-200"
              }`}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 rounded-e-lg ${
              currentPage === maxPage
                ? "bg-gray-200 text-gray-400"
                : "hover:text-gray-700 hover:bg-gray-100"
            }`}
            onClick={nextPage}
            disabled={currentPage === maxPage}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
