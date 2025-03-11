import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";
import { checkLoginStatus } from "../Utils/authUtils"; // ✅ Correct import

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchLoginStatus = async () => {
      const email = await checkLoginStatus(); // ✅ Use the imported function
      if (email) {
        setIsLoggedIn(true);
        setUserEmail(email);
      } else {
        setIsLoggedIn(false);
        setUserEmail("");
      }
    };
    fetchLoginStatus();
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      console.log("LocalStorage changed:", localStorage.getItem("isLoggedIn"));
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
      setUserEmail(localStorage.getItem("userEmail") || "");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8080/api/login/logout", {}, { withCredentials: true });

      console.log("Logout successful");

      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userEmail");
      setIsLoggedIn(false);
      setUserEmail("");
      setMenuOpen(false);

      window.location.href = "/login";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src="/1.jpg" alt="BeReady" />
        </div>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`} onClick={() => setMenuOpen(false)}>
          <li><Link to="/dashboard">HOME ▼</Link></li>
          <li><Link to="/shop">SHOP ▼</Link></li>
          <li><Link to="/blog">BLOG ▼</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>

        {isLoggedIn && <p className="user-email">Welcome, {userEmail}</p>}

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
          {menuOpen && (
            <div className="dropdown-menu">
              {!isLoggedIn ? (
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/login" className="dropdown-link" onClick={() => setMenuOpen(false)}>
                    Login
                  </Link>
                  <Link to="/register" className="dropdown-link" onClick={() => setMenuOpen(false)}>
                    Register
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
