import { createBrowserRouter } from "react-router-dom"
import Home from './Home/index.jsx'
import About from "./About/about.jsx"
import Header from "./Header/header.jsx"
import Footer from "./Footer/Footer.jsx"
import Error from "./Error/error.jsx"
import Banner from "./Banner/Banner.jsx"
import GenerateCards from "./Cards/cards.jsx"
import logements from "../logements.json"

const router = createBrowserRouter([
  {
    path: "/",
    element: (<><Header /> <Home /> <Banner page="Home" /> <GenerateCards logements={logements} /> <Footer /> </>),
  },
  {
    path: "/about",
    element: (<><Header /> <Banner page="About" /> <About /> <Footer /> </>),
  },
  {
    path: "*",
    element: (<><Header /> <Error /> <Footer /> </>),
  },
]);

export default router