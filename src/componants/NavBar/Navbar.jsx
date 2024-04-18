import { useContext, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ContextData } from "../../provider/AuthProvider";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();
  const { currentUser, logOut, userPhoto, userName, setOpenModal } =
    useContext(ContextData);
  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);
  // Logout
  const handleLogOut = () => {
    logOut();
  };

  // user profile
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, []);

  return (
    <nav className=" text-black mb-12 fixed top-0 left-0 right-0 z-50 bg-[#0000002c] backdrop-blur-md shadow-lg">
      <div className="relative">
        <div className="w-[95%] md:w-[94%] lg:w-10/12 px-4 py-2 mx-auto max-w-[1400px] flex items-center justify-between">
          <div className="scale-100 cursor-pointer rounded-2xl py-2 text-xl font-semibold text-black transition-all duration-200 hover:scale-110">
            <Link
              data-aos="fade-up"
              data-aos-duration="2000"
              to="/"
              className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-teal-500"
            >
              Berao
            </Link>
          </div>
          <ul className="hidden items-center gap-4 justify-between lg:flex text-white">
            <NavLink
              data-aos="zoom-in"
              data-aos-duration="500"
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "group flex cursor-pointer flex-col bg-teal-600 px-4 pt-1 py-0.5 rounded-full text-white relative overflow-hidden"
                  : "group flex cursor-pointer px-4 pt-1 py-0.5 relative overflow-hidden grayscale rounded-full"
              }
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-500 bg-emerald-600 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-green-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-teal-500 rounded-full blur-md"></span>
              </span>
              <span className="relative text-black/80 font-bold">Home</span>
            </NavLink>
            <NavLink
              data-aos="zoom-in"
              data-aos-duration="500"
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "group flex cursor-pointer flex-col bg-teal-600 px-4 pt-1 py-0.5 rounded-full text-white relative overflow-hidden"
                  : "group flex cursor-pointer flex-col px-4 pt-1 py-0.5 relative overflow-hidden grayscale rounded-full"
              }
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-500 bg-emerald-600 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-green-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-teal-500 rounded-full blur-md"></span>
              </span>
              <span className="relative text-black/80 font-bold">Blogs</span>
            </NavLink>
            <NavLink
              data-aos="zoom-in"
              data-aos-duration="500"
              to="/package"
              className={({ isActive }) =>
                isActive
                  ? "group flex cursor-pointer flex-col bg-teal-600 px-4 pt-1 py-0.5 rounded-full text-white relative overflow-hidden"
                  : "group flex cursor-pointer flex-col px-4 pt-1 py-0.5 relative overflow-hidden grayscale rounded-full"
              }
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-500 bg-emerald-600 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-green-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-teal-500 rounded-full blur-md"></span>
              </span>
              <span className="relative text-black/80 font-bold">Package</span>
            </NavLink>
            <NavLink
              data-aos="zoom-in"
              data-aos-duration="500"
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "group flex cursor-pointer flex-col bg-teal-600 px-4 pt-1 py-0.5 rounded-full text-white relative overflow-hidden"
                  : "group flex cursor-pointer flex-col px-4 pt-1 py-0.5 relative overflow-hidden grayscale rounded-full"
              }
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-500 bg-emerald-600 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-green-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-teal-500 rounded-full blur-md"></span>
              </span>
              <span className="relative text-black/80 font-bold">Contact</span>
            </NavLink>
          </ul>

          {currentUser ? (
            <div
              ref={dropDownRef}
              className="relative flex items-center gap-6 w-fit text-black"
            >
              <button
              data-aos="zoom-in"
              data-aos-duration="500"
                onClick={handleLogOut}
                className="rounded-full bg-red-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90 hidden md:flex"
              >
                Log out
              </button>
              <button
              data-aos="zoom-in"
              data-aos-duration="500"
                className="tooltip tooltip-left lg:tooltip-right tooltip-accent hidden md:flex"
                data-tip={userName || currentUser.displayName}
                onClick={() => {
                  setOpen((prev) => !prev);
                }}
              >
                <img
                
                  width={40}
                  height={40}
                  className="size-10 rounded-full bg-slate-500 object-cover duration-500 hover:scale-x-[98%] hover:opacity-80"
                  src={currentUser?.photoURL || userPhoto}
                  alt="avatar drop down navigate ui"
                />
              </button>
              <ul
                className={`${
                  open ? "visible duration-300" : "invisible"
                } absolute flex flex-col right-0 top-[3.4rem] z-50 w-[10rem] text-center rounded-sm bg-slate-200 shadow-md`}
              >
                <Link
                
                  onClick={() => setOpenModal(true)}
                  className="rounded-sm px-6 py-2 opacity-100 duration-300 bg-gradient-to-tr from-green-400 to-teal-700 text-white/70 font-bold hover:opacity-70"
                >
                  Profile
                </Link>
                <Link className="rounded-sm px-6 py-2 opacity-100 duration-300 bg-gradient-to-br from-green-400 to-teal-700 border-t border-t-black/40 text-white/70 font-bold hover:opacity-70">
                  Setting
                </Link>
              </ul>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-5">
              <Link to="/login">
                <button className="text-xs md:text-base rounded-full bg-teal-600 px-4 py-1 md:px-6 md:py-2 text-white transition-all duration-300 hover:scale-90">
                  Log In
                </button>
              </Link>
              <Link to="/register">
                <button className="text-xs md:text-base rounded-full bg-teal-600 px-4 py-1 md:px-6 md:py-2 text-white transition-all duration-300 hover:scale-90">
                  Register
                </button>
              </Link>
            </div>
          )}

          <div
            ref={dropDownMenuRef}
            onClick={() => setDropDownState(!dropDownState)}
            className="relative flex transition-transform md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer text-teal-500"
            >
              {" "}
              <line x1="4" x2="20" y1="12" y2="12" />{" "}
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />{" "}
            </svg>
            {dropDownState && (
              <ul className=" z-10  gap-2  bg-[#393E46] absolute right-0 top-11 flex w-[140px] md:w-[200px] flex-col  rounded-xl overflow-hidden text-center text-base ">
                <NavLink
                  to="/"
                  className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 "
                >
                  Home
                </NavLink>
                <NavLink
                  to="/blog"
                  className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 "
                >
                  Blogs
                </NavLink>
                <NavLink
                  to="/package"
                  className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 "
                >
                  Package
                </NavLink>
                <NavLink
                  to="/contact"
                  className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 "
                >
                  Contact
                </NavLink>
                <NavLink
                  onClick={() => setOpenModal(true)}
                  className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 "
                >
                  Profile
                </NavLink>
                <NavLink
                  onClick={handleLogOut}
                  className="cursor-pointer  px-6 py-2 text-white bg-red-600 "
                >
                  Log out
                </NavLink>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
