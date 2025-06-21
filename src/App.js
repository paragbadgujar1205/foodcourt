import React from "react";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

// import Home from "./component/Home";
import Booking from "./component/Booking.jsx";
import Resturant from "./component/Resturant";
// import Restaurants from "./component/Restaurants.js";

import Login from "./component/Login.jsx";
import Profile from "./component/Profile.js";
import AdminDashboard from "./component/AdminDashboard.js";
import MenuPage from "./MenuPage.js";
import CartPage from "./CartPage.js";
import Design from "./component/Design.jsx";
import RestaurantAuth from "./RestaurantAuth";
import RestDashboard from "./RestDashboard.js";
import AddMenu from "./AddMenu.js";
import ManageMenu from "./ManageMenu.js";
import RestOrders from "./RestOrders.js";
import Home from "./Home.js";
import RestaurantPage from "./RestaurantPage.js";
import CompleteOrders from "./CompleteOrders.js"
// import Cart from "./component/Cart.jsx";

import ProtectedRoute from "./ProtectedRoute"; // Adjust the path if necessary

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route exact path="/" element={<Login />} />
        <Route
          path="/menu"
          element={<ProtectedRoute element={<Resturant />} />}
        />
        <Route
          path="/booking"
          element={<ProtectedRoute element={<Booking />} />}
        />
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        /> */}
        {/* <Route path="/admin/dashboard" element={<ProtectedRoute element={<AdminDashboard />} />} /> */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* <Route path="/admin/dashboard" element={<ProtectedRoute element={<AdminDashboard />}} /> */}
        {/* <Route exact path="/" element={<Login />} />
        <Route path="/menu" element={<Resturant />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/home" element={<Home/>}/> */}
        {/* <Route path="/cart" element={<Cart/>}/> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user/auth" element={<Login />} />
        <Route path="/menu" element={<Resturant />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/profile" element={<Profile />} />


        <Route path="/restaurants" element={<RestaurantPage />} />
        <Route path="/menu/:restaurantId" element={<MenuPage />} />
        <Route path="/cart" element={<ProtectedRoute element={<CartPage />} />} />
        <Route path="/design" element={<Design />} />
        <Route path="/restaurant/auth" element={<RestaurantAuth />} />
        <Route path="/restaurant/dashboard" element={<RestDashboard />} />
        <Route path="/restaurant/menu" element={<AddMenu />} />
        <Route path="/restaurant/restmenu" element={<ManageMenu />} />
        <Route path="/restaurant/pending/orders" element={<RestOrders />} />
        <Route path="/restaurant/orders" element={<CompleteOrders />} />



    
      </Routes>
    </>
  );
};

export default App;
