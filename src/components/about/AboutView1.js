import React from "react";
import burningIncense from "../../assets/images/about/incense.jpg";

const AboutView1 = () => (
  <div className="flex-parent">
    <div className="flex-child">
      <h2>Explore. Live. Breathe</h2>
      <br />
      <hr />
      <br />
      <h3>
        <em>
          “Love and compassion are necessities, not luxuries. Without them,
          humanity cannot survive.” ― Dalai Lama
        </em>
      </h3>
    </div>
    <div className="flex-child">
      <img id="burning-incense" src={burningIncense} />
    </div>
    <hr id="incense" className="bottom-line" />
  </div>
);

export default AboutView1;
