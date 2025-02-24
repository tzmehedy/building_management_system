import { Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar/DashboardNavbar";
const Dashboard = () => {
    return (
      <div className="flex px-20 space-x-10">
        <div className="md:min-w-76 h-screen bg-[#344B8F]">
          <DashboardNavbar></DashboardNavbar>
        </div>

        <div className="w-full">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;