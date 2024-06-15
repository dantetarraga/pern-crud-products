import {
  array,
  boolean,
  maxLength,
  minLength,
  minValue,
  nonEmpty,
  number,
  object,
  optional,
  pipe,
  string,
} from "valibot";

export const CreateProductSchema = object({
  name: pipe(
    string(),
    nonEmpty("Product name cannot be empty."),
    minLength(3, "Product name must be at least 3 characters long."),
    maxLength(50, "Product name cannot be longer than 50 characters.")
  ),
  price: pipe(number(), minValue(0)),
  description: string(),
  available: boolean(),
});

export const ProductSchema = object({
  id: optional(number()),
  name: string(),
  price: number(),
  description: string(),
  available: boolean(),
});

export const ProductsSchema = array(ProductSchema);
