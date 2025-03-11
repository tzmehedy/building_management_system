import { TfiAnnouncement } from "react-icons/tfi";
import { NavLink } from "react-router-dom";


const UserNavbar = () => {
    return (
      <>
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

export default UserNavbar;