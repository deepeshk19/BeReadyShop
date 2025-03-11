import React from "react";
import { Link } from "react-router-dom";

const TopBar = ({ isLoggedIn, userEmail }) => {
  return (
    <div className="top-bar">
      {isLoggedIn ? (
        <span>WELCOME, {userEmail}!</span>
      ) : (
        <span>
          WELCOME GUEST! <Link to="/login">LOG IN</Link> OR <Link to="/register">REGISTER</Link>
        </span>
      )}
    </div>
  );
};

export default TopBar;
