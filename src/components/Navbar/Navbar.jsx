import { NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import { FaHamburger } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const { user, logOut } = useAuth();
  

  const handleLogout = () => {
    logOut().then().catch();
  };
  return (
    <div
      className={`relative z-10 ${
        location.pathname !== "/" ? "bg-[#4439A8]" : ""
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-5 py-3 lg:py-1 flex justify-between items-center text-white ">
        <div className="flex-1">
          <Logo></Logo>
        </div>
        <button
          onClick={() => setMenu(!menu)}
          className="lg:hidden  text-2xl z-10"
        >
          <FaHamburger />
        </button>
        <div className={menu ? "" : "hidden lg:block "}>
          <ul
            className={`flex items-center gap-6 lg:flex-row flex-col absolute lg:static top-20 right-5 rounded-lg  bg-[#37095B] lg:bg-transparent  p-6  shadow-lg lg:shadow-none z-10`}
          >
            <li className="text-lg font-semibold">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "underline text-gray-300" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-lg font-semibold">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "underline text-gray-300" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li className="text-lg font-semibold">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "underline text-gray-300" : ""
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="text-lg font-semibold">
              {user && (
                <div className="avatar flex items-center gap-2">
                  <div className="w-12 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                  <h3 className="text-white">{user.displayName}</h3>
                </div>
              )}
            </li>

            {user ? (
              <button
                onClick={handleLogout}
                className="text-lg border-2 rounded-md px-3 py-1 hover:bg-white hover:text-[#37095B] font-semibold duration-300"
              >
                Log out
              </button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "underline text-gray-300" : ""
                }
              >
                <button className="text-lg border-2 rounded-md px-3 py-1 hover:bg-white hover:text-[#37095B] font-semibold duration-300">
                  Login
                </button>
              </NavLink>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
