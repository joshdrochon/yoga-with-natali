import React from "react";
import tasteTesting from "./../../assets/images/natali-in-bali.jpeg";

const styles = {
  flexParent: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: "70px",
    paddingBottom: "70px",
    position: "relative"
  },
  flexChildLeft: {
    maxWidth: "700px",
    height: "max-content",
    textAlign: "justify",
    margin: "10px",
    textJustify: "inter-word"
  },
  flexChildRight: {
    maxWidth: "700px",
    height: "max-content",
    textAlign: "center",
    margin: "10px",
    overflow: "hidden"
  },
  hr: {
    width: "80%",
    margin: "0px",
    position: "absolute",
    bottom: "0"
  }
};

const HomeView1 = () => (
  <div style={styles.flexParent}>
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
    <div style={styles.flexChildLeft}>
      <h2 className="article-heading">Get to know Natali</h2>
      <p className="body-text">
        Natali is a world traverer, yoga instructor and professional taste
        tester! Lorem ipsum dolor sit amet, vis id essent delenit impedit, ius
        ei impetus commune mandamus. Eam ut adhuc utinam. Cum an eius partiendo.
        No pro congue honestatis. Animal fastidii vel te, amet scriptorem ex
        vis, cum cu sale intellegat vituperatoribus. Lorem ipsum dolor sit amet,
      </p>
      <p className="body-text">
        impedit, ius ei impetus commune mandamus. Eam ut adhuc utinam. Cum an
        eius partiendo. No pro congue honestatis. Animal fastidii vel te, amet
        scriptorem ex vis, cum cu sale intellegat vituperatoribus. Lorem ipsum
        dolor sit amet, vis id essent delenit impedit, ius ei impetus commune
        mandamus. Eam ut adhuc utinam. Cum an eius partiendo. No pro congue
      </p>
      <p className="body-text">
        honestatis. Animal fastidii vel te, amet scriptorem ex vis, cum cu sale
        intellegat vituperatoribus. Lorem ipsum dolor sit amet, vis id essent
        delenit impedit, ius ei impetus commune mandamus. Eam ut adhuc utinam.
        Cum an eius partiendo. No pro congue honestatis. Animal fastidii vel te,
        amet scriptorem ex vis, cum cu sale intellegat vituperatoribus.
      </p>
    </div>
    <div style={styles.flexChildRight}>
      <img className="taste-testing" src={tasteTesting} />
    </div>
    <hr style={styles.hr} />
  </div>
);

export default HomeView1;
