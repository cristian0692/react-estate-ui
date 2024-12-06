import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./pages/layout/layout.scss";
import HomePage from "./pages/homePage/homePage";
import ListPage from "./pages/listPage/listPage";
import LoginPage from "./pages/loginPage/loginPage";
import SinglePage from "./pages/singlePage/singlePage";
import Layout from "./pages/layout/layout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
