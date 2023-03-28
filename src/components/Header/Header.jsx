import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
      <a href="/shop">shop</a>
      <a href="/order">Order</a>
      <a href="/Inventory">Inventory</a>
      <a href="/login">login</a>
      </div>
    </nav>
  );
};

export default Header;
