import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";

const Root = () => {
  return (
    <div>
      <div className="">
        <NavBar></NavBar>
      </div>

      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
