import React from "react";
import { content } from "./../application/Content.js";
import zen from "./../../assets/images/about/zen.jpg";

const AboutView2 = () => {
  return (
    <div id="wrapper-reverse" className="flex-parent">
      <style>
        {`
        #wrapper-reverse{
          flex-wrap: wrap-reverse;
        }
        #p-start{
          font-family: cursive;
          line-height: 0px;
          font-size: 22px;
        }
        #envelope h4{
          font-weight: lighter;
          letter-spacing: 2px;
        }
        @media(max-width: 700px){
          #envelope{
            padding: 2px;
            text-align: justify;
            text-justify: inter-word;
          }
        }
      `}
      </style>
      <article className="flex-child">
        <span id="envelope">
          <p className="body-text">
            <span id="p-start">Natali</span>
            {content.about.p1}
          </p>
          <br />
          <p className="body-text">{content.about.p2}</p>
          <br />
          <p className="body-text">{content.about.p3}</p>
          <br />
        </span>
      </article>
      <div className="flex-child">
        <img src={zen} alt="zen" />
        <h3>
          "The more you are motivated by love, the more fearless and free your
          action will be."
        </h3>
        <br />
        <h3>
          <em> ― Dalai Lama</em>
        </h3>
      </div>
      <hr className="bottom-line" />
    </div>
  );
};

export default AboutView2;
