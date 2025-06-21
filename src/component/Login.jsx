// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { useAuth } from '../AuthContext'; // Adjust the path if necessary
// import "./Booking.css";

// const Login = () => {
//   const { login } = useAuth();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     address: "",
//   });
//   const [error, setError] = useState("");
//   const [formType, setFormType] = useState("login"); // "login" | "register" | "admin"
//   const navigate = useNavigate();

//   const getData = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (formType === "register") {
//       // Registration logic
//       if (!formData.name || !formData.email || !formData.password || !formData.phone || !formData.address) {
//         setError("Please fill out all required fields.");
//         return;
//       }
//       try {
//         await axios.post('http://localhost:5000/api/registration', formData);
//         login();
//         alert("Registration successful");
//         navigate("/home");
//       } catch (error) {
//         console.error("Error occurred during registration:", error);
//         setError("An error occurred while registering. Please try again.");
//       }
//     } else {
//       // Login logic for both user and admin
//       if (!formData.email || !formData.password) {
//         setError("Please fill out both email and password.");
//         return;
//       }
//       const url = formType === "admin" ? 'http://localhost:5000/api/admin/login' : 'http://localhost:5000/api/login';
//       try {
//         const response = await axios.post(url, {
//           email: formData.email,
//           password: formData.password
//         });
//         const userData = response.data;
//         login(userData);
//         alert(formType === "admin" ? "Admin login successful" : "Login successful");
//         localStorage.setItem("token", response.data.token);
//         console.log()
//         navigate(formType === "admin" ? "/admin/dashboard" : "/home");
//       } catch (error) {
//         console.error("Error during login:", error);
//         setError("Invalid email or password. Please try again.");
//         alert("Invalid email or password. Please try again.");
//       }
//     }

//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//       phone: "",
//       address: "",
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

//                 {formType === "login" && (
//                   <>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       placeholder="Enter Your Email"
//                       required
//                       onChange={getData}
//                     />
//                     <input
//                       type="password"
//                       id="password"
//                       name="password"
//                       placeholder="Enter password"
//                       required
//                       onChange={getData}
//                     />
//                   </>
//                 )}

//                 {formType === "register" && (
//                   <>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       placeholder="Enter Your Name"
//                       required
//                       onChange={getData}
//                     />
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       placeholder="Enter Your Email"
//                       required
//                       onChange={getData}
//                     />
//                     <input
//                       type="password"
//                       id="password"
//                       name="password"
//                       placeholder="Enter password"
//                       required
//                       onChange={getData}
//                     />
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       placeholder="Enter your mobile number"
//                       required
//                       onChange={getData}
//                     />
//                     <textarea
//                       id="address"
//                       name="address"
//                       placeholder="Enter your address"
//                       required
//                       onChange={getData}
//                     />
//                   </>
//                 )}

//                 {formType === "admin" && (
//                   <>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       placeholder="Admin Email"
//                       required
//                       onChange={getData}
//                     />
//                     <input
//                       type="password"
//                       id="password"
//                       name="password"
//                       placeholder="Admin Password"
//                       required
//                       onChange={getData}
//                     />
//                   </>
//                 )}

//                 <button className="book-btn" type="submit">
//                   {formType === "register" ? "Register" : formType === "admin" ? "Admin Login" : "Login"}
//                 </button>

//                 {error && <p className="error">{error}</p>}

//                 <p style={{color:"skyblue"}} onClick={() => setFormType("register")} className="toggle-link">
//                   {formType === "login" ? "Don't have an account? Register" : ""}
//                 </p>

//                 <p style={{color:"skyblue"}} onClick={() => setFormType("login")} className="toggle-link">
//                   {formType === "register" ? "Already have an account? Log in" : ""}
//                 </p>

//                 <p style={{color:"skyblue"}} onClick={() => setFormType("admin")} className="toggle-link">
//                   {formType !== "admin" ? "Login as Admin" : ""}
//                 </p>

//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../AuthContext"; // Adjust the path if necessary
// import "./Booking.css";

// const Login = () => {
//   const { login, userLogin } = useAuth();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     address: "",
//   });
//   const [error, setError] = useState("");
//   const [formType, setFormType] = useState("login"); // "login" | "register"
//   const navigate = useNavigate();

//   const getData = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (formType === "register") {
//       // Registration logic
//       if (!formData.name || !formData.email || !formData.password || !formData.phone || !formData.address) {
//         setError("Please fill out all required fields.");
//         return;
//       }
//       try {
//         await axios.post("http://localhost:5000/api/registration", formData);
//         login();
//         alert("Registration successful");
//         navigate("/home");
//       } catch (error) {
//         console.error("Error occurred during registration:", error);
//         setError("An error occurred while registering. Please try again.");
//       }
//     } else {
//       // Login logic
//       if (!formData.email || !formData.password) {
//         setError("Please fill out both email and password.");
//         return;
//       }
//       try {
//         const response = await axios.post("http://localhost:5000/api/login", {
//           email: formData.email,
//           password: formData.password,
//         });

//         const userData = response.data;
//         console.log(userData._id)
//         userLogin(userData);

//         // Store user ID in local storage to persist session
//         localStorage.setItem("userId", userData._id);
//         localStorage.setItem("token", userData.token);

//         alert("Login successful");
//         navigate("/home");
//       } catch (error) {
//         console.error("Error during login:", error);
//         setError("Invalid email or password. Please try again.");
//         alert("Invalid email or password. Please try again.");
//       }
//     }

//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//       phone: "",
//       address: "",
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
//                 {formType === "login" && (
//                   <>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       placeholder="Enter Your Email"
//                       required
//                       onChange={getData}
//                     />
//                     <input
//                       type="password"
//                       id="password"
//                       name="password"
//                       placeholder="Enter password"
//                       required
//                       onChange={getData}
//                     />
//                   </>
//                 )}

//                 {formType === "register" && (
//                   <>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       placeholder="Enter Your Name"
//                       required
//                       onChange={getData}
//                     />
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       placeholder="Enter Your Email"
//                       required
//                       onChange={getData}
//                     />
//                     <input
//                       type="password"
//                       id="password"
//                       name="password"
//                       placeholder="Enter password"
//                       required
//                       onChange={getData}
//                     />
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       placeholder="Enter your mobile number"
//                       required
//                       onChange={getData}
//                     />
//                     <textarea
//                       id="address"
//                       name="address"
//                       placeholder="Enter your address"
//                       required
//                       onChange={getData}
//                     />
//                   </>
//                 )}

//                 <button className="book-btn" type="submit">
//                   {formType === "register" ? "Register" : "Login"}
//                 </button>

//                 {error && <p className="error">{error}</p>}

//                 <p
//                   style={{ color: "skyblue", cursor: "pointer" }}
//                   onClick={() => setFormType(formType === "login" ? "register" : "login")}
//                   className="toggle-link"
//                 >
//                   {formType === "login"
//                     ? "Don't have an account? Register"
//                     : "Already have an account? Log in"}
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../AuthContext";
import "../component/login.css";

const Login = () => {
  const { userLogin } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState("");
  const [formType, setFormType] = useState("login");
  const navigate = useNavigate();

  const getData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formType === "register") {
      if (
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.phone ||
        !formData.address
      ) {
        setError("Please fill out all required fields.");
        return;
      }
      try {
        await axios.post("http://localhost:5000/api/registration", formData);
        alert("Registration successful");
        navigate("/user/auth");
        setFormType("login")
      } catch (err) {
        setError("Registration failed. Try again.");
      }
    } else {
      if (!formData.email || !formData.password) {
        setError("Please fill out both email and password.");
        return;
      }
      try {
        const res = await axios.post("http://localhost:5000/api/login", {
          email: formData.email,
          password: formData.password,
        });

        const userData = res.data;
        userLogin(userData);
        localStorage.setItem("userId", userData._id);
        localStorage.setItem("token", userData.token);

        alert("Login successful");
        navigate("/");
      } catch (err) {
        setError("Invalid credentials. Please try again.");
      }
    }

    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
    });
  };

  return (
    <>
      <div className="login_body">
        <div className="login-page">
          <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
              <h2>{formType === "register" ? "Register" : "Login"}</h2>

              {formType === "register" && (
                <>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={getData}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={getData}
                    required
                  />
                  <textarea
                    name="address"
                    placeholder="Address"
                    onChange={getData}
                    required
                  ></textarea>
                </>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={getData}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={getData}
                required
              />

              {error && <p className="error">{error}</p>}

              <button type="submit" className="login-btn">
                {formType === "register" ? "Register" : "Login"}
              </button>

              <p
                className="toggle-text"
                onClick={() =>
                  setFormType(formType === "login" ? "register" : "login")
                }
              >
                {formType === "login"
                  ? "Don't have an account? Register"
                  : "Already have an account? Login"}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
