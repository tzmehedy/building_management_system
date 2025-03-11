import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";
import CouponsModal from "../Modals/CouponsModal";
const ManageCoupons = () => {
    const axiosSecure = useAxiosSecure()
    const [open,setOpen] = useState(false)
    const {data:coupons, refetch, isLoading} = useQuery({
        queryKey: ["coupons"],
        queryFn: async () =>{
            const { data } = await axiosSecure.get("/allCoupons")
            return data
        }
    })
    const handelOpen = () =>{
        setOpen(true)
    }

    if (isLoading)
      return (
        <div className="flex justify-center items-center h-screen">
          <p>loading.....</p>
        </div>
      );
    return (
      <div>
        <div className=" ">
          <h1 className="uppercase underline text-2xl mt-3 text-[#344B8F] font-bold text-center">
            Manage Coupons
          </h1>
        </div>

        <div className=" m-20">
          <div className="overflow-x-auto ">
            <table className="table text-center">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Coupon Code</th>
                  <th>Discount Percentage</th>
                  <th>Coupon Description</th>
                </tr>
              </thead>
              <tbody>
                {coupons?.map((coupon, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{coupon?.code}</td>
                    <td>{coupon?.discount_percentage}</td>
                    <td>{coupon?.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <hr />

            <div className="flex justify-center mt-10">
              <button
                onClick={handelOpen}
                className="flex items-center gap-2 btn bg-[#344B8F] text-white"
              >
                <IoIosAdd className="text-2xl"></IoIosAdd> Add Coupon
              </button>
            </div>
          </div>
          <div className="">
            <CouponsModal
              open={open}
              setOpen={setOpen}
              refetch={refetch}
            ></CouponsModal>
          </div>
        </div>
      </div>
    );
};

export default ManageCoupons;