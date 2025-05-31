import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>Maxi</span>Life.org
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Our Services</a>
        <a href="#">Health Talk</a>
        <a href="#">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
