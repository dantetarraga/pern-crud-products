import { Form, useFetcher } from "react-router-dom";
import { Product } from "../../types/product";

interface Props {
  onClose: () => void;
  product: Product;
  fetcher: ReturnType<typeof useFetcher>;
}

const ProductEditeModal = ({ onClose, product, fetcher }: Props) => {
  return (
    <section
      className="fixed inset-0 flex justify-center items-center bg-slate-900 bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div className="bg-white w-96 flex flex-col">
        <h2 className="text-2xl font-bold">Editing product</h2>
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={product.name}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              defaultValue={product.description}
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              defaultValue={product.price}
            />
          </div>
          <div>
            <label htmlFor="available">Available</label>
            <input
              type="checkbox"
              name="available"
              id="available"
              defaultChecked={product.available}
            />
          </div>
          <div>
            <button
              type="submit"
              // onClick={() => fetcher.submit()}
            >
              Save
            </button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default ProductEditeModal;
