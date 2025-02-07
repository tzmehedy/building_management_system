import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import axios from "axios"

export const AuthContext = createContext()
const provider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const loginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const cerateUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const loginWithEmailAndPassword = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const profileUpdate = (name,photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }

    const userRole = async(currentUser)=>{
        console.log(currentUser)
        const userInfo = {
          email: currentUser?.email,
          role: "member",
          status: "verified",
        };
        await axios.put(`${import.meta.env.VITE_URL}/users`, userInfo);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            if(currentUser){
                userRole(currentUser)
            }
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])




    const info = {
      user,
      loginWithGoogle,
      cerateUser,
      loginWithEmailAndPassword,
      profileUpdate,
      logOut,
      loading,
    };
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