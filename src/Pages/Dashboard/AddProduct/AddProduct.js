
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  
  

  const onSubmit = async (data) => {
      fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((response) => response.json())
      .then((data) => {
          if (data) {
            console.log(data);
            
          toast.success("Stock Update Successfully");
        }
      });
  };
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="my-5 text-center text-5xl text-primary">Add A Product</h2>
        <div className="flex my-20 justify-center items-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Product Name"
                  className="input input-bordered my-3 w-full max-w-xs"
                  {...register("name")}
                />
                <input
                  placeholder="Photo URL"
                  className="input my-3 input-bordered w-full max-w-xs"
                  {...register("img")}
                />

                <input
                  placeholder="Minimum Quantity"
                  className="input input-bordered my-3 w-full max-w-xs"
                  {...register("minimum")}
                />
                <input
                  placeholder="Available Quantity"
                  className="input input-bordered my-3 w-full max-w-xs"
                  {...register("available")}
                />

                <input
                  placeholder="Price"
                  className="input input-bordered my-3 w-full max-w-xs"
                  {...register("price")}
                />

                <textarea
                  placeholder="Description"
                  className="input input-bordered my-3 w-full max-w-xs"
                  {...register("description")}
                />
                <input
                  className="btn btn-primary w-full max-w-xs"
                  type="submit"
                  value="Add Product"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
