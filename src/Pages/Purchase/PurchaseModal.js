import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const PurchaseModal = ({ details, purchaseQuantity }) => {
  const [user] = useAuthState(auth);

  const handleModal = (event) => {
    event.preventDefault();
    const orderDetails = {
      productName: details.name,
      customerName: user.displayName,
      customerEmail: user.email,
      purchaseQuantity,
      price: purchaseQuantity * details.price,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };

    const url = "https://rocky-waters-62906.herokuapp.com/orders";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          toast.success("Order Successfully");
        } else {
          toast.error("Order Unsuccessfully");
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>

          <h3 className="font-bold text-center text-lg">{details?.name}</h3>
          <div>
            <form onSubmit={handleModal} className="grid grid-cols-1 gap-3">
              <div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={user?.displayName}
                  disabled
                  className="input input-bordered w-full "
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  disabled
                  className="input input-bordered w-full "
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="text"
                  name="quantity"
                  value={purchaseQuantity}
                  disabled
                  className="input input-bordered w-full "
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  value={purchaseQuantity * details.price}
                  disabled
                  className="input input-bordered w-full "
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="input input-bordered w-full "
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="input input-bordered w-full "
                />
              </div>

              <input
                type="submit"
                value="Submit"
                className="btn my-5 btn-secondary bg-gradient-to-r from-secondary to-primary w-full mx-auto"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
