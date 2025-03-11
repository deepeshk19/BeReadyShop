import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h2 style={{color:"pink"}} className="contact-title">Get in Touch</h2>
      <p style={{color:"black"}} className="contact-subtitle">
        We'd love to hear from you! Fill out the form below 
      </p>

      <div className="contact-box">
        {submitted ? (
          <p className="success-message">Thank you for reaching out! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="contact-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-input"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="contact-textarea"
            />
            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        )}
      </div>

      <div className="social-icons">
        <FaFacebookF className="icon" />
        <FaTwitter className="icon" />
        <FaInstagram className="icon" />
        <FaBehance className="icon" />
      </div>

      <div className="contact-info">
        <p><FaEnvelope /> contact@yourapp.com</p>
        <p><FaPhone /> +123 456 7890</p>
      </div>
    </div>
  );
};

export default Contact;
