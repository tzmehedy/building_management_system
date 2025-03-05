import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";


const AllAgreementsRequest = () => {
    const axiosSecure = useAxiosSecure()

    const {data: allAgreements, isLoading, refetch} = useQuery({
        queryKey: ["allAgreements"],
        queryFn: async() =>{
            const { data } = await axiosSecure.get("/allAgreements")
            return data 
        }
    })
    if (isLoading)
      return (
        <div className="h-screen w-full flex justify-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      );

    const handelAccept = async(userEmail,role, id) =>{
        const res1 = axiosSecure.patch(`/users/${userEmail}`, {role})
        const res2 = axiosSecure.patch(`/allAgreements/${id}`)
        if (res1.modifiedCount > 0 && res2.modifiedCount > 0){
            toast.success("The agreement accepted")
             refetch();
        }
    }
    return (
      <div>
        <div className=" ">
          <h1 className="uppercase underline text-2xl mt-3 text-[#344B8F] font-bold text-center">
            All Agreement Requests
          </h1>
        </div>

        <div>
          <div className="overflow-x-auto mt-10">
            <table className="table text-center">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>User Name</th>
                  <th>User Email</th>
                  <th>Floor No</th>
                  <th>Block Name</th>
                  <th>Room No</th>
                  <th>Rent</th>
                  <th>Agreement request date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allAgreements.map((agreement, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{agreement?.a_userName}</td>
                    <td>{agreement?.a_email}</td>
                    <td>{agreement?.floor_no}</td>
                    <td>{agreement?.block_name}</td>
                    <td>{agreement?.apartment_no}</td>
                    <td>${agreement?.rent}</td>
                    <td>{agreement?.agreement_request_date}</td>
                    <td>{agreement?.status}</td>
                    <td className="flex space-x-1">
                      <button
                        disabled={agreement?.status === "accepted"}
                        onClick={() =>
                          handelAccept(
                            agreement?.a_email,
                            "member",
                            agreement?._id
                          )
                        }
                        className="btn bg-green-400"
                      >
                        Accept
                      </button>
                      <button
                        disabled={agreement?.status === "accepted"}
                        className="btn bg-red-400"
                      >
                        Reject
                      </button>
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

export default AllAgreementsRequest;