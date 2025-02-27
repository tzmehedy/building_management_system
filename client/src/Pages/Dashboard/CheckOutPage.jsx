import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(`${import.meta.env.VITE_PublishableKey}`);
const CheckOutPage = ({ month, agreementData }) => {
    const [errorMessage,setErrorMessage] = useState()
    const [updatedRent, setUpdatedRent] = useState(agreementData?.rent)
    const [close, setClose] = useState(false)
    const checkCoupon = async(e)=>{
        e.preventDefault()
        const coupon = e.target.coupon.value 
        await axios.post(`${import.meta.env.VITE_URL}/couponIsExist`, {coupon})
        .then(()=>{
            setErrorMessage("")
            const currentRent = agreementData?.rent 
            const percent = parseInt(coupon.split("-")[0]); 
            const calculatedRent = currentRent - (currentRent * percent/100) 
            setUpdatedRent(calculatedRent)
            setClose(true)
        })
        .catch(()=>{
            setErrorMessage("The Code is not Valid")
        })
    }
    
    
  return (
    <div>
      <div className=" ">
        <h1 className="uppercase underline text-2xl mt-3 text-[#344B8F] font-bold text-center">
          Please Check before Payment
        </h1>
      </div>

      <div className="bg-[#344B8F] flex justify-evenly p-20 mt-10  text-xl">
        <div className="space-y-2">
          <p>
            Email: <span className="text-white ">{agreementData?.a_email}</span>
          </p>
          <p>
            Floor No:{" "}
            <span className="text-white ">{agreementData?.floor_no}</span>
          </p>
          <p>
            Block Name:{" "}
            <span className="text-white ">{agreementData?.block_name}</span>
          </p>
          <p>
            Apartment No:{" "}
            <span className="text-white ">{agreementData?.apartment_no}</span>
          </p>
          <p>
            Rent: <span className="text-white ">${updatedRent}</span>
          </p>
          <p>
            Month: <span className="text-white ">{month}</span>
          </p>
        </div>
        <div>
          <p>Please write a coupon code, If you have!!!</p>
          <div className="">
            <form onSubmit={checkCoupon} className="space-y-2 flex flex-col">
              <input
                className="px-3 py-2 rounded-md bg-white border-none outline-0"
                placeholder="Coupon Code"
                type="text"
                name="coupon"
                id=""
              />

              {errorMessage ? (
                <>
                  <p className="text-red-800">{errorMessage}</p>
                </>
              ) : (
                <></>
              )}
              <button
                disabled={close}
                type="submit"
                className="btn px-4 py-5 shadow-none"
              >
                Apply
              </button>
            </form>
          </div>

          <div>
            <Elements stripe={stripePromise}>
              <CheckOutForm
                month={month}
                updatedRent={updatedRent}
                agreementData={agreementData}
              ></CheckOutForm>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

CheckOutPage.propTypes = {
    month: PropTypes.string,
    agreementData: PropTypes.object
}



export default CheckOutPage;