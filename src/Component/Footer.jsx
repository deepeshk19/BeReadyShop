import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaVk, FaBehance } from "react-icons/fa";
import "./Footer.css"; // Importing CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Location */}
        <div className="footer-section">
          <h3>Location</h3>
          <p>580, BROADWAY, 10012 - NEW YORK, NY - U</p>
          <p>Tel. +1 2123431725</p>
          <p>Email: <a href="mailto:info@thememove.com">info@thememove.com</a></p>
          <div className="footer-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaVk />
            <FaBehance />
          </div>
        </div>

        {/* Help */}
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            {["How to Buy", "General Information", "Payment", "Shipping", "Returns", "Exchanges", "Gift Card", "My Account", "Watches"].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div className="footer-section">
          <h3>Policies</h3>
          <ul>
            {["Environmental Policy", "Animal Welfare", "Privacy Policy", "Purchase Conditions", "Gift Card Conditions", "Warranty on Watches"].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            {["About Us", "Offices", "Stores", "Work With Us", "Contact"].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© COPYRIGHT 2025. BE READY</p>
        <div className="payment-icons">
          <img src="https://www.logo.wine/a/logo/Visa_Inc./Visa_Inc.-Logo.wine.svg" alt="Visa" />
          <img src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15.fit_scale.size_1028x578.v1602794215.png" alt="PayPal" />
          {/* <img src="/images/2co.png" alt="2CO" /> */}
          <img src="https://webshoptiger.com/wp-content/uploads/2023/09/American-Express-Color-1024x576.png" alt="American Express" />
          {/* <img src="/images/skrill.png" alt="Skrill" /> */}
          <img src="https://logos-world.net/wp-content/uploads/2023/06/Western-Union-New-Logo.png" alt="Western Union" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
