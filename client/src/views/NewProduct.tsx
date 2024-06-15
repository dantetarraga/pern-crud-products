import type { ActionFunction } from "react-router-dom";
import { Form, Link, redirect } from "react-router-dom";
import { createProduct } from "../services/products";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  let data = Object.fromEntries(formData);

  await createProduct(data);

  return redirect("/");
};

const NewProduct = () => {
  return (
    <section className="">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-slate-950 uppercase">
          Add new product
        </h2>

        <Link
          to="/"
          className="rounded-lg bg-black py-3 px-4 font-bold text-white shadow-sm hover:bg-gray-800"
        >
          Volver a productos
        </Link>
      </div>

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

        <input
          type="submit"
          className="mt-5 w-full bg-blue-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Registrar Producto"
        />
      </Form>
    </section>
  );
};

export default NewProduct;
