import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";

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
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">{order?.productName}</h2>
              
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
