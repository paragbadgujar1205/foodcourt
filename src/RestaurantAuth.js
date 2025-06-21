// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const RestaurantAuth = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     cuisine: "",
//     email: "",
//     password: "",
//     image: "", // Now it's a string URL
//   });

//   const [formType, setFormType] = useState("login"); // "login" | "register"
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Handle input changes
//   const getData = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (formType === "register") {
//       // Validation check
//       if (!formData.name || !formData.location || !formData.cuisine || !formData.email || !formData.password || !formData.image) {
//         setError("Please fill out all required fields.");
//         return;
//       }

//       try {
//         const response = await axios.post("http://localhost:5000/restaurants", formData, {
//           headers: { "Content-Type": "application/json" },
//         });

//         alert("Restaurant registered successfully!");
        
//         setFormType("login"); // Switch to login after successful registration
//       } catch (error) {
//         console.error("Error during restaurant registration:", error.response?.data || error.message);
//         setError(error.response?.data?.message || "An error occurred while registering. Please try again.");
//       }
//     } else {
//       // Login logic
//       if (!formData.email || !formData.password) {
//         setError("Please fill out both email and password.");
//         return;
//       }

//       try {
//         const response = await axios.post("http://localhost:5000/restaurant/login", {
//           email: formData.email,
//           password: formData.password,
//         });

        

//         console.log("Login Response:", response.data); // Debugging step

//         const restaurantId = response.data.restaurant?.restaurantId; // ✅ Corrected path

//         if (!restaurantId) {
//           throw new Error("Restaurant ID is missing from response");
//         }
      
//         alert("Restaurant login successful!");
//         localStorage.setItem("restaurantId",restaurantId); // ✅ Store restaurant ID
//         // localStorage.setItem("restaurantToken", response.data.token);
//         navigate("/restaurant/menu"); // Redirect after login
//       } catch (error) {
//         console.error("Error during login:", error.response?.data || error.message);
//         setError("Invalid email or password. Please try again.");
//       }
//     }

//     setFormData({
//       name: "",
//       location: "",
//       cuisine: "",
//       email: "",
//       password: "",
//       image: "",
//     });
//     setError("");
//   };

//   return (
//     <div className="auth-container">
//       <div className="banner">
//         <nav className="navbar pt-4 px-md-5 z-3">
//           <div className="container-fluid px-md-5 align-items-baseline">
//             <a className="navbar-brand" href="#">
//               <h1 className="text-primary m-0 logo">
//                 <i className="fa fa-utensils me-3"></i>Restoran
//               </h1>
//             </a>
//           </div>
//         </nav>
//         <div className="row pt-2">
//           <div className="col-lg-6 col-md-8 mx-auto mt-lg-5">
//             <div className="container">
//               <form className="p-3 rounded-4 table-form w-75" onSubmit={handleSubmit}>
                
//                 {formType === "register" && (
//                   <>
//                     <input type="text" name="name" placeholder="Restaurant Name" required onChange={getData} />
//                     <input type="text" name="location" placeholder="Location" required onChange={getData} />
//                     <input type="text" name="cuisine" placeholder="Cuisine Type" required onChange={getData} />
//                     <input type="text" name="image" placeholder="Image URL" required onChange={getData} />
//                   </>
//                 )}

//                 <input type="email" name="email" placeholder="Enter Your Email" required onChange={getData} />
//                 <input type="password" name="password" placeholder="Enter password" required onChange={getData} />

//                 <button className="book-btn" type="submit">
//                   {formType === "register" ? "Register Restaurant" : "Login"}
//                 </button>

//                 {error && <p className="error">{error}</p>}

//                 {formType === "login" ? (
//                   <p style={{ color: "skyblue" }} onClick={() => setFormType("register")} className="toggle-link">
//                     Don't have a restaurant account? Register here
//                   </p>
//                 ) : (
//                   <p style={{ color: "skyblue" }} onClick={() => setFormType("login")} className="toggle-link">
//                     Already registered? Log in here
//                   </p>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantAuth;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "./AuthContext"; // Import AuthContext

// const RestaurantAuth = () => {
//   const { restaurantLogin } = useAuth(); // Get restaurant login function from AuthContext
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     cuisine: "",
//     email: "",
//     password: "",
//     image: "",
//   });

//   const [formType, setFormType] = useState("login"); // "login" | "register"
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Handle input changes
//   const getData = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       if (formType === "register") {
//         // Validation check
//         if (!formData.name || !formData.location || !formData.cuisine || !formData.email || !formData.password || !formData.image) {
//           setError("Please fill out all required fields.");
//           return;
//         }

//         // Send registration request
//         const response = await axios.post("http://localhost:5000/restaurants", formData, {
//           headers: { "Content-Type": "application/json" },
//         });

//         alert("Restaurant registered successfully!");
//         setFormType("login"); // Switch to login after successful registration
//       } else {
//         // Login logic
//         if (!formData.email || !formData.password) {
//           setError("Please fill out both email and password.");
//           return;
//         }

//         const response = await axios.post("http://localhost:5000/restaurant/login", {
//           email: formData.email,
//           password: formData.password,
//         });

//         console.log("Login Response:", response.data); // Debugging step

//         const restaurantData = response.data.restaurant;
//         console.log("restaurantData----",restaurantData.restaurantId)
//         if (!restaurantData || !restaurantData.restaurantId) {
//           throw new Error("Restaurant ID is missing from response");
//         }

//         // Store restaurant ID in local storage and AuthContext
//         localStorage.setItem("restaurantId", restaurantData.restaurantId);
//         restaurantLogin(restaurantData); // Store in context

//         alert("Restaurant login successful!");
//         navigate("/restaurant/orders"); // Redirect to restaurant orders page
//       }

//       // Clear form only after successful operation
//       setFormData({
//         name: "",
//         location: "",
//         cuisine: "",
//         email: "",
//         password: "",
//         image: "",
//       });
//       setError("");
//     } catch (error) {
//       console.error("Error:", error.response?.data || error.message);
//       setError(error.response?.data?.message || "An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="banner">
//         <nav className="navbar pt-4 px-md-5 z-3">
//           <div className="container-fluid px-md-5 align-items-baseline">
//             <a className="navbar-brand" href="#">
//               <h1 className="text-primary m-0 logo">
//                 <i className="fa fa-utensils me-3"></i>Restoran
//               </h1>
//             </a>
//           </div>
//         </nav>
//         <div className="row pt-2">
//           <div className="col-lg-6 col-md-8 mx-auto mt-lg-5">
//             <div className="container">
//               <form className="p-3 rounded-4 table-form w-75" onSubmit={handleSubmit}>
//                 {formType === "register" && (
//                   <>
//                     <input type="text" name="name" placeholder="Restaurant Name" required onChange={getData} value={formData.name} />
//                     <input type="text" name="location" placeholder="Location" required onChange={getData} value={formData.location} />
//                     <input type="text" name="cuisine" placeholder="Cuisine Type" required onChange={getData} value={formData.cuisine} />
//                     <input type="text" name="image" placeholder="Image URL" required onChange={getData} value={formData.image} />
//                   </>
//                 )}

//                 <input type="email" name="email" placeholder="Enter Your Email" required onChange={getData} value={formData.email} />
//                 <input type="password" name="password" placeholder="Enter password" required onChange={getData} value={formData.password} />

//                 <button className="book-btn" type="submit">
//                   {formType === "register" ? "Register Restaurant" : "Login"}
//                 </button>

//                 {error && <p className="error">{error}</p>}

//                 {formType === "login" ? (
//                   <p style={{ color: "skyblue" }} onClick={() => setFormType("register")} className="toggle-link">
//                     Don't have a restaurant account? Register here
//                   </p>
//                 ) : (
//                   <p style={{ color: "skyblue" }} onClick={() => setFormType("login")} className="toggle-link">
//                     Already registered? Log in here
//                   </p>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantAuth;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext";
import "./styles/RestaurantAuth.css"; // Import custom styles

const RestaurantAuth = () => {
  const { restaurantLogin } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    cuisine: "",
    email: "",
    password: "",
    image: "",
  });

  const [formType, setFormType] = useState("login");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formType === "register") {
        if (!formData.name || !formData.location || !formData.cuisine || !formData.email || !formData.password || !formData.image) {
          setError("Please fill out all fields.");
          return;
        }

        await axios.post("http://localhost:5000/restaurants", formData, {
          headers: { "Content-Type": "application/json" },
        });

        alert("Restaurant registered successfully!");
        setFormType("login");
        navigate("/restaurant/dashboard")
      } else {
        if (!formData.email || !formData.password) {
          setError("Please fill out both email and password.");
          return;
        }

        const response = await axios.post("http://localhost:5000/restaurant/login", {
          email: formData.email,
          password: formData.password,
        });

        const restaurantData = response.data.restaurant;
        if (!restaurantData?.restaurantId) throw new Error("Missing restaurant ID.");

        localStorage.setItem("restaurantId", restaurantData.restaurantId);
        restaurantLogin(restaurantData);
        alert("Login successful!");
        navigate("/restaurant/dashboard");
      }

      setFormData({
        name: "",
        location: "",
        cuisine: "",
        email: "",
        password: "",
        image: "",
      });
      setError("");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">{formType === "register" ? "Register Your Restaurant" : "Restaurant Login"}</h2>
        <form onSubmit={handleSubmit}>
          {formType === "register" && (
            <>
              <input type="text" name="name" placeholder="Restaurant Name" onChange={getData} value={formData.name} required />
              <input type="text" name="location" placeholder="Location" onChange={getData} value={formData.location} required />
              <input type="text" name="cuisine" placeholder="Cuisine Type" onChange={getData} value={formData.cuisine} required />
              <input type="text" name="image" placeholder="Image URL" onChange={getData} value={formData.image} required />
            </>
          )}
          <input type="email" name="email" placeholder="Email" onChange={getData} value={formData.email} required />
          <input type="password" name="password" placeholder="Password" onChange={getData} value={formData.password} required />

          <button type="submit" className="auth-btn">
            {formType === "register" ? "Register Restaurant" : "Login"}
          </button>

          {error && <p className="auth-error">{error}</p>}

          <p className="toggle-link" onClick={() => setFormType(formType === "login" ? "register" : "login")}>
            {formType === "login" ? "Don't have an account? Register here" : "Already registered? Log in here"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default RestaurantAuth;


