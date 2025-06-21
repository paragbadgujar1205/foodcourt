import React from "react";
import Resturants from "./component/Restaurants";
import { NavLink } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const RestaurantPage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Add margin to prevent content from being hidden under navbar */}
      <div className="content-container"></div>

      {/* Add margin to prevent overlap */}
      <div className="content-container">
        {/* Your main page content starts here */}
      </div>

      {/* Restaurants List */}
      <Resturants />

      {/* footer */}
      <Footer />
    </>
  );
};

export default RestaurantPage;
