import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
