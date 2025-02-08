import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import {useEffect, useState } from "react";

const useAgreementIsExist = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const [isExist, setIsExist] = useState(false)

    useEffect(()=>{
        if(user){
            axiosPublic.post("/isExist", {email: user?.email})
            .then(result=>{
                if(result.data.isExist){
                    setIsExist(true)
                }
            })
        }
    },[axiosPublic,user,isExist])
    return isExist
    
};

export default useAgreementIsExist;