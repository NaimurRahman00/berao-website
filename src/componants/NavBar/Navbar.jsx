import { useContext, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ContextData } from "../../provider/AuthProvider";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();
  const {currentUser} = useContext(ContextData);

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

  return (
    <nav className="flex items-center justify-between px-4 py-2 text-black mb-12">
      <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-black transition-all duration-200 hover:scale-110">
        <h2>Berao</h2>
      </div>
      <ul className="hidden items-center gap-4 justify-between md:flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "group flex cursor-pointer flex-col bg-teal-600 px-4 pt-1 py-0.5 rounded-full text-white"
              : "group flex cursor-pointer flex-col px-4 pt-1 py-0.5"
          }
        >
          Home
          <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
        <NavLink
          to="/rooms"
          className={({ isActive }) =>
            isActive
              ? "group flex cursor-pointer flex-col bg-teal-600 px-4 pt-1 py-0.5 rounded-full text-white"
              : "group flex cursor-pointer flex-col px-4 pt-1 py-0.5"
          }
        >
          Rooms
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
        <NavLink
          to="/package"
          className={({ isActive }) =>
            isActive
              ? "group flex cursor-pointer flex-col bg-teal-600 px-4 pt-1 py-0.5 rounded-full text-white"
              : "group flex cursor-pointer flex-col px-4 pt-1 py-0.5"
          }
        >
          Package
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "group flex cursor-pointer flex-col bg-teal-600 px-4 pt-1 py-0.5 rounded-full text-white"
              : "group flex cursor-pointer flex-col px-4 pt-1 py-0.5"
          }
        >
          Contact
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
      </ul>
      {
        currentUser && <h2>User ache!</h2>
      }
      <div className="flex items-center justify-between gap-5">
        <Link to="/login">
          <button className="rounded-full bg-teal-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">
            Log In
          </button>
        </Link>
        <Link to="/register">
          <button className="rounded-full bg-teal-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">
            Register
          </button>
        </Link>
      </div>
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
          className="cursor-pointer"
        >
          {" "}
          <line x1="4" x2="20" y1="12" y2="12" />{" "}
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />{" "}
        </svg>
        {dropDownState && (
          <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
            <NavLink
              to="/"
              className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 "
            >
              Home
            </NavLink>
            <NavLink
              to="/rooms"
              className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 "
            >
              Rooms
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
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
