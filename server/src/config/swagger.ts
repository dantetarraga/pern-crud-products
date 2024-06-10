import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    tags: [
      {
        name: "Products",
        description: "API for products in the system",
      },
    ],
    info: {
      title: "Products API",
      version: "1.0.0",
      description: "A simple products API",
    },
  },
  apis: ["./src/router.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
