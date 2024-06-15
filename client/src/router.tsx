import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { action as newProductAction } from "./views/NewProduct";
import { actionsProduct, loader as loaderProducts } from "./views/Products";

const Products = lazy(() => import("./views/Products"));
const NewProduct = lazy(() => import("./views/NewProduct"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Products />,
        loader: loaderProducts,
        action: actionsProduct,
      },
      {
        path: "products/new",
        element: <NewProduct />,
        action: newProductAction,
      },
    ],
  },
]);
