import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="container mx-auto">
      <div className="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label for="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-accent text-base-300">
            <h2 className="text-primary my-5 text-3xl font-bold">Dashboard</h2>
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/myOrder">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/makeAdmin">Make Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
