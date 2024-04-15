import { useEffect } from "react";
import Navbar from "../NavBar/Navbar";

const NotFound = () => {
      // Dynamic title
  useEffect(()=> {
    document.title='Berao | Not found'
  },[])
    return (
        <div className="max-h-screen relative bg-white">
            <Navbar></Navbar>
            <img src="https://i.ibb.co/4RN3t0H/404-page.jpg" alt="" className="max-h-screen w-fit absolute right-0 z-10" />
            <h2 className="z-10 w-2/6 absolute top-[20rem] left-[23rem] text-2xl font-bold text-teal-900">Berao estate: Luxurious properties, exceptional service, and
              unparalleled living experiences.</h2>
        </div>
    );
};

export default NotFound;