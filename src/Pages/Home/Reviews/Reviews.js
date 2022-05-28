import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://rocky-waters-62906.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.reverse()));
  }, []);
  return (
    <div className="container mx-auto bg-stone-100 p-20 my-10">
      <h3 className="my-20 text-5xl text-center text-primary">PEOPLE SAYS</h3>
      <div className="flex mx-auto justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-20">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
