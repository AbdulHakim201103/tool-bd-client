import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PurchaseModal from "../PurchaseModal";

const Purchase = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const { img, name, minimum, available, description, price } = details;

  const [purchase, setPurchase] = useState(0);

  const purchaseQuantity = parseInt(purchase);

  useEffect(() => {
    const url = `http://localhost:5000/tools/${id}`;
    fetch(url,{
      headers:{
        authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);

  const handleQuantity = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    setPurchase(quantity);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-primary text-5xl mt-20">Purchase</h1>
      <div>
        <div className="hero my-40">
          <div className="hero-content flex-col lg:flex-row">
            <div className="">
              <img src={img} className="max-w-sm w-screen rounded-lg shadow-2xl" alt="" />
            </div>
            <div className="mx-20">
              <h2 className="text-4xl  text-primary mx-auto py-3">{name}</h2>
              <p className="my-2 text-xl">Minimum Order Quantity: {minimum}</p>
              <p className="my-2 text-xl">Available Order Quantity: {available}</p>
              <p className="my-2">{description}</p>
              <h4 className="text-2xl text-secondary">Price: ${price}</h4>
              <form onSubmit={handleQuantity} className="my-4">
                <input
                  type="number"
                  name="quantity"
                  max={available}
                  min={minimum}
                  placeholder="Order Quantity"
                  className="input border-solid border-green-700"
                />
                <input type="submit" value="add" className="btn mx-2.5" />
              </form>
              {purchaseQuantity >= minimum && purchaseQuantity <= available ? (
                <label for="order-modal" className="btn modal-button">
                  Order Now
                </label>
              ) :(
                <label disabled for="order-modal" className="btn modal-button">
                  Order Now
                </label>
              ) }
              {details && (
                <PurchaseModal
                  purchaseQuantity={purchaseQuantity}
                  details={details}
                ></PurchaseModal>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
