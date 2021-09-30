import React from "react";
import TopAd from "./components/TopAd";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import "./App.css";
import Section from "./components/Section";
import BannerAd from "./components/BannerAd";

function App() {
  return (
    <>
      <TopAd />
      <div className="searchBarContainer">
        <SearchBar />
      </div>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="largeContainer">
          {/* <Carousel></Carousel> */}
          {/* mobile ad */}
          <BannerAd />
          <Section />
          <BannerAd />
          <Section />
          <BannerAd />
          <Section />
          <BannerAd />
          <Section />
          <BannerAd />
          <Section />
          <BannerAd />
          <Section />
        </div>
      </div>
    </>
  );
}

export default App;
