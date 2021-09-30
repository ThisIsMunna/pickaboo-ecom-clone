import React from "react";

import "./Footer.css";

const FooterOptions = () => {
  return (
    <div className="footerOptionsWrapper textCenter">
      <div className="footerOptionsTitle">ABOUT</div>
      <div className="footerOptions ">
        <a>About Us</a>
        <a>Privacy Policy</a>
        <a href="">Cookie Policy</a>
        <a href="">Why Shop With Us</a>
        <a href="">Terms {`&`} Conditions</a>
        <a href="">Help</a>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footer">
          <FooterOptions/>
      </div>
    </div>
  );
};

export default Footer;
