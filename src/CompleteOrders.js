import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/Orders.css"; // Optional styling

const FulfilledOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const restaurantId = localStorage.getItem("restaurantId");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/orders/fulfilled/${restaurantId}`);
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching fulfilled orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [restaurantId]);

  return (
    <div className="container mt-5">
      <h2 className="text-orange mb-4">Fulfilled Orders</h2>

      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No fulfilled orders found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-warning">
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Total</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={order._id}>
                  <td>{idx + 1}</td>
                  <td>{order.userId || "N/A"}</td>
                  <td>
                    {order.items.map((item, i) => (
                      <div key={i}>
                        {item.name} x{item.quantity}
                      </div>
                    ))}
                  </td>
                  <td>₹{order.totalAmount}</td>
                  <td>{new Date(order.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FulfilledOrders;
