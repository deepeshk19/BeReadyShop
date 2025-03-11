import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  // Function to remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId].quantity > 1) {
        updatedCart[productId].quantity -= 1;
      } else {
        delete updatedCart[productId];
      }
      return updatedCart;
    });
  };

  // Function to add item to cart
  const addToCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]) {
        updatedCart[productId].quantity += 1;
      }
      return updatedCart;
    });
  };

  // Calculate total items in cart
  const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);

  // Calculate total price safely
  const totalPrice = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity * (parseFloat(item.price) || 0), // ✅ Ensure valid number
    0
  );

  return (
    <div className="cart-container">
      <h2>Shopping Cart 🛒</h2>
      {totalItems === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {Object.values(cart).map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.imgUrl} alt={item.name} className="cart-image" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Price: ${(parseFloat(item.price) || 0).toFixed(2)}</p> {/* ✅ Ensure valid number */}
                <p>Quantity: {item.quantity}</p>
                <div className="cart-buttons">
                  <button className="minus-button" onClick={() => removeFromCart(item.id)}>
                    ➖
                  </button>
                  <button className="plus-button" onClick={() => addToCart(item.id)}>
                    ➕
                  </button>
                </div>
              </div>
            </div>
          ))}
          <p className="total">Total Items: {totalItems}</p>
          <p className="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
          <button
            className="checkout-button"
            onClick={() => navigate("/checkout", { state: { cart } })} // ✅ Pass cart data correctly
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
