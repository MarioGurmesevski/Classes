import Layout from "../../components/Layout";
import AdsList from "../../components/AdsList";
import AdDetails from "../../components/AdDetails";
import AdForm from "../../components/AdForm";

const GeneralRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "",
      element: <AdsList />,
    },
    {
      path: "ads/:id",
      element: <AdDetails />,
    },
    {
      path: "form",
      element: <AdForm />,
    },
    {
      path: "form/:id",
      element: <AdForm />,
    },
    {
      path: "*",
      element: <h1>Page Not Found</h1>,
    },
  ],
};

export default GeneralRoutes;
