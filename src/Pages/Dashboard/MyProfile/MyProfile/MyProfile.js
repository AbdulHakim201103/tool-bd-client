import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import auth from "../../../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const { data: users, isLoading } = useQuery("users", () =>
    fetch("https://rocky-waters-62906.herokuapp.com/user", {
      method: "GET",
      headers: {
        email: user?.email,
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
    <div className="container mx-auto h-screen py-20  bg-orange-300">
      <div className="avatar mb-[-80px] my-5 flex justify-center items-center">
        <div className="w-44 rounded-full bg-white ring ring-primary">
          <img className="" src={user?.photoURL} alt="" />
        </div>
      </div>
      <div className=" bg-gray-700 flex justify-center py-44 h-screen p-10 ">
        <div className="">
          <div className=" text-center text-white">
            <p className="text-5xl my-5 text-primary">{user?.displayName}</p>
            <p className="text-3xl my-5">{user?.email}</p>
            <p className="text-3xl my-5">{users?.education}</p>
            <p className="text-3xl my-5">{users?.phone}</p>
            <p className="text-3xl my-5">{users?.address}</p>
            <p className="text-3xl my-5">{users?.social}</p>
          </div>
          <div className=" text-2xl  text-center ">
            <Link to="/updateProfile" className="btn btn-primary btn-sm">
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
