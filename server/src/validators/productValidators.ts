import { body, param } from "express-validator";

export const productValidationRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("price")
    .isNumeric()
    .withMessage("Price must be a number")
    .notEmpty()
    .withMessage("Price is required")
    .custom((value) => value > 0)
    .withMessage("Price must be greater than 0"),
  body("description").notEmpty().withMessage("Description is required"),
  body("available").isBoolean().withMessage("Available must be a boolean"),
];

export const productByIdValidationRules = [
  param("id").isInt().withMessage("Id must be an integer"),
];

export const updateProductAvailableValidationRules = [
  body("available").isBoolean().withMessage("Available must be a boolean"),
];
