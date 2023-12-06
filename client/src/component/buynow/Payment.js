import React from 'react'
import './payment.css'
import { NavLink } from 'react-router-dom'
import { loadStripe } from "@stripe/stripe-js";


export const Payment = ({price}) => {


  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51O8cA4SDFkgabP6Rda3ecYp0OjdMqv5Tx8qUh5an4P1dWqfU6H0RzyWsihjM56vcOvl2ABNBLy8ywwiHZj3pKmV000TD0IsgZ2"
    );

    const body = {
      products: price,

    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:27017/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
        mode: "no-cors",
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };


  return (
    <>
      <div className="cash">
        <button
          className="btn btn-success"
          onClick={makePayment}
          type="button"
        >
          Checkout
        </button>
      </div>
      <div className="order-track-button">
        <p>If give the problem, don't vare your payment is safe</p>
        <p>Now you just pay to cash on Delivery</p>
        <NavLink to="/map">Order Track</NavLink>
      </div>
    </>
  )
}

export default Payment