import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import styles

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">The Food Basket</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
