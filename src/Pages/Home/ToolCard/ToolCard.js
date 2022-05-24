import React from "react";



const toolCard = ({ tool }) => {
  const { _id, name, description, img, price, minimum, available } = tool;
 
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <div>
          <img className="w-screen" src={img} alt="" srcset="" />
        </div>
        <div>
          <h2 className="text-4xl  text-primary mx-auto py-3">{name}</h2>
          <p className="my-2 text-xl">Minimum Order Quantity: {minimum}</p>
          <p className="my-2 text-xl">Available Order Quantity: {available}</p>
          <p className="my-2">{description}</p>
          <h4 className="text-2xl text-secondary">Price: ${price}</h4>
        </div>
        <div className="mx-auto">
          <button  class="btn btn-primary mt-10">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default toolCard;
