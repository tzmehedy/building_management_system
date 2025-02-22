import { Outlet } from "react-router-dom";


import useUserRole from "../../Hooks/useUserRole";
import DashboardNavbar from "./DashboardNavbar/DashboardNavbar";
const Dashboard = () => {
    const role = useUserRole()
    console.log(role)
    return (
      <div className="flex  container mx-auto">
        <div className="md:min-w-76 h-screen bg-[#344B8F]">
          <DashboardNavbar></DashboardNavbar>
        </div>

        <div className="md:w-full">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;