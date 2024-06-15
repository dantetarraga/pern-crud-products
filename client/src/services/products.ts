import { flatten, safeParse } from "valibot";
import { CreateProductSchema, ProductsSchema } from "../schemas/ProductSchema";
import { AjaxConfig } from "../types/ajaxConfig";
import { Product, ProductData } from "../types/product";
import { ajax } from "../utils/ajax";

export const getAllProducts = async () => {
  const config: AjaxConfig = {
    method: "GET",
    url: import.meta.env.VITE_API_URL,
  };

  const data = await ajax(config);
  const result = safeParse(ProductsSchema, data.products);

  if (!result.success) return flatten<typeof ProductsSchema>(result.issues);

  return data.products;
};

export const createProduct = async (product: ProductData) => {
  const newProduct: Product = {
    name: String(product.name),
    description: String(product.description),
    price: Number(product.price),
    available: product.available === "on",
  };

  const result = safeParse(CreateProductSchema, newProduct);

  if (!result.success)
    return flatten<typeof CreateProductSchema>(result.issues);

  const config: AjaxConfig = {
    method: "POST",
    url: import.meta.env.VITE_API_URL,
    data: newProduct,
  };

  return await ajax(config);
};
