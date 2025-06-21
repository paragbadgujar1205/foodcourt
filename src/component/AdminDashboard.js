// // // import React from "react";
// // // import { useState } from "react";
// // // import "../index.css";
// // // import axios from "axios";

// // // const AdminDashboard = () => {
// // //     const [users, setUsers] = useState([]);
// // //     const [loading, setLoading] = useState(false);
// // //     const [error, setError] = useState(null);

// // //     const fetchUsers = async () => {
// // //       setLoading(true);
// // //       setError(null); // Reset error state
// // //       try {
// // //         const response = await axios.get('http://localhost:5000/api/users');
// // //         setUsers(response.data);
// // //       } catch (err) {
// // //         setError('Error fetching users');
// // //         console.error(err);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //   return (
// // //     <>
// // //       <div className="banner">
// // //         <nav className="navbar pt-4 px-md-5 z-3">
// // //           <div className="container-fluid px-md-5 align-items-baseline">
// // //             <a className="navbar-brand" href="ww">
// // //               <h1 className="text-primary m-0 logo">
// // //                 <i className="fa fa-utensils me-3"></i>Restoran
// // //               </h1>
// // //             </a>
// // //           </div>
// // //         </nav>
// // //         <div className="admin-header"> Welcome Admin</div>
// // //         <div className="d-flex justify-content-center p-2 admin-main container">
// // //           <div className="" onClick={fetchUsers} style={{ cursor: 'pointer' }}>
// // //             <i className="fa-solid fa-users icons"></i>
// // //             <h3>See Users</h3>
// // //           </div>
// // //           <div className="" >
// // //           <i class="fa-solid fa-utensils icons" ></i>
// // //             <h3>See Orders</h3>
// // //           </div>
// // //           <div className="">
// // //           <i class="fa-solid fa-table icons"></i>
// // //             <h3>See Bookings</h3>
// // //           </div>
// // //           <div className="">
// // //             <i className="fa-solid fa-users icons"></i>
// // //             <h3>Manage Inventory</h3>
// // //           </div>
// // //                     {/* Displaying users */}
// // //         {loading && <p>Loading users...</p>}
// // //         {error && <p>{error}</p>}
// // //         {users.length > 0 && (
// // //           <div className="user-list">
// // //             <h3>Registered Users</h3>
// // //             <ul>
// // //               {users.map(user => (
// // //                 <li key={user._id}>
// // //                   {user.name} - {user.email}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         )}
// // //           <div></div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default AdminDashboard;

// // import React, { useState } from "react";
// // import "../index.css";
// // import axios from "axios";

// // const AdminDashboard = () => {
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   // const fetchUsers = async () => {
// //   //     setLoading(true);
// //   //     setError(null); // Reset error state
// //   //     console.log("Fetching users..."); // Debug log
// //   //     try {
// //   //         const response = await axios.get('http://localhost:5000/api/registration');
// //   //         console.log("Users fetched:", response.data); // Debug log
// //   //         setUsers(response.data);
// //   //     } catch (err) {
// //   //         setError('Error fetching users');
// //   //         console.error("Fetch error:", err);
// //   //     } finally {
// //   //         setLoading(false);
// //   //     }
// //   // };

// //   const fetchUsers = async () => {
// //     console.log("FetchUsers function called");
// //     setLoading(true);
// //     setError(null); // Reset error state
// //     console.log("Fetching users..."); // Debug log
// //     try {
// //       const response = await axios.get(
// //         "http://localhost:5000/api/registration"
// //       );
// //       console.log("Users fetched:", response.data); // Debug log

// //       // Check if the response data is an array
// //       if (Array.isArray(response.data)) {
// //         setUsers(response.data);
// //       } else {
// //         console.error("Response is not an array:", response.data);
// //         setError("Error: Invalid data format received");
// //       }
// //     } catch (err) {
// //       setError("Error fetching users");
// //       console.error("Fetch error:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <>
// //       <div className="banner">
// //         <nav className="navbar pt-4 px-md-5 z-3">
// //           <div className="container-fluid px-md-5 align-items-baseline">
// //             <a className="navbar-brand" href="ww">
// //               <h1 className="text-primary m-0 logo">
// //                 <i className="fa fa-utensils me-3"></i>Restoran
// //               </h1>
// //             </a>
// //           </div>
// //         </nav>
// //         <div className="main-container d-flex">
// //           <div className="side-nav">
// //             <div className="side-items" onClick={fetchUsers}>
// //               <i className="fa-solid fa-users icons"></i> See Users
// //             </div>
// //             <div className="side-items">
// //               <i className="fa-solid fa-utensils icons"></i> See Orders
// //             </div>
// //             <div className="side-items">
// //               <i className="fa-solid fa-table icons"></i> See Booking
// //             </div>
// //             <div className="side-items">
// //               <i className="fa-solid fa-utensils icons"></i> Manage Inventory
// //             </div>
// //           </div>
// //           <div className="main-section">
// //             <table className="table">
// //               <thead>
// //                 <tr>
// //                   <th scope="col">#</th>
// //                   <th scope="col">Name</th>
// //                   <th scope="col">Email</th>
// //                   <th scope="col">Password</th>
// //                   <th scope="col">Phone</th>
// //                   <th scope="col">Address</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {/* Displaying users */}
// //                 {loading && <p>Loading users...</p>}
// //                 {error && <p>{error}</p>}
// //                 {users.length > 0 && (
// //                   {/* <div className="user-list"> */}

// //                       {users.map((user) => (
// //                         <tr>
// //                           <th scope="row">1</th>
// //                           <td>{user.name}</td>
// //                           <td>{user.email}</td>
// //                           <td>{user.password}</td>
// //                           <td>{user.phone}</td>
// //                           <td>{user.address}</td>
// //                         </tr>
// //                       ))}
// //                   {/* </div> */}
// //                 )}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //         {/* Displaying users */}
// //         {/* {loading && <p>Loading users...</p>}
// //         {error && <p>{error}</p>}
// //         {users.length > 0 && (
// //           <div className="user-list">
// //             <h3>Registered Users</h3>
// //             <ul>
// //               {users.map((user) => (
// //                 <li key={user._id}>
// //                   {user.name} - {user.email}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         )} */}
// //         {users.length === 0 && !loading && <p>No registered users found.</p>}{" "}
// //         {/* Message if no users */}
// //       </div>
// //     </>
// //   );
// // };

// // export default AdminDashboard;

// import React, { useState } from "react";
// import "../index.css";
// import axios from "axios";

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchUsers = async () => {
//     console.log("FetchUsers function called");
//     setLoading(true);
//     setError(null); // Reset error state
//     console.log("Fetching users..."); // Debug log
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/registration"
//       );
//       console.log("Users fetched:", response.data); // Debug log

//       if (Array.isArray(response.data)) {
//         setUsers(response.data);
//       } else {
//         console.error("Response is not an array:", response.data);
//         setError("Error: Invalid data format received");
//       }
//     } catch (err) {
//       setError("Error fetching users");
//       console.error("Fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="banner">
//         <nav className="navbar pt-4 px-md-5 z-3">
//           <div className="container-fluid px-md-5 align-items-baseline">
//             <a className="navbar-brand" href="ww">
//               <h1 className="text-primary m-0 logo">
//                 <i className="fa fa-utensils me-3"></i>Restoran
//               </h1>
//             </a>
//           </div>
//         </nav>
//         <div className="main-container d-flex">
//           <div className="side-nav">
//             <div
//               className="side-items"
//               onClick={fetchUsers}
//               style={{ cursor: "pointer" }}
//             >
//               <i className="fa-solid fa-users icons"></i> See Users
//             </div>
//             <div className="side-items">
//               <i className="fa-solid fa-utensils icons"></i> See Orders
//             </div>
//             <div className="side-items">
//               <i className="fa-solid fa-table icons"></i> See Booking
//             </div>
//             <div className="side-items">
//               <i className="fa-solid fa-utensils icons"></i> Manage Inventory
//             </div>
//           </div>
//           <div className="main-section">
//             {loading && <p>Loading users...</p>}
//             {error && <p>{error}</p>}
//             {users.length > 0 ? (
//               <div className="table-container overflow-y-scroll">
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       <th scope="col">#</th>
//                       <th scope="col">Name</th>
//                       <th scope="col">Email</th>
//                       <th scope="col">Password</th>
//                       <th scope="col">Phone</th>
//                       <th scope="col">Address</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {users.map((user, index) => (
//                       <tr key={user._id}>
//                         <td>{index + 1}</td>
//                         <td>{user.name}</td>
//                         <td>{user.email}</td>
//                         <td>{user.password}</td>
//                         <td>{user.phone}</td>
//                         <td>{user.address}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             ) : (
//               !loading && <p>No registered users found.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminDashboard;



import React, { useState } from "react";
import "../index.css";
import axios from "axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState("users"); // Track selected option

  // Function to fetch data based on the selected option
  const fetchData = async (option) => {
    setLoading(true);
    setError(null);
    setSelectedOption(option);

    try {
      let response;
      if (option === "users") {
        response = await axios.get("http://localhost:5000/api/registration");
        setUsers(response.data);
      } else if (option === "orders") {
        response = await axios.get("http://localhost:5000/api/orders");
        setOrders(response.data);
      } else if (option === "bookings") {
        response = await axios.get("http://localhost:5000/api/booking");
        setBookings(response.data);
      }
    } catch (err) {
      setError(`Error fetching ${option}`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
          </div>
        </nav>

        <div className="main-container d-flex">
          <div className="side-nav">
            <div
              className="side-items"
              onClick={() => fetchData("users")}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-users icons"></i> See Users
            </div>
            <div
              className="side-items"
              onClick={() => fetchData("orders")}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-utensils icons"></i> See Orders
            </div>
            <div
              className="side-items"
              onClick={() => fetchData("bookings")}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-table icons"></i> See Booking
            </div>
          </div>

          <div className="main-section">
            {loading && <p>Loading data...</p>}
            {error && <p>{error}</p>}

            {/* Conditionally render tables based on selected option */}
            {selectedOption === "users" && users.length > 0 && (
              <div className="table-container overflow-y-scroll">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Password</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={user._id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.phone}</td>
                        <td>{user.address}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {selectedOption === "orders" && orders.length > 0 && (
              <div className="table-container overflow-y-scroll">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Order ID</th>
                      <th scope="col">User</th>
                      <th scope="col">Items</th>
                      <th scope="col">Total Price</th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={order._id}>
                        <td>{index + 1}</td>
                        <td>{order._id}</td>
                        <td>{order.userId}</td>
                        <td>{order.items.map((item)=> `${item.name}   ${item.quantity}       ${item.price}   ` )} </td>
                        <td>{order.totalAmount}</td>
                        <td>{order.createdAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {selectedOption === "bookings" && bookings.length > 0 && (
              <div className="table-container overflow-y-scroll">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Booking ID</th>
                      <th scope="col">User</th>
                      <th scope="col">Email</th>
                      <th scope="col">Peoples</th>
                      <th scope="col">Request</th>
                      <th scope="col">Date</th>

                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking, index) => (
                      <tr key={booking._id}>
                        <td>{index + 1}</td>
                        <td>{booking._id}</td>
                        <td>{booking.name}</td>
                        <td>{booking.email}</td>
                        <td>{booking.people}</td>
                        <td>{booking.request}</td>
                        <td>{booking.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* No data message */}
            {!loading && selectedOption === "users" && users.length === 0 && (
              <p>No registered users found.</p>
            )}
            {!loading && selectedOption === "orders" && orders.length === 0 && (
              <p>No orders found.</p>
            )}
            {!loading && selectedOption === "bookings" && bookings.length === 0 && (
              <p>No bookings found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

