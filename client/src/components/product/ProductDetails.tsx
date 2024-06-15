import { CiEdit, CiTrash } from "react-icons/ci";
import { Form, useFetcher } from "react-router-dom";
import { Product } from "../../types/product";

interface Props {
  product: Product;
}

const ProductDetails = ({ product }: Props) => {
  const fetcher = useFetcher();
  const isDeleting = fetcher.state !== "idle";

  const handleDeleteProduct = async () => {
    const data = new FormData();
    data.set("id", JSON.stringify(product.id));

    fetcher.submit(data, {
      method: "DELETE",
      action: `/`,
    });
  };

  return (
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
          onClick={handleDeleteProduct}
        >
          <CiTrash size={25} className="text-red-600" />
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
        <Form method="PUT" action={"/"}>
          <button
            className="cursor-pointer hover:bg-gray-200 p-2 rounded-full"
            type="submit"
          >
            <CiEdit size={25} className="text-blue-600" />
          </button>
        </Form>
      </td>
    </tr>
  );
};

export default ProductDetails;
