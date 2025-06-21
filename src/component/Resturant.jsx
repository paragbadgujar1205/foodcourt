import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import Menu from "./MenuApi.js";
import MenuCard from "./MenuCard.jsx";
import Cart from "./Cart.jsx";

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) => {
    const itemExists = cart.some((item) => item.id === newItem.id);
    if (itemExists) {
      alert("item is already in cart");
    } else {
      return setCart([...cart, newItem]);
    }
  };
  const deleteItem = (index) => {
    setCart((cart) => {
      return cart.filter((arrayElem, indexElem) => {
        return indexElem !== index;
      });
    });
  };
  const showMenu = () => {
    return setMenuData(Menu);
  };

  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark sticky-top">
        <div className="container-fluid d-flex justify-content-between">
          <h1
            className="text-primary m-0 logo"
            onClick={() => setMenuData(Menu)}
          >
            <i className="fa fa-utensils me-3"></i>Restoran
          </h1>
          <i
            className="fa-solid fa-cart-shopping cart-icon "
            onClick={() => {
              setMenuData(false);
            }}
          ></i>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i class="fa-solid fa-bars"></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse text-left"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
              <li className="nav-item mx-2 my-lg-0 my-md-2">
                <button
                  className="btn px-3 my-2 nav-btn"
                  onClick={() => {
                    filterItem("breakfast");
                  }}
                >
                  BreakFast
                </button>
              </li>
              <li className="nav-item mx-2  my-md-2">
                <button
                  className="btn nav-btn "
                  onClick={() => {
                    filterItem("lunch");
                  }}
                >
                  Lunch
                </button>
              </li>
              <li className="nav-item mx-2 my-2">
                <button
                  className="btn nav-btn"
                  onClick={() => {
                    filterItem("Sweets");
                  }}
                >
                  Sweet
                </button>
              </li>
              <li className="nav-item mx-2 my-2">
                <button
                  className="btn nav-btn"
                  onClick={() => {
                    filterItem("dinner");
                  }}
                >
                  Dinner
                </button>
              </li>
              <li className="nav-item mx-2 my-2">
                <button
                  className="btn nav-btn"
                  onClick={() => setMenuData(Menu)}
                >
                  All
                </button>
              </li>
            </ul>
          </div>
          <NavLink to='/profile'>
            <div className="userInfo">
              <i class="fa-regular fa-user"></i>
            </div>
          </NavLink>
        </div>
      </nav>
      {menuData ? (
        <div className="main-card--cointainer">
          <MenuCard menuData={menuData} addToCart={addToCart} />
        </div>
      ) : (
        <Cart cart={cart} showMenu={showMenu} deleteItem={deleteItem} />
      )}
    </>
  );
};

export default Resturant;
