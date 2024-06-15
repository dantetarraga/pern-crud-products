import { useState } from "react";
import { Product } from "../../types/product";

export const usePagination = (initialData: Product[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(initialData.length / itemsPerPage);

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return initialData.slice(begin, end);
  };

  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);
  const goToPage = (page: number) => setCurrentPage(page);

  return { nextPage, prevPage, goToPage, currentData, currentPage, maxPage };
};
