import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo (2).png"
import { MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";


const NavBar = () => {
    
    return (
      <div className="fixed z-50 bg-[#344B8F] opacity-80 top-0 container mx-auto max-w-full">
        <div className="flex justify-center">
          <Link to={"/"}>
            <img className="h-20 w-48" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar   mt-0 shadow-sm border border-y-gray-300 border-x-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 shadow"
              >
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/apartment"}>Apartment</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal  space-x-2">
              <li className="text-xl font-bold">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="text-xl font-bold">
                <NavLink to={"/apartment"}>Apartment</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end ">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                <MdMenu></MdMenu> <FaRegUser></FaRegUser>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NavBar;