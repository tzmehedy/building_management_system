import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import CheckOutPage from "../CheckOutPage";


const MakePayments = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const [checkOutOpen, setCheckoutOpen] = useState(false)
    const [month,setMonth] = useState()

    const {data:agreementData, isLoading} = useQuery({
        queryKey: ["agreementData"],
        queryFn: async() =>{
            const { data } = await axiosSecure.get(`/agreement/${user?.email}`)
            return data
        }
    })
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      );
    }

    const handelCheckOutPage = (e) =>{
      e.preventDefault()
      const form = e.target 
      const month = form.month.value 
      setCheckoutOpen(true)
      setMonth(month)
      return <CheckOutPage></CheckOutPage>

    }

    return (
      <>
        {!checkOutOpen && (
          <div className=" flex flex-col justify-center p-10">
            <div className=" ">
              <h1 className="uppercase underline text-2xl mt-3 text-[#344B8F] font-bold text-center">
                Make Your Payment
              </h1>
            </div>
            <div className="bg-[#344B8F] w-full h-96 p-10 mt-5">
              <form onSubmit={handelCheckOutPage} className="space-y-2">
                <div className="flex md:space-x-5">
                  <div className="flex flex-col md:w-1/2 space-y-2">
                    <label className="font-bold" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 bg-white border-none text-gray-500 font-bold"
                      type="email"
                      name="email"
                      id=""
                      defaultValue={user?.email}
                      disabled
                    />
                  </div>
                  <div className="flex flex-col md:w-1/2 space-y-2">
                    <label className="font-bold" htmlFor="floorNo">
                      Floor No:
                    </label>
                    <input
                      className="w-full px-3 py-2 bg-white border-none text-gray-500 font-bold"
                      type="number"
                      name="floorNo"
                      id=""
                      defaultValue={agreementData?.floor_no}
                      disabled
                    />
                  </div>
                </div>
                <div className="flex md:space-x-5">
                  <div className="flex flex-col md:w-1/2 space-y-2">
                    <label className="font-bold" htmlFor="blockName">
                      Block Name
                    </label>
                    <input
                      className="w-full px-3 py-2 bg-white border-none text-gray-500 font-bold"
                      type="text"
                      name="blockName"
                      id=""
                      defaultValue={agreementData?.block_name}
                      disabled
                    />
                  </div>
                  <div className="flex flex-col md:w-1/2 space-y-2">
                    <label className="font-bold" htmlFor="ApartmentNo">
                      Apartment No:
                    </label>
                    <input
                      className="w-full px-3 py-2 bg-white border-none text-gray-500 font-bold"
                      type="number"
                      name="apartmentNo"
                      id=""
                      defaultValue={agreementData?.apartment_no}
                      disabled
                    />
                  </div>
                </div>
                <div className="flex md:space-x-5">
                  <div className="flex flex-col md:w-1/2 space-y-2">
                    <label className="font-bold" htmlFor="rent">
                      Rent
                    </label>
                    <input
                      className="w-full px-3 py-2 bg-white border-none text-gray-500 font-bold"
                      type="number"
                      name="rent"
                      id=""
                      defaultValue={`${agreementData?.rent}`}
                      disabled
                    />
                  </div>
                  <div className="flex flex-col md:w-1/2 space-y-2">
                    <label className="font-bold" htmlFor="month">
                      Month For pay
                    </label>
                    <select
                      className="px-3 py-2 bg-white border-none w-full"
                      name="month"
                      required
                      defaultValue="Select a month"
                    >
                      <option disabled>Select a month</option>
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
                  </div>
                </div>

                <div className="">
                  {/* <button
              
                className="btn border-none shadow-none w-full mt-5 text-[#344B8F] font-bold text-xl"
                // to={"/dashboard/check-out"}
                type="submit"
              >
                Pay
              </button> */}
                  <input
                    className="btn border-none shadow-none w-full mt-5 text-[#344B8F] font-bold text-xl"
                    type="submit"
                    value="Pay"
                  />
                </div>
              </form>
            </div>
          </div>
        )}

        {checkOutOpen && (
          <CheckOutPage
            month={month}
            agreementData={agreementData}
          ></CheckOutPage>
        )}
      </>
    );
};

export default MakePayments;