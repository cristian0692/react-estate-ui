import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./pages/layout/layout.scss";
import HomePage from "./pages/homePage/HomePage";
import ListPage from "./pages/listPage/ListPage.jsx";
import LoginPage from "./pages/loginPage/LoginPage";
import SinglePage from "./pages/singlePage/SinglePage";
import Layout from "./pages/layout/Layout";
import ProfilePage from "./pages/profilePage/profilePage.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>AxoState</title>
          <link rel="icon" href="/favicon.png" />
        </Helmet>
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
}

export default App;
