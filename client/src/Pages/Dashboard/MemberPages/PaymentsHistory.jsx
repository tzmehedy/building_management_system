import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";

const PaymentsHistory = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const [searchText, setSearchText] = useState(null)
    j
    const{data:allPayments, isLoading, refetch} = useQuery({
        queryKey: ["allPayments", user?.email],
        queryFn: async() =>{
            const { data } = await axiosSecure.get(
              `/paymentInfoByEmail/${user?.email}?searchText=${searchText}`
            )
            return data
        }
    })

    if (isLoading)
      return (
        <div className="flex justify-center items-center h-screen">
          <p>loading.....</p>
        </div>
      );

    const handelSearch = (e) => {
      e.preventDefault();
      const month = e.target.month.value;
      if(month==="all"){
        setSearchText(null)
        refetch()
        return
      }
      setSearchText(month);
      refetch()
    }
    
    
  return (
    <div>
      <div className=" ">
        <h1 className="uppercase underline text-2xl mt-3 text-[#344B8F] font-bold text-center">
          Your Payment History
        </h1>
      </div>

      <div className="flex justify-center mt-10">
        <form className="flex space-x-3" onSubmit={handelSearch}>
          <select
            className="px-3 py-2 bg-white rounded-lg border-4 border-[#344B8F] w-full"
            name="month"
            required
            defaultValue="Select a month"
          >
            <option disabled>Select a month</option>
            <option value="all">All</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <input className="btn bg-[#344B8F] text-white font-bold px-3 py-2" type="submit" value="Search" />
        </form>
      </div>

      <div className="overflow-x-auto mt-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Floor No</th>
              <th>Block Name</th>
              <th>Apartment No</th>
              <th>Rent</th>
              <th>Transition ID</th>
              <th>Month</th>
            </tr>
          </thead>
          <tbody>
            {allPayments?.map((payment, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{payment?.a_email}</td>
                <td>{payment?.floor_no}</td>
                <td>{payment?.block_name}</td>
                <td>{payment?.apartment_no}</td>
                <td>{payment?.rent}</td>
                <td>{payment?.transitionId}</td>
                <td>{payment?.month}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsHistory;
