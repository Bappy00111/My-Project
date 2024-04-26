import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Regester from "./components/Regester.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import Main from "./components/Layout/Main.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/regester",
        element: <Regester></Regester>,
      },

    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
