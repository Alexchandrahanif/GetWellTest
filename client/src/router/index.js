import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../components/Layout";
import FabunaciPage from "../pages/Fabunaci";
import HomePage from "../pages/HomePage";
import LogicPage from "../pages/Logic";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    // loader: () => {
    //   if (localStorage.getItem("access_token")) {
    //     throw redirect("/");
    //   }
    //   return null;
    // },
  },
  {
    path: "/",
    element: <Layout />,
    // loader: () => {
    //   if (!localStorage.getItem("access_token")) {
    //     throw redirect("/login");
    //   }
    //   return null;
    // },

    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/logic",
        element: <LogicPage />,
      },
      {
        path: "/fabunaci",
        element: <FabunaciPage />,
      },
    ],
  },
]);

export default router;
