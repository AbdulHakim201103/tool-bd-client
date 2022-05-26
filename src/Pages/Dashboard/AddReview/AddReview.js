import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          toast.success("Review Successfully");
        }
      });
  };
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="my-5 text-center text-5xl text-primary">Add A Review</h2>
        <div className="flex my-20 justify-center items-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  value={user.displayName}
                  readOnly
                  className="input input-bordered my-3 w-full max-w-xs"
                  {...register("name")}
                />
                <input
                  value={user.email}
                  readOnly
                  className="input input-bordered my-3 w-full max-w-xs"
                  {...register("email")}
                />
                <textarea
                  placeholder="Comments"
                  required
                  className="input input-bordered my-3 w-full max-w-xs"
                  {...register("description")}
                />
                <input
                  placeholder="Give Rating 1 to 5"
                  type="number"
                  min="1"
                  max="5"
                  step="1"
                  required
                  className="input input-bordered my-3 w-full max-w-xs"
                  {...register("rating")}
                />
                <input
                  className="btn btn-primary w-full max-w-xs"
                  type="submit"
                  value="Add Review"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
