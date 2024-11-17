import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Brands from "../Pages/Brands";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
      },
    ],
  },
]);

export default router;
