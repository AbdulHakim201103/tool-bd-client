import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3eVgLhVwtYY33gqAYSYbvi7epeNsLBZTa0L1P77N5cQ1SS5IL44vu4MbAjwW0wgh3mMxFPsc3omBjb5EHq3A9l00EfJpLOSj"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/orders/${id}`;
  const { data: order, isLoading } = useQuery(["orders", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return (
      <button className="btn flex mx-auto my-4 bg-white text-red-500 border-0 loading">
        loading
      </button>
    );
  }
  return (
    <div className="container mx-auto">
      <h2 className="my-5 text-center text-5xl text-primary">Payment</h2>

      <div className="card w-50 my-10 mx-w-md bg-base-100 shadow-xl">
        <div className="card-body mx-auto">
          <h2 className="text-4xl text-primary text-center">{order?.productName}</h2>
          <p className="text-2xl text-green-500 text-center">{order.customerName}</p>
          <p className="text-xl text-center">Email: {order.customerEmail}</p>
          <p className="text-xl text-center">Phone: {order.phone}</p>
          <p className="text-xl text-center">Quantity: {order.purchaseQuantity}</p>
          <p className="text-xl text-center">Price: {order.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 mx-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
