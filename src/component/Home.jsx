import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import Design from "./Design";
const Home = () => {
  return (
    <>
      <div className="banner">
        <nav className="navbar pt-4 px-md-5 z-3">
          <div className="container-fluid px-md-5 align-items-baseline">
            <a className="navbar-brand" href="ww">
              <h1 className="text-primary m-0 logo">
                <i className="fa fa-utensils me-3"></i>Restoran
              </h1>
            </a>
            <div className="d-flex justify-content-around w-25">
              <NavLink to="/restaurants">
                <button className="btn btn-outline-success px-md-4 px-3">
                  Explore Restaurants
                </button>
              </NavLink>
              <NavLink to="/profile">
                <div className="userInfo">
                  <i class="fa-regular fa-user"></i>
                </div>
              </NavLink>
            </div>
          </div>
        </nav>

        <div className="hero-text row justify-content-end">
          <div className="col-lg-5 col-md-7 col-12 px-3 mx-lg-5 mt-md-5 ">
            <h1 className="header">Enjoy Our Delicious Meal</h1>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet Lorem ipsum dolor
              sit amet consectetur adipisicing.
            </p>
            <NavLink to="/booking">
              <button>Book Table</button>
            </NavLink>
          </div>
        </div>
      </div>
      <div>
        <Design />
      </div>
    </>
  );
};

export default Home;
