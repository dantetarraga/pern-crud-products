import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { NewProduct } from "./views/NewProduct";
import { loaderProducts, Products } from "./views/Products";

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
      { path: "products/new", element: <NewProduct /> },
    ],
  },
]);
