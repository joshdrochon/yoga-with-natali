import React from "react";
import tasteTesting from "./../../assets/images/natali-in-bali.jpeg";

const HomeView1 = () => (
  <div className="flex-parent">
    <style>
      {`
        #show-quote{
          font-weight: lighter;
          font-family: cursive;
          font-type: italic;
        }
        .taste-testing{
          height: auto;
          width: 100%;
          vertical-align: middle;
        }
      `}
    </style>
    <div className="article">
      <h2 className="article-heading">Get to know Natali</h2>
      <span className="body-text-wrapper">
        <p>
          Natali is a world traverer, yoga instructor and professional taste
          tester! Lorem ipsum dolor sit amet, vis id essent delenit impedit, ius
          ei impetus commune mandamus. Eam ut adhuc utinam. Cum an eius
          partiendo. No pro congue honestatis. Animal fastidii vel te, amet
          scriptorem ex vis, cum cu sale intellegat vituperatoribus. Lorem ipsum
          dolor sit amet,
        </p>
        <p>
          impedit, ius ei impetus commune mandamus. Eam ut adhuc utinam. Cum an
          eius partiendo. No pro congue honestatis. Animal fastidii vel te, amet
          scriptorem ex vis, cum cu sale intellegat vituperatoribus. Lorem ipsum
          dolor sit amet, vis id essent delenit impedit, ius ei impetus commune
          mandamus. Eam ut adhuc utinam. Cum an eius partiendo. No pro congue
        </p>
        <p>
          honestatis. Animal fastidii vel te, amet scriptorem ex vis, cum cu
          sale intellegat vituperatoribus. Lorem ipsum dolor sit amet, vis id
          essent delenit impedit, ius ei impetus commune mandamus. Eam ut adhuc
          utinam. Cum an eius partiendo. No pro congue honestatis. Animal
          fastidii vel te, amet scriptorem ex vis, cum cu sale intellegat
          vituperatoribus.
        </p>
      </span>
    </div>
    <div className="flex-child">
      <img className="taste-testing" src={tasteTesting} />
    </div>
    <hr className="bottom-line" />
  </div>
);

export default HomeView1;
