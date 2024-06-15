import { CiEdit, CiTrash } from "react-icons/ci";
import { deleteProduct } from "../../services/products";
import { Product } from "../../types/product";

interface Props {
  product: Product;
}

const ProductDetails = ({ product }: Props) => {
  const handleDeleteProduct = async () => {
    const result = await deleteProduct(product.id);

    console.log(result);
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
        <div
          className="cursor-pointer hover:bg-gray-200 p-2 rounded-full"
          onClick={handleDeleteProduct}
        >
          <CiTrash size={25} className="text-red-600" />
        </div>
        <div className="cursor-pointer hover:bg-gray-200 p-2 rounded-full">
          <CiEdit size={25} className="text-blue-600" />
        </div>
      </td>
    </tr>
  );
};

export default ProductDetails;
