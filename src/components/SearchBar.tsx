import React from "react";
import "./SearchBar.css";
import PickabooLogo from "./../images/pickaboo-logo.png";

const SearchBar = () => {
  return (
      <>
    <div className="searchBar">
      <div className="logo">
        <img className="imgClass" src={PickabooLogo} alt="logo" />
      </div>
      <input type="text" className="input" placeholder="search entire store here..."/>
      <button className="inline-block btn"> My Cart</button>
      <button className="inline-block btn">Log in</button>
      <button className="inline-block btn">Register </button>
    </div>
    </>
  );
};

export default SearchBar;
