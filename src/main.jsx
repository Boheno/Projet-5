import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Home/index.jsx'
import About from "./About/about.jsx"
import Header from "./Header/header.jsx"
import Error from "./Error/error.jsx"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (<><Header /> <Home /></>),
  },
  {
    path: "/about",
    element: (<><Header /> <About /></>),
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);