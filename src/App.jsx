import { createBrowserRouter } from "react-router";
import "./App.css";
import Home from "./components/Home";
import FAG from "./components/FAG";
import About from "./components/About";
import Products from "./components/Products";
import { RouterProvider } from "react-router";
import ErrorPage from "./components/ErrorPage";
import Layout from "./Layout";
import ProductDetail from "./components/ProductDetail";
import Users from "./components/Users";
import UsersData from "./components/UsersData";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "users", element: <Users /> },
        { path: "users/:id", element: <UsersData /> },
        { path: "home", element: <Home /> },
        { path: "fag", element: <FAG /> },
        { path: "about", element: <About /> },
        { path: "products", element: <Products /> },
        { path: "products/:id", element: <ProductDetail /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
