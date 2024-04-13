import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../componants/Home/Home";
import Rooms from "../componants/Rooms/Rooms";
import Package from "../componants/Package/Package";
import Contact from "../componants/Contact/Contact";
import Login from "../componants/Login/Login";
import Register from "../componants/Register/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: async () => {
            const [sliders, data] = await Promise.all([
              fetch("/sliders.json"),
              fetch("/data.json")
            ]);
            const slidersData = await sliders.json();
            const cardData = await data.json();
  
            return { slidersData, cardData };
          }
        },
        {
          path: "/rooms",
          element: <Rooms></Rooms>,
        },
        {
          path: "/package",
          element: <Package></Package>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
  ]);

export default router;