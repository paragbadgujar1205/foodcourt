import React, { useState } from "react";
import axios from "axios";

const AddMenu = () => {
  const [menuItem, setMenuItem] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const restaurantId = localStorage.getItem("restaurantId");

  const handleChange = (e) => {
    setMenuItem({ ...menuItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/menus/add", {
        restaurantId,
        ...menuItem,
      });

      alert("Menu item added successfully!");
      setMenuItem({ name: "", description: "", price: "", image: "" });
    } catch (error) {
      console.error("Error adding menu item:", error.response?.data || error.message);
      alert("Error adding menu item. Please check your input.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh", backgroundColor: "#f5f5f5" }}>
      <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "450px", borderRadius: "12px", backgroundColor: "#fff" }}>
        <h3 className="text-center mb-4" style={{ color: "#ff7f00" }}>🍽️ Add Menu Item</h3>
        <form onSubmit={handleSubmit}>
          {/* Item Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Item Name</label>
            <input
              type="text"
              name="name"
              style={{color:"black"}}
              className="form-control"
              placeholder="Enter item name"
              value={menuItem.name}
              onChange={handleChange}
              required
            />
          </div>
          {/* Description */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Description</label>
            <textarea
              name="description"
              className="form-control"
              placeholder="Enter description"
              rows="2"
              value={menuItem.description}
              onChange={handleChange}
            ></textarea>
          </div>
          {/* Price */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Price</label>
            <input
              type="number"
              style={{color:"black"}}
              name="price"
              className="form-control"
              placeholder="Enter price"
              value={menuItem.price}
              onChange={handleChange}
              required
            />
          </div>
          {/* Image URL */}
          <div className="mb-4">
            <label className="form-label fw-semibold">Image URL</label>
            <input
              type="text"
              name="image"
              className="form-control"
              placeholder="Enter image URL"
              value={menuItem.image}
              onChange={handleChange}
              required
            />
          </div>
          {/* Submit */}
          <div className="d-grid">
            <button type="submit" className="btn" style={{ backgroundColor: "#ff7f00", color: "#fff", fontWeight: "bold" }}>
              Add Menu Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
