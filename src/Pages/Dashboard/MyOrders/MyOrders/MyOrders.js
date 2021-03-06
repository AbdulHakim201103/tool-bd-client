import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "@firebase/auth";
const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const [deleteOrder, setDeleteOrder] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`https://rocky-waters-62906.herokuapp.com/orders?customerEmail=${user.email}`, {
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
    const url = `https://rocky-waters-62906.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast("Delete Successfully");
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
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs border-0 bg-blue-700">Pay</button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <span className=" text-bold text-green-500 text-xl">Paid</span>
                  )}
                </td>
                <td>
                  {order.price && !order.paid && (
                    <label
                      htmlFor="confirm-delete-orders"
                      className="btn btn-error btn-sm modal-button"
                      onClick={() => setDeleteOrder(order._id)}
                    >
                      Delete
                    </label>
                  )}
                  {order.price && order.paid && (
                    <span className=" text-bold text-green-500 text-xl">Shipping</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <input type="checkbox" id="confirm-delete-orders" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3>Alert ...</h3>
            <p>Are you sure you want to delete?</p>
            <div className="flex justify-end">
              <div className="modal-action">
                <label htmlFor="confirm-delete-orders" className="btn btn-sm">
                  Cancel
                </label>
              </div>
              <div className="modal-action ml-2">
                <label
                  onClick={() => handleDelete(deleteOrder)}
                  htmlFor="confirm-delete-orders"
                  className="btn btn-sm"
                >
                  Confirm
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
