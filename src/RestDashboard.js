import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import "./styles/RestaurantDashboard.css";

const RestDashboard = () => {
  const [pendingOrdersCount, setPendingOrdersCount] = useState(0);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const restaurantId = localStorage.getItem("restaurantId");

  const handleNavigation = (path) => {
    navigate(path);
  };

  // // Dummy count (you can fetch real count via API later)
  // const pendingOrdersCount = 7;

  useEffect(() => {
    const fetchPendingCount = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/orders/pending/count/${restaurantId}`
        );
        setPendingOrdersCount(response.data.count);
      } catch (error) {
        console.error("Error fetching pending orders count:", error);
      }
    };

    if (restaurantId) {
      fetchPendingCount();
    }
  }, [restaurantId]);

  return (
    <div className="dashboard-container">
      <nav className="dashboard-navbar px-md-5 py-3">
        <div className="navbar-brand text-orange">
          <i className="fa fa-utensils me-2"></i> Restoran Admin
        </div>
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </button>
      </nav>

      <div className="dashboard-body container mt-4">
        <h2 className="mb-4 text-orange">Welcome to your Dashboard!</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div
              className="dashboard-card"
              onClick={() => handleNavigation("/restaurant/menu")}
            >
              <i className="fa fa-plus fa-2x mb-2"></i>
              <h5>Add Food Items</h5>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="dashboard-card"
              onClick={() => handleNavigation("/restaurant/restmenu")}
            >
              <i className="fa fa-bars fa-2x mb-2"></i>
              <h5>Manage Menu</h5>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="dashboard-card"
              onClick={() => handleNavigation("/restaurant/orders")}
            >
              <i className="fa fa-clipboard-list fa-2x mb-2"></i>
              <h5>All Orders</h5>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="dashboard-card"
              onClick={() => handleNavigation("/restaurant/pending/orders")}
            >
              <div className="d-flex justify-content-between align-items-center w-100">
                <div>
                  <i className="fa fa-hourglass-half fa-2x mb-2"></i>
                  <h5>Pending Orders</h5>
                </div>
                <span className="badge bg-orange fs-5">
                  {pendingOrdersCount}
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="dashboard-card"
              onClick={() => handleNavigation("/restaurant/orders")}
            >
              <i className="fa fa-check-circle fa-2x mb-2"></i>
              <h5>Fulfilled Orders</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestDashboard;
