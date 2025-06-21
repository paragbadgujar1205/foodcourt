import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../component/Home.css";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
    const { cart, addToCart } = useContext(CartContext); // Use CartContext
  return (
    <>
      <nav
        className="navbar py-3 px-md-5 fixed-top d-flex align-items-center justify-content-between"
        style={{
          background: "linear-gradient(to right, #ffffff, #f8f9fa)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          borderBottom: "2px solid #e9ecef",
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center text-decoration-none"
        >
          <h1 className="text-primary m-0 logo fw-bold">
            <i className="fa fa-utensils me-2"></i> Restoran
          </h1>
        </NavLink>

        {/* Navigation Buttons */}
        <div className="d-flex align-items-center gap-3">
          <NavLink to="/restaurant/auth">
            <button className="btn btn-outline-success custom-btn">
              Business With Us
            </button>
          </NavLink>
          <NavLink to="/restaurants">
            <button className="btn btn-outline-success custom-btn">
              Explore Restaurants
            </button>
          </NavLink>
        </div>

        {/* Profile & Cart Icons */}
        <div className="d-flex align-items-center gap-4">
          <NavLink to="/profile" className="profile-icon">
            <div className="userInfo d-flex align-items-center justify-content-center">
              <i className="fa-regular fa-user fs-4"></i>
            </div>
          </NavLink>

          <NavLink to="/cart" className="cart-link position-relative">
            <i className="fa-solid fa-shopping-cart fs-4 text-primary"></i>
            <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
              {cart.length}
            </span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
