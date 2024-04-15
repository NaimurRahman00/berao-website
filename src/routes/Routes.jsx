import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../componants/Home/Home";
import Rooms from "../componants/Rooms/Rooms";
import Package from "../componants/Package/Package";
import Contact from "../componants/Contact/Contact";
import Login from "../componants/Login/Login";
import Register from "../componants/Register/Register";
import ViewProperty from "../componants/ViewProperty/ViewProperty";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../componants/404/NotFound";
import Blog from "../layout/Blog";


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
          path: "/view-property/:id",
          element: <PrivateRoute><ViewProperty></ViewProperty></PrivateRoute>,
          loader: ()=> fetch("/data.json")
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
        {
          path: "/blog",
          element: <PrivateRoute><Blog></Blog></PrivateRoute>
        },
      ],
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    }
  ]);

export default router;