import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./pages/layout/layout.scss";
import HomePage from "./pages/homePage/HomePage";
import ListPage from "./pages/listPage/ListPage.jsx";
import LoginPage from "./pages/loginPage/LoginPage";
import SinglePage from "./pages/singlePage/SinglePage";
import Layout from "./pages/layout/Layout";
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
