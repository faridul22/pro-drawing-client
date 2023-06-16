import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
//----------------------
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import useCard from "../../../hooks/useCard";
import CheckoutForm from "./Payment/CheckoutForm";

// TODO: Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {
    const classData = useLoaderData();
    const { price } = classData;
    console.log('price', price)
    console.log(classData)

    return (
        <>
            <Helmet>
                <title>Pro Drawing | Payment</title>
            </Helmet>
            <div>
                <h3 className="text-2xl">Please Payment confirm for Successfully Enrolled</h3>
                <Elements stripe={stripePromise}>
                    <CheckoutForm classData={classData} price={price}></CheckoutForm>
                </Elements>
            </div>
        </>
    );
};

export default Payment;