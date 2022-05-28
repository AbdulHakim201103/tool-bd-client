import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ManageProducts = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://rocky-waters-62906.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you Sure?");
    if (confirm) {
      const url = `https://rocky-waters-62906.herokuapp.com/tools/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Delete Successfully");
          const remaining = tools.filter((item) => item._id !== id);
          setTools(remaining);
        });
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="my-5 text-center text-5xl text-primary">Manage Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
        {tools.map((tool) => (
          <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
              <div>
                <img className="w-screen" src={tool.img} alt="" srcSet="" />
              </div>
              <div>
                <h2 className="text-4xl  text-primary mx-auto py-3">{tool.name}</h2>
                <p className="my-2 text-xl">Minimum Order Quantity: {tool.minimum}</p>
                <p className="my-2 text-xl">Available Order Quantity: {tool.available}</p>
                <p className="my-2">{tool.description}</p>
                <h4 className="text-2xl text-secondary">Price: ${tool.price}</h4>
              </div>
              <div className="mx-auto">
                <button onClick={() => handleDelete(tool._id)} className="btn btn-primary mt-10">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
