import React from "react";
import Logo from "../../assets/logo.svg";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo" />
      <div>
        <ul style={{ listStyleType: "none", display: "flex" }}>
          <li>Home</li>
          <li>Attorneys</li>
          <li>Pratice Areas</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="button">Contact Now</div>
    </div>
  );
}
