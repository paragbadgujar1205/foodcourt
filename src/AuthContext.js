// // AuthContext.js
// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null); // Add user state

//   const login = (userData) => {
//     console.log("User logged in2:", userData); // Debugging line
//     setIsAuthenticated(true);
//     setUser(userData); // Set user data on login
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setUser(null); // Clear user data on logout
//   };
//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null); // User data
//   const [restaurantId, setRestaurantId] = useState(null); // Store restaurant ID for filtering orders

//   const login = (userData) => {
//     console.log("User logged in:", userData);
//     setIsAuthenticated(true);
//     setUser(userData);

//     // Save restaurantId when user places an order
//     if (userData._id) {
//       setRestaurantId(userData._id);
//     }
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setUser(null);
//     setRestaurantId(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{ isAuthenticated, user, login, logout, restaurantId, setRestaurantId }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

// --------------------------------

// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null); // User data
//   const [restaurantId, setRestaurantId] = useState(null); // Store restaurant ID for restaurant login

//   // User login function
//   const userLogin = (userData) => {
//     console.log("User logged in:", userData);
//     setIsAuthenticated(true);
//     setUser(userData);
//   };

//   // Restaurant login function
//   const restaurantLogin = (restaurantData) => {
//     console.log("Restaurant logged in:", restaurantData);
//     setIsAuthenticated(true);
//     // Save restaurantId only for restaurant login
//     if (restaurantData.restaurantId) {
//       setRestaurantId(restaurantData.restaurantId);
//       localStorage.setItem("restaurantId", restaurantData.restaurantId);

//     }
//   };

//   // Logout function (clears everything)
//   const logout = () => {
//     setIsAuthenticated(false);
//     setUser(null);
//     setRestaurantId(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{ isAuthenticated, user, userLogin, restaurantLogin, logout, restaurantId }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Hook to use AuthContext
// export const useAuth = () => useContext(AuthContext);



import React, { createContext, useContext, useState, useEffect } from "react";


const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [restaurantId, setRestaurantId] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedRestaurantId = localStorage.getItem("restaurantId");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }

    if (storedRestaurantId) {
      setRestaurantId(storedRestaurantId);
      setIsAuthenticated(true);
    }
  }, []);

  // User login function
  const userLogin = (userData) => {
    console.log("User logged in:", userData);
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Save user in localStorage
  };

  // Restaurant login function
  const restaurantLogin = (restaurantData) => {
    console.log("Restaurant logged in:", restaurantData);
    setIsAuthenticated(true);
    if (restaurantData.restaurantId) {
      setRestaurantId(restaurantData.restaurantId);
      localStorage.setItem("restaurantId", restaurantData.restaurantId);
    }
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setRestaurantId(null);
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("restaurantId");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        userLogin,
        restaurantLogin,
        logout,
        restaurantId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
