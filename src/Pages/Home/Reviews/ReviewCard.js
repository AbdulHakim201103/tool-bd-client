import React from "react";
import user from '../../../assets/logo/user.webp'

const ReviewCard = ({ review }) => {
  const { name, rating, email, description } = review;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
         <img className="rounded-full my-3 ring ring-green-700 ring-offset-base-100 ring-offse w-20 mx-auto" src={user} alt="" />
        <h2 class="text-2xl text-center text-primary">{name}</h2>
        <small className="text-center">{email}</small>
        <p className="text-xl text-center my-5">{description}</p>
        <p className="text-center text-secondary text-2xl">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
