import { CiEdit, CiTrash } from "react-icons/ci";
import { Product } from "../../types/product";

interface Props {
  product: Product;
}

const ProductDetails = ({ product }: Props) => {
  return (
    <tr className="text-center border-none text-sm">
      <td className="py-5">{product.name}</td>
      <td className="py-5">{product.description}</td>
      <td className="py-5">
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
      <td className="py-5 text-gray-400">{product.price}</td>
      <td className="py-5 flex gap-4 justify-center items-center">
        <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-full">
          <CiTrash size={25} className="text-red-600" />
        </div>
        <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-full">
          <CiEdit size={25} className="text-blue-600" />
        </div>
      </td>
    </tr>
  );
};

export default ProductDetails;
