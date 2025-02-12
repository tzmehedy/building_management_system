import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Profile = () => {
    const {user} = useAuth()
    console.log(user)
    const axiosPublic = useAxiosPublic()
    console.log(user?.email)
    const {data:agreementInfo} = useQuery({
        queryKey: ["agreementInfo"],
        queryFn: async()=>{
            const { data } = await axiosPublic.get(
              `/agreement/${user?.email}`
            );
            return data
        }
    })
    return (
      <div>
        <div className="text-center">
          <h1 className="uppercase underline text-[#344B8F] text-2xl font-bold">
            Profile
          </h1>

          <div className=" flex justify-center mt-32">
            <div className="shadow-2xl border-2 border-[#344B8F] border-t-0 rounded-t-4xl bg-[white]  w-[500px]">
              <div className="bg-[#344B8F] h-24 w-full rounded-t-4xl"></div>
              <div className="flex flex-col justify-center items-center p-10">
                <img
                  className="w-20 h-20 rounded-full -mt-24"
                  src={user?.photoURL}
                  alt=""
                  onProgressCapture
                />
                <h1 className="text-xl font-bold">Name: {user?.displayName}</h1>
                <p className="text-lg">Email: {user?.email}</p>
              </div>

              <div className="">
                <p>Agreement Accept Date:</p>
              </div>

              <div className="my-10">
                <h1 className="text-xl font-bold">Apartment Info</h1>
                <div className="flex justify-between px-10 py-5">
                  <p>
                    Apartment No:{" "}
                    {agreementInfo ? `${agreementInfo.apartment_no}` : "none"}
                  </p>
                  <p>
                    Block No:{" "}
                    {agreementInfo ? `${agreementInfo.block_name}` : "none"}
                  </p>
                  <p>
                    Floor No:{" "}
                    {agreementInfo ? `${agreementInfo.floor_no}` : "none"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Profile;