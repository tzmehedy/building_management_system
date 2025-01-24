import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div>
      <div className="">
        <NavBar></NavBar>
      </div>

      <div className="">
        <Outlet></Outlet>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
