import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import {useLocation, useNavigate} from "react-router-dom"

const ApartmentCard = ({apartment}) => {
    const {user} = useAuth()
    const { apartment_image, floor_no, block_name, apartment_no, rent } =
      apartment
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const handelAgreement = () => {
        if(user){
            const agreementInfo = {
              a_userName: user?.displayName,
              a_email: user?.email,
              floor_no,
              block_name,
              apartment_no,
              rent,
              status: "pending",
            };
            console.log(agreementInfo)

        }
        else{
            navigate("/login", {state:{from:location.pathname}})
        }
    };


    return (
      <div className="card bg-slate-200 shadow-2xl rounded-t-2xl ">
        <img
          className="w-full h-56 rounded-t-2xl"
          src={apartment_image}
          alt=""
        />
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
            <button onClick={handelAgreement} className="btn bg-[#344B8F] text-white font-bold">
              Agreement
            </button>
          </div>
        </div>
      </div>
    );
};

ApartmentCard.propTypes = {
    apartment: PropTypes.object
}

export default ApartmentCard;