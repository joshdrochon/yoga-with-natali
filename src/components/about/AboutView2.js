import React from "react";
import { content } from "./../application/Content.js";
import zen from "./../../assets/images/about/zen.jpg";

const AboutView2 = () => (
  <div className="flex-parent reverse">
    <div className="article">
      <span className="body-text-wrapper">
        <p>{content.about.p1}</p>
        <p>{content.about.p2}</p>
        <p>{content.about.p3}</p>
      </span>
    </div>
    <div className="flex-child">
      <img src={zen} alt="zen" />
      <h3>
        "The more you are motivated by love, the more fearless and free your
        action will be."
      </h3>
      <h3>
        <em> ― Dalai Lama</em>
      </h3>
    </div>
    <hr className="bottom-line" />
  </div>
);

export default AboutView2;
