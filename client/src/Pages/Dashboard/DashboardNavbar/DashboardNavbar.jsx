import { CgProfile } from "react-icons/cg";
import { HiOutlineHome } from "react-icons/hi2";

import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo (2).png";
import useAuth from "../../../Hooks/useAuth";
import useUserRole from "../../../Hooks/useUserRole";
import MemberNavbar from "./MemberNavbar";
import { MdLogout } from "react-icons/md";
import { toast } from "react-toastify";

const DashboardNavbar = () => {
    const {user, logOut} = useAuth()
    const role = useUserRole()

    const handelLogout = () =>{
        logOut()
        .then(()=>{
            toast.success("Log Out Successful")
        })
    }
    return (
      <>
        <div className="flex text-center pr-4">
          <img className="w-full h-36 " src={logo} alt="" />
        </div>
        <div className="border-y-2 h-5 bg-[#4A5565]"></div>

        <div>
          <ul className="p-10 space-y-2 text-lg">
            <li className="hover:bg-[#4A5565] px-3 py-2 text-lg">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-white flex items-center"
                    : "flex items-center"
                }
                to={"home"}
              >
                <HiOutlineHome className="mr-2" />
                Home
              </NavLink>
            </li>
            <li className="hover:bg-[#4A5565] px-3 py-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-bold flex items-center" : "flex items-center"
                }
                to={"profile"}
              >
                <CgProfile className="mr-2" />
                Profile
              </NavLink>
            </li>

            {
              user &&  role === "member" && <MemberNavbar></MemberNavbar>
            }

            
          </ul>
        </div>

        <div className="border-y-2 h-5 bg-[#4A5565]"></div>
        <div>
          <ul className="p-10 space-y-2 text-lg">
            <li className="hover:bg-[#4A5565] px-3 py-2 text-lg">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-white flex items-center"
                    : "flex items-center"
                }
                to={"/"}
              >
                <HiOutlineHome className="mr-2" />
                Home
              </NavLink>
            </li>
            <li className="hover:bg-[#4A5565] px-3 py-2 text-lg">
              <div onClick={handelLogout} className="flex items-center cursor-pointer">
                <MdLogout className="mr-2" />
                Logout
              </div>
            </li>
          </ul>
        </div>
      </>
    );
};

export default DashboardNavbar;