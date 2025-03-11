import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Checkout.css";
import Footer from "../Component/Footer";

const Checkout = () => {
  const location = useLocation();
  const cart = location.state?.cart || {}; // ✅ Get cart data safely
  const [showForm, setShowForm] = useState(false); // ✅ State to manage form visibility
  const [loading, setLoading] = useState(0); // ✅ Loading progress
  const [orderPlaced, setOrderPlaced] = useState(false); // ✅ Order confirmation state
  const [orderDetails, setOrderDetails] = useState({}); // ✅ Store order details

  // Calculate total price safely
  const totalPrice = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity * (parseFloat(item.price) || 0), // ✅ Ensure valid number
    0
  );

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setLoading(0);
  
    // Capture form data
    const formData = new FormData(e.target);
    const details = {
      fullName: formData.get("fullName"),
      address: formData.get("address"),
      phone: formData.get("phone"),
      paymentMethod: formData.get("paymentMethod"),
    };
  
    setOrderDetails(details);
  
    // Prepare order payload
    const checkoutItems = Object.values(cart).map((item) => ({
      userId: 2, // Replace with actual user ID
      quantity: item.quantity,
      shop: { productId: item.id }, // Ensure correct productId
      totalPrice: item.quantity * parseFloat(item.price),
      paymentMethod: details.paymentMethod,
    }));
  
    try {
      const response = await fetch("http://localhost:8080/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(checkoutItems),
      });
    
      const responseText = await response.text(); // Read response as text
      let responseData;
    
      try {
        responseData = JSON.parse(responseText); // Attempt to parse JSON
      } catch (error) {
        responseData = { message: responseText }; // Use raw text if JSON parsing fails
      }
    
      console.log("Server Response:", responseData);
    
      if (response.ok) {
        setLoading(100);
        setTimeout(() => {
          setOrderPlaced(true);
        }, 500);
      } else {
        alert(`Error: ${responseData.message || "Failed to place order"}`);
      }
    } catch (error) {
      console.error("Order failed:", error);
      alert("Something went wrong. Please check console logs.");
    }
    
  };
  
  

  // const handlePlaceOrder = (e) => {
  //   e.preventDefault();
  //   setLoading(0);

  //   // Capture form data
  //   const formData = new FormData(e.target);
  //   const details = {
  //     fullName: formData.get("fullName"),
  //     address: formData.get("address"),
  //     phone: formData.get("phone"),
  //     paymentMethod: formData.get("paymentMethod"),
  //   };

  //   setOrderDetails(details);

  //   // Simulate loading progress
  //   const intervals = [20, 60, 100];
  //   let index = 0;

  //   const loadingInterval = setInterval(() => {
  //     setLoading(intervals[index]);
  //     index++;

  //     if (index === intervals.length) {
  //       clearInterval(loadingInterval);
  //       setTimeout(() => {
  //         setOrderPlaced(true);
  //       }, 500); // Small delay before showing order details
  //     }
  //   }, 1000);
  // };

  return (
    <>
    <div className="checkout-container">
      <h2 style={{marginBottom:'20px'}}>Checkout 🛍️</h2>
      {Object.keys(cart).length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {Object.values(cart).map((item) => (
            <div className="checkout-item" key={item.id}>
              <img src={item.imgUrl} alt={item.name} className="checkout-image" />
              <div className="checkout-details">
                <h3>{item.name}</h3>
                <p>Price: ${(parseFloat(item.price) || 0).toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <p className="checkout-total">Total Price: ${totalPrice.toFixed(2)}</p>

          {/* Confirm Purchase Button */}
          {!showForm && !orderPlaced && (
            <button className="confirm-button" onClick={() => setShowForm(true)}>
              Confirm Purchase
            </button>
          )}

          {/* Delivery Details Form */}
          {showForm && !orderPlaced && (
            <div className="delivery-form">
              <h3>Delivery Details 🚚</h3>
              <form onSubmit={handlePlaceOrder}>
                <label>
                  Full Name:
                  <input type="text" name="fullName" required />
                </label>

                <label>
                  Address:
                  <textarea name="address" required />
                </label>

                <label>
                  Phone Number:
                  <input type="tel" name="phone" required />
                </label>

                <label>
                  Payment Method:
                  <select name="paymentMethod">
                    <option value="cod">Cash on Delivery</option>
                    <option value="online">Online Payment</option>
                  </select>
                </label>

                <button type="submit">Place Order</button>
              </form>
            </div>
          )}

          {/* Loading Progress */}
          {loading > 0 && loading < 100 && (
            <div className="loading-bar">
              <p>Processing Order... {loading}%</p>
              <div className="progress" style={{ width: `${loading}%` }}></div>
            </div>
          )}

          {/* Order Confirmation */}
          {orderPlaced && (
            <div className="order-confirmation">
              <h3>🎉 Your Order has been Placed Successfully! 🎉</h3>
              <p>Total Amount: ${totalPrice.toFixed(2)}</p>
              <p>Estimated Delivery: 3-5 Days</p>
              <h4>Delivery Address:</h4>
              <p><strong>Name:</strong> {orderDetails.fullName}</p>
              <p><strong>Address:</strong> {orderDetails.address}</p>
              <p><strong>Phone:</strong> {orderDetails.phone}</p>
              <p><strong>Payment Method:</strong> {orderDetails.paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}</p>
            </div>
          )}
        </>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Checkout;
