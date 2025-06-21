import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import "./component/Cart.css";

const libraries = ["places"];
const mapApiKey = "AIzaSyC8LMcc56eb5ICbCXvZA2RKEQgBhso1kO0"; // ✅ Replace with your actual API Key

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [autocomplete, setAutocomplete] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [loadingLocation, setLoadingLocation] = useState(false);

  // 🏡 Handle Google Places Autocomplete Selection
  const handlePlaceSelect = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      setAddress(place.formatted_address);
    }
  };

  // 📍 Get Current Location Using Geolocation API
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${mapApiKey}`
          );
          const formattedAddress =
            response.data.results[0]?.formatted_address || "Location not found";
          setAddress(formattedAddress);
        } catch (error) {
          console.error("Error fetching address:", error);
          alert("Failed to fetch address.");
        } finally {
          setLoadingLocation(false);
        }
      },
      (error) => {
        console.error("Error getting location:", error);
        alert("Could not retrieve location.");
        setLoadingLocation(false);
      }
    );
  };

  // 🏷️ Apply Coupon Code
  const applyCoupon = () => {
    if (couponCode === "SAVE10") {
      setDiscount(10);
      alert("Coupon Applied: $10 discount!");
    } else {
      setDiscount(0);
      alert("Invalid Coupon Code!");
    }
  };

  // 🛒 Calculate Pricing
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryFee = 87;
  const platformFee = 10.007;
  const gstCharges = 7.76;
  const totalPay =
    totalPrice + deliveryFee + platformFee + gstCharges - discount;

  // ✅ Place Order
  // const placeOrder = () => {
  //   // if (!address.trim()) {
  //   //   alert("Please enter a delivery address!");
  //   //   return;
  //   // }

  //   axios
  //     .post("http://localhost:5000/api/orders", { items: cart, address })
  //     .then(() => {
  //       alert("Order Placed Successfully!");
  //       clearCart();
  //       navigate("/");
  //     })
  //     .catch((error) => console.error("Error placing order:", error));
  // };

  // const placeOrder = () => {
  //   const userId = localStorage.getItem("userId");
  //   const restaurantId = localStorage.getItem("restaurantId"); // Replace with restaurant ID
    
  //   // if (!address.trim()) {
  //   //   alert("Please enter a delivery address!");
  //   //   return;
  //   // }
  
  //   axios
  //     .post("http://localhost:5000/api/orders", {
  //       userId,
  //       restaurantId,
  //       items: cart,
  //       totalAmount: totalPay,
  //       address,
  //       paymentMethod: "Cash on Delivery", // Default, can change
  //     })
  //     .then((response) => {
  //       alert(response.data.message);
  //       clearCart();
  //       // navigate("/home");
  //     })
  //     .catch((error) => {
  //       console.error("Error placing order:", error.response?.data || error.message);
  //       alert("Error placing order. Please try again.");
  //     });
  // };
  
  // const placeOrder = () => {
  //   const userId = localStorage.getItem("userId");
  
  //   // Group cart items by restaurantId
  //   const ordersByRestaurant = cart.reduce((acc, item) => {
  //     if (!acc[item.restaurantId]) {
  //       acc[item.restaurantId] = [];
  //     }
  //     acc[item.restaurantId].push(item);
  //     return acc;
  //   }, {});
  
  //   // Send separate requests for each restaurant's order
  //   const orderPromises = Object.keys(ordersByRestaurant).map(async (restaurantId) => {
  //     return axios.post("http://localhost:5000/api/orders", {
  //       userId,
  //       restaurantId,
  //       items: ordersByRestaurant[restaurantId],
  //       totalAmount: ordersByRestaurant[restaurantId].reduce((total, item) => total + item.price * item.quantity, 0),
  //       address,
  //       paymentMethod: "Cash on Delivery",
  //     });
  //   });
  
  //   // Execute all order requests
  //   Promise.all(orderPromises)
  //     .then((responses) => {
  //       alert("Orders placed successfully!");
  //       clearCart(); // Clear only the ordered items
  //     })
  //     .catch((error) => {
  //       console.error("Error placing order:", error.response?.data || error.message);
  //       alert("Error placing order. Please try again.");
  //     });
  // };

  const placeOrder = () => {
    const userId = localStorage.getItem("userId");
  
    // Group cart items by restaurant
    const restaurantOrders = cart.reduce((acc, item) => {
      if (!acc[item.restaurantId]) {
        acc[item.restaurantId] = { restaurantId: item.restaurantId, items: [], totalAmount: 0 };
      }
      acc[item.restaurantId].items.push({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        category: item.category,
        img: item.img,
      });
      acc[item.restaurantId].totalAmount += item.price * item.quantity;
      return acc;
    }, {});
  
    // Convert to an array
    const orders = Object.values(restaurantOrders).map(order => ({
      ...order,
      address: "123 Street, City, Country", // Use the actual address input
      paymentMethod: "Cash on Delivery", // Change if needed
      orderGroupId: `ORD${Date.now()}` // Unique order group
    }));
  
    axios.post("http://localhost:5000/api/orders", { userId, orders })
      .then(response => {
        alert(response.data.message);
        clearCart();
      })
      .catch(error => {
        console.error("Error placing order:", error.response?.data || error.message);
        alert("Error placing order. Please try again.");
      });
  };
  
  

  return (
    <div className="container my-4">
      <div className="row">
        {/* Right Side - Cart Summary */}
        <div className="col-md-7">
          <div className="card cart-card">
            <div className="card-body">

              {cart.length > 0 ? (
                <>
                  <table className="table table-responsive-sm text-center">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Name</th>
                        {/* <th>Category</th> */}
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody className="table-group-divider table-body">
                      {cart.map((item, index) => (
                        <tr key={item._id}>
                          <td>
                            <img
                              className="cart-item-img"
                              src={item.image}
                              alt="not display"
                            />
                          </td>
                          <td>{item.name}</td>
                          {/* <td>{item.category}</td> */}
                          <td>
                            <div className="quantity-control">
                              <button
                                className="quantity-btn decrease"
                                aria-label="Decrease quantity"
                                onClick={() => decreaseQuantity(item._id)}
                              >
                                -
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                className="quantity-btn increase"
                                aria-label="Increase quantity"
                                onClick={() => increaseQuantity(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td>₹{(item.price * item.quantity).toFixed(2)}</td>{" "}
                          <span
                            className="d-inline-block pt-4"
                            onClick={() => removeFromCart(item._id)}
                          >
                            <i className="fa-solid fa-trash trash_icon"></i>
                          </span>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <hr />

                  {/* Coupon Code */}
                  <div className="d-flex">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Coupon Code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button
                      className="btn btn-primary ms-2"
                      onClick={applyCoupon}
                    >
                      Apply
                    </button>
                  </div>

                  {/* Bill Details */}
                  <h6 className="fw-bold mt-3">Bill Details</h6>
                  <div className="d-flex justify-content-between">
                    <span>Item Total</span>
                    <span> ₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Delivery Fee</span>
                    <span> ₹{deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Platform Fee</span>
                    <span> ₹{platformFee.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>GST & Charges</span>
                    <span> ₹{gstCharges.toFixed(2)}</span>
                  </div>

                  {/* Discount Section */}
                  {discount > 0 && (
                    <div className="d-flex justify-content-between text-success">
                      <span>Coupon Discount</span>
                      <span>- ₹{discount.toFixed(2)}</span>
                    </div>
                  )}

                  <hr />
                  <div className="d-flex justify-content-between fw-bold">
                    <span>TO PAY</span>
                    <span> ₹{totalPay.toFixed(2)}</span>
                  </div>

                  <button
                    className="btn btn-success w-100 mt-3"
                    onClick={placeOrder}
                  >
                    Checkout ✅
                  </button>
                </>
              ) : (
                <p>No items in cart.</p>
              )}
            </div>
          </div>
        </div>
        

        {/* Left Side - Address & Payment */}
        <div className="col-md-5">
          {/* Delivery Address */}
          <div className="card mb-3 cart-card">
            <div className="card-body">
              <h5 className="card-title">Delivery Address</h5>
              {/* <LoadScript googleMapsApiKey={mapApiKey} libraries={libraries}>
                <Autocomplete
                  onLoad={setAutocomplete}
                  onPlaceChanged={handlePlaceSelect}
                > */}
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter delivery address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                {/* </Autocomplete>
              </LoadScript> */}
              <button
                className="btn btn-primary w-100"
                // onClick={getCurrentLocation}
                // disabled={loadingLocation}
              >
                {loadingLocation
                  ? "Getting Location..."
                  : "📍 Use Current Location"}
              </button>
            </div>
          </div>

          {/* Payment Section */}
          <div className="card cart-card">
            <div className="card-body">
              <h5 className="card-title">Payment Method</h5>
              <select className="form-select mb-2">
                <option>Cash on Delivery</option>
                <option>Credit/Debit Card</option>
                <option>UPI / PayTM</option>
              </select>
              <button className="btn btn-success w-100" onClick={placeOrder}>
                Pay Now 💳
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
