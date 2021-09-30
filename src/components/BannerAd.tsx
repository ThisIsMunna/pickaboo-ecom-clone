import React from "react";
import AdImg from "./../images/Ad.jpg"
import "./BannerAd.css"

const BannerAd = () => {
    return(
        <div className="bannerImgWrapper">
        <img className="bannerImg" src={AdImg} alt="" />
        </div>
    )
}

export default BannerAd;