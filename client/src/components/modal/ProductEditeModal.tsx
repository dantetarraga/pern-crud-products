import { Form, useFetcher, useNavigation } from "react-router-dom";
import { Product } from "../../types/product";
import SpinnerCircle from "../loading/SpinnerCircle";

interface Props {
  onClose: () => void;
  product: Product;
  fetcher: ReturnType<typeof useFetcher>;
}

const ProductEditeModal = ({ onClose, product, fetcher }: Props) => {
  const navigation = useNavigation();

  return (
    <section
      className="fixed inset-0 flex justify-center items-center bg-slate-900 bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-[580px] p-5 rounded-md"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="text-2xl font-bold">Editing product</h2>
        <Form className="mt-10" method="POST">
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="name">
              Product name:
            </label>
            <input
              id="name"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Nombre del Producto"
              defaultValue={product.name}
              name="name"
            />
          </div>

          <div className="mb-4 flex-grow">
            <label className="text-gray-800" htmlFor="price">
              Price:
            </label>
            <input
              id="price"
              type="text"
              className="mt-2 block w-full p-3 "
              placeholder="Precio Producto. ej. 200, 300"
              defaultValue={product.price.toString()}
              name="price"
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-800" htmlFor="description">
              Description:
            </label>
            <input
              id="description"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50 text-wrap "
              placeholder="Descripcion del producto"
              name="description"
              defaultValue={product.description}
            />
          </div>

          <div className="mb-4  flex-col">
            <label className="text-gray-800" htmlFor="available">
              Available:
            </label>
            <input
              id="available"
              type="checkbox"
              className="mt-2 p-3 w-5 h-5 bg-gray-50 block"
              name="available"
              defaultChecked={product.available}
            />
          </div>

          <button
            type="submit"
            className="mt-5 w-full bg-blue-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          >
            {navigation.state !== "idle" ? (
              <SpinnerCircle size={5} />
            ) : (
              "Register Product"
            )}
          </button>
        </Form>
      </div>
    </section>
  );
};

export default ProductEditeModal;

{
  /* <Form className="mt-10" method="POST">
  <div className="mb-4">
    <label className="text-gray-800" htmlFor="name">
      Product name:
    </label>
    <input
      id="name"
      type="text"
      className="mt-2 block w-full p-3 bg-gray-50"
      placeholder="Nombre del Producto"
      name="name"
    />
  </div>

  <div className="mb-4 flex-grow">
    <label className="text-gray-800" htmlFor="price">
      Price:
    </label>
    <input
      id="price"
      type="text"
      className="mt-2 block w-full p-3 "
      placeholder="Precio Producto. ej. 200, 300"
      name="price"
    />
  </div>

  <div className="mb-4">
    <label className="text-gray-800" htmlFor="description">
      Description:
    </label>
    <input
      id="description"
      type="text"
      className="mt-2 block w-full p-3 bg-gray-50"
      placeholder="Descripcion del producto"
      name="description"
    />
  </div>

  <div className="mb-4  flex-col">
    <label className="text-gray-800" htmlFor="available">
      Available:
    </label>
    <input
      id="available"
      type="checkbox"
      className="mt-2 p-3 w-5 h-5 bg-gray-50 block"
      name="available"
    />
  </div>

  <button
    type="submit"
    className="mt-5 w-full bg-blue-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
  >
    {navigation.state !== "idle" ? (
      <SpinnerCircle size={5} />
    ) : (
      "Register Product"
    )}
  </button>
</Form>; */
}
