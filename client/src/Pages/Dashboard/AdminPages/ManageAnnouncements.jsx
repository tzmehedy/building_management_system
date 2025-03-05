import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";


const ManageAnnouncements = () => {
    const axiosSecure = useAxiosSecure()

    const { mutateAsync } = useMutation({
      mutationKey: ["announcements"],
      mutationFn: async (announcementDetails) => {
        const {data} = await axiosSecure.post("/announcement", announcementDetails)
        return data
      },
      onSuccess: ()=>{
        toast.success("The Announcement Successfully Added")
      }
    });
    const handelMakeAnnouncement = (e)=>{
        e.preventDefault()
        const form = e.target 
        const title = form.title.value 
        const description = form.description.value 
        
        const announcementDetails = {title, description,
            time: new Date()
        }

       mutateAsync(announcementDetails)
       form.reset()
    }
    return (
      <div>
        <div className=" ">
          <h1 className="uppercase underline text-2xl mt-3 text-[#344B8F] font-bold text-center">
            Management Announcement
          </h1>
        </div>

        <div className="m-10 w-full h-screen bg-[#344B8F] p-20">
          <form onSubmit={handelMakeAnnouncement} className="space-y-5">
            <div className="flex flex-col space-y-3">
              <label className="text-xl" htmlFor="title">
                Title:
              </label>
              <input
                className="w-full bg-white px-3 py-2 border-none rounded-lg"
                type="text"
                name="title"
                id=""
                placeholder="Please write a title"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-xl" htmlFor="title">
                Description:
              </label>
              <textarea
                className="w-full h-[300px] bg-white border-none rounded-lg px-3 py-2"
                name="description"
                id=""
                placeholder="Please write a description about your announcement"
              ></textarea>
            </div>
            <input
              className="btn w-full text-[#344B8F] font-bold text-xl"
              type="submit"
              value="Add Announcement"
            />
          </form>
        </div>
      </div>
    );
};

export default ManageAnnouncements;