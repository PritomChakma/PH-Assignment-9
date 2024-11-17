import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
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
      {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children:[
          {
            path:"/auth/login",
            element:<h2>Login</h2>
          },
          {
            path:"/auth/register",
            element:<h2>Register</h2>
          }
        ]
      },
    ],
  },
]);

export default router;
