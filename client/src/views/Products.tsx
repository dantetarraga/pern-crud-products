import React, { Suspense } from "react";
import { IoMdAdd } from "react-icons/io";
import {
  ActionFunctionArgs,
  Await,
  defer,
  Link,
  useLoaderData,
} from "react-router-dom";
import Pagination from "../components/pagination/Pagination.tsx";
import ProductDetails from "../components/product/ProductDetails.tsx";
import { usePagination } from "../hooks/usePagination.tsx";
import {
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../services/products.ts";
import { Product } from "../types/product.ts";

const ACTION_TYPES = {
  DELETE: "DELETE",
  PUT: "PUT",
};

type LoaderData = {
  products: Product[];
};

export const loader = async () => {
  const products: Promise<Product[]> = await getAllProducts();
  return defer({ products });
};

export const actionsProduct = async (args: ActionFunctionArgs) => {
  const { request } = args;

  switch (request.method) {
    case "DELETE": {
      const formData = await request.formData();
      const productId = formData.get("id") as string;

      if (!productId) return;

      const id = parseInt(productId);
      const result = await deleteProduct(id);
      return result;
    }
    case "PUT": {
      const formData = await request.formData();
      let data = Object.fromEntries(formData);

      const result = await updateProduct(data);
      return result;
    }
    default:
      return null;
  }
};

const Products: React.FC = () => {
  const itemsPerPage = 5;
  const { products } = useLoaderData() as LoaderData;

  const { currentData, nextPage, prevPage, maxPage, goToPage, currentPage } =
    usePagination(products, itemsPerPage);

  return (
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
                <div className="rounded-2xl bg-gray-100 border border-gray-50 h-auto">
                  <table className="table-auto w-full max-h-[500px] h-auto">
                    <thead className="">
                      <tr className="uppercase">
                        <th className="px-6 py-5 w-[180px]">Name</th>
                        <th className="px-6 py-5 w-[350px]">Description</th>
                        <th className="px-6 py-5">Available</th>
                        <th className="px-6 py-5 w-[150px]">Price</th>
                        <th className="px-6 py-5">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white w-full">
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
  );
};

export default Products;
