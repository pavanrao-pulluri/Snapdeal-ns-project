import React from "react";
import logo from "../assets/images/snapdeallogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import "../assets/css/NavBar.css";

const NavBar = ({ onSearch }) => {
  const cartProducts = useSelector((state) => state.cart);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to={"/"}>
          <img src={logo} alt={"logo"} />
        </Link>
      </div>
      <div className="navbar-search">
        <div className="ui icon input" style={{ width: "90%" }}>
          <input
            type="text"
            placeholder="Search products & brands..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <i className="search link icon"></i>
        </div>
      </div>
      <div className="navbar-links">
        <Link className="navbar-link" to={"/cart"}>
          <i className="cart link icon"></i> Cart
          <div style={{ position: "fixed", top: "18px", marginLeft: "5px" }}>
            {cartProducts.length}
          </div>
        </Link>
        <Link className="navbar-link" to={"/login"}>
          <i className="user link icon"></i> Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
