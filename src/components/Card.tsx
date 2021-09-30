import React from "react";
import "./Card.css";
import iphone from "./../images/iphone.jpg";

const Card = () => {
  return (
    <div className="card">
      <div className="cardImageWrapper">
        <img className="cardImg" src={iphone} alt="" />
      </div>
      <div className="cardTextWrapper">
      <div className="cardTitle">
Iphone 13
      </div>
      <div className="cardPrice">
          $1000
      </div>
      </div>
    </div>
  );
};

export default Card;
