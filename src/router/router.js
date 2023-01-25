import { createBrowserRouter } from "react-router-dom";
import Home from "../home/views/Index";
import Product from "../product/views/Index";
import CreateProduct from "../product/views/Create";
import Layout from "../common/Layout";


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/product",
                children: [
                    {
                        path: "/product",
                        element: <Product />
                    },
                    {
                        path: "/product/create",
                        element: <CreateProduct />
                    }
                ]
            },
            {
                path: "/home",
                element: <Home />,
            }
        ]
    }
]);

export default router;