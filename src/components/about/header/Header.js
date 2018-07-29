import React from "react";
import Carousel from "./Carousel";
import PropTypes from "prop-types";

const Header = ({ fadeIn, opacity }) => (
  <div className="flex-parent">
    <div className="header-container">
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
