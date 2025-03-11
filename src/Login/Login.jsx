import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios"; 
import "./Login.css";
import { checkLoginStatus } from "../Utils/authUtils"; // ✅ Import function from authUtils.js

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
        const response = await axios.post("http://localhost:8080/api/login/authenticate", {
            email,
            password
        }, { withCredentials: true });

        console.log("Login Response:", response.data);

        if (response.data.message === "Login successful!") {
            alert("Login Successful");
            await checkLoginStatus(); // ✅ Fetch updated session data
            navigate("/dashboard");
        } else {
            setError("Invalid credentials!");
        }
    } catch (err) {
        setError("Error logging in. Please try again.");
        console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 style={{ color: 'black' }}>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p style={{ color: 'black' }} className="signup-link">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
