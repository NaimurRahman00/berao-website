import Navbar from "../componants/NavBar/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Root = () => {

  return (
    <div className="mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
