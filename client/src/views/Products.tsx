import React, { Suspense } from "react";
import { IoMdAdd } from "react-icons/io";
import { Await, defer, Link, useLoaderData } from "react-router-dom";
import { usePagination } from "../components/hooks/usePagination.tsx";
import Pagination from "../components/pagination/Pagination.tsx";
import ProductDetails from "../components/product/ProductDetails.tsx";
import { getAllProducts } from "../services/products.ts";
import { Product } from "../types/product.ts";

type LoaderData = {
  products: Product[];
};

export const loader = async () => {
  const products: Promise<Product[]> = await getAllProducts();
  return defer({ products });
};

const Products: React.FC = () => {
  const { products } = useLoaderData() as LoaderData;
  const itemsPerPage = 5;
  const { currentData, nextPage, prevPage, maxPage, goToPage, currentPage } =
    usePagination(products, itemsPerPage);

  return (
    <Suspense fallback={<div className="text-4xl font-bold">Loading...</div>}>
      <section className="">
        <div className="flex justify-end">
          <Link
            to="/products/new"
            className="rounded-lg py-3 px-4 bg-blue-700 text-white font-semibold flex gap-2 hover:bg-blue-600"
          >
            <IoMdAdd size={25} /> Add new product
          </Link>
        </div>

        <main className="mt-10">
          <Suspense
            fallback={<div className="text-4xl font-bold">Loading...</div>}
          >
            <Await resolve={products}>
              {() => (
                <>
                  <div className="rounded-2xl bg-gray-50 border border-gray-50">
                    <table className="table-auto w-full">
                      <thead className="rounded-2xl">
                        <tr className="uppercase">
                          <th className="px-6 py-5">Name</th>
                          <th className="px-6 py-5">Description</th>
                          <th className="px-6 py-5">Price</th>
                          <th className="px-6 py-5">Available</th>
                          <th className="px-6 py-5">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {currentData.map((product: Product) => (
                          <ProductDetails key={product.id} product={product} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Pagination
                    currentPage={currentPage}
                    maxPage={maxPage}
                    prevPage={prevPage}
                    nextPage={nextPage}
                    goToPage={goToPage}
                  />
                </>
              )}
            </Await>
          </Suspense>
        </main>
      </section>
    </Suspense>
  );
};

export default Products;
