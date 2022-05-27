import { Route, Routes } from "react-router";
import Blogs from "./Pages/Blogs/Blogs/Blogs";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Portfolio from "./Pages/Portfolio/Portfolio/Portfolio";
import Purchase from "./Pages/Purchase/Purchase/Purchase";
import Navbar from "./Shared/Navbar/Navbar";
import NotFound from "./Shared/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile/MyProfile";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import RequireAdmin from "./Pages/Login/RequireAdmin/RequireAdmin";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";
import Payment from "./Pages/Dashboard/Payment/Payment";
import UpdatedProfile from "./Pages/Dashboard/MyProfile/UpdatedProfile";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="updateProfile" element={<UpdatedProfile></UpdatedProfile>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>

          <Route path="myOrder" element={<MyOrders></MyOrders>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageOrders"
            element={
              <RequireAdmin>
                <ManageOrders></ManageOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProduct"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
