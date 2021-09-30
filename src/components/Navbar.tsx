import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="buttonContainer">
        <button className="navbarButton">SMARTPHONES</button>
        <button className="navbarButton">ELECTRONIC {`&`} APPLIANCES</button>
        <button className="navbarButton">MOBILE ACCESSORIES</button>
        <button className="navbarButton">COMPUTER {`&`} ACCESSORIES</button>
        <button className="navbarButton">LIFESTYLE</button>
      </div>
    </div>
  );
};

export default Navbar;
