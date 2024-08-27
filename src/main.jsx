import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './Pages/login.jsx';
import RegisterPage from './Pages/register.jsx';
import UserPage from './Pages/user.jsx';
import ProductPage from './Pages/products.jsx';
import './style/global.css';
import TodoApp from './Components/Todo/TodoApp.jsx';
import ErrorPage from './Components/layout/error.jsx';

const router = createBrowserRouter([
  {
    // lấy trang app làm trang chủ
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        // trang TodoApp là trang con của app mặc định hiện lên đầu tiên qua outlet
        index: true,
        element: <TodoApp />
      },
      {
        // trang user là trang con kế thừa header và footer của app qua outlet
        path: "/user",
        element: <UserPage />
      },
      {
        path: "/products",
        element: <ProductPage />
      }
    ]
  },
  {
    // login là trang ngang hàng với App
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* chương trình bắt đầu chạy tại đây. Bỏ hàm app chạy hàm router phía trên đầu tiên */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
