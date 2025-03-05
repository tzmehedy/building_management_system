import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ManageUsers = () => {
  const axiosSecure = useAxiosSecure()

  const { data: users, isLoading , refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });

  if (isLoading)
    return (
      <div className="h-screen w-full flex justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );

  const handelRemove = async(email) =>{
    const {data} = await axiosSecure.patch(`/users/${email}`)
    if(data.modifiedCount === 1){
        refetch()
    }
  }
  return (
    <div>
      <div className=" ">
        <h1 className="uppercase underline text-2xl mt-3 text-[#344B8F] font-bold text-center">
          Manage Users
        </h1>
      </div>

      <div>
        <div className="overflow-x-auto mt-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={index} className="text-center">
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user?.photo}
                            referrerPolicy="true"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user?.email}</td>
                  <td>{user?.role}</td>
                  <td>
                    <button onClick={()=>handelRemove(user?.email)} disabled={user?.role === "admin"} className="btn rounded-full bg-red-500 opacity-90">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
