import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const UpdatedProfile = () => {
  const [user] = useAuthState(auth);

  const UpdateProfile = (event) => {
    event.preventDefault();
    const updatedInfo = {
      education: event.target.education.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
      social: event.target.social.value,
    };

    fetch(`http://localhost:5000/user/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updatedInfo)
    })
    .then(res => res.json())
    .then(data =>{
        if (data) {
            toast.success("Profile Update Successfully")
        }
        else{
            toast.error("profile Update Failed")
        }
    })
  };
  return (
    <div className="container mx-auto flex justify-center my-24 h-screen">
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="text-primary text-3xl text-center my-5">Update Profile</h1>
            <form onSubmit={UpdateProfile}>
              <input
                type="text"
                name="education"
                placeholder="Education"
                className="input input-bordered w-full my-3"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input input-bordered w-full my-3"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full my-3"
              />
              <input
                type="text"
                name="social"
                placeholder="Social"
                className="input input-bordered w-full my-3"
              />
              <input type="submit" value="Update" className="btn btn-primary w-full my-3" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatedProfile;
