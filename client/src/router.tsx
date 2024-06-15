import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { action as newProductAction } from "./views/NewProduct";
import { loader as loaderProducts } from "./views/Products";

const Products = lazy(() => import("./views/Products"));
const NewProduct = lazy(() => import("./views/NewProduct"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: loaderProducts,
      },
      {
        path: "products/new",
        element: <NewProduct />,
        action: newProductAction,
      },
    ],
  },
]);
