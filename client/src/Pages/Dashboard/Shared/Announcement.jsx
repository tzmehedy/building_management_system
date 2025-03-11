import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Announcement = () => {
    const axiosSecure = useAxiosSecure()

    const {data: announcements} = useQuery({
        queryKey: ["announcements"],
        queryFn: async()=>{
            const { data } = await axiosSecure.get("/announcement")
            return data
        }
    })
    return (
      <div>
        <div className=" ">
          <h1 className="uppercase underline text-2xl mt-3 text-[#344B8F] font-bold text-center">
            All Announcement
          </h1>
        </div>

        <div className="space-y-3 my-10">
          {announcements?.map((announcement) => (
            <div key={announcement?._id}>
              <div className="w-full border-3 border-[#344B8F] px-3 py-10">
                <h1 className="text-2xl font-bold">{announcement?.title}</h1>
                <p className="text-justify">{announcement?.description}</p>
                <p className="text-end"><span className="font-bold">Published At: </span>{announcement?.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Announcement;