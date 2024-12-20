import { createBrowserRouter } from "react-router-dom"
import Home from './Home/index.jsx'
import About from "./About/about.jsx"
import Header from "./Header/header.jsx"
import Error from "./Error/error.jsx"

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

export default router