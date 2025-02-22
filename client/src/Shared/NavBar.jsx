import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo (2).png"
import { MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";


const NavBar = () => {
  const { user, logOut } = useAuth()

  const handelLogout = () =>{
    logOut()
    .then(()=>{
      toast.success("Successfully Logout")
    })
    .catch(err=>{
      toast.error(err.message)
    })
  }
  
    
    return (
      <div className="fixed z-50  opacity-80 top-0 container mx-auto max-w-full">
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

                {user ? (
                  <>
                    <li>
                      <Link to={"/dashboard"}>Dashboard</Link>
                    </li>
                    <li>
                      <Link onClick={handelLogout}>Logout</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to={"/login"}>Login</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal  space-x-2">
              <li className="text-xl font-bold">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="text-xl font-bold">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                  to={"/apartment"}
                >
                  Apartment
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end hidden md:inline-flex">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                <MdMenu></MdMenu>{" "}
                {user ? (
                  <>
                    <img
                      className="w-7 h-7 rounded-full"
                      src={user?.photoURL}
                      referrerPolicy="true"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <FaRegUser></FaRegUser>
                  </>
                )}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                {user ? (
                  <>
                    <li>
                      <Link to={"/dashboard"}>Dashboard</Link>
                    </li>
                    <li>
                      <Link onClick={handelLogout}>Logout</Link>
                    </li>
                  </>
                ) : (
                  <>
                    {" "}
                    <li>
                      <Link to={"/login"}>Login</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NavBar;