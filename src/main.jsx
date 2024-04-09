import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './layout/Root';
import Home from './componants/Home/Home';
import Rooms from './componants/Rooms/Rooms';
import Package from './componants/Package/Package';
import Contact from './componants/Contact/Contact';
import Login from './componants/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>
      },
      {
        path: "/package",
        element: <Package></Package>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
