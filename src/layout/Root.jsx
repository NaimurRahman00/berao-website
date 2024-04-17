import Navbar from "../componants/NavBar/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../componants/Footer/Footer";
import Profile from "../componants/Modal/Profile";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Root = () => {
  return (
    <div className="mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Profile></Profile>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
