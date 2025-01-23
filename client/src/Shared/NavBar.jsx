import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo (2).png"
import { MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";


const NavBar = () => {
    return (
      <div className="fixed z-30 max-w-full container">
        <div className="flex justify-center">
          <Link to={"/"}>
            <img className="h-20 w-48" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar mt-0 shadow-sm border border-y-gray-300 border-x-0">
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
            <ul className="menu menu-horizontal px-1">
              <li className="text-xl">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="text-xl">
                <NavLink to={"/apartment"}>Apartment</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn text-2xl outline-0 flex items-center rounded-xl">
              <MdMenu></MdMenu> <FaRegUser></FaRegUser>
            </button>
          </div>
        </div>
      </div>
    );
};

export default NavBar;