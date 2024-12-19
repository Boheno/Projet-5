import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './index.jsx'
import About from "./about/about.jsx"
import Header from "./Header/header.jsx"
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);