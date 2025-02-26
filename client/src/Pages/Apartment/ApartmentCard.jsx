import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import {useLocation, useNavigate} from "react-router-dom"
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import useAgreementIsExist from "../../Hooks/useAgreementIsExist";


const ApartmentCard = ({ apartment }) => {
  const axiosPublic = useAxiosPublic();
  const isExist = useAgreementIsExist();
  const { user } = useAuth();
  const { apartment_image, floor_no, block_name, apartment_no, rent,status } =
    apartment;
  const navigate = useNavigate();
  const location = useLocation();

  const { mutateAsync } = useMutation({
    mutationKey: ["data"],
    mutationFn: async (agreementInfo) => {
      const { data } = await axiosPublic.post("/allAgreements", agreementInfo);
      return data;
    },
    onSuccess: () => {
      toast.success("Agreement Successfully Completed");
      navigate("/")
      
    },
    onError: () => {
      toast.error("Something Went wrong. Please try again!!");
    },
  });

  const handelAgreement = () => {
    if (user) {
      const agreementInfo = {
        a_userName: user?.displayName,
        a_email: user?.email,
        floor_no,
        block_name,
        apartment_no,
        rent,
        status: "pending",
      };
      mutateAsync(agreementInfo);
    } else {
      navigate("/login", { state: { from: location.pathname } });
    }
  };

  return (
    <div className="card bg-slate-200 shadow-2xl rounded-t-2xl ">
      <img className="w-full h-56 rounded-t-2xl" src={apartment_image} alt="" />
      <div className="p-5 space-y-3">
        <div className="flex justify-between">
          <h1>Floor No: {floor_no}</h1>
          <p>Block Name: {block_name}</p>
        </div>
        <div className="flex justify-between">
          <p>Apartment No: {apartment_no}</p>
          <p>Price: {rent}</p>
        </div>
        <div className="text-end">
          <button
            disabled={isExist === true || status === "booked"}
            onClick={handelAgreement}
            className="btn bg-[#344B8F] text-white font-bold"
          >
            Agreement
          </button>
        </div>
      </div>
    </div>
  );
};

ApartmentCard.propTypes = {
    apartment: PropTypes.object,
    refetch:PropTypes.func
}

export default ApartmentCard;