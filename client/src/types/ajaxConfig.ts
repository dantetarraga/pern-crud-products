import { type Product } from "./product";

type Method = "GET" | "POST" | "PUT" | "DELETE";

export interface AjaxConfig {
  url: string;
  method: Method;
  data?: Product[];
}
