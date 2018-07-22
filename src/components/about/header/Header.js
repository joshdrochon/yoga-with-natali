import React from "react";
import Carousel from "./Carousel";
import PropTypes from "prop-types";

const styles = {
  flexParent: {
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    position: "relative"
  },
  flxImgC: {
    width: "100%",
    height: "max-content",
    maxHeight: "85vh",
    overflow: "hidden"
  }
};

const Header = ({ fadeIn, opacity }) => (
  <div style={styles.flexParent}>
    <div style={styles.flxImgC}>
      <Carousel fadeIn={fadeIn} opacity={opacity} />
    </div>
    <p className="tagline">ABOUT US</p>
  </div>
);

Header.propTypes = {
  fadeIn: PropTypes.func.isRequired,
  opacity: PropTypes.number.isRequired
};

export default Header;
