import React from "react";
import "../App.css";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as Cal } from "../img/calculation.svg";
import { ReactComponent as Mes } from "../img/measering.svg";

const Navbar = () => {
    return (
      <div className="navbar">
        <div className="logo">
          <Logo/>
        </div>
        <ul className="menu">
          <li>Services</li>
          <li>Products</li>
          <li>About us</li>
          <li>Portfolio</li>
          <li>FAQ</li>
          <li>Contacts</li>
        </ul>
        <div className="actions">
          <button className="btn orange-btn"><Cal/>   Make request</button>
          <button className="btn purple-btn"><Mes/>   Calculation</button>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  
  