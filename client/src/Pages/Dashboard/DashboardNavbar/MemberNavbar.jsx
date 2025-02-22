
import { NavLink } from "react-router-dom";
import { MdPayment } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";


const MemberNavbar = () => {
    return (
      <>
        <li className="hover:bg-[#4A5565] px-3 py-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold flex items-center" : "flex items-center"
            }
            to={"make-payment"}
          >
            <MdPayment className="mr-2" />
            Make Payment
          </NavLink>
        </li>
        <li className="hover:bg-[#4A5565] px-3 py-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold flex items-center" : "flex items-center  "
            }
            to={"announcement"}
          >
            <TfiAnnouncement className="mr-2" /> Announcement
          </NavLink>
        </li>
      </>
    );
};

export default MemberNavbar;