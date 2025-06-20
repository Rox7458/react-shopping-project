import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Basket from "../pages/Basket";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/basket",
        element: <Basket />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
