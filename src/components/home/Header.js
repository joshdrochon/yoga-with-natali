import React from "react";
import { Link } from "react-router-dom";

const Header = ({ fadeIn, opacity }) => (
  <div id="flex-parent-home">
    <style>
      {`
      #flex-parent-home{
        display: flex;
        overflow: hidden;
        position: relative;
      }
      #flex-img-c-home{
        width: 100%;
        height: max-content;
        max-height: 85vh;
        text-align: center;
        overflow: hidden;
      }

    `}
    </style>
    <div id="flex-img-c-home">
      <img
        onLoad={fadeIn}
        className="banner"
        style={{ opacity: opacity }}
        src={require("./../../assets/images/banners/banner_home.jpg")}
      />
    </div>
    <p>
      <Link className="tagline active" to="/practice">
        Your Journey Awaits
      </Link>
    </p>
  </div>
);

export default Header;
