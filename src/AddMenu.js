// import React, { useState } from "react";
// import axios from "axios";

// const AddMenu = () => {
//     const [menuItem, setMenuItem] = useState({
//         name: "",
//         description: "",
//         price: "",
//         image: "",
//     });

//     const restaurantId = localStorage.getItem("restaurantId"); // ✅ Get restaurantId from localStorage

//     const handleChange = (e) => {
//         setMenuItem({ ...menuItem, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             await axios.post("http://localhost:5000/menus/add", {
//                 restaurantId, // ✅ Attach restaurantId
//                 ...menuItem,
//             });

//             alert("Menu item added successfully!");
//             setMenuItem({ name: "", description: "", price: "", image: "" });
//         } catch (error) {
//             alert("Error adding menu item.");
//         }
//     };

//     return (
//         <div>
//             <h2>Add Menu Item</h2>
//             <form onSubmit={handleSubmit} style={{backgroundColor:"black"}}>
//                 <input type="text" name="name" placeholder="Item Name" onChange={handleChange} required />
//                 <input type="text" name="description" placeholder="Description" onChange={handleChange} />
//                 <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
//                 <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
//                 <button type="submit">Add Item</button>
//             </form>
//         </div>
//     );
// };

// export default AddMenu;


// import React, { useState } from "react";
// import axios from "axios";

// const AddMenu = () => {
//   const [menuItem, setMenuItem] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: "",
//   });

//   // Get restaurantId from localStorage
//   const restaurantId = localStorage.getItem("restaurantId");

//   // Update state when an input field changes
//   const handleChange = (e) => {
//     setMenuItem({ ...menuItem, [e.target.name]: e.target.value });
//   };

//   // Handle form submission to add a new menu item
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:5000/menus/add", {
//         restaurantId, // Attach restaurantId from localStorage
//         ...menuItem,
//       });

//       alert("Menu item added successfully!");
//       // Reset form fields after submission
//       setMenuItem({ name: "", description: "", price: "", image: "" });
//     } catch (error) {
//       console.error("Error adding menu item:", error.response?.data || error.message);
//       alert("Error adding menu item. Please check your input.");
//     }
//   };

//   return (
//     <div className="container my-4">
//       <div className="card shadow-lg mx-auto" style={{ maxWidth: "600px", backgroundColor: "#f8f9fa" }}>
//         <div className="card-header text-center bg-primary text-white">
//           <h3>Add Menu Item</h3>
//         </div>
//         <div className="card-body">
//           <form onSubmit={handleSubmit}>
//             {/* Item Name */}
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">Item Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 placeholder="Enter item name"
//                 onChange={handleChange}
//                 value={menuItem.name}
//                 required
//               />
//             </div>
//             {/* Description */}
//             <div className="mb-3">
//               <label htmlFor="description" className="form-label">Description</label>
//               <textarea
//                 className="form-control"
//                 id="description"
//                 name="description"
//                 placeholder="Enter description"
//                 onChange={handleChange}
//                 value={menuItem.description}
//                 rows="3"
//               ></textarea>
//             </div>
//             {/* Price */}
//             <div className="mb-3">
//               <label htmlFor="price" className="form-label">Price</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="price"
//                 name="price"
//                 placeholder="Enter price"
//                 onChange={handleChange}
//                 value={menuItem.price}
//                 required
//               />
//             </div>
//             {/* Image URL */}
//             <div className="mb-3">
//               <label htmlFor="image" className="form-label">Image URL</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="image"
//                 name="image"
//                 placeholder="Enter image URL"
//                 onChange={handleChange}
//                 value={menuItem.image}
//                 required
//               />
//             </div>
//             {/* Submit Button */}
//             <div className="d-grid">
//               <button type="submit" className="btn btn-success">Add Menu Item</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddMenu;

// import React, { useState } from "react";
// import axios from "axios";

// const AddMenu = () => {
//   const [menuItem, setMenuItem] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: "",
//   });

//   const restaurantId = localStorage.getItem("restaurantId");

//   const handleChange = (e) => {
//     setMenuItem({ ...menuItem, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:5000/menus/add", {
//         restaurantId,
//         ...menuItem,
//       });

//       alert("Menu item added successfully!");
//       setMenuItem({ name: "", description: "", price: "", image: "" });
//     } catch (error) {
//       console.error("Error adding menu item:", error.response?.data || error.message);
//       alert("Error adding menu item. Please check your input.");
//     }
//   };

//   return (
//     <div className="add-menu-wrapper d-flex justify-content-center align-items-center py-5 px-2">
//       <div className="menu-form shadow p-4 rounded" style={{ backgroundColor: "#fff", maxWidth: "600px", width: "100%" }}>
//         <h2 className="text-center mb-4 text-orange">🍽️ Add New Menu Item</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label fw-semibold">Item Name</label>
//             <input
//               type="text"
//               className="form-control input-style"
//               id="name"
//               name="name"
//               placeholder="Enter item name"
//               onChange={handleChange}
//               value={menuItem.name}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="description" className="form-label fw-semibold">Description</label>
//             <textarea
//               className="form-control input-style"
//               id="description"
//               name="description"
//               placeholder="Enter description"
//               onChange={handleChange}
//               value={menuItem.description}
//               rows="3"
//             ></textarea>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="price" className="form-label fw-semibold">Price</label>
//             <input
//               type="number"
//               className="form-control input-style"
//               id="price"
//               name="price"
//               placeholder="Enter price"
//               onChange={handleChange}
//               value={menuItem.price}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="image" className="form-label fw-semibold">Image URL</label>
//             <input
//               type="text"
//               className="form-control input-style"
//               id="image"
//               name="image"
//               placeholder="Enter image URL"
//               onChange={handleChange}
//               value={menuItem.image}
//               required
//             />
//           </div>
//           <div className="d-grid">
//             <button type="submit" className="btn btn-orange fw-bold">Add Menu Item</button>
//           </div>
//         </form>
//       </div>

//       {/* Inline styles or you can move them to a CSS file */}
//       <style>{`
//         .text-orange {
//           color: #ff7f00;
//         }

//         .btn-orange {
//           background-color: #ff7f00;
//           color: white;
//           border: none;
//         }

//         .btn-orange:hover {
//           background-color: #e56f00;
//         }

//         .input-style::placeholder {
//           color: #999;
//         }

//         .input-style {
//           border-radius: 8px;
//           border: 1px solid #ccc;
//           padding: 10px 12px;
//           font-size: 16px;
//         }

//         .menu-form {
//           background-color: #fefefe;
//           border-radius: 16px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AddMenu;


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
