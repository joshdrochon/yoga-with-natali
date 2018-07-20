import React from "react";
import { scroller } from "./../../helpers";

const styles = {
  flexParent: {
    display: "flex",
    overflow: "hidden",
    position: "relative"
  },
  flxImgC: {
    width: "100%",
    height: "max-content",
    maxHeight: "85vh",
    textAlign: "center",
    overflow: "hidden"
  }
};

const Header = props => (
  <div style={styles.flexParent}>
    <div style={styles.flxImgC}>
      <img
        onLoad={props.fadeIn}
        className="banner"
        style={{ opacity: props.opacity }}
        alt="hands reaching out"
        src={require("./../../assets/images/contact/reach-out.jpg")}
      />
    </div>
    <p className="tagline active" onClick={() => scroller("contact-form")}>
      CONTACT US
    </p>
  </div>
);

export default Header;
