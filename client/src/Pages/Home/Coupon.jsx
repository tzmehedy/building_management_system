import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Coupon = () => {
  const axiosPublic = useAxiosPublic()
  const {data:coupons} = useQuery({
    queryKey: ["coupons"],
    queryFn: async() =>{
      const { data } = await axiosPublic.get("allCoupons")
      return data
    }
  })
  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl font-bold">Today&apos;s Discount</h1>
      </div>
      <div className="flex flex-col md:flex-row mb-10 gap-5">
        {coupons?.map((coupon) => (
          <div key={coupon?._id} className="md:w-1/2 flex justify-center md:border-r-2 md:border-gray-300">
            <div className="bg-red-500 w-56 h-40 border-dotted border-r-2 rounded-r-xl rounded-l-xl flex items-center justify-center">
              <div className="flex  space-x-3 p-2">
                <h1 className="text-xl text-center font-bold text-white">
                  Gift Voucher
                </h1>
                <h1 className="text-2xl font-bold text-center bg-amber-300 rounded-full">
                  {coupon?.discount_percentage} % Off
                </h1>
              </div>
            </div>
            <div className="bg-orange-500 w-32 h-40 rounded-l-xl rounded-r-xl border-dotted border-l-2 flex justify-center items-center">
              <div className="rotate-90">
                <h1 className="text-xl font-bold">{coupon?.code}</h1>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="md:w-1/2 flex justify-center">
          <div className="bg-blue-500 w-56 h-40 border-dotted border-r-2 rounded-r-xl rounded-l-xl flex items-center justify-center">
            <div className="flex  space-x-3 p-2">
              <h1 className="text-xl text-center font-bold text-white">
                Gift Voucher
              </h1>
              <h1 className="text-2xl font-bold text-center bg-orange-500 rounded-full">
                20% OFF
              </h1>
            </div>
          </div>
          <div className="bg-yellow-500 w-32 h-40 rounded-l-xl rounded-r-xl border-dotted border-l-2 flex justify-center items-center">
            <div className="rotate-90">
              <h1 className="text-xl font-bold">Code: 20-A@</h1>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Coupon;
