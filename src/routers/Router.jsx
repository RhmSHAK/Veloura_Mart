import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home/Home.jsx";
import Products from "../pages/Products/Products.jsx";
import ProductDetails from "../pages/ProductDetails/ProductDetails.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound/>,
    children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path: "products",
            element: <Products />,
        },
        {
            path: "products/:id",
            element: <ProductDetails />,
        },
        {
            path: "cart",
            element: <Cart />,
        }
    ]
  },
]);