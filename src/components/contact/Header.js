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

const Header = ({ opacity, fadeIn }) => (
  <div style={styles.flexParent}>
    <div style={styles.flxImgC}>
      <img
        onLoad={fadeIn}
        className="banner"
        style={{ opacity: opacity }}
        alt="hands reaching out"
        src={require("./../../assets/images/contact/reach-out.jpg")}
      />
    </div>
    <p
      id="contact-tagline"
      className="tagline active"
      onClick={e => scroller(e, "contact-form")}
    >
      CONTACT US
    </p>
  </div>
);

export default Header;
