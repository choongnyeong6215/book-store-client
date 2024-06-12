import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { BookStoreThemeProvider } from "./context/themeContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/common/Error";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Carts from "./pages/Carts";
import Order from "./pages/Order";
import OrderList from "./pages/OrderList";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./api/queryClient";
import ToastContainer from "./components/toast/ToastContainer";

const routeList = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/join",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset",
    element: <ResetPassword />,
  },
  {
    path: "/books/:bookId",
    element: <BookDetail />,
  },
  {
    path: "/carts",
    element: <Carts />,
  },
  {
    path: "/orders",
    element: <Order />,
  },
  {
    path: "/orderlist",
    element: <OrderList />,
  },
];

const router = createBrowserRouter(
  routeList.map((item) => {
    return {
      ...item,
      element: <Layout>{item.element}</Layout>,
      errorElement: <Error />,
    };
  })
);

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BookStoreThemeProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </BookStoreThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
