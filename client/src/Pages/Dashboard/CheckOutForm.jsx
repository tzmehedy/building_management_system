import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import "./CheckOutForm.css"
import { useEffect } from "react";
import PropTypes from "prop-types";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CheckOutForm = ({ updatedRent,agreementData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    if(updatedRent && updatedRent>1){
      getClientSecret(updatedRent)
    }
  }, [updatedRent]);

  const getClientSecret = async (price) => {
    const { data } = await axiosSecure.post("/create-stripe-intent", {
      price: price,
    });
    console.log(data)
  };

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

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
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

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
      <button className="btn" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};
CheckOutForm.propTypes = {
  agreementData: PropTypes.object,
  updatedRent: PropTypes.number
};

export default CheckOutForm;