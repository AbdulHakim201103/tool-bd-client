import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "@firebase/auth";
const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orders?customerEmail=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/home");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast("Stock Delete Successfully");
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        }
      });
  };
  return (
    <div className="container mx-auto">
      <h2 className="my-5 text-center text-5xl text-primary">My Order</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-secondary">
              <th>No</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.productName}</td>
                <td>{order.purchaseQuantity}</td>
                <td>{order.price}</td>
                <td>
                  {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-xs border-0 bg-blue-700">Pay</button></Link>}
                  {(order.price && order.paid) && <span className=" bg-green-700">Paid</span>}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-xs border-0  bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
