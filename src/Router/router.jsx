import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import MainLayout from "../Layout/MainLayout";
import Brands from "../Pages/Brands";
import CuponPage from "../Pages/CuponPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/coupon/:id",
        element: (
          <PrivateRoute>
            <CuponPage></CuponPage>
          </PrivateRoute>
        ),
        loader: () => fetch("/products.json"),
      },
      {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "/auth/login",
            element: <Login></Login>,
          },
          {
            path: "/auth/register",
            element: <Register></Register>,
          },
        ],
      },
    ],
  },
]);

export default router;
