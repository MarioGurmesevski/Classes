import { lazy } from "react";

const LoginComponenet = lazy(() =>
  import("../../components/Auth/Login")
);
const LayoutComponenet = lazy(() =>
  import("../../components/Layout/Layout")
);

const AuthRoutes = {
  path: "/",
  element: <LayoutComponenet />,
  children: [
    {
      path: "/login",
      element: <LoginComponenet />,
    },
  ],
};

export default AuthRoutes;
