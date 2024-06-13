import { AjaxConfig } from "../types/ajaxConfig";
import { Product } from "../types/product";
import { ajax } from "../utils/ajax";

export const getAllProducts = async (): Promise<Product[]> => {
  const config: AjaxConfig = {
    method: "GET",
    url: import.meta.env.VITE_API_URL,
  };

  const response = await ajax(config);
  return response as Product[];
};
