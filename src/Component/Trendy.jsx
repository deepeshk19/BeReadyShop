import React from "react";
import { Truck, Gift, Tag } from "lucide-react"; 
import "./Trendy.css";

const Trendy = () => {
  return (
    <div className="trendy-container">
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-item red">
            <Truck size={18} /> FREE SHIPPING WORLDWIDE
        </div>
        <div className="announcement-item gold">
            <Gift size={18} /> GIVEAWAY EVERY WEEK
        </div>
        <div className="announcement-item blue">
            <Tag size={18} /> SALE UP TO 70% OFF ON TUESDAY
        </div>
        </div>

      {/* Section Title */}
      <div className="trendy-title">
        <h2>TRENDY CLOTHING</h2>
        <p style={{display: 'block', margin:'0 auto', textAlign:'center'}}>Trending</p>
      </div>

      {/* Category Tabs */}
      <div className="trendy-tabs">
        <span className="active">FEATURES</span>
        <span>MEN STYLE</span>
        <span>WOMEN STYLE</span>
        <span>KID STYLE</span>
      </div>

      {/* Products Grid */}
      <div className="trendy-products">
        <div className="product">
          <img src="/clothes1.webp" alt="Handmade Flared Jacket" />
          <p>HANDMADE FLARED JACKET</p>
          <span className="price">189.99 USD</span>
          <button>ADD TO CART</button>
        </div>

        <div className="product">
          <img src="/clothes2.webp" alt="Coat with Wool Wraparound Collar" />
          <span className="discount">-25%</span>
          <p>COAT WITH WOOL</p>
          <span className="old-price">189.99 USD</span>
          <span className="price">100.99 USD</span>
          <button>ADD TO CART</button>
        </div>

        <div className="product">
          <img src="/clothes4.webp" alt="Utility Jacket" />
          <p>UTILITY JACKET</p>
          <span className="price">189.99 USD</span>
          <button>ADD TO CART</button>
        </div>

        <div className="product">
          <img src="/clothes5.webp" alt="Animal Print Coat" />
          <p>ANIMAL PRINT COAT</p>
          <span className="price">189.99 USD</span>
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Trendy;