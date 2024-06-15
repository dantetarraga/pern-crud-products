import { Request, Response } from "express";
import Product from "../models/Product";

export const createProduct = async (req: Request, res: Response) => {
  const { name, price, description, available } = req.body;

  const product = new Product({
    name,
    price,
    available,
    description,
  });

  const newProduct = await product.save();

  if (!newProduct) {
    return res.status(500).json({
      message: "Error creating product",
    });
  }

  return res.status(201).json({
    newProduct,
    message: "Product created successfully",
  });
};

export const getProducts = async (req: Request, res: Response) => {
  let result = await Product.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });

  if (!result) {
    return res.status(404).json({
      message: "Products not found",
    });
  }

  const products = result.map((product) => ({
    ...product.toJSON(),
    price: parseFloat(String(product.price)),
  }));

  return res.status(200).json({
    products,
  });
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  return res.status(200).json({
    product,
  });
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, description, available } = req.body;

  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  const updateProduct = await product.update({
    name,
    price,
    description,
    available,
  });

  await updateProduct.save();

  if (!updateProduct) {
    return res.status(500).json({
      message: "Error updating product",
    });
  }

  return res.status(200).json({
    updateProduct,
    message: "Product updated successfully",
  });
};

export const updateProductAvailability = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const { available } = req.body;

  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  const updateProduct = await product.update({
    available,
  });

  await updateProduct.save();

  if (!updateProduct) {
    return res.status(500).json({
      message: "Error updating product",
    });
  }

  return res.status(200).json({
    updateProduct,
    message: "Product updated successfully",
  });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  await product.destroy();

  return res.status(200).json({
    message: "Product deleted successfully",
  });
};
