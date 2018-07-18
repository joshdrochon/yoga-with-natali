import React from "react";

const styles = {
  flexParent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: "70px",
    paddingBottom: "70px",
    position: "relative"
  },
  flexChild: {
    width: "700px",
    height: "max-content",
    textAlign: "center",
    margin: "10px"
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
        .quote{
          font-weight: lighter;
        }
        .quote::before {
          content: '"';
        }
        .quote::after {
          content: '"';
        }
      `}
    </style>
    <div style={styles.flexChild}>
      <h2 className="shadow">Inspiration of the day...</h2>
      <h3 className="shadow quote" />
    </div>
    <hr style={styles.hr} />
  </div>
);

export default HomeView1;
