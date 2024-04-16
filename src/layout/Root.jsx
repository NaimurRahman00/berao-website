import Navbar from "../componants/NavBar/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../componants/Footer/Footer";
import Profile from "../componants/Modal/Profile";

const Root = () => {

  return (
    <div className="mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
      <Profile></Profile>
    </div>
  );
};

export default Root;
