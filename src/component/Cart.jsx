// import React, { useState, useEffect } from "react";
// import "./Cart.css";

// const Cart = ({ cart, showMenu, deleteItem }) => {
//   const [quantities, setQuantities] = useState(cart.map(() => 1)); // Set initial quantity for each item
//   const [total, setTotal] = useState(0);

//   const handleIncrease = (index) => {
//     setQuantities((prevQuantities) =>
//       prevQuantities.map((quantity, i) => (i === index && quantity < 10 ? quantity + 1 : quantity))
//     );
//   };

//   const handleDecrease = (index) => {
//     setQuantities((prevQuantities) =>
//       prevQuantities.map((quantity, i) => (i === index && quantity > 1 ? quantity - 1 : quantity))
//     );
//   };

//   const handleChange = (index, value) => {
//     const intValue = parseInt(value, 10);
//     if (!isNaN(intValue) && intValue >= 1 && intValue <= 10) {
//       setQuantities((prevQuantities) =>
//         prevQuantities.map((quantity, i) => (i === index ? intValue : quantity))
//       );
//     }
//   };

//   useEffect(() => {
//     const newTotal = cart.reduce((accum, item, index) => {
//       return accum + parseFloat(item.price) * quantities[index];
//     }, 0);
//     setTotal(newTotal);
//   }, [cart, quantities]);

//   return (
//     <>
//       {cart.length === 0 ? (
//         <div className="empty-page d-flex flex-column justify-content-center align-items-center">
//           <h1 className="empty-header">Cart Is Empty</h1>
//           <i className="fa-regular fa-face-frown sad-icon"></i>
//         </div>
//       ) : (
//         <div className="container table-responsive">
//           <table className="table table-responsive-sm text-center">
//             <thead>
//               <tr>
//                 <th>Product</th>
//                 <th>Name</th>
//                 <th>Category</th>
//                 <th>Quantity</th>
//                 <th>Price</th>
//               </tr>
//             </thead>
//             <tbody className="table-group-divider table-body">
//               {cart.map((item, index) => (
//                 <tr key={index}>
//                   <td>
//                     <img className="cart-item-img" src={item.image} alt="not display" />
//                     <span className="m-5" onClick={() => deleteItem(index)}>
//                       <i className="fa-solid fa-trash"></i>
//                     </span>
//                   </td>
//                   <td>{item.name}</td>
//                   <td>{item.category}</td>
//                   <td>
//                     <div className="quantity-control">
//                       <button
//                         className="quantity-btn decrease"
//                         aria-label="Decrease quantity"
//                         onClick={() => handleDecrease(index)}
//                       >
//                         -
//                       </button>
//                       <input
//                         type="text"
//                         className="quantity-display quantity"
//                         value={quantities[index]}
//                         onChange={(e) => handleChange(index, e.target.value)}
//                         aria-live="polite"
//                         aria-label="Current quantity"
//                       />
//                       <button
//                         className="quantity-btn increase"
//                         aria-label="Increase quantity"
//                         onClick={() => handleIncrease(index)}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </td>
//                   <td>{(quantities[index] * parseFloat(item.price)).toFixed(2)}</td>
//                 </tr>
//               ))}
//             </tbody>
//             <tfoot className="tfooter">
//               <tr>
//                 <td colSpan="4">Total</td>
//                 <td>{total.toFixed(2)}</td>
//               </tr>
//             </tfoot>
//           </table>
//         </div>
//       )}

//       <div onClick={showMenu}>
//         <div className="text-center mt-5">
//           <h3 className="btn btn-outline-dark">Return to Menu</h3>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;


import React, { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import { jsPDF } from "jspdf";
import axios from "axios";
import "./Cart.css";

const Cart = ({ cart, showMenu, deleteItem}) => {
  const [quantities, setQuantities] = useState(cart.map(() => 1)); // Set initial quantity for each item
  const [total, setTotal] = useState(0);
  const { user } = useAuth();

  const handleIncrease = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) => (i === index && quantity < 10 ? quantity + 1 : quantity))
    );
  };

  const handleDecrease = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) => (i === index && quantity > 1 ? quantity - 1 : quantity))
    );
  };

  const handleChange = (index, value) => {
    const intValue = parseInt(value, 10);
    if (!isNaN(intValue) && intValue >= 1 && intValue <= 10) {
      setQuantities((prevQuantities) =>
        prevQuantities.map((quantity, i) => (i === index ? intValue : quantity))
      );
    }
  };

  // useEffect(() => {
  //   const newTotal = cart.reduce((accum, item, index) => {
  //     return accum + parseFloat(item.price) * quantities[index];
  //   }, 0);
  //   setTotal(newTotal);
  // }, [cart, quantities]);

  // // Checkout function
  // const handleCheckout = async () => {
  //   try {
  //     const response = await axios.post('/api/orders', {
  //       userId: user._id,  // Make sure user is passed in as a prop
  //       items: cart.map((item, index) => ({
  //         name: item.name,
  //         price: item.price,
  //         quantity: quantities[index],
  //         image: item.image
  //       })),
  //       totalAmount: total
  //     });
  //     alert('Order placed successfully!');
  //   } catch (error) {
  //     console.error('Error placing order:', error);
  //     alert('Failed to place order.');
  //   }
  // };

  useEffect(() => {
    const newTotal = cart.reduce((accum, item, index) => {
      return accum + parseFloat(item.price) * quantities[index];  
    }, 0);
    setTotal(newTotal);
  }, [cart, quantities]);

  const handleCheckout = async () => {
    if (!user) {
      alert("Please log in to place an order.");
      return;
    }

    try {
      const orderData = {
        userId: user._id,
        items: cart.map((item, index) => ({
          name: item.name,
          quantity: quantities[index],
          price: parseFloat(item.price.replace('₹', '').trim()), // Convert to float

        })),
        totalAmount: parseFloat(total), // Ensure totalAmount is a number
      };
      console.log("Order data to be sent:", orderData); // Log order data
      const response = await axios.post("http://localhost:5000/api/orders", orderData);
      alert("Order placed successfully!");
      const orderId = response.data._id;
       // Generate PDF receipt
    const doc = new jsPDF();
    doc.setFontSize(25);
    doc.text('Receipt', 105, 20, null, null, 'center');
    doc.setFontSize(16);
    doc.text(`User: ${user.name}`, 10, 40);
    doc.text(`Order ID: ${orderId}`, 10, 50);
    doc.text('Items Ordered:', 10, 60);

    let yPosition = 70; // Start position for items
    response.data.items.forEach(item => {
      doc.text(`- ${item.name} (Qty: ${item.quantity}) - Price: ${item.price}`, 10, yPosition);
      yPosition += 10; // Move down for the next item
    });

    doc.text(`Total Amount: $${response.data.totalAmount}`, 10, yPosition + 10);
    doc.text('Thank you for your order!', 10, yPosition + 20);

    // Save the PDF
    doc.save(`Receipt-${orderId}.pdf`);

    alert("Order placed successfully! Your receipt is being downloaded.");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };


  return (
    <>
      {cart.length === 0 ? (
        <div className="empty-page d-flex flex-column justify-content-center align-items-center">
          <h1 className="empty-header">Cart Is Empty</h1>
          <i className="fa-regular fa-face-frown sad-icon"></i>
        </div>
      ) : (
        <div className="container table-responsive">
          <table className="table table-responsive-sm text-center">
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody className="table-group-divider table-body">
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img className="cart-item-img" src={item.image} alt="not display" />
                    <span className="m-5" onClick={() => deleteItem(index)}>
                      <i className="fa-solid fa-trash"></i>
                    </span>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>
                    <div className="quantity-control">
                      <button
                        className="quantity-btn decrease"
                        aria-label="Decrease quantity"
                        onClick={() => handleDecrease(index)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="quantity-display quantity"
                        value={quantities[index]}
                        onChange={(e) => handleChange(index, e.target.value)}
                        aria-live="polite"
                        aria-label="Current quantity"
                      />
                      <button
                        className="quantity-btn increase"
                        aria-label="Increase quantity"
                        onClick={() => handleIncrease(index)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>{(quantities[index] * parseFloat(item.price)).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="tfooter">
              <tr>
                <td colSpan="4">Total</td>
                <td>{total.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
          <div className="text-center">
            <button className="btn btn-success mt-3" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}
      <div onClick={showMenu}>
        <div className="text-center mt-5">
          <h3 className="btn btn-outline-dark">Return to Menu</h3>
        </div>
      </div>
    </>
  );
};

export default Cart;
