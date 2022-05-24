import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/notfound/notFound.webp";

const NotFound = () => {
  return (
    <div className="container mx-auto relative">
      <img className=" w-screen" src={notFound} alt=""></img>
      <div className="flex  justify-center items-center">
        <Link className="btn btn-primary " to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
