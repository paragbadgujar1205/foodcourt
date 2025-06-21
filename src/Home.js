import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Design from "./component/Design";
import "./component/Home.css";
import Resturants from "./component/Restaurants";
import { CartContext } from "./context/CartContext";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const Home = () => {
  const { cart, addToCart } = useContext(CartContext); // Use CartContext
  return (
    <>
      <>
        <Navbar />

        {/* Add margin to prevent content from being hidden under navbar */}
        <div className="content-container"></div>

        {/* Add margin to prevent overlap */}
        <div className="content-container">
          {/* Your main page content starts here */}
        </div>

        <div className="container">
          {/* slider */}
          <div className="my-4 ">
            <h3 className="mt-5">what's on your mind?</h3>
            <Design />
          </div>
          <hr className="mt-5" />
          {/* Header Section */}
          <header className="text-center my-5">
            <h1 className="header">Enjoy Our Delicious Meal</h1>
            <p>Taste the World from Your Doorstep: Order Now!</p>
          </header>
          {/* Restaurants Section */}
          <section className="my-5">
            <h2 className="text-center mb-4">
              Restaurants with online food delivery
            </h2>
            <div className="row">
              <Resturants />
            </div>
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </>
    </>
  );
};

export default Home;
