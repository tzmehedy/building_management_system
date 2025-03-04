import { MdManageAccounts } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { TfiAnnouncement } from "react-icons/tfi";
import { CiSquareQuestion } from "react-icons/ci";
import { RiCoupon3Line } from "react-icons/ri";
const AdminNavbar = () => {
    return (
      <>
        <li className="hover:bg-[#4A5565] px-3 py-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold flex items-center" : "flex items-center"
            }
            to={"manage-member"}
          >
            <MdManageAccounts className="mr-2" />
            Manage Member
          </NavLink>
        </li>
        <li className="hover:bg-[#4A5565] px-3 py-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold flex items-center" : "flex items-center  "
            }
            to={"manage-announcement"}
          >
            <TfiAnnouncement className="mr-2" /> Manage Announcement
          </NavLink>
        </li>
        <li className="hover:bg-[#4A5565] px-3 py-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold flex items-center" : "flex items-center  "
            }
            to={"agreement-requests"}
          >
            <CiSquareQuestion className="mr-2" /> Agreement Requests
          </NavLink>
        </li>
        <li className="hover:bg-[#4A5565] px-3 py-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold flex items-center" : "flex items-center  "
            }
            to={"manage-coupons"}
          >
            <RiCoupon3Line className="mr-2" /> Manage Coupons
          </NavLink>
        </li>
      </>
    );
};

export default AdminNavbar;