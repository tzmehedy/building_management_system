import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ApartmentCard from "./ApartmentCard";
import { useEffect, useState } from "react";


const Apartment = () => {
  const axiosPublic = useAxiosPublic();
  const itemPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0)
  
  const { data: allApartments = [], isLoading, refetch } = useQuery({
    queryKey: ["allApartments"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/allApartments?page=${currentPage}&&size=${itemPerPage}`);
      return data;
    },
  });
useEffect(() => {
  const getCountData = async () => {
    const { data } = await axiosPublic.get("/allApartment-count");
    setTotalPage(data.count);
  };
  getCountData();
}, [axiosPublic]);

const items = [...Array(Math.ceil(totalPage / itemPerPage)).keys()];

const handelPagination = (val) =>{
    setCurrentPage(val),
    refetch()
  }


  
  if (isLoading) return (
    <div className="flex justify-center items-center h-screen">
      <p>loading.....</p>
    </div>
  );
  return (
    <div className="mt-40">
      <div className="text-center">
        <h1 className="text-4xl font-bold">All Apartments</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-2 container mx-auto mt-20">
        {allApartments.map((apartment) => (
          <ApartmentCard
            apartment={apartment}
            key={apartment._id}
          ></ApartmentCard>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-5">
        <button
          onClick={() => handelPagination(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn"
        >
          Prev
        </button>

        {items.map((item, index) => (
          <div key={index}>
            <button onClick={() => handelPagination(item + 1)} className="btn">
              {item + 1}
            </button>
          </div>
        ))}

        <button
          onClick={() => handelPagination(currentPage + 1)}
          disabled={currentPage === items.length}
          className="btn"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Apartment;
