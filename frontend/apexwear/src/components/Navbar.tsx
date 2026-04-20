import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <img className="nav-logo-img" src="/apex-word-logo.png" alt="Apex Wear" />

      {/* Links - Toggle class based on state */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#" onClick={() => setIsOpen(!isOpen)}>Shop</a>
        </li>
        <li>
          <a href="#" onClick={() => setIsOpen(!isOpen)}>T-Shirts</a>
        </li>
        <li>
          <a href="#" onClick={() => setIsOpen(!isOpen)}>Stringers</a>
        </li>
        <li>
          <a href="#" onClick={() => setIsOpen(!isOpen)}>Joggers</a>
        </li>

        <li>
          <a href="#" onClick={() => setIsOpen(!isOpen)}>My Account</a>
        </li>
        <li>
          <a href="#" onClick={() => setIsOpen(!isOpen)}>Wishlist</a>
        </li>
        <li>
          <a href="#" onClick={() => setIsOpen(!isOpen)}>Orders</a>
        </li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        <div className="nav-icons">
          <IoSearch className="nav-icon" />
          <MdOutlineShoppingCart className="nav-icon" />
        </div>
        {/* Hamburger icon for mobile */}
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
