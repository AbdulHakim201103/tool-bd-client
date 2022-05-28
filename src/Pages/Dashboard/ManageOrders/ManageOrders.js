import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
const ManageOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [allOrders, setAllOrders] = useState([]);
  const [deleteOrder, setDeleteOrder] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/allorder`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast("Delete Successfully");
          const remaining = allOrders.filter((order) => order._id !== id);
          setAllOrders(remaining);
        }
      });
  };

  const handlePendingOrder = (id) => {
    const url = `http://localhost:5000/ordersDeliver/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Deliver Successfully");
        } else {
          toast.error("Deliver Failed");
        }
      });
  };

  if (loading) {
    return (
      <button className="btn flex mx-auto my-4 bg-white text-red-500 border-0 loading">
        loading
      </button>
    );
  }

  return (
    <div className="container mx-auto">
      <h2 className="my-5 text-center text-5xl text-primary">Manage All Orders</h2>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {allOrders?.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.customerName}</td>
                <td>{order.productName}</td>
                <td>{order.purchaseQuantity}</td>
                <td>{order.price}</td>
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs border-0 bg-blue-700">Unpaid</button>
                    </Link>
                  )}
                  {order.price &&
                    order.paid &&
                    (order.deliver ? (
                      <span className=" text-bold text-green-500 text-xl">Paid</span>
                    ) : (
                      <span className=" text-bold text-green-500 text-xl">Pending</span>
                    ))}
                </td>
                <td>
                  {order.price && !order.paid && (
                    <label
                      htmlFor="confirm-delete-orders"
                      className="btn btn-error btn-xs modal-button"
                      onClick={() => setDeleteOrder(order._id)}
                    >
                      Delete
                    </label>
                  )}
                  {order.paid &&
                    (order.deliver ? (
                      <button
                        onClick={() => handlePendingOrder(order._id)}
                        className=" text-bold text-green-500 text-xl"
                      >
                        Shipped
                      </button>
                    ) : (
                      <span className=" text-bold text-green-500 text-xl">Shipped</span>
                    ))}
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

export default ManageOrders;
