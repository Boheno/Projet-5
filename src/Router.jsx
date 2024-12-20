import { createBrowserRouter } from "react-router-dom"
import Home from './Home/index.jsx'
import About from "./About/about.jsx"
import Header from "./Header/header.jsx"
import Footer from "./Footer/Footer.jsx"
import Error from "./Error/error.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: (<><Header /> <Home /> <Footer /> </>),
  },
  {
    path: "/about",
    element: (<><Header /> <About /> <Footer /> </>),
  },
  {
    path: "*",
    element: (<><Header /> <Error /> <Footer /> </>),
  },
]);

export default router