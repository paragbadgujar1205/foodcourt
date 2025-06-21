import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const RestOrders = () => {
  // const { restaurantId } = useAuth();
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(false);

  const restaurantId = localStorage.getItem("restaurantId");
  console.log("Stored Restaurant ID:", restaurantId);

  useEffect(() => {
    if (restaurantId) {
      axios
        .get(`http://localhost:5000/restaurant/orders/${restaurantId}`)
        .then((res) => setOrders(res.data))
        .catch((err) =>
          console.error("Error fetching restaurant orders:", err)
        );
    }
  }, [restaurantId]);

  const showUser = () => {
    if (restaurantId) {
      axios
        .get(`http://localhost:5000/api/registration/${orders[0].userId}`)
        .then((res) => setUser(res.data))
        .catch((err) =>
          console.error("Error fetching restaurant orders:", err)
        );
    }
  };

  // useEffect(() => {
  //   if (restaurantId) {
  //     axios
  //       .get(`http://localhost:5000/api/registration/${orders[0].userId}`)
  //       .then((res) => setUser(res.data))
  //       .catch((err) =>
  //         console.error("Error fetching restaurant user:", err)
  //       );
  //   }
  // }, [restaurantId]);

  // const handleAccept = async (orderId) => {
  //   // const orderid = orderId.trim()
  //   console.log("order---id",orderId)
  //   await axios.put(`http://localhost:5000/restaurant/${orderId}/accept`);
  //   setOrders(orders.map(order => order._id === orderId ? { ...order, status: "Accepted" } : order));
  // };

  const handleAccept = async (orderId) => {
    const apiUrl = `http://localhost:5000/restaurant/${orderId}/accept`;
    console.log("Making request to:", apiUrl);

    try {
      const response = await axios.patch(apiUrl);
      console.log("API Response:", response.data);

      setOrders(
        orders.map((order) =>
          order._id === orderId ? { ...order, status: "Accepted" } : order
        )
      );
    } catch (error) {
      console.error(
        "Error accepting order:",
        error.response?.data || error.message
      );
    }
  };

  // const handleReject = async (orderId) => {
  //   const reason = prompt("Enter rejection reason:");
  //   if (!reason) return;
  //   await axios.patch(`http://localhost:5000/restaurant/${orderId}/reject`, { reason });
  //   setOrders(orders.filter(order => order._id !== orderId));
  // };

  const handleReject = async (orderId) => {
    const rejectionReason = prompt("Enter rejection reason:");
    if (!rejectionReason) return;

    try {
      const response = await axios.patch(
        `http://localhost:5000/restaurant/${orderId}/reject`,
        { rejectionReason }
      );

      if (response.status === 200) {
        alert("Order rejected successfully!");
        setOrders(orders.filter((order) => order._id !== orderId));
      }
    } catch (error) {
      console.error(
        "Error rejecting order:",
        error.response?.data || error.message
      );
      alert(error.response?.data?.message || "Failed to reject order");
    }
  };

  const handleOutForDelivery = async (orderId) => {
    await axios.patch(`http://localhost:5000/restaurant/${orderId}/delivery`);
    setOrders(
      orders.map((order) =>
        order._id === orderId ? { ...order, status: "Out for Delivery" } : order
      )
    );
  };

  console.log("orders---", orders);
  console.log("user--",user)

  return (
    <div>
      <h2>Pending Orders</h2>
      {orders.length === 0 ? (
        <p>No pending orders.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>Order #{order._id}</h3>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
            <p>
            <strong>User:</strong> {order.userId}
            <button onClick={showUser}>Get User Details:-</button>
            <p>{user.name}<br/>{user.email}<br/>{user.phone}</p>
              {/* <strong>User:</strong> {order.userId}<br/>{user} */}
            </p>
            <p>
              <strong>Address:</strong> {order.address}
            </p>
            <p>
              <strong>Payment:</strong> {order.paymentMethod}
            </p>
            <p>
              <strong>Items:</strong>{" "}
              {order.items
                .map((item) => `${item.name} x${item.quantity}`)
                .join(", ")}
            </p>

            {order.status === "Pending" && (
              <>
                <button onClick={() => handleAccept(order._id)}>Accept</button>
                <button onClick={() => handleReject(order._id)}>Reject</button>
              </>
            )}

            {order.status === "Accepted" && (
              <button onClick={() => handleOutForDelivery(order._id)}>
                Out for Delivery
              </button>
            )}
          </div>
        ))
      )}
      
      
      
    </div>
  );
};

export default RestOrders;
