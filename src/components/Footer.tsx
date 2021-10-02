import React from "react";
import playStoreLogo from "./../images/getItOnPlayStore.png"
import appStoreLogo from "./../images/getItOnAppStore.png"
import "./Footer.css";

interface Props{
    num: number;
}
const footerData = [
    {
        title: "ABOUT",
        options: ["About Us", "Privacy Policy", "Cookie Policy", "Why Shop With Us", "Terms & Conditions", "Help"]
    },
    {
        title: "CONTACT",
        options: ["Contact Us"]
    },
    {
        title: "PICKABOO",
        options: ["House 10, Road 12", "Block F, Niketan, Gulshan 1,",  "Dhaka - 1212, Bangladesh", "+8809666745745"]
    }
]

const FooterOptions = ({num}: Props) => {
  return (
    <div className={`footerOptionsWrapper ${footerData[num].title === "ABOUT" || footerData[num].title === "CONTACT"? "textCenter": ""}`}>
      <div className="footerOptionsTitle">{footerData[num].title}</div>
      <div className="footerOptions ">
          {footerData[num].options.map(option =>( 
              <a>{option}</a>
          ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footer">
          {footerData.map((obj, idx) => ( 
          <FooterOptions num={idx}/>
  ))}

    <div className="footerOptionsWrapper">
      <div className="footerOptionsTitle">DOWNLOAD OUR APP</div>
      <div className="downloadOptions">
        <img className="logoImg" src={playStoreLogo} alt="" />
        <img className="logoImg" src={appStoreLogo} alt="" />
      </div>
    </div>
      </div>
    </div>
  );
};

export default Footer;
