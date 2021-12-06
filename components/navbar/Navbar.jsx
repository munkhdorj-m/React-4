import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="navbar">
      <div to="/" className="navbar-item">
        Home
      </div>
      <div to="/about" className="navbar-item">
        About
      </div>
      <div to="/portfolio" className="navbar-item">
        Portfolio
      </div>
      <div to="/shop" className="navbar-item">
        Shop
      </div>
      <div to="/blog" className="navbar-item">
        Blog
      </div>
      <div to="/contact" className="navbar-item">
        Contact
      </div>
    </section>
  );
};

export default Navbar;
