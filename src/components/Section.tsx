import React from "react";
import Card from "./Card";
import "./Section.css"

const Section = () => {
  return (
    <div className="section">
      <div className="sectionTitle">
        <span>MOBILE</span>
      </div>
      <div className="cardContainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Section;