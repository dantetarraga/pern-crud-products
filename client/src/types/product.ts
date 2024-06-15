import { InferInput } from "valibot";
import { ProductSchema } from "../schemas/ProductSchema";

export type Product = InferInput<typeof ProductSchema>;

export type ProductData = {
  [key: string]: FormDataEntryValue;
};
