// // Profile.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import '../index.css'
// import { useAuth } from "../AuthContext";

// const Profile = () => {
//   const { user, logout } = useAuth();
//   const [orders, setOrders] = useState([]);
//   const [showOrderHistory, setShowOrderHistory] = useState(false);

//   const fetchOrders = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/api/orders/${user._id}`
//       );
//       setOrders(response.data);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   useEffect(() => {
//     if (user && showOrderHistory) {
//       fetchOrders();
//     }
//   }, [user, showOrderHistory]);

//   const toggleOrderHistory = () => {
//     setShowOrderHistory(!showOrderHistory);
//   };

//   return (
//     <>
//       <div className="profile">
//       <div>
//       <nav className="navbar pt-4 px-md-5 z-3">
//           <div className="container-fluid px-md-5 align-items-baseline">
//             <a className="navbar-brand" href="ww">
//               <h1 className="text-primary m-0 logo">
//                 <i className="fa fa-utensils me-3"></i>Restoran
//               </h1>
//             </a>
//           </div>
//         </nav>
//       </div>
//         <div className="container d-flex flex-wrap mt-5">
//           <div className="card mb-3 h-50 profile-card" style={{ maxWidth: 540 }}>
//             <div className="row g-0">
//               <div className="col-md-4 d-flex justify-content-center align-items-baseline mt-4">
//                 <i
//                   className="fa-solid fa-circle-user"
//                   style={{ fontSize: "150px" }}
//                 ></i>
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <h5 className="card-title">Welcome, {user.name}</h5>
//                   <p className="card-text">{user.email}</p>
//                   <p className="card-text">Contact Info: {user.phone}</p>
//                   <p className="card-text">Address: {user.address}</p>
//                   <button
//                     type="button"
//                     className="btn btn-outline-primary m-3"
//                     onClick={logout}
//                   >
//                     Logout
//                   </button>
//                   <button
//                     type="button"
//                     className="btn btn-outline-light"
//                     onClick={toggleOrderHistory}
//                   >
//                     {showOrderHistory ? "Hide History" : "Order History"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {showOrderHistory && (
//             <div
//               className="card ms-3 overflow-y-scroll profile-card"
//               style={{ minWidth: 540, height: "450px" }}
//             >
//               <div className="card-body">
//                 <h5 className="card-title">Your Order History</h5>
//                 {orders.length > 0 ? (
//                   orders.map((order) => (
//                     <div key={order._id}>
//                       <h4>
//                         Order Date:{" "}
//                         {new Date(order.createdAt).toLocaleDateString()}
//                       </h4>
//                       <table className="table">
//                         <thead>
//                           <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">Item</th>
//                             <th scope="col">Quantity</th>
//                             <th scope="col">Price</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {order.items.map((item, index) => (
//                             <tr key={index}>
//                               <th scope="row">{index + 1}</th>
//                               <td>{item.name}</td>
//                               <td>{item.quantity}</td>
//                               <td>{item.price}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                         <tfoot>
//                           <tr>
//                             <th colSpan={3}>Total Amount</th>
//                             <th>${order.totalAmount}</th>
//                           </tr>
//                         </tfoot>
//                       </table>
//                     </div>
//                   ))
//                 ) : (
//                   <p>No orders available</p>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../index.css";
// import { useAuth } from "../AuthContext";

// const Profile = () => {
//   const { user, logout } = useAuth();
//   const [orders, setOrders] = useState([]);
//   const [showOrderHistory, setShowOrderHistory] = useState(false);

//   const fetchOrders = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/orders/${user._id}`);
//       setOrders(response.data);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   useEffect(() => {
//     if (user && showOrderHistory) {
//       fetchOrders();
//     }
//   }, [user, showOrderHistory]);

//   const toggleOrderHistory = () => {
//     setShowOrderHistory(!showOrderHistory);
//   };

//   // 🔥 User Confirms Pickup (Changes Status to "Fulfilled")
//   const confirmPickup = async (orderId) => {
//     try {
//       const response = await axios.patch(`http://localhost:5000/user/${orderId}/confirm`);
//       alert(response.data.message);
//       setOrders(orders.map(order =>
//         order._id === orderId ? { ...order, status: "Fulfilled" } : order
//       ));
//     } catch (error) {
//       console.error("Error confirming order:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Failed to confirm pickup");
//     }
//   };

//   return (
//     <>
//       <div className="profile">
//         <div>
//           <nav className="navbar pt-4 px-md-5 z-3">
//             <div className="container-fluid px-md-5 align-items-baseline">
//               <a className="navbar-brand" href="ww">
//                 <h1 className="text-primary m-0 logo">
//                   <i className="fa fa-utensils me-3"></i>Restoran
//                 </h1>
//               </a>
//             </div>
//           </nav>
//         </div>
//         <div className="container d-flex flex-wrap mt-5">
//           <div className="card mb-3 h-50 profile-card" style={{ maxWidth: 540 }}>
//             <div className="row g-0">
//               <div className="col-md-4 d-flex justify-content-center align-items-baseline mt-4">
//                 <i className="fa-solid fa-circle-user" style={{ fontSize: "150px" }}></i>
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <h5 className="card-title">Welcome, {user.name}</h5>
//                   <p className="card-text">{user.email}</p>
//                   <p className="card-text">Contact Info: {user.phone}</p>
//                   <p className="card-text">Address: {user.address}</p>
//                   <button type="button" className="btn btn-outline-primary m-3" onClick={logout}>
//                     Logout
//                   </button>
//                   <button type="button" className="btn btn-outline-light" onClick={toggleOrderHistory}>
//                     {showOrderHistory ? "Hide History" : "Order History"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {showOrderHistory && (
//             <div className="card ms-3 overflow-y-scroll profile-card" style={{ minWidth: 540, height: "450px" }}>
//               <div className="card-body">
//                 <h5 className="card-title">Your Order History</h5>
//                 {orders.length > 0 ? (
//                   orders.map((order) => (
//                     <div key={order._id}>
//                       <h4>
//                         Order Date: {new Date(order.createdAt).toLocaleDateString()} -
//                         <span className={`badge ms-2 ${order.status === "Fulfilled" ? "bg-success" : "bg-warning"}`}>
//                           {order.status}
//                         </span>
//                       </h4>
//                       <table className="table">
//                         <thead>
//                           <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">Item</th>
//                             <th scope="col">Quantity</th>
//                             <th scope="col">Price</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {order.items.map((item, index) => (
//                             <tr key={index}>
//                               <th scope="row">{index + 1}</th>
//                               <td>{item.name}</td>
//                               <td>{item.quantity}</td>
//                               <td>${item.price}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                         <tfoot>
//                           <tr>
//                             <th colSpan={3}>Total Amount</th>
//                             <th>${order.totalAmount}</th>
//                           </tr>
//                         </tfoot>
//                       </table>

//                       {/* 🔥 Show "Confirm Pickup" Button for Out for Delivery Orders */}
//                       {order.status === "Out for Delivery" && (
//                         <button
//                           className="btn btn-primary mt-2"
//                           onClick={() => confirmPickup(order._id)}
//                         >
//                           Confirm Pickup
//                         </button>
//                       )}

//                       <hr />
//                     </div>
//                   ))
//                 ) : (
//                   <p>No orders available</p>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const [orders, setOrders] = useState([]);
  const [showOrderHistory, setShowOrderHistory] = useState(false);
  const navigate = useNavigate();

  // 🔐 Redirect to login if user is not logged in
  useEffect(() => {
    if (!user) {
      navigate("/user/auth"); // Adjust the route if your login route is different
    }
  }, [user, navigate]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/orders/${user._id}`
      );
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (user && showOrderHistory) {
      fetchOrders();
    }
  }, [user, showOrderHistory]);

  const toggleOrderHistory = () => {
    setShowOrderHistory(!showOrderHistory);
  };

  const confirmPickup = async (orderId) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/user/${orderId}/confirm`
      );
      alert(response.data.message);
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: "Fulfilled" } : order
        )
      );
    } catch (error) {
      console.error(
        "Error confirming order:",
        error.response?.data || error.message
      );
      alert(error.response?.data?.message || "Failed to confirm pickup");
    }
  };

  return (
    <>
      <div className="profile">
        {/* Navbar */}
        <nav className="navbar pt-4 px-md-5 z-3">
          <div className="container-fluid px-md-5 align-items-baseline">
            <a className="navbar-brand" href="/">
              <h1 className="text-primary m-0 logo">
                <i className="fa fa-utensils me-3"></i>Restoran
              </h1>
            </a>
          </div>
        </nav>

        <div className="container d-flex flex-wrap mt-5">
          {/* Profile Card */}
          <div
            className="card mb-3 h-50 profile-card"
            style={{ maxWidth: 540 }}
          >
            <div className="row g-0">
              <div className="col-md-4 d-flex justify-content-center align-items-baseline mt-4">
                <i
                  className="fa-solid fa-circle-user"
                  style={{ fontSize: "150px" }}
                ></i>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  {user ? (
                    <>
                      <h5 className="card-title">Welcome, {user.name}</h5>
                      <p className="card-text">{user.email}</p>
                      <p className="card-text">Contact Info: {user.phone}</p>
                      <p className="card-text">Address: {user.address}</p>
                      <button
                        type="button"
                        className="btn btn-outline-primary m-3"
                        onClick={() => {
                          logout();
                          navigate("/");
                        }}
                      >
                        Logout
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-light"
                        onClick={toggleOrderHistory}
                      >
                        {showOrderHistory ? "Hide History" : "Order History"}
                      </button>
                    </>
                  ) : (
                    <div>
                      <h5 className="card-title">
                        Please log in to view profile details
                      </h5>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Order History */}
          {showOrderHistory && user && (
            <div
              className="card ms-3 overflow-y-scroll profile-card"
              style={{ minWidth: 540, height: "450px" }}
            >
              <div className="card-body">
                <h5 className="card-title">Your Order History</h5>
                {orders.length > 0 ? (
                  orders.map((order) => (
                    <div key={order._id}>
                      <h4>
                        Order Date:{" "}
                        {new Date(order.createdAt).toLocaleDateString()} -{" "}
                        <span
                          className={`badge ms-2 ${
                            order.status === "Fulfilled"
                              ? "bg-success"
                              : "bg-warning"
                          }`}
                        >
                          {order.status}
                        </span>
                      </h4>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.items.map((item, index) => (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{item.name}</td>
                              <td>{item.quantity}</td>
                              <td>${item.price}</td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr>
                            <th colSpan={3}>Total Amount</th>
                            <th>${order.totalAmount}</th>
                          </tr>
                        </tfoot>
                      </table>

                      {order.status === "Out for Delivery" && (
                        <button
                          className="btn btn-primary mt-2"
                          onClick={() => confirmPickup(order._id)}
                        >
                          Confirm Pickup
                        </button>
                      )}
                      <hr />
                    </div>
                  ))
                ) : (
                  <p>No orders available</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
