// import React, { createContext, useState, useEffect } from "react";

// // Create Context
// export const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   // Load cart from localStorage
//   const getCartFromStorage = () => {
//     const savedCart = localStorage.getItem("cart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   };

//   // Cart state
//   const [cart, setCart] = useState(getCartFromStorage());

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // Function to add item to cart (prevents duplicates, increases quantity if exists)
//   const addToCart = (item) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((cartItem) => cartItem._id === item._id);

//       if (existingItem) {
//         return prevCart.map((cartItem) =>
//           cartItem._id === item._id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         );
//       } else {
//         return [...prevCart, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   // Function to remove item from cart
//   const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item._id !== id));
//   };

//   // Function to clear cart after order
//   const clearCart = () => {
//     setCart([]);
//   };

//   // Function to increase quantity of an item
//   const increaseQuantity = (id) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item._id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   // Function to decrease quantity of an item (removes if quantity is 1)
//   const decreaseQuantity = (id) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((item) =>
//           item._id === id
//             ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0) // Remove items with quantity 0
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;


import React, { createContext, useState, useEffect } from "react";

// Create Context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Load cart from localStorage
  const getCartFromStorage = () => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  };

  const getRestaurantIdFromStorage = () => {
    return localStorage.getItem("restaurantId") || null;
  };

  // Cart state
  const [cart, setCart] = useState(getCartFromStorage());
  const [restaurantId, setRestaurantId] = useState(getRestaurantIdFromStorage());

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Save restaurantId to localStorage whenever it changes
  useEffect(() => {
    if (restaurantId) {
      localStorage.setItem("restaurantId", restaurantId);
    } else {
      localStorage.removeItem("restaurantId");
    }
  }, [restaurantId]);

  // Function to add item to cart
  // const addToCart = (item) => {
  //   if (!restaurantId) {
  //     setRestaurantId(item.restaurantId); // Set restaurant ID on first item
  //   } else if (restaurantId !== item.restaurantId) {
  //     alert("You can only order from one restaurant at a time!");
  //     return;
  //   }

  //   setCart((prevCart) => {
  //     const existingItem = prevCart.find((cartItem) => cartItem._id === item._id);

  //     if (existingItem) {
  //       return prevCart.map((cartItem) =>
  //         cartItem._id === item._id
  //           ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //           : cartItem
  //       );
  //     } else {
  //       return [...prevCart, { ...item, quantity: 1 }];
  //     }
  //   });
  // };


  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem._id === item._id);
  
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };
  

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item._id !== id);
      if (updatedCart.length === 0) setRestaurantId(null); // Clear restaurant ID if cart is empty
      return updatedCart;
    });
  };

  // Function to clear cart after order
  const clearCart = () => {
    setCart([]);
    setRestaurantId(null);
  };

  // Function to increase quantity of an item
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease quantity of an item (removes if quantity is 1)
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item._id === id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, restaurantId, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
