import Navbar from "../componants/NavBar/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../componants/Footer/Footer";

const Root = () => {

  return (
    <div className="mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
};

export default Root;
