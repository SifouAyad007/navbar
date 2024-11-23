import React from "react";
import '../App.css'

import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as Calculation } from "../img/calculation.svg";
import { ReactComponent as Measering } from "../img/measering.svg";


const Menu = ({Menu_items}) => {
    return (
      <div className="nav">
        <div className="logo">
          <Logo/>
        </div>
        <ul className="menu">
          <li><a href={Menu_items[0]+".html"}> {Menu_items[0]} </a></li>
          <li><a href={Menu_items[1]+".html"}> {Menu_items[1]} </a></li>
          <li><a href={Menu_items[2]+".html"}> {Menu_items[2]} </a></li>
          <li><a href={Menu_items[3]+".html"}> {Menu_items[3]} </a></li>
          <li><a href={Menu_items[4]+".html"}> {Menu_items[4]} </a></li>
          <li><a href={Menu_items[5]+".html"}> {Menu_items[5]} </a></li>
        </ul>
        <div className="actions">
          <button className="btn orange-btn"><Calculation/>   Make request</button>
          <button className="btn purple-btn"><Measering/>   Calculation</button>
        </div>
      </div>
    );
  };
  
  export default Menu;