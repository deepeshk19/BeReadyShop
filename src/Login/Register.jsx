import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import "./Register.css";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errorMessage, setErrorMessage] = useState(""); // For error messages
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = formData;
    
        // Validate passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            // Send POST request with axios
            const response = await axios.post(
                "http://localhost:8080/api/register", 
                { name, email, password },
                { headers: { "Content-Type": "application/json" } }  // Ensure the correct content type is set
            );
            
            // Handle the successful registration response
            if (response.status === 200) {
                alert("Registration Successful!");
                navigate("/login"); // Redirect to login page after successful registration
            }
        } catch (error) {
            // Handle errors such as CORS issues, validation errors, etc.
            if (error.response) {
                // Server responded with a status code outside of 2xx range
                setErrorMessage(error.response.data.message || "Registration failed");
            } else if (error.request) {
                // Request was made but no response was received
                setErrorMessage("No response from server.");
            } else {
                // Something else went wrong
                setErrorMessage("An error occurred: " + error.message);
            }
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2 style={{ color: "black" }}>Register</h2>
                {errorMessage && <p className="error-message" style={{ color: "red" }}>{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="register-btn">Sign Up</button>
                </form>
                <p style={{ color: "black" }} className="login-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
