import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
    const {user,loading} = useAuth()
    const axiosSecure = useAxiosSecure()

     {loading &&
      
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
    }
    const {data: role, isLoading} = useQuery({
        queryKey: ["role", user?.email],
        queryFn: async()=>{
            const {data} = await axiosSecure.get(`/user-role/${user?.email}`)
            return data.role
        }
    })

    if(isLoading) return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
    
    return role
};

export default useUserRole;