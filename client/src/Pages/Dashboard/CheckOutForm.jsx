import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import "./CheckOutForm.css"
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CheckOutForm = ({ month,updatedRent,agreementData }) => {
  const {user} = useAuth()
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure()
  const [clientSecret, setClientSecret] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const [processing, setProcessing] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if(updatedRent && updatedRent>1){
      getClientSecret(updatedRent)
    }
  }, [updatedRent]);

  const getClientSecret = async (price) => {
    const { data } = await axiosSecure.post("/create-stripe-intent", {
      price: price,
    });
    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async (event) => {
    // Block native form submission.
    setProcessing(true)
    event.preventDefault()


    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error} = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErrorMessage(error.message)
    } 
    else{
      setErrorMessage("")
    }


    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

  
    if(confirmError){
      setErrorMessage(confirmError.message)
    }
    if(paymentIntent?.status === 'succeeded'){
      setErrorMessage("")
      console.log(paymentIntent)
      const paymentInfo = {
        ...agreementData,
        transitionId: paymentIntent.id,
        date: new Date(),
        month:month
      }
      toast.success("Payment Successful")

      delete paymentInfo._id
      delete paymentInfo.rent 
      paymentInfo.rent = updatedRent
      // step-1 set payment info into database 
      await axiosSecure.post("/payment-info", paymentInfo)

      // step-2 update apartment status 
      await axiosSecure.patch(`/change-status/${agreementData.apartment_no}`);
      navigate("/dashboard/payment-history")
      setProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {errorMessage && <p className="text-red-500 text-sm  ">{errorMessage}</p>}
      <button  className="btn" type="submit" disabled={!stripe || processing}>
        {processing? <p className="animate-spin"><AiOutlineLoading3Quarters ></AiOutlineLoading3Quarters></p>: "Pay"}
      </button>
    </form>
  );
};
CheckOutForm.propTypes = {
  agreementData: PropTypes.object,
  updatedRent: PropTypes.number,
  month: PropTypes.string
};

export default CheckOutForm;