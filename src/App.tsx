import { useRoutes } from "react-router-dom";
import Home from "./pages/client/Home";
import ProductDetail from "./pages/client/ProductDetail";
import ClientLayout from "./layouts/ClientLayout";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import AdminLayout from "./layouts/AdminLayout";
import ListProduct from "./pages/admin/product/ListProduct";
import AddProduct from "./pages/admin/product/AddProduct";
import UpdateProduct from "./pages/admin/product/UpdateProduct";
import AddCategory from "./pages/admin/category/AddCategory";
import ListCategory from "./pages/admin/category/ListCategory";
import UpdateCategory from "./pages/admin/category/UpdateCategory";
import NotFound from "./components/NotFound";
import Cart from "./pages/client/Cart";
import CheckOut from "./pages/client/CheckOut";
import ListOrder from "./pages/admin/order/ListOrder";
import DetailOrder from "./pages/admin/order/DetailOrder";
import ShopPage from "./pages/client/ShopPage";

const routeConfig = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      // Product
      { path: "product/list", element: <ListProduct /> },
      { path: "product/add", element: <AddProduct /> },
      { path: "product/:id/update", element: <UpdateProduct /> },
      // Category
      { path: "category/list", element: <ListCategory /> },
      { path: "category/add", element: <AddCategory /> },
      { path: "category/:id/update", element: <UpdateCategory /> },
      // Order
      { path: "order/list", element: <ListOrder /> },
      { path: "order/:id/detail", element: <DetailOrder /> },
    ],
  },
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "/product/not-found", element: <NotFound /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/cart", element: <Cart /> },
      { path: "/check-out", element: <CheckOut /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

function App() {
  const routes = useRoutes(routeConfig);

  return <main>{routes}</main>;
}

export default App;
