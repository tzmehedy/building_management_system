import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";

const Root = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;