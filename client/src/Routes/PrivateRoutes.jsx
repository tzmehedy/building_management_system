import useAuth from "../Hooks/useAuth";
import {Navigate} from "react-router-dom"
import PropTypes from "prop-types";
const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth()

    if(user){
        return children
    }

    if(loading){
        return (
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        );
    }

    return <Navigate to={"/login"}></Navigate>
   
};

PrivateRoutes.propTypes = {
    children: PropTypes.element
}



export default PrivateRoutes;