import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  updateProductAvailability,
} from "./handlers/product";
import { validateRequest } from "./middleware/validateRequest";
import {
  productByIdValidationRules,
  productValidationRules,
  updateProductAvailableValidationRules,
} from "./validators/productValidators";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   Product:
 *     type: object
 *     properties:
 *      id:
 *       type: integer
 *       description: The auto-generated id of the product
 *       example: 1
 *      name:
 *        type: string
 *        description: The name of the product
 *        example: Test Product
 *      price:
 *        type: number
 *        description: The price of the product
 *        example: 100
 *      description:
 *       type: string
 *       description: The description of the product
 *       example: Test Description
 */

router.post("/", productValidationRules, validateRequest, createProduct);

/**
 * @swagger
 * /api/products:
 *  get:
 *   summary: Get all products
 *   tags:
 *    - Product
 *   responses:
 *    200:
 *      description: Returns all products
 *      content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/Product'
 */
router.get("/", getProducts);
router.get("/:id", productByIdValidationRules, validateRequest, getProductById);
router.put(
  "/:id",
  productByIdValidationRules,
  productValidationRules,
  validateRequest,
  updateProduct
);
router.patch(
  "/:id",
  productByIdValidationRules,
  updateProductAvailableValidationRules,
  validateRequest,
  updateProductAvailability
);
router.delete(
  "/:id",
  productByIdValidationRules,
  validateRequest,
  deleteProduct
);

export default router;
