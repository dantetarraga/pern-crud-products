import { useFetcher } from "react-router-dom";
import { Product } from "../../types/product";
import SpinnerCircle from "../loading/SpinnerCircle";

interface Props {
  onClose: () => void;
  deleteProduct: (id: Product["id"]) => void;
  productId: Product["id"];
  fetcher: ReturnType<typeof useFetcher>;
}

export const ProductDeleteModal = ({
  onClose,
  deleteProduct,
  productId,
  fetcher,
}: Props) => {
  const isDeleting = fetcher.state !== "idle";

  return (
    <section
      className="bg-opacity-50 bg-gray-900 fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-md shadow-lg w-96 flex flex-col gap-7"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="text-2xl font-bold">Confirm Delete</h2>
        <p className="text-gray-500">
          Are you sure you want to remove this product?
        </p>
        <div className="flex justify-end gap-4">
          <button className="bg-gray-200 p-2 px-4 rounded-md" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-red-600 p-2 px-4 rounded-md text-white w-[100px]"
            onClick={() => deleteProduct(productId)}
          >
            {isDeleting ? <SpinnerCircle size={5} /> : "Delete"}
          </button>
        </div>
      </div>
    </section>
  );
};
