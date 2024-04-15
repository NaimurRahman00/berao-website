import { useContext, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ContextData } from "../../provider/AuthProvider";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();
  const { currentUser, logOut } = useContext(ContextData);

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
  const items = ["Profile", "Dashboard", "Settings", "Log Out"];

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
    <nav className=" px-4 py-2 text-black mb-12 fixed top-0 left-0 right-0 z-50 bg-[#0000002c]">
      <div className="w-10/12 mx-auto max-w-[1400px] flex items-center justify-between">
        <div className="scale-100 cursor-pointer rounded-2xl py-2 text-xl font-semibold text-black transition-all duration-200 hover:scale-110">
          <h2 className="text-teal-700 font-extrabold text-3xl">Berao</h2>
        </div>
        <ul className="hidden items-center gap-4 justify-between md:flex text-white">
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
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "group flex cursor-pointer flex-col bg-teal-600 px-4 pt-1 py-0.5 rounded-full text-white"
                : "group flex cursor-pointer flex-col px-4 pt-1 py-0.5"
            }
          >
            Blogs
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
        {currentUser ? (
          <div
            ref={dropDownRef}
            className="relative flex items-center gap-6 w-fit text-black"
          >
            <button
              onClick={handleLogOut}
              className="rounded-full bg-red-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90"
            >
              Log out
            </button>
            <button onClick={() => setOpen((prev) => !prev)}>
              <img
                width={40}
                height={40}
                className="size-10 rounded-full bg-slate-500 object-cover duration-500 hover:scale-x-[98%] hover:opacity-80"
                src="https://source.unsplash.com/300x300/?profile"
                alt="avatar drop down navigate ui"
              />
            </button>
            <ul
              className={`${
                open ? "visible duration-300" : "invisible"
              } absolute right-0 top-12 z-50 w-fit rounded-sm bg-slate-200 shadow-md`}
            >
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className={`rounded-sm px-6 py-2 ${
                    open ? "opacity-100 duration-300" : "opacity-0"
                  }  ${
                    item === "Log Out"
                      ? "text-red-500 hover:bg-red-600 hover:text-white"
                      : "hover:bg-slate-300"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : (
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
      </div>
    </nav>
  );
};

export default Navbar;
