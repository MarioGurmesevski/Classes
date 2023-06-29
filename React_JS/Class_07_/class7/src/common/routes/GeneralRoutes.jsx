import Layout from "../../components/Layout/Layout";
import Cart from "../../components/Shop/Cart";
import Shop from "../../components/Shop/Shop";

const GeneralRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Shop />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "*",
      element: <h1>Page Not Found</h1>,
    },
  ],
};

export default GeneralRoutes;
