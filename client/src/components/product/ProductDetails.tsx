import { useState } from "react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { useFetcher } from "react-router-dom";
import { Product } from "../../types/product";
import { ProductDeleteModal } from "../modal/ProductDeleteModal";
import ProductEditeModal from "../modal/ProductEditeModal";

interface Props {
  product: Product;
}

const ProductDetails = ({ product }: Props) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const fetcher = useFetcher();

  const handleDeleteProduct = async (id: Product["id"]) => {
    const data = new FormData();
    data.set("id", JSON.stringify(id));

    fetcher.submit(data, {
      method: "DELETE",
      action: `/`,
    });
  };

  const handleOpenEditModal = () => setIsEditModalOpen(true);
  const handleCloseEditModal = () => setIsEditModalOpen(false);
  const handleOpenDeleteModal = () => setIsDeleteModalOpen(true);
  const handleCloseDeleteModal = () => setIsDeleteModalOpen(false);

  return (
    <>
      <tr className="text-center border-none text-sm cursor-pointer hover:bg-slate-50">
        <td className="py-5">{product.name}</td>
        <td className="py-5">{product.description}</td>
        <td className="py-5 ">
          <p
            className={`border px-3 py-0.5 inline-block rounded-lg font-bold text-sm ${
              product.available
                ? "border-green-600 text-green-600"
                : "border-red-600 text-red-600"
            }`}
          >
            {product.available ? "Available" : "Out of Stock"}
          </p>
        </td>
        <td className="py-5 text-gray-400">$ {product.price}</td>
        <td className="py-5 [&>*]:inline-block space-x-4">
          <button
            className="cursor-pointer hover:bg-gray-200 p-2 rounded-full"
            onClick={handleOpenDeleteModal}
          >
            <CiTrash size={25} className="text-red-600" />
          </button>
          <button
            className="cursor-pointer hover:bg-gray-200 p-2 rounded-full"
            type="submit"
            onClick={handleOpenEditModal}
          >
            <CiEdit size={25} className="text-blue-600" />
          </button>
        </td>
      </tr>
      {isDeleteModalOpen && (
        <ProductDeleteModal
          onClose={handleCloseDeleteModal}
          deleteProduct={handleDeleteProduct}
          productId={product.id}
          fetcher={fetcher}
        />
      )}
      {isEditModalOpen && (
        <ProductEditeModal
          onClose={handleCloseEditModal}
          product={product}
          fetcher={fetcher}
        />
      )}
    </>
  );
};

export default ProductDetails;
