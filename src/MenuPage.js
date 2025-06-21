// import React, { useEffect, useState, useContext } from "react";
// import { useParams, NavLink } from "react-router-dom";
// import axios from "axios";
// import { CartContext } from "./context/CartContext";
// import "./styles/menucard.css";
// import Navbar from "./component/Navbar";

// const MenuPage = () => {
//   const { restaurantId } = useParams(); // Get restaurant ID from URL
//   const [restaurant, setRestaurant] = useState(null); // Store restaurant details
//   const [menu, setMenu] = useState([]);
//   const { cart, addToCart } = useContext(CartContext); // Use CartContext

//   useEffect(() => {
//     // Fetch restaurant details
//     axios
//       .get(`http://localhost:5000/restaurants/${restaurantId}`)
//       .then((response) => setRestaurant(response.data))
//       .catch((error) => console.error("Error fetching restaurant:", error));

//     // Fetch menu items
//     axios
//       .get(`http://localhost:5000/menu/${restaurantId}`)
//       .then((response) => setMenu(response.data))
//       .catch((error) => console.error("Error fetching menu:", error));
//   }, [restaurantId]);

//   return (
//     <>
//       {/* Navbar with Cart Count */}
//       <Navbar />
//       {/* Add margin to prevent content from being hidden under navbar */}
//       <div className="content-container"></div>

//       {/* Add margin to prevent overlap */}
//       <div className="content-container">
//         {/* Your main page content starts here */}
//       </div>

      
//       <div className="container p-3 ">
//         {/* Restaurant Card */}
//         {restaurant && (
//           <div className="row g-0 border rounded-3 p-2 shadow ">
//             <div className="col-md-4">
//               <img
//                 src={restaurant.image}
//                 className="img-fluid rounded-3"
//                 alt="..."
//               />
//             </div>
//             <div className="col-md-8 p-4">
//               <div className="card-body">
//                 <h5 className="card-title">{restaurant.name}</h5>
//                 <p className="card-text">
//                   {restaurant.location}
//                   <br />
//                   {restaurant.cuisine}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Menu List */}
//         <h2 className="my-4">Menu</h2>
//         <div className="row">
//           {menu.length > 0 ? (
//             menu.map((item) => (
//               <div key={item._id} className="col-12 mb-4">
//                 <div className="menu-card card p-3 d-flex flex-row align-items-center food-item">
//                   {/* Left Section - Food Details */}
//                   <div className="flex-grow-1 p-3">
//                     <h5 className="card-title">{item.name}</h5>
//                     <p className="card-text">
//                       <strong>₹ {item.price}</strong>
//                     </p>
//                     <p className="card-text text-muted">${item.description}</p>
//                   </div>

//                   {/* Right Section - Food Image */}
//                   <div className="position-relative">
//                     <img
//                       src={item.image}
//                       className="food-img rounded"
//                       alt={item.name}
//                     />
//                     {/* Add to Cart Button - Half on Image, Half on Card */}
//                     <button
//                       className="btn position-absolute add-to-cart-btn shadow-sm"
//                       onClick={() => {
//                         if (
//                           !restaurantId ||
//                           restaurantId === item.restaurantId
//                         ) {
//                           addToCart(item);
//                         } else {
//                           alert(
//                             "You can only order from one restaurant at a time!"
//                           );
//                         }
//                       }}
//                     >
//                       ADD
//                     </button>
//                   </div>
//                 </div>
//                 <hr className="my-3" /> {/* Horizontal line to divide items */}
//               </div>
//             ))
//           ) : (
//             <p>No menu items available.</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default MenuPage;

import React, { useEffect, useState, useContext } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "./context/CartContext";
import "./styles/menucard.css";
import Navbar from "./component/Navbar";

const MenuPage = () => {
  const { restaurantId } = useParams(); // Get restaurant ID from URL
  const [restaurant, setRestaurant] = useState(null); // Store restaurant details
  const [menu, setMenu] = useState([]);
  const { cart, addToCart } = useContext(CartContext); // Use CartContext
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId"); // Check if user is logged in

  useEffect(() => {
    // Fetch restaurant details
    axios
      .get(`http://localhost:5000/restaurants/${restaurantId}`)
      .then((response) => setRestaurant(response.data))
      .catch((error) => console.error("Error fetching restaurant:", error));

    // Fetch menu items
    axios
      .get(`http://localhost:5000/menu/${restaurantId}`)
      .then((response) => setMenu(response.data))
      .catch((error) => console.error("Error fetching menu:", error));
  }, [restaurantId]);

  return (
    <>
      {/* Navbar with Cart Count */}
      <Navbar />
      <div className="content-container"></div>

      <div className="content-container">
        {/* Your main page content starts here */}
      </div>

      <div className="container p-3">
        {/* Restaurant Card */}
        {restaurant && (
          <div className="row g-0 border rounded-3 p-2 shadow">
            <div className="col-md-4">
              <img
                src={restaurant.image}
                className="img-fluid rounded-3"
                alt="restaurant"
              />
            </div>
            <div className="col-md-8 p-4">
              <div className="card-body">
                <h5 className="card-title">{restaurant.name}</h5>
                <p className="card-text">
                  {restaurant.location}
                  <br />
                  {restaurant.cuisine}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Menu List */}
        <h2 className="my-4">Menu</h2>
        <div className="row">
          {menu.length > 0 ? (
            menu.map((item) => (
              <div key={item._id} className="col-12 mb-4">
                <div className="menu-card card p-3 d-flex flex-row align-items-center food-item">
                  {/* Left Section - Food Details */}
                  <div className="flex-grow-1 p-3">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      <strong>₹ {item.price}</strong>
                    </p>
                    <p className="card-text text-muted">{item.description}</p>
                  </div>

                  {/* Right Section - Food Image */}
                  <div className="position-relative">
                    <img
                      src={item.image}
                      className="food-img rounded"
                      alt={item.name}
                    />
                    {/* Add to Cart Button */}
                    <button
                      className="btn position-absolute add-to-cart-btn shadow-sm"
                      onClick={() => {
                        if (!userId) {
                          alert("Please login to add items to your cart.");
                          navigate("/user/auth"); // Redirect to login
                          return;
                        }

                        if (!restaurantId || restaurantId === item.restaurantId) {
                          addToCart(item);
                        } else {
                          alert("You can only order from one restaurant at a time!");
                        }
                      }}
                    >
                      ADD
                    </button>
                  </div>
                </div>
                <hr className="my-3" />
              </div>
            ))
          ) : (
            <p>No menu items available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuPage;

