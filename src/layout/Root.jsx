import Navbar from "../componants/NavBar/Navbar";
import { Outlet } from "react-router-dom";


const Root = () => {

  return (
      <div className="w-10/12 mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
  );
};

export default Root;
