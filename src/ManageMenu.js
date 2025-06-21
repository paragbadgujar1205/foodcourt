import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManageMenu = () => {
  const navigate = useNavigate();
  const restaurantId = localStorage.getItem("restaurantId"); // Get logged-in restaurant ID

  const [menuItems, setMenuItems] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null); // Track which item is being edited
  const [updatedItem, setUpdatedItem] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const [error, setError] = useState("");

  // Fetch menu items for this restaurant on component mount or when restaurantId changes
  useEffect(() => {
    if (restaurantId) {
      fetchMenuItems();
    }
  }, [restaurantId]);

  const fetchMenuItems = async () => {
    try {
      // Use your GET endpoint that returns menu items for a specific restaurant.
      const response = await axios.get(`http://localhost:5000/menu/${restaurantId}`);
      setMenuItems(response.data);
    } catch (err) {
      console.error("Error fetching menu items:", err.response?.data || err.message);
      setError("Failed to fetch menu items.");
    }
  };

  // Handle deletion of a menu item
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/menus/${id}`);
      alert("Menu item deleted successfully!");
      fetchMenuItems(); // Refresh the list after deletion
    } catch (err) {
      console.error("Error deleting menu item:", err.response?.data || err.message);
      alert("Error deleting menu item.");
    }
  };

  // When the Edit button is clicked, populate the update form with the item's current values
  const handleEditClick = (item) => {
    setEditingItemId(item._id);
    setUpdatedItem({
      name: item.name,
      description: item.description,
      price: item.price,
      image: item.image,
    });
  };

  // Handle changes in the update form
  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem((prev) => ({ ...prev, [name]: value }));
  };

  // Handle update form submission
  const handleUpdateSubmit = async (e, id) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/menus/${id}`, updatedItem, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Menu item updated successfully!");
      setEditingItemId(null);
      fetchMenuItems(); // Refresh the list after update
    } catch (err) {
      console.error("Error updating menu item:", err.response?.data || err.message);
      alert("Error updating menu item.");
    }
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Manage Your Menu</h2>
      {error && <p className="text-danger">{error}</p>}
      {menuItems.length === 0 ? (
        <p>No menu items found.</p>
      ) : (
        menuItems.map((item) => (
          <div key={item._id} className="card mb-3 shadow-sm">
            <div className="card-body">
              {editingItemId === item._id ? (
                // Update Form for editing a menu item
                <form onSubmit={(e) => handleUpdateSubmit(e, item._id)}>
                  <div className="mb-2">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={updatedItem.name}
                      onChange={handleUpdateChange}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Description</label>
                    <textarea
                      name="description"
                      className="form-control"
                      rows="2"
                      value={updatedItem.description}
                      onChange={handleUpdateChange}
                      required
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Price</label>
                    <input
                      type="number"
                      name="price"
                      className="form-control"
                      value={updatedItem.price}
                      onChange={handleUpdateChange}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Image URL</label>
                    <input
                      type="text"
                      name="image"
                      className="form-control"
                      value={updatedItem.image}
                      onChange={handleUpdateChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary me-2">
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setEditingItemId(null)}
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                // Displaying menu item details
                <>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">Price: ₹{item.price}</p>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ maxWidth: "150px" }}
                    className="img-fluid mb-3"
                  />
                  <div>
                    <button
                      className="btn btn-warning me-2"
                      onClick={() => handleEditClick(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))
      )}
      <div className="mt-4">
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ManageMenu;
