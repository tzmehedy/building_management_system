import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ApartmentCard from "./ApartmentCard";

const Apartment = () => {
  const axiosPublic = useAxiosPublic()

  const {data:allApartments=[]} = useQuery({
    queryKey: ["allApartments"],
    queryFn: async () =>{
      const {data} = await axiosPublic.get("/allApartments")
      return data
    }
  })

  console.log(allApartments)
  

    return (
      <div className="mt-40">
       <div className="text-center">
        <h1 className="text-4xl font-bold">All Apartments</h1>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 container mx-auto mt-20">

        {
          allApartments.map(apartment => <ApartmentCard apartment={apartment} key={apartment._id}></ApartmentCard>)
        }

       </div>
      </div>
    );
};

export default Apartment;