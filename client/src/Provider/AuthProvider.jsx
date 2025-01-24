import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState("Md Touhidur")

    const info ={
        user
    }
    return (
        <AuthContext.Provider value={info}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.element
}

export default AuthProvider;