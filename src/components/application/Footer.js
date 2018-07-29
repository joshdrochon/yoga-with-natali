import React from "react";
import insta from "./../../assets/images/social/fb-icon.svg";
import fb from "./../../assets/images/social/insta-icon.svg";
import { fbLink } from "./Content.js";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <span className="copyright">YOGA WITH NATALI &#x24B8; 2018</span>
    <span className="icons">
      <a target="_blank" href={fbLink}>
        <img className="icon" src={fb} />
      </a>
      <a target="_blank" href="https://instagram.com">
        <img className="icon" src={insta} />
      </a>
    </span>
  </div>
);

export default Footer;
