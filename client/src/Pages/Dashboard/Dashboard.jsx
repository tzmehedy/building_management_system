import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/images/logo (2).png"
import { HiOutlineHome } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { TfiAnnouncement } from "react-icons/tfi";
const Dashboard = () => {
    return (
      <div className="flex  container mx-auto">
        <div className="md:min-w-76 h-screen bg-[#344B8F]">
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
                    isActive
                      ? "font-bold flex items-center"
                      : "flex items-center"
                  }
                  to={"profile"}
                >
                  <CgProfile className="mr-2" />
                  Profile
                </NavLink>
              </li>
              <li className="hover:bg-[#4A5565] px-3 py-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold flex items-center"
                      : "flex items-center  "
                  }
                  to={"announcement"}
                >
                  <TfiAnnouncement className="mr-2" /> Announcement
                </NavLink>
              </li>
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
            </ul>
          </div>
        </div>
        <div className="md:w-full">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;